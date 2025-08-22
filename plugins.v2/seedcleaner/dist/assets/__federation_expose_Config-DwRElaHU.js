import { importShared } from './__federation_fn_import-JrT3xvdd.js';
import { P as PLUGIN_ID } from './definedFunctions-C0LjGDE_.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {defineComponent:_defineComponent} = await importShared('vue');

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,unref:_unref,openBlock:_openBlock,createBlock:_createBlock,createCommentVNode:_createCommentVNode,Fragment:_Fragment,createElementBlock:_createElementBlock,withCtx:_withCtx,createTextVNode:_createTextVNode,renderList:_renderList,normalizeStyle:_normalizeStyle,toDisplayString:_toDisplayString,withModifiers:_withModifiers} = await importShared('vue');

const _hoisted_1 = { class: "plugin-config" };
const _hoisted_2 = { class: "header-actions" };
const _hoisted_3 = { class: "downloader-list" };
const _hoisted_4 = { class: "text-subtitle-2" };
const _hoisted_5 = { class: "d-flex align-center" };
const {ref,reactive,onMounted,computed,watch} = await importShared('vue');
const {useDisplay} = await importShared('vuetify');

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
        name: "自定义下载器1",
        type: "qbittorrent",
        host: "http://127.0.0.1",
        port: 443,
        username: "admin",
        password: "adminadmin"
      }
    });
    const formRef = ref();
    const { smAndDown } = useDisplay();
    const showPassword = ref(false);
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
    function getDownloaderIcon(item) {
      const type = (item?.type || "").toString().toLowerCase();
      if (type.includes("qbittorrent") || type === "qbittorrent" || type === "qbit") {
        return "mdi-download";
      }
      if (type.includes("transmission") || type === "transmission") {
        return "mdi-download-network";
      }
      if (item?._type === "system" && !type) {
        return "mdi-download-network";
      }
      return "mdi-download";
    }
    function getDownloaderColor(item) {
      const type = (item?.type || "").toString().toLowerCase();
      if (type.includes("qbittorrent") || type === "qbittorrent" || type === "qbit") {
        return "#64B5F6";
      }
      if (type.includes("transmission") || type === "transmission") {
        return "#E57373";
      }
      return item?._type === "system" ? "#1976D2" : "#0288D1";
    }
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
      if (!newDl.name || !newDl.host || !newDl.port) {
        alert("请填写所有必填字段");
        return;
      }
      const host = String(newDl.host).trim();
      if (!(host.startsWith("http://") || host.startsWith("https://"))) {
        alert("请填写正确的下载器地址: http:// 或 https:// 开头");
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
        console.log("删除自定义下载器:", index, type);
        let _index = index - editableConfig.downloaders.system.length;
        editableConfig.downloaders.custom.splice(_index, 1);
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
      const _component_v_spacer = _resolveComponent("v-spacer");
      const _component_v_btn = _resolveComponent("v-btn");
      const _component_v_card_title = _resolveComponent("v-card-title");
      const _component_v_select = _resolveComponent("v-select");
      const _component_v_card_text = _resolveComponent("v-card-text");
      const _component_v_card = _resolveComponent("v-card");
      const _component_v_text_field = _resolveComponent("v-text-field");
      const _component_v_col = _resolveComponent("v-col");
      const _component_v_row = _resolveComponent("v-row");
      const _component_v_card_actions = _resolveComponent("v-card-actions");
      const _component_v_chip = _resolveComponent("v-chip");
      const _component_v_list_item_title = _resolveComponent("v-list-item-title");
      const _component_v_list_item_subtitle = _resolveComponent("v-list-item-subtitle");
      const _component_v_list_item = _resolveComponent("v-list-item");
      const _component_v_list = _resolveComponent("v-list");
      const _component_v_form = _resolveComponent("v-form");
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
                _cache[17] || (_cache[17] = _createElementVNode("span", null, "种子清理工配置", -1)),
                _createVNode(_component_v_spacer),
                _createElementVNode("div", _hoisted_2, [
                  _createVNode(_component_v_btn, {
                    color: "info",
                    onClick: _cache[0] || (_cache[0] = ($event) => emit("switch", "page")),
                    disabled: state.saving,
                    variant: "text",
                    size: "small",
                    density: "compact",
                    class: "header-action-btn"
                  }, {
                    default: _withCtx(() => [
                      _unref(smAndDown) ? (_openBlock(), _createBlock(_component_v_icon, {
                        key: 0,
                        icon: "mdi-view-dashboard",
                        size: "18"
                      })) : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                        _createVNode(_component_v_icon, {
                          icon: "mdi-view-dashboard",
                          size: "18",
                          class: "mr-1"
                        }),
                        _cache[14] || (_cache[14] = _createElementVNode("span", null, "详情页", -1))
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  _createVNode(_component_v_btn, {
                    color: "success",
                    disabled: state.saving,
                    onClick: saveFullConfig,
                    loading: state.saving,
                    variant: "text",
                    size: "small",
                    density: "compact",
                    class: "header-action-btn"
                  }, {
                    default: _withCtx(() => [
                      _unref(smAndDown) ? (_openBlock(), _createBlock(_component_v_icon, {
                        key: 0,
                        icon: "mdi-content-save",
                        size: "18"
                      })) : (_openBlock(), _createElementBlock(_Fragment, { key: 1 }, [
                        _createVNode(_component_v_icon, {
                          icon: "mdi-content-save",
                          size: "18",
                          class: "mr-1"
                        }),
                        _cache[15] || (_cache[15] = _createElementVNode("span", null, "保存配置", -1))
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"]),
                  _createVNode(_component_v_btn, {
                    color: "grey",
                    onClick: _cache[1] || (_cache[1] = ($event) => emit("close")),
                    disabled: state.saving,
                    variant: "text",
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
                        _cache[16] || (_cache[16] = _createElementVNode("span", null, "关闭", -1))
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ])
              ]),
              _: 1,
              __: [17]
            }),
            _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
              default: _withCtx(() => [
                _createVNode(_component_v_form, {
                  ref_key: "formRef",
                  ref: formRef,
                  onSubmit: _withModifiers(saveFullConfig, ["prevent"])
                }, {
                  default: _withCtx(() => [
                    _createVNode(_component_v_card, {
                      flat: "",
                      class: "rounded mb-3 border config-card"
                    }, {
                      default: _withCtx(() => [
                        _createVNode(_component_v_card_title, { class: "text-caption d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_icon, {
                              icon: "mdi-download",
                              class: "mr-2",
                              color: "primary",
                              size: "small"
                            }),
                            _cache[18] || (_cache[18] = _createElementVNode("span", null, "选择系统下载器", -1))
                          ]),
                          _: 1,
                          __: [18]
                        }),
                        _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_select, {
                              modelValue: state.selectedSystemDownloaderNames,
                              "onUpdate:modelValue": [
                                _cache[2] || (_cache[2] = ($event) => state.selectedSystemDownloaderNames = $event),
                                handleSystemDownloadersChange
                              ],
                              items: state.systemDownloader.map((d) => d.name),
                              label: "系统下载器",
                              variant: "outlined",
                              density: "compact",
                              hint: "选择MoviePilot中已配置的下载器，可多选。",
                              "persistent-hint": "",
                              "prepend-inner-icon": "mdi-download-network",
                              multiple: "",
                              chips: "",
                              clearable: "",
                              disabled: state.saving
                            }, null, 8, ["modelValue", "items", "disabled"])
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
                        _createVNode(_component_v_card_title, { class: "text-caption d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_icon, {
                              icon: "mdi-plus-circle",
                              class: "mr-2",
                              color: "primary",
                              size: "small"
                            }),
                            _cache[19] || (_cache[19] = _createElementVNode("span", null, "自定义下载器", -1))
                          ]),
                          _: 1,
                          __: [19]
                        }),
                        _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_row, null, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.name,
                                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.customDownloader.name = $event),
                                      label: "名称",
                                      variant: "outlined",
                                      density: "compact",
                                      hint: "自定义下载器名称，不能与系统下载器名称重复。",
                                      "persistent-hint": "",
                                      onBlur: _cache[4] || (_cache[4] = ($event) => validateName(state.customDownloader.name)),
                                      rules: [validateName],
                                      required: "",
                                      "prepend-inner-icon": "mdi-tag",
                                      disabled: state.saving
                                    }, null, 8, ["modelValue", "rules", "disabled"])
                                  ]),
                                  _: 1
                                }),
                                _createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_select, {
                                      modelValue: state.customDownloader.type,
                                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => state.customDownloader.type = $event),
                                      items: ["qbittorrent", "transmission"],
                                      label: "下载器类型",
                                      variant: "outlined",
                                      density: "compact",
                                      hint: "选择下载器类型，目前支持qbittorrent和transmission。",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": "mdi-download",
                                      disabled: state.saving
                                    }, null, 8, ["modelValue", "disabled"])
                                  ]),
                                  _: 1
                                }),
                                _createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.host,
                                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => state.customDownloader.host = $event),
                                      label: "下载器地址",
                                      hint: "下载器地址，带http://或https://",
                                      "persistent-hint": "",
                                      variant: "outlined",
                                      density: "compact",
                                      "prepend-inner-icon": "mdi-web",
                                      disabled: state.saving
                                    }, null, 8, ["modelValue", "disabled"])
                                  ]),
                                  _: 1
                                }),
                                _createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.port,
                                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => state.customDownloader.port = $event),
                                      modelModifiers: { number: true },
                                      label: "端口",
                                      type: "number",
                                      variant: "outlined",
                                      density: "compact",
                                      hint: "下载器访问端口，默认443。",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": "mdi-ethernet",
                                      disabled: state.saving
                                    }, null, 8, ["modelValue", "disabled"])
                                  ]),
                                  _: 1
                                }),
                                _createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.username,
                                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => state.customDownloader.username = $event),
                                      label: "用户名",
                                      variant: "outlined",
                                      density: "compact",
                                      hint: "下载器访问用户名。",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": "mdi-account",
                                      disabled: state.saving
                                    }, null, 8, ["modelValue", "disabled"])
                                  ]),
                                  _: 1
                                }),
                                _createVNode(_component_v_col, {
                                  cols: "12",
                                  md: "6"
                                }, {
                                  default: _withCtx(() => [
                                    _createVNode(_component_v_text_field, {
                                      modelValue: state.customDownloader.password,
                                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => state.customDownloader.password = $event),
                                      label: "密码",
                                      variant: "outlined",
                                      density: "compact",
                                      type: showPassword.value ? "text" : "password",
                                      hint: "下载器访问密码。",
                                      "persistent-hint": "",
                                      "prepend-inner-icon": "mdi-lock",
                                      disabled: state.saving
                                    }, {
                                      "append-inner": _withCtx(() => [
                                        _createVNode(_component_v_icon, {
                                          icon: showPassword.value ? "mdi-eye-off" : "mdi-eye",
                                          size: 16,
                                          class: "clickable-icon",
                                          onClick: _cache[9] || (_cache[9] = ($event) => showPassword.value = !showPassword.value)
                                        }, null, 8, ["icon"])
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "type", "disabled"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            _createVNode(_component_v_card_actions, { class: "px-0 pt-2 d-flex justify-end" }, {
                              default: _withCtx(() => [
                                _createVNode(_component_v_btn, {
                                  color: "primary",
                                  "prepend-icon": "mdi-plus-circle",
                                  onClick: addCustomDownloader,
                                  variant: "tonal",
                                  size: "small",
                                  disabled: state.saving
                                }, {
                                  default: _withCtx(() => _cache[20] || (_cache[20] = [
                                    _createTextVNode(" 添加到下载器列表 ")
                                  ])),
                                  _: 1,
                                  __: [20]
                                }, 8, ["disabled"])
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
                        _createVNode(_component_v_card_title, { class: "text-caption d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_icon, {
                              icon: "mdi-format-list-bulleted",
                              class: "mr-2",
                              color: "primary",
                              size: "small"
                            }),
                            _cache[21] || (_cache[21] = _createElementVNode("span", null, "下载器列表", -1))
                          ]),
                          _: 1,
                          __: [21]
                        }),
                        _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createElementVNode("div", _hoisted_3, [
                              _createVNode(_component_v_list, {
                                lines: "two",
                                density: "compact"
                              }, {
                                default: _withCtx(() => [
                                  (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(allDownloaders.value, (item, index) => {
                                    return _openBlock(), _createBlock(_component_v_list_item, {
                                      key: index,
                                      class: "mb-1"
                                    }, {
                                      prepend: _withCtx(() => [
                                        _createVNode(_component_v_icon, {
                                          icon: getDownloaderIcon(item),
                                          style: _normalizeStyle({ color: getDownloaderColor(item) }),
                                          size: "small"
                                        }, null, 8, ["icon", "style"])
                                      ]),
                                      append: _withCtx(() => [
                                        _createElementVNode("div", _hoisted_5, [
                                          item._type === "custom" ? (_openBlock(), _createBlock(_component_v_btn, {
                                            key: 0,
                                            color: "info",
                                            icon: "mdi-pencil",
                                            size: "x-small",
                                            variant: "text",
                                            onClick: ($event) => editCustom(item),
                                            disabled: state.saving
                                          }, null, 8, ["onClick", "disabled"])) : _createCommentVNode("", true),
                                          _createVNode(_component_v_btn, {
                                            color: "error",
                                            icon: "mdi-delete",
                                            size: "x-small",
                                            variant: "text",
                                            onClick: ($event) => deleteDownloader(index, item._type),
                                            disabled: state.saving
                                          }, null, 8, ["onClick", "disabled"])
                                        ])
                                      ]),
                                      default: _withCtx(() => [
                                        _createVNode(_component_v_list_item_title, { class: "d-flex align-center" }, {
                                          default: _withCtx(() => [
                                            _createVNode(_component_v_chip, {
                                              color: item._type === "system" ? "primary" : "info",
                                              size: "x-small",
                                              "text-color": "white",
                                              class: "mr-2"
                                            }, {
                                              default: _withCtx(() => [
                                                _createTextVNode(_toDisplayString(item._type === "system" ? "系统" : "自定义"), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["color"]),
                                            _createElementVNode("span", _hoisted_4, _toDisplayString(item.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        _createVNode(_component_v_list_item_subtitle, { class: "text-caption" }, {
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
                            ])
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
                        _createVNode(_component_v_card_title, { class: "text-caption d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_icon, {
                              icon: "mdi-folder-cog",
                              class: "mr-2",
                              color: "primary",
                              size: "small"
                            }),
                            _cache[22] || (_cache[22] = _createElementVNode("span", null, "路径设置", -1))
                          ]),
                          _: 1,
                          __: [22]
                        }),
                        _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_text_field, {
                              modelValue: editableConfig.exclude_paths,
                              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => editableConfig.exclude_paths = $event),
                              label: "排除的目录",
                              hint: "用于查找缺失种子的源文件，多个用';'隔开，一般为软/硬链接目标路径",
                              "persistent-hint": "",
                              "prepend-inner-icon": "mdi-cancel",
                              variant: "outlined",
                              density: "compact",
                              disabled: state.saving,
                              class: "mb-3"
                            }, null, 8, ["modelValue", "disabled"]),
                            _createVNode(_component_v_text_field, {
                              modelValue: editableConfig.extra_dir_paths,
                              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => editableConfig.extra_dir_paths = $event),
                              label: "额外的目录",
                              hint: "用于查找缺失种子的源文件，多个用';'隔开，其不是现有下载器的保存目录",
                              "persistent-hint": "",
                              "prepend-inner-icon": "mdi-folder-open",
                              variant: "outlined",
                              density: "compact",
                              disabled: state.saving
                            }, null, 8, ["modelValue", "disabled"])
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
                        _createVNode(_component_v_card_text, { class: "d-flex align-center px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_icon, {
                              icon: "mdi-information",
                              color: "warning",
                              class: "mr-2",
                              size: "small"
                            }),
                            _cache[23] || (_cache[23] = _createElementVNode("span", { class: "text-caption" }, " 如果在docker容器中，请确保下载器中的保存(下载/源文件)路径存在于MoviePilot容器中！ ", -1))
                          ]),
                          _: 1,
                          __: [23]
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 512)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        _createVNode(_component_v_snackbar, {
          modelValue: state.snackbar.show,
          "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => state.snackbar.show = $event),
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

const ConfigComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-747c0df2"]]);

export { ConfigComponent as default };
