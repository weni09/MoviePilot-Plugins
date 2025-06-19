import hashlib
import json
import shutil
from collections import defaultdict
from copy import deepcopy
from pathlib import Path
from typing import List, Dict, Any, Tuple, Optional, Iterable
from urllib.parse import urlparse

from app.plugins import _PluginBase
from app.log import logger
from pydantic import BaseModel, Field
import bencodepy
from app.plugins.seedcleaner.DefinedConsts import *
from app.plugins.seedcleaner.DataModel import (ConfigModel, TorrentInfoModel, SearchModel, ClearModel)
from app.plugins.seedcleaner.JsonHandler import JsonHandler


class SeedCleaner(_PluginBase):
    # 插件名称
    plugin_name = "种子清理工"
    # 插件描述
    plugin_desc = "清理transmission/qbittorrent种子和源文件"
    # 插件图标
    plugin_icon = "delete.jpg"
    # 插件版本
    plugin_version = "1.1.1"
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
    torrent_info_dict: Dict[str, Any] = {}
    unique_torrents: Dict[str, Any] = {}

    def init_plugin(self, config: dict = None):
        if config:
            self._config = ConfigModel(**config)
            logger.debug(f"初始化配置>>_config: {self._config}")

    def get_state(self) -> bool:
        return self._config.enable

    # --- Instance methods for API endpoints ---
    def _get_config(self) -> Dict[str, Any]:
        """API Endpoint: Returns current plugin configuration."""
        return self._config.dict()

    def _get_status(self) -> Dict[str, Any]:
        """API Endpoint: Returns current plugin status and history."""
        return {
            "enabled": self._config.enable
        }

    def _save_config(self, config_payload: dict) -> Dict[str, Any]:
        """API Endpoint: Saves plugin configuration. Expects a dict payload."""
        logger.debug(f"{self.plugin_name}: 收到配置保存请求: {config_payload}")
        try:
            self._config = ConfigModel(**config_payload)
            # 保存配置
            self.update_config(self._config.dict())
            # 重新初始化插件
            self.init_plugin(self.get_config())
            logger.info(
                f"{self.plugin_name}: 配置已保存并通过 init_plugin 重新初始化。当前内存状态: enable={self._config.enable}")
            # 返回最终状态
            return {"message": "配置保存成功", "saved_config": self._get_config()}
        except Exception as e:
            logger.error(f"{self.plugin_name}: 保存配置时发生错误: {e}", exc_info=True)
            return {"message": f"配置保存失败: {e}", "error": True, "saved_config": self._get_config()}

    def get_form(self) -> Tuple[Optional[List[dict]], Dict[str, Any]]:
        """Returns None for Vue form, but provides initial config data."""
        # This dict is passed as initialConfig to Config.vue by the host
        return None, self._get_config()

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
                "endpoint": self._save_config,
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
        logger.info(f"{self.plugin_name} 停止服务,当前插件无后台服务...")

    @staticmethod
    def _get_path_list(path_str: str = "", sep=";") -> List[Path]:
        path_str_list = path_str.split(sep)
        return [Path(path) for path in path_str_list if path]

    def _get_tracker_domains(self, data: Iterable):
        announce = data.get(b'announce')
        announce_list = data.get(b'announce-list', [])

        trackers = set()

        def _get_domain(url):
            try:
                parsed = urlparse(url)
                if parsed.hostname:
                    return parsed.hostname
                else:
                    return ""
            except Exception as e:
                return ""

        if announce:
            domain = _get_domain(announce.decode())
            trackers.add(domain)
        if announce_list:
            for tier in announce_list:
                if isinstance(tier, list):
                    for url in tier:
                        domain = _get_domain(url.decode())
                        trackers.add(domain)
                else:
                    domain = _get_domain(url.decode())
                    trackers.add(domain)
        return list(trackers)

    def _get_info_from_torrent(self, torrent_path: Path) -> dict:
        torrent_info = {"info_hash": "",
                        "total_size": "",
                        "name": "",
                        "piece_length": 0,
                        "file_num": 0,
                        "first_file": [],
                        "end_file": [],
                        "trackers": []
                        }
        try:
            with torrent_path.open('rb') as f:
                data = bencodepy.decode(f.read())
            trackers = self._get_tracker_domains(data)
            torrent_info["trackers"] = trackers
            info = data[b'info']
            encoded_info = bencodepy.encode(info, encoding="utf-8")
            torrent_info["info_hash"] = hashlib.sha1(encoded_info).hexdigest()
            # 总大小
            files = []
            if b'files' in info:
                torrent_info["total_size"] = sum(f[b'length'] for f in info[b'files'])
                for file in info[b'files']:
                    path = "/".join(p.decode() for p in file[b'path'])
                    files.append((path, file[b'length']))
            else:
                torrent_info["total_size"] = info[b'length']
                files.append((info[b'name'].decode(), info[b'length']))
            torrent_info["file_num"] = len(files)
            files.sort(key=lambda x: x[0] + str(x[1]))
            torrent_info["first_file"] = list(files[0])
            torrent_info["end_file"] = list(files[-1])
            # 种子名称
            torrent_info["name"] = info[b'name'].decode('utf-8', errors='ignore')
            torrent_info["piece_length"] = info[b'piece length']
        except Exception as e:
            logger.error(f"[ERROR] 解析种子失败 {torrent_path}: {e}")
        return torrent_info

    def _parse_resume_file(self, resume_path: Path, client: str) -> Path | None:
        try:
            with resume_path.open('rb') as f:
                data = bencodepy.decode(f.read())
            if client == DOWNLOADER_CONFIG["QB_NAME"] and b'save_path' in data:
                return Path(data[b'save_path'].decode('utf-8'))
            if client == DOWNLOADER_CONFIG["TR_NAME"] and b'destination' in data:
                return Path(data[b'destination'].decode('utf-8'))
        except Exception as e:
            logger.warning(f"[WARN] 读取resume文件失败 {resume_path}: {e}")
        return

    def _generate_index_hash(self, info: dict) -> str:
        """
            索引计算，用作惟一性判断
            根据 total_size, name, piece_length, file_num, first_file, end_file 计算 hash 值
        """
        fields = [
            str(info["total_size"]),
            str(info["name"]),
            str(info["file_num"]),
            str(info["first_file"]),
            str(info["end_file"]),
        ]
        combined = "|".join(fields)
        return hashlib.sha1(combined.encode("utf-8")).hexdigest()

    def scan_torrent_resume_file(self):
        def _do_scan(torrent_dir: Path, resume_dir: Path, client: str):
            for torrent_path in torrent_dir.glob("*.torrent"):
                if not torrent_path.exists():
                    continue
                torrent_info = self._get_info_from_torrent(torrent_path)
                if not torrent_info["info_hash"]:
                    continue
                if client == DOWNLOADER_CONFIG["QB_NAME"]:
                    resume_path = torrent_path.with_suffix(DOWNLOADER_CONFIG["QB_RESUME_SUFFIX"])
                if client == DOWNLOADER_CONFIG["TR_NAME"]:
                    resume_path = resume_dir / (torrent_path.stem + DOWNLOADER_CONFIG["TR_RESUME_SUFFIX"])
                save_path = self._parse_resume_file(resume_path, client) if resume_path.exists() else None
                data_path = save_path / torrent_info["name"]
                torrent_info_all = {
                                       "client": client,
                                       "torrent_path": str(torrent_path),
                                       "resume_path": str(resume_path) if resume_path.exists() else "",
                                       "save_path": str(save_path),
                                       "data_missing": not data_path.exists()
                                   } | torrent_info
                torrent_info_all["index"] = self._generate_index_hash(torrent_info)
                self.torrent_info_dict[torrent_info["info_hash"]] = torrent_info_all

        self.torrent_info_dict = {} # 每次执行扫描前置空
        if self._config.qbittorrent_paths:
            qb_path_list = self._get_path_list(self._config.qbittorrent_paths)
            for qb_torrent_dir in qb_path_list:
                if qb_torrent_dir.exists():
                    qb_resume_dir = qb_torrent_dir
                    _do_scan(qb_torrent_dir, qb_resume_dir, DOWNLOADER_CONFIG["QB_NAME"])
        if self._config.transmission_paths:
            tr_path_list = self._get_path_list(self._config.transmission_paths)
            for tr_torrent_dir in tr_path_list:
                tr_resume_dir = tr_torrent_dir.parent / "resume"
                if tr_resume_dir.exists() and tr_torrent_dir.exists():
                    _do_scan(tr_torrent_dir, tr_resume_dir, DOWNLOADER_CONFIG["TR_NAME"])

        save_path = self.get_data_path() / TORRENT_INFO_FILE_NAME
        logger.info(f"扫描种子信息完成,开始保存,保存路径:{save_path}")
        json_handler = JsonHandler(save_path)
        json_handler.save_to_json(self.torrent_info_dict)

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
            elif exclude_path.stat().st_nlin > 1:
                return True
            else:
                continue
        return False

    def _generate_mission_file_hash(self, p: Path) -> str:
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
        return hashlib.sha1(combined.encode("utf-8")).hexdigest()

    def find_extra_data_list(self) -> List[dict]:
        """
            找出有数据文件，但是不存在种子文件的数据文件路径
        :return:
        """
        # 1. 去重汇总 save_path
        save_path_set = set()
        for record in self.torrent_info_dict.values():
            save_path = record.get("save_path")
            if save_path:
                save_path_set.add(Path(save_path))
        save_path_list = list(save_path_set)
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
            save_path = Path(record.get("save_path", ""))
            name = record.get("name")
            if save_path and name:
                expected_path = save_path / name
                expected_paths.add(expected_path)

        # 4. 找出 data_list 中存在但不在 expected_paths 中的路径
        extra_paths = [p for p in data_list if p not in expected_paths]
        # 5、获取文件（夹）名和大小
        extra_data_list = [
            {"type": "file", "name": p.name, "size": p.stat().st_size, "path": str(p),
             "hash": self._generate_mission_file_hash(p)} for
            p in extra_paths]
        return extra_data_list

    def get_all_torrent_info(self, search_info: SearchModel) -> dict:
        """
          获取所有种子信息
          如果从存量从获取，存量数据有则直接用存量数据，没有则扫描
        """
        save_path = self.get_data_path() / TORRENT_INFO_FILE_NAME
        json_handler = JsonHandler(save_path)
        if search_info.existingSeedData and json_handler.load_from_json():
            logger.info(f"从存量数据获取种子信息")
            self.torrent_info_dict = json_handler.load_from_json()
        else:
            self.scan_torrent_resume_file()
        return self.torrent_info_dict

    def get_unique_index_torrents(self) -> dict:
        """
        查找 index 值在整个 file_info_dict 中唯一的种子信息
        :return: {info_hash: torrent_info} 的子集
        """
        if len(self.unique_torrents) > 0:
            return self.unique_torrents
        # 1. 统计每个 index 出现的次数
        index_count = defaultdict(int)
        for info_hash, record in self.torrent_info_dict.items():
            index = record.get("index")
            if index:
                index_count[index] += 1

        # 2. 筛选出 index 只出现一次的记录
        for info_hash, record in self.torrent_info_dict.items():
            index = record.get("index")
            if index and index_count[index] == 1:
                self.unique_torrents[info_hash] = record
        return self.unique_torrents

    def start_scan(self, search_info: SearchModel, page: int = 1, limit: int = 100, pageChange: bool = False) -> dict:
        logger.info(f"开始扫描,扫描参数:{search_info.dict()},page:{page},limit:{limit},pageChange:{pageChange}")
        if pageChange:
            torrent_all_info = self.torrent_info_dict
        else:
            torrent_all_info = self.get_all_torrent_info(search_info)
        logger.info(f"获取到所有种子信息: {torrent_all_info.values().__len__()}")
        if search_info.missingOptions.seed:
            missingFiles = self.find_extra_data_list()
        else:
            missingFiles = []
        res_dict = {}
        self.unique_torrents = {}
        for key, torrent_info in torrent_all_info.items():
            torrent_info["removeOption"] = search_info.removeOption  # 种子信息添加删除选项
            if search_info.missingOptions.file:
                if torrent_info["data_missing"]:
                    res_dict[key] = torrent_info
            elif not search_info.missingOptions.seed and not search_info.missingOptions.file:
                res_dict[key] = torrent_info
            if search_info.auxOption == NO_AUX:  # 无辅，删除不唯一的种子
                unique_torrents = self.get_unique_index_torrents()
                if key not in unique_torrents.keys() and key in res_dict.keys():
                    res_dict.pop(key)
            if search_info.auxOption == HAS_AUX:  # 有辅，删除唯一种子
                unique_torrents = self.get_unique_index_torrents()
                if key in unique_torrents.keys() and key in res_dict.keys():
                    res_dict.pop(key)
            if search_info.trackerInput:
                tracker_list = search_info.trackerInput.split(";")
                if not self._is_tracer_match(TorrentInfoModel(**torrent_info), tracker_list) and key in res_dict.keys():
                    res_dict.pop(key)
            if len(res_dict) > 0 and key in res_dict.keys():
                value = deepcopy(res_dict[key])
                try:
                    res_dict[key] = {
                        "type": "torrent",
                        "client": value.get("client", ""),
                        "data_missing": value.get("data_missing", False),
                        "hash": value.get("info_hash", ""),
                        "size": int(value.get("total_size", "0")) or 0,
                        "name": value.get("name", ""),
                        "removeOption": value.get("removeOption", ALL_SELECTED),
                    }
                except AttributeError as e:
                    logger.error(f"处理种子信息出错: {key}")
                    continue

        # 结构统一化
        combined = list(res_dict.values()) + missingFiles
        total = len(combined)
        combined.sort(key=lambda x: x.get("hash", "").lower())
        paginated_combined = combined[(page - 1) * limit: page * limit]
        logger.info(f"扫描结果数量: {len(combined)}, 返回第 {page} 页")
        res = {
            "combined_list": paginated_combined,
            "total": total,
            "t_total": len(res_dict),
            "m_total": len(missingFiles),
            "page": page,
            "page_size": limit
        }
        # logger.debug(f"返回结果: {res}")
        return res

    def _is_tracer_match(self, torrent_info: TorrentInfoModel, tracker_list: List[str]) -> bool:
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

    def start_clear(self, clear_info_list: List[ClearModel]):
        logger.info(f"开始清理,预清理个数:{len(clear_info_list)}")
        delete_path_set = set()
        for clear_info in clear_info_list:
            if clear_info.type == "torrent":
                torrent_info = self.torrent_info_dict.get(clear_info.hash)
                resume_path = Path(torrent_info.get("resume_path"))
                torrent_path = Path(torrent_info.get("torrent_path"))
                file_path = Path(torrent_info.get("save_path")) / torrent_info.get("name")
                if clear_info.removeOption == ONLY_TORRENT:
                    delete_path_set.add(resume_path)
                    delete_path_set.add(torrent_path)
                elif clear_info.removeOption == ONLY_DATA and not torrent_info.get("data_missing"):
                    delete_path_set.add(file_path)
                elif clear_info.removeOption == ALL_SELECTED:
                    delete_path_set.add(resume_path)
                    delete_path_set.add(torrent_path)
                    if not torrent_info.get("data_missing"):
                        delete_path_set.add(file_path)
            elif clear_info.type == "file":
                delete_path_set.add(Path(clear_info.path))
        logger.info(f"删除路径数: {len(delete_path_set)}")
        for path in delete_path_set:
            if path.exists():
                try:
                    if path.is_file():
                        path.unlink()  # 删除文件
                        logger.info(f"删除文件成功: {path}")
                    elif path.is_dir():
                        shutil.rmtree(path)  # 递归删除非空目录
                        logger.info(f"删除文件夹成功: {path}")
                except Exception as e:
                    logger.error(f"删除文件(夹)失败: {e}")
                    return {
                        "success": False,
                        "message": f"删除文件(夹)失败: {e}"
                    }
            else:
                logger.warning(f"文件(夹)不存在: {path}")
        return {
            "success": True,
            "message": "OK"
        }
