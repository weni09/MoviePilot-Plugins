import { importShared } from './__federation_fn_import-JrT3xvdd.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import { g as getRandomColor, f as formatBytes, a as getStatusColor, b as getColorByString, m as mapTrackers, c as formatTimeSince, d as copyPath, O as ONLY_TORRENT, A as ALL, P as PLUGIN_ID } from './definedFunctions-D7xVftLV.js';

const {unref:_unref$5,resolveComponent:_resolveComponent$6,createVNode:_createVNode$6,createElementVNode:_createElementVNode$6,normalizeClass:_normalizeClass$5,withCtx:_withCtx$6,mergeProps:_mergeProps$1,openBlock:_openBlock$6,createElementBlock:_createElementBlock$6} = await importShared('vue');


const _hoisted_1$5 = { class: "pa-2 toolbar-content" };
const _hoisted_2$5 = { class: "option-label mb-1" };
const _hoisted_3$5 = { class: "d-flex flex-wrap gap-4" };
const _hoisted_4$5 = { class: "option-label mb-2" };
const _hoisted_5$5 = { class: "d-flex gap-4" };
const _hoisted_6$5 = { class: "option-label mb-2" };
const _hoisted_7$4 = { class: "d-flex gap-4" };
const _hoisted_8$4 = { class: "option-label mb-2" };
const _hoisted_9$3 = { class: "d-flex gap-4" };
const _hoisted_10$3 = { class: "option-label mb-2" };
const _hoisted_11$3 = { class: "option-label mb-2" };

const {reactive: reactive$4,ref: ref$3} = await importShared('vue');

const {useDisplay: useDisplay$3} = await importShared('vuetify');



const _sfc_main$6 = {
  __name: 'ToolBar',
  setup(__props, { expose: __expose }) {

const { smAndDown } = useDisplay$3();
const isCollapsed = ref$3(false);

const state = reactive$4({
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
  const _component_v_icon = _resolveComponent$6("v-icon");
  const _component_v_checkbox = _resolveComponent$6("v-checkbox");
  const _component_v_col = _resolveComponent$6("v-col");
  const _component_v_radio = _resolveComponent$6("v-radio");
  const _component_v_radio_group = _resolveComponent$6("v-radio-group");
  const _component_v_row = _resolveComponent$6("v-row");
  const _component_v_tooltip = _resolveComponent$6("v-tooltip");
  const _component_v_text_field = _resolveComponent$6("v-text-field");

  return (_openBlock$6(), _createElementBlock$6("div", {
    class: _normalizeClass$5(["toolbar-container", { 'collapsed': isCollapsed.value }])
  }, [
    _createElementVNode$6("div", _hoisted_1$5, [
      _createVNode$6(_component_v_row, { class: "mb-0" }, {
        default: _withCtx$6(() => [
          _createVNode$6(_component_v_col, {
            cols: _unref$5(smAndDown) ? 12 : 12,
            md: _unref$5(smAndDown) ? 6 : 4
          }, {
            default: _withCtx$6(() => [
              _createElementVNode$6("div", {
                class: _normalizeClass$5(["option-group", _unref$5(smAndDown) ? 'option-group-mobile' : 'option-group-fixed'])
              }, [
                _createElementVNode$6("div", _hoisted_2$5, [
                  _createVNode$6(_component_v_icon, {
                    icon: "mdi-alert-circle",
                    size: "small",
                    class: "mr-2",
                    color: "warning"
                  }),
                  _cache[7] || (_cache[7] = _createElementVNode$6("span", { class: "font-weight-medium" }, "缺失选项", -1))
                ]),
                _createElementVNode$6("div", _hoisted_3$5, [
                  _createVNode$6(_component_v_checkbox, {
                    modelValue: state.missingOptions.file,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((state.missingOptions.file) = $event)),
                    label: "缺文件的种子",
                    "hide-details": "",
                    density: "compact",
                    class: "ma-0"
                  }, null, 8, ["modelValue"]),
                  _createVNode$6(_component_v_checkbox, {
                    modelValue: state.missingOptions.seed,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((state.missingOptions.seed) = $event)),
                    label: "缺种的源文件",
                    "hide-details": "",
                    density: "compact",
                    class: "ma-0"
                  }, null, 8, ["modelValue"])
                ])
              ], 2)
            ]),
            _: 1
          }, 8, ["cols", "md"]),
          _createVNode$6(_component_v_col, {
            cols: _unref$5(smAndDown) ? 12 : 12,
            md: _unref$5(smAndDown) ? 6 : 4
          }, {
            default: _withCtx$6(() => [
              _createElementVNode$6("div", {
                class: _normalizeClass$5(["option-group", _unref$5(smAndDown) ? 'option-group-mobile' : 'option-group-fixed'])
              }, [
                _createElementVNode$6("div", _hoisted_4$5, [
                  _createVNode$6(_component_v_icon, {
                    icon: "mdi-seed",
                    size: "small",
                    class: "mr-2",
                    color: "success"
                  }),
                  _cache[8] || (_cache[8] = _createElementVNode$6("span", { class: "font-weight-medium" }, "有无辅种", -1))
                ]),
                _createVNode$6(_component_v_radio_group, {
                  modelValue: state.auxOption,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((state.auxOption) = $event)),
                  inline: "",
                  "hide-details": "",
                  class: "ma-0"
                }, {
                  default: _withCtx$6(() => [
                    _createElementVNode$6("div", _hoisted_5$5, [
                      _createVNode$6(_component_v_radio, {
                        label: "全部",
                        value: "all",
                        density: "compact"
                      }),
                      _createVNode$6(_component_v_radio, {
                        label: "无辅种",
                        value: "no_aux",
                        density: "compact"
                      }),
                      _createVNode$6(_component_v_radio, {
                        label: "有辅种",
                        value: "has_aux",
                        density: "compact"
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ], 2)
            ]),
            _: 1
          }, 8, ["cols", "md"]),
          _createVNode$6(_component_v_col, {
            cols: _unref$5(smAndDown) ? 12 : 12,
            md: _unref$5(smAndDown) ? 12 : 4
          }, {
            default: _withCtx$6(() => [
              _createElementVNode$6("div", {
                class: _normalizeClass$5(["option-group", _unref$5(smAndDown) ? 'option-group-mobile' : 'option-group-fixed'])
              }, [
                _createElementVNode$6("div", _hoisted_6$5, [
                  _createVNode$6(_component_v_icon, {
                    icon: "mdi-delete",
                    size: "small",
                    class: "mr-2",
                    color: "error"
                  }),
                  _cache[9] || (_cache[9] = _createElementVNode$6("span", { class: "font-weight-medium" }, "删除选项", -1))
                ]),
                _createVNode$6(_component_v_radio_group, {
                  modelValue: state.removeOption,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((state.removeOption) = $event)),
                  inline: "",
                  "hide-details": "",
                  class: "ma-0"
                }, {
                  default: _withCtx$6(() => [
                    _createElementVNode$6("div", _hoisted_7$4, [
                      _createVNode$6(_component_v_radio, {
                        label: "全部",
                        value: "all",
                        density: "compact"
                      }),
                      _createVNode$6(_component_v_radio, {
                        label: "仅删除种子",
                        value: "only_torrent",
                        density: "compact"
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ], 2)
            ]),
            _: 1
          }, 8, ["cols", "md"])
        ]),
        _: 1
      }),
      _createVNode$6(_component_v_row, {
        class: _normalizeClass$5(["mb-0", _unref$5(smAndDown) ? 'mt-2' : 'mt-n3'])
      }, {
        default: _withCtx$6(() => [
          _createVNode$6(_component_v_col, {
            cols: _unref$5(smAndDown) ? 12 : 12,
            md: _unref$5(smAndDown) ? 6 : 4
          }, {
            default: _withCtx$6(() => [
              _createElementVNode$6("div", {
                class: _normalizeClass$5(["option-group", _unref$5(smAndDown) ? 'option-group-mobile' : 'option-group-fixed'])
              }, [
                _createElementVNode$6("div", _hoisted_8$4, [
                  _createVNode$6(_component_v_icon, {
                    icon: "mdi-database",
                    size: "small",
                    class: "mr-2",
                    color: "info"
                  }),
                  _cache[11] || (_cache[11] = _createElementVNode$6("span", { class: "font-weight-medium" }, "存量数据", -1)),
                  _createVNode$6(_component_v_tooltip, {
                    location: "right",
                    offset: "8"
                  }, {
                    activator: _withCtx$6(({ props }) => [
                      _createVNode$6(_component_v_icon, _mergeProps$1(props, {
                        icon: "mdi-help-circle",
                        size: "small",
                        class: "ml-1 help-icon",
                        color: "grey-lighten-1",
                        style: {"cursor":"pointer"}
                      }), null, 16)
                    ]),
                    default: _withCtx$6(() => [
                      _cache[10] || (_cache[10] = _createElementVNode$6("span", null, "使用缓存在MoviePilot插件的数据文件进行扫描", -1))
                    ]),
                    _: 1,
                    __: [10]
                  })
                ]),
                _createVNode$6(_component_v_radio_group, {
                  modelValue: state.existingSeedData,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((state.existingSeedData) = $event)),
                  inline: "",
                  "hide-details": "",
                  class: "ma-0"
                }, {
                  default: _withCtx$6(() => [
                    _createElementVNode$6("div", _hoisted_9$3, [
                      _createVNode$6(_component_v_radio, {
                        label: "否",
                        value: false,
                        density: "compact"
                      }),
                      _createVNode$6(_component_v_radio, {
                        label: "是",
                        value: true,
                        density: "compact"
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ], 2)
            ]),
            _: 1
          }, 8, ["cols", "md"]),
          _createVNode$6(_component_v_col, {
            cols: _unref$5(smAndDown) ? 12 : 12,
            md: _unref$5(smAndDown) ? 6 : 4
          }, {
            default: _withCtx$6(() => [
              _createElementVNode$6("div", {
                class: _normalizeClass$5(["option-group", _unref$5(smAndDown) ? 'option-group-mobile' : 'option-group-fixed'])
              }, [
                _createElementVNode$6("div", _hoisted_10$3, [
                  _createVNode$6(_component_v_icon, {
                    icon: "mdi-link",
                    size: "small",
                    class: "mr-2",
                    color: "success"
                  }),
                  _cache[12] || (_cache[12] = _createElementVNode$6("span", { class: "font-weight-medium" }, "Tracker", -1))
                ]),
                _createVNode$6(_component_v_text_field, {
                  modelValue: state.trackerInput,
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((state.trackerInput) = $event)),
                  label: "多个用分号分隔",
                  placeholder: "tracker1.com;tracker2.com",
                  variant: "outlined",
                  density: "compact",
                  size: "small",
                  "hide-details": "",
                  class: "ma-0"
                }, null, 8, ["modelValue"])
              ], 2)
            ]),
            _: 1
          }, 8, ["cols", "md"]),
          _createVNode$6(_component_v_col, {
            cols: _unref$5(smAndDown) ? 12 : 12,
            md: _unref$5(smAndDown) ? 12 : 4
          }, {
            default: _withCtx$6(() => [
              _createElementVNode$6("div", {
                class: _normalizeClass$5(["option-group", _unref$5(smAndDown) ? 'option-group-mobile' : 'option-group-fixed'])
              }, [
                _createElementVNode$6("div", _hoisted_11$3, [
                  _createVNode$6(_component_v_icon, {
                    icon: "mdi-magnify",
                    size: "small",
                    class: "mr-2",
                    color: "info"
                  }),
                  _cache[13] || (_cache[13] = _createElementVNode$6("span", { class: "font-weight-medium" }, "名称查询", -1))
                ]),
                _createVNode$6(_component_v_text_field, {
                  modelValue: state.name,
                  "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((state.name) = $event)),
                  label: "支持正则表达式(Python)",
                  placeholder: "多啦A梦",
                  variant: "outlined",
                  density: "compact",
                  size: "small",
                  "hide-details": "",
                  class: "ma-0"
                }, null, 8, ["modelValue"])
              ], 2)
            ]),
            _: 1
          }, 8, ["cols", "md"])
        ]),
        _: 1
      }, 8, ["class"])
    ])
  ], 2))
}
}

};
const ToolBar = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-1fcc6a66"]]);

const {defineComponent:_defineComponent$5} = await importShared('vue');

const {resolveComponent:_resolveComponent$5,createVNode:_createVNode$5,createElementVNode:_createElementVNode$5,withCtx:_withCtx$5,withKeys:_withKeys,createTextVNode:_createTextVNode$5,openBlock:_openBlock$5,createElementBlock:_createElementBlock$5} = await importShared('vue');

const {computed: computed$2} = await importShared('vue');

const _sfc_main$5 = /* @__PURE__ */ _defineComponent$5({
  __name: "FilterDialog",
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Object,
      default: () => ({
        path: "",
        client_name: "",
        client: "",
        seeds_limit_down: null,
        seeds_limit_up: null,
        seeds_limit: [null, null],
        size_limit_down: null,
        size_limit_up: null,
        size_limit: [null, null],
        live_time: 0
      })
    },
    initialConfig: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:dialogShow", "applyFilter", "filterChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const allDownloaders = computed$2(() => {
      console.log("allDownloaders", props.initialConfig);
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
    const closeDialog = () => {
      emit("update:dialogShow", false);
    };
    const applyFilter = () => {
      closeDialog();
      emit("applyFilter");
    };
    const filterChange = (_key, value) => {
      emit("filterChange", { [_key]: value });
    };
    return (_ctx, _cache) => {
      const _component_v_icon = _resolveComponent$5("v-icon");
      const _component_v_spacer = _resolveComponent$5("v-spacer");
      const _component_v_btn = _resolveComponent$5("v-btn");
      const _component_v_card_title = _resolveComponent$5("v-card-title");
      const _component_v_text_field = _resolveComponent$5("v-text-field");
      const _component_v_card_text = _resolveComponent$5("v-card-text");
      const _component_v_card = _resolveComponent$5("v-card");
      const _component_v_select = _resolveComponent$5("v-select");
      const _component_v_col = _resolveComponent$5("v-col");
      const _component_v_row = _resolveComponent$5("v-row");
      const _component_v_number_input = _resolveComponent$5("v-number-input");
      const _component_v_card_actions = _resolveComponent$5("v-card-actions");
      const _component_v_dialog = _resolveComponent$5("v-dialog");
      return _openBlock$5(), _createElementBlock$5("div", null, [
        _createVNode$5(_component_v_dialog, {
          modelValue: props.dialogShow,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => props.dialogShow = $event),
          "max-width": "600px"
        }, {
          default: _withCtx$5(() => [
            _createVNode$5(_component_v_card, {
              flat: "",
              class: "rounded border filter-card"
            }, {
              default: _withCtx$5(() => [
                _createVNode$5(_component_v_card_title, { class: "text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                  default: _withCtx$5(() => [
                    _createVNode$5(_component_v_icon, {
                      icon: "mdi-filter-variant",
                      class: "mr-2",
                      color: "primary",
                      size: "small"
                    }),
                    _cache[9] || (_cache[9] = _createElementVNode$5("span", null, "条件筛选", -1)),
                    _createVNode$5(_component_v_spacer),
                    _createVNode$5(_component_v_btn, {
                      color: "grey",
                      onClick: closeDialog,
                      variant: "text",
                      size: "small",
                      density: "compact",
                      icon: "mdi-close"
                    })
                  ]),
                  _: 1,
                  __: [9]
                }),
                _createVNode$5(_component_v_card_text, { class: "px-3 py-2" }, {
                  default: _withCtx$5(() => [
                    _createVNode$5(_component_v_card, {
                      flat: "",
                      class: "rounded mb-3 border config-card"
                    }, {
                      default: _withCtx$5(() => [
                        _createVNode$5(_component_v_card_title, { class: "text-caption d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                          default: _withCtx$5(() => [
                            _createVNode$5(_component_v_icon, {
                              icon: "mdi-folder-arrow-left",
                              class: "mr-2",
                              color: "primary",
                              size: "small"
                            }),
                            _cache[10] || (_cache[10] = _createElementVNode$5("span", null, "路径筛选", -1))
                          ]),
                          _: 1,
                          __: [10]
                        }),
                        _createVNode$5(_component_v_card_text, { class: "px-3 py-2" }, {
                          default: _withCtx$5(() => [
                            _createVNode$5(_component_v_text_field, {
                              label: "文件路径",
                              hint: "输入要筛选的文件路径，支持模糊匹配",
                              "persistent-hint": "",
                              "prepend-inner-icon": "mdi-folder-search",
                              variant: "outlined",
                              density: "compact",
                              clearable: "",
                              "model-value": props.filter.path,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filterChange("path", $event)),
                              onKeyup: _withKeys(applyFilter, ["enter"]),
                              autofocus: ""
                            }, null, 8, ["model-value"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    _createVNode$5(_component_v_card, {
                      flat: "",
                      class: "rounded mb-3 border config-card"
                    }, {
                      default: _withCtx$5(() => [
                        _createVNode$5(_component_v_card_title, { class: "text-caption d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                          default: _withCtx$5(() => [
                            _createVNode$5(_component_v_icon, {
                              icon: "mdi-download",
                              class: "mr-2",
                              color: "primary",
                              size: "small"
                            }),
                            _cache[11] || (_cache[11] = _createElementVNode$5("span", null, "下载器筛选", -1))
                          ]),
                          _: 1,
                          __: [11]
                        }),
                        _createVNode$5(_component_v_card_text, { class: "px-3 py-2" }, {
                          default: _withCtx$5(() => [
                            _createVNode$5(_component_v_row, null, {
                              default: _withCtx$5(() => [
                                _createVNode$5(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx$5(() => [
                                    _createVNode$5(_component_v_select, {
                                      items: allDownloaders.value.names,
                                      "item-title": (item) => item,
                                      "item-value": (item) => item,
                                      label: "下载器名称",
                                      hint: "选择特定的下载器名称",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": "mdi-download-network",
                                      variant: "outlined",
                                      density: "compact",
                                      clearable: "",
                                      "model-value": props.filter.client_name,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterChange("client_name", $event))
                                    }, null, 8, ["items", "item-title", "item-value", "model-value"])
                                  ]),
                                  _: 1
                                }),
                                _createVNode$5(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx$5(() => [
                                    _createVNode$5(_component_v_select, {
                                      items: allDownloaders.value.types,
                                      "item-title": (item) => item,
                                      "item-value": (item) => item,
                                      label: "下载器类型",
                                      hint: "选择下载器类型(qbittorrent/transmission)",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": "mdi-download-circle",
                                      variant: "outlined",
                                      density: "compact",
                                      clearable: "",
                                      "model-value": props.filter.client,
                                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filterChange("client", $event))
                                    }, null, 8, ["items", "item-title", "item-value", "model-value"])
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
                    _createVNode$5(_component_v_card, {
                      flat: "",
                      class: "rounded mb-3 border config-card"
                    }, {
                      default: _withCtx$5(() => [
                        _createVNode$5(_component_v_card_title, { class: "text-caption d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                          default: _withCtx$5(() => [
                            _createVNode$5(_component_v_icon, {
                              icon: "mdi-chart-line",
                              class: "mr-2",
                              color: "primary",
                              size: "small"
                            }),
                            _cache[12] || (_cache[12] = _createElementVNode$5("span", null, "数值范围筛选", -1))
                          ]),
                          _: 1,
                          __: [12]
                        }),
                        _createVNode$5(_component_v_card_text, { class: "px-3 py-2" }, {
                          default: _withCtx$5(() => [
                            _createVNode$5(_component_v_row, null, {
                              default: _withCtx$5(() => [
                                _createVNode$5(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx$5(() => [
                                    _cache[14] || (_cache[14] = _createElementVNode$5("div", { class: "text-caption font-weight-medium mb-2" }, "做种数范围", -1)),
                                    _createVNode$5(_component_v_row, { "no-gutters": "" }, {
                                      default: _withCtx$5(() => [
                                        _createVNode$5(_component_v_col, { cols: "5" }, {
                                          default: _withCtx$5(() => [
                                            _createVNode$5(_component_v_number_input, {
                                              min: 0,
                                              max: props.filter.seeds_limit_up || 999999,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              placeholder: "最小值",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: "",
                                              class: "custom-number-input",
                                              "model-value": props.filter.seeds_limit_down,
                                              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => filterChange("seeds_limit_down", $event))
                                            }, null, 8, ["max", "model-value"])
                                          ]),
                                          _: 1
                                        }),
                                        _createVNode$5(_component_v_col, {
                                          cols: "1",
                                          class: "d-flex align-center justify-center text-caption"
                                        }, {
                                          default: _withCtx$5(() => _cache[13] || (_cache[13] = [
                                            _createTextVNode$5(" ~ ")
                                          ])),
                                          _: 1,
                                          __: [13]
                                        }),
                                        _createVNode$5(_component_v_col, { cols: "6" }, {
                                          default: _withCtx$5(() => [
                                            _createVNode$5(_component_v_number_input, {
                                              "model-value": props.filter.seeds_limit_up,
                                              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => filterChange("seeds_limit_up", $event)),
                                              min: props.filter.seeds_limit_down || 0,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              placeholder: "最大值",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: "",
                                              class: "custom-number-input"
                                            }, null, 8, ["model-value", "min"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1,
                                  __: [14]
                                }),
                                _createVNode$5(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx$5(() => [
                                    _cache[16] || (_cache[16] = _createElementVNode$5("div", { class: "text-caption font-weight-medium mb-2" }, "文件大小范围 (MB)", -1)),
                                    _createVNode$5(_component_v_row, { "no-gutters": "" }, {
                                      default: _withCtx$5(() => [
                                        _createVNode$5(_component_v_col, { cols: "5" }, {
                                          default: _withCtx$5(() => [
                                            _createVNode$5(_component_v_number_input, {
                                              "model-value": props.filter.size_limit_down,
                                              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => filterChange("size_limit_down", $event)),
                                              min: 0,
                                              max: props.filter.size_limit_up || 999999999,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              placeholder: "最小值",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: ""
                                            }, null, 8, ["model-value", "max"])
                                          ]),
                                          _: 1
                                        }),
                                        _createVNode$5(_component_v_col, {
                                          cols: "1",
                                          class: "d-flex align-center justify-center text-caption"
                                        }, {
                                          default: _withCtx$5(() => _cache[15] || (_cache[15] = [
                                            _createTextVNode$5(" ~ ")
                                          ])),
                                          _: 1,
                                          __: [15]
                                        }),
                                        _createVNode$5(_component_v_col, { cols: "6" }, {
                                          default: _withCtx$5(() => [
                                            _createVNode$5(_component_v_number_input, {
                                              "model-value": props.filter.size_limit_up,
                                              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => filterChange("size_limit_up", $event)),
                                              min: props.filter.size_limit_down || 0,
                                              placeholder: "最大值",
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: ""
                                            }, null, 8, ["model-value", "min"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1,
                                  __: [16]
                                }),
                                _createVNode$5(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx$5(() => [
                                    _cache[17] || (_cache[17] = _createElementVNode$5("div", { class: "text-caption font-weight-medium mb-2" }, "做种存活时间范围 (天)", -1)),
                                    _createVNode$5(_component_v_row, { "no-gutters": "" }, {
                                      default: _withCtx$5(() => [
                                        _createVNode$5(_component_v_col, { cols: "12" }, {
                                          default: _withCtx$5(() => [
                                            _createVNode$5(_component_v_number_input, {
                                              modelValue: props.filter.live_time,
                                              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => props.filter.live_time = $event),
                                              min: 0,
                                              variant: "outlined",
                                              density: "compact",
                                              "hide-details": "",
                                              placeholder: "输入天数",
                                              "controls-position": "compact",
                                              "control-variant": "stacked",
                                              clearable: "",
                                              class: "custom-number-input"
                                            }, null, 8, ["modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1,
                                  __: [17]
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
                }),
                _createVNode$5(_component_v_card_actions, { class: "px-3 py-2 d-flex justify-end" }, {
                  default: _withCtx$5(() => [
                    _createVNode$5(_component_v_btn, {
                      onClick: closeDialog,
                      variant: "outlined",
                      size: "small",
                      class: "mr-2"
                    }, {
                      default: _withCtx$5(() => _cache[18] || (_cache[18] = [
                        _createTextVNode$5(" 取消 ")
                      ])),
                      _: 1,
                      __: [18]
                    }),
                    _createVNode$5(_component_v_btn, {
                      color: "primary",
                      onClick: applyFilter,
                      variant: "tonal",
                      size: "small"
                    }, {
                      default: _withCtx$5(() => _cache[19] || (_cache[19] = [
                        _createTextVNode$5(" 应用筛选 ")
                      ])),
                      _: 1,
                      __: [19]
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
      ]);
    };
  }
});

const FilterDialog = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-575eb194"]]);

const {defineComponent:_defineComponent$4} = await importShared('vue');

const {resolveComponent:_resolveComponent$4,createVNode:_createVNode$4,createElementVNode:_createElementVNode$4,withCtx:_withCtx$4,renderList:_renderList$3,Fragment:_Fragment$4,openBlock:_openBlock$4,createElementBlock:_createElementBlock$4,unref:_unref$4,toDisplayString:_toDisplayString$4,normalizeClass:_normalizeClass$4,createBlock:_createBlock$4,createTextVNode:_createTextVNode$4} = await importShared('vue');

const _hoisted_1$4 = { class: "option-label" };
const _hoisted_2$4 = { class: "font-weight-medium" };
const _hoisted_3$4 = { class: "move-buttons" };
const _hoisted_4$4 = { class: "d-flex radio-styled" };
const _hoisted_5$4 = { class: "px-3 py-2 text--secondary" };
const _hoisted_6$4 = {
  class: "text-caption d-flex align-center justify-end px-3",
  style: { "color": "#E91E63" }
};
const {reactive: reactive$3,ref: ref$2} = await importShared('vue');

const {useDisplay: useDisplay$2} = await importShared('vuetify');

const _sfc_main$4 = /* @__PURE__ */ _defineComponent$4({
  __name: "SortDialog",
  props: {
    dialogShow: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:dialogShow", "applySort"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { smAndDown } = useDisplay$2();
    const props = __props;
    const emit = __emit;
    const defaultSortItems = [
      {
        key: "name",
        title: "名称",
        icon: "mdi-alpha-n-circle-outline",
        color: "primary"
      },
      {
        key: "path",
        title: "路径",
        icon: "mdi-folder-outline",
        color: "info"
      },
      {
        key: "size",
        title: "大小",
        icon: "mdi-database-outline",
        color: "success"
      },
      {
        key: "seeds",
        title: "做种数",
        icon: "mdi-seed-outline",
        color: "warning"
      }
    ];
    const sortItems = ref$2([...defaultSortItems]);
    const defaultSortOptions = {
      name: "asc",
      path: null,
      size: null,
      seeds: null
    };
    const state = reactive$3({
      sortOptions: { ...defaultSortOptions },
      sortOptionList: []
    });
    const closeDialog = () => {
      emit("update:dialogShow", false);
    };
    const applySort = () => {
      const sortOptionList = [];
      sortItems.value.forEach((item) => {
        const order = state.sortOptions[item.key];
        if (order !== null) {
          sortOptionList.push({
            key: item.key,
            order
          });
        }
      });
      state.sortOptionList = sortOptionList;
      closeDialog();
      emit("applySort", sortOptionList);
    };
    const moveItem = (index, direction) => {
      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= sortItems.value.length) {
        return;
      }
      const items = [...sortItems.value];
      [items[index], items[newIndex]] = [items[newIndex], items[index]];
      sortItems.value = items;
    };
    const moveItemToFirst = (index) => {
      if (index === 0) return;
      const items = [...sortItems.value];
      const [item] = items.splice(index, 1);
      items.unshift(item);
      sortItems.value = items;
    };
    const moveItemToLast = (index) => {
      if (index === sortItems.value.length - 1) return;
      const items = [...sortItems.value];
      const [item] = items.splice(index, 1);
      items.push(item);
      sortItems.value = items;
    };
    const resetSort = () => {
      sortItems.value = [...defaultSortItems];
      state.sortOptions = { ...defaultSortOptions };
      state.sortOptionList = [];
    };
    const getSortOptions = () => {
      return state.sortOptionList;
    };
    __expose({
      getSortOptions
    });
    return (_ctx, _cache) => {
      const _component_v_icon = _resolveComponent$4("v-icon");
      const _component_v_spacer = _resolveComponent$4("v-spacer");
      const _component_v_btn = _resolveComponent$4("v-btn");
      const _component_v_card_title = _resolveComponent$4("v-card-title");
      const _component_v_radio = _resolveComponent$4("v-radio");
      const _component_v_radio_group = _resolveComponent$4("v-radio-group");
      const _component_v_col = _resolveComponent$4("v-col");
      const _component_v_row = _resolveComponent$4("v-row");
      const _component_v_card_text = _resolveComponent$4("v-card-text");
      const _component_v_card_actions = _resolveComponent$4("v-card-actions");
      const _component_v_card = _resolveComponent$4("v-card");
      const _component_v_dialog = _resolveComponent$4("v-dialog");
      return _openBlock$4(), _createElementBlock$4("div", null, [
        _createVNode$4(_component_v_dialog, {
          modelValue: props.dialogShow,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => props.dialogShow = $event),
          "max-width": "600px"
        }, {
          default: _withCtx$4(() => [
            _createVNode$4(_component_v_card, {
              flat: "",
              class: "rounded border filter-card"
            }, {
              default: _withCtx$4(() => [
                _createVNode$4(_component_v_card_title, { class: "text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                  default: _withCtx$4(() => [
                    _createVNode$4(_component_v_icon, {
                      icon: "mdi-sort",
                      class: "mr-2",
                      color: "primary",
                      size: "small"
                    }),
                    _cache[1] || (_cache[1] = _createElementVNode$4("span", null, "排序规则", -1)),
                    _createVNode$4(_component_v_spacer),
                    _createVNode$4(_component_v_btn, {
                      color: "grey",
                      onClick: closeDialog,
                      variant: "text",
                      size: "small",
                      density: "compact",
                      icon: "mdi-close"
                    })
                  ]),
                  _: 1,
                  __: [1]
                }),
                _createVNode$4(_component_v_card_text, { class: "px-3 py-2" }, {
                  default: _withCtx$4(() => [
                    _createVNode$4(_component_v_row, {
                      class: "mb-0 d-flex align-center",
                      gutters: "2"
                    }, {
                      default: _withCtx$4(() => [
                        (_openBlock$4(true), _createElementBlock$4(_Fragment$4, null, _renderList$3(sortItems.value, (item, index) => {
                          return _openBlock$4(), _createBlock$4(_component_v_col, {
                            cols: _unref$4(smAndDown) ? 12 : 6,
                            key: item.key
                          }, {
                            default: _withCtx$4(() => [
                              _createElementVNode$4("div", {
                                class: _normalizeClass$4(["option-group", _unref$4(smAndDown) ? "option-group-mobile" : "option-group-fixed"])
                              }, [
                                _createElementVNode$4("div", _hoisted_1$4, [
                                  _createVNode$4(_component_v_icon, {
                                    icon: item.icon,
                                    size: "small",
                                    class: "mr-2",
                                    color: item.color
                                  }, null, 8, ["icon", "color"]),
                                  _createElementVNode$4("span", _hoisted_2$4, _toDisplayString$4(item.title), 1),
                                  _createVNode$4(_component_v_spacer),
                                  _createElementVNode$4("div", _hoisted_3$4, [
                                    _createVNode$4(_component_v_btn, {
                                      icon: "mdi-arrow-collapse-up",
                                      variant: "text",
                                      size: "small",
                                      density: "comfortable",
                                      disabled: index === 0,
                                      onClick: ($event) => moveItemToFirst(index),
                                      class: "move-btn",
                                      title: "移至最前"
                                    }, null, 8, ["disabled", "onClick"]),
                                    _createVNode$4(_component_v_btn, {
                                      icon: "mdi-arrow-collapse-down",
                                      variant: "text",
                                      size: "small",
                                      density: "comfortable",
                                      disabled: index === sortItems.value.length - 1,
                                      onClick: ($event) => moveItemToLast(index),
                                      class: "move-btn",
                                      title: "移至最后"
                                    }, null, 8, ["disabled", "onClick"]),
                                    _createVNode$4(_component_v_btn, {
                                      icon: "mdi-arrow-up",
                                      variant: "text",
                                      size: "small",
                                      density: "comfortable",
                                      disabled: index === 0,
                                      onClick: ($event) => moveItem(index, -1),
                                      class: "move-btn",
                                      title: "移至前一个"
                                    }, null, 8, ["disabled", "onClick"]),
                                    _createVNode$4(_component_v_btn, {
                                      icon: "mdi-arrow-down",
                                      variant: "text",
                                      size: "small",
                                      density: "comfortable",
                                      disabled: index === sortItems.value.length - 1,
                                      onClick: ($event) => moveItem(index, 1),
                                      class: "move-btn",
                                      title: "移至后一个"
                                    }, null, 8, ["disabled", "onClick"])
                                  ])
                                ]),
                                _createVNode$4(_component_v_radio_group, {
                                  modelValue: state.sortOptions[item.key],
                                  "onUpdate:modelValue": ($event) => state.sortOptions[item.key] = $event,
                                  inline: "",
                                  "hide-details": "",
                                  class: "ma-0 radio-group-styled"
                                }, {
                                  default: _withCtx$4(() => [
                                    _createElementVNode$4("div", _hoisted_4$4, [
                                      _createVNode$4(_component_v_radio, {
                                        label: "不排序",
                                        value: null,
                                        density: "compact"
                                      }),
                                      _createVNode$4(_component_v_radio, {
                                        label: "升序",
                                        value: "asc",
                                        density: "compact"
                                      }),
                                      _createVNode$4(_component_v_radio, {
                                        label: "降序",
                                        value: "desc",
                                        density: "compact"
                                      })
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["modelValue", "onUpdate:modelValue"])
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["cols"]);
                        }), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _createElementVNode$4("div", _hoisted_5$4, [
                  _createElementVNode$4("div", _hoisted_6$4, [
                    _createVNode$4(_component_v_icon, {
                      icon: "mdi-information-outline",
                      size: "small",
                      class: "mr-2"
                    }),
                    _cache[2] || (_cache[2] = _createElementVNode$4("span", null, "注意：前面的排序规则优先级将更高", -1))
                  ])
                ]),
                _createVNode$4(_component_v_card_actions, { class: "px-3 py-2 d-flex justify-end" }, {
                  default: _withCtx$4(() => [
                    _createVNode$4(_component_v_btn, {
                      onClick: closeDialog,
                      variant: "outlined",
                      size: "small",
                      class: "mr-2"
                    }, {
                      default: _withCtx$4(() => [
                        _createVNode$4(_component_v_icon, {
                          icon: "mdi-close",
                          size: "small",
                          class: "mr-1"
                        }),
                        _cache[3] || (_cache[3] = _createTextVNode$4(" 取消 "))
                      ]),
                      _: 1,
                      __: [3]
                    }),
                    _createVNode$4(_component_v_btn, {
                      onClick: resetSort,
                      variant: "outlined",
                      size: "small",
                      class: "mr-2"
                    }, {
                      default: _withCtx$4(() => [
                        _createVNode$4(_component_v_icon, {
                          icon: "mdi-refresh",
                          size: "small",
                          class: "mr-1"
                        }),
                        _cache[4] || (_cache[4] = _createTextVNode$4(" 重置 "))
                      ]),
                      _: 1,
                      __: [4]
                    }),
                    _createVNode$4(_component_v_btn, {
                      color: "primary",
                      onClick: applySort,
                      variant: "tonal",
                      size: "small"
                    }, {
                      default: _withCtx$4(() => [
                        _createVNode$4(_component_v_icon, {
                          icon: "mdi-check",
                          size: "small",
                          class: "mr-1"
                        }),
                        _cache[5] || (_cache[5] = _createTextVNode$4(" 应用排序 "))
                      ]),
                      _: 1,
                      __: [5]
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
      ]);
    };
  }
});

const SortDialog = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-229113c2"]]);

const {defineComponent:_defineComponent$3} = await importShared('vue');

const {renderList:_renderList$2,Fragment:_Fragment$3,openBlock:_openBlock$3,createElementBlock:_createElementBlock$3,resolveComponent:_resolveComponent$3,withModifiers:_withModifiers$3,createVNode:_createVNode$3,withCtx:_withCtx$3,toDisplayString:_toDisplayString$3,createElementVNode:_createElementVNode$3,createTextVNode:_createTextVNode$3,createBlock:_createBlock$3,createCommentVNode:_createCommentVNode$3,unref:_unref$3,normalizeClass:_normalizeClass$3} = await importShared('vue');

const _hoisted_1$3 = { class: "card-header-horizontal pa-1" };
const _hoisted_2$3 = { class: "d-flex align-center justify-space-between mb-2" };
const _hoisted_3$3 = { class: "file-name-horizontal text-body-2" };
const _hoisted_4$3 = { class: "card-content-horizontal pa-1 pt-0" };
const _hoisted_5$3 = { class: "d-flex align-center flex-wrap mb-1 font-weight-bold status-labels" };
const _hoisted_6$3 = { class: "info-grid-horizontal" };
const _hoisted_7$3 = { class: "info-item" };
const _hoisted_8$3 = { class: "text-caption" };
const _hoisted_9$2 = { class: "info-item" };
const _hoisted_10$2 = { class: "text-caption text-truncate" };
const _hoisted_11$2 = { class: "info-item" };
const _hoisted_12$2 = { class: "text-caption" };
const _hoisted_13$2 = { class: "info-item" };
const _hoisted_14$2 = { class: "text-caption" };
const _hoisted_15$2 = { class: "info-item" };
const _hoisted_16$2 = { class: "text-caption" };
const _hoisted_17$2 = { class: "info-item" };
const _hoisted_18$1 = ["title"];
const _hoisted_19$1 = { class: "info-item" };
const _hoisted_20$1 = { class: "text-caption text-truncate" };
const _hoisted_21$1 = { class: "info-item" };
const _hoisted_22$1 = { class: "text-caption text-truncate" };
const _sfc_main$3 = /* @__PURE__ */ _defineComponent$3({
  __name: "DataListCard",
  props: {
    selectedScans: {
      type: Array,
      default: () => []
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
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["copyPath", "update:selectedScans", "update:scanParams"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isItemSelected = (item) => {
      return props.selectedScans.some((scan) => {
        return scan.hash === item.hash;
      });
    };
    const toggleSelection = (item) => {
      const index = props.selectedScans.findIndex((scan) => {
        return scan.hash === item.hash;
      });
      if (index > -1) {
        props.selectedScans.splice(index, 1);
      } else {
        props.selectedScans.push(item);
      }
    };
    const formatCreatedTime = (time) => {
      if (time == "1970-01-01 08:00:00") {
        return "未知";
      } else {
        return formatTimeSince(time);
      }
    };
    const _copyPath = async (path) => {
      if (await copyPath(path)) {
        emit("copyPath", true);
      } else {
        emit("copyPath", false);
      }
    };
    const selectedScansChange = (values) => {
      emit("update:selectedScans", values);
    };
    __expose({
      isItemSelected
    });
    return (_ctx, _cache) => {
      const _component_v_checkbox = _resolveComponent$3("v-checkbox");
      const _component_v_col = _resolveComponent$3("v-col");
      const _component_v_btn = _resolveComponent$3("v-btn");
      const _component_v_row = _resolveComponent$3("v-row");
      const _component_v_chip = _resolveComponent$3("v-chip");
      const _component_v_icon = _resolveComponent$3("v-icon");
      const _component_v_card = _resolveComponent$3("v-card");
      return _openBlock$3(), _createElementBlock$3("div", null, [
        !props.loading && props.scanRes.combinedList.length > 0 ? (_openBlock$3(), _createBlock$3(_component_v_row, {
          key: 0,
          class: _normalizeClass$3(_ctx.pa - 2),
          "no-gutters": ""
        }, {
          default: _withCtx$3(() => [
            (_openBlock$3(true), _createElementBlock$3(_Fragment$3, null, _renderList$2(props.scanRes.combinedList, (item, index) => {
              return _openBlock$3(), _createBlock$3(_component_v_col, {
                key: item.hash,
                cols: "12",
                sm: "6",
                md: "4",
                lg: "4",
                class: "pa-1 d-flex"
              }, {
                default: _withCtx$3(() => [
                  _createVNode$3(_component_v_card, {
                    class: _normalizeClass$3([[
                      "seed-card-horizontal",
                      { "selected": isItemSelected(item) },
                      { "qb-card": item.hasOwnProperty("client") && item.client !== "transmission" },
                      { "tr-card": item.hasOwnProperty("client") && item.client === "transmission" }
                    ], "flex-grow-1"]),
                    elevation: props.selectedScans.includes(item) ? 4 : 1,
                    hover: "",
                    onClick: ($event) => toggleSelection(item)
                  }, {
                    default: _withCtx$3(() => [
                      _createElementVNode$3("div", _hoisted_1$3, [
                        _createElementVNode$3("div", _hoisted_2$3, [
                          _createVNode$3(_component_v_row, {
                            class: "d-flex align-center ma-0",
                            gutters: "no-gutters"
                          }, {
                            default: _withCtx$3(() => [
                              _createVNode$3(_component_v_col, {
                                cols: 1,
                                class: "px-0 py-0"
                              }, {
                                default: _withCtx$3(() => [
                                  _createVNode$3(_component_v_checkbox, {
                                    "model-value": props.selectedScans,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedScansChange($event)),
                                    value: item,
                                    "hide-details": "",
                                    onClick: _cache[1] || (_cache[1] = _withModifiers$3(() => {
                                    }, ["stop"])),
                                    density: "compact",
                                    size: "x-small"
                                  }, null, 8, ["model-value", "value"])
                                ]),
                                _: 2
                              }, 1024),
                              _createVNode$3(_component_v_col, {
                                cols: 10,
                                class: "px-1 py-0"
                              }, {
                                default: _withCtx$3(() => [
                                  _createElementVNode$3("span", _hoisted_3$3, _toDisplayString$3(item.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              _createVNode$3(_component_v_col, {
                                cols: 1,
                                class: "px-0 py-0"
                              }, {
                                default: _withCtx$3(() => [
                                  _createVNode$3(_component_v_btn, {
                                    size: "x-small",
                                    variant: "text",
                                    density: "compact",
                                    color: "primary",
                                    onClick: _withModifiers$3(($event) => _copyPath(item.path), ["stop"]),
                                    icon: "mdi-content-copy"
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]),
                      _createElementVNode$3("div", _hoisted_4$3, [
                        _createElementVNode$3("div", _hoisted_5$3, [
                          item.hasOwnProperty("client") && item.client ? (_openBlock$3(), _createBlock$3(_component_v_chip, {
                            key: 0,
                            color: item.hasOwnProperty("client") && item.client === "transmission" ? "#E91E63" : "info",
                            size: "x-small",
                            variant: "tonal"
                          }, {
                            default: _withCtx$3(() => [
                              _createTextVNode$3(_toDisplayString$3(item.client === "transmission" ? "TR" : "QB"), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])) : _createCommentVNode$3("", true),
                          _createVNode$3(_component_v_chip, {
                            color: _unref$3(getRandomColor)(index),
                            size: "x-small",
                            class: "ml-1",
                            variant: "tonal"
                          }, {
                            default: _withCtx$3(() => [
                              _createTextVNode$3(_toDisplayString$3(item.hash.toUpperCase()), 1)
                            ]),
                            _: 2
                          }, 1032, ["color"])
                        ]),
                        _createElementVNode$3("div", _hoisted_6$3, [
                          _createElementVNode$3("div", _hoisted_7$3, [
                            _createVNode$3(_component_v_icon, {
                              size: "14",
                              color: "info",
                              class: "mr-1"
                            }, {
                              default: _withCtx$3(() => _cache[2] || (_cache[2] = [
                                _createTextVNode$3("mdi-database")
                              ])),
                              _: 1,
                              __: [2]
                            }),
                            _createElementVNode$3("span", _hoisted_8$3, _toDisplayString$3(item.size ? _unref$3(formatBytes)(item.size) : "未知"), 1)
                          ]),
                          _createElementVNode$3("div", _hoisted_9$2, [
                            _createVNode$3(_component_v_icon, {
                              size: "14",
                              color: item.type == "torrent" ? _unref$3(getStatusColor)(item.status) : "error",
                              class: "mr-1"
                            }, {
                              default: _withCtx$3(() => _cache[3] || (_cache[3] = [
                                _createTextVNode$3("mdi-chart-timeline-variant")
                              ])),
                              _: 2,
                              __: [3]
                            }, 1032, ["color"]),
                            _createElementVNode$3("span", _hoisted_10$2, _toDisplayString$3(`${item.type == "torrent" ? item.status : "缺失种子"}`), 1)
                          ]),
                          _createElementVNode$3("div", _hoisted_11$2, [
                            _createVNode$3(_component_v_icon, {
                              size: "14",
                              color: item.type == "torrent" ? _unref$3(getColorByString)(item?.trackers) : "primary",
                              class: "mr-1"
                            }, {
                              default: _withCtx$3(() => _cache[4] || (_cache[4] = [
                                _createTextVNode$3("mdi-tag")
                              ])),
                              _: 2,
                              __: [4]
                            }, 1032, ["color"]),
                            _createElementVNode$3("span", _hoisted_12$2, _toDisplayString$3(item.type === "torrent" && item?.trackers.length > 0 ? _unref$3(mapTrackers)(item.trackers)[0] : "无"), 1)
                          ]),
                          _createElementVNode$3("div", _hoisted_13$2, [
                            _createVNode$3(_component_v_icon, {
                              size: "14",
                              color: "warning",
                              class: "mr-1"
                            }, {
                              default: _withCtx$3(() => _cache[5] || (_cache[5] = [
                                _createTextVNode$3("mdi-clock-outline")
                              ])),
                              _: 1,
                              __: [5]
                            }),
                            _createElementVNode$3("span", _hoisted_14$2, _toDisplayString$3(item.type === "torrent" && item.created_at ? formatCreatedTime(item.created_at) : "-"), 1)
                          ]),
                          _createElementVNode$3("div", _hoisted_15$2, [
                            _createVNode$3(_component_v_icon, {
                              size: "14",
                              color: "success",
                              class: "mr-1"
                            }, {
                              default: _withCtx$3(() => _cache[6] || (_cache[6] = [
                                _createTextVNode$3("mdi-seed")
                              ])),
                              _: 1,
                              __: [6]
                            }),
                            _createElementVNode$3("span", _hoisted_16$2, _toDisplayString$3(item.type === "torrent" ? `${item.seeds || 0}` : "无"), 1)
                          ]),
                          _createElementVNode$3("div", _hoisted_17$2, [
                            _createVNode$3(_component_v_icon, {
                              size: "14",
                              color: "#00BCD4",
                              class: "mr-1"
                            }, {
                              default: _withCtx$3(() => _cache[7] || (_cache[7] = [
                                _createTextVNode$3("mdi-folder")
                              ])),
                              _: 1,
                              __: [7]
                            }),
                            _createElementVNode$3("span", {
                              class: "text-caption text-truncate",
                              title: item.path
                            }, _toDisplayString$3(item.path), 9, _hoisted_18$1)
                          ]),
                          _createElementVNode$3("div", _hoisted_19$1, [
                            _createVNode$3(_component_v_icon, {
                              size: "14",
                              color: "#009688",
                              class: "mr-1"
                            }, {
                              default: _withCtx$3(() => _cache[8] || (_cache[8] = [
                                _createTextVNode$3("mdi-download")
                              ])),
                              _: 1,
                              __: [8]
                            }),
                            _createElementVNode$3("span", _hoisted_20$1, _toDisplayString$3(`${item.type == "torrent" ? item.client_name : "-"}`), 1)
                          ]),
                          _createElementVNode$3("div", _hoisted_21$1, [
                            _createVNode$3(_component_v_icon, {
                              size: "14",
                              color: "error",
                              class: "mr-1"
                            }, {
                              default: _withCtx$3(() => _cache[9] || (_cache[9] = [
                                _createTextVNode$3("mdi-close-octagon")
                              ])),
                              _: 1,
                              __: [9]
                            }),
                            _createElementVNode$3("span", _hoisted_22$1, _toDisplayString$3(`${item.type == "torrent" && item.error ? item.error : "无"}`), 1)
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class", "elevation", "onClick"])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        }, 8, ["class"])) : _createCommentVNode$3("", true)
      ]);
    };
  }
});

const DataListCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e1a13621"]]);

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {unref:_unref$2,resolveComponent:_resolveComponent$2,createVNode:_createVNode$2,createTextVNode:_createTextVNode$2,withCtx:_withCtx$2,toDisplayString:_toDisplayString$2,openBlock:_openBlock$2,createBlock:_createBlock$2,createCommentVNode:_createCommentVNode$2,normalizeClass:_normalizeClass$2,createElementVNode:_createElementVNode$2,normalizeStyle:_normalizeStyle,withModifiers:_withModifiers$2,createElementBlock:_createElementBlock$2,renderList:_renderList$1,Fragment:_Fragment$2,mergeProps:_mergeProps} = await importShared('vue');

const _hoisted_1$2 = {
  key: 1,
  class: "d-flex align-center ml-1 flex-wrap"
};
const _hoisted_2$2 = { class: "d-flex align-center ml-1" };
const _hoisted_3$2 = {
  key: 0,
  class: "filter-section-compact pa-3 pb-2"
};
const _hoisted_4$2 = { class: "filter-chips-compact" };
const _hoisted_5$2 = {
  key: 1,
  size: "14"
};
const _hoisted_6$2 = { style: { "min-height": "260px", "max-height": "450px", "overflow-y": "auto" } };
const _hoisted_7$2 = {
  key: 1,
  class: "empty-state"
};
const _hoisted_8$2 = {
  key: 2,
  class: "pa-4"
};
const {ref: ref$1,computed: computed$1,reactive: reactive$2} = await importShared('vue');
const {useDisplay: useDisplay$1} = await importShared('vuetify');

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
        sortBy: [{ key: "name", order: "asc" }]
      })
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["deleteAllRecord", "addToCleanup", "update:scanParams", "applyFilter", "applySort"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { smAndDown } = useDisplay$1();
    const props = __props;
    const emit = __emit;
    const filterItems = [
      {
        title: "路径",
        value: "path",
        type: "icon",
        label: "mdi-folder-arrow-left"
      },
      {
        title: "下载器名称",
        value: "client_name",
        type: "icon",
        label: "mdi-download"
      },
      {
        title: "下载器类型",
        value: "client",
        type: "icon",
        label: "mdi-download-circle"
      },
      {
        title: "做种数",
        value: "seeds_limit",
        type: "icon",
        label: "mdi-seed"
      },
      {
        title: "大小(MB)",
        value: "size_limit",
        type: "icon",
        label: "mdi-harddisk"
      },
      {
        title: "存活(小于)",
        value: "live_time",
        type: "icon",
        label: "mdi-clock-outline"
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
      currentPage: void 0,
      filterDialog: false,
      filter: {
        path: "",
        client_name: "",
        client: "",
        seeds_limit_down: null,
        seeds_limit_up: null,
        seeds_limit: [null, null],
        size_limit_down: null,
        size_limit_up: null,
        size_limit: [null, null],
        live_time: 0
      },
      currentFilterValues: ["path"],
      sortDialog: false
    });
    const dataListCardRef = ref$1();
    const getfilterAttrByKey = (attr, key) => {
      for (let i of filterItems) {
        if (i.value === key) {
          return i[attr];
        }
      }
      return key;
    };
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
    const isItemSelected = (item) => {
      return state.selectedScans.some((scan) => {
        return scan.hash === item.hash;
      });
    };
    const isSelectAll = computed$1(() => {
      const visibleCount = props.scanRes.combinedList.length;
      if (!dataListCardRef.value) return false;
      const isAllSelected = visibleCount > 0 && props.scanRes.combinedList.every((item) => isItemSelected(item));
      return isAllSelected;
    });
    const isIndeterminate = computed$1(() => {
      const selectedCount = state.selectedScans.length;
      const isIndeterminate2 = selectedCount > 0 && !props.scanRes.combinedList.every((item) => isItemSelected(item));
      return isIndeterminate2;
    });
    const activeFilterCount = computed$1(() => {
      let count = 0;
      Object.entries(state.filter).forEach(([key, value]) => {
        if (isShowFilterTag(value, key)) {
          count++;
        }
      });
      return count;
    });
    const showNotification = (text, color = "success") => {
      state.snackbar.message = text;
      state.snackbar.color = color;
      state.snackbar.show = true;
    };
    const totalPages = computed$1(() => {
      return Math.ceil(props.scanRes.total / props.scanParams.pageSize);
    });
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
    const goToPage = () => {
      if (state.currentPage === void 0 || state.currentPage === null) {
        return;
      }
      let currentPageNum = parseInt(state.currentPage);
      if (!currentPageNum) {
        showNotification("请输入有效的页码", "error");
        return;
      }
      if (currentPageNum < 1 || currentPageNum > totalPages.value) {
        showNotification("页码超出范围", "error");
        return;
      }
      handlePageChange(currentPageNum);
    };
    const toggleSelectAll = () => {
      const currentlyAllSelected = props.scanRes.combinedList.every((item) => isItemSelected(item));
      if (currentlyAllSelected) {
        state.selectedScans = [];
      } else {
        state.selectedScans = [];
        props.scanRes.combinedList.forEach((item) => {
          state.selectedScans.push(item);
        });
      }
    };
    const clearSelectedScans = () => {
      state.selectedScans = [];
    };
    const _copyPath = (isSuccess) => {
      if (isSuccess) {
        showNotification("完整路径已复制到剪贴板");
      } else {
        showNotification("复制路径失败", "error");
      }
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
    const toggleFilter = () => {
      state.filterDialog = !state.filterDialog;
    };
    const applyFilter = () => {
      state.filterDialog = false;
      emit("applyFilter", state.filter);
    };
    const applySort = (sortOptionList) => {
      console.log("applySort", sortOptionList);
      emit("applySort", sortOptionList);
    };
    const deleteFilter = (name) => {
      if (state.filter[name] instanceof Array) {
        state.filter[name] = [null, null];
      } else {
        state.filter[name] = "";
      }
      state.filterDialog = false;
      emit("applyFilter", state.filter);
    };
    const filterChange = (filter) => {
      if (filter instanceof Object) {
        for (let key in filter) {
          if (key in state.filter) {
            state.filter[key] = filter[key];
            if (key.indexOf("_up") > -1) {
              let _key = key.replace("_up", "");
              state.filter[_key][1] = filter[key];
            }
            if (key.indexOf("_down") > -1) {
              let _key = key.replace("_down", "");
              state.filter[_key][0] = filter[key];
            }
          }
        }
      }
    };
    const toggleSort = () => {
      state.sortDialog = !state.sortDialog;
    };
    const isShowFilterTag = (value, key) => {
      if (!filterItems.some((item) => item.value === key)) return false;
      if (value instanceof Array && value.length === 2) {
        return value[0] !== null && value[1] !== null && value[0] !== "" && value[1] !== "";
      } else if (typeof value === "number") {
        return value !== 0;
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
      clearSelectedScans,
      toggleFilter,
      toggleSort,
      getSelectedScans: () => state.selectedScans
    });
    return (_ctx, _cache) => {
      const _component_v_checkbox = _resolveComponent$2("v-checkbox");
      const _component_v_icon = _resolveComponent$2("v-icon");
      const _component_v_chip = _resolveComponent$2("v-chip");
      const _component_v_spacer = _resolveComponent$2("v-spacer");
      const _component_v_select = _resolveComponent$2("v-select");
      const _component_v_pagination = _resolveComponent$2("v-pagination");
      const _component_v_text_field = _resolveComponent$2("v-text-field");
      const _component_v_card_title = _resolveComponent$2("v-card-title");
      const _component_v_tooltip = _resolveComponent$2("v-tooltip");
      const _component_v_skeleton_loader = _resolveComponent$2("v-skeleton-loader");
      const _component_v_card_text = _resolveComponent$2("v-card-text");
      const _component_v_snackbar = _resolveComponent$2("v-snackbar");
      const _component_v_card = _resolveComponent$2("v-card");
      return _openBlock$2(), _createBlock$2(_component_v_card, {
        flat: "",
        class: "mb-4"
      }, {
        default: _withCtx$2(() => [
          _createVNode$2(_component_v_card_title, { class: "text-subtitle-1 d-flex align-center px-2 py-1 bg-primary-lighten-5 flex-wrap" }, {
            default: _withCtx$2(() => [
              _createElementVNode$2("div", {
                class: _normalizeClass$2(["d-flex title-stats align-center ml-1", [_unref$2(smAndDown) ? "w-100 mb-2" : "mr-1"]])
              }, [
                _createVNode$2(_component_v_checkbox, {
                  "model-value": isSelectAll.value,
                  indeterminate: isIndeterminate.value,
                  "hide-details": "",
                  onChange: toggleSelectAll,
                  size: _unref$2(smAndDown) ? "x-small" : "small",
                  label: _unref$2(smAndDown) ? "" : "全选",
                  density: _unref$2(smAndDown) ? "compact" : "comfortable",
                  class: "select-all-checkbox"
                }, null, 8, ["model-value", "indeterminate", "size", "label", "density"]),
                totalComputed.value != "" ? (_openBlock$2(), _createBlock$2(_component_v_chip, {
                  key: 0,
                  size: _unref$2(smAndDown) ? "x-small" : "small",
                  color: "info",
                  variant: "flat"
                }, {
                  default: _withCtx$2(() => [
                    _createVNode$2(_component_v_icon, {
                      size: "14",
                      class: "mr-1"
                    }, {
                      default: _withCtx$2(() => _cache[8] || (_cache[8] = [
                        _createTextVNode$2("mdi-database")
                      ])),
                      _: 1,
                      __: [8]
                    }),
                    _createTextVNode$2(" " + _toDisplayString$2(totalComputed.value), 1)
                  ]),
                  _: 1
                }, 8, ["size"])) : _createCommentVNode$2("", true),
                state.selectedScans.length > 0 ? (_openBlock$2(), _createBlock$2(_component_v_chip, {
                  key: 1,
                  size: _unref$2(smAndDown) ? "x-small" : "small",
                  color: "error",
                  variant: "flat"
                }, {
                  default: _withCtx$2(() => [
                    _createVNode$2(_component_v_icon, {
                      size: "14",
                      class: "mr-1"
                    }, {
                      default: _withCtx$2(() => _cache[9] || (_cache[9] = [
                        _createTextVNode$2("mdi-checkbox-multiple-marked")
                      ])),
                      _: 1,
                      __: [9]
                    }),
                    _createTextVNode$2(" " + _toDisplayString$2(`已选择 ${state.selectedScans.length}项: ${selectedScansSize.value}`), 1)
                  ]),
                  _: 1
                }, 8, ["size"])) : _createCommentVNode$2("", true)
              ], 2),
              !_unref$2(smAndDown) ? (_openBlock$2(), _createBlock$2(_component_v_spacer, { key: 0 })) : _createCommentVNode$2("", true),
              totalPages.value >= 1 ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_1$2, [
                _createVNode$2(_component_v_select, {
                  modelValue: __props.scanParams.pageSize,
                  "onUpdate:modelValue": [
                    _cache[0] || (_cache[0] = ($event) => __props.scanParams.pageSize = $event),
                    handlePageSizeChange
                  ],
                  items: [50, 100, 200, 300, 500],
                  variant: "underlined",
                  density: "compact",
                  size: _unref$2(smAndDown) ? "x-small" : "small",
                  style: _normalizeStyle(_unref$2(smAndDown) ? "max-width: 63px;" : "max-width: 120px;")
                }, null, 8, ["modelValue", "size", "style"]),
                _createVNode$2(_component_v_pagination, {
                  modelValue: __props.scanParams.page,
                  "onUpdate:modelValue": [
                    _cache[1] || (_cache[1] = ($event) => __props.scanParams.page = $event),
                    handlePageChange
                  ],
                  length: totalPages.value,
                  rounded: "circle",
                  variant: "elevated",
                  size: "small",
                  "prev-icon": "mdi-arrow-left-circle",
                  "next-icon": "mdi-arrow-right-circle",
                  density: "comfortable",
                  "total-visible": _unref$2(smAndDown) ? 1 : 7,
                  class: _normalizeClass$2([_unref$2(smAndDown) ? "ml-1" : "ml-2"]),
                  elevation: 5
                }, null, 8, ["modelValue", "length", "total-visible", "class"]),
                _createElementVNode$2("div", _hoisted_2$2, [
                  _createVNode$2(_component_v_text_field, {
                    class: _normalizeClass$2(_unref$2(smAndDown) ? "ml-1" : "ml-3"),
                    variant: "underlined",
                    density: "compact",
                    "hide-details": "",
                    size: _unref$2(smAndDown) ? "x-small" : "small",
                    label: `共 ${totalPages.value} 页`,
                    "max-width": _unref$2(smAndDown) ? 120 : 145,
                    modelValue: state.currentPage,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.currentPage = $event)
                  }, {
                    "prepend-inner": _withCtx$2(() => [
                      _createVNode$2(_component_v_icon, {
                        size: "20",
                        class: "mr-1 cursor-pointer go-page-append",
                        onClick: goToPage,
                        color: "primary",
                        title: "跳转到"
                      }, {
                        default: _withCtx$2(() => _cache[10] || (_cache[10] = [
                          _createTextVNode$2("mdi-arrow-right-bold-circle")
                        ])),
                        _: 1,
                        __: [10]
                      })
                    ]),
                    "append-inner": _withCtx$2(() => [
                      _createVNode$2(_component_v_icon, {
                        size: "20",
                        class: "mr-1 cursor-pointer go-page-append",
                        onClick: _cache[2] || (_cache[2] = _withModifiers$2(($event) => state.currentPage = void 0, ["stop"])),
                        color: "#009688",
                        title: "清除"
                      }, {
                        default: _withCtx$2(() => _cache[11] || (_cache[11] = [
                          _createTextVNode$2("mdi-close-circle")
                        ])),
                        _: 1,
                        __: [11]
                      })
                    ]),
                    _: 1
                  }, 8, ["class", "size", "label", "max-width", "modelValue"])
                ])
              ])) : _createCommentVNode$2("", true)
            ]),
            _: 1
          }),
          _createVNode$2(_component_v_card_text, { class: "pa-0" }, {
            default: _withCtx$2(() => [
              activeFilterCount.value > 0 ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_3$2, [
                _createElementVNode$2("div", _hoisted_4$2, [
                  (_openBlock$2(true), _createElementBlock$2(_Fragment$2, null, _renderList$1(state.filter, (value, key) => {
                    return _openBlock$2(), _createElementBlock$2(_Fragment$2, null, [
                      isShowFilterTag(value, key) ? (_openBlock$2(), _createBlock$2(_component_v_chip, {
                        key,
                        class: _normalizeClass$2(["filter-chip-compact", `filter-${key}`]),
                        closable: "",
                        variant: "elevated",
                        size: "small",
                        "onClick:close": ($event) => deleteFilter(key),
                        elevation: "2"
                      }, {
                        prepend: _withCtx$2(() => [
                          _createVNode$2(_component_v_tooltip, { location: "top" }, {
                            activator: _withCtx$2(({ props: props2 }) => [
                              getfilterAttrByKey("type", key) == "icon" ? (_openBlock$2(), _createBlock$2(_component_v_icon, _mergeProps({
                                key: 0,
                                ref_for: true
                              }, props2, { size: "14" }), {
                                default: _withCtx$2(() => [
                                  _createTextVNode$2(_toDisplayString$2(getfilterAttrByKey("label", key)), 1)
                                ]),
                                _: 2
                              }, 1040)) : getfilterAttrByKey("type", key) == "text" ? (_openBlock$2(), _createElementBlock$2("span", _hoisted_5$2, _toDisplayString$2(getfilterAttrByKey("label", key)), 1)) : _createCommentVNode$2("", true)
                            ]),
                            default: _withCtx$2(() => [
                              _createTextVNode$2(" " + _toDisplayString$2(getfilterAttrByKey("title", key)), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        default: _withCtx$2(() => [
                          _createTextVNode$2(" " + _toDisplayString$2(formatFilterTag(value, key)), 1)
                        ]),
                        _: 2
                      }, 1032, ["class", "onClick:close"])) : _createCommentVNode$2("", true)
                    ], 64);
                  }), 256))
                ])
              ])) : _createCommentVNode$2("", true),
              _createElementVNode$2("div", _hoisted_6$2, [
                !props.loading && props.scanRes.combinedList.length > 0 ? (_openBlock$2(), _createBlock$2(DataListCard, {
                  key: 0,
                  selectedScans: state.selectedScans,
                  "onUpdate:selectedScans": _cache[4] || (_cache[4] = ($event) => state.selectedScans = $event),
                  scanRes: props.scanRes,
                  loading: props.loading,
                  onCopyPath: _copyPath,
                  ref_key: "dataListCardRef",
                  ref: dataListCardRef
                }, null, 8, ["selectedScans", "scanRes", "loading"])) : !props.loading && props.scanRes.combinedList.length === 0 ? (_openBlock$2(), _createElementBlock$2("div", _hoisted_7$2, [
                  _createVNode$2(_component_v_icon, { icon: "mdi-database-off" }),
                  _cache[12] || (_cache[12] = _createElementVNode$2("div", { class: "text-h6 mb-2" }, "暂无数据", -1)),
                  _cache[13] || (_cache[13] = _createElementVNode$2("div", { class: "text-body-2" }, "当前筛选条件下没有找到匹配的种子或文件", -1))
                ])) : (_openBlock$2(), _createElementBlock$2("div", _hoisted_8$2, [
                  _createVNode$2(_component_v_skeleton_loader, { type: "card@8" })
                ]))
              ])
            ]),
            _: 1
          }),
          _createVNode$2(_component_v_snackbar, {
            modelValue: state.snackbar.show,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.snackbar.show = $event),
            timeout: 3e3,
            color: state.snackbar.color,
            location: state.snackbar.location
          }, {
            default: _withCtx$2(() => [
              _createTextVNode$2(_toDisplayString$2(state.snackbar.message), 1)
            ]),
            _: 1
          }, 8, ["modelValue", "color", "location"]),
          _createVNode$2(FilterDialog, {
            dialogShow: state.filterDialog,
            "onUpdate:dialogShow": _cache[6] || (_cache[6] = ($event) => state.filterDialog = $event),
            filter: state.filter,
            initialConfig: props.initialConfig,
            onFilterChange: filterChange,
            onApplyFilter: applyFilter
          }, null, 8, ["dialogShow", "filter", "initialConfig"]),
          _createVNode$2(SortDialog, {
            dialogShow: state.sortDialog,
            "onUpdate:dialogShow": _cache[7] || (_cache[7] = ($event) => state.sortDialog = $event),
            onApplySort: applySort
          }, null, 8, ["dialogShow"])
        ]),
        _: 1
      });
    };
  }
});

const ScanResults = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2b21aea7"]]);

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createTextVNode:_createTextVNode$1,resolveComponent:_resolveComponent$1,withCtx:_withCtx$1,createVNode:_createVNode$1,toDisplayString:_toDisplayString$1,openBlock:_openBlock$1,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode$1,createElementVNode:_createElementVNode$1,renderList:_renderList,Fragment:_Fragment$1,createElementBlock:_createElementBlock$1,withModifiers:_withModifiers$1,unref:_unref$1,normalizeClass:_normalizeClass$1} = await importShared('vue');

const _hoisted_1$1 = { class: "title-left d-flex align-center" };
const _hoisted_2$1 = { class: "title-content" };
const _hoisted_3$1 = { class: "title-stats d-flex align-center" };
const _hoisted_4$1 = { style: { "min-height": "260px", "max-height": "420px", "overflow-y": "auto" } };
const _hoisted_5$1 = { class: "card-header-horizontal pa-2" };
const _hoisted_6$1 = { class: "d-flex align-center justify-space-between mb-2" };
const _hoisted_7$1 = { class: "file-name-horizontal text-body-2" };
const _hoisted_8$1 = { class: "card-content-horizontal pa-2 pt-0" };
const _hoisted_9$1 = { class: "d-flex align-center flex-wrap gap-1 mb-1" };
const _hoisted_10$1 = { class: "info-grid-horizontal" };
const _hoisted_11$1 = { class: "info-item" };
const _hoisted_12$1 = { class: "text-caption" };
const _hoisted_13$1 = { class: "info-item" };
const _hoisted_14$1 = { class: "text-caption text-truncate" };
const _hoisted_15$1 = { class: "info-item" };
const _hoisted_16$1 = { class: "text-caption" };
const _hoisted_17$1 = { class: "info-item" };
const _hoisted_18 = { class: "text-caption" };
const _hoisted_19 = { class: "info-item" };
const _hoisted_20 = { class: "text-caption" };
const _hoisted_21 = { class: "info-item" };
const _hoisted_22 = ["title"];
const _hoisted_23 = { class: "info-item" };
const _hoisted_24 = { class: "text-caption text-truncate" };
const _hoisted_25 = { class: "info-item" };
const _hoisted_26 = { class: "text-caption text-truncate" };
const _hoisted_27 = {
  key: 1,
  class: "empty-state"
};
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
      showNotification(`已从待清理列表中移除: ${item.name}`);
    };
    const formatTimeSince = (dateString) => {
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffInMs = now.getTime() - date.getTime();
      const diffInDays = Math.floor(diffInMs / (1e3 * 60 * 60 * 24));
      if (diffInDays === 0) return "今天";
      if (diffInDays === 1) return "昨天";
      if (diffInDays < 7) return `${diffInDays}天前`;
      if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}周前`;
      if (diffInDays < 365) return `${Math.floor(diffInDays / 30)}个月前`;
      return `${Math.floor(diffInDays / 365)}年前`;
    };
    const formatCreatedTime = (time) => {
      if (time === "1970-01-01 08:00:00" || !time) {
        return "";
      } else {
        return formatTimeSince(time);
      }
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
      showNotification("已清空所有待清理记录");
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
      const _component_v_icon = _resolveComponent$1("v-icon");
      const _component_v_chip = _resolveComponent$1("v-chip");
      const _component_v_spacer = _resolveComponent$1("v-spacer");
      const _component_v_card_title = _resolveComponent$1("v-card-title");
      const _component_v_btn = _resolveComponent$1("v-btn");
      const _component_v_col = _resolveComponent$1("v-col");
      const _component_v_row = _resolveComponent$1("v-row");
      const _component_v_card = _resolveComponent$1("v-card");
      const _component_v_card_text = _resolveComponent$1("v-card-text");
      const _component_v_snackbar = _resolveComponent$1("v-snackbar");
      return _openBlock$1(), _createBlock$1(_component_v_card, {
        flat: "",
        class: "cleanup-list-card"
      }, {
        default: _withCtx$1(() => [
          _createVNode$1(_component_v_card_title, { class: "cleanup-list-title d-flex align-center px-4 py-3" }, {
            default: _withCtx$1(() => [
              _createElementVNode$1("div", _hoisted_1$1, [
                _createElementVNode$1("div", _hoisted_2$1, [
                  _createElementVNode$1("div", _hoisted_3$1, [
                    state.cleanupList.length > 0 ? (_openBlock$1(), _createBlock$1(_component_v_chip, {
                      key: 0,
                      class: "mr-2",
                      size: "small",
                      color: "error",
                      variant: "flat"
                    }, {
                      default: _withCtx$1(() => [
                        _createVNode$1(_component_v_icon, {
                          size: "14",
                          class: "mr-1"
                        }, {
                          default: _withCtx$1(() => _cache[1] || (_cache[1] = [
                            _createTextVNode$1("mdi-delete")
                          ])),
                          _: 1,
                          __: [1]
                        }),
                        _createTextVNode$1(" 数量：" + _toDisplayString$1(state.cleanupList.length) + ", 总大小：" + _toDisplayString$1(totalSize.value), 1)
                      ]),
                      _: 1
                    })) : _createCommentVNode$1("", true)
                  ])
                ])
              ]),
              _createVNode$1(_component_v_spacer),
              _cache[2] || (_cache[2] = _createElementVNode$1("div", { class: "title-actions d-flex align-center" }, null, -1))
            ]),
            _: 1,
            __: [2]
          }),
          _createVNode$1(_component_v_card_text, { class: "pa-0" }, {
            default: _withCtx$1(() => [
              _createElementVNode$1("div", _hoisted_4$1, [
                state.cleanupList.length > 0 ? (_openBlock$1(), _createBlock$1(_component_v_row, {
                  key: 0,
                  class: "pa-2",
                  "no-gutters": ""
                }, {
                  default: _withCtx$1(() => [
                    (_openBlock$1(true), _createElementBlock$1(_Fragment$1, null, _renderList(state.cleanupList, (item, index) => {
                      return _openBlock$1(), _createBlock$1(_component_v_col, {
                        key: item.hash || item.path,
                        cols: "12",
                        sm: "6",
                        md: "4",
                        lg: "4",
                        class: "pa-1 d-flex"
                      }, {
                        default: _withCtx$1(() => [
                          _createVNode$1(_component_v_card, {
                            class: _normalizeClass$1([[
                              "cleanup-card-horizontal",
                              { "qb-card": item.hasOwnProperty("client") && item.client !== "transmission" },
                              { "tr-card": item.hasOwnProperty("client") && item.client === "transmission" }
                            ], "flex-grow-1"]),
                            elevation: "1",
                            hover: ""
                          }, {
                            default: _withCtx$1(() => [
                              _createElementVNode$1("div", _hoisted_5$1, [
                                _createElementVNode$1("div", _hoisted_6$1, [
                                  _createVNode$1(_component_v_row, {
                                    class: "d-flex align-center",
                                    "no-gutters": ""
                                  }, {
                                    default: _withCtx$1(() => [
                                      _createVNode$1(_component_v_col, {
                                        cols: 1,
                                        class: "px-0 py-0"
                                      }, {
                                        default: _withCtx$1(() => [
                                          _createVNode$1(_component_v_btn, {
                                            size: "x-small",
                                            variant: "text",
                                            color: "error",
                                            onClick: _withModifiers$1(($event) => removeFromCleanup(item), ["stop"]),
                                            icon: "mdi-delete"
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      _createVNode$1(_component_v_col, {
                                        cols: 10,
                                        class: "px-1 py-0"
                                      }, {
                                        default: _withCtx$1(() => [
                                          _createElementVNode$1("span", _hoisted_7$1, _toDisplayString$1(item.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      _createVNode$1(_component_v_col, {
                                        cols: 1,
                                        class: "px-0 py-0"
                                      }, {
                                        default: _withCtx$1(() => [
                                          _createVNode$1(_component_v_btn, {
                                            size: "x-small",
                                            variant: "text",
                                            color: "primary",
                                            onClick: _withModifiers$1(($event) => _copyPath(item.path), ["stop"]),
                                            icon: "mdi-content-copy"
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _createElementVNode$1("div", _hoisted_8$1, [
                                _createElementVNode$1("div", _hoisted_9$1, [
                                  _createVNode$1(_component_v_chip, {
                                    color: deleteOptionText(item).color,
                                    size: "x-small",
                                    "text-color": "white",
                                    class: "delete-option-chip"
                                  }, {
                                    default: _withCtx$1(() => [
                                      _createTextVNode$1(_toDisplayString$1(deleteOptionText(item).text), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"]),
                                  _createVNode$1(_component_v_chip, {
                                    color: item.type === "torrent" ? "warning" : "error",
                                    "text-color": "white",
                                    size: "x-small",
                                    class: "type-chip ml-2"
                                  }, {
                                    default: _withCtx$1(() => [
                                      _createTextVNode$1(_toDisplayString$1(item.type === "torrent" ? "种子" : "文件"), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["color"])
                                ]),
                                _createElementVNode$1("div", _hoisted_10$1, [
                                  _createElementVNode$1("div", _hoisted_11$1, [
                                    _createVNode$1(_component_v_icon, {
                                      size: "14",
                                      color: "info",
                                      class: "mr-1"
                                    }, {
                                      default: _withCtx$1(() => _cache[3] || (_cache[3] = [
                                        _createTextVNode$1("mdi-database")
                                      ])),
                                      _: 1,
                                      __: [3]
                                    }),
                                    _createElementVNode$1("span", _hoisted_12$1, _toDisplayString$1(itemSizeText(item)), 1)
                                  ]),
                                  _createElementVNode$1("div", _hoisted_13$1, [
                                    _createVNode$1(_component_v_icon, {
                                      size: "14",
                                      color: item.type == "torrent" ? _unref$1(getStatusColor)(item.status) : "error",
                                      class: "mr-1"
                                    }, {
                                      default: _withCtx$1(() => _cache[4] || (_cache[4] = [
                                        _createTextVNode$1("mdi-chart-timeline-variant")
                                      ])),
                                      _: 2,
                                      __: [4]
                                    }, 1032, ["color"]),
                                    _createElementVNode$1("span", _hoisted_14$1, _toDisplayString$1(`${item.type == "torrent" ? item.status : "缺失种子"}`), 1)
                                  ]),
                                  _createElementVNode$1("div", _hoisted_15$1, [
                                    _createVNode$1(_component_v_icon, {
                                      size: "14",
                                      color: item.type == "torrent" ? _unref$1(getColorByString)(item?.trackers) : "primary",
                                      class: "mr-1"
                                    }, {
                                      default: _withCtx$1(() => _cache[5] || (_cache[5] = [
                                        _createTextVNode$1("mdi-tag")
                                      ])),
                                      _: 2,
                                      __: [5]
                                    }, 1032, ["color"]),
                                    _createElementVNode$1("span", _hoisted_16$1, _toDisplayString$1(item.type === "torrent" && item?.trackers.length > 0 ? _unref$1(mapTrackers)(item.trackers)[0] : "无"), 1)
                                  ]),
                                  _createElementVNode$1("div", _hoisted_17$1, [
                                    _createVNode$1(_component_v_icon, {
                                      size: "14",
                                      color: "warning",
                                      class: "mr-1"
                                    }, {
                                      default: _withCtx$1(() => _cache[6] || (_cache[6] = [
                                        _createTextVNode$1("mdi-clock-outline")
                                      ])),
                                      _: 1,
                                      __: [6]
                                    }),
                                    _createElementVNode$1("span", _hoisted_18, _toDisplayString$1(item.type === "torrent" && item.created_at ? formatCreatedTime(item.created_at) : "-"), 1)
                                  ]),
                                  _createElementVNode$1("div", _hoisted_19, [
                                    _createVNode$1(_component_v_icon, {
                                      size: "14",
                                      color: "success",
                                      class: "mr-1"
                                    }, {
                                      default: _withCtx$1(() => _cache[7] || (_cache[7] = [
                                        _createTextVNode$1("mdi-seed")
                                      ])),
                                      _: 1,
                                      __: [7]
                                    }),
                                    _createElementVNode$1("span", _hoisted_20, _toDisplayString$1(item.type === "torrent" ? `${item.seeds || 0}` : "无"), 1)
                                  ]),
                                  _createElementVNode$1("div", _hoisted_21, [
                                    _createVNode$1(_component_v_icon, {
                                      size: "14",
                                      color: "cyan",
                                      class: "mr-1"
                                    }, {
                                      default: _withCtx$1(() => _cache[8] || (_cache[8] = [
                                        _createTextVNode$1("mdi-folder")
                                      ])),
                                      _: 1,
                                      __: [8]
                                    }),
                                    _createElementVNode$1("span", {
                                      class: "text-caption text-truncate",
                                      title: item.path
                                    }, _toDisplayString$1(item.path), 9, _hoisted_22)
                                  ]),
                                  _createElementVNode$1("div", _hoisted_23, [
                                    _createVNode$1(_component_v_icon, {
                                      size: "14",
                                      color: "teal",
                                      class: "mr-1"
                                    }, {
                                      default: _withCtx$1(() => _cache[9] || (_cache[9] = [
                                        _createTextVNode$1("mdi-download")
                                      ])),
                                      _: 1,
                                      __: [9]
                                    }),
                                    _createElementVNode$1("span", _hoisted_24, _toDisplayString$1(`${item.type == "torrent" ? item.client_name : "-"}`), 1)
                                  ]),
                                  _createElementVNode$1("div", _hoisted_25, [
                                    _createVNode$1(_component_v_icon, {
                                      size: "14",
                                      color: "error",
                                      class: "mr-1"
                                    }, {
                                      default: _withCtx$1(() => _cache[10] || (_cache[10] = [
                                        _createTextVNode$1("mdi-close-octagon")
                                      ])),
                                      _: 1,
                                      __: [10]
                                    }),
                                    _createElementVNode$1("span", _hoisted_26, _toDisplayString$1(`${item.type == "torrent" && item.error ? item.error : "无"}`), 1)
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["class"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })) : (_openBlock$1(), _createElementBlock$1("div", _hoisted_27, [
                  _createVNode$1(_component_v_icon, { icon: "mdi-delete-off" }),
                  _cache[11] || (_cache[11] = _createElementVNode$1("div", { class: "text-h6 mb-2" }, "暂无待清理项目", -1)),
                  _cache[12] || (_cache[12] = _createElementVNode$1("div", { class: "text-body-2" }, "请先在扫描结果中选择需要清理的项目", -1))
                ]))
              ])
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

const CleanupList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-134121fa"]]);

const {defineComponent:_defineComponent} = await importShared('vue');

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,unref:_unref,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,Fragment:_Fragment,createElementBlock:_createElementBlock,withCtx:_withCtx,withModifiers:_withModifiers,normalizeClass:_normalizeClass,createTextVNode:_createTextVNode,vShow:_vShow,withDirectives:_withDirectives,toDisplayString:_toDisplayString} = await importShared('vue');

const _hoisted_1 = { class: "plugin-common plugin-page" };
const _hoisted_2 = { class: "header-actions" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  key: 1,
  class: "mobile-btn-text"
};
const _hoisted_5 = { key: 0 };
const _hoisted_6 = {
  key: 1,
  class: "mobile-btn-text"
};
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  key: 1,
  class: "mobile-btn-text"
};
const _hoisted_9 = { key: 0 };
const _hoisted_10 = {
  key: 1,
  class: "mobile-btn-text"
};
const _hoisted_11 = { class: "list-actions d-flex align-center" };
const _hoisted_12 = {
  key: 0,
  class: "ml-1"
};
const _hoisted_13 = {
  key: 0,
  class: "ml-1"
};
const _hoisted_14 = {
  key: 0,
  class: "ml-1"
};
const _hoisted_15 = {
  key: 0,
  class: "ml-1"
};
const _hoisted_16 = { class: "tab-content" };
const _hoisted_17 = { class: "tab-content" };
const {onMounted,reactive,ref} = await importShared('vue');
const {useDisplay} = await importShared('vuetify');

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
    const { smAndDown } = useDisplay();
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
          seeds_limit_down: null,
          seeds_limit_up: null,
          seeds_limit: [null, null],
          size_limit_down: null,
          size_limit_up: null,
          size_limit: [null, null],
          live_time: 0
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
      state.scaning = true;
      initData();
      if (!isPageChange) {
        state.scanParams.page = 1;
      }
      let url = `plugin/${PLUGIN_ID}/scan?pageChange=${isPageChange}&pageSizeChange=${isPageSizeChange}&sortChange=${isSortChanged}&filterChange=${filterChanged}`;
      const params = { ...toolbarRef.value.state };
      params["page"] = state.scanParams.page;
      params["limit"] = state.scanParams.pageSize;
      params["sortBy"] = state.scanParams.sortBy;
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
      } else {
        console.warn("ToolBar 或 initParams 方法未定义");
      }
    };
    const deleteAllRecord = () => {
      if (state.listTab == "scan") {
        initData();
        state.scanRes.page = 1;
      } else if (state.listTab == "cleanup") {
        cleanupRef.value && cleanupRef.value.deleteAllRecord();
      }
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
    const addSelectedToCleanup = () => {
      if (scanResultsRef.value) {
        const selectedScans = scanResultsRef.value.getSelectedScans();
        addToCleanup(selectedScans);
      }
    };
    const toggleFilter = () => {
      if (scanResultsRef.value) {
        scanResultsRef.value.toggleFilter();
      }
    };
    const toggleSort = () => {
      if (scanResultsRef.value) {
        scanResultsRef.value.toggleSort();
      }
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
      state.scanParams.filter.size_limit = filter.size_limit || [];
      state.scanParams.filter.live_time = filter.live_time || 0;
      startScan(false, false, false, true);
    };
    const applySort = (sortOptionList) => {
      state.scanParams.sortBy = sortOptionList;
      startScan(false, false, true, false);
    };
    const downloadTracker = async () => {
      let url = `/plugin/${PLUGIN_ID}/tracker-list`;
      try {
        const res = await props.api.get(url);
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
      const _component_v_spacer = _resolveComponent("v-spacer");
      const _component_v_btn = _resolveComponent("v-btn");
      const _component_v_card_title = _resolveComponent("v-card-title");
      const _component_v_col = _resolveComponent("v-col");
      const _component_v_row = _resolveComponent("v-row");
      const _component_v_card_text = _resolveComponent("v-card-text");
      const _component_v_card = _resolveComponent("v-card");
      const _component_v_tab = _resolveComponent("v-tab");
      const _component_v_tabs = _resolveComponent("v-tabs");
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
                _cache[10] || (_cache[10] = _createElementVNode("span", null, "种子清理工", -1)),
                _createVNode(_component_v_spacer),
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_v_btn, {
                    color: "success",
                    onClick: _cache[0] || (_cache[0] = ($event) => switch_tab("config")),
                    variant: "text",
                    disabled: state.scaning || state.clearing,
                    size: "small",
                    density: "compact",
                    class: "header-action-btn"
                  }, {
                    default: _withCtx(() => [
                      _unref(smAndDown) ? (_openBlock(), _createBlock(_component_v_icon, {
                        key: 0,
                        icon: "mdi-cog",
                        size: "18"
                      })) : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                        _createVNode(_component_v_icon, {
                          icon: "mdi-cog",
                          size: "18",
                          class: "mr-1"
                        }),
                        _cache[8] || (_cache[8] = _createElementVNode("span", null, "配置页", -1))
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  _createVNode(_component_v_btn, {
                    color: "primary",
                    onClick: close,
                    variant: "text",
                    disabled: state.scaning || state.clearing,
                    size: "small",
                    density: "compact",
                    class: "header-action-btn"
                  }, {
                    default: _withCtx(() => [
                      _unref(smAndDown) ? (_openBlock(), _createBlock(_component_v_icon, {
                        key: 0,
                        icon: "mdi-close",
                        size: "18"
                      })) : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                        _createVNode(_component_v_icon, {
                          icon: "mdi-close",
                          size: "18",
                          class: "mr-1"
                        }),
                        _cache[9] || (_cache[9] = _createElementVNode("span", null, "关闭", -1))
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ]),
              _: 1,
              __: [10]
            }),
            _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
              default: _withCtx(() => [
                _createVNode(_component_v_card, {
                  flat: "",
                  class: "rounded mb-3 border config-card"
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_card_title, {
                      class: "text-subtitle-2 d-flex align-center px-3 py-2 bg-primary-lighten-5 cursor-pointer",
                      onClick: _cache[2] || (_cache[2] = _withModifiers(($event) => toolbarRef.value?.toggleCollapse && toolbarRef.value.toggleCollapse(), ["stop", "prevent"]))
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_component_v_icon, {
                          icon: "mdi-magnify",
                          class: "mr-2",
                          color: "primary",
                          size: "small"
                        }),
                        _cache[11] || (_cache[11] = _createElementVNode("span", null, "扫描选项", -1)),
                        _createVNode(_component_v_spacer),
                        _createVNode(_component_v_btn, {
                          color: "primary",
                          icon: "mdi-chevron-left",
                          size: "small",
                          density: "compact",
                          variant: "text",
                          class: _normalizeClass(["ml-auto mr-2 transition-button", { "rotate-180": toolbarRef.value?.isCollapsed }]),
                          onClick: _cache[1] || (_cache[1] = _withModifiers(($event) => toolbarRef.value?.toggleCollapse && toolbarRef.value.toggleCollapse(), ["stop", "prevent"]))
                        }, null, 8, ["class"])
                      ]),
                      _: 1,
                      __: [11]
                    }),
                    _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                      default: _withCtx(() => [
                        _createVNode(ToolBar, {
                          ref_key: "toolbarRef",
                          ref: toolbarRef
                        }, null, 512),
                        _createVNode(_component_v_row, { class: "mb-0 mt-n1 px-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_col, {
                              cols: _unref(smAndDown) ? 6 : 3
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_btn, {
                                  color: "primary",
                                  onClick: _cache[3] || (_cache[3] = ($event) => startScan(false)),
                                  variant: "outlined",
                                  size: _unref(smAndDown) ? "x-small" : "small",
                                  density: _unref(smAndDown) ? "compact" : "comfortable",
                                  class: _normalizeClass(["w-100 modern-action-btn", _unref(smAndDown) ? "mobile-action-btn" : ""]),
                                  disabled: state.clearing,
                                  loading: state.scaning,
                                  elevation: "2"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_icon, {
                                      icon: "mdi-magnify",
                                      size: _unref(smAndDown) ? "16" : "small",
                                      class: _normalizeClass(_unref(smAndDown) ? "mr-1" : "mr-2")
                                    }, null, 8, ["size", "class"]),
                                    !_unref(smAndDown) ? (_openBlock(), _createElementBlock("span", _hoisted_3, "开始扫描")) : (_openBlock(), _createElementBlock("span", _hoisted_4, "开始扫描"))
                                  ]),
                                  _: 1
                                }, 8, ["size", "density", "class", "disabled", "loading"])
                              ]),
                              _: 1
                            }, 8, ["cols"]),
                            _createVNode(_component_v_col, {
                              cols: _unref(smAndDown) ? 6 : 3
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_btn, {
                                  color: "secondary",
                                  onClick: downloadTracker,
                                  variant: "outlined",
                                  size: _unref(smAndDown) ? "x-small" : "small",
                                  density: _unref(smAndDown) ? "compact" : "comfortable",
                                  class: _normalizeClass(["w-100 modern-action-btn", _unref(smAndDown) ? "mobile-action-btn" : ""]),
                                  disabled: state.scaning || state.clearing,
                                  elevation: "2"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_icon, {
                                      icon: _unref(smAndDown) ? "mdi-tray-arrow-down" : "mdi-tray-arrow-down",
                                      size: _unref(smAndDown) ? "16" : "small",
                                      class: _normalizeClass(_unref(smAndDown) ? "mr-1" : "mr-2")
                                    }, null, 8, ["icon", "size", "class"]),
                                    !_unref(smAndDown) ? (_openBlock(), _createElementBlock("span", _hoisted_5, "导出Tracker")) : (_openBlock(), _createElementBlock("span", _hoisted_6, "导出Tracker"))
                                  ]),
                                  _: 1
                                }, 8, ["size", "density", "class", "disabled"])
                              ]),
                              _: 1
                            }, 8, ["cols"]),
                            _createVNode(_component_v_col, {
                              cols: _unref(smAndDown) ? 6 : 3
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_btn, {
                                  color: "warning",
                                  onClick: resetParams,
                                  variant: "outlined",
                                  size: _unref(smAndDown) ? "x-small" : "small",
                                  density: _unref(smAndDown) ? "compact" : "comfortable",
                                  class: _normalizeClass(["w-100 modern-action-btn", _unref(smAndDown) ? "mobile-action-btn" : ""]),
                                  disabled: state.scaning || state.clearing,
                                  elevation: "2"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_icon, {
                                      icon: "mdi-refresh",
                                      size: _unref(smAndDown) ? "16" : "small",
                                      class: _normalizeClass(_unref(smAndDown) ? "mr-1" : "mr-2")
                                    }, null, 8, ["size", "class"]),
                                    !_unref(smAndDown) ? (_openBlock(), _createElementBlock("span", _hoisted_7, "重置选项")) : (_openBlock(), _createElementBlock("span", _hoisted_8, "重置选项"))
                                  ]),
                                  _: 1
                                }, 8, ["size", "density", "class", "disabled"])
                              ]),
                              _: 1
                            }, 8, ["cols"]),
                            _createVNode(_component_v_col, {
                              cols: _unref(smAndDown) ? 6 : 3
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_btn, {
                                  color: "error",
                                  onClick: startCleanup,
                                  variant: "outlined",
                                  size: _unref(smAndDown) ? "x-small" : "small",
                                  density: _unref(smAndDown) ? "compact" : "comfortable",
                                  class: _normalizeClass(["w-100 modern-action-btn", _unref(smAndDown) ? "mobile-action-btn" : ""]),
                                  disabled: state.scaning,
                                  loading: state.clearing,
                                  elevation: "2"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_icon, {
                                      icon: _unref(smAndDown) ? "mdi-trash-can-outline" : "mdi-trash-can-outline",
                                      size: _unref(smAndDown) ? "16" : "small",
                                      class: _normalizeClass(_unref(smAndDown) ? "mr-1" : "mr-2")
                                    }, null, 8, ["icon", "size", "class"]),
                                    !_unref(smAndDown) ? (_openBlock(), _createElementBlock("span", _hoisted_9, "开始清理")) : (_openBlock(), _createElementBlock("span", _hoisted_10, "开始清理"))
                                  ]),
                                  _: 1
                                }, 8, ["size", "density", "class", "disabled", "loading"])
                              ]),
                              _: 1
                            }, 8, ["cols"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                _createVNode(_component_v_card, {
                  flat: "",
                  class: "rounded mb-3 border config-card"
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_card_title, { class: "text-subtitle-2 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                      default: _withCtx(() => [
                        _createVNode(_component_v_icon, {
                          icon: "mdi-list-box",
                          class: "mr-2",
                          color: "primary",
                          size: "small"
                        }),
                        _cache[12] || (_cache[12] = _createElementVNode("span", null, "列表区域", -1)),
                        _createVNode(_component_v_spacer),
                        _createElementVNode("div", _hoisted_11, [
                          _createVNode(_component_v_btn, {
                            color: "primary",
                            onClick: deleteAllRecord,
                            variant: "outlined",
                            size: _unref(smAndDown) ? "x-small" : "small",
                            icon: _unref(smAndDown),
                            class: _normalizeClass("mr-2"),
                            disabled: state.scaning || state.clearing
                          }, {
                            default: _withCtx(() => [
                              _createVNode(_component_v_icon, {
                                icon: "mdi-broom",
                                size: _unref(smAndDown) ? 18 : "small"
                              }, null, 8, ["size"]),
                              !_unref(smAndDown) ? (_openBlock(), _createElementBlock("span", _hoisted_12, "清空记录")) : _createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["size", "icon", "disabled"]),
                          _createVNode(_component_v_btn, {
                            color: "success",
                            onClick: addSelectedToCleanup,
                            variant: "outlined",
                            size: _unref(smAndDown) ? "x-small" : "small",
                            icon: _unref(smAndDown),
                            class: _normalizeClass("mr-2"),
                            disabled: state.scaning || state.clearing
                          }, {
                            default: _withCtx(() => [
                              _createVNode(_component_v_icon, {
                                icon: "mdi-plus-box",
                                size: _unref(smAndDown) ? 18 : "small"
                              }, null, 8, ["size"]),
                              !_unref(smAndDown) ? (_openBlock(), _createElementBlock("span", _hoisted_13, "添加到待清理")) : _createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["size", "icon", "disabled"]),
                          _createVNode(_component_v_btn, {
                            color: "warning",
                            variant: "outlined",
                            size: _unref(smAndDown) ? "x-small" : "small",
                            icon: _unref(smAndDown),
                            class: _normalizeClass("mr-2"),
                            onClick: toggleFilter,
                            disabled: state.scaning || state.clearing
                          }, {
                            default: _withCtx(() => [
                              _createVNode(_component_v_icon, {
                                icon: "mdi-filter-variant",
                                size: _unref(smAndDown) ? 18 : "small"
                              }, null, 8, ["size"]),
                              !_unref(smAndDown) ? (_openBlock(), _createElementBlock("span", _hoisted_14, "筛选条件")) : _createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["size", "icon", "disabled"]),
                          _createVNode(_component_v_btn, {
                            color: "#E91E63",
                            variant: "outlined",
                            size: _unref(smAndDown) ? "x-small" : "small",
                            icon: _unref(smAndDown),
                            class: _normalizeClass("mr-2"),
                            onClick: toggleSort,
                            disabled: state.scaning || state.clearing
                          }, {
                            default: _withCtx(() => [
                              _createVNode(_component_v_icon, {
                                icon: "mdi-sort",
                                size: _unref(smAndDown) ? 18 : "small"
                              }, null, 8, ["size"]),
                              !_unref(smAndDown) ? (_openBlock(), _createElementBlock("span", _hoisted_15, "排序规则")) : _createCommentVNode("", true)
                            ]),
                            _: 1
                          }, 8, ["size", "icon", "disabled"])
                        ])
                      ]),
                      _: 1,
                      __: [12]
                    }),
                    _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                      default: _withCtx(() => [
                        _createVNode(_component_v_tabs, {
                          modelValue: state.listTab,
                          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => state.listTab = $event),
                          "bg-color": "deep-purple-lighten-5",
                          "fixed-tabs": ""
                        }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_tab, {
                              value: "scan",
                              onClick: _cache[4] || (_cache[4] = ($event) => setTab("scan"))
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_icon, {
                                  icon: "mdi-magnify",
                                  class: "mr-1",
                                  size: "18"
                                }),
                                _cache[13] || (_cache[13] = _createTextVNode(" 扫描结果 "))
                              ]),
                              _: 1,
                              __: [13]
                            }),
                            _createVNode(_component_v_tab, {
                              value: "cleanup",
                              onClick: _cache[5] || (_cache[5] = ($event) => setTab("cleanup"))
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_icon, {
                                  icon: "mdi-trash-can-outline",
                                  class: "mr-1",
                                  size: "18"
                                }),
                                _cache[14] || (_cache[14] = _createTextVNode(" 等待清理 "))
                              ]),
                              _: 1,
                              __: [14]
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ]),
                      _: 1
                    }),
                    _withDirectives(_createElementVNode("div", _hoisted_16, [
                      _createVNode(ScanResults, {
                        "scan-res": state.scanRes,
                        "scan-params": state.scanParams,
                        loading: state.scaning,
                        initialConfig: state.initConfig,
                        "onUpdate:scanParams": handleScanParamsUpdate,
                        ref_key: "scanResultsRef",
                        ref: scanResultsRef,
                        onApplyFilter: applyFilter,
                        onApplySort: applySort
                      }, null, 8, ["scan-res", "scan-params", "loading", "initialConfig"])
                    ], 512), [
                      [_vShow, state.listTab == "scan"]
                    ]),
                    _withDirectives(_createElementVNode("div", _hoisted_17, [
                      _createVNode(CleanupList, {
                        ref_key: "cleanupRef",
                        ref: cleanupRef
                      }, null, 512)
                    ], 512), [
                      [_vShow, state.listTab == "cleanup"]
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _createVNode(_component_v_snackbar, {
          modelValue: state.snackbar.show,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => state.snackbar.show = $event),
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

const PageComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ccbe3425"]]);

export { PageComponent as default };
