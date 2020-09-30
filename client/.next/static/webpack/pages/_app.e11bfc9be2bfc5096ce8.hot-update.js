webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _actions_postsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/postsActions */ "./src/actions/postsActions.js");


var _jsxFileName = "C:\\Users\\Brylle Mutia\\Downloads\\SAVED\\Python\\CODE PLAYGROUND\\WEB PROJECTS\\## WEBAPPS\\#16 CODEBITS (BLOG)\\client\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






class WrappedApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }
    }));
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(WrappedApp, "getInitialProps", async ({
  Component,
  ctx
}) => {
  ctx.store.dispatch(Object(_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__["getPosts"])(1));
  return {
    pageProps: _objectSpread(_objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {}), {}, {
      appProp: ctx.pathname
    })
  };
});

/* harmony default export */ __webpack_exports__["default"] = (_c = _store_index__WEBPACK_IMPORTED_MODULE_4__["wrapper"].withRedux(WrappedApp));

var _c;

$RefreshReg$(_c, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiV3JhcHBlZEFwcCIsIkFwcCIsInJlbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwiY3R4Iiwic3RvcmUiLCJkaXNwYXRjaCIsImdldFBvc3RzIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwUHJvcCIsInBhdGhuYW1lIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFVBQU4sU0FBeUJDLCtDQUF6QixDQUE2QjtBQVl6QkMsUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFQyxlQUFGO0FBQWFDO0FBQWIsUUFBMkIsS0FBS0MsS0FBdEM7QUFFQSxXQUFPLE1BQUMsU0FBRCx5RkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVA7QUFDSDs7QUFoQndCOzswRkFBdkJKLFUscUJBQ3VCLE9BQU87QUFBRUcsV0FBRjtBQUFhRztBQUFiLENBQVAsS0FBOEI7QUFDbkRBLEtBQUcsQ0FBQ0MsS0FBSixDQUFVQyxRQUFWLENBQW1CQyxzRUFBUSxDQUFDLENBQUQsQ0FBM0I7QUFFQSxTQUFPO0FBQ0hMLGFBQVMsa0NBQ0RELFNBQVMsQ0FBQ08sZUFBVixHQUE0QixNQUFNUCxTQUFTLENBQUNPLGVBQVYsQ0FBMEJKLEdBQTFCLENBQWxDLEdBQW1FLEVBRGxFO0FBRUxLLGFBQU8sRUFBRUwsR0FBRyxDQUFDTTtBQUZSO0FBRE4sR0FBUDtBQU1ILEM7O0FBU1Usb0VBQUFDLG9EQUFPLENBQUNDLFNBQVIsQ0FBa0JkLFVBQWxCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lMTFiZmM5YmUyYmZjNTA5NmNlOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwLCB7IEFwcEluaXRpYWxQcm9wcywgQXBwQ29udGV4dCB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIi4uL2FjdGlvbnMvcG9zdHNBY3Rpb25zXCI7XHJcblxyXG5jbGFzcyBXcmFwcGVkQXBwIGV4dGVuZHMgQXBwIHtcclxuICAgIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBDb21wb25lbnQsIGN0eCB9KSA9PiB7XHJcbiAgICAgICAgY3R4LnN0b3JlLmRpc3BhdGNoKGdldFBvc3RzKDEpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFnZVByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAuLi4oQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9KSxcclxuICAgICAgICAgICAgICAgIGFwcFByb3A6IGN0eC5wYXRobmFtZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFdyYXBwZWRBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9