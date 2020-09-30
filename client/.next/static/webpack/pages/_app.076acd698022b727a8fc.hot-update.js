webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/next-redux-wrapper/es6/index.js":
/*!******************************************************!*\
  !*** ./node_modules/next-redux-wrapper/es6/index.js ***!
  \******************************************************/
/*! exports provided: HYDRATE, STOREKEY, createWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HYDRATE", function() { return HYDRATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STOREKEY", function() { return STOREKEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWrapper", function() { return createWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var HYDRATE = '__NEXT_REDUX_WRAPPER_HYDRATE__';
var STOREKEY = '__NEXT_REDUX_WRAPPER_STORE__';
var getIsServer = function () { return typeof window === 'undefined'; };
var getDeserializedState = function (initialState, _a) {
    var deserializeState = (_a === void 0 ? {} : _a).deserializeState;
    return deserializeState ? deserializeState(initialState) : initialState;
};
var getSerializedState = function (state, _a) {
    var serializeState = (_a === void 0 ? {} : _a).serializeState;
    return serializeState ? serializeState(state) : state;
};
var getStoreKey = function (_a) {
    var storeKey = (_a === void 0 ? {} : _a).storeKey;
    return storeKey || STOREKEY;
};
var initStore = function (_a) {
    var makeStore = _a.makeStore, context = _a.context, config = _a.config;
    var storeKey = getStoreKey(config);
    var createStore = function () { return makeStore(context); };
    if (getIsServer()) {
        var c = context;
        var req = void 0;
        if (c.req)
            req = c.req;
        if (c.ctx && c.ctx.req)
            req = c.ctx.req;
        if (req) {
            // ATTENTION! THIS IS INTERNAL, DO NOT ACCESS DIRECTLY ANYWHERE ELSE
            // @see https://github.com/kirill-konshin/next-redux-wrapper/pull/196#issuecomment-611673546
            if (!req.__nextReduxWrapperStore)
                req.__nextReduxWrapperStore = createStore();
            return req.__nextReduxWrapperStore;
        }
        return createStore();
    }
    // Memoize store if client
    if (!(storeKey in window)) {
        window[storeKey] = createStore();
    }
    return window[storeKey];
};
var createWrapper = function (makeStore, config) {
    if (config === void 0) { config = {}; }
    var makeProps = function (_a) {
        var callback = _a.callback, context = _a.context, _b = _a.isApp, isApp = _b === void 0 ? false : _b;
        return __awaiter(void 0, void 0, void 0, function () {
            var store, initialProps, _c, state;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        store = initStore({ context: context, makeStore: makeStore, config: config });
                        if (config.debug)
                            console.log("1. getProps created store with state", store.getState());
                        _c = callback;
                        if (!_c) return [3 /*break*/, 2];
                        return [4 /*yield*/, callback(
                            // merging store into context instead of just passing as another argument because it's impossible to override getInitialProps signature
                            isApp ? __assign(__assign({}, context), { ctx: __assign(__assign({}, context.ctx), { store: store }) }) : __assign(__assign({}, context), { store: store }))];
                    case 1:
                        _c = (_d.sent());
                        _d.label = 2;
                    case 2:
                        initialProps = (_c) ||
                            {};
                        if (config.debug)
                            console.log("3. getProps after dispatches has store state", store.getState());
                        state = store.getState();
                        return [2 /*return*/, {
                                initialProps: initialProps,
                                initialState: getIsServer() ? getSerializedState(state, config) : state,
                            }];
                }
            });
        });
    };
    var getInitialPageProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (context.store) {
                console.warn('No need to wrap pages if _app was wrapped');
                return [2 /*return*/, callback(context)];
            }
            return [2 /*return*/, makeProps({ callback: callback, context: context })];
        });
    }); }; };
    var getInitialAppProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context, isApp: true })];
            case 1: return [2 /*return*/, (_a.sent())];
        }
    }); }); }; }; // this is just to convince TS
    var getStaticProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, props, settings, wrapperProps;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, makeProps({ callback: callback, context: context })];
                case 1:
                    _a = _c.sent(), _b = _a.initialProps, props = _b.props, settings = __rest(_b, ["props"]), wrapperProps = __rest(_a, ["initialProps"]);
                    return [2 /*return*/, __assign(__assign({}, settings), { props: __assign(__assign({}, wrapperProps), props) })];
            }
        });
    }); }; };
    var getServerSideProps = function (callback) { return function (context) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getStaticProps(callback)(context)];
                case 1: return [2 /*return*/, _a.sent()]; // just not to repeat myself
            }
        });
    }); }; };
    var withRedux = function (Component) {
        var displayName = "withRedux(" + (Component.displayName || Component.name || 'Component') + ")";
        //TODO Check if pages/_app was wrapped so there's no need to wrap a page itself
        var Wrapper = function (_a, context) {
            var _b;
            var initialState = _a.initialState, initialProps = _a.initialProps, props = __rest(_a, ["initialState", "initialProps"]);
            var isFirstRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
            // this happens when App has page with getServerSideProps/getStaticProps
            var initialStateFromGSPorGSSR = (_b = props === null || props === void 0 ? void 0 : props.pageProps) === null || _b === void 0 ? void 0 : _b.initialState;
            if (config.debug)
                console.log('4. WrappedApp created new store with', displayName, {
                    initialState: initialState,
                    initialStateFromGSPorGSSR: initialStateFromGSPorGSSR,
                });
            var store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(initStore({ makeStore: makeStore, config: config, context: context }));
            var hydrate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
                if (initialState)
                    store.current.dispatch({
                        type: HYDRATE,
                        payload: getDeserializedState(initialState, config),
                    });
                // ATTENTION! This code assumes that Page's getServerSideProps is executed after App.getInitialProps
                // so we dispatch in this order
                if (initialStateFromGSPorGSSR)
                    store.current.dispatch({
                        type: HYDRATE,
                        payload: getDeserializedState(initialStateFromGSPorGSSR, config),
                    });
            }, [initialStateFromGSPorGSSR, initialState]);
            // apply synchronously on first render (both server side and client side)
            if (isFirstRender.current)
                hydrate();
            // apply async in case props have changed, on navigation for example
            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
                if (isFirstRender.current) {
                    isFirstRender.current = false;
                    return;
                }
                hydrate();
            }, [hydrate]);
            // order is important! Next.js overwrites props from pages/_app with getStaticProps from page
            // @see https://github.com/zeit/next.js/issues/11648
            if (initialProps && initialProps.pageProps)
                props.pageProps = __assign(__assign({}, initialProps.pageProps), props.pageProps);
            var resultProps = props;
            // just some cleanup to prevent passing it as props, we need to clone props to safely delete initialState
            if (initialStateFromGSPorGSSR) {
                resultProps = __assign(__assign({}, props), { pageProps: __assign({}, props.pageProps) });
                delete resultProps.pageProps.initialState;
            }
            return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], { store: store.current },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, __assign({}, initialProps, resultProps))));
        };
        Wrapper.displayName = displayName;
        if ('getInitialProps' in Component)
            Wrapper.getInitialProps = function (context) { return __awaiter(void 0, void 0, void 0, function () {
                var callback;
                return __generator(this, function (_a) {
                    callback = Component.getInitialProps;
                    return [2 /*return*/, (context.ctx ? getInitialAppProps(callback) : getInitialPageProps(callback))(context)];
                });
            }); };
        return Wrapper;
    };
    return {
        getServerSideProps: getServerSideProps,
        getStaticProps: getStaticProps,
        withRedux: withRedux,
    };
};
// Legacy
/* harmony default export */ __webpack_exports__["default"] = (function (makeStore, config) {
    if (config === void 0) { config = {}; }
    console.warn('/!\\ You are using legacy implementaion. Please update your code: use createWrapper() and wrapper.withRedux().');
    return createWrapper(makeStore, config).withRedux;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
/*!********************************************************!*\
  !*** ./node_modules/redux-devtools-extension/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _global_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global/global.css */ "./src/pages/global/global.css");
/* harmony import */ var _global_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_global_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
 // import withRedux from 'next-redux-wrapper';
// import { Provider } from 'react-redux';
// import makeStore from '../store/index';
// import App from "next/app";

 // import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper";

 // This default export is required in a new `pages/_app.js` file.
// function MyApp({ Component, pageProps, store, ...rest }) {
//     return (
//         <Provider store={store}>
//             <Component {...pageProps} />
//         </Provider>
//     );
// }
// export default withRedux(makeStore)(MyApp);
// function MyApp({ Component, pageProps, store, ...rest }) {
//     return (
//         <Provider store={store}>
//             <Component {...pageProps} />
//         </Provider>
//     );
// }
// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);
// export default wrapper.withRedux(MyApp);
// import App from "next/app";
// import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper";
// import React from "react";
// import store from "../store/index";
// export class MyApp extends App {
//     static async getInitialProps({ Component, ctx }) {
//         const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
//         console.log(appProps);
//         return { appProps: appProps };
//     }
//     render() {
//         const { Component, appProps } = this.props;
//         return (
//             <Provider store={store}>
//                 <Component {...appProps} />
//             </Provider>
//         );
//     }
// }
// const makeStore = () => store;
// const wrapper = createWrapper(makeStore);
// export default wrapper.withRedux(MyApp);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/controlReducer.js":
/*!****************************************!*\
  !*** ./src/reducers/controlReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const initialState = {
  tab: "Latest",
  switches: []
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CHANGE_TAB"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        tab: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SWITCH_ON"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        switches: [...state.switches, action.payload]
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SWITCH_OFF"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        switches: [...state.switches].filter(activeSwitch => activeSwitch !== action.payload)
      });

    default:
      return _objectSpread({}, state);
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/errorReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/errorReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const initialState = {
  msg: null,
  status: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_ERRORS"]:
      return action.payload;

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ERRORS"]:
      return {
        msg: null,
        status: null
      };

    default:
      return _objectSpread({}, state);
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _controlReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlReducer */ "./src/reducers/controlReducer.js");
/* harmony import */ var _postsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postsReducer */ "./src/reducers/postsReducer.js");
/* harmony import */ var _errorReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errorReducer */ "./src/reducers/errorReducer.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  controls: _controlReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  posts: _postsReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  error: _errorReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/reducers/postsReducer.js":
/*!**************************************!*\
  !*** ./src/reducers/postsReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const initialState = {
  isLoading: false,
  posts: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["HYDRATE"]:
      return _objectSpread(_objectSpread({}, state), action.payload);

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["SET_POSTS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        posts: action.payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["POSTS_LOADING"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["POSTS_LOADED"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false
      });

    default:
      return state;
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");





const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]]; // const store = createStore(
//     rootReducer,
//     // applyMiddleware(...middleware)
//     compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );
// export default store;

const initialState = {};

const makeStore = () => Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, // applyMiddleware(...middleware)
Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware))); // export default makeStore;
// const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__["createWrapper"])(makeStore, {
  debug: true
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1yZWR1eC13cmFwcGVyL2VzNi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2VzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL2NvbnRyb2xSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlcnMvZXJyb3JSZWR1Y2VyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1Y2Vycy9wb3N0c1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ0YWIiLCJzd2l0Y2hlcyIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJwYXlsb2FkIiwiQ0hBTkdFX1RBQiIsIlNXSVRDSF9PTiIsIlNXSVRDSF9PRkYiLCJmaWx0ZXIiLCJhY3RpdmVTd2l0Y2giLCJtc2ciLCJzdGF0dXMiLCJHRVRfRVJST1JTIiwiQ0xFQVJfRVJST1JTIiwiY29tYmluZVJlZHVjZXJzIiwiY29udHJvbHMiLCJjb250cm9sUmVkdWNlciIsInBvc3RzIiwicG9zdHNSZWR1Y2VyIiwiZXJyb3IiLCJlcnJvclJlZHVjZXIiLCJpc0xvYWRpbmciLCJTRVRfUE9TVFMiLCJQT1NUU19MT0FESU5HIiwiUE9TVFNfTE9BREVEIiwibWlkZGxld2FyZSIsInRodW5rIiwibWFrZVN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBZ0IsU0FBSSxJQUFJLFNBQUk7QUFDNUI7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQUksSUFBSSxTQUFJO0FBQzdCLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtQkFBbUIsU0FBSSxJQUFJLFNBQUk7QUFDL0IsYUFBYSw2QkFBNkIsMEJBQTBCLGFBQWEsRUFBRSxxQkFBcUI7QUFDeEcsZ0JBQWdCLHFEQUFxRCxvRUFBb0UsYUFBYSxFQUFFO0FBQ3hKLHNCQUFzQixzQkFBc0IscUJBQXFCLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtDQUFrQyxTQUFTO0FBQzNDLGtDQUFrQyxXQUFXLFVBQVU7QUFDdkQseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQSw2R0FBNkcsT0FBTyxVQUFVO0FBQzlILGdGQUFnRixpQkFBaUIsT0FBTztBQUN4Ryx3REFBd0QsZ0JBQWdCLFFBQVEsT0FBTztBQUN2Riw4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QWUsQ0FBQyxHQUFHTixVQUFKLENBQWhCLENBSlosQ0FEZixDLENBUUE7QUFFQTs7O0FBRU8sTUFBTU8sT0FBTyxHQUFHQyx3RUFBYSxDQUFDTixTQUFELEVBQVk7QUFBRU8sT0FBSyxFQUFFO0FBQVQsQ0FBWixDQUE3QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA3NmFjZDY5ODAyMmI3MjdhOGZjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmV4cG9ydCB2YXIgSFlEUkFURSA9ICdfX05FWFRfUkVEVVhfV1JBUFBFUl9IWURSQVRFX18nO1xuZXhwb3J0IHZhciBTVE9SRUtFWSA9ICdfX05FWFRfUkVEVVhfV1JBUFBFUl9TVE9SRV9fJztcbnZhciBnZXRJc1NlcnZlciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnOyB9O1xudmFyIGdldERlc2VyaWFsaXplZFN0YXRlID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSwgX2EpIHtcbiAgICB2YXIgZGVzZXJpYWxpemVTdGF0ZSA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuZGVzZXJpYWxpemVTdGF0ZTtcbiAgICByZXR1cm4gZGVzZXJpYWxpemVTdGF0ZSA/IGRlc2VyaWFsaXplU3RhdGUoaW5pdGlhbFN0YXRlKSA6IGluaXRpYWxTdGF0ZTtcbn07XG52YXIgZ2V0U2VyaWFsaXplZFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlLCBfYSkge1xuICAgIHZhciBzZXJpYWxpemVTdGF0ZSA9IChfYSA9PT0gdm9pZCAwID8ge30gOiBfYSkuc2VyaWFsaXplU3RhdGU7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZVN0YXRlID8gc2VyaWFsaXplU3RhdGUoc3RhdGUpIDogc3RhdGU7XG59O1xudmFyIGdldFN0b3JlS2V5ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHN0b3JlS2V5ID0gKF9hID09PSB2b2lkIDAgPyB7fSA6IF9hKS5zdG9yZUtleTtcbiAgICByZXR1cm4gc3RvcmVLZXkgfHwgU1RPUkVLRVk7XG59O1xudmFyIGluaXRTdG9yZSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBtYWtlU3RvcmUgPSBfYS5tYWtlU3RvcmUsIGNvbnRleHQgPSBfYS5jb250ZXh0LCBjb25maWcgPSBfYS5jb25maWc7XG4gICAgdmFyIHN0b3JlS2V5ID0gZ2V0U3RvcmVLZXkoY29uZmlnKTtcbiAgICB2YXIgY3JlYXRlU3RvcmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBtYWtlU3RvcmUoY29udGV4dCk7IH07XG4gICAgaWYgKGdldElzU2VydmVyKCkpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuICAgICAgICB2YXIgcmVxID0gdm9pZCAwO1xuICAgICAgICBpZiAoYy5yZXEpXG4gICAgICAgICAgICByZXEgPSBjLnJlcTtcbiAgICAgICAgaWYgKGMuY3R4ICYmIGMuY3R4LnJlcSlcbiAgICAgICAgICAgIHJlcSA9IGMuY3R4LnJlcTtcbiAgICAgICAgaWYgKHJlcSkge1xuICAgICAgICAgICAgLy8gQVRURU5USU9OISBUSElTIElTIElOVEVSTkFMLCBETyBOT1QgQUNDRVNTIERJUkVDVExZIEFOWVdIRVJFIEVMU0VcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2tpcmlsbC1rb25zaGluL25leHQtcmVkdXgtd3JhcHBlci9wdWxsLzE5NiNpc3N1ZWNvbW1lbnQtNjExNjczNTQ2XG4gICAgICAgICAgICBpZiAoIXJlcS5fX25leHRSZWR1eFdyYXBwZXJTdG9yZSlcbiAgICAgICAgICAgICAgICByZXEuX19uZXh0UmVkdXhXcmFwcGVyU3RvcmUgPSBjcmVhdGVTdG9yZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcS5fX25leHRSZWR1eFdyYXBwZXJTdG9yZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3JlYXRlU3RvcmUoKTtcbiAgICB9XG4gICAgLy8gTWVtb2l6ZSBzdG9yZSBpZiBjbGllbnRcbiAgICBpZiAoIShzdG9yZUtleSBpbiB3aW5kb3cpKSB7XG4gICAgICAgIHdpbmRvd1tzdG9yZUtleV0gPSBjcmVhdGVTdG9yZSgpO1xuICAgIH1cbiAgICByZXR1cm4gd2luZG93W3N0b3JlS2V5XTtcbn07XG5leHBvcnQgdmFyIGNyZWF0ZVdyYXBwZXIgPSBmdW5jdGlvbiAobWFrZVN0b3JlLCBjb25maWcpIHtcbiAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICB2YXIgbWFrZVByb3BzID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IF9hLmNhbGxiYWNrLCBjb250ZXh0ID0gX2EuY29udGV4dCwgX2IgPSBfYS5pc0FwcCwgaXNBcHAgPSBfYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYjtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmUsIGluaXRpYWxQcm9wcywgX2MsIHN0YXRlO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmUgPSBpbml0U3RvcmUoeyBjb250ZXh0OiBjb250ZXh0LCBtYWtlU3RvcmU6IG1ha2VTdG9yZSwgY29uZmlnOiBjb25maWcgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmRlYnVnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiMS4gZ2V0UHJvcHMgY3JlYXRlZCBzdG9yZSB3aXRoIHN0YXRlXCIsIHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSBjYWxsYmFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghX2MpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgY2FsbGJhY2soXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVyZ2luZyBzdG9yZSBpbnRvIGNvbnRleHQgaW5zdGVhZCBvZiBqdXN0IHBhc3NpbmcgYXMgYW5vdGhlciBhcmd1bWVudCBiZWNhdXNlIGl0J3MgaW1wb3NzaWJsZSB0byBvdmVycmlkZSBnZXRJbml0aWFsUHJvcHMgc2lnbmF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBcHAgPyBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgY3R4OiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dC5jdHgpLCB7IHN0b3JlOiBzdG9yZSB9KSB9KSA6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBjb250ZXh0KSwgeyBzdG9yZTogc3RvcmUgfSkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSAoX2Quc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFByb3BzID0gKF9jKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWJ1ZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjMuIGdldFByb3BzIGFmdGVyIGRpc3BhdGNoZXMgaGFzIHN0b3JlIHN0YXRlXCIsIHN0b3JlLmdldFN0YXRlKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogZ2V0SXNTZXJ2ZXIoKSA/IGdldFNlcmlhbGl6ZWRTdGF0ZShzdGF0ZSwgY29uZmlnKSA6IHN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHZhciBnZXRJbml0aWFsUGFnZVByb3BzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuc3RvcmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ05vIG5lZWQgdG8gd3JhcCBwYWdlcyBpZiBfYXBwIHdhcyB3cmFwcGVkJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGNhbGxiYWNrKGNvbnRleHQpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBtYWtlUHJvcHMoeyBjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQgfSldO1xuICAgICAgICB9KTtcbiAgICB9KTsgfTsgfTtcbiAgICB2YXIgZ2V0SW5pdGlhbEFwcFByb3BzID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7IHJldHVybiBmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG1ha2VQcm9wcyh7IGNhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dCwgaXNBcHA6IHRydWUgfSldO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgKF9hLnNlbnQoKSldO1xuICAgICAgICB9XG4gICAgfSk7IH0pOyB9OyB9OyAvLyB0aGlzIGlzIGp1c3QgdG8gY29udmluY2UgVFNcbiAgICB2YXIgZ2V0U3RhdGljUHJvcHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBwcm9wcywgc2V0dGluZ3MsIHdyYXBwZXJQcm9wcztcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbWFrZVByb3BzKHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0IH0pXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hID0gX2Muc2VudCgpLCBfYiA9IF9hLmluaXRpYWxQcm9wcywgcHJvcHMgPSBfYi5wcm9wcywgc2V0dGluZ3MgPSBfX3Jlc3QoX2IsIFtcInByb3BzXCJdKSwgd3JhcHBlclByb3BzID0gX19yZXN0KF9hLCBbXCJpbml0aWFsUHJvcHNcIl0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX19hc3NpZ24oX19hc3NpZ24oe30sIHNldHRpbmdzKSwgeyBwcm9wczogX19hc3NpZ24oX19hc3NpZ24oe30sIHdyYXBwZXJQcm9wcyksIHByb3BzKSB9KV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9OyB9O1xuICAgIHZhciBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHsgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0KSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRTdGF0aWNQcm9wcyhjYWxsYmFjaykoY29udGV4dCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hLnNlbnQoKV07IC8vIGp1c3Qgbm90IHRvIHJlcGVhdCBteXNlbGZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07IH07XG4gICAgdmFyIHdpdGhSZWR1eCA9IGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgICAgICAgdmFyIGRpc3BsYXlOYW1lID0gXCJ3aXRoUmVkdXgoXCIgKyAoQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnKSArIFwiKVwiO1xuICAgICAgICAvL1RPRE8gQ2hlY2sgaWYgcGFnZXMvX2FwcCB3YXMgd3JhcHBlZCBzbyB0aGVyZSdzIG5vIG5lZWQgdG8gd3JhcCBhIHBhZ2UgaXRzZWxmXG4gICAgICAgIHZhciBXcmFwcGVyID0gZnVuY3Rpb24gKF9hLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgX2I7XG4gICAgICAgICAgICB2YXIgaW5pdGlhbFN0YXRlID0gX2EuaW5pdGlhbFN0YXRlLCBpbml0aWFsUHJvcHMgPSBfYS5pbml0aWFsUHJvcHMsIHByb3BzID0gX19yZXN0KF9hLCBbXCJpbml0aWFsU3RhdGVcIiwgXCJpbml0aWFsUHJvcHNcIl0pO1xuICAgICAgICAgICAgdmFyIGlzRmlyc3RSZW5kZXIgPSB1c2VSZWYodHJ1ZSk7XG4gICAgICAgICAgICAvLyB0aGlzIGhhcHBlbnMgd2hlbiBBcHAgaGFzIHBhZ2Ugd2l0aCBnZXRTZXJ2ZXJTaWRlUHJvcHMvZ2V0U3RhdGljUHJvcHNcbiAgICAgICAgICAgIHZhciBpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSID0gKF9iID0gcHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmluaXRpYWxTdGF0ZTtcbiAgICAgICAgICAgIGlmIChjb25maWcuZGVidWcpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzQuIFdyYXBwZWRBcHAgY3JlYXRlZCBuZXcgc3RvcmUgd2l0aCcsIGRpc3BsYXlOYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogaW5pdGlhbFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSOiBpbml0aWFsU3RhdGVGcm9tR1NQb3JHU1NSLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gdXNlUmVmKGluaXRTdG9yZSh7IG1ha2VTdG9yZTogbWFrZVN0b3JlLCBjb25maWc6IGNvbmZpZywgY29udGV4dDogY29udGV4dCB9KSk7XG4gICAgICAgICAgICB2YXIgaHlkcmF0ZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbFN0YXRlKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jdXJyZW50LmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEhZRFJBVEUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBnZXREZXNlcmlhbGl6ZWRTdGF0ZShpbml0aWFsU3RhdGUsIGNvbmZpZyksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIEFUVEVOVElPTiEgVGhpcyBjb2RlIGFzc3VtZXMgdGhhdCBQYWdlJ3MgZ2V0U2VydmVyU2lkZVByb3BzIGlzIGV4ZWN1dGVkIGFmdGVyIEFwcC5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkaXNwYXRjaCBpbiB0aGlzIG9yZGVyXG4gICAgICAgICAgICAgICAgaWYgKGluaXRpYWxTdGF0ZUZyb21HU1BvckdTU1IpXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmN1cnJlbnQuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogSFlEUkFURSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGdldERlc2VyaWFsaXplZFN0YXRlKGluaXRpYWxTdGF0ZUZyb21HU1BvckdTU1IsIGNvbmZpZyksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgW2luaXRpYWxTdGF0ZUZyb21HU1BvckdTU1IsIGluaXRpYWxTdGF0ZV0pO1xuICAgICAgICAgICAgLy8gYXBwbHkgc3luY2hyb25vdXNseSBvbiBmaXJzdCByZW5kZXIgKGJvdGggc2VydmVyIHNpZGUgYW5kIGNsaWVudCBzaWRlKVxuICAgICAgICAgICAgaWYgKGlzRmlyc3RSZW5kZXIuY3VycmVudClcbiAgICAgICAgICAgICAgICBoeWRyYXRlKCk7XG4gICAgICAgICAgICAvLyBhcHBseSBhc3luYyBpbiBjYXNlIHByb3BzIGhhdmUgY2hhbmdlZCwgb24gbmF2aWdhdGlvbiBmb3IgZXhhbXBsZVxuICAgICAgICAgICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdFJlbmRlci5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRmlyc3RSZW5kZXIuY3VycmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGh5ZHJhdGUoKTtcbiAgICAgICAgICAgIH0sIFtoeWRyYXRlXSk7XG4gICAgICAgICAgICAvLyBvcmRlciBpcyBpbXBvcnRhbnQhIE5leHQuanMgb3ZlcndyaXRlcyBwcm9wcyBmcm9tIHBhZ2VzL19hcHAgd2l0aCBnZXRTdGF0aWNQcm9wcyBmcm9tIHBhZ2VcbiAgICAgICAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9pc3N1ZXMvMTE2NDhcbiAgICAgICAgICAgIGlmIChpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLnBhZ2VQcm9wcylcbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgaW5pdGlhbFByb3BzLnBhZ2VQcm9wcyksIHByb3BzLnBhZ2VQcm9wcyk7XG4gICAgICAgICAgICB2YXIgcmVzdWx0UHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgIC8vIGp1c3Qgc29tZSBjbGVhbnVwIHRvIHByZXZlbnQgcGFzc2luZyBpdCBhcyBwcm9wcywgd2UgbmVlZCB0byBjbG9uZSBwcm9wcyB0byBzYWZlbHkgZGVsZXRlIGluaXRpYWxTdGF0ZVxuICAgICAgICAgICAgaWYgKGluaXRpYWxTdGF0ZUZyb21HU1BvckdTU1IpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRQcm9wcyA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBwcm9wcyksIHsgcGFnZVByb3BzOiBfX2Fzc2lnbih7fSwgcHJvcHMucGFnZVByb3BzKSB9KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgcmVzdWx0UHJvcHMucGFnZVByb3BzLmluaXRpYWxTdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChQcm92aWRlciwgeyBzdG9yZTogc3RvcmUuY3VycmVudCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfX2Fzc2lnbih7fSwgaW5pdGlhbFByb3BzLCByZXN1bHRQcm9wcykpKSk7XG4gICAgICAgIH07XG4gICAgICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgICAgaWYgKCdnZXRJbml0aWFsUHJvcHMnIGluIENvbXBvbmVudClcbiAgICAgICAgICAgIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gZnVuY3Rpb24gKGNvbnRleHQpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgKGNvbnRleHQuY3R4ID8gZ2V0SW5pdGlhbEFwcFByb3BzKGNhbGxiYWNrKSA6IGdldEluaXRpYWxQYWdlUHJvcHMoY2FsbGJhY2spKShjb250ZXh0KV07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgfTtcbiAgICAgICAgcmV0dXJuIFdyYXBwZXI7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRTZXJ2ZXJTaWRlUHJvcHM6IGdldFNlcnZlclNpZGVQcm9wcyxcbiAgICAgICAgZ2V0U3RhdGljUHJvcHM6IGdldFN0YXRpY1Byb3BzLFxuICAgICAgICB3aXRoUmVkdXg6IHdpdGhSZWR1eCxcbiAgICB9O1xufTtcbi8vIExlZ2FjeVxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChtYWtlU3RvcmUsIGNvbmZpZykge1xuICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgIGNvbnNvbGUud2FybignLyFcXFxcIFlvdSBhcmUgdXNpbmcgbGVnYWN5IGltcGxlbWVudGFpb24uIFBsZWFzZSB1cGRhdGUgeW91ciBjb2RlOiB1c2UgY3JlYXRlV3JhcHBlcigpIGFuZCB3cmFwcGVyLndpdGhSZWR1eCgpLicpO1xuICAgIHJldHVybiBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSwgY29uZmlnKS53aXRoUmVkdXg7XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY29tcG9zZSA9IHJlcXVpcmUoJ3JlZHV4JykuY29tcG9zZTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29tcG9zZVdpdGhEZXZUb29scyA9IChcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6XG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2U7XG4gICAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbik7XG5cbmV4cG9ydHMuZGV2VG9vbHNFbmhhbmNlciA9IChcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIDpcbiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKG5vb3ApIHsgcmV0dXJuIG5vb3A7IH0gfVxuKTtcbiIsImZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7XG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcblxuZXhwb3J0IGRlZmF1bHQgdGh1bms7IiwiaW1wb3J0IFwiLi9nbG9iYWwvZ2xvYmFsLmNzc1wiO1xyXG4vLyBpbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgbWFrZVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcclxuXHJcbi8vIGltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9pbmRleFwiO1xyXG5cclxuLy8gVGhpcyBkZWZhdWx0IGV4cG9ydCBpcyByZXF1aXJlZCBpbiBhIG5ldyBgcGFnZXMvX2FwcC5qc2AgZmlsZS5cclxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUsIC4uLnJlc3QgfSkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuLy8gICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4vLyAgICAgICAgIDwvUHJvdmlkZXI+XHJcbi8vICAgICApO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgobWFrZVN0b3JlKShNeUFwcCk7XHJcblxyXG4vLyBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSwgLi4ucmVzdCB9KSB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4vLyAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbi8vICAgICAgICAgPC9Qcm92aWRlcj5cclxuLy8gICAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xyXG4vLyBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG5cclxuLy8gaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4vLyAgICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuLy8gICAgICAgICBjb25zdCBhcHBQcm9wcyA9IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCkgOiB7fTtcclxuXHJcbi8vICAgICAgICAgY29uc29sZS5sb2coYXBwUHJvcHMpO1xyXG4vLyAgICAgICAgIHJldHVybiB7IGFwcFByb3BzOiBhcHBQcm9wcyB9O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHJlbmRlcigpIHtcclxuLy8gICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgYXBwUHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4vLyAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4uYXBwUHJvcHN9IC8+XHJcbi8vICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XHJcbi8vIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuIiwiaW1wb3J0IHsgQ0hBTkdFX1RBQiwgU1dJVENIX09OLCBTV0lUQ0hfT0ZGIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHRhYjogXCJMYXRlc3RcIixcclxuICAgIHN3aXRjaGVzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIENIQU5HRV9UQUI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHRhYjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgU1dJVENIX09OOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hlczogWy4uLnN0YXRlLnN3aXRjaGVzLCBhY3Rpb24ucGF5bG9hZF0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgU1dJVENIX09GRjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc3dpdGNoZXM6IFsuLi5zdGF0ZS5zd2l0Y2hlc10uZmlsdGVyKChhY3RpdmVTd2l0Y2gpID0+IGFjdGl2ZVN3aXRjaCAhPT0gYWN0aW9uLnBheWxvYWQpLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgR0VUX0VSUk9SUywgQ0xFQVJfRVJST1JTIH0gZnJvbSBcIi4uL2FjdGlvbnMvdHlwZXNcIjtcclxuaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1zZzogbnVsbCxcclxuICAgIHN0YXR1czogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEdFVF9FUlJPUlM6XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBjYXNlIENMRUFSX0VSUk9SUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG1zZzogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogbnVsbCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBjb250cm9sUmVkdWNlciBmcm9tIFwiLi9jb250cm9sUmVkdWNlclwiO1xyXG5pbXBvcnQgcG9zdHNSZWR1Y2VyIGZyb20gXCIuL3Bvc3RzUmVkdWNlclwiO1xyXG5pbXBvcnQgZXJyb3JSZWR1Y2VyIGZyb20gXCIuL2Vycm9yUmVkdWNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGNvbnRyb2xzOiBjb250cm9sUmVkdWNlcixcclxuICAgIHBvc3RzOiBwb3N0c1JlZHVjZXIsXHJcbiAgICBlcnJvcjogZXJyb3JSZWR1Y2VyXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBTRVRfUE9TVFMsIFBPU1RTX0xPQURJTkcsIFBPU1RTX0xPQURFRCB9IGZyb20gXCIuLi9hY3Rpb25zL3R5cGVzXCI7XHJcbmltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgcG9zdHM6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFNFVF9QT1NUUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcG9zdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBjYXNlIFBPU1RTX0xPQURJTkc6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBQT1NUU19MT0FERUQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuLi9yZWR1Y2Vycy9pbmRleFwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rXTtcclxuXHJcbi8vIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXHJcbi8vICAgICByb290UmVkdWNlcixcclxuLy8gICAgIC8vIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxyXG4vLyAgICAgY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSksIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkpXHJcbi8vICk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT5cclxuICAgIGNyZWF0ZVN0b3JlKFxyXG4gICAgICAgIHJvb3RSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICAvLyBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxuICAgICAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSlcclxuICAgICk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBtYWtlU3RvcmU7XHJcblxyXG4vLyBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKSk7XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlLCB7IGRlYnVnOiB0cnVlIH0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9