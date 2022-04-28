function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.aspect-w-16 {\n  position: relative;\n  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n  --tw-aspect-w: 16;\n}\r\n.aspect-w-16 > * {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\r\n.aspect-h-9 {\n  --tw-aspect-h: 9;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.h-fit {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\r\n.w-fit {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\r\n.flex-auto {\n  flex: 1 1 auto;\n}\r\n.flex-row {\n  flex-direction: row;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.gap-2 {\n  gap: 0.5rem;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.p-4 {\n  padding: 1rem;\n}\r\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\r\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\r\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.transition {\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-300 {\n  transition-duration: 300ms;\n}";
styleInject(css_248z);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.0.0-fc46dba67-20220329";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.0.0-fc46dba67-20220329';

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		}
} (react_development, react_development.exports));
	return react_development.exports;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReact_production_min();
	} else {
	  module.exports = requireReact_development();
	}
} (react));

var React = /*@__PURE__*/getDefaultExportFromCjs(react.exports);

const Column = ({ className, children, onClick }) => {
    return (React.createElement("div", Object.assign({ className: `flex flex-col ${className}` }, { onClick }), children));
};

const Grid = ({ className, children, onClick }) => {
    return (React.createElement("div", Object.assign({ className: `grid ${className}` }, { onClick }), children));
};

const Row = ({ className, children, onClick }) => {
    return (React.createElement("div", Object.assign({ className: `flex flex-row ${className}` }, { onClick }), children));
};

const Layout = ({ type = 'column', className, children, onClick, }) => {
    if (type.toLocaleLowerCase() == 'column') {
        return React.createElement(Column, Object.assign({}, { className, onClick }), children);
    }
    else if (type.toLocaleLowerCase() == 'row') {
        return React.createElement(Row, Object.assign({}, { className, onClick }), children);
    }
    else if (type.toLocaleLowerCase() == 'grid') {
        return React.createElement(Grid, Object.assign({}, { className, onClick }), children);
    }
    else {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Invalid Layout Type")));
    }
};

const Page = ({ className, children }) => {
    return (React.createElement(Layout, { className: `flex-auto ${className}` }, children));
};

var index$2 = { Layout, Page };

const Button = ({ label, icon, className, onClick, }) => {
    return (React.createElement("button", Object.assign({ className: `${label ? (icon ? 'px-4 py-2 gap-2' : 'px-4 py-2') : 'p-4'} transition duration-300 w-fit h-fit ${className}` }, { onClick }),
        icon,
        label));
};

const Card = ({ className, children, onClick }) => {
    return (React.createElement("div", Object.assign({}, { onClick }, { className: `rounded shadow transition duration-300 ${className}` }), children));
};

var lib = {};

var players = {};

var utils = {};

var loadScript = function load (src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');

  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  opts = opts || {};
  cb = cb || function() {};

  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;

  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }

  if (opts.text) {
    script.text = '' + opts.text;
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script);
};

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd (script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}

function ieOnEnd (script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return
    this.onreadystatechange = null;
    cb(null, script); // there is no way to catch loading errors in IE8
  };
}

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

Object.defineProperty(utils, "__esModule", {
  value: true
});
utils.parseStartTime = parseStartTime;
utils.parseEndTime = parseEndTime;
utils.randomString = randomString;
utils.queryString = queryString;
utils.getSDK = getSDK;
utils.getConfig = getConfig;
utils.omit = omit;
utils.callPlayer = callPlayer;
utils.isMediaStream = isMediaStream;
utils.isBlobUrl = isBlobUrl;
utils.supportsWebKitPresentationMode = supportsWebKitPresentationMode;

var _loadScript = _interopRequireDefault$2(loadScript);

var _deepmerge$1 = _interopRequireDefault$2(cjs);

function _interopRequireDefault$2(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MATCH_START_QUERY = /[?&#](?:start|t)=([0-9hms]+)/;
var MATCH_END_QUERY = /[?&#]end=([0-9hms]+)/;
var MATCH_START_STAMP = /(\d+)(h|m|s)/g;
var MATCH_NUMERIC = /^\d+$/; // Parse YouTube URL for a start time param, ie ?t=1h14m30s
// and return the start time in seconds

function parseTimeParam(url, pattern) {
  if (url instanceof Array) {
    return undefined;
  }

  var match = url.match(pattern);

  if (match) {
    var stamp = match[1];

    if (stamp.match(MATCH_START_STAMP)) {
      return parseTimeString(stamp);
    }

    if (MATCH_NUMERIC.test(stamp)) {
      return parseInt(stamp);
    }
  }

  return undefined;
}

function parseTimeString(stamp) {
  var seconds = 0;
  var array = MATCH_START_STAMP.exec(stamp);

  while (array !== null) {
    var _array = array,
        _array2 = _slicedToArray(_array, 3),
        count = _array2[1],
        period = _array2[2];

    if (period === 'h') seconds += parseInt(count, 10) * 60 * 60;
    if (period === 'm') seconds += parseInt(count, 10) * 60;
    if (period === 's') seconds += parseInt(count, 10);
    array = MATCH_START_STAMP.exec(stamp);
  }

  return seconds;
}

function parseStartTime(url) {
  return parseTimeParam(url, MATCH_START_QUERY);
}

function parseEndTime(url) {
  return parseTimeParam(url, MATCH_END_QUERY);
} // http://stackoverflow.com/a/38622545


function randomString() {
  return Math.random().toString(36).substr(2, 5);
}

function queryString(object) {
  return Object.keys(object).map(function (key) {
    return "".concat(key, "=").concat(object[key]);
  }).join('&');
}

function getGlobal(key) {
  if (window[key]) {
    return window[key];
  }

  if (window.exports && window.exports[key]) {
    return window.exports[key];
  }

  if (window.module && window.module.exports && window.module.exports[key]) {
    return window.module.exports[key];
  }

  return null;
} // Util function to load an external SDK
// or return the SDK if it is already loaded


var requests = {};

function getSDK(url, sdkGlobal) {
  var sdkReady = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var isLoaded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {
    return true;
  };
  var fetchScript = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _loadScript["default"];
  var existingGlobal = getGlobal(sdkGlobal);

  if (existingGlobal && isLoaded(existingGlobal)) {
    return Promise.resolve(existingGlobal);
  }

  return new Promise(function (resolve, reject) {
    // If we are already loading the SDK, add the resolve and reject
    // functions to the existing array of requests
    if (requests[url]) {
      requests[url].push({
        resolve: resolve,
        reject: reject
      });
      return;
    }

    requests[url] = [{
      resolve: resolve,
      reject: reject
    }];

    var onLoaded = function onLoaded(sdk) {
      // When loaded, resolve all pending request promises
      requests[url].forEach(function (request) {
        return request.resolve(sdk);
      });
    };

    if (sdkReady) {
      var previousOnReady = window[sdkReady];

      window[sdkReady] = function () {
        if (previousOnReady) previousOnReady();
        onLoaded(getGlobal(sdkGlobal));
      };
    }

    fetchScript(url, function (err) {
      if (err) {
        // Loading the SDK failed – reject all requests and
        // reset the array of requests for this SDK
        requests[url].forEach(function (request) {
          return request.reject(err);
        });
        requests[url] = null;
      } else if (!sdkReady) {
        onLoaded(getGlobal(sdkGlobal));
      }
    });
  });
}

function getConfig(props, defaultProps) {
  return (0, _deepmerge$1["default"])(defaultProps.config, props.config);
}

function omit(object) {
  var _ref;

  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var omitKeys = (_ref = []).concat.apply(_ref, arrays);

  var output = {};
  var keys = Object.keys(object);

  for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
    var key = _keys[_i2];

    if (omitKeys.indexOf(key) === -1) {
      output[key] = object[key];
    }
  }

  return output;
}

function callPlayer(method) {
  var _this$player;

  // Util method for calling a method on this.player
  // but guard against errors and console.warn instead
  if (!this.player || !this.player[method]) {
    var message = "ReactPlayer: ".concat(this.constructor.displayName, " player could not call %c").concat(method, "%c \u2013 ");

    if (!this.player) {
      message += 'The player was not available';
    } else if (!this.player[method]) {
      message += 'The method was not available';
    }

    console.warn(message, 'font-weight: bold', '');
    return null;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return (_this$player = this.player)[method].apply(_this$player, args);
}

function isMediaStream(url) {
  return typeof window !== 'undefined' && typeof window.MediaStream !== 'undefined' && url instanceof window.MediaStream;
}

function isBlobUrl(url) {
  return /^blob:/.test(url);
}

function supportsWebKitPresentationMode() {
  var video = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('video');
  // Check if Safari supports PiP, and is not on mobile (other than iPad)
  // iPhone safari appears to "support" PiP through the check, however PiP does not function
  var notMobile = /iPhone|iPod/.test(navigator.userAgent) === false;
  return video.webkitSupportsPresentationMode && typeof video.webkitSetPresentationMode === 'function' && notMobile;
}

var patterns = {};

Object.defineProperty(patterns, "__esModule", {
  value: true
});
patterns.canPlay = patterns.FLV_EXTENSIONS = patterns.DASH_EXTENSIONS = patterns.HLS_EXTENSIONS = patterns.VIDEO_EXTENSIONS = patterns.AUDIO_EXTENSIONS = patterns.MATCH_URL_KALTURA = patterns.MATCH_URL_VIDYARD = patterns.MATCH_URL_MIXCLOUD = patterns.MATCH_URL_DAILYMOTION = patterns.MATCH_URL_TWITCH_CHANNEL = patterns.MATCH_URL_TWITCH_VIDEO = patterns.MATCH_URL_WISTIA = patterns.MATCH_URL_STREAMABLE = patterns.MATCH_URL_FACEBOOK_WATCH = patterns.MATCH_URL_FACEBOOK = patterns.MATCH_URL_VIMEO = patterns.MATCH_URL_SOUNDCLOUD = patterns.MATCH_URL_YOUTUBE = void 0;

var _utils$1 = utils;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var MATCH_URL_YOUTUBE = /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//;
patterns.MATCH_URL_YOUTUBE = MATCH_URL_YOUTUBE;
var MATCH_URL_SOUNDCLOUD = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/;
patterns.MATCH_URL_SOUNDCLOUD = MATCH_URL_SOUNDCLOUD;
var MATCH_URL_VIMEO = /vimeo\.com\/(?!progressive_redirect).+/;
patterns.MATCH_URL_VIMEO = MATCH_URL_VIMEO;
var MATCH_URL_FACEBOOK = /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/;
patterns.MATCH_URL_FACEBOOK = MATCH_URL_FACEBOOK;
var MATCH_URL_FACEBOOK_WATCH = /^https?:\/\/fb\.watch\/.+$/;
patterns.MATCH_URL_FACEBOOK_WATCH = MATCH_URL_FACEBOOK_WATCH;
var MATCH_URL_STREAMABLE = /streamable\.com\/([a-z0-9]+)$/;
patterns.MATCH_URL_STREAMABLE = MATCH_URL_STREAMABLE;
var MATCH_URL_WISTIA = /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?(.*)$/;
patterns.MATCH_URL_WISTIA = MATCH_URL_WISTIA;
var MATCH_URL_TWITCH_VIDEO = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/;
patterns.MATCH_URL_TWITCH_VIDEO = MATCH_URL_TWITCH_VIDEO;
var MATCH_URL_TWITCH_CHANNEL = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/;
patterns.MATCH_URL_TWITCH_CHANNEL = MATCH_URL_TWITCH_CHANNEL;
var MATCH_URL_DAILYMOTION = /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/;
patterns.MATCH_URL_DAILYMOTION = MATCH_URL_DAILYMOTION;
var MATCH_URL_MIXCLOUD = /mixcloud\.com\/([^/]+\/[^/]+)/;
patterns.MATCH_URL_MIXCLOUD = MATCH_URL_MIXCLOUD;
var MATCH_URL_VIDYARD = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/;
patterns.MATCH_URL_VIDYARD = MATCH_URL_VIDYARD;
var MATCH_URL_KALTURA = /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_]+)$/;
patterns.MATCH_URL_KALTURA = MATCH_URL_KALTURA;
var AUDIO_EXTENSIONS = /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
patterns.AUDIO_EXTENSIONS = AUDIO_EXTENSIONS;
var VIDEO_EXTENSIONS = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;
patterns.VIDEO_EXTENSIONS = VIDEO_EXTENSIONS;
var HLS_EXTENSIONS = /\.(m3u8)($|\?)/i;
patterns.HLS_EXTENSIONS = HLS_EXTENSIONS;
var DASH_EXTENSIONS = /\.(mpd)($|\?)/i;
patterns.DASH_EXTENSIONS = DASH_EXTENSIONS;
var FLV_EXTENSIONS = /\.(flv)($|\?)/i;
patterns.FLV_EXTENSIONS = FLV_EXTENSIONS;

var canPlayFile = function canPlayFile(url) {
  if (url instanceof Array) {
    var _iterator = _createForOfIteratorHelper(url),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (typeof item === 'string' && canPlayFile(item)) {
          return true;
        }

        if (canPlayFile(item.src)) {
          return true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return false;
  }

  if ((0, _utils$1.isMediaStream)(url) || (0, _utils$1.isBlobUrl)(url)) {
    return true;
  }

  return AUDIO_EXTENSIONS.test(url) || VIDEO_EXTENSIONS.test(url) || HLS_EXTENSIONS.test(url) || DASH_EXTENSIONS.test(url) || FLV_EXTENSIONS.test(url);
};

var canPlay = {
  youtube: function youtube(url) {
    if (url instanceof Array) {
      return url.every(function (item) {
        return MATCH_URL_YOUTUBE.test(item);
      });
    }

    return MATCH_URL_YOUTUBE.test(url);
  },
  soundcloud: function soundcloud(url) {
    return MATCH_URL_SOUNDCLOUD.test(url) && !AUDIO_EXTENSIONS.test(url);
  },
  vimeo: function vimeo(url) {
    return MATCH_URL_VIMEO.test(url) && !VIDEO_EXTENSIONS.test(url) && !HLS_EXTENSIONS.test(url);
  },
  facebook: function facebook(url) {
    return MATCH_URL_FACEBOOK.test(url) || MATCH_URL_FACEBOOK_WATCH.test(url);
  },
  streamable: function streamable(url) {
    return MATCH_URL_STREAMABLE.test(url);
  },
  wistia: function wistia(url) {
    return MATCH_URL_WISTIA.test(url);
  },
  twitch: function twitch(url) {
    return MATCH_URL_TWITCH_VIDEO.test(url) || MATCH_URL_TWITCH_CHANNEL.test(url);
  },
  dailymotion: function dailymotion(url) {
    return MATCH_URL_DAILYMOTION.test(url);
  },
  mixcloud: function mixcloud(url) {
    return MATCH_URL_MIXCLOUD.test(url);
  },
  vidyard: function vidyard(url) {
    return MATCH_URL_VIDYARD.test(url);
  },
  kaltura: function kaltura(url) {
    return MATCH_URL_KALTURA.test(url);
  },
  file: canPlayFile
};
patterns.canPlay = canPlay;

var YouTube = {};

var hasRequiredYouTube;

function requireYouTube () {
	if (hasRequiredYouTube) return YouTube;
	hasRequiredYouTube = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

		function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

		function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

		function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

		function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

		function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://www.youtube.com/iframe_api';
		var SDK_GLOBAL = 'YT';
		var SDK_GLOBAL_READY = 'onYouTubeIframeAPIReady';
		var MATCH_PLAYLIST = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/;
		var MATCH_USER_UPLOADS = /user\/([a-zA-Z0-9_-]+)\/?/;
		var MATCH_NOCOOKIE = /youtube-nocookie\.com/;
		var NOCOOKIE_HOST = 'https://www.youtube-nocookie.com';

		var YouTube = /*#__PURE__*/function (_Component) {
		  _inherits(YouTube, _Component);

		  var _super = _createSuper(YouTube);

		  function YouTube() {
		    var _this;

		    _classCallCheck(this, YouTube);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "parsePlaylist", function (url) {
		      if (url instanceof Array) {
		        return {
		          listType: 'playlist',
		          playlist: url.map(_this.getID).join(',')
		        };
		      }

		      if (MATCH_PLAYLIST.test(url)) {
		        var _url$match = url.match(MATCH_PLAYLIST),
		            _url$match2 = _slicedToArray(_url$match, 2),
		            playlistId = _url$match2[1];

		        return {
		          listType: 'playlist',
		          list: playlistId.replace(/^UC/, 'UU')
		        };
		      }

		      if (MATCH_USER_UPLOADS.test(url)) {
		        var _url$match3 = url.match(MATCH_USER_UPLOADS),
		            _url$match4 = _slicedToArray(_url$match3, 2),
		            username = _url$match4[1];

		        return {
		          listType: 'user_uploads',
		          list: username
		        };
		      }

		      return {};
		    });

		    _defineProperty(_assertThisInitialized(_this), "onStateChange", function (event) {
		      var data = event.data;
		      var _this$props = _this.props,
		          onPlay = _this$props.onPlay,
		          onPause = _this$props.onPause,
		          onBuffer = _this$props.onBuffer,
		          onBufferEnd = _this$props.onBufferEnd,
		          onEnded = _this$props.onEnded,
		          onReady = _this$props.onReady,
		          loop = _this$props.loop,
		          _this$props$config = _this$props.config,
		          playerVars = _this$props$config.playerVars,
		          onUnstarted = _this$props$config.onUnstarted;
		      var _window$SDK_GLOBAL$Pl = window[SDK_GLOBAL].PlayerState,
		          UNSTARTED = _window$SDK_GLOBAL$Pl.UNSTARTED,
		          PLAYING = _window$SDK_GLOBAL$Pl.PLAYING,
		          PAUSED = _window$SDK_GLOBAL$Pl.PAUSED,
		          BUFFERING = _window$SDK_GLOBAL$Pl.BUFFERING,
		          ENDED = _window$SDK_GLOBAL$Pl.ENDED,
		          CUED = _window$SDK_GLOBAL$Pl.CUED;
		      if (data === UNSTARTED) onUnstarted();

		      if (data === PLAYING) {
		        onPlay();
		        onBufferEnd();
		      }

		      if (data === PAUSED) onPause();
		      if (data === BUFFERING) onBuffer();

		      if (data === ENDED) {
		        var isPlaylist = !!_this.callPlayer('getPlaylist'); // Only loop manually if not playing a playlist

		        if (loop && !isPlaylist) {
		          if (playerVars.start) {
		            _this.seekTo(playerVars.start);
		          } else {
		            _this.play();
		          }
		        }

		        onEnded();
		      }

		      if (data === CUED) onReady();
		    });

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.callPlayer('mute');
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      _this.callPlayer('unMute');
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
		      _this.container = container;
		    });

		    return _this;
		  }

		  _createClass(YouTube, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "getID",
		    value: function getID(url) {
		      if (!url || url instanceof Array || MATCH_PLAYLIST.test(url)) {
		        return null;
		      }

		      return url.match(_patterns.MATCH_URL_YOUTUBE)[1];
		    }
		  }, {
		    key: "load",
		    value: function load(url, isReady) {
		      var _this2 = this;

		      var _this$props2 = this.props,
		          playing = _this$props2.playing,
		          muted = _this$props2.muted,
		          playsinline = _this$props2.playsinline,
		          controls = _this$props2.controls,
		          loop = _this$props2.loop,
		          config = _this$props2.config,
		          _onError = _this$props2.onError;
		      var playerVars = config.playerVars,
		          embedOptions = config.embedOptions;
		      var id = this.getID(url);

		      if (isReady) {
		        if (MATCH_PLAYLIST.test(url) || MATCH_USER_UPLOADS.test(url) || url instanceof Array) {
		          this.player.loadPlaylist(this.parsePlaylist(url));
		          return;
		        }

		        this.player.cueVideoById({
		          videoId: id,
		          startSeconds: (0, _utils.parseStartTime)(url) || playerVars.start,
		          endSeconds: (0, _utils.parseEndTime)(url) || playerVars.end
		        });
		        return;
		      }

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (YT) {
		        return YT.loaded;
		      }).then(function (YT) {
		        if (!_this2.container) return;
		        _this2.player = new YT.Player(_this2.container, _objectSpread({
		          width: '100%',
		          height: '100%',
		          videoId: id,
		          playerVars: _objectSpread(_objectSpread({
		            autoplay: playing ? 1 : 0,
		            mute: muted ? 1 : 0,
		            controls: controls ? 1 : 0,
		            start: (0, _utils.parseStartTime)(url),
		            end: (0, _utils.parseEndTime)(url),
		            origin: window.location.origin,
		            playsinline: playsinline ? 1 : 0
		          }, _this2.parsePlaylist(url)), playerVars),
		          events: {
		            onReady: function onReady() {
		              if (loop) {
		                _this2.player.setLoop(true); // Enable playlist looping

		              }

		              _this2.props.onReady();
		            },
		            onPlaybackRateChange: function onPlaybackRateChange(event) {
		              return _this2.props.onPlaybackRateChange(event.data);
		            },
		            onStateChange: _this2.onStateChange,
		            onError: function onError(event) {
		              return _onError(event.data);
		            }
		          },
		          host: MATCH_NOCOOKIE.test(url) ? NOCOOKIE_HOST : undefined
		        }, embedOptions));
		      }, _onError);

		      if (embedOptions.events) {
		        console.warn('Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause');
		      }
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('playVideo');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pauseVideo');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {
		      if (!document.body.contains(this.callPlayer('getIframe'))) return;
		      this.callPlayer('stopVideo');
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(amount) {
		      this.callPlayer('seekTo', amount);

		      if (!this.props.playing) {
		        this.pause();
		      }
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction * 100);
		    }
		  }, {
		    key: "setPlaybackRate",
		    value: function setPlaybackRate(rate) {
		      this.callPlayer('setPlaybackRate', rate);
		    }
		  }, {
		    key: "setLoop",
		    value: function setLoop(loop) {
		      this.callPlayer('setLoop', loop);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.callPlayer('getDuration');
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.callPlayer('getCurrentTime');
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return this.callPlayer('getVideoLoadedFraction') * this.getDuration();
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var display = this.props.display;
		      var style = {
		        width: '100%',
		        height: '100%',
		        display: display
		      };
		      return /*#__PURE__*/_react["default"].createElement("div", {
		        style: style
		      }, /*#__PURE__*/_react["default"].createElement("div", {
		        ref: this.ref
		      }));
		    }
		  }]);

		  return YouTube;
		}(_react.Component);

		exports["default"] = YouTube;

		_defineProperty(YouTube, "displayName", 'YouTube');

		_defineProperty(YouTube, "canPlay", _patterns.canPlay.youtube);
} (YouTube));
	return YouTube;
}

var SoundCloud = {};

var hasRequiredSoundCloud;

function requireSoundCloud () {
	if (hasRequiredSoundCloud) return SoundCloud;
	hasRequiredSoundCloud = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://w.soundcloud.com/player/api.js';
		var SDK_GLOBAL = 'SC';

		var SoundCloud = /*#__PURE__*/function (_Component) {
		  _inherits(SoundCloud, _Component);

		  var _super = _createSuper(SoundCloud);

		  function SoundCloud() {
		    var _this;

		    _classCallCheck(this, SoundCloud);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "duration", null);

		    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

		    _defineProperty(_assertThisInitialized(_this), "fractionLoaded", null);

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.setVolume(0);
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      if (_this.props.volume !== null) {
		        _this.setVolume(_this.props.volume);
		      }
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
		      _this.iframe = iframe;
		    });

		    return _this;
		  }

		  _createClass(SoundCloud, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url, isReady) {
		      var _this2 = this;

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (SC) {
		        if (!_this2.iframe) return;
		        var _SC$Widget$Events = SC.Widget.Events,
		            PLAY = _SC$Widget$Events.PLAY,
		            PLAY_PROGRESS = _SC$Widget$Events.PLAY_PROGRESS,
		            PAUSE = _SC$Widget$Events.PAUSE,
		            FINISH = _SC$Widget$Events.FINISH,
		            ERROR = _SC$Widget$Events.ERROR;

		        if (!isReady) {
		          _this2.player = SC.Widget(_this2.iframe);

		          _this2.player.bind(PLAY, _this2.props.onPlay);

		          _this2.player.bind(PAUSE, function () {
		            var remaining = _this2.duration - _this2.currentTime;

		            if (remaining < 0.05) {
		              // Prevent onPause firing right before onEnded
		              return;
		            }

		            _this2.props.onPause();
		          });

		          _this2.player.bind(PLAY_PROGRESS, function (e) {
		            _this2.currentTime = e.currentPosition / 1000;
		            _this2.fractionLoaded = e.loadedProgress;
		          });

		          _this2.player.bind(FINISH, function () {
		            return _this2.props.onEnded();
		          });

		          _this2.player.bind(ERROR, function (e) {
		            return _this2.props.onError(e);
		          });
		        }

		        _this2.player.load(url, _objectSpread(_objectSpread({}, _this2.props.config.options), {}, {
		          callback: function callback() {
		            _this2.player.getDuration(function (duration) {
		              _this2.duration = duration / 1000;

		              _this2.props.onReady();
		            });
		          }
		        }));
		      });
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {// Nothing to do
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('seekTo', seconds * 1000);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction * 100);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.duration;
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.currentTime;
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return this.fractionLoaded * this.duration;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var display = this.props.display;
		      var style = {
		        width: '100%',
		        height: '100%',
		        display: display
		      };
		      return /*#__PURE__*/_react["default"].createElement("iframe", {
		        ref: this.ref,
		        src: "https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),
		        style: style,
		        frameBorder: 0,
		        allow: "autoplay"
		      });
		    }
		  }]);

		  return SoundCloud;
		}(_react.Component);

		exports["default"] = SoundCloud;

		_defineProperty(SoundCloud, "displayName", 'SoundCloud');

		_defineProperty(SoundCloud, "canPlay", _patterns.canPlay.soundcloud);

		_defineProperty(SoundCloud, "loopOnEnded", true);
} (SoundCloud));
	return SoundCloud;
}

var Vimeo = {};

var hasRequiredVimeo;

function requireVimeo () {
	if (hasRequiredVimeo) return Vimeo;
	hasRequiredVimeo = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://player.vimeo.com/api/player.js';
		var SDK_GLOBAL = 'Vimeo';

		var Vimeo = /*#__PURE__*/function (_Component) {
		  _inherits(Vimeo, _Component);

		  var _super = _createSuper(Vimeo);

		  function Vimeo() {
		    var _this;

		    _classCallCheck(this, Vimeo);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "duration", null);

		    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

		    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.setVolume(0);
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      if (_this.props.volume !== null) {
		        _this.setVolume(_this.props.volume);
		      }
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
		      _this.container = container;
		    });

		    return _this;
		  }

		  _createClass(Vimeo, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url) {
		      var _this2 = this;

		      this.duration = null;
		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Vimeo) {
		        if (!_this2.container) return;
		        var _this2$props$config = _this2.props.config,
		            playerOptions = _this2$props$config.playerOptions,
		            title = _this2$props$config.title;
		        _this2.player = new Vimeo.Player(_this2.container, _objectSpread({
		          url: url,
		          autoplay: _this2.props.playing,
		          muted: _this2.props.muted,
		          loop: _this2.props.loop,
		          playsinline: _this2.props.playsinline,
		          controls: _this2.props.controls
		        }, playerOptions));

		        _this2.player.ready().then(function () {
		          var iframe = _this2.container.querySelector('iframe');

		          iframe.style.width = '100%';
		          iframe.style.height = '100%';

		          if (title) {
		            iframe.title = title;
		          }
		        })["catch"](_this2.props.onError);

		        _this2.player.on('loaded', function () {
		          _this2.props.onReady();

		          _this2.refreshDuration();
		        });

		        _this2.player.on('play', function () {
		          _this2.props.onPlay();

		          _this2.refreshDuration();
		        });

		        _this2.player.on('pause', _this2.props.onPause);

		        _this2.player.on('seeked', function (e) {
		          return _this2.props.onSeek(e.seconds);
		        });

		        _this2.player.on('ended', _this2.props.onEnded);

		        _this2.player.on('error', _this2.props.onError);

		        _this2.player.on('timeupdate', function (_ref) {
		          var seconds = _ref.seconds;
		          _this2.currentTime = seconds;
		        });

		        _this2.player.on('progress', function (_ref2) {
		          var seconds = _ref2.seconds;
		          _this2.secondsLoaded = seconds;
		        });

		        _this2.player.on('bufferstart', _this2.props.onBuffer);

		        _this2.player.on('bufferend', _this2.props.onBufferEnd);
		      }, this.props.onError);
		    }
		  }, {
		    key: "refreshDuration",
		    value: function refreshDuration() {
		      var _this3 = this;

		      this.player.getDuration().then(function (duration) {
		        _this3.duration = duration;
		      });
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      var promise = this.callPlayer('play');

		      if (promise) {
		        promise["catch"](this.props.onError);
		      }
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {
		      this.callPlayer('unload');
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('setCurrentTime', seconds);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction);
		    }
		  }, {
		    key: "setLoop",
		    value: function setLoop(loop) {
		      this.callPlayer('setLoop', loop);
		    }
		  }, {
		    key: "setPlaybackRate",
		    value: function setPlaybackRate(rate) {
		      this.callPlayer('setPlaybackRate', rate);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.duration;
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.currentTime;
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return this.secondsLoaded;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var display = this.props.display;
		      var style = {
		        width: '100%',
		        height: '100%',
		        overflow: 'hidden',
		        display: display
		      };
		      return /*#__PURE__*/_react["default"].createElement("div", {
		        key: this.props.url,
		        ref: this.ref,
		        style: style
		      });
		    }
		  }]);

		  return Vimeo;
		}(_react.Component);

		exports["default"] = Vimeo;

		_defineProperty(Vimeo, "displayName", 'Vimeo');

		_defineProperty(Vimeo, "canPlay", _patterns.canPlay.vimeo);

		_defineProperty(Vimeo, "forceLoad", true);
} (Vimeo));
	return Vimeo;
}

var Facebook = {};

var hasRequiredFacebook;

function requireFacebook () {
	if (hasRequiredFacebook) return Facebook;
	hasRequiredFacebook = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://connect.facebook.net/en_US/sdk.js';
		var SDK_GLOBAL = 'FB';
		var SDK_GLOBAL_READY = 'fbAsyncInit';
		var PLAYER_ID_PREFIX = 'facebook-player-';

		var Facebook = /*#__PURE__*/function (_Component) {
		  _inherits(Facebook, _Component);

		  var _super = _createSuper(Facebook);

		  function Facebook() {
		    var _this;

		    _classCallCheck(this, Facebook);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.callPlayer('mute');
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      _this.callPlayer('unmute');
		    });

		    return _this;
		  }

		  _createClass(Facebook, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url, isReady) {
		      var _this2 = this;

		      if (isReady) {
		        (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
		          return FB.XFBML.parse();
		        });
		        return;
		      }

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (FB) {
		        FB.init({
		          appId: _this2.props.config.appId,
		          xfbml: true,
		          version: _this2.props.config.version
		        });
		        FB.Event.subscribe('xfbml.render', function (msg) {
		          // Here we know the SDK has loaded, even if onReady/onPlay
		          // is not called due to a video that cannot be embedded
		          _this2.props.onLoaded();
		        });
		        FB.Event.subscribe('xfbml.ready', function (msg) {
		          if (msg.type === 'video' && msg.id === _this2.playerID) {
		            _this2.player = msg.instance;

		            _this2.player.subscribe('startedPlaying', _this2.props.onPlay);

		            _this2.player.subscribe('paused', _this2.props.onPause);

		            _this2.player.subscribe('finishedPlaying', _this2.props.onEnded);

		            _this2.player.subscribe('startedBuffering', _this2.props.onBuffer);

		            _this2.player.subscribe('finishedBuffering', _this2.props.onBufferEnd);

		            _this2.player.subscribe('error', _this2.props.onError);

		            if (_this2.props.muted) {
		              _this2.callPlayer('mute');
		            } else {
		              _this2.callPlayer('unmute');
		            }

		            _this2.props.onReady(); // For some reason Facebook have added `visibility: hidden`
		            // to the iframe when autoplay fails, so here we set it back


		            document.getElementById(_this2.playerID).querySelector('iframe').style.visibility = 'visible';
		          }
		        });
		      });
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {// Nothing to do
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('seek', seconds);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.callPlayer('getDuration');
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.callPlayer('getCurrentPosition');
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return null;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var attributes = this.props.config.attributes;
		      var style = {
		        width: '100%',
		        height: '100%'
		      };
		      return /*#__PURE__*/_react["default"].createElement("div", _extends({
		        style: style,
		        id: this.playerID,
		        className: "fb-video",
		        "data-href": this.props.url,
		        "data-autoplay": this.props.playing ? 'true' : 'false',
		        "data-allowfullscreen": "true",
		        "data-controls": this.props.controls ? 'true' : 'false'
		      }, attributes));
		    }
		  }]);

		  return Facebook;
		}(_react.Component);

		exports["default"] = Facebook;

		_defineProperty(Facebook, "displayName", 'Facebook');

		_defineProperty(Facebook, "canPlay", _patterns.canPlay.facebook);

		_defineProperty(Facebook, "loopOnEnded", true);
} (Facebook));
	return Facebook;
}

var Streamable = {};

var hasRequiredStreamable;

function requireStreamable () {
	if (hasRequiredStreamable) return Streamable;
	hasRequiredStreamable = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
		var SDK_GLOBAL = 'playerjs';

		var Streamable = /*#__PURE__*/function (_Component) {
		  _inherits(Streamable, _Component);

		  var _super = _createSuper(Streamable);

		  function Streamable() {
		    var _this;

		    _classCallCheck(this, Streamable);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "duration", null);

		    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

		    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.callPlayer('mute');
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      _this.callPlayer('unmute');
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
		      _this.iframe = iframe;
		    });

		    return _this;
		  }

		  _createClass(Streamable, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url) {
		      var _this2 = this;

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
		        if (!_this2.iframe) return;
		        _this2.player = new playerjs.Player(_this2.iframe);

		        _this2.player.setLoop(_this2.props.loop);

		        _this2.player.on('ready', _this2.props.onReady);

		        _this2.player.on('play', _this2.props.onPlay);

		        _this2.player.on('pause', _this2.props.onPause);

		        _this2.player.on('seeked', _this2.props.onSeek);

		        _this2.player.on('ended', _this2.props.onEnded);

		        _this2.player.on('error', _this2.props.onError);

		        _this2.player.on('timeupdate', function (_ref) {
		          var duration = _ref.duration,
		              seconds = _ref.seconds;
		          _this2.duration = duration;
		          _this2.currentTime = seconds;
		        });

		        _this2.player.on('buffered', function (_ref2) {
		          var percent = _ref2.percent;

		          if (_this2.duration) {
		            _this2.secondsLoaded = _this2.duration * percent;
		          }
		        });

		        if (_this2.props.muted) {
		          _this2.player.mute();
		        }
		      }, this.props.onError);
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {// Nothing to do
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('setCurrentTime', seconds);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction * 100);
		    }
		  }, {
		    key: "setLoop",
		    value: function setLoop(loop) {
		      this.callPlayer('setLoop', loop);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.duration;
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.currentTime;
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return this.secondsLoaded;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var id = this.props.url.match(_patterns.MATCH_URL_STREAMABLE)[1];
		      var style = {
		        width: '100%',
		        height: '100%'
		      };
		      return /*#__PURE__*/_react["default"].createElement("iframe", {
		        ref: this.ref,
		        src: "https://streamable.com/o/".concat(id),
		        frameBorder: "0",
		        scrolling: "no",
		        style: style,
		        allowFullScreen: true
		      });
		    }
		  }]);

		  return Streamable;
		}(_react.Component);

		exports["default"] = Streamable;

		_defineProperty(Streamable, "displayName", 'Streamable');

		_defineProperty(Streamable, "canPlay", _patterns.canPlay.streamable);
} (Streamable));
	return Streamable;
}

var Wistia = {};

var hasRequiredWistia;

function requireWistia () {
	if (hasRequiredWistia) return Wistia;
	hasRequiredWistia = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://fast.wistia.com/assets/external/E-v1.js';
		var SDK_GLOBAL = 'Wistia';
		var PLAYER_ID_PREFIX = 'wistia-player-';

		var Wistia = /*#__PURE__*/function (_Component) {
		  _inherits(Wistia, _Component);

		  var _super = _createSuper(Wistia);

		  function Wistia() {
		    var _this;

		    _classCallCheck(this, Wistia);

		    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
		      _args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(_args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

		    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
		      var _this$props;

		      return (_this$props = _this.props).onPlay.apply(_this$props, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
		      var _this$props2;

		      return (_this$props2 = _this.props).onPause.apply(_this$props2, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onSeek", function () {
		      var _this$props3;

		      return (_this$props3 = _this.props).onSeek.apply(_this$props3, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
		      var _this$props4;

		      return (_this$props4 = _this.props).onEnded.apply(_this$props4, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onPlaybackRateChange", function () {
		      var _this$props5;

		      return (_this$props5 = _this.props).onPlaybackRateChange.apply(_this$props5, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.callPlayer('mute');
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      _this.callPlayer('unmute');
		    });

		    return _this;
		  }

		  _createClass(Wistia, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url) {
		      var _this2 = this;

		      var _this$props6 = this.props,
		          playing = _this$props6.playing,
		          muted = _this$props6.muted,
		          controls = _this$props6.controls,
		          _onReady = _this$props6.onReady,
		          config = _this$props6.config,
		          onError = _this$props6.onError;
		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Wistia) {
		        if (config.customControls) {
		          config.customControls.forEach(function (control) {
		            return Wistia.defineControl(control);
		          });
		        }

		        window._wq = window._wq || [];

		        window._wq.push({
		          id: _this2.playerID,
		          options: _objectSpread({
		            autoPlay: playing,
		            silentAutoPlay: 'allow',
		            muted: muted,
		            controlsVisibleOnLoad: controls,
		            fullscreenButton: controls,
		            playbar: controls,
		            playbackRateControl: controls,
		            qualityControl: controls,
		            volumeControl: controls,
		            settingsControl: controls,
		            smallPlayButton: controls
		          }, config.options),
		          onReady: function onReady(player) {
		            _this2.player = player;

		            _this2.unbind();

		            _this2.player.bind('play', _this2.onPlay);

		            _this2.player.bind('pause', _this2.onPause);

		            _this2.player.bind('seek', _this2.onSeek);

		            _this2.player.bind('end', _this2.onEnded);

		            _this2.player.bind('playbackratechange', _this2.onPlaybackRateChange);

		            _onReady();
		          }
		        });
		      }, onError);
		    }
		  }, {
		    key: "unbind",
		    value: function unbind() {
		      this.player.unbind('play', this.onPlay);
		      this.player.unbind('pause', this.onPause);
		      this.player.unbind('seek', this.onSeek);
		      this.player.unbind('end', this.onEnded);
		      this.player.unbind('playbackratechange', this.onPlaybackRateChange);
		    } // Proxy methods to prevent listener leaks

		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {
		      this.unbind();
		      this.callPlayer('remove');
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('time', seconds);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('volume', fraction);
		    }
		  }, {
		    key: "setPlaybackRate",
		    value: function setPlaybackRate(rate) {
		      this.callPlayer('playbackRate', rate);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.callPlayer('duration');
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.callPlayer('time');
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return null;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var url = this.props.url;
		      var videoID = url && url.match(_patterns.MATCH_URL_WISTIA)[1];
		      var className = "wistia_embed wistia_async_".concat(videoID);
		      var style = {
		        width: '100%',
		        height: '100%'
		      };
		      return /*#__PURE__*/_react["default"].createElement("div", {
		        id: this.playerID,
		        key: videoID,
		        className: className,
		        style: style
		      });
		    }
		  }]);

		  return Wistia;
		}(_react.Component);

		exports["default"] = Wistia;

		_defineProperty(Wistia, "displayName", 'Wistia');

		_defineProperty(Wistia, "canPlay", _patterns.canPlay.wistia);

		_defineProperty(Wistia, "loopOnEnded", true);
} (Wistia));
	return Wistia;
}

var Twitch = {};

var hasRequiredTwitch;

function requireTwitch () {
	if (hasRequiredTwitch) return Twitch;
	hasRequiredTwitch = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://player.twitch.tv/js/embed/v1.js';
		var SDK_GLOBAL = 'Twitch';
		var PLAYER_ID_PREFIX = 'twitch-player-';

		var Twitch = /*#__PURE__*/function (_Component) {
		  _inherits(Twitch, _Component);

		  var _super = _createSuper(Twitch);

		  function Twitch() {
		    var _this;

		    _classCallCheck(this, Twitch);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "playerID", _this.props.config.playerId || "".concat(PLAYER_ID_PREFIX).concat((0, _utils.randomString)()));

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.callPlayer('setMuted', true);
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      _this.callPlayer('setMuted', false);
		    });

		    return _this;
		  }

		  _createClass(Twitch, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url, isReady) {
		      var _this2 = this;

		      var _this$props = this.props,
		          playsinline = _this$props.playsinline,
		          onError = _this$props.onError,
		          config = _this$props.config,
		          controls = _this$props.controls;

		      var isChannel = _patterns.MATCH_URL_TWITCH_CHANNEL.test(url);

		      var id = isChannel ? url.match(_patterns.MATCH_URL_TWITCH_CHANNEL)[1] : url.match(_patterns.MATCH_URL_TWITCH_VIDEO)[1];

		      if (isReady) {
		        if (isChannel) {
		          this.player.setChannel(id);
		        } else {
		          this.player.setVideo('v' + id);
		        }

		        return;
		      }

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Twitch) {
		        _this2.player = new Twitch.Player(_this2.playerID, _objectSpread({
		          video: isChannel ? '' : id,
		          channel: isChannel ? id : '',
		          height: '100%',
		          width: '100%',
		          playsinline: playsinline,
		          autoplay: _this2.props.playing,
		          muted: _this2.props.muted,
		          // https://github.com/CookPete/react-player/issues/733#issuecomment-549085859
		          controls: isChannel ? true : controls,
		          time: (0, _utils.parseStartTime)(url)
		        }, config.options));
		        var _Twitch$Player = Twitch.Player,
		            READY = _Twitch$Player.READY,
		            PLAYING = _Twitch$Player.PLAYING,
		            PAUSE = _Twitch$Player.PAUSE,
		            ENDED = _Twitch$Player.ENDED,
		            ONLINE = _Twitch$Player.ONLINE,
		            OFFLINE = _Twitch$Player.OFFLINE,
		            SEEK = _Twitch$Player.SEEK;

		        _this2.player.addEventListener(READY, _this2.props.onReady);

		        _this2.player.addEventListener(PLAYING, _this2.props.onPlay);

		        _this2.player.addEventListener(PAUSE, _this2.props.onPause);

		        _this2.player.addEventListener(ENDED, _this2.props.onEnded);

		        _this2.player.addEventListener(SEEK, _this2.props.onSeek); // Prevent weird isLoading behaviour when streams are offline


		        _this2.player.addEventListener(ONLINE, _this2.props.onLoaded);

		        _this2.player.addEventListener(OFFLINE, _this2.props.onLoaded);
		      }, onError);
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('seek', seconds);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.callPlayer('getDuration');
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.callPlayer('getCurrentTime');
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return null;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var style = {
		        width: '100%',
		        height: '100%'
		      };
		      return /*#__PURE__*/_react["default"].createElement("div", {
		        style: style,
		        id: this.playerID
		      });
		    }
		  }]);

		  return Twitch;
		}(_react.Component);

		exports["default"] = Twitch;

		_defineProperty(Twitch, "displayName", 'Twitch');

		_defineProperty(Twitch, "canPlay", _patterns.canPlay.twitch);

		_defineProperty(Twitch, "loopOnEnded", true);
} (Twitch));
	return Twitch;
}

var DailyMotion = {};

var hasRequiredDailyMotion;

function requireDailyMotion () {
	if (hasRequiredDailyMotion) return DailyMotion;
	hasRequiredDailyMotion = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

		function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

		function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

		function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

		function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

		function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://api.dmcdn.net/all.js';
		var SDK_GLOBAL = 'DM';
		var SDK_GLOBAL_READY = 'dmAsyncInit';

		var DailyMotion = /*#__PURE__*/function (_Component) {
		  _inherits(DailyMotion, _Component);

		  var _super = _createSuper(DailyMotion);

		  function DailyMotion() {
		    var _this;

		    _classCallCheck(this, DailyMotion);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "onDurationChange", function () {
		      var duration = _this.getDuration();

		      _this.props.onDuration(duration);
		    });

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.callPlayer('setMuted', true);
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      _this.callPlayer('setMuted', false);
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
		      _this.container = container;
		    });

		    return _this;
		  }

		  _createClass(DailyMotion, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url) {
		      var _this2 = this;

		      var _this$props = this.props,
		          controls = _this$props.controls,
		          config = _this$props.config,
		          onError = _this$props.onError,
		          playing = _this$props.playing;

		      var _url$match = url.match(_patterns.MATCH_URL_DAILYMOTION),
		          _url$match2 = _slicedToArray(_url$match, 2),
		          id = _url$match2[1];

		      if (this.player) {
		        this.player.load(id, {
		          start: (0, _utils.parseStartTime)(url),
		          autoplay: playing
		        });
		        return;
		      }

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, function (DM) {
		        return DM.player;
		      }).then(function (DM) {
		        if (!_this2.container) return;
		        var Player = DM.player;
		        _this2.player = new Player(_this2.container, {
		          width: '100%',
		          height: '100%',
		          video: id,
		          params: _objectSpread({
		            controls: controls,
		            autoplay: _this2.props.playing,
		            mute: _this2.props.muted,
		            start: (0, _utils.parseStartTime)(url),
		            origin: window.location.origin
		          }, config.params),
		          events: {
		            apiready: _this2.props.onReady,
		            seeked: function seeked() {
		              return _this2.props.onSeek(_this2.player.currentTime);
		            },
		            video_end: _this2.props.onEnded,
		            durationchange: _this2.onDurationChange,
		            pause: _this2.props.onPause,
		            playing: _this2.props.onPlay,
		            waiting: _this2.props.onBuffer,
		            error: function error(event) {
		              return onError(event);
		            }
		          }
		        });
		      }, onError);
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {// Nothing to do
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('seek', seconds);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.player.duration || null;
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.player.currentTime;
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return this.player.bufferedTime;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var display = this.props.display;
		      var style = {
		        width: '100%',
		        height: '100%',
		        display: display
		      };
		      return /*#__PURE__*/_react["default"].createElement("div", {
		        style: style
		      }, /*#__PURE__*/_react["default"].createElement("div", {
		        ref: this.ref
		      }));
		    }
		  }]);

		  return DailyMotion;
		}(_react.Component);

		exports["default"] = DailyMotion;

		_defineProperty(DailyMotion, "displayName", 'DailyMotion');

		_defineProperty(DailyMotion, "canPlay", _patterns.canPlay.dailymotion);

		_defineProperty(DailyMotion, "loopOnEnded", true);
} (DailyMotion));
	return DailyMotion;
}

var Mixcloud = {};

var hasRequiredMixcloud;

function requireMixcloud () {
	if (hasRequiredMixcloud) return Mixcloud;
	hasRequiredMixcloud = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://widget.mixcloud.com/media/js/widgetApi.js';
		var SDK_GLOBAL = 'Mixcloud';

		var Mixcloud = /*#__PURE__*/function (_Component) {
		  _inherits(Mixcloud, _Component);

		  var _super = _createSuper(Mixcloud);

		  function Mixcloud() {
		    var _this;

		    _classCallCheck(this, Mixcloud);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "duration", null);

		    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

		    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {// No volume support
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {// No volume support
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
		      _this.iframe = iframe;
		    });

		    return _this;
		  }

		  _createClass(Mixcloud, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url) {
		      var _this2 = this;

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (Mixcloud) {
		        _this2.player = Mixcloud.PlayerWidget(_this2.iframe);

		        _this2.player.ready.then(function () {
		          _this2.player.events.play.on(_this2.props.onPlay);

		          _this2.player.events.pause.on(_this2.props.onPause);

		          _this2.player.events.ended.on(_this2.props.onEnded);

		          _this2.player.events.error.on(_this2.props.error);

		          _this2.player.events.progress.on(function (seconds, duration) {
		            _this2.currentTime = seconds;
		            _this2.duration = duration;
		          });

		          _this2.props.onReady();
		        });
		      }, this.props.onError);
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {// Nothing to do
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('seek', seconds);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {// No volume support
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.duration;
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.currentTime;
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return null;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this$props = this.props,
		          url = _this$props.url,
		          config = _this$props.config;
		      var id = url.match(_patterns.MATCH_URL_MIXCLOUD)[1];
		      var style = {
		        width: '100%',
		        height: '100%'
		      };
		      var query = (0, _utils.queryString)(_objectSpread(_objectSpread({}, config.options), {}, {
		        feed: "/".concat(id, "/")
		      })); // We have to give the iframe a key here to prevent a
		      // weird dialog appearing when loading a new track

		      return /*#__PURE__*/_react["default"].createElement("iframe", {
		        key: id,
		        ref: this.ref,
		        style: style,
		        src: "https://www.mixcloud.com/widget/iframe/?".concat(query),
		        frameBorder: "0"
		      });
		    }
		  }]);

		  return Mixcloud;
		}(_react.Component);

		exports["default"] = Mixcloud;

		_defineProperty(Mixcloud, "displayName", 'Mixcloud');

		_defineProperty(Mixcloud, "canPlay", _patterns.canPlay.mixcloud);

		_defineProperty(Mixcloud, "loopOnEnded", true);
} (Mixcloud));
	return Mixcloud;
}

var Vidyard = {};

var hasRequiredVidyard;

function requireVidyard () {
	if (hasRequiredVidyard) return Vidyard;
	hasRequiredVidyard = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://play.vidyard.com/embed/v4.js';
		var SDK_GLOBAL = 'VidyardV4';
		var SDK_GLOBAL_READY = 'onVidyardAPI';

		var Vidyard = /*#__PURE__*/function (_Component) {
		  _inherits(Vidyard, _Component);

		  var _super = _createSuper(Vidyard);

		  function Vidyard() {
		    var _this;

		    _classCallCheck(this, Vidyard);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.setVolume(0);
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      if (_this.props.volume !== null) {
		        _this.setVolume(_this.props.volume);
		      }
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (container) {
		      _this.container = container;
		    });

		    return _this;
		  }

		  _createClass(Vidyard, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url) {
		      var _this2 = this;

		      var _this$props = this.props,
		          playing = _this$props.playing,
		          config = _this$props.config,
		          onError = _this$props.onError,
		          onDuration = _this$props.onDuration;
		      var id = url && url.match(_patterns.MATCH_URL_VIDYARD)[1];

		      if (this.player) {
		        this.stop();
		      }

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then(function (Vidyard) {
		        if (!_this2.container) return;
		        Vidyard.api.addReadyListener(function (data, player) {
		          _this2.player = player;

		          _this2.player.on('ready', _this2.props.onReady);

		          _this2.player.on('play', _this2.props.onPlay);

		          _this2.player.on('pause', _this2.props.onPause);

		          _this2.player.on('seek', _this2.props.onSeek);

		          _this2.player.on('playerComplete', _this2.props.onEnded);
		        }, id);
		        Vidyard.api.renderPlayer(_objectSpread({
		          uuid: id,
		          container: _this2.container,
		          autoplay: playing ? 1 : 0
		        }, config.options));
		        Vidyard.api.getPlayerMetadata(id).then(function (meta) {
		          _this2.duration = meta.length_in_seconds;
		          onDuration(meta.length_in_seconds);
		        });
		      }, onError);
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {
		      window.VidyardV4.api.destroyPlayer(this.player);
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(amount) {
		      this.callPlayer('seek', amount);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction);
		    }
		  }, {
		    key: "setPlaybackRate",
		    value: function setPlaybackRate(rate) {
		      this.callPlayer('setPlaybackSpeed', rate);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.duration;
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.callPlayer('currentTime');
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return null;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var display = this.props.display;
		      var style = {
		        width: '100%',
		        height: '100%',
		        display: display
		      };
		      return /*#__PURE__*/_react["default"].createElement("div", {
		        style: style
		      }, /*#__PURE__*/_react["default"].createElement("div", {
		        ref: this.ref
		      }));
		    }
		  }]);

		  return Vidyard;
		}(_react.Component);

		exports["default"] = Vidyard;

		_defineProperty(Vidyard, "displayName", 'Vidyard');

		_defineProperty(Vidyard, "canPlay", _patterns.canPlay.vidyard);
} (Vidyard));
	return Vidyard;
}

var Kaltura = {};

var hasRequiredKaltura;

function requireKaltura () {
	if (hasRequiredKaltura) return Kaltura;
	hasRequiredKaltura = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var SDK_URL = 'https://cdn.embed.ly/player-0.1.0.min.js';
		var SDK_GLOBAL = 'playerjs';

		var Kaltura = /*#__PURE__*/function (_Component) {
		  _inherits(Kaltura, _Component);

		  var _super = _createSuper(Kaltura);

		  function Kaltura() {
		    var _this;

		    _classCallCheck(this, Kaltura);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "callPlayer", _utils.callPlayer);

		    _defineProperty(_assertThisInitialized(_this), "duration", null);

		    _defineProperty(_assertThisInitialized(_this), "currentTime", null);

		    _defineProperty(_assertThisInitialized(_this), "secondsLoaded", null);

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.callPlayer('mute');
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      _this.callPlayer('unmute');
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (iframe) {
		      _this.iframe = iframe;
		    });

		    return _this;
		  }

		  _createClass(Kaltura, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		    }
		  }, {
		    key: "load",
		    value: function load(url) {
		      var _this2 = this;

		      (0, _utils.getSDK)(SDK_URL, SDK_GLOBAL).then(function (playerjs) {
		        if (!_this2.iframe) return;
		        _this2.player = new playerjs.Player(_this2.iframe);

		        _this2.player.on('ready', function () {
		          // An arbitrary timeout is required otherwise
		          // the event listeners won’t work
		          setTimeout(function () {
		            _this2.player.isReady = true;

		            _this2.player.setLoop(_this2.props.loop);

		            if (_this2.props.muted) {
		              _this2.player.mute();
		            }

		            _this2.addListeners(_this2.player, _this2.props);

		            _this2.props.onReady();
		          }, 500);
		        });
		      }, this.props.onError);
		    }
		  }, {
		    key: "addListeners",
		    value: function addListeners(player, props) {
		      var _this3 = this;

		      player.on('play', props.onPlay);
		      player.on('pause', props.onPause);
		      player.on('ended', props.onEnded);
		      player.on('error', props.onError);
		      player.on('timeupdate', function (_ref) {
		        var duration = _ref.duration,
		            seconds = _ref.seconds;
		        _this3.duration = duration;
		        _this3.currentTime = seconds;
		      });
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      this.callPlayer('play');
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.callPlayer('pause');
		    }
		  }, {
		    key: "stop",
		    value: function stop() {// Nothing to do
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.callPlayer('setCurrentTime', seconds);
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.callPlayer('setVolume', fraction);
		    }
		  }, {
		    key: "setLoop",
		    value: function setLoop(loop) {
		      this.callPlayer('setLoop', loop);
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      return this.duration;
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      return this.currentTime;
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      return this.secondsLoaded;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var style = {
		        width: '100%',
		        height: '100%'
		      };
		      return /*#__PURE__*/_react["default"].createElement("iframe", {
		        ref: this.ref,
		        src: this.props.url,
		        frameBorder: "0",
		        scrolling: "no",
		        style: style,
		        allowFullScreen: true,
		        allow: "encrypted-media;autoplay",
		        referrerPolicy: "no-referrer-when-downgrade"
		      });
		    }
		  }]);

		  return Kaltura;
		}(_react.Component);

		exports["default"] = Kaltura;

		_defineProperty(Kaltura, "displayName", 'Kaltura');

		_defineProperty(Kaltura, "canPlay", _patterns.canPlay.kaltura);
} (Kaltura));
	return Kaltura;
}

var FilePlayer = {};

var hasRequiredFilePlayer;

function requireFilePlayer () {
	if (hasRequiredFilePlayer) return FilePlayer;
	hasRequiredFilePlayer = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		var _utils = utils;

		var _patterns = patterns;

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var HAS_NAVIGATOR = typeof navigator !== 'undefined';
		var IS_IPAD_PRO = HAS_NAVIGATOR && navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
		var IS_IOS = HAS_NAVIGATOR && (/iPad|iPhone|iPod/.test(navigator.userAgent) || IS_IPAD_PRO) && !window.MSStream;
		var HLS_SDK_URL = 'https://cdn.jsdelivr.net/npm/hls.js@VERSION/dist/hls.min.js';
		var HLS_GLOBAL = 'Hls';
		var DASH_SDK_URL = 'https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js';
		var DASH_GLOBAL = 'dashjs';
		var FLV_SDK_URL = 'https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js';
		var FLV_GLOBAL = 'flvjs';
		var MATCH_DROPBOX_URL = /www\.dropbox\.com\/.+/;
		var MATCH_CLOUDFLARE_STREAM = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/;
		var REPLACE_CLOUDFLARE_STREAM = 'https://videodelivery.net/{id}/manifest/video.m3u8';

		var FilePlayer = /*#__PURE__*/function (_Component) {
		  _inherits(FilePlayer, _Component);

		  var _super = _createSuper(FilePlayer);

		  function FilePlayer() {
		    var _this;

		    _classCallCheck(this, FilePlayer);

		    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
		      _args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(_args));

		    _defineProperty(_assertThisInitialized(_this), "onReady", function () {
		      var _this$props;

		      return (_this$props = _this.props).onReady.apply(_this$props, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onPlay", function () {
		      var _this$props2;

		      return (_this$props2 = _this.props).onPlay.apply(_this$props2, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onBuffer", function () {
		      var _this$props3;

		      return (_this$props3 = _this.props).onBuffer.apply(_this$props3, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onBufferEnd", function () {
		      var _this$props4;

		      return (_this$props4 = _this.props).onBufferEnd.apply(_this$props4, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onPause", function () {
		      var _this$props5;

		      return (_this$props5 = _this.props).onPause.apply(_this$props5, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onEnded", function () {
		      var _this$props6;

		      return (_this$props6 = _this.props).onEnded.apply(_this$props6, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onError", function () {
		      var _this$props7;

		      return (_this$props7 = _this.props).onError.apply(_this$props7, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onPlayBackRateChange", function (event) {
		      return _this.props.onPlaybackRateChange(event.target.playbackRate);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onEnablePIP", function () {
		      var _this$props8;

		      return (_this$props8 = _this.props).onEnablePIP.apply(_this$props8, arguments);
		    });

		    _defineProperty(_assertThisInitialized(_this), "onDisablePIP", function (e) {
		      var _this$props9 = _this.props,
		          onDisablePIP = _this$props9.onDisablePIP,
		          playing = _this$props9.playing;
		      onDisablePIP(e);

		      if (playing) {
		        _this.play();
		      }
		    });

		    _defineProperty(_assertThisInitialized(_this), "onPresentationModeChange", function (e) {
		      if (_this.player && (0, _utils.supportsWebKitPresentationMode)(_this.player)) {
		        var webkitPresentationMode = _this.player.webkitPresentationMode;

		        if (webkitPresentationMode === 'picture-in-picture') {
		          _this.onEnablePIP(e);
		        } else if (webkitPresentationMode === 'inline') {
		          _this.onDisablePIP(e);
		        }
		      }
		    });

		    _defineProperty(_assertThisInitialized(_this), "onSeek", function (e) {
		      _this.props.onSeek(e.target.currentTime);
		    });

		    _defineProperty(_assertThisInitialized(_this), "mute", function () {
		      _this.player.muted = true;
		    });

		    _defineProperty(_assertThisInitialized(_this), "unmute", function () {
		      _this.player.muted = false;
		    });

		    _defineProperty(_assertThisInitialized(_this), "renderSourceElement", function (source, index) {
		      if (typeof source === 'string') {
		        return /*#__PURE__*/_react["default"].createElement("source", {
		          key: index,
		          src: source
		        });
		      }

		      return /*#__PURE__*/_react["default"].createElement("source", _extends({
		        key: index
		      }, source));
		    });

		    _defineProperty(_assertThisInitialized(_this), "renderTrack", function (track, index) {
		      return /*#__PURE__*/_react["default"].createElement("track", _extends({
		        key: index
		      }, track));
		    });

		    _defineProperty(_assertThisInitialized(_this), "ref", function (player) {
		      if (_this.player) {
		        // Store previous player to be used by removeListeners()
		        _this.prevPlayer = _this.player;
		      }

		      _this.player = player;
		    });

		    return _this;
		  }

		  _createClass(FilePlayer, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.props.onMount && this.props.onMount(this);
		      this.addListeners(this.player);

		      if (IS_IOS) {
		        this.player.load();
		      }
		    }
		  }, {
		    key: "componentDidUpdate",
		    value: function componentDidUpdate(prevProps) {
		      if (this.shouldUseAudio(this.props) !== this.shouldUseAudio(prevProps)) {
		        this.removeListeners(this.prevPlayer, prevProps.url);
		        this.addListeners(this.player);
		      }

		      if (this.props.url !== prevProps.url && !(0, _utils.isMediaStream)(this.props.url)) {
		        this.player.srcObject = null;
		      }
		    }
		  }, {
		    key: "componentWillUnmount",
		    value: function componentWillUnmount() {
		      this.removeListeners(this.player);

		      if (this.hls) {
		        this.hls.destroy();
		      }
		    }
		  }, {
		    key: "addListeners",
		    value: function addListeners(player) {
		      var _this$props10 = this.props,
		          url = _this$props10.url,
		          playsinline = _this$props10.playsinline;
		      player.addEventListener('play', this.onPlay);
		      player.addEventListener('waiting', this.onBuffer);
		      player.addEventListener('playing', this.onBufferEnd);
		      player.addEventListener('pause', this.onPause);
		      player.addEventListener('seeked', this.onSeek);
		      player.addEventListener('ended', this.onEnded);
		      player.addEventListener('error', this.onError);
		      player.addEventListener('ratechange', this.onPlayBackRateChange);
		      player.addEventListener('enterpictureinpicture', this.onEnablePIP);
		      player.addEventListener('leavepictureinpicture', this.onDisablePIP);
		      player.addEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

		      if (!this.shouldUseHLS(url)) {
		        // onReady is handled by hls.js
		        player.addEventListener('canplay', this.onReady);
		      }

		      if (playsinline) {
		        player.setAttribute('playsinline', '');
		        player.setAttribute('webkit-playsinline', '');
		        player.setAttribute('x5-playsinline', '');
		      }
		    }
		  }, {
		    key: "removeListeners",
		    value: function removeListeners(player, url) {
		      player.removeEventListener('canplay', this.onReady);
		      player.removeEventListener('play', this.onPlay);
		      player.removeEventListener('waiting', this.onBuffer);
		      player.removeEventListener('playing', this.onBufferEnd);
		      player.removeEventListener('pause', this.onPause);
		      player.removeEventListener('seeked', this.onSeek);
		      player.removeEventListener('ended', this.onEnded);
		      player.removeEventListener('error', this.onError);
		      player.removeEventListener('ratechange', this.onPlayBackRateChange);
		      player.removeEventListener('enterpictureinpicture', this.onEnablePIP);
		      player.removeEventListener('leavepictureinpicture', this.onDisablePIP);
		      player.removeEventListener('webkitpresentationmodechanged', this.onPresentationModeChange);

		      if (!this.shouldUseHLS(url)) {
		        // onReady is handled by hls.js
		        player.removeEventListener('canplay', this.onReady);
		      }
		    } // Proxy methods to prevent listener leaks

		  }, {
		    key: "shouldUseAudio",
		    value: function shouldUseAudio(props) {
		      if (props.config.forceVideo) {
		        return false;
		      }

		      if (props.config.attributes.poster) {
		        return false; // Use <video> so that poster is shown
		      }

		      return _patterns.AUDIO_EXTENSIONS.test(props.url) || props.config.forceAudio;
		    }
		  }, {
		    key: "shouldUseHLS",
		    value: function shouldUseHLS(url) {
		      if (this.props.config.forceHLS) {
		        return true;
		      }

		      if (IS_IOS) {
		        return false;
		      }

		      return _patterns.HLS_EXTENSIONS.test(url) || MATCH_CLOUDFLARE_STREAM.test(url);
		    }
		  }, {
		    key: "shouldUseDASH",
		    value: function shouldUseDASH(url) {
		      return _patterns.DASH_EXTENSIONS.test(url) || this.props.config.forceDASH;
		    }
		  }, {
		    key: "shouldUseFLV",
		    value: function shouldUseFLV(url) {
		      return _patterns.FLV_EXTENSIONS.test(url) || this.props.config.forceFLV;
		    }
		  }, {
		    key: "load",
		    value: function load(url) {
		      var _this2 = this;

		      var _this$props$config = this.props.config,
		          hlsVersion = _this$props$config.hlsVersion,
		          hlsOptions = _this$props$config.hlsOptions,
		          dashVersion = _this$props$config.dashVersion,
		          flvVersion = _this$props$config.flvVersion;

		      if (this.hls) {
		        this.hls.destroy();
		      }

		      if (this.dash) {
		        this.dash.reset();
		      }

		      if (this.shouldUseHLS(url)) {
		        (0, _utils.getSDK)(HLS_SDK_URL.replace('VERSION', hlsVersion), HLS_GLOBAL).then(function (Hls) {
		          _this2.hls = new Hls(hlsOptions);

		          _this2.hls.on(Hls.Events.MANIFEST_PARSED, function () {
		            _this2.props.onReady();
		          });

		          _this2.hls.on(Hls.Events.ERROR, function (e, data) {
		            _this2.props.onError(e, data, _this2.hls, Hls);
		          });

		          if (MATCH_CLOUDFLARE_STREAM.test(url)) {
		            var id = url.match(MATCH_CLOUDFLARE_STREAM)[1];

		            _this2.hls.loadSource(REPLACE_CLOUDFLARE_STREAM.replace('{id}', id));
		          } else {
		            _this2.hls.loadSource(url);
		          }

		          _this2.hls.attachMedia(_this2.player);

		          _this2.props.onLoaded();
		        });
		      }

		      if (this.shouldUseDASH(url)) {
		        (0, _utils.getSDK)(DASH_SDK_URL.replace('VERSION', dashVersion), DASH_GLOBAL).then(function (dashjs) {
		          _this2.dash = dashjs.MediaPlayer().create();

		          _this2.dash.initialize(_this2.player, url, _this2.props.playing);

		          _this2.dash.on('error', _this2.props.onError);

		          if (parseInt(dashVersion) < 3) {
		            _this2.dash.getDebug().setLogToBrowserConsole(false);
		          } else {
		            _this2.dash.updateSettings({
		              debug: {
		                logLevel: dashjs.Debug.LOG_LEVEL_NONE
		              }
		            });
		          }

		          _this2.props.onLoaded();
		        });
		      }

		      if (this.shouldUseFLV(url)) {
		        (0, _utils.getSDK)(FLV_SDK_URL.replace('VERSION', flvVersion), FLV_GLOBAL).then(function (flvjs) {
		          _this2.flv = flvjs.createPlayer({
		            type: 'flv',
		            url: url
		          });

		          _this2.flv.attachMediaElement(_this2.player);

		          _this2.flv.load();

		          _this2.props.onLoaded();
		        });
		      }

		      if (url instanceof Array) {
		        // When setting new urls (<source>) on an already loaded video,
		        // HTMLMediaElement.load() is needed to reset the media element
		        // and restart the media resource. Just replacing children source
		        // dom nodes is not enough
		        this.player.load();
		      } else if ((0, _utils.isMediaStream)(url)) {
		        try {
		          this.player.srcObject = url;
		        } catch (e) {
		          this.player.src = window.URL.createObjectURL(url);
		        }
		      }
		    }
		  }, {
		    key: "play",
		    value: function play() {
		      var promise = this.player.play();

		      if (promise) {
		        promise["catch"](this.props.onError);
		      }
		    }
		  }, {
		    key: "pause",
		    value: function pause() {
		      this.player.pause();
		    }
		  }, {
		    key: "stop",
		    value: function stop() {
		      this.player.removeAttribute('src');

		      if (this.dash) {
		        this.dash.reset();
		      }
		    }
		  }, {
		    key: "seekTo",
		    value: function seekTo(seconds) {
		      this.player.currentTime = seconds;
		    }
		  }, {
		    key: "setVolume",
		    value: function setVolume(fraction) {
		      this.player.volume = fraction;
		    }
		  }, {
		    key: "enablePIP",
		    value: function enablePIP() {
		      if (this.player.requestPictureInPicture && document.pictureInPictureElement !== this.player) {
		        this.player.requestPictureInPicture();
		      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'picture-in-picture') {
		        this.player.webkitSetPresentationMode('picture-in-picture');
		      }
		    }
		  }, {
		    key: "disablePIP",
		    value: function disablePIP() {
		      if (document.exitPictureInPicture && document.pictureInPictureElement === this.player) {
		        document.exitPictureInPicture();
		      } else if ((0, _utils.supportsWebKitPresentationMode)(this.player) && this.player.webkitPresentationMode !== 'inline') {
		        this.player.webkitSetPresentationMode('inline');
		      }
		    }
		  }, {
		    key: "setPlaybackRate",
		    value: function setPlaybackRate(rate) {
		      try {
		        this.player.playbackRate = rate;
		      } catch (error) {
		        this.props.onError(error);
		      }
		    }
		  }, {
		    key: "getDuration",
		    value: function getDuration() {
		      if (!this.player) return null;
		      var _this$player = this.player,
		          duration = _this$player.duration,
		          seekable = _this$player.seekable; // on iOS, live streams return Infinity for the duration
		      // so instead we use the end of the seekable timerange

		      if (duration === Infinity && seekable.length > 0) {
		        return seekable.end(seekable.length - 1);
		      }

		      return duration;
		    }
		  }, {
		    key: "getCurrentTime",
		    value: function getCurrentTime() {
		      if (!this.player) return null;
		      return this.player.currentTime;
		    }
		  }, {
		    key: "getSecondsLoaded",
		    value: function getSecondsLoaded() {
		      if (!this.player) return null;
		      var buffered = this.player.buffered;

		      if (buffered.length === 0) {
		        return 0;
		      }

		      var end = buffered.end(buffered.length - 1);
		      var duration = this.getDuration();

		      if (end > duration) {
		        return duration;
		      }

		      return end;
		    }
		  }, {
		    key: "getSource",
		    value: function getSource(url) {
		      var useHLS = this.shouldUseHLS(url);
		      var useDASH = this.shouldUseDASH(url);
		      var useFLV = this.shouldUseFLV(url);

		      if (url instanceof Array || (0, _utils.isMediaStream)(url) || useHLS || useDASH || useFLV) {
		        return undefined;
		      }

		      if (MATCH_DROPBOX_URL.test(url)) {
		        return url.replace('www.dropbox.com', 'dl.dropboxusercontent.com');
		      }

		      return url;
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this$props11 = this.props,
		          url = _this$props11.url,
		          playing = _this$props11.playing,
		          loop = _this$props11.loop,
		          controls = _this$props11.controls,
		          muted = _this$props11.muted,
		          config = _this$props11.config,
		          width = _this$props11.width,
		          height = _this$props11.height;
		      var useAudio = this.shouldUseAudio(this.props);
		      var Element = useAudio ? 'audio' : 'video';
		      var style = {
		        width: width === 'auto' ? width : '100%',
		        height: height === 'auto' ? height : '100%'
		      };
		      return /*#__PURE__*/_react["default"].createElement(Element, _extends({
		        ref: this.ref,
		        src: this.getSource(url),
		        style: style,
		        preload: "auto",
		        autoPlay: playing || undefined,
		        controls: controls,
		        muted: muted,
		        loop: loop
		      }, config.attributes), url instanceof Array && url.map(this.renderSourceElement), config.tracks.map(this.renderTrack));
		    }
		  }]);

		  return FilePlayer;
		}(_react.Component);

		exports["default"] = FilePlayer;

		_defineProperty(FilePlayer, "displayName", 'FilePlayer');

		_defineProperty(FilePlayer, "canPlay", _patterns.canPlay.file);
} (FilePlayer));
	return FilePlayer;
}

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _react = react.exports;

	var _utils = utils;

	var _patterns = patterns;

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	var _default = [{
	  key: 'youtube',
	  name: 'YouTube',
	  canPlay: _patterns.canPlay.youtube,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireYouTube());
	    });
	  })
	}, {
	  key: 'soundcloud',
	  name: 'SoundCloud',
	  canPlay: _patterns.canPlay.soundcloud,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireSoundCloud());
	    });
	  })
	}, {
	  key: 'vimeo',
	  name: 'Vimeo',
	  canPlay: _patterns.canPlay.vimeo,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireVimeo());
	    });
	  })
	}, {
	  key: 'facebook',
	  name: 'Facebook',
	  canPlay: _patterns.canPlay.facebook,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireFacebook());
	    });
	  })
	}, {
	  key: 'streamable',
	  name: 'Streamable',
	  canPlay: _patterns.canPlay.streamable,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireStreamable());
	    });
	  })
	}, {
	  key: 'wistia',
	  name: 'Wistia',
	  canPlay: _patterns.canPlay.wistia,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireWistia());
	    });
	  })
	}, {
	  key: 'twitch',
	  name: 'Twitch',
	  canPlay: _patterns.canPlay.twitch,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireTwitch());
	    });
	  })
	}, {
	  key: 'dailymotion',
	  name: 'DailyMotion',
	  canPlay: _patterns.canPlay.dailymotion,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireDailyMotion());
	    });
	  })
	}, {
	  key: 'mixcloud',
	  name: 'Mixcloud',
	  canPlay: _patterns.canPlay.mixcloud,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireMixcloud());
	    });
	  })
	}, {
	  key: 'vidyard',
	  name: 'Vidyard',
	  canPlay: _patterns.canPlay.vidyard,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireVidyard());
	    });
	  })
	}, {
	  key: 'kaltura',
	  name: 'Kaltura',
	  canPlay: _patterns.canPlay.kaltura,
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireKaltura());
	    });
	  })
	}, {
	  key: 'file',
	  name: 'FilePlayer',
	  canPlay: _patterns.canPlay.file,
	  canEnablePIP: function canEnablePIP(url) {
	    return _patterns.canPlay.file(url) && (document.pictureInPictureEnabled || (0, _utils.supportsWebKitPresentationMode)()) && !_patterns.AUDIO_EXTENSIONS.test(url);
	  },
	  lazyPlayer: /*#__PURE__*/(0, _react.lazy)(function () {
	    return Promise.resolve().then(function () {
	      return _interopRequireWildcard(requireFilePlayer());
	    });
	  })
	}];
	exports["default"] = _default;
} (players));

var ReactPlayer$1 = {};

var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

var memoizeOne_esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': memoizeOne
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(memoizeOne_esm);

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

var props = {};

var propTypes$1 = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
	Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
	function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
	reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
	reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
	reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;



	if (process.env.NODE_ENV !== "production") {
	  (function() {

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	// (unstable) APIs that have been removed. Can we remove the symbols?

	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	}

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;

	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;

	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_LAZY_TYPE:
	              case REACT_MEMO_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;

	              default:
	                return $$typeof;
	            }

	        }

	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	} // AsyncMode is deprecated along with isAsyncMode

	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;
	var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }

	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	reactIs_development.AsyncMode = AsyncMode;
	reactIs_development.ConcurrentMode = ConcurrentMode;
	reactIs_development.ContextConsumer = ContextConsumer;
	reactIs_development.ContextProvider = ContextProvider;
	reactIs_development.Element = Element;
	reactIs_development.ForwardRef = ForwardRef;
	reactIs_development.Fragment = Fragment;
	reactIs_development.Lazy = Lazy;
	reactIs_development.Memo = Memo;
	reactIs_development.Portal = Portal;
	reactIs_development.Profiler = Profiler;
	reactIs_development.StrictMode = StrictMode;
	reactIs_development.Suspense = Suspense;
	reactIs_development.isAsyncMode = isAsyncMode;
	reactIs_development.isConcurrentMode = isConcurrentMode;
	reactIs_development.isContextConsumer = isContextConsumer;
	reactIs_development.isContextProvider = isContextProvider;
	reactIs_development.isElement = isElement;
	reactIs_development.isForwardRef = isForwardRef;
	reactIs_development.isFragment = isFragment;
	reactIs_development.isLazy = isLazy;
	reactIs_development.isMemo = isMemo;
	reactIs_development.isPortal = isPortal;
	reactIs_development.isProfiler = isProfiler;
	reactIs_development.isStrictMode = isStrictMode;
	reactIs_development.isSuspense = isSuspense;
	reactIs_development.isValidElementType = isValidElementType;
	reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs.exports;
	hasRequiredReactIs = 1;
	(function (module) {

		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactIs_production_min();
		} else {
		  module.exports = requireReactIs_development();
		}
} (reactIs));
	return reactIs.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has = Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = requireHas();

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) { /**/ }
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
	              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	};

	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();

	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var has = requireHas();
	var checkPropTypes = requireCheckPropTypes();

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bigint: createPrimitiveTypeChecker('bigint'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message, data) {
	    this.message = message;
	    this.data = data && typeof data === 'object' ? data: {};
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError(
	          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
	          {expectedType: expectedType}
	        );
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var expectedTypes = [];
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
	        if (checkerResult == null) {
	          return null;
	        }
	        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
	          expectedTypes.push(checkerResult.data.expectedType);
	        }
	      }
	      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function invalidValidatorError(componentName, location, propFullName, key, type) {
	    return new PropTypeError(
	      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
	      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
	    );
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (has(shapeTypes, key) && typeof checker !== 'function') {
	          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
	        }
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithThrowingShims;
var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
	hasRequiredFactoryWithThrowingShims = 1;

	var ReactPropTypesSecret = requireReactPropTypesSecret();

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	factoryWithThrowingShims = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  }	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  }	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bigint: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};
	return factoryWithThrowingShims;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes$1.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes$1.exports = requireFactoryWithThrowingShims()();
}

Object.defineProperty(props, "__esModule", {
  value: true
});
props.defaultProps = props.propTypes = void 0;

var _propTypes = _interopRequireDefault$1(propTypes$1.exports);

function _interopRequireDefault$1(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var string = _propTypes["default"].string,
    bool = _propTypes["default"].bool,
    number = _propTypes["default"].number,
    array = _propTypes["default"].array,
    oneOfType = _propTypes["default"].oneOfType,
    shape = _propTypes["default"].shape,
    object = _propTypes["default"].object,
    func = _propTypes["default"].func,
    node = _propTypes["default"].node;
var propTypes = {
  url: oneOfType([string, array, object]),
  playing: bool,
  loop: bool,
  controls: bool,
  volume: number,
  muted: bool,
  playbackRate: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  style: object,
  progressInterval: number,
  playsinline: bool,
  pip: bool,
  stopOnUnmount: bool,
  light: oneOfType([bool, string]),
  playIcon: node,
  previewTabIndex: number,
  fallback: node,
  oEmbedUrl: string,
  wrapper: oneOfType([string, func, shape({
    render: func.isRequired
  })]),
  config: shape({
    soundcloud: shape({
      options: object
    }),
    youtube: shape({
      playerVars: object,
      embedOptions: object,
      onUnstarted: func
    }),
    facebook: shape({
      appId: string,
      version: string,
      playerId: string,
      attributes: object
    }),
    dailymotion: shape({
      params: object
    }),
    vimeo: shape({
      playerOptions: object,
      title: string
    }),
    file: shape({
      attributes: object,
      tracks: array,
      forceVideo: bool,
      forceAudio: bool,
      forceHLS: bool,
      forceDASH: bool,
      forceFLV: bool,
      hlsOptions: object,
      hlsVersion: string,
      dashVersion: string,
      flvVersion: string
    }),
    wistia: shape({
      options: object,
      playerId: string,
      customControls: array
    }),
    mixcloud: shape({
      options: object
    }),
    twitch: shape({
      options: object,
      playerId: string
    }),
    vidyard: shape({
      options: object
    })
  }),
  onReady: func,
  onStart: func,
  onPlay: func,
  onPause: func,
  onBuffer: func,
  onBufferEnd: func,
  onEnded: func,
  onError: func,
  onDuration: func,
  onSeek: func,
  onPlaybackRateChange: func,
  onProgress: func,
  onClickPreview: func,
  onEnablePIP: func,
  onDisablePIP: func
};
props.propTypes = propTypes;

var noop = function noop() {};

var defaultProps = {
  playing: false,
  loop: false,
  controls: false,
  volume: null,
  muted: false,
  playbackRate: 1,
  width: '640px',
  height: '360px',
  style: {},
  progressInterval: 1000,
  playsinline: false,
  pip: false,
  stopOnUnmount: true,
  light: false,
  fallback: null,
  wrapper: 'div',
  previewTabIndex: 0,
  oEmbedUrl: 'https://noembed.com/embed?url={url}',
  config: {
    soundcloud: {
      options: {
        visual: true,
        // Undocumented, but makes player fill container and look better
        buying: false,
        liking: false,
        download: false,
        sharing: false,
        show_comments: false,
        show_playcount: false
      }
    },
    youtube: {
      playerVars: {
        playsinline: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1
      },
      embedOptions: {},
      onUnstarted: noop
    },
    facebook: {
      appId: '1309697205772819',
      version: 'v3.3',
      playerId: null,
      attributes: {}
    },
    dailymotion: {
      params: {
        api: 1,
        'endscreen-enable': false
      }
    },
    vimeo: {
      playerOptions: {
        autopause: false,
        byline: false,
        portrait: false,
        title: false
      },
      title: null
    },
    file: {
      attributes: {},
      tracks: [],
      forceVideo: false,
      forceAudio: false,
      forceHLS: false,
      forceDASH: false,
      forceFLV: false,
      hlsOptions: {},
      hlsVersion: '1.1.4',
      dashVersion: '3.1.3',
      flvVersion: '1.5.0'
    },
    wistia: {
      options: {},
      playerId: null,
      customControls: null
    },
    mixcloud: {
      options: {
        hide_cover: 1
      }
    },
    twitch: {
      options: {},
      playerId: null
    },
    vidyard: {
      options: {}
    }
  },
  onReady: noop,
  onStart: noop,
  onPlay: noop,
  onPause: noop,
  onBuffer: noop,
  onBufferEnd: noop,
  onEnded: noop,
  onError: noop,
  onDuration: noop,
  onSeek: noop,
  onPlaybackRateChange: noop,
  onProgress: noop,
  onClickPreview: noop,
  onEnablePIP: noop,
  onDisablePIP: noop
};
props.defaultProps = defaultProps;

var Player = {};

(function (exports) {

	function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _react = _interopRequireWildcard(react.exports);

	var _reactFastCompare = _interopRequireDefault(reactFastCompare);

	var _props = props;

	var _utils = utils;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

	function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var SEEK_ON_PLAY_EXPIRY = 5000;

	var Player = /*#__PURE__*/function (_Component) {
	  _inherits(Player, _Component);

	  var _super = _createSuper(Player);

	  function Player() {
	    var _this;

	    _classCallCheck(this, Player);

	    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
	      _args[_key] = arguments[_key];
	    }

	    _this = _super.call.apply(_super, [this].concat(_args));

	    _defineProperty(_assertThisInitialized(_this), "mounted", false);

	    _defineProperty(_assertThisInitialized(_this), "isReady", false);

	    _defineProperty(_assertThisInitialized(_this), "isPlaying", false);

	    _defineProperty(_assertThisInitialized(_this), "isLoading", true);

	    _defineProperty(_assertThisInitialized(_this), "loadOnReady", null);

	    _defineProperty(_assertThisInitialized(_this), "startOnPlay", true);

	    _defineProperty(_assertThisInitialized(_this), "seekOnPlay", null);

	    _defineProperty(_assertThisInitialized(_this), "onDurationCalled", false);

	    _defineProperty(_assertThisInitialized(_this), "handlePlayerMount", function (player) {
	      _this.player = player;

	      _this.player.load(_this.props.url);

	      _this.progress();
	    });

	    _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function (key) {
	      if (!_this.player) return null;
	      return _this.player[key];
	    });

	    _defineProperty(_assertThisInitialized(_this), "progress", function () {
	      if (_this.props.url && _this.player && _this.isReady) {
	        var playedSeconds = _this.getCurrentTime() || 0;

	        var loadedSeconds = _this.getSecondsLoaded();

	        var duration = _this.getDuration();

	        if (duration) {
	          var progress = {
	            playedSeconds: playedSeconds,
	            played: playedSeconds / duration
	          };

	          if (loadedSeconds !== null) {
	            progress.loadedSeconds = loadedSeconds;
	            progress.loaded = loadedSeconds / duration;
	          } // Only call onProgress if values have changed


	          if (progress.playedSeconds !== _this.prevPlayed || progress.loadedSeconds !== _this.prevLoaded) {
	            _this.props.onProgress(progress);
	          }

	          _this.prevPlayed = progress.playedSeconds;
	          _this.prevLoaded = progress.loadedSeconds;
	        }
	      }

	      _this.progressTimeout = setTimeout(_this.progress, _this.props.progressFrequency || _this.props.progressInterval);
	    });

	    _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
	      if (!_this.mounted) return;
	      _this.isReady = true;
	      _this.isLoading = false;
	      var _this$props = _this.props,
	          onReady = _this$props.onReady,
	          playing = _this$props.playing,
	          volume = _this$props.volume,
	          muted = _this$props.muted;
	      onReady();

	      if (!muted && volume !== null) {
	        _this.player.setVolume(volume);
	      }

	      if (_this.loadOnReady) {
	        _this.player.load(_this.loadOnReady, true);

	        _this.loadOnReady = null;
	      } else if (playing) {
	        _this.player.play();
	      }

	      _this.handleDurationCheck();
	    });

	    _defineProperty(_assertThisInitialized(_this), "handlePlay", function () {
	      _this.isPlaying = true;
	      _this.isLoading = false;
	      var _this$props2 = _this.props,
	          onStart = _this$props2.onStart,
	          onPlay = _this$props2.onPlay,
	          playbackRate = _this$props2.playbackRate;

	      if (_this.startOnPlay) {
	        if (_this.player.setPlaybackRate && playbackRate !== 1) {
	          _this.player.setPlaybackRate(playbackRate);
	        }

	        onStart();
	        _this.startOnPlay = false;
	      }

	      onPlay();

	      if (_this.seekOnPlay) {
	        _this.seekTo(_this.seekOnPlay);

	        _this.seekOnPlay = null;
	      }

	      _this.handleDurationCheck();
	    });

	    _defineProperty(_assertThisInitialized(_this), "handlePause", function (e) {
	      _this.isPlaying = false;

	      if (!_this.isLoading) {
	        _this.props.onPause(e);
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "handleEnded", function () {
	      var _this$props3 = _this.props,
	          activePlayer = _this$props3.activePlayer,
	          loop = _this$props3.loop,
	          onEnded = _this$props3.onEnded;

	      if (activePlayer.loopOnEnded && loop) {
	        _this.seekTo(0);
	      }

	      if (!loop) {
	        _this.isPlaying = false;
	        onEnded();
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "handleError", function () {
	      var _this$props4;

	      _this.isLoading = false;

	      (_this$props4 = _this.props).onError.apply(_this$props4, arguments);
	    });

	    _defineProperty(_assertThisInitialized(_this), "handleDurationCheck", function () {
	      clearTimeout(_this.durationCheckTimeout);

	      var duration = _this.getDuration();

	      if (duration) {
	        if (!_this.onDurationCalled) {
	          _this.props.onDuration(duration);

	          _this.onDurationCalled = true;
	        }
	      } else {
	        _this.durationCheckTimeout = setTimeout(_this.handleDurationCheck, 100);
	      }
	    });

	    _defineProperty(_assertThisInitialized(_this), "handleLoaded", function () {
	      // Sometimes we know loading has stopped but onReady/onPlay are never called
	      // so this provides a way for players to avoid getting stuck
	      _this.isLoading = false;
	    });

	    return _this;
	  }

	  _createClass(Player, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.mounted = true;
	    }
	  }, {
	    key: "componentWillUnmount",
	    value: function componentWillUnmount() {
	      clearTimeout(this.progressTimeout);
	      clearTimeout(this.durationCheckTimeout);

	      if (this.isReady && this.props.stopOnUnmount) {
	        this.player.stop();

	        if (this.player.disablePIP) {
	          this.player.disablePIP();
	        }
	      }

	      this.mounted = false;
	    }
	  }, {
	    key: "componentDidUpdate",
	    value: function componentDidUpdate(prevProps) {
	      var _this2 = this;

	      // If there isn’t a player available, don’t do anything
	      if (!this.player) {
	        return;
	      } // Invoke player methods based on changed props


	      var _this$props5 = this.props,
	          url = _this$props5.url,
	          playing = _this$props5.playing,
	          volume = _this$props5.volume,
	          muted = _this$props5.muted,
	          playbackRate = _this$props5.playbackRate,
	          pip = _this$props5.pip,
	          loop = _this$props5.loop,
	          activePlayer = _this$props5.activePlayer,
	          disableDeferredLoading = _this$props5.disableDeferredLoading;

	      if (!(0, _reactFastCompare["default"])(prevProps.url, url)) {
	        if (this.isLoading && !activePlayer.forceLoad && !disableDeferredLoading && !(0, _utils.isMediaStream)(url)) {
	          console.warn("ReactPlayer: the attempt to load ".concat(url, " is being deferred until the player has loaded"));
	          this.loadOnReady = url;
	          return;
	        }

	        this.isLoading = true;
	        this.startOnPlay = true;
	        this.onDurationCalled = false;
	        this.player.load(url, this.isReady);
	      }

	      if (!prevProps.playing && playing && !this.isPlaying) {
	        this.player.play();
	      }

	      if (prevProps.playing && !playing && this.isPlaying) {
	        this.player.pause();
	      }

	      if (!prevProps.pip && pip && this.player.enablePIP) {
	        this.player.enablePIP();
	      }

	      if (prevProps.pip && !pip && this.player.disablePIP) {
	        this.player.disablePIP();
	      }

	      if (prevProps.volume !== volume && volume !== null) {
	        this.player.setVolume(volume);
	      }

	      if (prevProps.muted !== muted) {
	        if (muted) {
	          this.player.mute();
	        } else {
	          this.player.unmute();

	          if (volume !== null) {
	            // Set volume next tick to fix a bug with DailyMotion
	            setTimeout(function () {
	              return _this2.player.setVolume(volume);
	            });
	          }
	        }
	      }

	      if (prevProps.playbackRate !== playbackRate && this.player.setPlaybackRate) {
	        this.player.setPlaybackRate(playbackRate);
	      }

	      if (prevProps.loop !== loop && this.player.setLoop) {
	        this.player.setLoop(loop);
	      }
	    }
	  }, {
	    key: "getDuration",
	    value: function getDuration() {
	      if (!this.isReady) return null;
	      return this.player.getDuration();
	    }
	  }, {
	    key: "getCurrentTime",
	    value: function getCurrentTime() {
	      if (!this.isReady) return null;
	      return this.player.getCurrentTime();
	    }
	  }, {
	    key: "getSecondsLoaded",
	    value: function getSecondsLoaded() {
	      if (!this.isReady) return null;
	      return this.player.getSecondsLoaded();
	    }
	  }, {
	    key: "seekTo",
	    value: function seekTo(amount, type) {
	      var _this3 = this;

	      // When seeking before player is ready, store value and seek later
	      if (!this.isReady) {
	        if (amount !== 0) {
	          this.seekOnPlay = amount;
	          setTimeout(function () {
	            _this3.seekOnPlay = null;
	          }, SEEK_ON_PLAY_EXPIRY);
	        }

	        return;
	      }

	      var isFraction = !type ? amount > 0 && amount < 1 : type === 'fraction';

	      if (isFraction) {
	        // Convert fraction to seconds based on duration
	        var duration = this.player.getDuration();

	        if (!duration) {
	          console.warn('ReactPlayer: could not seek using fraction – duration not yet available');
	          return;
	        }

	        this.player.seekTo(duration * amount);
	        return;
	      }

	      this.player.seekTo(amount);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var Player = this.props.activePlayer;

	      if (!Player) {
	        return null;
	      }

	      return /*#__PURE__*/_react["default"].createElement(Player, _extends({}, this.props, {
	        onMount: this.handlePlayerMount,
	        onReady: this.handleReady,
	        onPlay: this.handlePlay,
	        onPause: this.handlePause,
	        onEnded: this.handleEnded,
	        onLoaded: this.handleLoaded,
	        onError: this.handleError
	      }));
	    }
	  }]);

	  return Player;
	}(_react.Component);

	exports["default"] = Player;

	_defineProperty(Player, "displayName", 'Player');

	_defineProperty(Player, "propTypes", _props.propTypes);

	_defineProperty(Player, "defaultProps", _props.defaultProps);
} (Player));

var Preview$1 = {};

var hasRequiredPreview;

function requirePreview () {
	if (hasRequiredPreview) return Preview$1;
	hasRequiredPreview = 1;
	(function (exports) {

		function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports["default"] = void 0;

		var _react = _interopRequireWildcard(react.exports);

		function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

		function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

		function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

		function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

		function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

		function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

		function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

		function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

		function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

		function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		var ICON_SIZE = '64px';
		var cache = {};

		var Preview = /*#__PURE__*/function (_Component) {
		  _inherits(Preview, _Component);

		  var _super = _createSuper(Preview);

		  function Preview() {
		    var _this;

		    _classCallCheck(this, Preview);

		    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }

		    _this = _super.call.apply(_super, [this].concat(args));

		    _defineProperty(_assertThisInitialized(_this), "mounted", false);

		    _defineProperty(_assertThisInitialized(_this), "state", {
		      image: null
		    });

		    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (e) {
		      if (e.key === 'Enter' || e.key === ' ') {
		        _this.props.onClick();
		      }
		    });

		    return _this;
		  }

		  _createClass(Preview, [{
		    key: "componentDidMount",
		    value: function componentDidMount() {
		      this.mounted = true;
		      this.fetchImage(this.props);
		    }
		  }, {
		    key: "componentDidUpdate",
		    value: function componentDidUpdate(prevProps) {
		      var _this$props = this.props,
		          url = _this$props.url,
		          light = _this$props.light;

		      if (prevProps.url !== url || prevProps.light !== light) {
		        this.fetchImage(this.props);
		      }
		    }
		  }, {
		    key: "componentWillUnmount",
		    value: function componentWillUnmount() {
		      this.mounted = false;
		    }
		  }, {
		    key: "fetchImage",
		    value: function fetchImage(_ref) {
		      var _this2 = this;

		      var url = _ref.url,
		          light = _ref.light,
		          oEmbedUrl = _ref.oEmbedUrl;

		      if (typeof light === 'string') {
		        this.setState({
		          image: light
		        });
		        return;
		      }

		      if (cache[url]) {
		        this.setState({
		          image: cache[url]
		        });
		        return;
		      }

		      this.setState({
		        image: null
		      });
		      return window.fetch(oEmbedUrl.replace('{url}', url)).then(function (response) {
		        return response.json();
		      }).then(function (data) {
		        if (data.thumbnail_url && _this2.mounted) {
		          var image = data.thumbnail_url.replace('height=100', 'height=480');

		          _this2.setState({
		            image: image
		          });

		          cache[url] = image;
		        }
		      });
		    }
		  }, {
		    key: "render",
		    value: function render() {
		      var _this$props2 = this.props,
		          onClick = _this$props2.onClick,
		          playIcon = _this$props2.playIcon,
		          previewTabIndex = _this$props2.previewTabIndex;
		      var image = this.state.image;
		      var flexCenter = {
		        display: 'flex',
		        alignItems: 'center',
		        justifyContent: 'center'
		      };
		      var styles = {
		        preview: _objectSpread({
		          width: '100%',
		          height: '100%',
		          backgroundImage: image ? "url(".concat(image, ")") : undefined,
		          backgroundSize: 'cover',
		          backgroundPosition: 'center',
		          cursor: 'pointer'
		        }, flexCenter),
		        shadow: _objectSpread({
		          background: 'radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)',
		          borderRadius: ICON_SIZE,
		          width: ICON_SIZE,
		          height: ICON_SIZE
		        }, flexCenter),
		        playIcon: {
		          borderStyle: 'solid',
		          borderWidth: '16px 0 16px 26px',
		          borderColor: 'transparent transparent transparent white',
		          marginLeft: '7px'
		        }
		      };

		      var defaultPlayIcon = /*#__PURE__*/_react["default"].createElement("div", {
		        style: styles.shadow,
		        className: "react-player__shadow"
		      }, /*#__PURE__*/_react["default"].createElement("div", {
		        style: styles.playIcon,
		        className: "react-player__play-icon"
		      }));

		      return /*#__PURE__*/_react["default"].createElement("div", {
		        style: styles.preview,
		        className: "react-player__preview",
		        onClick: onClick,
		        tabIndex: previewTabIndex,
		        onKeyPress: this.handleKeyPress
		      }, playIcon || defaultPlayIcon);
		    }
		  }]);

		  return Preview;
		}(_react.Component);

		exports["default"] = Preview;
} (Preview$1));
	return Preview$1;
}

Object.defineProperty(ReactPlayer$1, "__esModule", {
  value: true
});
ReactPlayer$1.createReactPlayer = void 0;

var _react = _interopRequireWildcard(react.exports);

var _deepmerge = _interopRequireDefault(cjs);

var _memoizeOne = _interopRequireDefault(require$$2);

var _reactFastCompare = _interopRequireDefault(reactFastCompare);

var _props = props;

var _utils = utils;

var _Player3 = _interopRequireDefault(Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Preview = /*#__PURE__*/(0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(requirePreview());
  });
});
var IS_BROWSER = typeof window !== 'undefined' && window.document;
var IS_GLOBAL = typeof commonjsGlobal !== 'undefined' && commonjsGlobal.window && commonjsGlobal.window.document;
var SUPPORTED_PROPS = Object.keys(_props.propTypes); // Return null when rendering on the server
// as Suspense is not supported yet

var UniversalSuspense = IS_BROWSER || IS_GLOBAL ? _react.Suspense : function () {
  return null;
};
var customPlayers = [];

var createReactPlayer = function createReactPlayer(players, fallback) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    _inherits(ReactPlayer, _Component);

    var _super = _createSuper(ReactPlayer);

    function ReactPlayer() {
      var _this;

      _classCallCheck(this, ReactPlayer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _defineProperty(_assertThisInitialized(_this), "state", {
        showPreview: !!_this.props.light
      });

      _defineProperty(_assertThisInitialized(_this), "references", {
        wrapper: function wrapper(_wrapper) {
          _this.wrapper = _wrapper;
        },
        player: function player(_player) {
          _this.player = _player;
        }
      });

      _defineProperty(_assertThisInitialized(_this), "handleClickPreview", function (e) {
        _this.setState({
          showPreview: false
        });

        _this.props.onClickPreview(e);
      });

      _defineProperty(_assertThisInitialized(_this), "showPreview", function () {
        _this.setState({
          showPreview: true
        });
      });

      _defineProperty(_assertThisInitialized(_this), "getDuration", function () {
        if (!_this.player) return null;
        return _this.player.getDuration();
      });

      _defineProperty(_assertThisInitialized(_this), "getCurrentTime", function () {
        if (!_this.player) return null;
        return _this.player.getCurrentTime();
      });

      _defineProperty(_assertThisInitialized(_this), "getSecondsLoaded", function () {
        if (!_this.player) return null;
        return _this.player.getSecondsLoaded();
      });

      _defineProperty(_assertThisInitialized(_this), "getInternalPlayer", function () {
        var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'player';
        if (!_this.player) return null;
        return _this.player.getInternalPlayer(key);
      });

      _defineProperty(_assertThisInitialized(_this), "seekTo", function (fraction, type) {
        if (!_this.player) return null;

        _this.player.seekTo(fraction, type);
      });

      _defineProperty(_assertThisInitialized(_this), "handleReady", function () {
        _this.props.onReady(_assertThisInitialized(_this));
      });

      _defineProperty(_assertThisInitialized(_this), "getActivePlayer", (0, _memoizeOne["default"])(function (url) {
        for (var _i = 0, _arr = [].concat(customPlayers, _toConsumableArray(players)); _i < _arr.length; _i++) {
          var player = _arr[_i];

          if (player.canPlay(url)) {
            return player;
          }
        }

        if (fallback) {
          return fallback;
        }

        return null;
      }));

      _defineProperty(_assertThisInitialized(_this), "getConfig", (0, _memoizeOne["default"])(function (url, key) {
        var config = _this.props.config;
        return _deepmerge["default"].all([_props.defaultProps.config, _props.defaultProps.config[key] || {}, config, config[key] || {}]);
      }));

      _defineProperty(_assertThisInitialized(_this), "getAttributes", (0, _memoizeOne["default"])(function (url) {
        return (0, _utils.omit)(_this.props, SUPPORTED_PROPS);
      }));

      _defineProperty(_assertThisInitialized(_this), "renderActivePlayer", function (url) {
        if (!url) return null;

        var player = _this.getActivePlayer(url);

        if (!player) return null;

        var config = _this.getConfig(url, player.key);

        return /*#__PURE__*/_react["default"].createElement(_Player3["default"], _extends({}, _this.props, {
          key: player.key,
          ref: _this.references.player,
          config: config,
          activePlayer: player.lazyPlayer || player,
          onReady: _this.handleReady
        }));
      });

      return _this;
    }

    _createClass(ReactPlayer, [{
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !(0, _reactFastCompare["default"])(this.props, nextProps) || !(0, _reactFastCompare["default"])(this.state, nextState);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var light = this.props.light;

        if (!prevProps.light && light) {
          this.setState({
            showPreview: true
          });
        }

        if (prevProps.light && !light) {
          this.setState({
            showPreview: false
          });
        }
      }
    }, {
      key: "renderPreview",
      value: function renderPreview(url) {
        if (!url) return null;
        var _this$props = this.props,
            light = _this$props.light,
            playIcon = _this$props.playIcon,
            previewTabIndex = _this$props.previewTabIndex,
            oEmbedUrl = _this$props.oEmbedUrl;
        return /*#__PURE__*/_react["default"].createElement(Preview, {
          url: url,
          light: light,
          playIcon: playIcon,
          previewTabIndex: previewTabIndex,
          oEmbedUrl: oEmbedUrl,
          onClick: this.handleClickPreview
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            url = _this$props2.url,
            style = _this$props2.style,
            width = _this$props2.width,
            height = _this$props2.height,
            fallback = _this$props2.fallback,
            Wrapper = _this$props2.wrapper;
        var showPreview = this.state.showPreview;
        var attributes = this.getAttributes(url);
        return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
          ref: this.references.wrapper,
          style: _objectSpread(_objectSpread({}, style), {}, {
            width: width,
            height: height
          })
        }, attributes), /*#__PURE__*/_react["default"].createElement(UniversalSuspense, {
          fallback: fallback
        }, showPreview ? this.renderPreview(url) : this.renderActivePlayer(url)));
      }
    }]);

    return ReactPlayer;
  }(_react.Component), _defineProperty(_class, "displayName", 'ReactPlayer'), _defineProperty(_class, "propTypes", _props.propTypes), _defineProperty(_class, "defaultProps", _props.defaultProps), _defineProperty(_class, "addCustomPlayer", function (player) {
    customPlayers.push(player);
  }), _defineProperty(_class, "removeCustomPlayers", function () {
    customPlayers.length = 0;
  }), _defineProperty(_class, "canPlay", function (url) {
    for (var _i2 = 0, _arr2 = [].concat(customPlayers, _toConsumableArray(players)); _i2 < _arr2.length; _i2++) {
      var _Player = _arr2[_i2];

      if (_Player.canPlay(url)) {
        return true;
      }
    }

    return false;
  }), _defineProperty(_class, "canEnablePIP", function (url) {
    for (var _i3 = 0, _arr3 = [].concat(customPlayers, _toConsumableArray(players)); _i3 < _arr3.length; _i3++) {
      var _Player2 = _arr3[_i3];

      if (_Player2.canEnablePIP && _Player2.canEnablePIP(url)) {
        return true;
      }
    }

    return false;
  }), _temp;
};

ReactPlayer$1.createReactPlayer = createReactPlayer;

(function (exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;

	var _players = _interopRequireDefault(players);

	var _ReactPlayer = ReactPlayer$1;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	// Fall back to FilePlayer if nothing else can play the URL
	var fallback = _players["default"][_players["default"].length - 1];

	var _default = (0, _ReactPlayer.createReactPlayer)(_players["default"], fallback);

	exports["default"] = _default;
} (lib));

var ReactPlayer = /*@__PURE__*/getDefaultExportFromCjs(lib);

const Video = ({ className, controls, loop, muted, url }) => {
    return (React.createElement(Layout, { className: `aspect-w-16 aspect-h-9 ${className}` },
        React.createElement(ReactPlayer, Object.assign({}, { controls, loop, muted, url }, { width: '100%', height: '100%' }))));
};

var index$1 = { Button, Card, Video };

var index = { Column, Row, Grid };

export { index as Base, index$2 as Utilities, index$1 as Widgets };
