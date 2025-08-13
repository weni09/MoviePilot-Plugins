import { importShared } from './__federation_fn_import-JrT3xvdd.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import { f as formatBytes, m as mapTrackers, c as copyPath, O as ONLY_TORRENT, A as ALL, P as PLUGIN_ID } from './definedFunctions-DqnAxrdM.js';

const {resolveComponent:_resolveComponent$3,createVNode:_createVNode$3,createElementVNode:_createElementVNode$3,withModifiers:_withModifiers$2,normalizeClass:_normalizeClass,withCtx:_withCtx$3,vShow:_vShow$1,withDirectives:_withDirectives$1,openBlock:_openBlock$3,createBlock:_createBlock$2} = await importShared('vue');


const _hoisted_1$3 = { class: "d-flex justify-space-between" };
const _hoisted_2$3 = { class: "d-flex justify-space-between" };
const _hoisted_3$2 = { class: "d-flex justify-space-between" };

const {reactive: reactive$3,ref: ref$2} = await importShared('vue');



const _sfc_main$3 = {
  __name: 'ToolBar',
  setup(__props, { expose: __expose }) {

const isCollapsed = ref$2(false);

const state = reactive$3({
   missingOptions:{
        seed: false,
        file: false
    },
    auxOption:"all",
    removeOption:"all",
    trackerInput:"",
    existingSeedData: false,
    name:""
});

const initParams = () =>{
  // console.log("initParams called",state);
  state.missingOptions.seed = false;
  state.missingOptions.file = false;
  state.auxOption = 'all';
  state.removeOption = 'all';
  state.trackerInput = '';
  state.existingSeedData = false;
  state.name = '';
  // console.log("state after initParams", state.value); 
};

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

__expose({
  state,
  initParams,
  isCollapsed,  // 暴露折叠状态给父组件
  toggleCollapse  // 暴露切换方法给父组件
});

return (_ctx, _cache) => {
  const _component_v_icon = _resolveComponent$3("v-icon");
  const _component_v_btn = _resolveComponent$3("v-btn");
  const _component_v_card_title = _resolveComponent$3("v-card-title");
  const _component_v_col = _resolveComponent$3("v-col");
  const _component_v_checkbox = _resolveComponent$3("v-checkbox");
  const _component_v_row = _resolveComponent$3("v-row");
  const _component_v_radio = _resolveComponent$3("v-radio");
  const _component_v_radio_group = _resolveComponent$3("v-radio-group");
  const _component_v_tooltip = _resolveComponent$3("v-tooltip");
  const _component_v_text_field = _resolveComponent$3("v-text-field");
  const _component_v_card_text = _resolveComponent$3("v-card-text");
  const _component_v_expand_transition = _resolveComponent$3("v-expand-transition");
  const _component_v_card = _resolveComponent$3("v-card");

  return (_openBlock$3(), _createBlock$2(_component_v_card, {
    flat: "",
    class: "tool-bar"
  }, {
    default: _withCtx$3(() => [
      _createVNode$3(_component_v_card_title, {
        class: "text-subtitle-2 d-flex align-center px-2 py-1 bg-primary-lighten-5 cursor-pointer",
        onClick: toggleCollapse
      }, {
        default: _withCtx$3(() => [
          _createVNode$3(_component_v_icon, {
            icon: "mdi-magnify",
            class: "mr-2",
            color: "primary",
            size: "small"
          }),
          _cache[7] || (_cache[7] = _createElementVNode$3("span", null, "扫描选项", -1)),
          _createVNode$3(_component_v_btn, {
            icon: "mdi-chevron-left",
            onClick: _withModifiers$2(toggleCollapse, ["stop","prevent"]),
            size: "small",
            variant: "tonal",
            class: _normalizeClass(["ml-auto mr-4 transition-button", { 'rotate-180': isCollapsed.value }])
          }, null, 8, ["class"])
        ]),
        _: 1,
        __: [7]
      }),
      _createVNode$3(_component_v_expand_transition, null, {
        default: _withCtx$3(() => [
          _withDirectives$1(_createElementVNode$3("div", null, [
            _createVNode$3(_component_v_card_text, null, {
              default: _withCtx$3(() => [
                _createVNode$3(_component_v_row, {
                  align: "center",
                  "no-gutters": "",
                  class: "d-flex"
                }, {
                  default: _withCtx$3(() => [
                    _createVNode$3(_component_v_col, {
                      cols: "6",
                      class: "d-flex align-center justify-start"
                    }, {
                      default: _withCtx$3(() => [
                        _createVNode$3(_component_v_row, {
                          align: "center",
                          "no-gutters": "",
                          class: "d-flex justify-start"
                        }, {
                          default: _withCtx$3(() => [
                            _createVNode$3(_component_v_col, {
                              cols: "4",
                              class: "d-flex justify-start"
                            }, {
                              default: _withCtx$3(() => _cache[8] || (_cache[8] = [
                                _createElementVNode$3("span", { class: "label-text font-weight-bold align-content-center" }, "缺失选项：", -1)
                              ])),
                              _: 1,
                              __: [8]
                            }),
                            _createVNode$3(_component_v_col, { cols: "4" }, {
                              default: _withCtx$3(() => [
                                _createVNode$3(_component_v_checkbox, {
                                  modelValue: state.missingOptions.file,
                                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((state.missingOptions.file) = $event)),
                                  label: "缺文件的种子",
                                  "hide-details": ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            }),
                            _createVNode$3(_component_v_col, { cols: "4" }, {
                              default: _withCtx$3(() => [
                                _createVNode$3(_component_v_checkbox, {
                                  modelValue: state.missingOptions.seed,
                                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((state.missingOptions.seed) = $event)),
                                  label: "缺种的源文件",
                                  "hide-details": ""
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _createVNode$3(_component_v_col, {
                      cols: "6",
                      class: "d-flex align-center justify-start"
                    }, {
                      default: _withCtx$3(() => [
                        _createVNode$3(_component_v_row, {
                          align: "center",
                          "no-gutters": "",
                          class: "d-flex justify-start"
                        }, {
                          default: _withCtx$3(() => [
                            _createVNode$3(_component_v_col, {
                              cols: "4",
                              class: "d-flex justify-start"
                            }, {
                              default: _withCtx$3(() => _cache[9] || (_cache[9] = [
                                _createElementVNode$3("span", { class: "label-text font-weight-bold align-content-center" }, "有无辅种：", -1)
                              ])),
                              _: 1,
                              __: [9]
                            }),
                            _createVNode$3(_component_v_col, {
                              cols: "8",
                              class: "d-flex justify-start"
                            }, {
                              default: _withCtx$3(() => [
                                _createVNode$3(_component_v_radio_group, {
                                  modelValue: state.auxOption,
                                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((state.auxOption) = $event)),
                                  inline: "",
                                  "hide-details": ""
                                }, {
                                  default: _withCtx$3(() => [
                                    _createElementVNode$3("div", _hoisted_1$3, [
                                      _createVNode$3(_component_v_radio, {
                                        label: "全部",
                                        value: "all"
                                      }),
                                      _createVNode$3(_component_v_radio, {
                                        label: "无辅种",
                                        value: "no_aux"
                                      }),
                                      _createVNode$3(_component_v_radio, {
                                        label: "有辅种",
                                        value: "has_aux"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _createVNode$3(_component_v_row, {
                  align: "center",
                  "no-gutters": "",
                  class: "d-flex"
                }, {
                  default: _withCtx$3(() => [
                    _createVNode$3(_component_v_col, {
                      cols: "6",
                      class: "d-flex align-center justify-start"
                    }, {
                      default: _withCtx$3(() => [
                        _createVNode$3(_component_v_row, {
                          align: "center",
                          "no-gutters": "",
                          class: "d-flex justify-start"
                        }, {
                          default: _withCtx$3(() => [
                            _createVNode$3(_component_v_col, {
                              cols: "4",
                              class: "d-flex justify-start"
                            }, {
                              default: _withCtx$3(() => _cache[10] || (_cache[10] = [
                                _createElementVNode$3("span", { class: "label-text font-weight-bold align-content-center" }, "删除选项：", -1)
                              ])),
                              _: 1,
                              __: [10]
                            }),
                            _createVNode$3(_component_v_col, {
                              cols: "8",
                              class: "d-flex justify-start"
                            }, {
                              default: _withCtx$3(() => [
                                _createVNode$3(_component_v_radio_group, {
                                  modelValue: state.removeOption,
                                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((state.removeOption) = $event)),
                                  inline: "",
                                  "hide-details": ""
                                }, {
                                  default: _withCtx$3(() => [
                                    _createElementVNode$3("div", _hoisted_2$3, [
                                      _createVNode$3(_component_v_radio, {
                                        label: "全部",
                                        value: "all"
                                      }),
                                      _createVNode$3(_component_v_radio, {
                                        label: "仅删除种子",
                                        value: "only_torrent"
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _createVNode$3(_component_v_col, {
                      cols: "6",
                      class: "d-flex align-center justify-start"
                    }, {
                      default: _withCtx$3(() => [
                        _createVNode$3(_component_v_row, {
                          align: "center",
                          "no-gutters": "",
                          class: "d-flex justify-start"
                        }, {
                          default: _withCtx$3(() => [
                            _createVNode$3(_component_v_col, {
                              cols: "4",
                              class: "d-flex justify-start"
                            }, {
                              default: _withCtx$3(() => [
                                _cache[12] || (_cache[12] = _createElementVNode$3("span", { class: "label-text font-weight-bold align-content-center" }, "存量数据：", -1)),
                                _createVNode$3(_component_v_tooltip, {
                                  activator: "parent",
                                  location: "top"
                                }, {
                                  default: _withCtx$3(() => _cache[11] || (_cache[11] = [
                                    _createElementVNode$3("span", null, "使用缓存在MoviePilot插件的数据文件进行扫描", -1)
                                  ])),
                                  _: 1,
                                  __: [11]
                                })
                              ]),
                              _: 1,
                              __: [12]
                            }),
                            _createVNode$3(_component_v_col, {
                              cols: "8",
                              class: "d-flex justify-start"
                            }, {
                              default: _withCtx$3(() => [
                                _createVNode$3(_component_v_radio_group, {
                                  modelValue: state.existingSeedData,
                                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((state.existingSeedData) = $event)),
                                  inline: "",
                                  "hide-details": ""
                                }, {
                                  default: _withCtx$3(() => [
                                    _createElementVNode$3("div", _hoisted_3$2, [
                                      _createVNode$3(_component_v_radio, {
                                        label: "否",
                                        value: false
                                      }),
                                      _createVNode$3(_component_v_radio, {
                                        label: "是",
                                        value: true
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _createVNode$3(_component_v_row, {
                  class: "d-flex",
                  align: "center",
                  "no-gutters": ""
                }, {
                  default: _withCtx$3(() => [
                    _createVNode$3(_component_v_col, {
                      cols: "6",
                      class: "d-flex align-center justify-start"
                    }, {
                      default: _withCtx$3(() => [
                        _createVNode$3(_component_v_row, {
                          align: "center",
                          "no-gutters": "",
                          class: "d-flex justify-center"
                        }, {
                          default: _withCtx$3(() => [
                            _createVNode$3(_component_v_col, { cols: "4" }, {
                              default: _withCtx$3(() => _cache[13] || (_cache[13] = [
                                _createElementVNode$3("span", { class: "label-text font-weight-bold" }, "Tracker：", -1)
                              ])),
                              _: 1,
                              __: [13]
                            }),
                            _createVNode$3(_component_v_col, {
                              cols: "8",
                              class: "pr-2"
                            }, {
                              default: _withCtx$3(() => [
                                _createVNode$3(_component_v_text_field, {
                                  modelValue: state.trackerInput,
                                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((state.trackerInput) = $event)),
                                  label: "Tracker (多个用分号分隔)",
                                  placeholder: "tracker1.com;tracker2.com",
                                  variant: "outlined",
                                  density: "compact",
                                  size: "small"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _createVNode$3(_component_v_col, { cols: "6" }, {
                      default: _withCtx$3(() => [
                        _createVNode$3(_component_v_row, {
                          align: "center",
                          "no-gutters": "",
                          class: "d-flex justify-center"
                        }, {
                          default: _withCtx$3(() => [
                            _createVNode$3(_component_v_col, { cols: "4" }, {
                              default: _withCtx$3(() => _cache[14] || (_cache[14] = [
                                _createElementVNode$3("span", { class: "label-text font-weight-bold" }, "名称查询:", -1)
                              ])),
                              _: 1,
                              __: [14]
                            }),
                            _createVNode$3(_component_v_col, { cols: "8" }, {
                              default: _withCtx$3(() => [
                                _createVNode$3(_component_v_text_field, {
                                  modelValue: state.name,
                                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((state.name) = $event)),
                                  label: "名称，支持正则表达式(Python)",
                                  placeholder: "多啦A梦",
                                  variant: "outlined",
                                  density: "compact",
                                  size: "small"
                                }, null, 8, ["modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ], 512), [
            [_vShow$1, !isCollapsed.value]
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }))
}
}

};
const ToolBar = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-554f2a73"]]);

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {toDisplayString:_toDisplayString$2,createTextVNode:_createTextVNode$2,resolveComponent:_resolveComponent$2,withCtx:_withCtx$2,openBlock:_openBlock$2,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode$1,createVNode:_createVNode$2,createElementVNode:_createElementVNode$2,renderList:_renderList$1,Fragment:_Fragment$1,createElementBlock:_createElementBlock$2,withKeys:_withKeys,mergeProps:_mergeProps$1,withModifiers:_withModifiers$1,unref:_unref$1} = await importShared('vue');

const _hoisted_1$2 = { class: "d-flex align-center mr-4" };
const _hoisted_2$2 = { class: "label-text font-weight-bold align-content-center" };
const _hoisted_3$1 = { class: "filter-chips d-flex justify-start px-4" };
const _hoisted_4$1 = { style: { "min-height": "260px", "max-height": "420px", "overflow-y": "auto" } };
const _hoisted_5 = { class: "name-text" };
const _hoisted_6 = { key: 0 };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { colspan: "100%" };
const _hoisted_9 = { class: "text-left" };
const _hoisted_10 = { class: "text-left" };
const _hoisted_11 = {
  class: "text-left",
  style: { "color": "red" }
};
const {ref: ref$1,computed: computed$1,reactive: reactive$2} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "ScanResults",
  props: {
    initialConfig: {
      type: Object,
      default: () => ({})
    },
    scanRes: {
      type: Object,
      default: () => ({
        combinedList: [],
        total: 0,
        totalSize: 0,
        tTotal: 0,
        tTotalSize: 0,
        mTotal: 0,
        mTotalSize: 0,
        page: 1,
        pageSize: 50
      })
    },
    // 将sortBy改为字符串类型，避免直接传递SortItem数组
    scanParams: {
      type: Object,
      required: true,
      default: () => ({
        page: 1,
        pageSize: 50,
        sortBy: []
      })
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["deleteAllRecord", "addToCleanup", "update:scanParams", "applyFilter"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const filterItems = [
      {
        title: "路径",
        value: "path"
      },
      {
        title: "下载器名称",
        value: "client_name"
      },
      {
        title: "下载器类型",
        value: "client"
      },
      {
        title: "做种数",
        value: "seeds_limit"
      },
      {
        title: "大小(MB)",
        value: "size_limit"
      }
    ];
    const state = reactive$2({
      selectedScans: [],
      snackbar: {
        location: "top",
        show: false,
        message: "",
        color: "success"
      },
      headers: [
        { value: "expand", title: "", key: "data-table-expand" },
        { value: "name", title: "名称", align: "left", sortable: true, maxWidth: "20rem" },
        { value: "path", title: "路径", align: "left", sortable: true, maxWidth: "14rem" },
        { value: "tracker", title: "Tracker", align: "center" },
        { value: "status", title: "状态", align: "center" },
        { value: "seeds", title: "做种数", align: "center", sortable: true },
        { value: "size", title: "大小", sortable: true, align: "center" },
        { value: "select", title: "", key: "data-table-select" }
      ],
      filter: {
        path: "",
        client_name: "",
        client: "",
        seeds_limit: [null, null],
        size_limit: [null, null]
      },
      currentFilterValues: ["path"]
    });
    const getfilterTitleByKey = (key) => {
      for (let i of filterItems) {
        if (i.value === key) {
          return i.title;
        }
      }
      return key;
    };
    const allDownloaders = computed$1(() => {
      let downloaderNames = /* @__PURE__ */ new Set([
        ...props.initialConfig.downloaders.system.map((d) => d.name),
        ...props.initialConfig.downloaders.custom.map((d) => d.name)
      ]);
      let downloaderTypes = /* @__PURE__ */ new Set([
        ...props.initialConfig.downloaders.system.map((d) => d.type),
        ...props.initialConfig.downloaders.custom.map((d) => d.type)
      ]);
      return {
        names: Array.from(downloaderNames),
        types: Array.from(downloaderTypes)
      };
    });
    const totalComputed = computed$1(() => {
      let res = [];
      if (props.scanRes.tTotal > 0) {
        let torrentFIleText = `种子：${props.scanRes.tTotal}/${formatBytes(props.scanRes.tTotalSize)}`;
        res.push(torrentFIleText);
      }
      if (props.scanRes.mTotal > 0) {
        let missingFileText = `缺种的文件：${props.scanRes.mTotal}/${formatBytes(props.scanRes.mTotalSize)}`;
        res.push(missingFileText);
      }
      if (props.scanRes.tTotal > 0 && props.scanRes.mTotal > 0) {
        let totalText = `总计：${props.scanRes.total}/${formatBytes(props.scanRes.totalSize)}`;
        res.push(totalText);
      }
      return res.join(" | ");
    });
    const showNotification = (text, color = "success") => {
      state.snackbar.message = text;
      state.snackbar.color = color;
      state.snackbar.show = true;
    };
    const deleteAllRecord = () => {
      state.selectedScans = [];
      emit("deleteAllRecord");
    };
    const addToCleanup = () => {
      emit("addToCleanup", state.selectedScans);
    };
    const totalPages = computed$1(() => {
      return Math.ceil(props.scanRes.total / props.scanParams.pageSize);
    });
    const getStatusColor = (status) => {
      let error_status = ["缺失源文件", "错误", "已停止", "未知"];
      if (error_status.includes(status)) {
        return "error";
      } else {
        return "success";
      }
    };
    const handlePageChange = (newPage) => {
      emit("update:scanParams", {
        pageSize: props.scanParams.pageSize,
        page: newPage,
        sort: props.scanParams.sortBy,
        changed: "page"
      });
    };
    const handlePageSizeChange = (newPageSize) => {
      emit("update:scanParams", {
        pageSize: newPageSize,
        page: 1,
        // 切换每页数量后跳转到第一页
        sort: props.scanParams.sortBy,
        changed: "pageSize"
      });
    };
    const handleSortChange = (items) => {
      console.log("handleSortChange", items);
      emit("update:scanParams", {
        pageSize: props.scanParams.pageSize,
        page: props.scanParams.page,
        // 切换每页数量后跳转到第一页
        sort: items,
        changed: "sort"
      });
    };
    const clearSelectedScans = () => {
      state.selectedScans = [];
    };
    const _copyPath = async (path) => {
      showNotification("完整路径已复制到剪贴板");
      if (await copyPath(path)) {
        showNotification("完整路径已复制到剪贴板");
      } else {
        showNotification("复制路径失败", "error");
      }
    };
    const availableColors = ["primary", "secondary", "success", "info", "warning", "error", "accent"];
    const getColorByString = (strs) => {
      let strsArray = strs.sort();
      let _strs = strsArray.join("");
      let hash = 0;
      for (let i = 0; i < _strs.length; i++) {
        hash = _strs.charCodeAt(i) + ((hash << 5) - hash);
      }
      const index = Math.abs(hash % availableColors.length);
      return availableColors[index];
    };
    const selectedScansSize = computed$1(() => {
      return formatBytes(state.selectedScans.reduce((sum, scan) => {
        if ("data_missing" in scan && scan.data_missing) {
          sum = sum + 0;
        } else {
          sum = sum + scan.size;
        }
        return sum;
      }, 0));
    });
    const filterDialog = ref$1(false);
    const toggleFilter = () => {
      filterDialog.value = true;
    };
    const applyFilter = () => {
      filterDialog.value = false;
      emit("applyFilter", state.filter);
    };
    const deleteFilter = (name) => {
      if (state.filter[name] instanceof Array) {
        state.filter[name] = [null, null];
      } else {
        state.filter[name] = "";
      }
      filterDialog.value = false;
      emit("applyFilter", state.filter);
    };
    const isShowFilterTag = (value) => {
      if (value instanceof Array && value.length === 2) {
        return value[0] !== null && value[1] !== null && value[0] !== "" && value[1] !== "";
      } else if (value !== null && value !== "") {
        return true;
      }
      return false;
    };
    const formatFilterTag = (value, key = "") => {
      let unit = "";
      if (value instanceof Array && value.length === 2) {
        if (key == "size_limit") {
          unit = "MB";
        }
        return `${value[0]} ~ ${value[1]} ${unit}`;
      } else {
        return value;
      }
    };
    __expose({
      clearSelectedScans
    });
    return (_ctx, _cache) => {
      const _component_v_chip = _resolveComponent$2("v-chip");
      const _component_v_spacer = _resolveComponent$2("v-spacer");
      const _component_v_select = _resolveComponent$2("v-select");
      const _component_v_pagination = _resolveComponent$2("v-pagination");
      const _component_v_icon = _resolveComponent$2("v-icon");
      const _component_v_tooltip = _resolveComponent$2("v-tooltip");
      const _component_v_btn = _resolveComponent$2("v-btn");
      const _component_v_card_title = _resolveComponent$2("v-card-title");
      const _component_v_col = _resolveComponent$2("v-col");
      const _component_v_text_field = _resolveComponent$2("v-text-field");
      const _component_v_number_input = _resolveComponent$2("v-number-input");
      const _component_v_row = _resolveComponent$2("v-row");
      const _component_v_card_text = _resolveComponent$2("v-card-text");
      const _component_v_card_actions = _resolveComponent$2("v-card-actions");
      const _component_v_card = _resolveComponent$2("v-card");
      const _component_v_dialog = _resolveComponent$2("v-dialog");
      const _component_v_skeleton_loader = _resolveComponent$2("v-skeleton-loader");
      const _component_v_table = _resolveComponent$2("v-table");
      const _component_v_checkbox = _resolveComponent$2("v-checkbox");
      const _component_v_data_table_server = _resolveComponent$2("v-data-table-server");
      const _component_v_snackbar = _resolveComponent$2("v-snackbar");
      return _openBlock$2(), _createBlock$1(_component_v_card, {
        flat: "",
        class: "mb-4"
      }, {
        default: _withCtx$2(() => [
          _createVNode$2(_component_v_card_title, { class: "text-subtitle-1 d-flex align-center px-2 py-1 bg-primary-lighten-5" }, {
            default: _withCtx$2(() => [
              _createElementVNode$2("div", _hoisted_1$2, [
                totalComputed.value != "" ? (_openBlock$2(), _createBlock$1(_component_v_chip, {
                  key: 0,
                  class: "ml-2",
                  size: "x-small",
                  color: "info",
                  variant: "flat"
                }, {
                  default: _withCtx$2(() => [
                    _createTextVNode$2(_toDisplayString$2(totalComputed.value), 1)
                  ]),
                  _: 1
                })) : _createCommentVNode$1("", true),
                _createVNode$2(_component_v_chip, {
                  class: "ml-2",
                  size: "x-small",
                  color: "error",
                  variant: "flat"
                }, {
                  default: _withCtx$2(() => [
                    _createTextVNode$2(_toDisplayString$2(`已选择 ${state.selectedScans.length}项: ${selectedScansSize.value}`), 1)
                  ]),
                  _: 1
                })
              ]),
              _createVNode$2(_component_v_spacer),
              _createVNode$2(_component_v_select, {
                modelValue: __props.scanParams.pageSize,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => __props.scanParams.pageSize = $event),
                  handlePageSizeChange
                ],
                items: [50, 100, 200, 300, 500],
                label: "每页数量",
                variant: "underlined",
                density: "compact",
                size: "small",
                style: { "max-width": "120px" }
              }, null, 8, ["modelValue"]),
              _createVNode$2(_component_v_pagination, {
                modelValue: __props.scanParams.page,
                "onUpdate:modelValue": [
                  _cache[1] || (_cache[1] = ($event) => __props.scanParams.page = $event),
                  handlePageChange
                ],
                length: totalPages.value,
                rounded: "circle",
                size: "small",
                class: "mr-8",
                "total-visible": 5
              }, null, 8, ["modelValue", "length"]),
              _createVNode$2(_component_v_btn, {
                color: "primary",
                onClick: deleteAllRecord,
                class: "mr-4",
                icon: "",
                size: "small"
              }, {
                default: _withCtx$2(() => [
                  _createVNode$2(_component_v_icon, {
                    icon: "mdi-broom",
                    size: "small"
                  }),
                  _createVNode$2(_component_v_tooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: _withCtx$2(() => _cache[7] || (_cache[7] = [
                      _createTextVNode$2("清空记录")
                    ])),
                    _: 1,
                    __: [7]
                  })
                ]),
                _: 1
              }),
              _createVNode$2(_component_v_btn, {
                color: "success",
                onClick: addToCleanup,
                icon: "",
                size: "small",
                class: "mr-4"
              }, {
                default: _withCtx$2(() => [
                  _createVNode$2(_component_v_icon, {
                    icon: "mdi-plus-box",
                    size: "small"
                  }),
                  _createVNode$2(_component_v_tooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: _withCtx$2(() => _cache[8] || (_cache[8] = [
                      _createTextVNode$2("添加到待清理")
                    ])),
                    _: 1,
                    __: [8]
                  })
                ]),
                _: 1
              }),
              _createVNode$2(_component_v_btn, {
                color: "warning",
                icon: "",
                size: "small",
                class: "mr-4",
                onClick: toggleFilter
              }, {
                default: _withCtx$2(() => [
                  _createVNode$2(_component_v_icon, {
                    icon: "mdi-filter-variant",
                    size: "small"
                  }),
                  _createVNode$2(_component_v_tooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: _withCtx$2(() => _cache[9] || (_cache[9] = [
                      _createTextVNode$2("筛选条件")
                    ])),
                    _: 1,
                    __: [9]
                  })
                ]),
                _: 1
              }),
              _createVNode$2(_component_v_dialog, {
                modelValue: filterDialog.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filterDialog.value = $event),
                "max-width": "500px"
              }, {
                default: _withCtx$2(() => [
                  _createVNode$2(_component_v_card, null, {
                    default: _withCtx$2(() => [
                      _createVNode$2(_component_v_card_title, { class: "d-flex align-center" }, {
                        default: _withCtx$2(() => _cache[10] || (_cache[10] = [
                          _createElementVNode$2("span", null, "条件筛选(可选)", -1)
                        ])),
                        _: 1,
                        __: [10]
                      }),
                      _createVNode$2(_component_v_card_text, null, {
                        default: _withCtx$2(() => [
                          (_openBlock$2(), _createElementBlock$2(_Fragment$1, null, _renderList$1(filterItems, (item, index) => {
                            return _createVNode$2(_component_v_row, {
                              align: "center",
                              class: "d-flex align-content-center"
                            }, {
                              default: _withCtx$2(() => [
                                _createVNode$2(_component_v_col, {
                                  cols: "3",
                                  class: "px-1"
                                }, {
                                  default: _withCtx$2(() => [
                                    _createElementVNode$2("span", _hoisted_2$2, _toDisplayString$2(item.title) + ":", 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                item.value === "path" ? (_openBlock$2(), _createBlock$1(_component_v_col, {
                                  key: 0,
                                  cols: "9",
                                  class: "px-1"
                                }, {
                                  default: _withCtx$2(() => [
                                    _createVNode$2(_component_v_text_field, {
                                      modelValue: state.filter[item.value],
                                      "onUpdate:modelValue": ($event) => state.filter[item.value] = $event,
                                      label: `输入筛选${getfilterTitleByKey(item.value)}`,
                                      onKeyup: _withKeys(applyFilter, ["enter"]),
                                      density: "compact",
                                      variant: "outlined",
                                      clearable: "",
                                      autofocus: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                  ]),
                                  _: 2
                                }, 1024)) : item.value === "client_name" ? (_openBlock$2(), _createBlock$1(_component_v_col, {
                                  key: 1,
                                  cols: "9",
                                  class: "px-1"
                                }, {
                                  default: _withCtx$2(() => [
                                    _createVNode$2(_component_v_select, {
                                      modelValue: state.filter[item.value],
                                      "onUpdate:modelValue": ($event) => state.filter[item.value] = $event,
                                      items: allDownloaders.value.names,
                                      "item-title": (item2) => item2,
                                      "item-value": (item2) => item2,
                                      label: `选择筛选${getfilterTitleByKey(item.value)}`,
                                      variant: "outlined",
                                      density: "compact",
                                      class: "text-caption",
                                      clearable: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "item-value", "label"])
                                  ]),
                                  _: 2
                                }, 1024)) : item.value === "client" ? (_openBlock$2(), _createBlock$1(_component_v_col, {
                                  key: 2,
                                  cols: "9",
                                  class: "px-1"
                                }, {
                                  default: _withCtx$2(() => [
                                    _createVNode$2(_component_v_select, {
                                      modelValue: state.filter[item.value],
                                      "onUpdate:modelValue": ($event) => state.filter[item.value] = $event,
                                      items: allDownloaders.value.types,
                                      "item-title": (item2) => item2,
                                      "item-value": (item2) => item2,
                                      label: `选择筛选${getfilterTitleByKey(item.value)}`,
                                      variant: "outlined",
                                      density: "compact",
                                      class: "text-caption",
                                      clearable: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "items", "item-title", "item-value", "label"])
                                  ]),
                                  _: 2
                                }, 1024)) : item.value === "seeds_limit" ? (_openBlock$2(), _createBlock$1(_component_v_col, {
                                  key: 3,
                                  cols: "9",
                                  class: "px-1"
                                }, {
                                  default: _withCtx$2(() => [
                                    _createVNode$2(_component_v_row, { "no-gutters": "" }, {
                                      default: _withCtx$2(() => [
                                        _createVNode$2(_component_v_col, { cols: "5" }, {
                                          default: _withCtx$2(() => [
                                            _createVNode$2(_component_v_number_input, {
                                              modelValue: state.filter[item.value][0],
                                              "onUpdate:modelValue": ($event) => state.filter[item.value][0] = $event,
                                              min: 0,
                                              max: state.filter[item.value][1] || 999999,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              placeholder: "最小值",
                                              class: "text-caption",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        _createVNode$2(_component_v_col, {
                                          cols: "1",
                                          class: "d-flex align-center justify-center text-caption"
                                        }, {
                                          default: _withCtx$2(() => _cache[11] || (_cache[11] = [
                                            _createTextVNode$2(" ~ ")
                                          ])),
                                          _: 1,
                                          __: [11]
                                        }),
                                        _createVNode$2(_component_v_col, { cols: "6" }, {
                                          default: _withCtx$2(() => [
                                            _createVNode$2(_component_v_number_input, {
                                              modelValue: state.filter[item.value][1],
                                              "onUpdate:modelValue": ($event) => state.filter[item.value][1] = $event,
                                              min: state.filter[item.value][0] || 0,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              placeholder: "最大值",
                                              class: "text-caption",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : item.value === "size_limit" ? (_openBlock$2(), _createBlock$1(_component_v_col, {
                                  key: 4,
                                  cols: "9",
                                  class: "px-1"
                                }, {
                                  default: _withCtx$2(() => [
                                    _createVNode$2(_component_v_row, { "no-gutters": "" }, {
                                      default: _withCtx$2(() => [
                                        _createVNode$2(_component_v_col, { cols: "5" }, {
                                          default: _withCtx$2(() => [
                                            _createVNode$2(_component_v_number_input, {
                                              modelValue: state.filter[item.value][0],
                                              "onUpdate:modelValue": ($event) => state.filter[item.value][0] = $event,
                                              min: 0,
                                              max: state.filter[item.value][1] || 999999999,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              placeholder: "最小值",
                                              class: "text-caption",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        _createVNode$2(_component_v_col, {
                                          cols: "1",
                                          class: "d-flex align-center justify-center text-caption"
                                        }, {
                                          default: _withCtx$2(() => _cache[12] || (_cache[12] = [
                                            _createTextVNode$2(" ~ ")
                                          ])),
                                          _: 1,
                                          __: [12]
                                        }),
                                        _createVNode$2(_component_v_col, { cols: "6" }, {
                                          default: _withCtx$2(() => [
                                            _createVNode$2(_component_v_number_input, {
                                              modelValue: state.filter[item.value][1],
                                              "onUpdate:modelValue": ($event) => state.filter[item.value][1] = $event,
                                              min: state.filter[item.value][0] || 0,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              placeholder: "最大值",
                                              class: "text-caption",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)) : _createCommentVNode$1("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ]),
                        _: 1
                      }),
                      _createVNode$2(_component_v_card_actions, null, {
                        default: _withCtx$2(() => [
                          _createVNode$2(_component_v_btn, {
                            onClick: _cache[2] || (_cache[2] = ($event) => {
                              filterDialog.value = false;
                            })
                          }, {
                            default: _withCtx$2(() => _cache[13] || (_cache[13] = [
                              _createTextVNode$2("取消")
                            ])),
                            _: 1,
                            __: [13]
                          }),
                          _createVNode$2(_component_v_btn, {
                            color: "primary",
                            onClick: applyFilter
                          }, {
                            default: _withCtx$2(() => _cache[14] || (_cache[14] = [
                              _createTextVNode$2("确定")
                            ])),
                            _: 1,
                            __: [14]
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }),
          _createVNode$2(_component_v_card_text, { class: "pa-0" }, {
            default: _withCtx$2(() => [
              _createElementVNode$2("div", _hoisted_3$1, [
                (_openBlock$2(true), _createElementBlock$2(_Fragment$1, null, _renderList$1(state.filter, (value, key) => {
                  return _openBlock$2(), _createElementBlock$2(_Fragment$1, null, [
                    isShowFilterTag(value) ? (_openBlock$2(), _createBlock$1(_component_v_chip, {
                      key: 0,
                      class: "mx-2",
                      closable: "",
                      variant: "outlined",
                      "onClick:close": ($event) => deleteFilter(key)
                    }, {
                      prepend: _withCtx$2(() => [
                        _createVNode$2(_component_v_tooltip, { location: "bottom" }, {
                          activator: _withCtx$2(({ props: props2 }) => [
                            key == "path" ? (_openBlock$2(), _createBlock$1(_component_v_icon, _mergeProps$1({
                              key: 0,
                              ref_for: true
                            }, props2), {
                              default: _withCtx$2(() => _cache[15] || (_cache[15] = [
                                _createTextVNode$2("mdi-folder-arrow-left")
                              ])),
                              _: 2,
                              __: [15]
                            }, 1040)) : key == "client_name" ? (_openBlock$2(), _createBlock$1(_component_v_icon, _mergeProps$1({
                              key: 1,
                              ref_for: true
                            }, props2), {
                              default: _withCtx$2(() => _cache[16] || (_cache[16] = [
                                _createTextVNode$2("mdi-download")
                              ])),
                              _: 2,
                              __: [16]
                            }, 1040)) : key == "client" ? (_openBlock$2(), _createBlock$1(_component_v_icon, _mergeProps$1({
                              key: 2,
                              ref_for: true
                            }, props2), {
                              default: _withCtx$2(() => _cache[17] || (_cache[17] = [
                                _createTextVNode$2("mdi-download-circle")
                              ])),
                              _: 2,
                              __: [17]
                            }, 1040)) : key == "seeds_limit" ? (_openBlock$2(), _createElementBlock$2("span", _mergeProps$1({
                              key: 3,
                              ref_for: true
                            }, props2, { class: "font-weight-bold mr-1" }), "做种数:", 16)) : key == "size_limit" ? (_openBlock$2(), _createElementBlock$2("span", _mergeProps$1({
                              key: 4,
                              ref_for: true
                            }, props2, { class: "font-weight-bold mr-1" }), "大小:", 16)) : _createCommentVNode$1("", true)
                          ]),
                          default: _withCtx$2(() => [
                            _createTextVNode$2(" " + _toDisplayString$2(getfilterTitleByKey(key)), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      default: _withCtx$2(() => [
                        _createTextVNode$2(" " + _toDisplayString$2(formatFilterTag(value, key)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick:close"])) : _createCommentVNode$1("", true)
                  ], 64);
                }), 256))
              ]),
              _createElementVNode$2("div", _hoisted_4$1, [
                _createVNode$2(_component_v_data_table_server, {
                  headers: state.headers,
                  "hide-default-header": false,
                  items: props.scanRes.combinedList,
                  "items-per-page": __props.scanParams.pageSize,
                  page: __props.scanParams.page,
                  "item-count": props.scanRes.total,
                  "items-length": props.scanRes.total,
                  "sort-by": props.scanParams.sortBy,
                  "item-value": (item) => item,
                  loading: props.loading,
                  modelValue: state.selectedScans,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.selectedScans = $event),
                  "must-sort": "",
                  "fixed-header": "",
                  height: "420px",
                  density: "default",
                  hover: "",
                  "hide-default-footer": "",
                  "show-expand": "",
                  "show-select": "",
                  "expand-on-click": "",
                  "onUpdate:sortBy": handleSortChange,
                  "onUpdate:page": handlePageChange,
                  "onUpdate:itemsPerPage": handlePageSizeChange
                }, {
                  loading: _withCtx$2(() => [
                    _createVNode$2(_component_v_skeleton_loader, { type: "table-row@10" })
                  ]),
                  "item.name": _withCtx$2(({ item }) => [
                    item.hasOwnProperty("client") && item.client ? (_openBlock$2(), _createBlock$1(_component_v_chip, {
                      key: 0,
                      color: item.hasOwnProperty("client") && item.client === "transmission" ? "primary" : "error",
                      size: "small",
                      "text-color": "white"
                    }, {
                      default: _withCtx$2(() => [
                        _createTextVNode$2(_toDisplayString$2((item.client || "").slice(0, 2)), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])) : _createCommentVNode$1("", true),
                    _createElementVNode$2("span", _hoisted_5, _toDisplayString$2(item.name), 1)
                  ]),
                  "item.path": _withCtx$2(({ item }) => [
                    _createElementVNode$2("span", null, _toDisplayString$2(item.path.replace(`/${item.name}`, "").replace(`\\${item.name}`, "")), 1),
                    _createVNode$2(_component_v_btn, {
                      icon: "mdi-content-copy",
                      size: "x-small",
                      onClick: _withModifiers$1(($event) => _copyPath(item.path), ["stop"]),
                      style: { "margin-left": "8px" }
                    }, null, 8, ["onClick"])
                  ]),
                  "item.tracker": _withCtx$2(({ item }) => [
                    item.type === "torrent" && item?.trackers.length > 0 ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_6, [
                      _createVNode$2(_component_v_chip, {
                        color: getColorByString(item.trackers),
                        "text-color": "white",
                        size: "small",
                        class: "mr-1 mb-1"
                      }, {
                        default: _withCtx$2(() => [
                          _createTextVNode$2(_toDisplayString$2(_unref$1(mapTrackers)(item.trackers)[0]), 1)
                        ]),
                        _: 2
                      }, 1032, ["color"])
                    ])) : (_openBlock$2(), _createElementBlock$2("div", _hoisted_7, [
                      _createVNode$2(_component_v_chip, {
                        color: "info",
                        "text-color": "white",
                        size: "small"
                      }, {
                        default: _withCtx$2(() => _cache[18] || (_cache[18] = [
                          _createTextVNode$2(" 无 Tracker ")
                        ])),
                        _: 1,
                        __: [18]
                      })
                    ]))
                  ]),
                  "item.status": _withCtx$2(({ item }) => [
                    item.type === "torrent" ? (_openBlock$2(), _createBlock$1(_component_v_chip, {
                      key: 0,
                      color: getStatusColor(item.status),
                      size: "small",
                      "text-color": "white"
                    }, {
                      default: _withCtx$2(() => [
                        _createTextVNode$2(_toDisplayString$2(item.status), 1)
                      ]),
                      _: 2
                    }, 1032, ["color"])) : item.type === "file" ? (_openBlock$2(), _createBlock$1(_component_v_chip, {
                      key: 1,
                      color: "warning",
                      size: "small",
                      "text-color": "white"
                    }, {
                      default: _withCtx$2(() => _cache[19] || (_cache[19] = [
                        _createTextVNode$2(" 缺失种子 ")
                      ])),
                      _: 1,
                      __: [19]
                    })) : _createCommentVNode$1("", true)
                  ]),
                  "item.seeds": _withCtx$2(({ item }) => [
                    _createTextVNode$2(_toDisplayString$2(item.type === "torrent" ? item.seeds : "-"), 1)
                  ]),
                  "item.size": _withCtx$2(({ item }) => [
                    _createTextVNode$2(_toDisplayString$2(item.size ? `${_unref$1(formatBytes)(item.size)}` : "未知大小"), 1)
                  ]),
                  "expanded-row": _withCtx$2(({ item }) => [
                    _createElementVNode$2("tr", null, [
                      _createElementVNode$2("td", _hoisted_8, [
                        _createVNode$2(_component_v_table, { density: "compact" }, {
                          default: _withCtx$2(() => [
                            _cache[20] || (_cache[20] = _createElementVNode$2("thead", null, [
                              _createElementVNode$2("tr", null, [
                                _createElementVNode$2("th", { class: "text-left" }, " Hash "),
                                _createElementVNode$2("th", { class: "text-left" }, " 下载器名称 "),
                                _createElementVNode$2("th", { class: "text-left" }, " 错误信息 ")
                              ])
                            ], -1)),
                            _createElementVNode$2("tbody", null, [
                              _createElementVNode$2("tr", null, [
                                _createElementVNode$2("td", _hoisted_9, _toDisplayString$2(item.hash), 1),
                                _createElementVNode$2("td", _hoisted_10, _toDisplayString$2(`${item.type == "torrent" ? item.client_name : "-"}`), 1),
                                _createElementVNode$2("td", _hoisted_11, _toDisplayString$2(`${item.type == "torrent" && item.error ? item.error : "-"}`), 1)
                              ])
                            ])
                          ]),
                          _: 2,
                          __: [20]
                        }, 1024)
                      ])
                    ])
                  ]),
                  "item.select": _withCtx$2(({ item }) => [
                    _createVNode$2(_component_v_checkbox, {
                      modelValue: state.selectedScans,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.selectedScans = $event),
                      value: item,
                      "hide-details": ""
                    }, null, 8, ["modelValue", "value"])
                  ]),
                  _: 1
                }, 8, ["headers", "items", "items-per-page", "page", "item-count", "items-length", "sort-by", "item-value", "loading", "modelValue"])
              ])
            ]),
            _: 1
          }),
          _createVNode$2(_component_v_snackbar, {
            modelValue: state.snackbar.show,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => state.snackbar.show = $event),
            timeout: 3e3,
            color: state.snackbar.color,
            location: state.snackbar.location
          }, {
            default: _withCtx$2(() => [
              _createTextVNode$2(_toDisplayString$2(state.snackbar.message), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "color", "location"])
        ]),
        _: 1
      });
    };
  }
});

<<<<<<<< HEAD:plugins.v2/seedcleaner/dist/assets/__federation_expose_Page-BTA6VW3n.js
const ScanResults = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4c8cf3d7"]]);
========
const ScanResults = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-fcc1f2a0"]]);
>>>>>>>> 407fed592d029922aea7c43b899e45b44d4c99cf:plugins.v2/seedcleaner/dist/assets/__federation_expose_Page-BWgtyUAD.js

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {toDisplayString:_toDisplayString$1,createTextVNode:_createTextVNode$1,resolveComponent:_resolveComponent$1,withCtx:_withCtx$1,createVNode:_createVNode$1,createElementVNode:_createElementVNode$1,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createBlock:_createBlock,createCommentVNode:_createCommentVNode,withModifiers:_withModifiers,mergeProps:_mergeProps,unref:_unref} = await importShared('vue');

const _hoisted_1$1 = { class: "name-column" };
const _hoisted_2$1 = { style: { "margin-left": "8px" } };
const _hoisted_3 = { class: "size-column" };
const _hoisted_4 = { class: "text-right" };
const {computed,reactive: reactive$1} = await importShared('vue');
const _sfc_main$1 = /* @__PURE__ */ _defineComponent$1({
  __name: "CleanupList",
  setup(__props, { expose: __expose }) {
    const state = reactive$1({
      cleanupList: [],
      clearing: false,
      snackbar: {
        location: "top",
        show: false,
        message: "",
        color: "success"
      }
    });
    const removeFromCleanup = (item) => {
      state.cleanupList = state.cleanupList.filter(
        (i) => i.hash !== item.hash
      );
    };
    const deleteOptionText = (item) => {
      if (item?.type == "torrent" && (item.removeOption === ONLY_TORRENT || item?.removeOption === ALL && item.data_missing)) {
        return {
          text: "仅种子",
          color: "error"
        };
      } else {
        return {
          text: "全部",
          color: "success"
        };
      }
    };
    const totalSize = computed(() => {
      let totalSize2 = 0;
      for (const item of state.cleanupList) {
        if (item.type == "torrent") {
          if (item.removeOption === ONLY_TORRENT || item.data_missing) {
            continue;
          } else {
            totalSize2 += item.size || 0;
          }
        } else if (item.type == "file") {
          totalSize2 += item.size || 0;
        }
      }
      return formatBytes(totalSize2);
    });
    const itemSizeText = (item) => {
      if (item?.type == "torrent" && item?.data_missing) {
        return "不计算";
      } else if (item && item.size) {
        return formatBytes(item.size);
      }
      return "未知大小";
    };
    const deleteAllRecord = () => {
      state.cleanupList = [];
    };
    const setCleanupList = (info) => {
      const existingHashes = new Set(
        state.cleanupList.map((item) => item.hash)
      );
      const newList = info.filter((item) => !existingHashes.has(item.hash));
      state.cleanupList.push(...newList);
      if (newList.length > 0) {
        showNotification(`成功添加 ${newList.length} 条记录到待清理`);
      } else {
        showNotification("没有新项目可添加，全部已存在", "info");
      }
    };
    const showNotification = (text, color = "success") => {
      state.snackbar.message = text;
      state.snackbar.color = color;
      state.snackbar.show = true;
    };
    const _copyPath = async (path) => {
      showNotification("路径已复制到剪贴板");
      if (await copyPath(path)) {
        showNotification("路径已复制到剪贴板");
      } else {
        showNotification("复制路径失败", "error");
      }
    };
    const getCleanupList = () => {
      return state.cleanupList;
    };
    __expose({
      setCleanupList,
      getCleanupList,
      deleteAllRecord
    });
    return (_ctx, _cache) => {
      const _component_v_chip = _resolveComponent$1("v-chip");
      const _component_v_spacer = _resolveComponent$1("v-spacer");
      const _component_v_icon = _resolveComponent$1("v-icon");
      const _component_v_tooltip = _resolveComponent$1("v-tooltip");
      const _component_v_btn = _resolveComponent$1("v-btn");
      const _component_v_card_title = _resolveComponent$1("v-card-title");
      const _component_v_table = _resolveComponent$1("v-table");
      const _component_v_card_text = _resolveComponent$1("v-card-text");
      const _component_v_snackbar = _resolveComponent$1("v-snackbar");
      const _component_v_card = _resolveComponent$1("v-card");
      return _openBlock$1(), _createBlock(_component_v_card, { flat: "" }, {
        default: _withCtx$1(() => [
          _createVNode$1(_component_v_card_title, { class: "text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
            default: _withCtx$1(() => [
              _createVNode$1(_component_v_chip, {
                class: "ml-2",
                size: "x-small",
                color: "error",
                variant: "flat"
              }, {
                default: _withCtx$1(() => [
                  _createTextVNode$1(" 数量：" + _toDisplayString$1(state.cleanupList.length) + ", 总大小：" + _toDisplayString$1(totalSize.value), 1)
                ]),
                _: 1
              }),
              _createVNode$1(_component_v_spacer),
              _createVNode$1(_component_v_btn, {
                color: "primary",
                onClick: deleteAllRecord,
                class: "mr-4",
                icon: "",
                size: "small"
              }, {
                default: _withCtx$1(() => [
                  _createVNode$1(_component_v_icon, {
                    icon: "mdi-broom",
                    size: "small"
                  }),
                  _createVNode$1(_component_v_tooltip, {
                    activator: "parent",
                    location: "top"
                  }, {
                    default: _withCtx$1(() => _cache[1] || (_cache[1] = [
                      _createTextVNode$1("清空记录")
                    ])),
                    _: 1,
                    __: [1]
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          _createVNode$1(_component_v_card_text, { class: "pa-0" }, {
            default: _withCtx$1(() => [
              _createVNode$1(_component_v_table, {
                "fixed-header": "",
                height: "300px",
                hover: ""
              }, {
                default: _withCtx$1(() => [
                  _cache[4] || (_cache[4] = _createElementVNode$1("thead", null, [
                    _createElementVNode$1("tr", null, [
                      _createElementVNode$1("th", { class: "text-left name-column" }, "名称"),
                      _createElementVNode$1("th", { class: "text-left" }, "删除选项"),
                      _createElementVNode$1("th", { class: "text-left" }, "大小"),
                      _createElementVNode$1("th", { class: "text-right size-column" }, "操作")
                    ])
                  ], -1)),
                  _createElementVNode$1("tbody", null, [
                    (_openBlock$1(true), _createElementBlock$1(_Fragment, null, _renderList(state.cleanupList, (item) => {
                      return _openBlock$1(), _createElementBlock$1("tr", {
                        key: item.hash
                      }, [
                        _createElementVNode$1("td", _hoisted_1$1, [
                          _createVNode$1(_component_v_tooltip, { location: "bottom" }, {
                            activator: _withCtx$1(({ props }) => [
                              _createElementVNode$1("div", _mergeProps({ ref_for: true }, props, { style: { "display": "flex", "align-items": "center" } }), [
                                item.hasOwnProperty("client") && item.client ? (_openBlock$1(), _createBlock(_component_v_chip, {
                                  key: 0,
                                  color: item.hasOwnProperty("client") && item.client === "transmission" ? "primary" : "error",
                                  size: "small",
                                  "text-color": "white"
                                }, {
                                  default: _withCtx$1(() => [
                                    _createTextVNode$1(_toDisplayString$1((item.client || "").slice(0, 2)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["color"])) : _createCommentVNode("", true),
                                _createElementVNode$1("span", _hoisted_2$1, _toDisplayString$1(item.name), 1),
                                _createVNode$1(_component_v_btn, {
                                  icon: "mdi-content-copy",
                                  size: "x-small",
                                  onClick: _withModifiers(($event) => _copyPath(item.path), ["stop"]),
                                  style: { "margin-left": "8px" }
                                }, null, 8, ["onClick"])
                              ], 16)
                            ]),
                            default: _withCtx$1(() => [
                              _createElementVNode$1("span", null, _toDisplayString$1(item.path), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        item.type == "torrent" ? (_openBlock$1(), _createElementBlock$1(_Fragment, { key: 0 }, [
                          _createElementVNode$1("td", null, [
                            _createVNode$1(_component_v_chip, {
                              color: deleteOptionText(item).color,
                              size: "small",
                              "text-color": "white"
                            }, {
                              default: _withCtx$1(() => [
                                _createTextVNode$1(_toDisplayString$1(deleteOptionText(item).text), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _createElementVNode$1("td", null, _toDisplayString$1(itemSizeText(item)), 1)
                        ], 64)) : item.type == "file" ? (_openBlock$1(), _createElementBlock$1(_Fragment, { key: 1 }, [
                          _createElementVNode$1("td", null, [
                            _createVNode$1(_component_v_chip, {
                              color: deleteOptionText(item).color,
                              size: "small",
                              "text-color": "white"
                            }, {
                              default: _withCtx$1(() => [
                                _createTextVNode$1(_toDisplayString$1(deleteOptionText(item).text), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ]),
                          _createElementVNode$1("td", _hoisted_3, _toDisplayString$1(_unref(formatBytes)(item.size)), 1)
                        ], 64)) : _createCommentVNode("", true),
                        _createElementVNode$1("td", _hoisted_4, [
                          _createVNode$1(_component_v_btn, {
                            icon: "",
                            size: "small",
                            onClick: ($event) => removeFromCleanup(item),
                            color: "error"
                          }, {
                            default: _withCtx$1(() => [
                              _createVNode$1(_component_v_icon, null, {
                                default: _withCtx$1(() => _cache[2] || (_cache[2] = [
                                  _createTextVNode$1("mdi-delete")
                                ])),
                                _: 1,
                                __: [2]
                              }),
                              _createVNode$1(_component_v_tooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: _withCtx$1(() => _cache[3] || (_cache[3] = [
                                  _createTextVNode$1("从待清理中移除")
                                ])),
                                _: 1,
                                __: [3]
                              })
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1,
                __: [4]
              })
            ]),
            _: 1
          }),
          _createVNode$1(_component_v_snackbar, {
            modelValue: state.snackbar.show,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.snackbar.show = $event),
            timeout: 3e3,
            color: state.snackbar.color,
            location: state.snackbar.location
          }, {
            default: _withCtx$1(() => [
              _createTextVNode$1(_toDisplayString$1(state.snackbar.message), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "color", "location"])
        ]),
        _: 1
      });
    };
  }
});

const CleanupList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6a5d0e37"]]);

const {defineComponent:_defineComponent} = await importShared('vue');

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,withCtx:_withCtx,vShow:_vShow,withDirectives:_withDirectives,toDisplayString:_toDisplayString,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { class: "plugin-common plugin-page" };
const _hoisted_2 = { class: "d-flex" };
const {onMounted,reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Page",
  props: {
    api: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  emits: ["close", "switch"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const toolbarRef = ref();
    const cleanupRef = ref();
    const scanResultsRef = ref();
    const state = reactive({
      listTab: "scan",
      scaning: false,
      clearing: false,
      scanRes: {
        combinedList: [],
        total: 0,
        totalSize: 0,
        tTotal: 0,
        tTotalSize: 0,
        mTotal: 0,
        mTotalSize: 0,
        page: 1,
        pageSize: 50
      },
      scanParams: {
        page: 1,
        pageSize: 50,
        sortBy: [{ key: "name", order: "asc" }],
        filter: {
          path: "",
          client_name: "",
          client: "",
          seeds_limit: [null, null],
          size_limit: [null, null]
        }
      },
      snackbar: {
        location: "top",
        show: false,
        message: "",
        color: "success"
      },
      initConfig: {}
    });
    const setTab = (name) => {
      state.listTab = name;
    };
    const switch_tab = (name) => {
      emit("switch", name);
    };
    const close = () => {
      emit("close");
    };
    const initData = () => {
      state.scanRes.combinedList = [];
      state.scanRes.tTotal = 0;
      state.scanRes.mTotal = 0;
      scanResultsRef.value.clearSelectedScans();
    };
    const startScan = (isPageChange = false, isPageSizeChange = false, isSortChanged = false, filterChanged = false) => {
      console.log("开始扫描", `扫描参数: ${toolbarRef.value.state},isPageChange: ${isPageChange}`);
      state.scaning = true;
      initData();
      if (!isPageChange) {
        state.scanParams.page = 1;
      }
      let url = `plugin/${PLUGIN_ID}/scan?pageChange=${isPageChange}&pageSizeChange=${isPageSizeChange}&sortChange=${isSortChanged}&filterChange=${filterChanged}`;
      const params = { ...toolbarRef.value.state };
      params["page"] = state.scanParams.page;
      params["limit"] = state.scanParams.pageSize;
      params["sortBy"] = [state.scanParams.sortBy[0].key, state.scanParams.sortBy[0].order];
      params["filter"] = state.scanParams.filter;
      console.log("startScan", params);
      props.api.post(url, params).then((res) => {
        state.scanRes.combinedList = res.data.combined_list || [];
        state.scanRes.total = res.data.total || 0;
        state.scanRes.tTotal = res.data.t_total || 0;
        state.scanRes.mTotal = res.data.m_total || 0;
        state.scanRes.totalSize = res.data.total_size || 0;
        state.scanRes.tTotalSize = res.data.t_total_size || 0;
        state.scanRes.mTotalSize = res.data.m_total_size || 0;
        state.scanRes.page = res.data.page || 1;
        state.scanRes.pageSize = res.data.page_size || 50;
        setTab("scan");
      }).catch((error) => {
        console.error("扫描失败:", error);
      }).finally(() => {
        state.scaning = false;
      });
    };
    const resetParams = () => {
      if (toolbarRef.value && toolbarRef.value.initParams) {
        toolbarRef.value.initParams();
        console.log("参数已重置");
      } else {
        console.warn("ToolBar 或 initParams 方法未定义");
      }
    };
    const deleteAllRecord = () => {
      initData();
      state.scanRes.page = 1;
    };
    const addToCleanup = (cleanupList) => {
      console.log("添加到待清理", cleanupList.length);
      if (!cleanupList || cleanupList.length == 0) {
        showNotification("添加失败，未选择需要清理的项", "error");
        return;
      }
      let willCleanupList = cleanupList;
      cleanupRef.value.setCleanupList(willCleanupList);
    };
    const startCleanup = () => {
      state.clearing = true;
      let willCleanupList = cleanupRef.value.getCleanupList();
      props.api.post(`plugin/${PLUGIN_ID}/clear`, willCleanupList).then((res) => {
        if (res["code"] != "ok") {
          showNotification(`清理失败:${res["message"]}`, "error");
        } else {
          showNotification("清理成功", "success");
          cleanupRef.value.deleteAllRecord();
        }
        state.snackbar.show = true;
      }).catch((e) => {
        console.error("清理出错", e);
        showNotification("清理失败: " + (e.message || "未知错误"), "error");
      }).finally(() => {
        state.clearing = false;
      });
    };
    const handleScanParamsUpdate = (newScanParams) => {
      let isPageChanged = false;
      let isPageSizeChanged = false;
      let isSortChanged = false;
      if (newScanParams.changed === "page") {
        isPageChanged = true;
      } else if (newScanParams.changed === "pageSize") {
        isPageSizeChanged = true;
      } else if (newScanParams.changed === "sort") {
        isSortChanged = true;
      }
      if (isPageChanged) {
        state.scanParams.page = Number(newScanParams.page);
      } else if (isPageSizeChanged) {
        state.scanParams.pageSize = Number(newScanParams.pageSize);
      }
      if (isSortChanged) {
        const sortItem = {
          key: newScanParams.sort[0].key,
          order: newScanParams.sort[0].order
        };
        state.scanParams.sortBy = [sortItem];
      }
      startScan(isPageChanged, isPageSizeChanged, isSortChanged);
    };
    const applyFilter = (filter) => {
      state.scanParams.filter.path = filter.path || "";
      state.scanParams.filter.client_name = filter.client_name || "";
      state.scanParams.filter.client = filter.client || "";
      state.scanParams.filter.seeds_limit = filter.seeds_limit || [];
      state.scanParams.filter.size_limit = filter.size_limit || [];
      startScan(false, false, false, true);
    };
    const downloadTracker = async () => {
      let url = `/plugin/${PLUGIN_ID}/tracker-list`;
      try {
        const res = await props.api.get(url);
<<<<<<<< HEAD:plugins.v2/seedcleaner/dist/assets/__federation_expose_Page-BTA6VW3n.js
========
        console.log("downloadTracker=>>", res);
>>>>>>>> 407fed592d029922aea7c43b899e45b44d4c99cf:plugins.v2/seedcleaner/dist/assets/__federation_expose_Page-BWgtyUAD.js
        const tracker_list = res.data;
        if (tracker_list && tracker_list.length > 0) {
          const fileContent = tracker_list.join("\n");
          const blob = new Blob([fileContent], { type: "text/plain;charset=utf-8" });
          const blobUrl = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = blobUrl;
          link.download = "trackers.txt";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(blobUrl);
          showNotification("下载成功！", "success");
        } else {
          showNotification("空数据，无法下载", "error");
        }
      } catch (err) {
        showNotification("下载失败！", "error");
        console.log("downloadTracker error=>>", err);
      }
    };
    const showNotification = (text, color = "success") => {
      state.snackbar.message = text;
      state.snackbar.color = color;
      state.snackbar.show = true;
    };
    const getConfig = () => {
      let url = `/plugin/${PLUGIN_ID}/config`;
      props.api.get(url).then((res) => {
        state.initConfig = res;
      });
    };
    onMounted(() => {
      getConfig();
    });
    return (_ctx, _cache) => {
      const _component_v_icon = _resolveComponent("v-icon");
      const _component_v_card_subtitle = _resolveComponent("v-card-subtitle");
      const _component_v_spacer = _resolveComponent("v-spacer");
      const _component_v_tooltip = _resolveComponent("v-tooltip");
      const _component_v_btn = _resolveComponent("v-btn");
      const _component_v_card_title = _resolveComponent("v-card-title");
      const _component_v_divider = _resolveComponent("v-divider");
      const _component_v_tab = _resolveComponent("v-tab");
      const _component_v_tabs = _resolveComponent("v-tabs");
      const _component_v_card = _resolveComponent("v-card");
      const _component_v_snackbar = _resolveComponent("v-snackbar");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_v_card, {
          flat: "",
          class: "rounded border"
        }, {
          default: _withCtx(() => [
            _createVNode(_component_v_card_title, { class: "text-subtitle text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
              default: _withCtx(() => [
                _createVNode(_component_v_icon, {
                  icon: "mdi-tools",
                  class: "mr-2",
                  color: "primary",
                  size: "small"
                }),
                _cache[9] || (_cache[9] = _createElementVNode("span", null, "种子清理工", -1)),
                _createVNode(_component_v_card_subtitle, { class: "ml-2" }, {
                  default: _withCtx(() => _cache[6] || (_cache[6] = [
                    _createTextVNode("详情页")
                  ])),
                  _: 1,
                  __: [6]
                }),
                _createVNode(_component_v_spacer),
                _createVNode(_component_v_btn, {
                  color: "success",
                  icon: "",
                  onClick: _cache[0] || (_cache[0] = ($event) => switch_tab("config")),
                  variant: "tonal",
                  disabled: state.scaning || state.clearing,
                  size: "small",
                  class: "mr-4"
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_icon, {
                      icon: "mdi-cog",
                      size: "small"
                    }),
                    _createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: _withCtx(() => _cache[7] || (_cache[7] = [
                        _createTextVNode("配置页")
                      ])),
                      _: 1,
                      __: [7]
                    })
                  ]),
                  _: 1
                }, 8, ["disabled"]),
                _createVNode(_component_v_btn, {
                  color: "primary",
                  onClick: close,
                  icon: "",
                  disabled: state.scaning || state.clearing,
                  variant: "tonal",
                  size: "small",
                  class: "mr-4"
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_icon, {
                      icon: "mdi-close",
                      size: "small"
                    }),
                    _createVNode(_component_v_tooltip, {
                      activator: "parent",
                      location: "top"
                    }, {
                      default: _withCtx(() => _cache[8] || (_cache[8] = [
                        _createTextVNode("关闭")
                      ])),
                      _: 1,
                      __: [8]
                    })
                  ]),
                  _: 1
                }, 8, ["disabled"])
              ]),
              _: 1,
              __: [9]
            }),
            _createVNode(ToolBar, {
              ref_key: "toolbarRef",
              ref: toolbarRef
            }, null, 512),
            _createVNode(_component_v_divider),
            _createVNode(_component_v_card, { flat: "" }, {
              default: _withCtx(() => [
                _createVNode(_component_v_card_title, { class: "text-subtitle-2 d-flex align-center px-2 py-1 bg-primary-lighten-5" }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_icon, {
                      icon: "mdi-list-box",
                      class: "mr-2",
                      color: "primary",
                      size: "small"
                    }),
                    _cache[14] || (_cache[14] = _createElementVNode("span", null, "列表区域", -1)),
                    _createVNode(_component_v_spacer),
                    _createElementVNode("div", _hoisted_2, [
                      _createVNode(_component_v_btn, {
                        color: "primary",
                        onClick: _cache[1] || (_cache[1] = ($event) => startScan(false)),
                        icon: "",
                        variant: "tonal",
                        disabled: state.clearing,
                        loading: state.scaning,
                        size: "small",
                        class: "ml-4 mr-4"
                      }, {
                        default: _withCtx(() => [
                          _createVNode(_component_v_icon, {
                            icon: "mdi-magnify",
                            size: "small"
                          }),
                          _createVNode(_component_v_tooltip, {
                            activator: "parent",
                            location: "top"
                          }, {
                            default: _withCtx(() => _cache[10] || (_cache[10] = [
                              _createTextVNode("开始扫描")
                            ])),
                            _: 1,
                            __: [10]
                          })
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"]),
                      _createVNode(_component_v_btn, {
                        color: "secondary",
                        onClick: downloadTracker,
                        icon: "",
                        variant: "tonal",
                        disabled: state.scaning || state.clearing,
                        size: "small",
                        class: "mr-4"
                      }, {
                        default: _withCtx(() => [
                          _createVNode(_component_v_icon, {
                            icon: "mdi-tray-arrow-down",
                            size: "small"
                          }),
                          _createVNode(_component_v_tooltip, {
                            activator: "parent",
                            location: "top"
                          }, {
                            default: _withCtx(() => _cache[11] || (_cache[11] = [
                              _createTextVNode("导出所有Tracker")
                            ])),
                            _: 1,
                            __: [11]
                          })
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      _createVNode(_component_v_btn, {
                        color: "warning",
                        onClick: resetParams,
                        icon: "",
                        variant: "tonal",
                        disabled: state.scaning || state.clearing,
                        size: "small",
                        class: "mr-4"
                      }, {
                        default: _withCtx(() => [
                          _createVNode(_component_v_icon, {
                            icon: "mdi-refresh",
                            size: "small"
                          }),
                          _createVNode(_component_v_tooltip, {
                            activator: "parent",
                            location: "top"
                          }, {
                            default: _withCtx(() => _cache[12] || (_cache[12] = [
                              _createTextVNode("重置选项")
                            ])),
                            _: 1,
                            __: [12]
                          })
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      _createVNode(_component_v_btn, {
                        color: "error",
                        onClick: startCleanup,
                        icon: "",
                        variant: "tonal",
                        disabled: state.scaning,
                        loading: state.clearing,
                        class: "mr-4",
                        size: "small"
                      }, {
                        default: _withCtx(() => [
                          _createVNode(_component_v_icon, {
                            icon: "mdi-trash-can-outline",
                            size: "small"
                          }),
                          _createVNode(_component_v_tooltip, {
                            activator: "parent",
                            location: "top"
                          }, {
                            default: _withCtx(() => _cache[13] || (_cache[13] = [
                              _createTextVNode("开始清理")
                            ])),
                            _: 1,
                            __: [13]
                          })
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"])
                    ]),
                    _cache[15] || (_cache[15] = _createElementVNode("div", null, null, -1))
                  ]),
                  _: 1,
                  __: [14, 15]
                }),
                _createVNode(_component_v_tabs, {
                  modelValue: state.listTab,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.listTab = $event),
                  grow: ""
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_tab, {
                      value: "scan",
                      onClick: _cache[2] || (_cache[2] = ($event) => setTab("scan"))
                    }, {
                      default: _withCtx(() => _cache[16] || (_cache[16] = [
                        _createTextVNode("扫描结果")
                      ])),
                      _: 1,
                      __: [16]
                    }),
                    _createVNode(_component_v_tab, {
                      value: "cleanup",
                      onClick: _cache[3] || (_cache[3] = ($event) => setTab("cleanup"))
                    }, {
                      default: _withCtx(() => _cache[17] || (_cache[17] = [
                        _createTextVNode("待清理")
                      ])),
                      _: 1,
                      __: [17]
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                _withDirectives(_createVNode(ScanResults, {
                  "scan-res": state.scanRes,
                  onDeleteAllRecord: deleteAllRecord,
                  onAddToCleanup: addToCleanup,
                  "scan-params": state.scanParams,
                  loading: state.scaning,
                  initialConfig: state.initConfig,
                  "onUpdate:scanParams": handleScanParamsUpdate,
                  ref_key: "scanResultsRef",
                  ref: scanResultsRef,
                  onApplyFilter: applyFilter
                }, null, 8, ["scan-res", "scan-params", "loading", "initialConfig"]), [
                  [_vShow, state.listTab == "scan"]
                ]),
                _withDirectives(_createVNode(CleanupList, {
                  ref_key: "cleanupRef",
                  ref: cleanupRef
                }, null, 512), [
                  [_vShow, state.listTab == "cleanup"]
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _createVNode(_component_v_snackbar, {
          modelValue: state.snackbar.show,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.snackbar.show = $event),
          timeout: 3e3,
          color: state.snackbar.color,
          location: state.snackbar.location
        }, {
          default: _withCtx(() => [
            _createTextVNode(_toDisplayString(state.snackbar.message), 1)
          ]),
          _: 1
        }, 8, ["modelValue", "color", "location"])
      ]);
    };
  }
});

<<<<<<<< HEAD:plugins.v2/seedcleaner/dist/assets/__federation_expose_Page-BTA6VW3n.js
const PageComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-64113703"]]);
========
const PageComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3d2ae210"]]);
>>>>>>>> 407fed592d029922aea7c43b899e45b44d4c99cf:plugins.v2/seedcleaner/dist/assets/__federation_expose_Page-BWgtyUAD.js

export { PageComponent as default };
