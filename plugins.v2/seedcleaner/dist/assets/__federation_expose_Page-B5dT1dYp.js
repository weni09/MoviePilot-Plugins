import { importShared } from './__federation_fn_import-JrT3xvdd.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';
import { a7 as useFocus, a as useRender, a8 as makeVInputProps, bh as makeVCheckboxBtnProps, aa as VInput, R as VCheckboxBtn, aH as makeVSelectionControlProps, aI as VSelectionControl, bi as makeSelectionControlGroupProps, ab as VLabel, ba as VSelectionControlGroup, aO as VCard, aT as VCardTitle, z as VIcon, aS as VCardText, b5 as VRow, aV as VCol, L as VTextField, A as makeVariantProps, m as makeTagProps, an as makeSizeProps, i as makeRoundedProps, j as makeElevationProps, D as makeDensityProps, c as makeComponentProps, k as makeBorderProps, q as VBtn, t as useDensity, T as VChip, am as VSpacer, af as VSelect, bj as formatBytes, Z as useScopeId, H as forwardRefs, _ as makeVOverlayProps, a0 as VOverlay, bk as ONLY_TORRENT, r as VSnackbar, bl as ALL, x as useTextColor, p as makeVBtnProps, bm as animate, bn as standardEasing, W as useGroup, aq as useGroupItem, o as useSsrBoot, ao as useLazy, ap as makeLazyProps, ar as makeGroupItemProps, U as MaybeTransition, e as useBackgroundColor, bo as makeVSlideGroupProps, bb as VSlideGroup, ai as VDivider, aP as VCardActions, P as PLUGIN_ID } from './VSnackbar-BBT0ycYQ.js';
import { g as genericComponent, p as propsFactory, j as useProxiedModel, v as omit, a7 as filterInputAttrs, I as IconValue, r as useLocale, u as useRtl, a as provideTheme, E as useDisplay, d as provideDefaults, o as useResizeObserver, S as createRange, m as makeThemeProps, T as keyValues, e as convertToUnit, ay as keys, ah as isObject } from './layout-I2YKawZF.js';

const {mergeProps:_mergeProps$8,createVNode:_createVNode$f} = await importShared('vue');
const {useId: useId$2} = await importShared('vue');
const makeVCheckboxProps = propsFactory({
  ...makeVInputProps(),
  ...omit(makeVCheckboxBtnProps(), ['inline'])
}, 'VCheckbox');
const VCheckbox = genericComponent()({
  name: 'VCheckbox',
  inheritAttrs: false,
  props: makeVCheckboxProps(),
  emits: {
    'update:modelValue': value => true,
    'update:focused': focused => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const uid = useId$2();
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const checkboxProps = VCheckboxBtn.filterProps(props);
      return _createVNode$f(VInput, _mergeProps$8({
        "class": ['v-checkbox', props.class]
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "id": props.id || `checkbox-${uid}`,
        "focused": isFocused.value,
        "style": props.style
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            messagesId,
            isDisabled,
            isReadonly,
            isValid
          } = _ref2;
          return _createVNode$f(VCheckboxBtn, _mergeProps$8(checkboxProps, {
            "id": id.value,
            "aria-describedby": messagesId.value,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value
          }, controlAttrs, {
            "error": isValid.value === false,
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event,
            "onFocus": focus,
            "onBlur": blur
          }), slots);
        }
      });
    });
    return {};
  }
});

const {mergeProps:_mergeProps$7,createVNode:_createVNode$e} = await importShared('vue');
const makeVRadioProps = propsFactory({
  ...makeVSelectionControlProps({
    falseIcon: '$radioOff',
    trueIcon: '$radioOn'
  })
}, 'VRadio');
const VRadio = genericComponent()({
  name: 'VRadio',
  props: makeVRadioProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const controlProps = VSelectionControl.filterProps(props);
      return _createVNode$e(VSelectionControl, _mergeProps$7(controlProps, {
        "class": ['v-radio', props.class],
        "style": props.style,
        "type": "radio"
      }), slots);
    });
    return {};
  }
});

const {Fragment:_Fragment$4,createVNode:_createVNode$d,mergeProps:_mergeProps$6,createElementVNode:_createElementVNode$a} = await importShared('vue');
const {computed: computed$9,useId: useId$1} = await importShared('vue');
const makeVRadioGroupProps = propsFactory({
  height: {
    type: [Number, String],
    default: 'auto'
  },
  ...makeVInputProps(),
  ...omit(makeSelectionControlGroupProps(), ['multiple']),
  trueIcon: {
    type: IconValue,
    default: '$radioOn'
  },
  falseIcon: {
    type: IconValue,
    default: '$radioOff'
  },
  type: {
    type: String,
    default: 'radio'
  }
}, 'VRadioGroup');
const VRadioGroup = genericComponent()({
  name: 'VRadioGroup',
  inheritAttrs: false,
  props: makeVRadioGroupProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const uid = useId$1();
    const id = computed$9(() => props.id || `radio-group-${uid}`);
    const model = useProxiedModel(props, 'modelValue');
    useRender(() => {
      const [rootAttrs, controlAttrs] = filterInputAttrs(attrs);
      const inputProps = VInput.filterProps(props);
      const controlProps = VSelectionControl.filterProps(props);
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return _createVNode$d(VInput, _mergeProps$6({
        "class": ['v-radio-group', props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "id": id.value
      }), {
        ...slots,
        default: _ref2 => {
          let {
            id,
            messagesId,
            isDisabled,
            isReadonly
          } = _ref2;
          return _createElementVNode$a(_Fragment$4, null, [label && _createVNode$d(VLabel, {
            "id": id.value
          }, {
            default: () => [label]
          }), _createVNode$d(VSelectionControlGroup, _mergeProps$6(controlProps, {
            "id": id.value,
            "aria-describedby": messagesId.value,
            "defaultsTarget": "VRadio",
            "trueIcon": props.trueIcon,
            "falseIcon": props.falseIcon,
            "type": props.type,
            "disabled": isDisabled.value,
            "readonly": isReadonly.value,
            "aria-labelledby": label ? id.value : undefined,
            "multiple": false
          }, controlAttrs, {
            "modelValue": model.value,
            "onUpdate:modelValue": $event => model.value = $event
          }), slots)]);
        }
      });
    });
    return {};
  }
});

const {createVNode:_createVNode$c,createElementVNode:_createElementVNode$9,withCtx:_withCtx$3,openBlock:_openBlock$3,createBlock:_createBlock$2} = await importShared('vue');


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
                                                       
                                                                   
                                                     
                                                               
                                                     
                                                         
                                                                     
                                                                   
                                                                 
                                                       

  return (_openBlock$3(), _createBlock$2(VCard, {
    flat: "",
    class: "tool-bar px-2 py-1"
  }, {
    default: _withCtx$3(() => [
      _createVNode$c(VCardTitle, { class: "text-subtitle-2 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
        default: _withCtx$3(() => [
          _createVNode$c(VIcon, {
            icon: "mdi-magnify",
            class: "mr-2",
            color: "primary",
            size: "small"
          }),
          _cache[6] || (_cache[6] = _createElementVNode$9("span", null, "扫描选项", -1))
        ]),
        _: 1,
        __: [6]
      }),
      _createVNode$c(VCardText, null, {
        default: _withCtx$3(() => [
          _createVNode$c(VRow, {
            align: "center",
            "no-gutters": "",
            class: "d-flex"
          }, {
            default: _withCtx$3(() => [
              _createVNode$c(VCol, { cols: "2" }, {
                default: _withCtx$3(() => _cache[7] || (_cache[7] = [
                  _createElementVNode$9("span", { class: "label-text font-weight-bold" }, "缺失选项：", -1)
                ])),
                _: 1,
                __: [7]
              }),
              _createVNode$c(VCol, { cols: "3" }, {
                default: _withCtx$3(() => [
                  _createVNode$c(VCheckbox, {
                    modelValue: state.missingOptions.file,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((state.missingOptions.file) = $event)),
                    label: "缺失源文件的种子",
                    "hide-details": "",
                    size: "small"
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              _createVNode$c(VCol, { cols: "3" }, {
                default: _withCtx$3(() => [
                  _createVNode$c(VCheckbox, {
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
          _createVNode$c(VRow, {
            align: "center",
            "no-gutters": "",
            class: "d-flex"
          }, {
            default: _withCtx$3(() => [
              _createVNode$c(VCol, { cols: "2" }, {
                default: _withCtx$3(() => _cache[8] || (_cache[8] = [
                  _createElementVNode$9("span", { class: "label-text font-weight-bold" }, "有无辅种：", -1)
                ])),
                _: 1,
                __: [8]
              }),
              _createVNode$c(VCol, { cols: "10" }, {
                default: _withCtx$3(() => [
                  _createVNode$c(VRadioGroup, {
                    modelValue: state.auxOption,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((state.auxOption) = $event)),
                    inline: "",
                    "hide-details": "",
                    size: "small"
                  }, {
                    default: _withCtx$3(() => [
                      _createElementVNode$9("div", _hoisted_1$3, [
                        _createVNode$c(VRadio, {
                          label: "全部",
                          value: "all"
                        }),
                        _createVNode$c(VRadio, {
                          label: "无辅种",
                          value: "no_aux"
                        }),
                        _createVNode$c(VRadio, {
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
          _createVNode$c(VRow, {
            align: "center",
            "no-gutters": "",
            class: "d-flex"
          }, {
            default: _withCtx$3(() => [
              _createVNode$c(VCol, { cols: "2" }, {
                default: _withCtx$3(() => _cache[9] || (_cache[9] = [
                  _createElementVNode$9("span", { class: "label-text font-weight-bold" }, "删除选项：", -1)
                ])),
                _: 1,
                __: [9]
              }),
              _createVNode$c(VCol, { cols: "10" }, {
                default: _withCtx$3(() => [
                  _createVNode$c(VRadioGroup, {
                    modelValue: state.removeOption,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((state.removeOption) = $event)),
                    inline: "",
                    "hide-details": "",
                    size: "small"
                  }, {
                    default: _withCtx$3(() => [
                      _createElementVNode$9("div", _hoisted_2$2, [
                        _createVNode$c(VRadio, {
                          label: "全部",
                          value: "all"
                        }),
                        _createVNode$c(VRadio, {
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
          _createVNode$c(VRow, {
            class: "mt-2 d-flex",
            align: "center",
            "no-gutters": ""
          }, {
            default: _withCtx$3(() => [
              _createVNode$c(VCol, { cols: "2" }, {
                default: _withCtx$3(() => _cache[10] || (_cache[10] = [
                  _createElementVNode$9("span", { class: "label-text font-weight-bold" }, "Tracker：", -1)
                ])),
                _: 1,
                __: [10]
              }),
              _createVNode$c(VCol, { cols: "10" }, {
                default: _withCtx$3(() => [
                  _createVNode$c(VTextField, {
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
          _createVNode$c(VRow, {
            class: "d-flex",
            align: "center",
            "no-gutters": ""
          }, {
            default: _withCtx$3(() => [
              _createVNode$c(VCol, { cols: "2" }, {
                default: _withCtx$3(() => _cache[11] || (_cache[11] = [
                  _createElementVNode$9("span", { class: "label-text font-weight-bold" }, "是否使用存量种子数据：", -1)
                ])),
                _: 1,
                __: [11]
              }),
              _createVNode$c(VCol, { cols: "10" }, {
                default: _withCtx$3(() => [
                  _createVNode$c(VRadioGroup, {
                    modelValue: state.existingSeedData,
                    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((state.existingSeedData) = $event)),
                    inline: "",
                    "hide-details": "",
                    size: "small"
                  }, {
                    default: _withCtx$3(() => [
                      _createElementVNode$9("div", _hoisted_3$2, [
                        _createVNode$c(VRadio, {
                          label: "否",
                          value: false
                        }),
                        _createVNode$c(VRadio, {
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

// Utilities
const {onBeforeUpdate,ref: ref$4} = await importShared('vue');


// Types

function useRefs() {
  const refs = ref$4([]);
  onBeforeUpdate(() => refs.value = []);
  function updateRef(e, i) {
    refs.value[i] = e;
  }
  return {
    refs,
    updateRef
  };
}

const {mergeProps:_mergeProps$5,createVNode:_createVNode$b,createElementVNode:_createElementVNode$8,normalizeClass:_normalizeClass$4,normalizeStyle:_normalizeStyle$4} = await importShared('vue');
const {computed: computed$8,nextTick: nextTick$1,shallowRef: shallowRef$2,toRef: toRef$3} = await importShared('vue');
const makeVPaginationProps = propsFactory({
  activeColor: String,
  start: {
    type: [Number, String],
    default: 1
  },
  modelValue: {
    type: Number,
    default: props => props.start
  },
  disabled: Boolean,
  length: {
    type: [Number, String],
    default: 1,
    validator: val => val % 1 === 0
  },
  totalVisible: [Number, String],
  firstIcon: {
    type: IconValue,
    default: '$first'
  },
  prevIcon: {
    type: IconValue,
    default: '$prev'
  },
  nextIcon: {
    type: IconValue,
    default: '$next'
  },
  lastIcon: {
    type: IconValue,
    default: '$last'
  },
  ariaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.root'
  },
  pageAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.page'
  },
  currentPageAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.currentPage'
  },
  firstAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.first'
  },
  previousAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.previous'
  },
  nextAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.next'
  },
  lastAriaLabel: {
    type: String,
    default: '$vuetify.pagination.ariaLabel.last'
  },
  ellipsis: {
    type: String,
    default: '...'
  },
  showFirstLastPage: Boolean,
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: 'nav'
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: 'text'
  })
}, 'VPagination');
const VPagination = genericComponent()({
  name: 'VPagination',
  props: makeVPaginationProps(),
  emits: {
    'update:modelValue': value => true,
    first: value => true,
    prev: value => true,
    next: value => true,
    last: value => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const page = useProxiedModel(props, 'modelValue');
    const {
      t,
      n
    } = useLocale();
    const {
      isRtl
    } = useRtl();
    const {
      themeClasses
    } = provideTheme(props);
    const {
      width
    } = useDisplay();
    const maxButtons = shallowRef$2(-1);
    provideDefaults(undefined, {
      scoped: true
    });
    const {
      resizeRef
    } = useResizeObserver(entries => {
      if (!entries.length) return;
      const {
        target,
        contentRect
      } = entries[0];
      const firstItem = target.querySelector('.v-pagination__list > *');
      if (!firstItem) return;
      const totalWidth = contentRect.width;
      const itemWidth = firstItem.offsetWidth + parseFloat(getComputedStyle(firstItem).marginRight) * 2;
      maxButtons.value = getMax(totalWidth, itemWidth);
    });
    const length = computed$8(() => parseInt(props.length, 10));
    const start = computed$8(() => parseInt(props.start, 10));
    const totalVisible = computed$8(() => {
      if (props.totalVisible != null) return parseInt(props.totalVisible, 10);else if (maxButtons.value >= 0) return maxButtons.value;
      return getMax(width.value, 58);
    });
    function getMax(totalWidth, itemWidth) {
      const minButtons = props.showFirstLastPage ? 5 : 3;
      return Math.max(0, Math.floor(
      // Round to two decimal places to avoid floating point errors
      Number(((totalWidth - itemWidth * minButtons) / itemWidth).toFixed(2))));
    }
    const range = computed$8(() => {
      if (length.value <= 0 || isNaN(length.value) || length.value > Number.MAX_SAFE_INTEGER) return [];
      if (totalVisible.value <= 0) return [];else if (totalVisible.value === 1) return [page.value];
      if (length.value <= totalVisible.value) {
        return createRange(length.value, start.value);
      }
      const even = totalVisible.value % 2 === 0;
      const middle = even ? totalVisible.value / 2 : Math.floor(totalVisible.value / 2);
      const left = even ? middle : middle + 1;
      const right = length.value - middle;
      if (left - page.value >= 0) {
        return [...createRange(Math.max(1, totalVisible.value - 1), start.value), props.ellipsis, length.value];
      } else if (page.value - right >= (even ? 1 : 0)) {
        const rangeLength = totalVisible.value - 1;
        const rangeStart = length.value - rangeLength + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart)];
      } else {
        const rangeLength = Math.max(1, totalVisible.value - 2);
        const rangeStart = rangeLength === 1 ? page.value : page.value - Math.ceil(rangeLength / 2) + start.value;
        return [start.value, props.ellipsis, ...createRange(rangeLength, rangeStart), props.ellipsis, length.value];
      }
    });

    // TODO: 'first' | 'prev' | 'next' | 'last' does not work here?
    function setValue(e, value, event) {
      e.preventDefault();
      page.value = value;
      event && emit(event, value);
    }
    const {
      refs,
      updateRef
    } = useRefs();
    provideDefaults({
      VPaginationBtn: {
        color: toRef$3(() => props.color),
        border: toRef$3(() => props.border),
        density: toRef$3(() => props.density),
        size: toRef$3(() => props.size),
        variant: toRef$3(() => props.variant),
        rounded: toRef$3(() => props.rounded),
        elevation: toRef$3(() => props.elevation)
      }
    });
    const items = computed$8(() => {
      return range.value.map((item, index) => {
        const ref = e => updateRef(e, index);
        if (typeof item === 'string') {
          return {
            isActive: false,
            key: `ellipsis-${index}`,
            page: item,
            props: {
              ref,
              ellipsis: true,
              icon: true,
              disabled: true
            }
          };
        } else {
          const isActive = item === page.value;
          return {
            isActive,
            key: item,
            page: n(item),
            props: {
              ref,
              ellipsis: false,
              icon: true,
              disabled: !!props.disabled || Number(props.length) < 2,
              color: isActive ? props.activeColor : props.color,
              'aria-current': isActive,
              'aria-label': t(isActive ? props.currentPageAriaLabel : props.pageAriaLabel, item),
              onClick: e => setValue(e, item)
            }
          };
        }
      });
    });
    const controls = computed$8(() => {
      const prevDisabled = !!props.disabled || page.value <= start.value;
      const nextDisabled = !!props.disabled || page.value >= start.value + length.value - 1;
      return {
        first: props.showFirstLastPage ? {
          icon: isRtl.value ? props.lastIcon : props.firstIcon,
          onClick: e => setValue(e, start.value, 'first'),
          disabled: prevDisabled,
          'aria-label': t(props.firstAriaLabel),
          'aria-disabled': prevDisabled
        } : undefined,
        prev: {
          icon: isRtl.value ? props.nextIcon : props.prevIcon,
          onClick: e => setValue(e, page.value - 1, 'prev'),
          disabled: prevDisabled,
          'aria-label': t(props.previousAriaLabel),
          'aria-disabled': prevDisabled
        },
        next: {
          icon: isRtl.value ? props.prevIcon : props.nextIcon,
          onClick: e => setValue(e, page.value + 1, 'next'),
          disabled: nextDisabled,
          'aria-label': t(props.nextAriaLabel),
          'aria-disabled': nextDisabled
        },
        last: props.showFirstLastPage ? {
          icon: isRtl.value ? props.firstIcon : props.lastIcon,
          onClick: e => setValue(e, start.value + length.value - 1, 'last'),
          disabled: nextDisabled,
          'aria-label': t(props.lastAriaLabel),
          'aria-disabled': nextDisabled
        } : undefined
      };
    });
    function updateFocus() {
      const currentIndex = page.value - start.value;
      refs.value[currentIndex]?.$el.focus();
    }
    function onKeydown(e) {
      if (e.key === keyValues.left && !props.disabled && page.value > Number(props.start)) {
        page.value = page.value - 1;
        nextTick$1(updateFocus);
      } else if (e.key === keyValues.right && !props.disabled && page.value < start.value + length.value - 1) {
        page.value = page.value + 1;
        nextTick$1(updateFocus);
      }
    }
    useRender(() => _createVNode$b(props.tag, {
      "ref": resizeRef,
      "class": _normalizeClass$4(['v-pagination', themeClasses.value, props.class]),
      "style": _normalizeStyle$4(props.style),
      "role": "navigation",
      "aria-label": t(props.ariaLabel),
      "onKeydown": onKeydown,
      "data-test": "v-pagination-root"
    }, {
      default: () => [_createElementVNode$8("ul", {
        "class": "v-pagination__list"
      }, [props.showFirstLastPage && _createElementVNode$8("li", {
        "key": "first",
        "class": "v-pagination__first",
        "data-test": "v-pagination-first"
      }, [slots.first ? slots.first(controls.value.first) : _createVNode$b(VBtn, _mergeProps$5({
        "_as": "VPaginationBtn"
      }, controls.value.first), null)]), _createElementVNode$8("li", {
        "key": "prev",
        "class": "v-pagination__prev",
        "data-test": "v-pagination-prev"
      }, [slots.prev ? slots.prev(controls.value.prev) : _createVNode$b(VBtn, _mergeProps$5({
        "_as": "VPaginationBtn"
      }, controls.value.prev), null)]), items.value.map((item, index) => _createElementVNode$8("li", {
        "key": item.key,
        "class": _normalizeClass$4(['v-pagination__item', {
          'v-pagination__item--is-active': item.isActive
        }]),
        "data-test": "v-pagination-item"
      }, [slots.item ? slots.item(item) : _createVNode$b(VBtn, _mergeProps$5({
        "_as": "VPaginationBtn"
      }, item.props), {
        default: () => [item.page]
      })])), _createElementVNode$8("li", {
        "key": "next",
        "class": "v-pagination__next",
        "data-test": "v-pagination-next"
      }, [slots.next ? slots.next(controls.value.next) : _createVNode$b(VBtn, _mergeProps$5({
        "_as": "VPaginationBtn"
      }, controls.value.next), null)]), props.showFirstLastPage && _createElementVNode$8("li", {
        "key": "last",
        "class": "v-pagination__last",
        "data-test": "v-pagination-last"
      }, [slots.last ? slots.last(controls.value.last) : _createVNode$b(VBtn, _mergeProps$5({
        "_as": "VPaginationBtn"
      }, controls.value.last), null)])])]
    }));
    return {};
  }
});

const {createElementVNode:_createElementVNode$7,normalizeClass:_normalizeClass$3,normalizeStyle:_normalizeStyle$3,createVNode:_createVNode$a} = await importShared('vue');
const makeVTableProps = propsFactory({
  fixedHeader: Boolean,
  fixedFooter: Boolean,
  height: [Number, String],
  hover: Boolean,
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, 'VTable');
const VTable = genericComponent()({
  name: 'VTable',
  props: makeVTableProps(),
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      densityClasses
    } = useDensity(props);
    useRender(() => _createVNode$a(props.tag, {
      "class": _normalizeClass$3(['v-table', {
        'v-table--fixed-height': !!props.height,
        'v-table--fixed-header': props.fixedHeader,
        'v-table--fixed-footer': props.fixedFooter,
        'v-table--has-top': !!slots.top,
        'v-table--has-bottom': !!slots.bottom,
        'v-table--hover': props.hover
      }, themeClasses.value, densityClasses.value, props.class]),
      "style": _normalizeStyle$3(props.style)
    }, {
      default: () => [slots.top?.(), slots.default ? _createElementVNode$7("div", {
        "class": "v-table__wrapper",
        "style": {
          height: convertToUnit(props.height)
        }
      }, [_createElementVNode$7("table", null, [slots.default()])]) : slots.wrapper?.(), slots.bottom?.()]
    }));
    return {};
  }
});

const {defineComponent:_defineComponent$2} = await importShared('vue');

const {createElementVNode:_createElementVNode$6,createTextVNode:_createTextVNode$2,withCtx:_withCtx$2,createVNode:_createVNode$9,toDisplayString:_toDisplayString$2,openBlock:_openBlock$2,createBlock:_createBlock$1,createCommentVNode:_createCommentVNode$1,renderList:_renderList$1,Fragment:_Fragment$3,createElementBlock:_createElementBlock$2,unref:_unref$1} = await importShared('vue');

const _hoisted_1$2 = { class: "text-left" };
const _hoisted_2$1 = { class: "name-column" };
const _hoisted_3$1 = { class: "size-column" };
const {computed: computed$7,reactive: reactive$2} = await importShared('vue');
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
      selectedScans: []
    });
    const totalComputed = computed$7(() => {
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
    const allScanKeys = computed$7(() => {
      const Keys = props.scanRes.combinedList.map((item) => item.hash);
      return [...Keys];
    });
    const selectAllScans = computed$7({
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
    const totalPages = computed$7(() => {
      return Math.ceil(props.scanRes.total / props.scanParams.pageSize);
    });
    const handlePageChange = (newPage) => {
      emit("update:scanParams", {
        pageSize: props.scanParams.pageSize,
        page: newPage
      });
    };
    const handlePageSizeChange = (newPageSize) => {
      if (newPageSize == props.scanParams.pageSize) return;
      emit("update:scanParams", {
        pageSize: newPageSize,
        page: 1
        // 切换每页数量后跳转到第一页
      });
    };
    const clearSelectedScans = () => {
      state.selectedScans = [];
    };
    __expose({
      clearSelectedScans
    });
    return (_ctx, _cache) => {
                                                          
                                                            
                                                                
                                                                
                                                                        
                                                                        
                                                                    
                                                              
                                                                      
                                                            
      return _openBlock$2(), _createBlock$1(VCard, {
        flat: "",
        class: "mb-4"
      }, {
        default: _withCtx$2(() => [
          _createVNode$9(VCardTitle, { class: "text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
            default: _withCtx$2(() => [
              _cache[6] || (_cache[6] = _createElementVNode$6("span", null, "扫描记录", -1)),
              _createVNode$9(VBtn, {
                color: "primary",
                onClick: deleteAllRecord,
                class: "ml-2",
                "prepend-icon": "mdi-magnify",
                size: "small"
              }, {
                default: _withCtx$2(() => _cache[4] || (_cache[4] = [
                  _createTextVNode$2("清空记录 ")
                ])),
                _: 1,
                __: [4]
              }),
              _createVNode$9(VBtn, {
                color: "success",
                onClick: addToCleanup,
                class: "ml-2",
                "prepend-icon": "mdi-plus-box",
                size: "small"
              }, {
                default: _withCtx$2(() => _cache[5] || (_cache[5] = [
                  _createTextVNode$2("添加到待清理 ")
                ])),
                _: 1,
                __: [5]
              }),
              totalComputed.value != "" ? (_openBlock$2(), _createBlock$1(VChip, {
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
              _createVNode$9(VChip, {
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
              _createVNode$9(VSpacer),
              _createVNode$9(VSelect, {
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
              _createVNode$9(VPagination, {
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
            __: [6]
          }),
          _createVNode$9(VCardText, { class: "pa-0" }, {
            default: _withCtx$2(() => [
              _createVNode$9(VTable, {
                "fixed-header": "",
                height: "320px",
                density: "compact",
                hover: ""
              }, {
                default: _withCtx$2(() => [
                  _createElementVNode$6("thead", null, [
                    _createElementVNode$6("tr", null, [
                      _createElementVNode$6("th", _hoisted_1$2, [
                        _createVNode$9(VCheckbox, {
                          modelValue: selectAllScans.value,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => selectAllScans.value = $event),
                          "hide-details": ""
                        }, null, 8, ["modelValue"])
                      ]),
                      _cache[7] || (_cache[7] = _createElementVNode$6("th", { class: "text-left name-column" }, "名称", -1)),
                      _cache[8] || (_cache[8] = _createElementVNode$6("th", { class: "text-left" }, "Tracker", -1)),
                      _cache[9] || (_cache[9] = _createElementVNode$6("th", { class: "text-left" }, "状态", -1)),
                      _cache[10] || (_cache[10] = _createElementVNode$6("th", { class: "text-left size-column" }, "大小", -1))
                    ])
                  ]),
                  _createElementVNode$6("tbody", null, [
                    (_openBlock$2(true), _createElementBlock$2(_Fragment$3, null, _renderList$1(props.scanRes.combinedList, (item) => {
                      return _openBlock$2(), _createElementBlock$2("tr", {
                        key: item.hash
                      }, [
                        _createElementVNode$6("td", null, [
                          _createVNode$9(VCheckbox, {
                            modelValue: state.selectedScans,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => state.selectedScans = $event),
                            value: item.hash,
                            "hide-details": ""
                          }, null, 8, ["modelValue", "value"])
                        ]),
                        item.type === "torrent" ? (_openBlock$2(), _createElementBlock$2(_Fragment$3, { key: 0 }, [
                          _createElementVNode$6("td", _hoisted_2$1, [
                            _createVNode$9(VChip, {
                              color: item.client == "transmission" ? "primary" : "error",
                              size: "small",
                              "text-color": "white"
                            }, {
                              default: _withCtx$2(() => [
                                _createTextVNode$2(_toDisplayString$2((item.client || "").slice(0, 2)), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            _createTextVNode$2(" " + _toDisplayString$2(item.name), 1)
                          ]),
                          _createElementVNode$6("td", null, _toDisplayString$2(item.trackers.length > 0 ? item.trackers.join(", ") : "无 Tracker"), 1),
                          _createElementVNode$6("td", null, [
                            _createVNode$9(VChip, {
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
                        ], 64)) : item.type === "file" ? (_openBlock$2(), _createElementBlock$2(_Fragment$3, { key: 1 }, [
                          _createElementVNode$6("td", null, _toDisplayString$2(item.name), 1),
                          _cache[12] || (_cache[12] = _createElementVNode$6("td", null, "无 Tracker", -1)),
                          _createElementVNode$6("td", null, [
                            _createVNode$9(VChip, {
                              color: "warning",
                              size: "small",
                              "text-color": "white"
                            }, {
                              default: _withCtx$2(() => _cache[11] || (_cache[11] = [
                                _createTextVNode$2("缺失种子")
                              ])),
                              _: 1,
                              __: [11]
                            })
                          ])
                        ], 64)) : _createCommentVNode$1("", true),
                        _createElementVNode$6("td", _hoisted_3$1, _toDisplayString$2(item.size ? `${_unref$1(formatBytes)(item.size)}` : "未知大小"), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ScanResults = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-7bad4631"]]);

const {mergeProps:_mergeProps$4,createVNode:_createVNode$8} = await importShared('vue');
const {computed: computed$6,mergeProps,ref: ref$3,toRef: toRef$2,useId} = await importShared('vue');
const makeVTooltipProps = propsFactory({
  id: String,
  interactive: Boolean,
  text: String,
  ...omit(makeVOverlayProps({
    closeOnBack: false,
    location: 'end',
    locationStrategy: 'connected',
    eager: true,
    minWidth: 0,
    offset: 10,
    openOnClick: false,
    openOnHover: true,
    origin: 'auto',
    scrim: false,
    scrollStrategy: 'reposition',
    transition: null
  }), ['absolute', 'persistent'])
}, 'VTooltip');
const VTooltip = genericComponent()({
  name: 'VTooltip',
  props: makeVTooltipProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      scopeId
    } = useScopeId();
    const uid = useId();
    const id = toRef$2(() => props.id || `v-tooltip-${uid}`);
    const overlay = ref$3();
    const location = computed$6(() => {
      return props.location.split(' ').length > 1 ? props.location : props.location + ' center';
    });
    const origin = computed$6(() => {
      return props.origin === 'auto' || props.origin === 'overlap' || props.origin.split(' ').length > 1 || props.location.split(' ').length > 1 ? props.origin : props.origin + ' center';
    });
    const transition = toRef$2(() => {
      if (props.transition != null) return props.transition;
      return isActive.value ? 'scale-transition' : 'fade-transition';
    });
    const activatorProps = computed$6(() => mergeProps({
      'aria-describedby': id.value
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return _createVNode$8(VOverlay, _mergeProps$4({
        "ref": overlay,
        "class": ['v-tooltip', {
          'v-tooltip--interactive': props.interactive
        }, props.class],
        "style": props.style,
        "id": id.value
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "transition": transition.value,
        "absolute": true,
        "location": location.value,
        "origin": origin.value,
        "persistent": true,
        "role": "tooltip",
        "activatorProps": activatorProps.value,
        "_disableGlobalStack": true
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return slots.default?.(...args) ?? props.text;
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});

const {defineComponent:_defineComponent$1} = await importShared('vue');

const {createElementVNode:_createElementVNode$5,toDisplayString:_toDisplayString$1,createTextVNode:_createTextVNode$1,withCtx:_withCtx$1,createVNode:_createVNode$7,renderList:_renderList,Fragment:_Fragment$2,openBlock:_openBlock$1,createElementBlock:_createElementBlock$1,createCommentVNode:_createCommentVNode,unref:_unref,createBlock:_createBlock} = await importShared('vue');

const _hoisted_1$1 = { class: "name-column" };
const _hoisted_2 = { class: "size-column" };
const _hoisted_3 = { class: "text-right" };
const {computed: computed$5,reactive: reactive$1} = await importShared('vue');
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
    const totalSize = computed$5(() => {
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
        state.snackbar.color = "success";
        state.snackbar.message = `成功添加 ${newList.length} 条记录到待清理`;
        state.snackbar.show = true;
      } else {
        state.snackbar.color = "info";
        state.snackbar.message = "没有新项目可添加，全部已存在";
        state.snackbar.show = true;
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
                                                            
                                                          
                                                                        
                                                            
                                                                  
                                                              
                                                                      
                                                                    
                                                            
      return _openBlock$1(), _createBlock(VCard, { flat: "" }, {
        default: _withCtx$1(() => [
          _createVNode$7(VCardTitle, { class: "text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
            default: _withCtx$1(() => [
              _cache[2] || (_cache[2] = _createElementVNode$5("span", null, "待清理记录列表", -1)),
              _createVNode$7(VChip, {
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
              _createVNode$7(VBtn, {
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
          _createVNode$7(VCardText, { class: "pa-0" }, {
            default: _withCtx$1(() => [
              _createVNode$7(VTable, {
                "fixed-header": "",
                height: "300px",
                hover: ""
              }, {
                default: _withCtx$1(() => [
                  _cache[5] || (_cache[5] = _createElementVNode$5("thead", null, [
                    _createElementVNode$5("tr", null, [
                      _createElementVNode$5("th", { class: "text-left name-column" }, "名称"),
                      _createElementVNode$5("th", { class: "text-left" }, "删除选项"),
                      _createElementVNode$5("th", { class: "text-left" }, "大小"),
                      _createElementVNode$5("th", { class: "text-right size-column" }, "操作")
                    ])
                  ], -1)),
                  _createElementVNode$5("tbody", null, [
                    (_openBlock$1(true), _createElementBlock$1(_Fragment$2, null, _renderList(state.cleanupList, (item) => {
                      return _openBlock$1(), _createElementBlock$1("tr", {
                        key: item.hash
                      }, [
                        item.type == "torrent" ? (_openBlock$1(), _createElementBlock$1(_Fragment$2, { key: 0 }, [
                          _createElementVNode$5("td", _hoisted_1$1, [
                            _createVNode$7(VChip, {
                              color: item.client == "transmission" ? "primary" : "error",
                              size: "small",
                              "text-color": "white"
                            }, {
                              default: _withCtx$1(() => [
                                _createTextVNode$1(_toDisplayString$1((item.client || "").slice(0, 2)), 1)
                              ]),
                              _: 2
                            }, 1032, ["color"]),
                            _createTextVNode$1(" " + _toDisplayString$1(item.name), 1)
                          ]),
                          _createElementVNode$5("td", null, [
                            _createVNode$7(VChip, {
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
                          _createElementVNode$5("td", null, _toDisplayString$1(itemSizeText(item)), 1)
                        ], 64)) : item.type == "file" ? (_openBlock$1(), _createElementBlock$1(_Fragment$2, { key: 1 }, [
                          _createElementVNode$5("td", null, _toDisplayString$1(item.name), 1),
                          _createElementVNode$5("td", null, [
                            _createVNode$7(VChip, {
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
                          _createElementVNode$5("td", _hoisted_2, _toDisplayString$1(_unref(formatBytes)(item.size)), 1)
                        ], 64)) : _createCommentVNode("", true),
                        _createElementVNode$5("td", _hoisted_3, [
                          _createVNode$7(VBtn, {
                            icon: "",
                            size: "small",
                            onClick: ($event) => removeFromCleanup(item),
                            color: "error"
                          }, {
                            default: _withCtx$1(() => [
                              _createVNode$7(VIcon, null, {
                                default: _withCtx$1(() => _cache[3] || (_cache[3] = [
                                  _createTextVNode$1("mdi-delete")
                                ])),
                                _: 1,
                                __: [3]
                              }),
                              _createVNode$7(VTooltip, {
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
          _createVNode$7(VSnackbar, {
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

const CleanupList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f50019e7"]]);

// Types

const VTabsSymbol = Symbol.for('vuetify:v-tabs');

const {Fragment:_Fragment$1,normalizeClass:_normalizeClass$2,normalizeStyle:_normalizeStyle$2,createElementVNode:_createElementVNode$4,mergeProps:_mergeProps$3,createVNode:_createVNode$6} = await importShared('vue');
const {computed: computed$4,ref: ref$2} = await importShared('vue');
const makeVTabProps = propsFactory({
  fixed: Boolean,
  sliderColor: String,
  hideSlider: Boolean,
  direction: {
    type: String,
    default: 'horizontal'
  },
  ...omit(makeVBtnProps({
    selectedClass: 'v-tab--selected',
    variant: 'text'
  }), ['active', 'block', 'flat', 'location', 'position', 'symbol'])
}, 'VTab');
const VTab = genericComponent()({
  name: 'VTab',
  props: makeVTabProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const {
      textColorClasses: sliderColorClasses,
      textColorStyles: sliderColorStyles
    } = useTextColor(() => props.sliderColor);
    const rootEl = ref$2();
    const sliderEl = ref$2();
    const isHorizontal = computed$4(() => props.direction === 'horizontal');
    const isSelected = computed$4(() => rootEl.value?.group?.isSelected.value ?? false);
    function updateSlider(_ref2) {
      let {
        value
      } = _ref2;
      if (value) {
        const prevEl = rootEl.value?.$el.parentElement?.querySelector('.v-tab--selected .v-tab__slider');
        const nextEl = sliderEl.value;
        if (!prevEl || !nextEl) return;
        const color = getComputedStyle(prevEl).color;
        const prevBox = prevEl.getBoundingClientRect();
        const nextBox = nextEl.getBoundingClientRect();
        const xy = isHorizontal.value ? 'x' : 'y';
        const XY = isHorizontal.value ? 'X' : 'Y';
        const rightBottom = isHorizontal.value ? 'right' : 'bottom';
        const widthHeight = isHorizontal.value ? 'width' : 'height';
        const prevPos = prevBox[xy];
        const nextPos = nextBox[xy];
        const delta = prevPos > nextPos ? prevBox[rightBottom] - nextBox[rightBottom] : prevBox[xy] - nextBox[xy];
        const origin = Math.sign(delta) > 0 ? isHorizontal.value ? 'right' : 'bottom' : Math.sign(delta) < 0 ? isHorizontal.value ? 'left' : 'top' : 'center';
        const size = Math.abs(delta) + (Math.sign(delta) < 0 ? prevBox[widthHeight] : nextBox[widthHeight]);
        const scale = size / Math.max(prevBox[widthHeight], nextBox[widthHeight]) || 0;
        const initialScale = prevBox[widthHeight] / nextBox[widthHeight] || 0;
        const sigma = 1.5;
        animate(nextEl, {
          backgroundColor: [color, 'currentcolor'],
          transform: [`translate${XY}(${delta}px) scale${XY}(${initialScale})`, `translate${XY}(${delta / sigma}px) scale${XY}(${(scale - 1) / sigma + 1})`, 'none'],
          transformOrigin: Array(3).fill(origin)
        }, {
          duration: 225,
          easing: standardEasing
        });
      }
    }
    useRender(() => {
      const btnProps = VBtn.filterProps(props);
      return _createVNode$6(VBtn, _mergeProps$3({
        "symbol": VTabsSymbol,
        "ref": rootEl,
        "class": ['v-tab', props.class],
        "style": props.style,
        "tabindex": isSelected.value ? 0 : -1,
        "role": "tab",
        "aria-selected": String(isSelected.value),
        "active": false
      }, btnProps, attrs, {
        "block": props.fixed,
        "maxWidth": props.fixed ? 300 : undefined,
        "onGroup:selected": updateSlider
      }), {
        ...slots,
        default: () => _createElementVNode$4(_Fragment$1, null, [slots.default?.() ?? props.text, !props.hideSlider && _createElementVNode$4("div", {
          "ref": sliderEl,
          "class": _normalizeClass$2(['v-tab__slider', sliderColorClasses.value]),
          "style": _normalizeStyle$2(sliderColorStyles.value)
        }, null)])
      });
    });
    return forwardRefs({}, rootEl);
  }
});

// Utilities
const handleGesture = wrapper => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  wrapper.start?.({
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  wrapper.end?.({
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  wrapper.move?.({
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: e => touchstart(e, wrapper),
    touchend: e => touchend(e, wrapper),
    touchmove: e => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  const value = binding.value;
  const target = value?.parent ? el.parentElement : el;
  const options = value?.options ?? {
    passive: true
  };
  const uid = binding.instance?.$.uid; // TODO: use custom uid generator

  if (!target || !uid) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = target._touchHandlers ?? Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach(eventName => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  const target = binding.value?.parent ? el.parentElement : el;
  const uid = binding.instance?.$.uid;
  if (!target?._touchHandlers || !uid) return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach(eventName => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};

const {createVNode:_createVNode$5,createElementVNode:_createElementVNode$3,normalizeClass:_normalizeClass$1,normalizeStyle:_normalizeStyle$1,withDirectives:_withDirectives$2} = await importShared('vue');
const {computed: computed$3,provide,ref: ref$1,shallowRef: shallowRef$1,toRef: toRef$1,watch} = await importShared('vue');
const VWindowSymbol = Symbol.for('vuetify:v-window');
const VWindowGroupSymbol = Symbol.for('vuetify:v-window-group');
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: '$next'
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: '$prev'
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: v => typeof v === 'boolean' || v === 'hover'
  },
  touch: {
    type: [Object, Boolean],
    default: undefined
  },
  direction: {
    type: String,
    default: 'horizontal'
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: 'v-window-item--active'
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: 'force'
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, 'VWindow');
const VWindow = genericComponent()({
  name: 'VWindow',
  directives: {
    vTouch: Touch
  },
  props: makeVWindowProps(),
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref$1();
    const isRtlReverse = computed$3(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef$1(false);
    const transition = computed$3(() => {
      const axis = props.direction === 'vertical' ? 'y' : 'x';
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? '-reverse' : '';
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef$1(0);
    const transitionHeight = ref$1(undefined);
    const activeIndex = computed$3(() => {
      return group.items.value.findIndex(item => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = toRef$1(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = toRef$1(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed$3(() => {
      const arrows = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? 'right' : 'left'}`,
        onClick: group.prev,
        'aria-label': t('$vuetify.carousel.prev')
      };
      arrows.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : _createVNode$5(VBtn, prevProps, null) : _createElementVNode$3("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? 'left' : 'right'}`,
        onClick: group.next,
        'aria-label': t('$vuetify.carousel.next')
      };
      arrows.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : _createVNode$5(VBtn, nextProps, null) : _createElementVNode$3("div", null, null));
      return arrows;
    });
    const touchOptions = computed$3(() => {
      if (props.touch === false) return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: _ref2 => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...(props.touch === true ? {} : props.touch)
      };
    });
    useRender(() => _withDirectives$2(_createVNode$5(props.tag, {
      "ref": rootRef,
      "class": _normalizeClass$1(['v-window', {
        'v-window--show-arrows-on-hover': props.showArrows === 'hover'
      }, themeClasses.value, props.class]),
      "style": _normalizeStyle$1(props.style)
    }, {
      default: () => [_createElementVNode$3("div", {
        "class": "v-window__container",
        "style": {
          height: transitionHeight.value
        }
      }, [slots.default?.({
        group
      }), props.showArrows !== false && _createElementVNode$3("div", {
        "class": "v-window__controls"
      }, [arrows.value])]), slots.additional?.({
        group
      })]
    }), [[Touch, touchOptions.value]]));
    return {
      group
    };
  }
});

const {mergeProps:_mergeProps$2,createVNode:_createVNode$4} = await importShared('vue');
const {computed: computed$2,inject: inject$1} = await importShared('vue');
const makeVTabsWindowProps = propsFactory({
  ...omit(makeVWindowProps(), ['continuous', 'nextIcon', 'prevIcon', 'showArrows', 'touch', 'mandatory'])
}, 'VTabsWindow');
const VTabsWindow = genericComponent()({
  name: 'VTabsWindow',
  props: makeVTabsWindowProps(),
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const group = inject$1(VTabsSymbol, null);
    const _model = useProxiedModel(props, 'modelValue');
    const model = computed$2({
      get() {
        // Always return modelValue if defined
        // or if not within a VTabs group
        if (_model.value != null || !group) return _model.value;

        // If inside of a VTabs, find the currently selected
        // item by id. Item value may be assigned by its index
        return group.items.value.find(item => group.selected.value.includes(item.id))?.value;
      },
      set(val) {
        _model.value = val;
      }
    });
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return _createVNode$4(VWindow, _mergeProps$2({
        "_as": "VTabsWindow"
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": ['v-tabs-window', props.class],
        "style": props.style,
        "mandatory": false,
        "touch": false
      }), slots);
    });
    return {};
  }
});

const {vShow:_vShow$1,normalizeClass:_normalizeClass,normalizeStyle:_normalizeStyle,createElementVNode:_createElementVNode$2,withDirectives:_withDirectives$1,createVNode:_createVNode$3} = await importShared('vue');
const {computed: computed$1,inject,nextTick,shallowRef} = await importShared('vue');
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: undefined
  },
  transition: {
    type: [Boolean, String],
    default: undefined
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, 'VWindowItem');
const VWindowItem = genericComponent()({
  name: 'VWindowItem',
  directives: {
    vTouch: Touch
  },
  props: makeVWindowItemProps(),
  emits: {
    'group:selected': val => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem) throw new Error('[Vuetify] VWindowItem must be used inside VWindow');
    const isTransitioning = shallowRef(false);
    const hasTransition = computed$1(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }

      // Finalize transition state.
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;

        // Remove container height if we are out of transition.
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = undefined;
        }
      }
    }
    function onBeforeTransition() {
      if (isTransitioning.value || !window) {
        return;
      }

      // Initialize transition state here.
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        // Set initial height for height transition.
        window.transitionHeight.value = convertToUnit(window.rootRef.value?.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition(); // This should have the same path as normal transition end.
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        // Do not set height if no transition or cancelled.
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }

        // Set transition target height.
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed$1(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== 'string' ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => _createVNode$3(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => [_withDirectives$1(_createElementVNode$2("div", {
        "class": _normalizeClass(['v-window-item', groupItem.selectedClass.value, props.class]),
        "style": _normalizeStyle(props.style)
      }, [hasContent.value && slots.default?.()]), [[_vShow$1, groupItem.isSelected.value]])]
    }));
    return {
      groupItem
    };
  }
});

const {mergeProps:_mergeProps$1,createVNode:_createVNode$2} = await importShared('vue');
const makeVTabsWindowItemProps = propsFactory({
  ...makeVWindowItemProps()
}, 'VTabsWindowItem');
const VTabsWindowItem = genericComponent()({
  name: 'VTabsWindowItem',
  props: makeVTabsWindowItemProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      const windowItemProps = VWindowItem.filterProps(props);
      return _createVNode$2(VWindowItem, _mergeProps$1({
        "_as": "VTabsWindowItem"
      }, windowItemProps, {
        "class": ['v-tabs-window-item', props.class],
        "style": props.style
      }), slots);
    });
    return {};
  }
});

const {Fragment:_Fragment,mergeProps:_mergeProps,createVNode:_createVNode$1,createElementVNode:_createElementVNode$1} = await importShared('vue');
const {computed,toRef} = await importShared('vue');
function parseItems(items) {
  if (!items) return [];
  return items.map(item => {
    if (!isObject(item)) return {
      text: item,
      value: item
    };
    return item;
  });
}
const makeVTabsProps = propsFactory({
  alignTabs: {
    type: String,
    default: 'start'
  },
  color: String,
  fixedTabs: Boolean,
  items: {
    type: Array,
    default: () => []
  },
  stacked: Boolean,
  bgColor: String,
  grow: Boolean,
  height: {
    type: [Number, String],
    default: undefined
  },
  hideSlider: Boolean,
  sliderColor: String,
  ...makeVSlideGroupProps({
    mandatory: 'force',
    selectedClass: 'v-tab-item--selected'
  }),
  ...makeDensityProps(),
  ...makeTagProps()
}, 'VTabs');
const VTabs = genericComponent()({
  name: 'VTabs',
  props: makeVTabsProps(),
  emits: {
    'update:modelValue': v => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const model = useProxiedModel(props, 'modelValue');
    const items = computed(() => parseItems(props.items));
    const {
      densityClasses
    } = useDensity(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(() => props.bgColor);
    const {
      scopeId
    } = useScopeId();
    provideDefaults({
      VTab: {
        color: toRef(() => props.color),
        direction: toRef(() => props.direction),
        stacked: toRef(() => props.stacked),
        fixed: toRef(() => props.fixedTabs),
        sliderColor: toRef(() => props.sliderColor),
        hideSlider: toRef(() => props.hideSlider)
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      const hasWindow = !!(slots.window || props.items.length > 0);
      return _createElementVNode$1(_Fragment, null, [_createVNode$1(VSlideGroup, _mergeProps(slideGroupProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "class": ['v-tabs', `v-tabs--${props.direction}`, `v-tabs--align-tabs-${props.alignTabs}`, {
          'v-tabs--fixed-tabs': props.fixedTabs,
          'v-tabs--grow': props.grow,
          'v-tabs--stacked': props.stacked
        }, densityClasses.value, backgroundColorClasses.value, props.class],
        "style": [{
          '--v-tabs-height': convertToUnit(props.height)
        }, backgroundColorStyles.value, props.style],
        "role": "tablist",
        "symbol": VTabsSymbol
      }, scopeId, attrs), {
        default: () => [slots.default?.() ?? items.value.map(item => slots.tab?.({
          item
        }) ?? _createVNode$1(VTab, _mergeProps(item, {
          "key": item.text,
          "value": item.value
        }), {
          default: slots[`tab.${item.value}`] ? () => slots[`tab.${item.value}`]?.({
            item
          }) : undefined
        }))]
      }), hasWindow && _createVNode$1(VTabsWindow, _mergeProps({
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "key": "tabs-window"
      }, scopeId), {
        default: () => [items.value.map(item => slots.item?.({
          item
        }) ?? _createVNode$1(VTabsWindowItem, {
          "value": item.value
        }, {
          default: () => slots[`item.${item.value}`]?.({
            item
          })
        })), slots.window?.()]
      })]);
    });
    return {};
  }
});

const {defineComponent:_defineComponent} = await importShared('vue');

const {createVNode:_createVNode,createElementVNode:_createElementVNode,withCtx:_withCtx,createTextVNode:_createTextVNode,vShow:_vShow,withDirectives:_withDirectives,toDisplayString:_toDisplayString,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');

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
      state.scanRes.total = 0;
      state.scanRes.tTotal = 0;
      state.scanRes.mTotal = 0;
      scanResultsRef.value.clearSelectedScans();
    };
    const startScan = (isPageChange = false, isPageSizeChange = false) => {
      console.log("开始扫描", `扫描参数: ${toolbarRef.value.state},isPageChange: ${isPageChange}`);
      state.scaning = true;
      initData();
      if (!isPageChange || isPageSizeChange) {
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
      if (newScanParams.page != state.scanParams.page) {
        isPageChanged = true;
      }
      if (newScanParams.pageSize != state.scanParams.pageSize) {
        isPageSizeChanged = true;
      }
      state.scanParams = newScanParams;
      startScan(isPageChanged, isPageSizeChanged);
    };
    return (_ctx, _cache) => {
                                                            
                                                                        
                                                                  
                                                          
                                                                
                                                                            
                                                          
                                                            
                                                            
                                                                    
      return _openBlock(), _createElementBlock("div", _hoisted_1, [
        _createVNode(VCard, {
          flat: "",
          class: "rounded border"
        }, {
          default: _withCtx(() => [
            _createVNode(VCardTitle, { class: "text-subtitle text-subtitle-1 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
              default: _withCtx(() => [
                _createVNode(VIcon, {
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
            _createVNode(VDivider),
            _createVNode(VCardActions, { class: "plugin-page__actions pr-15" }, {
              default: _withCtx(() => [
                _createVNode(VBtn, {
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
                _createVNode(VDivider, { vertical: "" }),
                _createVNode(VBtn, {
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
                _createVNode(VDivider, { vertical: "" }),
                _createVNode(VBtn, {
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
                _createVNode(VDivider, { vertical: "" }),
                _createVNode(VSpacer),
                _createVNode(VBtn, {
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
                _createVNode(VDivider, { vertical: "" }),
                _createVNode(VBtn, {
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
            _createVNode(VCard, {
              flat: "",
              class: "rounded border"
            }, {
              default: _withCtx(() => [
                _createVNode(VCardTitle, { class: "text-subtitle text-subtitle-2 d-flex align-center px-3 py-2 bg-primary-lighten-5" }, {
                  default: _withCtx(() => [
                    _createVNode(VIcon, {
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
                _createVNode(VTabs, {
                  modelValue: state.listTab,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => state.listTab = $event),
                  grow: ""
                }, {
                  default: _withCtx(() => [
                    _createVNode(VTab, {
                      value: "scan",
                      onClick: _cache[2] || (_cache[2] = ($event) => setTab("scan"))
                    }, {
                      default: _withCtx(() => _cache[13] || (_cache[13] = [
                        _createTextVNode("扫描结果")
                      ])),
                      _: 1,
                      __: [13]
                    }),
                    _createVNode(VTab, {
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
        _createVNode(VSnackbar, {
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

const PageComponent = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-efe3f4ba"]]);

export { Touch as T, VTabs as V, VTab as a, VWindow as b, VWindowItem as c, makeVWindowItemProps as d, PageComponent as default, VPagination as e, makeVTableProps as f, VTable as g, VCheckbox as h, VRadio as i, VRadioGroup as j, VTabsWindow as k, VTabsWindowItem as l, makeVWindowProps as m, VTooltip as n };
