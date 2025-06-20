import hashlib
import shutil
from collections import defaultdict
from pathlib import Path
from typing import Dict, Optional, Any
from urllib.parse import urlparse

from app.log import logger
from app.plugins import _PluginBase
from app.plugins.seedcleaner.DataModel import *
from app.plugins.seedcleaner.DefinedConsts import *
from app.plugins.seedcleaner.JsonHandler import JsonHandler
from app.plugins.seedcleaner.QbittorrentHandler import QbittorrentHandler
from app.plugins.seedcleaner.TransmissionHandler import TransmissionHandler


class SeedCleaner(_PluginBase):
    # 插件名称
    plugin_name = "种子清理工"
    # 插件描述
    plugin_desc = "清理transmission/qbittorrent种子和源文件"
    # 插件图标
    plugin_icon = "delete.png"
    # 插件版本
    plugin_version = "1.2.5"
    # 插件作者
    plugin_author = "weni09"
    # 作者主页
    author_url = "https://github.com/weni09/MoviePilot-Plugins"
    # 插件配置项ID前缀
    plugin_config_prefix = "seedcleaner_"
    # 加载顺序
    plugin_order = 20
    # 可使用的用户级别
    auth_level = 1

    _config: ConfigModel = ConfigModel()
    torrent_info_dict: Dict[str, TorrentModel] = {}

    def init_plugin(self, config: dict = None):
        if config:
            self._config = ConfigModel(**config)
            logger.info(f"初始化配置_config: {self._config}")

    def get_state(self) -> bool:
        return self._config.enable

    # --- Instance methods for API endpoints ---
    def _get_config(self) -> ConfigModel:
        """API Endpoint: Returns current plugin configuration."""
        return self._config

    def _get_status(self) -> Dict[str, Any]:
        """API Endpoint: Returns current plugin status and history."""
        return {
            "enabled": self._config.enable
        }

    def save_config(self, config_payload: ConfigModel) -> ResponseModel:
        """API Endpoint: Saves plugin configuration. Expects a dict payload."""
        logger.debug(f"{self.plugin_name}: 收到配置保存请求: {config_payload}")
        try:
            self._config = config_payload
            # 保存配置
            self.update_config(self._config.dict())
            # 重新初始化插件
            self.init_plugin(self.get_config())
            logger.info(
                f"{self.plugin_name}: 配置已保存并通过 init_plugin 重新初始化。"
                f"当前内存状态: enable={self._config.enable}")
            # 返回最终状态
            return ResponseSuccessModel(message="配置保存成功")
        except Exception as e:
            logger.error(f"{self.plugin_name}: 保存配置时发生错误: {e}", exc_info=True)
            return ResponseFailedModel(message=f"配置保存失败: {e}")

    def get_form(self) -> Tuple[Optional[List[dict]], Dict[str, Any]]:
        """Returns None for Vue form, but provides initial config data."""
        # This dict is passed as initialConfig to Config.vue by the host
        return None, self._get_config().dict()

    def get_page(self) -> Optional[List[dict]]:
        """Vue mode doesn't use Vuetify page definitions."""
        return None

    def get_api(self) -> List[Dict[str, Any]]:
        """Defines API endpoints accessible via props.api in Vue components."""
        return [
            {
                "path": "/config",
                "endpoint": self._get_config,
                "methods": ["GET"],
                "auth": "bear",
                "summary": "获取当前配置"
            },
            {
                "path": "/config",
                "endpoint": self.save_config,
                "methods": ["POST"],
                "auth": "bear",
                "summary": "保存配置"
            },
            {
                "path": "/scan",
                "endpoint": self.start_scan,
                "methods": ["POST"],
                "auth": "bear",
                "summary": "根据条件扫描种子"
            },
            {
                "path": "/clear",
                "endpoint": self.start_clear,
                "methods": ["POST"],
                "auth": "bear",
                "summary": "清理种子和文件"
            },
            {
                "path": "/downloader",
                "endpoint": self.get_downloader_config,
                "methods": ["GET"],
                "auth": "bear",
                "summary": "获取下载器配置"
            },
        ]

    @staticmethod
    def get_render_mode() -> Tuple[str, Optional[str]]:
        """Declare Vue rendering mode and assets path."""
        return "vue", "dist/assets"

    # --- Other Base Methods ---
    @staticmethod
    def get_command() -> List[Dict[str, Any]]:
        return []  # No commands defined for this plugin

    def stop_service(self):
        logger.info(f"{self.plugin_name} 停止服务,当前插件无后台服务....")
        return

    def get_downloader_config(self, config_type: str = ALL_SELECTED) -> DownloaderModel:
        """
        获取系统下载器
        """
        try:
            res = DownloaderModel()
            if config_type == DOWNLOADER_CONFIG_TYPE_SYSTEM:
                system_downloaders = self.systemconfig.get("Downloaders")
                if not system_downloaders:
                    return res
                logger.debug(f"system_downloaders: {system_downloaders}")
                for downloader in system_downloaders:
                    host_str = downloader['config'].get("host", "localhost:80")
                    if not host_str.startswith(("http://", "https://")):
                        host_str = "http://" + host_str
                    url = urlparse(host_str)
                    if not url.hostname or not url.port:
                        continue
                    res.system.append(DownloaderInfoModel(
                        name=downloader.get("name", ""),
                        type=downloader.get("type", ""),
                        host=url.scheme + "://" + url.hostname,
                        port=url.port,
                        username=downloader['config'].get("username", ""),
                        password=downloader['config'].get("password", ""),
                    ))
            elif config_type == DOWNLOADER_CONFIG_TYPE_CUSTOM:
                res.custom = self._config.downloaders.custom
            else:
                res.system = self._config.downloaders.system
                res.custom = self._config.downloaders.custom
            return res
        except Exception as e:
            logger.error(f"获取系统下载器配置失败:{e}", exc_info=True)

    @staticmethod
    def _get_path_list(path_str: str = "", sep=";") -> List[Path]:
        path_str_list = path_str.split(sep)
        return [Path(path) for path in path_str_list if path]

    @staticmethod
    def _generate_index_hash(info: TorrentModel) -> str:
        """
            索引计算，用作惟一性判断
            根据 total_size, name, file_count, first_file, end_file 计算 hash 值
        """
        fields = [
            str(info.total_size),
            str(info.name),
            str(info.file_count),
            str(info.first_file),
            str(info.end_file),
        ]
        combined = "|".join(fields)
        return hashlib.sha1(combined.encode("utf-8")).hexdigest().lower()

    def get_download_list(self) -> List[DownloaderInfoModel]:
        downloaders = self._config.downloaders
        all_downloaders = downloaders.system + downloaders.custom
        url_list = []
        res: List[DownloaderInfoModel] = []
        if not all_downloaders:
            return []
        for downloader in all_downloaders:
            url = f"{downloader.host}:{downloader.port}"
            if url not in url_list:
                res.append(downloader)
                url_list.append(url)
        return res

    def add_index_for_torrents(self):
        logger.info(f"为所有种子添加索引")
        for _, value in self.torrent_info_dict.items():
            if not value.index:
                value.index = self._generate_index_hash(value)

    def scan_all_torrents_by_downloader(self):  # 扫描所有种子信息从下载器中
        downloader_list = self.get_download_list()
        for dl in downloader_list:
            try:
                if dl.type == TRANSMISSION:
                    downloader = TransmissionHandler(dl.name)
                else:
                    downloader = QbittorrentHandler(dl.name)
                if not downloader.connect(dl.host, dl.port, dl.username, dl.password):
                    continue
                self.torrent_info_dict = self.torrent_info_dict | downloader.build_torrent_list()
                downloader.disconnect()
            except Exception as e:
                raise Exception(f"{dl.name} 扫描种子失败：{e}")
        self.add_index_for_torrents()
        save_path = self.get_data_path() / TORRENT_INFO_FILE_NAME
        logger.info(f"扫描种子信息完成,开始保存,保存路径:{save_path}")
        json_handler = JsonHandler(save_path)
        _save_torrent_info = {
            k: v.dict() for k, v in self.torrent_info_dict.items()
        }
        json_handler.save_to_json(_save_torrent_info)

    def _is_exclude_path(self, path: str):
        exclude_path_list = self._get_path_list(self._config.exclude_paths)
        if not Path(path).exists():
            return True
        for exclude_path in exclude_path_list:
            if not exclude_path.exists():
                continue
            if str(exclude_path) in path:
                return True
            elif exclude_path.is_symlink():
                return True
            elif exclude_path.stat().st_nlink > 1:
                return True
            else:
                continue
        return False

    @staticmethod
    def _generate_mission_file_hash(p: Path) -> str:
        """
            缺失文件索引计算，用作ID
            根据 name,size,path  计算 hash 值
        """
        info = {
            "name": str(p.name),
            "size": str(p.stat().st_size),
            "path": str(p),
        }
        fields = [
            str(info["name"]),
            str(info["path"]),
            str(info["size"])
        ]
        combined = "|".join(fields)
        return hashlib.sha1(combined.encode("utf-8")).hexdigest().lower()

    def find_extra_data_list(self) -> List[Dict[str, Any]]:
        """
            找出有数据文件，但是不存在种子文件的数据文件路径
        :return:
        """
        # 1. 去重汇总 save_path
        save_path_list = []
        for record in self.torrent_info_dict.values():
            save_path = record.save_path
            if save_path:
                save_path_list.append(Path(save_path))
        if self._config.extra_dir_paths:  # 设置了额外的目录
            extra_dirs = self._get_path_list(self._config.extra_dir_paths)
            save_path_list = list(set(save_path_list + extra_dirs))
        # 2. 收集 data_list（save_path 下第一层目录/文件）
        data_list = []
        for sp in save_path_list:
            if not sp.exists() or not sp.is_dir():
                continue
            for item in sp.iterdir():
                if self._is_exclude_path(str(item)):
                    continue
                if item.is_dir() or item.suffix.lower() in VIDEO_SUFFIX_LIST:  # 可扩展视频类型
                    data_list.append(item)

        # 3. 构造预期的数据路径集合 expected_paths = save_path + name
        expected_paths = set()
        for record in self.torrent_info_dict.values():
            save_path = Path(record.save_path)
            name = record.name
            if save_path and name:
                expected_path = save_path / name
                expected_paths.add(expected_path)

        # 4. 找出 data_list 中存在但不在 expected_paths 中的路径
        extra_paths = [p for p in data_list if p not in expected_paths]
        # 5、获取文件（夹）名和大小
        missing_torrent_file_list = [
            MissingTorrentFileModel(
                type="file",
                name=p.name,
                size=p.stat().st_size,
                path=str(p),
                hash=self._generate_mission_file_hash(p)
            ).dict() for p in extra_paths
        ]
        logger.info(f"获取到缺失种子的文件数：{len(missing_torrent_file_list)}")
        return missing_torrent_file_list

    def get_all_torrent_info(self, search_info: SearchModel) -> dict:
        """
          获取所有种子信息
          如果从存量从获取，存量数据有则直接用存量数据，没有则扫描
        """
        save_path = self.get_data_path() / TORRENT_INFO_FILE_NAME
        json_handler = JsonHandler(save_path)
        try:
            json_dict = json_handler.load_from_json()
            if search_info.existingSeedData and json_dict:
                logger.info(f"从存量数据获取种子信息: {len(json_dict)}")
                for key, value in json_dict.items():
                    self.torrent_info_dict[key] = TorrentModel(**value)
            else:
                self.scan_all_torrents_by_downloader()
            return self.torrent_info_dict
        except Exception as e:
            logger.error(f"获取所有种子信息错误: {e}")
            raise e

    def get_unique_index_torrents(self) -> dict:
        """
        查找 index 值在整个 file_info_dict 中唯一的种子信息
        :return: {info_hash: torrent_info} 的子集
        """
        # 1. 统计每个 index 出现的次数
        index_count = defaultdict(int)
        for info_hash, record in self.torrent_info_dict.items():
            index = record.index
            if index:
                index_count[index] += 1

        # 2. 筛选出 index 只出现一次的记录
        unique_torrents = {}
        for info_hash, record in self.torrent_info_dict.items():
            index = record.index
            if index and index_count[index] == 1:
                unique_torrents[info_hash] = record
        return unique_torrents

    def start_scan(self, search_info: SearchModel, page: int = 1, limit: int = 50,
                   pageChange: bool = False, pageSizeChange: bool = False) -> ResponseModel:
        logger.info(f"开始扫描,扫描参数:{search_info.dict()},page:{page},limit:{limit},pageChange:{pageChange}")
        try:
            if pageChange or pageSizeChange:
                torrent_all_info = self.torrent_info_dict
            else:
                torrent_all_info = self.get_all_torrent_info(search_info)
            logger.info(f"获取到所有种子信息: {torrent_all_info.values().__len__()}")
        except Exception as e:
            logger.error(f"{e}")
            return ResponseFailedModel(message="获取种子信息失败")
        if search_info.missingOptions.seed:
            missingFiles = self.find_extra_data_list()
        else:
            missingFiles = []
        res_dict = {}
        res_list = []
        unique_torrents = {}
        if search_info.auxOption != ALL_SELECTED:  # 辅种选项不等于全部
            unique_torrents = self.get_unique_index_torrents()
        for key, torrent_info in torrent_all_info.items():
            if search_info.missingOptions.file:
                if torrent_info.data_missing:
                    res_dict[key] = torrent_info
            elif not search_info.missingOptions.seed and not search_info.missingOptions.file:
                res_dict[key] = torrent_info
            if search_info.auxOption == NO_AUX:  # 无辅，删除不唯一的种子
                if key not in unique_torrents.keys() and key in res_dict.keys():
                    res_dict.pop(key)
            if search_info.auxOption == HAS_AUX:  # 有辅，删除唯一种子
                if key in unique_torrents.keys() and key in res_dict.keys():
                    res_dict.pop(key)
            if search_info.trackerInput:
                tracker_list = search_info.trackerInput.split(";")
                if not self._is_tracer_match(torrent_info, tracker_list) and key in res_dict.keys():
                    res_dict.pop(key)
            if len(res_dict) > 0 and key in res_dict.keys():
                value = res_dict[key]
                try:
                    res_list.append({
                        "type": "torrent",
                        "client": value.client,
                        "client_name": value.client_name,
                        "data_missing": value.data_missing,
                        "trackers": value.trackers,
                        "hash": value.hash,
                        "size": int(value.total_size) or 0,
                        "name": value.name,
                        "removeOption": search_info.removeOption  # 种子信息添加删除选项
                    })
                except AttributeError as e:
                    logger.error(f"处理种子信息出错: {key}")
                    continue
        # 结构统一化
        combined = res_list + missingFiles
        total = len(combined)
        combined.sort(key=lambda x: x.get("hash", "").lower())
        paginated_combined = combined[(page - 1) * limit: page * limit]
        logger.info(f"扫描结果数量: {len(combined)}, 返回第 {page} 页")
        res = {
            "combined_list": paginated_combined,
            "total": total,
            "t_total": len(res_list),
            "m_total": len(missingFiles),
            "page": page,
            "page_size": limit
        }
        return ResponseSuccessModel(message="扫描成功", data=res)

    def _is_tracer_match(self, torrent_info: TorrentModel, tracker_list: List[str]) -> bool:
        """
        判断种子的 Tracker 是否匹配 tracker_list 中的任意一个
        :param torrent_info: 种子信息
        :param tracker_list: tracker 列表
        :return: 是否匹配
        """
        if not torrent_info.trackers:
            return False
        for tracker in tracker_list:
            if tracker in torrent_info.trackers:
                return True
        return False

    @staticmethod
    def delete_file_by_path(path: Path):
        """
        删除文件
        :param path: 文件(夹)路径
        """
        if not path.exists():
            logger.warning(f"缺失种子: {str(path)} 文件(夹)不存在")
            return True
        try:
            if path.is_file():
                path.unlink()  # 删除文件
                logger.info(f"缺失种子: 已删除源文件成功: {path}")
            elif path.is_dir():
                shutil.rmtree(path)  # 递归删除非空目录
                logger.info(f"缺失种子: 删除文件夹成功: {path}")
            return True
        except Exception as e:
            logger.error(f"缺失种子: 删除文件(夹)失败: {e}")
            return False

    def get_downloader_by_name(self, name: str):
        """
            根据下载器名称获取下载器配置信息
        """
        downloader_list = self._config.downloaders.system + self._config.downloaders.custom
        for downloader in downloader_list:
            if downloader.name == name:
                return downloader
        return

    def start_clear(self, clear_info_list: List[ClearModel]):
        logger.info(f"开始清理,预清理个数:{len(clear_info_list)}")
        will_delete_torrent_dict = {}  # key为下载器名称，value为种子信息列表
        will_delete_file_list = []
        for clear_info in clear_info_list:  # 遍历所有清理信息,按下载器名和删除选项分类
            if clear_info.type == "torrent":
                if not will_delete_torrent_dict.get(clear_info.client_name):
                    will_delete_torrent_dict[clear_info.client_name] = {}
                if not will_delete_torrent_dict[clear_info.client_name].get(clear_info.removeOption):
                    will_delete_torrent_dict[clear_info.client_name][clear_info.removeOption] = []
                will_delete_torrent_dict[clear_info.client_name][clear_info.removeOption].append(clear_info.hash)
            elif clear_info.type == "file":
                will_delete_file_list.append(Path(clear_info.path))
        logger.debug(f"Will delete torrents: {will_delete_torrent_dict}; Will delete files: {will_delete_file_list}")
        for downloader_name, clear_options in will_delete_torrent_dict.items():  # 按下载器批量删除种子
            downloader_info = self.get_downloader_by_name(downloader_name)
            if downloader_info.type == QBITTORRENT:
                downloader = QbittorrentHandler(downloader_name)
            else:
                downloader = TransmissionHandler(downloader_name)
            downloader.connect(downloader_info.host, downloader_info.port, downloader_info.username,
                               downloader_info.password)
            for removeOption, hash_list in clear_options.items():
                if not downloader.delete_torrent(hash_list, removeOption == ALL_SELECTED):
                    downloader.disconnect()  # 断开连接
                    return ResponseFailedModel(message="清理失败")
            downloader.disconnect()  # 断开连接
        for file_path in will_delete_file_list:  # 删除文件，仅对缺少种子的源文件进行删除
            if self.delete_file_by_path(file_path):
                continue
            else:
                return ResponseFailedModel(message="清理失败")
        return ResponseSuccessModel(message="清理完成")
