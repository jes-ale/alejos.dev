import { useSSRContext, defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, ref, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderStyle } from 'vue/server-renderer';
import { TransitionRoot } from '@headlessui/vue';
import { Icon } from '@iconify/vue';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SlideInPanel",
  __ssrInlineRender: true,
  props: {
    position: {}
  },
  setup(__props) {
    const toggle = ref(false);
    const menuBtn = () => {
      toggle.value = !toggle.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        show: unref(toggle),
        appear: "",
        as: "template",
        enter: "transform transition ease-in-out duration-[400ms]",
        "enter-from": "opacity-0 -translate-x-full",
        "enter-to": "opacity-100 translate-x-0",
        leave: "transform duration-300 transition ease-in-out",
        "leave-from": "opacity-100 translate-x-0",
        "leave-to": "opacity-0 -translate-x-full "
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<aside class="shadow w-60 h-100% border-r border-black dark:border-white bg-white dark:bg-black no-scrollbar overflow-y-scroll" aria-label="Sidebar"${_scopeId}><button class="text-xl w-full"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "isOpenButton", {}, null, _push2, _parent2, _scopeId);
            _push2(`</button>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</aside>`);
          } else {
            return [
              createVNode("aside", {
                class: "shadow w-60 h-100% border-r border-black dark:border-white bg-white dark:bg-black no-scrollbar overflow-y-scroll",
                "aria-label": "Sidebar"
              }, [
                createVNode("button", {
                  class: "text-xl w-full",
                  onClick: menuBtn
                }, [
                  renderSlot(_ctx.$slots, "isOpenButton")
                ]),
                renderSlot(_ctx.$slots, "content")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div style="${ssrRenderStyle(!unref(toggle) ? null : { display: "none" })}" class="w-5 h-full"><button class="text-xl w-full h-full flex flex-col items-start">`);
      ssrRenderSlot(_ctx.$slots, "isClosedButton", {}, null, _push, _parent);
      _push(`</button></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SlideInPanel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col lg:flex-row" }, _attrs))}> 2023 Jesus Alejos </div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SlideInPanel = _sfc_main$2;
      const _component_RouterView = resolveComponent("RouterView");
      const _component_Footer = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "absolute z-0 no-scrollbar overflow-y-scroll h-screen w-screen text-black dark:text-white text-sm bg-light-50 dark:dark-700 font-sans subpixel-antialiased slashed-zero diagonal-fractions" }, _attrs))}><div class="w-full h-full flex">`);
      _push(ssrRenderComponent(_component_SlideInPanel, {
        class: "h-full w-auto",
        position: "left"
      }, {
        isOpenButton: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-end w-full"${_scopeId}>${ssrInterpolate(_ctx.t("button.menu"))} <div class="transform" i="carbon-caret-left"${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-end w-full" }, [
                createTextVNode(toDisplayString(_ctx.t("button.menu")) + " ", 1),
                createVNode("div", {
                  class: "transform",
                  i: "carbon-caret-left"
                })
              ])
            ];
          }
        }),
        isClosedButton: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-5 h-full flex gap-2 items-center justify-center px-1 py-2 border border-l-0 border-black dark:border-white animate-slide-in-left bg-light-400 dark:dark-900 hover:bg-light-900 dark:bg-dark-200"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Icon), { icon: "carbon:caret-right" }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "w-5 h-full flex gap-2 items-center justify-center px-1 py-2 border border-l-0 border-black dark:border-white animate-slide-in-left bg-light-400 dark:dark-900 hover:bg-light-900 dark:bg-dark-200" }, [
                createVNode(unref(Icon), { icon: "carbon:caret-right" })
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section as="div" class="w-full h-full">`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</section><section class="absolute bottom-0 right-0 p-1"><div class="bg-light-200 dark:bg-dark-200 border border-black dark:border-white rounded h-12 w-12 flex justify-center items-center cursor-pointer bg-light-900 dark:bg-dark-900"><div i="carbon-send"></div></div></section></div>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-d601c611.mjs.map
