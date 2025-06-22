import { importShared } from './__federation_fn_import-JrT3xvdd.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import { f as formatBytes, O as ONLY_TORRENT, A as ALL, P as PLUGIN_ID } from './definedFunctions-Bb1e_4Bq.js';

const {resolveComponent:_resolveComponent$3,createVNode:_createVNode$3,createElementVNode:_createElementVNode$3,withCtx:_withCtx$3,openBlock:_openBlock$3,createBlock:_createBlock$2} = await importShared('vue');


const _hoisted_1$3 = { class: "div-radio-group" };
const _hoisted_2$2 = { class: "div-radio-group" };
const _hoisted_3$2 = { class: "div-radio-group" };

const {reactive: reactive$3} = await importShared('vue');



const _sfc_main$3 = {
  __name: 'ToolBar',
  setup(__props, { expose: __expose }) {

const state = reactive$3({
   missingOptions:{
        seed: false,
        file: false
    },
    auxOption:"all",
    removeOption:"all",
    trackerInput:"",
    existingSeedData: false
});

const initParams = ()=>{
  // console.log("initParams called",state);
  state.missingOptions.seed = false;
  state.missingOptions.file = false;
  state.auxOption = 'all';
  state.removeOption = 'all';
  state.trackerInput = '';
  state.existingSeedData = false;
  console.log("state after initParams", state.value); 
};
__expose({
  state,
  initParams,
});

return (_ctx, _cache) => {
  const _component_v_icon = _resolveComponent$3("v-icon");
  const _component_v_card_title = _resolveComponent$3("v-card-title");
  const _component_v_col = _resolveComponent$3("v-col");
  const _component_v_checkbox = _resolveComponent$3("v-checkbox");
  const _component_v_row = _resolveComponent$3("v-row");
  const _component_v_radio = _resolveComponent$3("v-radio");
  const _component_v_radio_group = _resolveComponent$3("v-radio-group");
  const _component_v_text_field = _resolveComponent$3("v-text-field");
  const _component_v_card_text = _resolveComponent$3("v-card-text");
  const _component_v_card = _resolveComponent$3("v-card");

  return (_openBlock$3(), _createBlock$2(_component_v_card, {
    flat: "",
    class: "tool-bar px-2 py-1"
  }, {
    default: _withCtx$3(() => [
      _createVNode$3(_component_v_card_title, { class: "text-subtitle-2 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
        default: _withCtx$3(() => [
          _createVNode$3(_component_v_icon, {
            icon: "mdi-magnify",
            class: "mr-2",
            color: "primary",
            size: "small"
          }),
          _cache[6] || (_cache[6] = _createElementVNode$3("span", null, "扫描选项", -1))
        ]),
        _: 1,
        __: [6]
      }),
      _createVNode$3(_component_v_card_text, null, {
        default: _withCtx$3(() => [
          _createVNode$3(_component_v_row, {
            align: "center",
            "no-gutters": "",
            class: "d-flex"
          }, {
            default: _withCtx$3(() => [
              _createVNode$3(_component_v_col, { cols: "2" }, {
                default: _withCtx$3(() => _cache[7] || (_cache[7] = [
                  _createElementVNode$3("span", { class: "label-text font-weight-bold" }, "缺失选项：", -1)
                ])),
                _: 1,
                __: [7]
              }),
              _createVNode$3(_component_v_col, { cols: "3" }, {
                default: _withCtx$3(() => [
                  _createVNode$3(_component_v_checkbox, {
                    modelValue: state.missingOptions.file,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((state.missingOptions.file) = $event)),
                    label: "缺失源文件的种子",
                    "hide-details": "",
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              _createVNode$3(_component_v_col, { cols: "3" }, {
                default: _withCtx$3(() => [
                  _createVNode$3(_component_v_checkbox, {
                    modelValue: state.missingOptions.seed,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((state.missingOptions.seed) = $event)),
                    label: "缺失种子的源文件",
                    "hide-details": "",
                    size: "small"
                  }, null, 8, ["modelValue"])
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
              _createVNode$3(_component_v_col, { cols: "2" }, {
                default: _withCtx$3(() => _cache[8] || (_cache[8] = [
                  _createElementVNode$3("span", { class: "label-text font-weight-bold" }, "有无辅种：", -1)
                ])),
                _: 1,
                __: [8]
              }),
              _createVNode$3(_component_v_col, { cols: "10" }, {
                default: _withCtx$3(() => [
                  _createVNode$3(_component_v_radio_group, {
                    modelValue: state.auxOption,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((state.auxOption) = $event)),
                    inline: "",
                    "hide-details": "",
                    size: "small"
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
          }),
          _createVNode$3(_component_v_row, {
            align: "center",
            "no-gutters": "",
            class: "d-flex"
          }, {
            default: _withCtx$3(() => [
              _createVNode$3(_component_v_col, { cols: "2" }, {
                default: _withCtx$3(() => _cache[9] || (_cache[9] = [
                  _createElementVNode$3("span", { class: "label-text font-weight-bold" }, "删除选项：", -1)
                ])),
                _: 1,
                __: [9]
              }),
              _createVNode$3(_component_v_col, { cols: "10" }, {
                default: _withCtx$3(() => [
                  _createVNode$3(_component_v_radio_group, {
                    modelValue: state.removeOption,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((state.removeOption) = $event)),
                    inline: "",
                    "hide-details": "",
                    size: "small"
                  }, {
                    default: _withCtx$3(() => [
                      _createElementVNode$3("div", _hoisted_2$2, [
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
          }),
          _createVNode$3(_component_v_row, {
            class: "mt-2 d-flex",
            align: "center",
            "no-gutters": ""
          }, {
            default: _withCtx$3(() => [
              _createVNode$3(_component_v_col, { cols: "2" }, {
                default: _withCtx$3(() => _cache[10] || (_cache[10] = [
                  _createElementVNode$3("span", { class: "label-text font-weight-bold" }, "Tracker：", -1)
                ])),
                _: 1,
                __: [10]
              }),
              _createVNode$3(_component_v_col, { cols: "10" }, {
                default: _withCtx$3(() => [
                  _createVNode$3(_component_v_text_field, {
                    modelValue: state.trackerInput,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((state.trackerInput) = $event)),
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
          }),
          _createVNode$3(_component_v_row, {
            class: "d-flex",
            align: "center",
            "no-gutters": ""
          }, {
            default: _withCtx$3(() => [
              _createVNode$3(_component_v_col, { cols: "2" }, {
                default: _withCtx$3(() => _cache[11] || (_cache[11] = [
                  _createElementVNode$3("span", { class: "label-text font-weight-bold" }, "是否使用存量种子数据：", -1)
                ])),
                _: 1,
                __: [11]
              }),
              _createVNode$3(_component_v_col, { cols: "10" }, {
                default: _withCtx$3(() => [
                  _createVNode$3(_component_v_radio_group, {
                    modelValue: state.existingSeedData,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((state.existingSeedData) = $event)),
                    inline: "",
                    "hide-details": "",
                    size: "small"
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
  }))
}
}

};
const ToolBar = /*#__PURE__*/_export_sfc(_sfc_main$3, [['__scopeId',"data-v-8f891bfa"]]);

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$2,createTextVNode:_createTextVNode$2,resolveComponent:_resolveComponent$2,withCtx:_withCtx$2,createVNode:_createVNode$2,toDisplayString:_toDisplayString$2,openBlock:_openBlock$2,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode$1,renderList:_renderList$1,Fragment:_Fragment$1,createElementBlock:_createElementBlock$2,withModifiers:_withModifiers$1,mergeProps:_mergeProps$1,unref:_unref$1} = await importShared('vue');

const _hoisted_1$2 = { class: "text-left" };
const _hoisted_2$1 = { class: "name-column" };
const _hoisted_3$1 = { style: { "margin-left": "8px" } };
const _hoisted_4$1 = { class: "size-column" };
const {computed: computed$1,reactive: reactive$2} = await importShared('vue');
const _sfc_main$2 = /* @__PURE__ */ _defineComponent$2({
  __name: "ScanResults",
  props: {
    scanRes: {
      type: Object,
      default: () => ({
        combinedList: [],
        total: 0,
        t_total: 0,
        m_total: 0,
        page: 1,
        pageSize: 50
      })
    },
    scanParams: {
      type: Object,
      required: true,
      default: () => ({
        page: 1,
        pageSize: 50
      })
    }
  },
  emits: ["deleteAllRecord", "addToCleanup", "update:scanParams"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const state = reactive$2({
      selectedScans: [],
      snackbar: {
        location: "top",
        show: false,
        message: "",
        color: "success"
      }
    });
    const totalComputed = computed$1(() => {
      let res = [];
      if (props.scanRes.tTotal > 0) {
        let torrentFIleText = `种子：${props.scanRes.tTotal}`;
        res.push(torrentFIleText);
      }
      if (props.scanRes.mTotal > 0) {
        let missingFileText = `缺失种子的文件：${props.scanRes.mTotal}`;
        res.push(missingFileText);
      }
      if (props.scanRes.tTotal > 0 && props.scanRes.mTotal > 0) {
        let totalText = `总计：${props.scanRes.total}`;
        res.push(totalText);
      }
      return res.join(" | ");
    });
    const allScanKeys = computed$1(() => {
      const Keys = props.scanRes.combinedList.map((item) => item.hash);
      return [...Keys];
    });
    const selectAllScans = computed$1({
      get: () => allScanKeys.value.length > 0 && state.selectedScans.length === allScanKeys.value.length,
      set: (value) => {
        if (value) {
          state.selectedScans = [...allScanKeys.value];
        } else {
          state.selectedScans = [];
        }
      }
    });
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
    const handlePageChange = (newPage) => {
      emit("update:scanParams", {
        pageSize: props.scanParams.pageSize,
        page: newPage,
        changed: "page"
      });
    };
    const handlePageSizeChange = (newPageSize) => {
      emit("update:scanParams", {
        pageSize: newPageSize,
        page: 1,
        // 切换每页数量后跳转到第一页
        changed: "pageSize"
      });
    };
    const clearSelectedScans = () => {
      state.selectedScans = [];
    };
    const showNotification = (text, color = "success") => {
      state.snackbar.message = text;
      state.snackbar.color = color;
      state.snackbar.show = true;
    };
    const copyPath = async (path) => {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(path);
          showNotification("路径已复制到剪贴板");
        } catch (err) {
          console.error("复制路径失败", err);
          showNotification("复制路径失败", "error");
        }
      } else {
        try {
          const textarea = document.createElement("textarea");
          textarea.value = path;
          textarea.style.position = "fixed";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          const successful = document.execCommand("copy");
          document.body.removeChild(textarea);
          if (successful) {
            showNotification("路径已复制到剪贴板");
          } else {
            showNotification("复制路径失败", "error");
          }
        } catch (err) {
          console.error("兼容方案:复制路径失败", err);
          showNotification("复制路径失败", "error");
        }
      }
    };
    __expose({
      clearSelectedScans
    });
    return (_ctx, _cache) => {
      const _component_v_btn = _resolveComponent$2("v-btn");
      const _component_v_chip = _resolveComponent$2("v-chip");
      const _component_v_spacer = _resolveComponent$2("v-spacer");
      const _component_v_select = _resolveComponent$2("v-select");
      const _component_v_pagination = _resolveComponent$2("v-pagination");
      const _component_v_card_title = _resolveComponent$2("v-card-title");
      const _component_v_checkbox = _resolveComponent$2("v-checkbox");
      const _component_v_tooltip = _resolveComponent$2("v-tooltip");
      const _component_v_table = _resolveComponent$2("v-table");
      const _component_v_card_text = _resolveComponent$2("v-card-text");
      const _component_v_snackbar = _resolveComponent$2("v-snackbar");
      const _component_v_card = _resolveComponent$2("v-card");
      return _openBlock$2(), _createBlock$1(_component_v_card, {
        flat: "",
        class: "mb-4"
      }, {
        default: _withCtx$2(() => [
          _createVNode$2(_component_v_card_title, { class: "text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
            default: _withCtx$2(() => [
              _cache[7] || (_cache[7] = _createElementVNode$2("span", null, "扫描记录", -1)),
              _createVNode$2(_component_v_btn, {
                color: "primary",
                onClick: deleteAllRecord,
                class: "ml-2",
                "prepend-icon": "mdi-magnify",
                size: "small"
              }, {
                default: _withCtx$2(() => _cache[5] || (_cache[5] = [
                  _createTextVNode$2("清空记录 ")
                ])),
                _: 1,
                __: [5]
              }),
              _createVNode$2(_component_v_btn, {
                color: "success",
                onClick: addToCleanup,
                class: "ml-2",
                "prepend-icon": "mdi-plus-box",
                size: "small"
              }, {
                default: _withCtx$2(() => _cache[6] || (_cache[6] = [
                  _createTextVNode$2("添加到待清理 ")
                ])),
                _: 1,
                __: [6]
              }),
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
                  _createTextVNode$2(_toDisplayString$2(`已选择 ${state.selectedScans.length}项`), 1)
                ]),
                _: 1
              }),
              _createVNode$2(_component_v_spacer),
              _createVNode$2(_component_v_select, {
                modelValue: __props.scanParams.pageSize,
                "onUpdate:modelValue": [
                  _cache[0] || (_cache[0] = ($event) => __props.scanParams.pageSize = $event),
                  handlePageSizeChange
                ],
                items: [50, 100, 200, 300, 500],
                label: "每页数量",
                variant: "outlined",
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
                "total-visible": 5
              }, null, 8, ["modelValue", "length"])
            ]),
            _: 1,
            __: [7]
          }),
          _createVNode$2(_component_v_card_text, { class: "pa-0" }, {
            default: _withCtx$2(() => [
              _createVNode$2(_component_v_table, {
                "fixed-header": "",
                height: "320px",
                density: "compact",
                hover: ""
              }, {
                default: _withCtx$2(() => [
                  _createElementVNode$2("thead", null, [
                    _createElementVNode$2("tr", null, [
                      _createElementVNode$2("th", _hoisted_1$2, [
                        _createVNode$2(_component_v_checkbox, {
                          modelValue: selectAllScans.value,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectAllScans.value = $event),
                          "hide-details": ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _cache[8] || (_cache[8] = _createElementVNode$2("th", { class: "text-left name-column" }, "名称", -1)),
                      _cache[9] || (_cache[9] = _createElementVNode$2("th", { class: "text-left" }, "Tracker", -1)),
                      _cache[10] || (_cache[10] = _createElementVNode$2("th", { class: "text-left" }, "状态", -1)),
                      _cache[11] || (_cache[11] = _createElementVNode$2("th", { class: "text-left size-column" }, "大小", -1))
                    ])
                  ]),
                  _createElementVNode$2("tbody", null, [
                    (_openBlock$2(true), _createElementBlock$2(_Fragment$1, null, _renderList$1(props.scanRes.combinedList, (item) => {
                      return _openBlock$2(), _createElementBlock$2("tr", {
                        key: item.hash
                      }, [
                        _createElementVNode$2("td", null, [
                          _createVNode$2(_component_v_checkbox, {
                            modelValue: state.selectedScans,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.selectedScans = $event),
                            value: item.hash,
                            "hide-details": ""
                          }, null, 8, ["modelValue", "value"])
                        ]),
                        _createElementVNode$2("td", _hoisted_2$1, [
                          _createVNode$2(_component_v_tooltip, { location: "bottom" }, {
                            activator: _withCtx$2(({ props: props2 }) => [
                              _createElementVNode$2("div", _mergeProps$1({ ref_for: true }, props2, { style: { "display": "flex", "align-items": "center" } }), [
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
                                _createElementVNode$2("span", _hoisted_3$1, _toDisplayString$2(item.name), 1),
                                _createVNode$2(_component_v_btn, {
                                  icon: "mdi-content-copy",
                                  size: "x-small",
                                  onClick: _withModifiers$1(($event) => copyPath(item.path), ["stop"]),
                                  style: { "margin-left": "8px" }
                                }, null, 8, ["onClick"])
                              ], 16)
                            ]),
                            default: _withCtx$2(() => [
                              _createElementVNode$2("span", null, _toDisplayString$2(item.path), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        item.type === "torrent" ? (_openBlock$2(), _createElementBlock$2(_Fragment$1, { key: 0 }, [
                          _createElementVNode$2("td", null, _toDisplayString$2(item.trackers.length > 0 ? item.trackers.join(", ") : "无 Tracker"), 1),
                          _createElementVNode$2("td", null, [
                            _createVNode$2(_component_v_chip, {
                              color: item.data_missing ? "error" : "success",
                              size: "small",
                              "text-color": "white"
                            }, {
                              default: _withCtx$2(() => [
                                _createTextVNode$2(_toDisplayString$2(item.data_missing ? "缺失源文件" : "包含源文件"), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"])
                          ])
                        ], 64)) : item.type === "file" ? (_openBlock$2(), _createElementBlock$2(_Fragment$1, { key: 1 }, [
                          _cache[13] || (_cache[13] = _createElementVNode$2("td", null, "无 Tracker", -1)),
                          _createElementVNode$2("td", null, [
                            _createVNode$2(_component_v_chip, {
                              color: "warning",
                              size: "small",
                              "text-color": "white"
                            }, {
                              default: _withCtx$2(() => _cache[12] || (_cache[12] = [
                                _createTextVNode$2("缺失种子")
                              ])),
                              _: 1,
                              __: [12]
                            })
                          ])
                        ], 64)) : _createCommentVNode$1("", true),
                        _createElementVNode$2("td", _hoisted_4$1, _toDisplayString$2(item.size ? `${_unref$1(formatBytes)(item.size)}` : "未知大小"), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          _createVNode$2(_component_v_snackbar, {
            modelValue: state.snackbar.show,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.snackbar.show = $event),
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

const ScanResults = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-119bda9d"]]);

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$1,toDisplayString:_toDisplayString$1,createTextVNode:_createTextVNode$1,resolveComponent:_resolveComponent$1,withCtx:_withCtx$1,createVNode:_createVNode$1,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createBlock:_createBlock,createCommentVNode:_createCommentVNode,withModifiers:_withModifiers,mergeProps:_mergeProps,unref:_unref} = await importShared('vue');

const _hoisted_1$1 = { class: "name-column" };
const _hoisted_2 = { style: { "margin-left": "8px" } };
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
    const copyPath = async (path) => {
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(path);
          showNotification("路径已复制到剪贴板");
        } catch (err) {
          console.error("复制路径失败", err);
          showNotification("复制路径失败", "error");
        }
      } else {
        try {
          const textarea = document.createElement("textarea");
          textarea.value = path;
          textarea.style.position = "fixed";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          const successful = document.execCommand("copy");
          document.body.removeChild(textarea);
          if (successful) {
            showNotification("路径已复制到剪贴板");
          } else {
            showNotification("复制路径失败", "error");
          }
        } catch (err) {
          console.error("兼容方案:复制路径失败", err);
          showNotification("复制路径失败", "error");
        }
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
      const _component_v_btn = _resolveComponent$1("v-btn");
      const _component_v_card_title = _resolveComponent$1("v-card-title");
      const _component_v_tooltip = _resolveComponent$1("v-tooltip");
      const _component_v_icon = _resolveComponent$1("v-icon");
      const _component_v_table = _resolveComponent$1("v-table");
      const _component_v_card_text = _resolveComponent$1("v-card-text");
      const _component_v_snackbar = _resolveComponent$1("v-snackbar");
      const _component_v_card = _resolveComponent$1("v-card");
      return _openBlock$1(), _createBlock(_component_v_card, { flat: "" }, {
        default: _withCtx$1(() => [
          _createVNode$1(_component_v_card_title, { class: "text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
            default: _withCtx$1(() => [
              _cache[2] || (_cache[2] = _createElementVNode$1("span", null, "待清理记录列表", -1)),
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
              _createVNode$1(_component_v_btn, {
                color: "primary",
                onClick: deleteAllRecord,
                class: "ml-2",
                "prepend-icon": "mdi-magnify",
                size: "small"
              }, {
                default: _withCtx$1(() => _cache[1] || (_cache[1] = [
                  _createTextVNode$1("清空记录")
                ])),
                _: 1,
                __: [1]
              })
            ]),
            _: 1,
            __: [2]
          }),
          _createVNode$1(_component_v_card_text, { class: "pa-0" }, {
            default: _withCtx$1(() => [
              _createVNode$1(_component_v_table, {
                "fixed-header": "",
                height: "300px",
                hover: ""
              }, {
                default: _withCtx$1(() => [
                  _cache[5] || (_cache[5] = _createElementVNode$1("thead", null, [
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
                                _createElementVNode$1("span", _hoisted_2, _toDisplayString$1(item.name), 1),
                                _createVNode$1(_component_v_btn, {
                                  icon: "mdi-content-copy",
                                  size: "x-small",
                                  onClick: _withModifiers(($event) => copyPath(item.path), ["stop"]),
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
                                default: _withCtx$1(() => _cache[3] || (_cache[3] = [
                                  _createTextVNode$1("mdi-delete")
                                ])),
                                _: 1,
                                __: [3]
                              }),
                              _createVNode$1(_component_v_tooltip, {
                                activator: "parent",
                                location: "top"
                              }, {
                                default: _withCtx$1(() => _cache[4] || (_cache[4] = [
                                  _createTextVNode$1("从待清理中移除")
                                ])),
                                _: 1,
                                __: [4]
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
                __: [5]
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

const CleanupList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-18954e78"]]);

const {defineComponent:_defineComponent} = await importShared('vue');

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,withCtx:_withCtx,createTextVNode:_createTextVNode,vShow:_vShow,withDirectives:_withDirectives,toDisplayString:_toDisplayString,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { class: "plugin-common plugin-page" };
const {reactive,ref} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Page",
  props: {
    api: {
      type: Object,
      default: () => ({}),
      required: true
    },
    initialConfig: {
      type: Object,
      default: () => ({})
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
        tTotal: 0,
        mTotal: 0,
        page: 1,
        pageSize: 50
      },
      scanParams: {
        page: 1,
        pageSize: 50
      },
      snackbar: {
        location: "top",
        show: false,
        message: "",
        color: "success"
      }
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
    const startScan = (isPageChange = false, isPageSizeChange = false) => {
      console.log("开始扫描", `扫描参数: ${toolbarRef.value.state},isPageChange: ${isPageChange}`);
      state.scaning = true;
      initData();
      if (!isPageChange) {
        state.scanParams.page = 1;
      }
      let url = `plugin/${PLUGIN_ID}/scan?page=${state.scanParams.page}&limit=${state.scanParams.pageSize}&pageChange=${isPageChange}&pageSizeChange=${isPageSizeChange}`;
      props.api.post(url, toolbarRef.value.state).then((res) => {
        state.scanRes.combinedList = res.data.combined_list || [];
        state.scanRes.total = res.data.total || 0;
        state.scanRes.tTotal = res.data.t_total || 0;
        state.scanRes.mTotal = res.data.m_total || 0;
        state.scanRes.page = res.data.page || 1;
        state.scanRes.pageSize = res.data.page_size || 50;
        console.log("扫描结果:", state.scanRes);
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
        state.snackbar.message = "添加失败，未选择需要清理的项";
        state.snackbar.color = "error";
        state.snackbar.show = true;
        return;
      }
      let willCleanupList = [];
      for (let item of state.scanRes.combinedList) {
        if (cleanupList.includes(item.hash)) {
          willCleanupList.push(item);
        }
      }
      cleanupRef.value.setCleanupList(willCleanupList);
    };
    const startCleanup = () => {
      let willCleanupList = cleanupRef.value.getCleanupList();
      props.api.post(`plugin/${PLUGIN_ID}/clear`, willCleanupList).then((res) => {
        if (res["code"] != "ok") {
          state.snackbar.message = `清理失败:${res["message"]}`;
          state.snackbar.color = "error";
        } else {
          state.snackbar.message = "清理成功";
          state.snackbar.color = "success";
          cleanupRef.value.deleteAllRecord();
        }
        state.snackbar.show = true;
      }).catch((e) => {
        console.error("清理出错", e);
        state.snackbar.message = "清理失败: " + (e.message || "未知错误");
        state.snackbar.color = "error";
        state.snackbar.show = true;
      }).finally(() => {
        state.clearing = false;
      });
    };
    const handleScanParamsUpdate = (newScanParams) => {
      let isPageChanged = false;
      let isPageSizeChanged = false;
      if (newScanParams.changed === "page") {
        isPageChanged = true;
      } else if (newScanParams.changed === "pageSize") {
        isPageSizeChanged = true;
      }
      state.scanParams.page = Number(newScanParams.page);
      state.scanParams.pageSize = Number(newScanParams.pageSize);
      startScan(isPageChanged, isPageSizeChanged);
    };
    return (_ctx, _cache) => {
      const _component_v_icon = _resolveComponent("v-icon");
      const _component_v_card_title = _resolveComponent("v-card-title");
      const _component_v_divider = _resolveComponent("v-divider");
      const _component_v_btn = _resolveComponent("v-btn");
      const _component_v_spacer = _resolveComponent("v-spacer");
      const _component_v_card_actions = _resolveComponent("v-card-actions");
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
                _cache[6] || (_cache[6] = _createElementVNode("span", null, "种子清理工-详情", -1))
              ]),
              _: 1,
              __: [6]
            }),
            _createVNode(ToolBar, {
              ref_key: "toolbarRef",
              ref: toolbarRef
            }, null, 512),
            _createVNode(_component_v_divider),
            _createVNode(_component_v_card_actions, { class: "plugin-page__actions pr-15" }, {
              default: _withCtx(() => [
                _createVNode(_component_v_btn, {
                  color: "primary",
                  onClick: _cache[0] || (_cache[0] = ($event) => startScan(false)),
                  "prepend-icon": "mdi-magnify",
                  variant: "text",
                  disabled: state.clearing,
                  loading: state.scaning,
                  class: "ml-2"
                }, {
                  default: _withCtx(() => _cache[7] || (_cache[7] = [
                    _createTextVNode("开始扫描 ")
                  ])),
                  _: 1,
                  __: [7]
                }, 8, ["disabled", "loading"]),
                _createVNode(_component_v_divider, { vertical: "" }),
                _createVNode(_component_v_btn, {
                  color: "warning",
                  onClick: resetParams,
                  "prepend-icon": "mdi-refresh",
                  variant: "text",
                  disabled: state.scaning || state.clearing,
                  class: "ml-2"
                }, {
                  default: _withCtx(() => _cache[8] || (_cache[8] = [
                    _createTextVNode("重置选项 ")
                  ])),
                  _: 1,
                  __: [8]
                }, 8, ["disabled"]),
                _createVNode(_component_v_divider, { vertical: "" }),
                _createVNode(_component_v_btn, {
                  color: "error",
                  onClick: startCleanup,
                  "prepend-icon": "mdi-trash-can-outline",
                  variant: "text",
                  disabled: state.scaning,
                  loading: state.clearing,
                  class: "ml-2"
                }, {
                  default: _withCtx(() => _cache[9] || (_cache[9] = [
                    _createTextVNode("开始清理 ")
                  ])),
                  _: 1,
                  __: [9]
                }, 8, ["disabled", "loading"]),
                _createVNode(_component_v_divider, { vertical: "" }),
                _createVNode(_component_v_spacer),
                _createVNode(_component_v_btn, {
                  color: "success",
                  onClick: _cache[1] || (_cache[1] = ($event) => switch_tab("config")),
                  "prepend-icon": "mdi-cog",
                  variant: "text",
                  disabled: state.scaning || state.clearing,
                  class: "ml-2"
                }, {
                  default: _withCtx(() => _cache[10] || (_cache[10] = [
                    _createTextVNode("配置页 ")
                  ])),
                  _: 1,
                  __: [10]
                }, 8, ["disabled"]),
                _createVNode(_component_v_divider, { vertical: "" }),
                _createVNode(_component_v_btn, {
                  color: "grey",
                  onClick: close,
                  "prepend-icon": "mdi-close",
                  disabled: state.scaning || state.clearing,
                  variant: "text",
                  size: "small"
                }, {
                  default: _withCtx(() => _cache[11] || (_cache[11] = [
                    _createTextVNode("关闭清理工 ")
                  ])),
                  _: 1,
                  __: [11]
                }, 8, ["disabled"])
              ]),
              _: 1
            }),
            _createVNode(_component_v_card, {
              flat: "",
              class: "rounded border"
            }, {
              default: _withCtx(() => [
                _createVNode(_component_v_card_title, { class: "text-subtitle text-subtitle-2 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_icon, {
                      icon: "mdi-list-box",
                      class: "mr-2",
                      color: "primary",
                      size: "small"
                    }),
                    _cache[12] || (_cache[12] = _createElementVNode("span", null, "列表区域", -1))
                  ]),
                  _: 1,
                  __: [12]
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
                      default: _withCtx(() => _cache[13] || (_cache[13] = [
                        _createTextVNode("扫描结果")
                      ])),
                      _: 1,
                      __: [13]
                    }),
                    _createVNode(_component_v_tab, {
                      value: "cleanup",
                      onClick: _cache[3] || (_cache[3] = ($event) => setTab("cleanup"))
                    }, {
                      default: _withCtx(() => _cache[14] || (_cache[14] = [
                        _createTextVNode("待清理列表")
                      ])),
                      _: 1,
                      __: [14]
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                _withDirectives(_createVNode(ScanResults, {
                  "scan-res": state.scanRes,
                  onDeleteAllRecord: deleteAllRecord,
                  onAddToCleanup: addToCleanup,
                  "scan-params": state.scanParams,
                  "onUpdate:scanParams": handleScanParamsUpdate,
                  ref_key: "scanResultsRef",
                  ref: scanResultsRef
                }, null, 8, ["scan-res", "scan-params"]), [
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

const PageComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61184529"]]);

export { PageComponent as default };
