import { importShared } from './__federation_fn_import-JrT3xvdd.js';
import { P as PLUGIN_ID } from './definedFunctions-Bb1e_4Bq.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,withCtx:_withCtx,createTextVNode:_createTextVNode,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,toDisplayString:_toDisplayString,createBlock:_createBlock,createCommentVNode:_createCommentVNode,withModifiers:_withModifiers} = await importShared('vue');

const _hoisted_1 = { class: "plugin-common plugin-config" };
const {ref,reactive,onMounted,computed,watch} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Config",
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
    const props = __props;
    const emit = __emit;
    const state = reactive({
      saving: false,
      snackbar: {
        location: "top",
        show: false,
        message: "",
        color: "success"
      },
      systemDownloader: [],
      selectedSystemDownloaderNames: [],
      customDownloader: {
        name: "",
        type: "qbittorrent",
        host: "",
        port: 443,
        username: "",
        password: ""
      }
    });
    const formRef = ref();
    const editableConfig = reactive({
      enable: true,
      exclude_paths: "",
      extra_dir_paths: "",
      downloaders: {
        system: [],
        custom: []
      }
    });
    const allDownloaders = computed(() => {
      return [
        ...editableConfig.downloaders.system.map((d) => ({ ...d, _type: "system" })),
        ...editableConfig.downloaders.custom.map((d) => ({ ...d, _type: "custom" }))
      ];
    });
    function validateName(value) {
      value = value.trim();
      const existsSystem = state.systemDownloader.some(
        (d) => d.name === value
      );
      if (existsSystem)
        return "名称已存在于系统下载器中，请重新输入";
      const exists = editableConfig.downloaders.custom.some(
        (d) => d.name === value
      );
      return exists ? "名称已存在于自定义下载器中，请重新输入" : true;
    }
    const showNotification = (text, color = "success") => {
      state.snackbar.message = text;
      state.snackbar.color = color;
      state.snackbar.show = true;
    };
    function handleSystemDownloadersChange(selectedNames) {
      const systemDownloaders = state.systemDownloader;
      const added = systemDownloaders.filter((d) => selectedNames.includes(d.name) && !allDownloaders.value.some((dl) => dl.name === d.name && dl._type === "system"));
      const removedNames = allDownloaders.value.filter((dl) => dl._type === "system").map((dl) => dl.name).filter((name) => !selectedNames.includes(name));
      added.forEach((dl) => {
        editableConfig.downloaders.system.push(dl);
      });
      editableConfig.downloaders.system = editableConfig.downloaders.system.filter((dl) => !removedNames.includes(dl.name));
    }
    function addCustomDownloader() {
      const newDl = { ...state.customDownloader };
      if (!newDl.name || !newDl.host || !newDl.port || !newDl.username || !newDl.password) {
        alert("请填写所有必填字段");
        return;
      }
      const exists = editableConfig.downloaders.custom.some((d) => d.name === newDl.name);
      if (exists) {
        alert("名称已存在");
        return;
      }
      Object.keys(newDl).forEach((key) => {
        if (typeof newDl[key] === "string") {
          newDl[key] = newDl[key].trim();
        }
      });
      editableConfig.downloaders.custom.push(newDl);
      state.customDownloader = {
        name: "",
        type: "qbittorrent",
        host: "",
        port: 443,
        username: "",
        password: ""
      };
    }
    const getSystemDownloaders = () => {
      props.api.get(`plugin/${PLUGIN_ID}/downloader?config_type=system`).then((res) => {
        state.systemDownloader = res.system;
      });
    };
    function editCustom(downloader) {
      state.customDownloader = { ...downloader };
      deleteDownloader(editableConfig.downloaders.custom.findIndex((d) => d.name === downloader.name), "custom");
    }
    function deleteDownloader(index, type) {
      if (type === "system") {
        let deleteItem = editableConfig.downloaders.system[index];
        state.selectedSystemDownloaderNames = state.selectedSystemDownloaderNames.filter((name) => name !== deleteItem.name);
        editableConfig.downloaders.system.splice(index, 1);
      } else {
        editableConfig.downloaders.custom.splice(index, 1);
      }
    }
    const saveFullConfig = async () => {
      state.saving = true;
      try {
        const res = await props.api.post(`plugin/${PLUGIN_ID}/config`, {
          enable: editableConfig.enable,
          exclude_paths: editableConfig.exclude_paths,
          extra_dir_paths: editableConfig.extra_dir_paths,
          downloaders: editableConfig.downloaders
        });
        if (res["code"] != "ok") {
          showNotification(res["message"] || "保存失败", "error");
        }
        showNotification("保存配置成功", "success");
      } catch (err) {
        showNotification(err.message || "保存配置失败，请检查网络或查看日志", "error");
      } finally {
        state.saving = false;
      }
    };
    watch(
      () => props.initialConfig,
      (newConfig) => {
        if (newConfig && Object.keys(newConfig).length > 0) {
          Object.keys(editableConfig).forEach((key) => {
            if (newConfig.hasOwnProperty(key)) {
              editableConfig[key] = JSON.parse(JSON.stringify(newConfig[key]));
            }
          });
          editableConfig.downloaders.system.forEach((d) => {
            state.selectedSystemDownloaderNames.push(d.name);
          });
        }
      },
      { deep: true, immediate: true }
    );
    onMounted(() => {
      getSystemDownloaders();
    });
    return (_ctx, _cache) => {
      const _component_v_icon = _resolveComponent("v-icon");
      const _component_v_card_title = _resolveComponent("v-card-title");
      const _component_v_select = _resolveComponent("v-select");
      const _component_v_card_text = _resolveComponent("v-card-text");
      const _component_v_card = _resolveComponent("v-card");
      const _component_v_text_field = _resolveComponent("v-text-field");
      const _component_v_btn = _resolveComponent("v-btn");
      const _component_v_card_actions = _resolveComponent("v-card-actions");
      const _component_v_col = _resolveComponent("v-col");
      const _component_v_chip = _resolveComponent("v-chip");
      const _component_v_list_item_title = _resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = _resolveComponent("v-list-item-subtitle");
      const _component_v_list_item = _resolveComponent("v-list-item");
      const _component_v_list = _resolveComponent("v-list");
      const _component_v_row = _resolveComponent("v-row");
      const _component_v_form = _resolveComponent("v-form");
      const _component_v_divider = _resolveComponent("v-divider");
      const _component_v_spacer = _resolveComponent("v-spacer");
      const _component_v_snackbar = _resolveComponent("v-snackbar");
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(_component_v_card, {
          flat: "",
          class: "rounded border"
        }, {
          default: _withCtx(() => [
            _createVNode(_component_v_card_title, { class: "text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
              default: _withCtx(() => [
                _createVNode(_component_v_icon, {
                  icon: "mdi-cog",
                  class: "mr-2",
                  color: "primary",
                  size: "small"
                }),
                _cache[13] || (_cache[13] = _createElementVNode("span", null, "种子清理工-配置", -1))
              ]),
              _: 1,
              __: [13]
            }),
            _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
              default: _withCtx(() => [
                _createVNode(_component_v_form, {
                  ref_key: "formRef",
                  ref: formRef,
                  onSubmit: _withModifiers(saveFullConfig, ["prevent"])
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_row, { "no-gutters": "" }, {
                      default: _withCtx(() => [
                        _createVNode(_component_v_col, {
                          cols: "6",
                          class: "pr-4"
                        }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_card, {
                              flat: "",
                              class: "rounded border config-card mb-4"
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_select, {
                                      modelValue: state.selectedSystemDownloaderNames,
                                      "onUpdate:modelValue": [
                                        _cache[0] || (_cache[0] = ($event) => state.selectedSystemDownloaderNames = $event),
                                        handleSystemDownloadersChange
                                      ],
                                      items: state.systemDownloader.map((d) => d.name),
                                      label: "系统下载器",
                                      variant: "outlined",
                                      density: "compact",
                                      class: "mb-3 text-caption",
                                      hint: "MoviePilot系统配置中的下载器,可多选",
                                      multiple: "",
                                      chips: "",
                                      clearable: ""
                                    }, null, 8, ["modelValue", "items"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            _createVNode(_component_v_card, {
                              flat: "",
                              class: "mt-4 rounded border config-card"
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_card_title, { class: "text-caption px-3 py-2 bg-primary-lighten-5" }, {
                                  default: _withCtx(() => _cache[14] || (_cache[14] = [
                                    _createTextVNode(" 自定义下载器 ")
                                  ])),
                                  _: 1,
                                  __: [14]
                                }),
                                _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.name,
                                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => state.customDownloader.name = $event),
                                      label: "名称",
                                      variant: "outlined",
                                      density: "compact",
                                      onBlur: _cache[2] || (_cache[2] = ($event) => validateName(state.customDownloader.name)),
                                      rules: [validateName],
                                      required: "",
                                      class: "mb-2 text-caption"
                                    }, null, 8, ["modelValue", "rules"]),
                                    _createVNode(_component_v_select, {
                                      modelValue: state.customDownloader.type,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.customDownloader.type = $event),
                                      items: ["qbittorrent", "transmission"],
                                      label: "类型",
                                      variant: "outlined",
                                      density: "compact",
                                      class: "mb-2 text-caption"
                                    }, null, 8, ["modelValue"]),
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.host,
                                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.customDownloader.host = $event),
                                      label: "主机地址 (不带协议)",
                                      variant: "outlined",
                                      density: "compact",
                                      class: "mb-2 text-caption"
                                    }, null, 8, ["modelValue"]),
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.port,
                                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.customDownloader.port = $event),
                                      modelModifiers: { number: true },
                                      label: "端口",
                                      type: "number",
                                      variant: "outlined",
                                      density: "compact",
                                      class: "mb-2 text-caption"
                                    }, null, 8, ["modelValue"]),
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.username,
                                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => state.customDownloader.username = $event),
                                      label: "用户名",
                                      variant: "outlined",
                                      density: "compact",
                                      class: "mb-2 text-caption"
                                    }, null, 8, ["modelValue"]),
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.password,
                                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => state.customDownloader.password = $event),
                                      label: "密码",
                                      variant: "outlined",
                                      density: "compact",
                                      type: "password",
                                      class: "mb-2 text-caption"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }),
                                _createVNode(_component_v_card_actions, { class: "px-3 pb-2 d-flex justify-end" }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_btn, {
                                      color: "primary",
                                      "prepend-icon": "mdi-plus-circle",
                                      onClick: addCustomDownloader,
                                      variant: "plain"
                                    }, {
                                      default: _withCtx(() => _cache[15] || (_cache[15] = [
                                        _createTextVNode("添加到下载器列表")
                                      ])),
                                      _: 1,
                                      __: [15]
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
                        _createVNode(_component_v_col, { cols: "6" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_card, {
                              flat: "",
                              class: "rounded border config-card"
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_card_title, { class: "text-caption px-3 py-2 bg-primary-lighten-5" }, {
                                  default: _withCtx(() => _cache[16] || (_cache[16] = [
                                    _createTextVNode(" 下载器列表 ")
                                  ])),
                                  _: 1,
                                  __: [16]
                                }),
                                _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_list, {
                                      dense: "",
                                      lines: "one"
                                    }, {
                                      default: _withCtx(() => [
                                        (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(allDownloaders.value, (item, index) => {
                                          return _openBlock(), _createBlock(_component_v_list_item, { key: index }, {
                                            append: _withCtx(() => [
                                              item._type === "custom" ? (_openBlock(), _createBlock(_component_v_btn, {
                                                key: 0,
                                                color: "info",
                                                icon: "mdi-pencil",
                                                size: "x-small",
                                                onClick: ($event) => editCustom(item)
                                              }, null, 8, ["onClick"])) : _createCommentVNode("", true),
                                              _createVNode(_component_v_btn, {
                                                class: "ml-2",
                                                icon: "mdi-delete",
                                                size: "x-small",
                                                onClick: ($event) => deleteDownloader(index, item._type)
                                              }, null, 8, ["onClick"])
                                            ]),
                                            default: _withCtx(() => [
                                              _createVNode(_component_v_list_item_title, null, {
                                                default: _withCtx(() => [
                                                  _createVNode(_component_v_chip, {
                                                    color: item._type == "system" ? "primary" : "info",
                                                    size: "small",
                                                    "text-color": "white"
                                                  }, {
                                                    default: _withCtx(() => [
                                                      _createTextVNode(_toDisplayString(item._type == "system" ? "系统" : "自定义"), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["color"]),
                                                  _createTextVNode(" " + _toDisplayString(item.name) + " (" + _toDisplayString(item.type) + ")", 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              _createVNode(_component_v_list_item_subtitle, null, {
                                                default: _withCtx(() => [
                                                  _createTextVNode(_toDisplayString(item.host) + ":" + _toDisplayString(item.port), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
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
                              class: "rounded border config-card mt-2"
                            }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_card_title, { class: "text-caption px-3 py-2 bg-primary-lighten-5" }, {
                                  default: _withCtx(() => _cache[17] || (_cache[17] = [
                                    _createTextVNode(" 路径设置 ")
                                  ])),
                                  _: 1,
                                  __: [17]
                                }),
                                _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_text_field, {
                                      modelValue: editableConfig.exclude_paths,
                                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => editableConfig.exclude_paths = $event),
                                      label: "排除的目录",
                                      hint: "用于查找缺失种子的源文件,多个用';'隔开,一般为软/硬链接目标路径",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": "mdi-cancel",
                                      variant: "outlined",
                                      density: "compact",
                                      class: "mb-3 text-caption"
                                    }, null, 8, ["modelValue"]),
                                    _createVNode(_component_v_text_field, {
                                      modelValue: editableConfig.extra_dir_paths,
                                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => editableConfig.extra_dir_paths = $event),
                                      label: "额外的目录",
                                      hint: "用于查找缺失种子的源文件,多个用';'隔开,其不是现有下载器的保存目录",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": "mdi-folder-open",
                                      variant: "outlined",
                                      density: "compact",
                                      class: "text-caption"
                                    }, null, 8, ["modelValue"])
                                  ]),
                                  _: 1
                                }),
                                _createVNode(_component_v_card_text, { class: "d-flex align-center px-3 py-1" }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_icon, {
                                      icon: "mdi-information",
                                      color: "error",
                                      class: "mr-2",
                                      size: "small"
                                    }),
                                    _cache[18] || (_cache[18] = _createElementVNode("span", { class: "text-caption" }, " 如果在docker容器中，请确保下载器中的保存(下载/源文件)路径存在于MoviePilot容器中！ ", -1))
                                  ]),
                                  _: 1,
                                  __: [18]
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
                }, 512)
              ]),
              _: 1
            }),
            _createVNode(_component_v_divider),
            _createVNode(_component_v_card_actions, { class: "px-2 py-1 pr-10" }, {
              default: _withCtx(() => [
                _createVNode(_component_v_spacer),
                _createVNode(_component_v_btn, {
                  color: "info",
                  onClick: _cache[10] || (_cache[10] = ($event) => emit("switch", "page")),
                  "prepend-icon": "mdi-view-dashboard",
                  disabled: state.saving,
                  variant: "text"
                }, {
                  default: _withCtx(() => _cache[19] || (_cache[19] = [
                    _createTextVNode(" 详情页 ")
                  ])),
                  _: 1,
                  __: [19]
                }, 8, ["disabled"]),
                _createVNode(_component_v_divider, { vertical: "" }),
                _createVNode(_component_v_btn, {
                  color: "primary",
                  disabled: state.saving,
                  onClick: saveFullConfig,
                  loading: state.saving,
                  "prepend-icon": "mdi-content-save",
                  variant: "text",
                  size: "small"
                }, {
                  default: _withCtx(() => _cache[20] || (_cache[20] = [
                    _createTextVNode(" 保存配置 ")
                  ])),
                  _: 1,
                  __: [20]
                }, 8, ["disabled", "loading"]),
                _createVNode(_component_v_divider, { vertical: "" }),
                _createVNode(_component_v_btn, {
                  color: "grey",
                  onClick: _cache[11] || (_cache[11] = ($event) => emit("close")),
                  "prepend-icon": "mdi-close",
                  disabled: state.saving,
                  variant: "text",
                  size: "small"
                }, {
                  default: _withCtx(() => _cache[21] || (_cache[21] = [
                    _createTextVNode("关闭")
                  ])),
                  _: 1,
                  __: [21]
                }, 8, ["disabled"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _createVNode(_component_v_snackbar, {
          modelValue: state.snackbar.show,
          "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => state.snackbar.show = $event),
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

const ConfigComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fac910a7"]]);

export { ConfigComponent as default };
