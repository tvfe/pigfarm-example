/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _store = __webpack_require__(1);

	var _store2 = _interopRequireDefault(_store);

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = new Vuex.Store(_store2.default);

	new Vue({
	    el: '#app',
	    store: store
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _data = __webpack_require__(2);

	var _data2 = _interopRequireDefault(_data);

	var _view = __webpack_require__(5);

	var _view2 = _interopRequireDefault(_view);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	    state: _extends({}, _data2.default.state, _view2.default.state),
	    getters: _extends({}, _data2.default.getters, _view2.default.getters),
	    mutations: _extends({}, _data2.default.mutations, _view2.default.mutations),
	    actions: _extends({}, _data2.default.actions, _view2.default.actions)
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _consts = __webpack_require__(3);

	var _storeHelper = __webpack_require__(4);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	module.exports = {
	    state: {
	        name: '',
	        age: '',
	        sex: '',
	        description: ''
	    },
	    mutations: _defineProperty({}, _consts.INIT_MUT, function (state, data) {
	        (0, _storeHelper.copyStrings)(data, state, 'name', 'age', 'sex', 'description');
	    }),
	    actions: _defineProperty({}, _consts.INIT_ACT, function (_ref) {
	        var commit = _ref.commit;

	        setTimeout(function () {
	            commit(_consts.INIT_MUT, {
	                name: 'heheheh',
	                age: '18',
	                sex: 'man',
	                description: 'nothing'
	            });
	        }, 2000);
	    })
	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var id = 1;
	function generateUkey() {
	    return 'u' + id++;
	}

	/******* data.js actions *********/
	var INIT_ACT = exports.INIT_ACT = generateUkey();

	/******* view.js actions *********/

	/******* data.js mutations *********/
	var INIT_MUT = exports.INIT_MUT = generateUkey();

	/******* view.js mutations *********/

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function createCopyFunc(type) {
	    return function (a, b) {
	        var args = arguments;
	        for (var i = 2, len = args.length; i < len; i++) {
	            var key = args[i];
	            var val = a[key];
	            if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) == type) {
	                b[key] = val;
	            }
	        }
	    };
	}

	module.exports = {
	    copyNumbers: createCopyFunc('number'),
	    copyStrings: createCopyFunc('string')
	};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";

	module.exports = {};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(9),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/home/liujiaxin/program/front-end/pigfarm-example/src/components/index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-f0c6e240", Component.options)
	  } else {
	    hotAPI.reload("data-v-f0c6e240", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/* globals __VUE_SSR_CONTEXT__ */

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  injectStyles,
	  scopeId,
	  moduleIdentifier /* server only */
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  var hook
	  if (moduleIdentifier) { // server build
	    hook = function (context) {
	      // 2.3 injection
	      context =
	        context || // cached call
	        (this.$vnode && this.$vnode.ssrContext) || // stateful
	        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
	      // 2.2 with runInNewContext: true
	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__
	      }
	      // inject component styles
	      if (injectStyles) {
	        injectStyles.call(this, context)
	      }
	      // register component module identifier for async chunk inferrence
	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier)
	      }
	    }
	    // used by ssr in case component is cached and beforeCreate
	    // never gets called
	    options._ssrRegister = hook
	  } else if (injectStyles) {
	    hook = injectStyles
	  }

	  if (hook) {
	    var functional = options.functional
	    var existing = functional
	      ? options.render
	      : options.beforeCreate
	    if (!functional) {
	      // inject component registration as beforeCreate hook
	      options.beforeCreate = existing
	        ? [].concat(existing, hook)
	        : [hook]
	    } else {
	      // register for functioal component in vue file
	      options.render = function renderWithStyleInjection (h, context) {
	        hook.call(context)
	        return existing(h, context)
	      }
	    }
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _consts = __webpack_require__(3);

	var mapState = Vuex.mapState; //
	//
	//
	//
	//
	//
	//
	//
	//


	module.exports = Vue.component('p-main', {

	    computed: mapState(['name', 'age', 'sex', 'description']),

	    mounted: function mounted() {
	        if (window._vuexState) {
	            this.$store.replaceState(window._vuexState);
	        } else {
	            this.$store.dispatch(_consts.INIT_ACT);
	        }
	    }
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('p', [_vm._v(_vm._s(_vm.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.age))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.sex))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.description))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-f0c6e240", module.exports)
	  }
	}

/***/ })
/******/ ]);