//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  name: 'v-readmore',
  props: {
    collapsedHeight: {
      type: Number,
      default: 320,
    },
  },
  data: function data() {
    return {
      currentHeight: 0,
      isOpen: false,
      isNeed: true,
    }
  },
  mounted: function mounted() {
    this.currentHeight = this.$refs.context.clientHeight;
    this.isNeed = (this.currentHeight > this.collapsedHeight);
  },
  methods: {
    onClickMore: function onClickMore() {
      this.isOpen = false;
    },
    onClickLess: function onClickLess() {
      this.isOpen = true;
    },
  },
  watch: {
    currentHeight: function currentHeight() {
      this.isOpen = this.currentHeight > this.collapsedHeight;
    },
  },
  computed: {
    readmoreStyle: function readmoreStyle() {
      return {
        maxHeight: this.isOpen ? ((this.collapsedHeight) + "px"):'none',
        overflow: 'hidden',
      }
    },
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "readmore-wrapper" },
    [
      _c(
        "div",
        { ref: "context", style: _vm.readmoreStyle },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.isNeed
        ? [
            _vm.isOpen
              ? _c(
                  "div",
                  {
                    staticClass: "link morelink",
                    on: { click: _vm.onClickMore }
                  },
                  [_vm._t("moreLink", [_vm._v("more")])],
                  2
                )
              : _c(
                  "div",
                  {
                    staticClass: "link lesslink",
                    on: { click: _vm.onClickLess }
                  },
                  [_vm._t("lessLink", [_vm._v("less")])],
                  2
                )
          ]
        : _vm._e()
    ],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-2f6c39f5_0", { source: "\n.readmore-wrapper[data-v-2f6c39f5] {\n  position: relative;\n  text-align: center;\n}\n.link[data-v-2f6c39f5] {\n  display: block;\n  width: 100%;\n  bottom: 0;\n  text-align: center;\n}\n.morelink[data-v-2f6c39f5] {\n  padding-top: 40px;\n  position: absolute;\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(55%, #fff), color-stop(90%, #fff));\n  background: linear-gradient(to bottom, transparent 0%, #fff 55%, #fff 90%);\n}\n.lesslink[data-v-2f6c39f5] {\n  padding-top: 10px;\n}\n", map: {"version":3,"sources":["/home/suzuki/src/github.com/sinshutu/v-readmore/src/v-readmore.vue"],"names":[],"mappings":";AA4DA;EACA,mBAAA;EACA,mBAAA;CACA;AACA;EACA,eAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;CACA;AACA;EACA,kBAAA;EACA,mBAAA;EACA,6HAAA;EACA,2EAAA;CACA;AACA;EACA,kBAAA;CACA","file":"v-readmore.vue","sourcesContent":["<template>\n  <div class=\"readmore-wrapper\">\n    <div ref=\"context\" :style=\"readmoreStyle\">\n      <slot></slot>\n    </div>\n    <template v-if=\"isNeed\">\n      <div v-if=\"isOpen\" @click=\"onClickMore\" class=\"link morelink\">\n        <slot name=\"moreLink\">more</slot>\n      </div>\n      <div v-else @click=\"onClickLess\" class=\"link lesslink\">\n        <slot name=\"lessLink\">less</slot>\n      </div>\n    </template>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'v-readmore',\n  props: {\n    collapsedHeight: {\n      type: Number,\n      default: 320,\n    },\n  },\n  data() {\n    return {\n      currentHeight: 0,\n      isOpen: false,\n      isNeed: true,\n    }\n  },\n  mounted() {\n    this.currentHeight = this.$refs.context.clientHeight;\n    this.isNeed = (this.currentHeight > this.collapsedHeight);\n  },\n  methods: {\n    onClickMore() {\n      this.isOpen = false;\n    },\n    onClickLess() {\n      this.isOpen = true;\n    },\n  },\n  watch: {\n    currentHeight() {\n      this.isOpen = this.currentHeight > this.collapsedHeight;\n    },\n  },\n  computed: {\n    readmoreStyle() {\n      return {\n        maxHeight: this.isOpen ? `${this.collapsedHeight}px`:'none',\n        overflow: 'hidden',\n      }\n    },\n  }\n}\n</script>\n<style scoped lang=\"css\">\n.readmore-wrapper {\n  position: relative;\n  text-align: center;\n}\n.link {\n  display: block;\n  width: 100%;\n  bottom: 0;\n  text-align: center;\n}\n.morelink {\n  padding-top: 40px;\n  position: absolute;\n  background: -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(55%, #fff), color-stop(90%, #fff));\n  background: linear-gradient(to bottom, transparent 0%, #fff 55%, #fff 90%);\n}\n.lesslink {\n  padding-top: 10px;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = "data-v-2f6c39f5";
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/home/suzuki/src/github.com/sinshutu/v-readmore/src/v-readmore.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var VReadmore = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

// vue コンポーネントのインポート

// Vue.use() によって実行される install 関数を定義
function install(Vue) {
	if (install.installed) { return; }
	install.installed = true;
	Vue.component('VReadmore', VReadmore);
}

// Vue.use() のためのモジュール定義を作成
// Create module definition for Vue.use()
var plugin = {
	install: install,
};

// vue が見つかった場合に自動インストールする (ブラウザで <script> タグを用いた場合等)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default plugin;
export { VReadmore };
