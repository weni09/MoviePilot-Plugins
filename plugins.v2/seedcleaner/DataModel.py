from pydantic import BaseModel, Field
from typing import Tuple, List


class ConfigModel(BaseModel):
    enable: bool = True
    transmission_paths: str = ""
    qbittorrent_paths: str = ""
    exclude_paths: str = ""


class MissingOptions(BaseModel):
    seed: bool = Field(default=False, description="种子")
    file: bool = Field(default=False, description="源文件")


class SearchModel(BaseModel):
    missingOptions: MissingOptions
    auxOption: str = "all"  # no_aux has_aux
    removeOption: str = "all"  # only_torrent only_data
    trackerInput: str = ""
    existingSeedData: bool = False


class TorrentInfoModel(BaseModel):
    client: str = ""
    torrent_path: str = ""
    resume_path: str = ""
    save_path: str = ""
    data_missing: bool = False
    info_hash: str = ""
    total_size: int = 0
    name: str = ""
    piece_length: int = 0
    file_num: int = 0
    first_file: Tuple = []
    end_file: Tuple = []
    trackers: List = []
    index: str = ""
    removeOption: str = ""


class ClearModel(BaseModel):
    type: str = ""
    hash: str = ""
    path: str = ""
    name: str = ""
    size: int = 0
    client: str = ""
    data_missing: bool = False
    removeOption: str = ""