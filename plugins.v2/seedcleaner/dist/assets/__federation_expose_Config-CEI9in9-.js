import { importShared } from './__federation_fn_import-JrT3xvdd.js';
import { P as PLUGIN_ID } from './definedFunctions-DC-6eV6J.js';
import { p as propsFactory, j as getCurrentInstance, u as useProxiedModel, l as consoleWarn, g as genericComponent } from './proxiedModel-BTFJLt0u.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

// Utilities
// Composables
const makeComponentProps = propsFactory({
  class: [String, Array, Object],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, 'component');

// Utilities
function useRender(render) {
  const vm = getCurrentInstance('useRender');
  vm.render = render;
}

const {computed,inject,markRaw,provide,ref: ref$2,shallowRef,toRef,watch} = await importShared('vue');
const FormKey = Symbol.for('vuetify:form');
const makeFormProps = propsFactory({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: 'input'
  }
}, 'form');
function createForm(props) {
  const model = useProxiedModel(props, 'modelValue');
  const isDisabled = toRef(() => props.disabled);
  const isReadonly = toRef(() => props.readonly);
  const isValidating = shallowRef(false);
  const items = ref$2([]);
  const errors = ref$2([]);
  async function validate() {
    const results = [];
    let valid = true;
    errors.value = [];
    isValidating.value = true;
    for (const item of items.value) {
      const itemErrorMessages = await item.validate();
      if (itemErrorMessages.length > 0) {
        valid = false;
        results.push({
          id: item.id,
          errorMessages: itemErrorMessages
        });
      }
      if (!valid && props.fastFail) break;
    }
    errors.value = results;
    isValidating.value = false;
    return {
      valid,
      errors: errors.value
    };
  }
  function reset() {
    items.value.forEach(item => item.reset());
  }
  function resetValidation() {
    items.value.forEach(item => item.resetValidation());
  }
  watch(items, () => {
    let valid = 0;
    let invalid = 0;
    const results = [];
    for (const item of items.value) {
      if (item.isValid === false) {
        invalid++;
        results.push({
          id: item.id,
          errorMessages: item.errorMessages
        });
      } else if (item.isValid === true) valid++;
    }
    errors.value = results;
    model.value = invalid > 0 ? false : valid === items.value.length ? true : null;
  }, {
    deep: true,
    flush: 'post'
  });
  provide(FormKey, {
    register: _ref => {
      let {
        id,
        vm,
        validate,
        reset,
        resetValidation
      } = _ref;
      if (items.value.some(item => item.id === id)) {
        consoleWarn(`Duplicate input name "${id}"`);
      }
      items.value.push({
        id,
        validate,
        reset,
        resetValidation,
        vm: markRaw(vm),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: id => {
      items.value = items.value.filter(item => {
        return item.id !== id;
      });
    },
    update: (id, isValid, errorMessages) => {
      const found = items.value.find(item => item.id === id);
      if (!found) return;
      found.isValid = isValid;
      found.errorMessages = errorMessages;
    },
    isDisabled,
    isReadonly,
    isValidating,
    isValid: model,
    items,
    validateOn: toRef(() => props.validateOn)
  });
  return {
    errors,
    isDisabled,
    isReadonly,
    isValidating,
    isValid: model,
    items,
    validate,
    reset,
    resetValidation
  };
}
function useForm(props) {
  const form = inject(FormKey, null);
  return {
    ...form,
    isReadonly: computed(() => !!(props?.readonly ?? form?.isReadonly.value)),
    isDisabled: computed(() => !!(props?.disabled ?? form?.isDisabled.value))
  };
}

// Types

const Refs = Symbol('Forwarded refs');

/** Omit properties starting with P */

/** Omit keyof $props from T */

function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor) return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return undefined;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target, key) {
      if (Reflect.has(target, key)) {
        return Reflect.get(target, key);
      }

      // Skip internal properties
      if (typeof key === 'symbol' || key.startsWith('$') || key.startsWith('__')) return;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          const val = Reflect.get(ref.value, key);
          return typeof val === 'function' ? val.bind(ref.value) : val;
        }
      }
    },
    has(target, key) {
      if (Reflect.has(target, key)) {
        return true;
      }

      // Skip internal properties
      if (typeof key === 'symbol' || key.startsWith('$') || key.startsWith('__')) return false;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          return true;
        }
      }
      return false;
    },
    set(target, key, value) {
      if (Reflect.has(target, key)) {
        return Reflect.set(target, key, value);
      }

      // Skip internal properties
      if (typeof key === 'symbol' || key.startsWith('$') || key.startsWith('__')) return false;
      for (const ref of refs) {
        if (ref.value && Reflect.has(ref.value, key)) {
          return Reflect.set(ref.value, key, value);
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target, key) {
      const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
      if (descriptor) return descriptor;

      // Skip internal properties
      if (typeof key === 'symbol' || key.startsWith('$') || key.startsWith('__')) return;

      // Check each ref's own properties
      for (const ref of refs) {
        if (!ref.value) continue;
        const descriptor = getDescriptor(ref.value, key) ?? ('_' in ref.value ? getDescriptor(ref.value._?.setupState, key) : undefined);
        if (descriptor) return descriptor;
      }

      // Recursive search up each ref's prototype
      for (const ref of refs) {
        const childRefs = ref.value && ref.value[Refs];
        if (!childRefs) continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref = queue.shift();
          const descriptor = getDescriptor(ref.value, key);
          if (descriptor) return descriptor;
          const childRefs = ref.value && ref.value[Refs];
          if (childRefs) queue.push(...childRefs);
        }
      }
      return undefined;
    }
  });
}

const {normalizeClass:_normalizeClass,normalizeStyle:_normalizeStyle,createElementVNode:_createElementVNode$1} = await importShared('vue');
const {ref: ref$1} = await importShared('vue');
const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, 'VForm');
const VForm = genericComponent()({
  name: 'VForm',
  props: makeVFormProps(),
  emits: {
    'update:modelValue': val => true,
    submit: e => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref$1();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit('submit', e);
      if (!e.defaultPrevented) {
        ready.then(_ref2 => {
          let {
            valid
          } = _ref2;
          if (valid) {
            formRef.value?.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => _createElementVNode$1("form", {
      "ref": formRef,
      "class": _normalizeClass(['v-form', props.class]),
      "style": _normalizeStyle(props.style),
      "novalidate": true,
      "onReset": onReset,
      "onSubmit": onSubmit
    }, [slots.default?.(form)]));
    return forwardRefs(form, formRef);
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {resolveComponent:_resolveComponent,createVNode:_createVNode,createElementVNode:_createElementVNode,withCtx:_withCtx,unref:_unref,withModifiers:_withModifiers,createTextVNode:_createTextVNode,toDisplayString:_toDisplayString,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

const _hoisted_1 = { class: "plugin-config" };
const {ref,reactive,onMounted} = await importShared('vue');
const _sfc_main = /* @__PURE__ */ _defineComponent({
  __name: "Config",
  props: {
    api: {
      type: [Object, Function],
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
      }
    });
    const formRef = ref();
    const editableConfig = reactive({
      enable: true,
      transmission_paths: "",
      qbittorrent_paths: "",
      exclude_paths: ""
    });
    const splitPaths = (pathStr) => {
      return (pathStr || "").split(";").map((p) => p.trim()).filter(Boolean);
    };
    const validatePathsNotEmpty = (value) => {
      const tPaths = splitPaths(editableConfig.transmission_paths);
      const qPaths = splitPaths(editableConfig.qbittorrent_paths);
      if (tPaths.length === 0 && qPaths.length === 0) {
        return "Transmission 和 qBittorrent 路径不能同时为空";
      }
      return true;
    };
    const saveFullConfig = async () => {
      console.log("保存配置...");
      if (!formRef) return;
      const validation = await formRef.value.validate();
      if (!validation.valid) {
        state.snackbar.color = "error";
        state.snackbar.message = "表单校验失败，请检查输入内容";
        state.snackbar.show = true;
        return;
      }
      state.saving = true;
      console.log("保存配置111...");
      try {
        let res = await props.api.post(`plugin/${PLUGIN_ID}/config`, editableConfig);
        console.log("保存配置API响应:", res);
        state.snackbar.color = "success";
        state.snackbar.message = "保存配置成功";
        state.snackbar.show = true;
      } catch (err) {
        state.snackbar.color = "error";
        state.snackbar.message = err.message || "保存配置失败，请检查网络或查看日志";
        state.snackbar.show = true;
      } finally {
        state.saving = false;
      }
    };
    onMounted(() => {
      if (props.initialConfig && typeof props.initialConfig === "object") {
        Object.keys(editableConfig).forEach((key) => {
          if (props.initialConfig.hasOwnProperty(key)) {
            editableConfig[key] = JSON.parse(JSON.stringify(props.initialConfig[key]));
          }
        });
      }
    });
    return (_ctx, _cache) => {
      const _component_v_icon = _resolveComponent("v-icon");
      const _component_v_card_title = _resolveComponent("v-card-title");
      const _component_v_text_field = _resolveComponent("v-text-field");
      const _component_v_card_text = _resolveComponent("v-card-text");
      const _component_v_card = _resolveComponent("v-card");
      const _component_v_divider = _resolveComponent("v-divider");
      const _component_v_spacer = _resolveComponent("v-spacer");
      const _component_v_btn = _resolveComponent("v-btn");
      const _component_v_card_actions = _resolveComponent("v-card-actions");
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
                _cache[6] || (_cache[6] = _createElementVNode("span", null, "种子清理工-配置", -1))
              ]),
              _: 1,
              __: [6]
            }),
            _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
              default: _withCtx(() => [
                _createVNode(_unref(VForm), {
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
                              icon: "mdi-folder-download",
                              class: "mr-2",
                              color: "primary",
                              size: "small"
                            }),
                            _cache[7] || (_cache[7] = _createElementVNode("span", null, "存储路径", -1))
                          ]),
                          _: 1,
                          __: [7]
                        }),
                        _createVNode(_component_v_card_text, { class: "px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_text_field, {
                              modelValue: editableConfig.transmission_paths,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editableConfig.transmission_paths = $event),
                              label: "Transmission 种子路径",
                              variant: "outlined",
                              hint: "多个路径请用分号 ; 隔开",
                              "persistent-hint": "",
                              rules: [validatePathsNotEmpty],
                              "prepend-inner-icon": "mdi-download",
                              density: "compact",
                              class: "mb-3 text-caption"
                            }, null, 8, ["modelValue", "rules"]),
                            _createVNode(_component_v_text_field, {
                              modelValue: editableConfig.qbittorrent_paths,
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => editableConfig.qbittorrent_paths = $event),
                              label: "QBittorrent 种子路径",
                              variant: "outlined",
                              hint: "多个路径请用分号 ; 隔开",
                              "persistent-hint": "",
                              rules: [validatePathsNotEmpty],
                              "prepend-inner-icon": "mdi-download-circle",
                              density: "compact",
                              class: "mb-3 text-caption"
                            }, null, 8, ["modelValue", "rules"]),
                            _createVNode(_component_v_text_field, {
                              modelValue: editableConfig.exclude_paths,
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => editableConfig.exclude_paths = $event),
                              label: "排除路径",
                              variant: "outlined",
                              hint: "多个路径请用分号 ; 隔开",
                              "persistent-hint": "",
                              "prepend-inner-icon": "mdi-cancel",
                              density: "compact",
                              class: "mb-3 text-caption"
                            }, null, 8, ["modelValue"])
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
                              color: "info",
                              class: "mr-2",
                              size: "small"
                            }),
                            _cache[8] || (_cache[8] = _createElementVNode("span", { class: "text-caption" }, ' 此插件用于清理 Transmission 和 qBittorrent 的种子文件和源文件， 可配置多个路径，以分号 ";" 分隔，支持排除特定路径。 ', -1))
                          ]),
                          _: 1,
                          __: [8]
                        }),
                        _createVNode(_component_v_card_text, { class: "d-flex align-center px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_icon, {
                              icon: "mdi-information",
                              color: "warning",
                              class: "mr-2",
                              size: "small"
                            }),
                            _cache[9] || (_cache[9] = _createElementVNode("span", { class: "text-caption" }, " 有多个下载器务必填上所种子路径，否则将影响种子和源文件的扫描和清理。 ", -1))
                          ]),
                          _: 1,
                          __: [9]
                        }),
                        _createVNode(_component_v_card_text, { class: "d-flex align-center px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_icon, {
                              icon: "mdi-information",
                              color: "success",
                              class: "mr-2",
                              size: "small"
                            }),
                            _cache[10] || (_cache[10] = _createElementVNode("span", { class: "text-caption" }, " 扫描速度取决于种子数量或者是保存路径的源文件数量 ", -1))
                          ]),
                          _: 1,
                          __: [10]
                        }),
                        _createVNode(_component_v_card_text, { class: "d-flex align-center px-3 py-2" }, {
                          default: _withCtx(() => [
                            _createVNode(_component_v_icon, {
                              icon: "mdi-information",
                              color: "error",
                              class: "mr-2",
                              size: "small"
                            }),
                            _cache[11] || (_cache[11] = _createElementVNode("span", { class: "text-caption" }, " 如果使用docker，使用之前请确保下载器中的保存路径(源文件)跟下载器中的一致！ ", -1))
                          ]),
                          _: 1,
                          __: [11]
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
                  onClick: _cache[3] || (_cache[3] = ($event) => emit("switch", "page")),
                  "prepend-icon": "mdi-view-dashboard",
                  disabled: state.saving,
                  variant: "text"
                }, {
                  default: _withCtx(() => _cache[12] || (_cache[12] = [
                    _createTextVNode(" 详情页 ")
                  ])),
                  _: 1,
                  __: [12]
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
                  default: _withCtx(() => _cache[13] || (_cache[13] = [
                    _createTextVNode(" 保存配置 ")
                  ])),
                  _: 1,
                  __: [13]
                }, 8, ["disabled", "loading"]),
                _createVNode(_component_v_divider, { vertical: "" }),
                _createVNode(_component_v_btn, {
                  color: "grey",
                  onClick: _cache[4] || (_cache[4] = ($event) => emit("close")),
                  "prepend-icon": "mdi-close",
                  disabled: state.saving,
                  variant: "text",
                  size: "small"
                }, {
                  default: _withCtx(() => _cache[14] || (_cache[14] = [
                    _createTextVNode("关闭 ")
                  ])),
                  _: 1,
                  __: [14]
                }, 8, ["disabled"])
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

const ConfigComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d8b31a7f"]]);

export { VForm as V, useForm as a, ConfigComponent as default, forwardRefs as f, makeComponentProps as m, useRender as u };
