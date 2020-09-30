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
/* harmony import */ var _global_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/global.css */ "./src/pages/global/global.css");
/* harmony import */ var _global_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./src/store/index.js");

var _jsxFileName = "C:\\Users\\Brylle Mutia\\Downloads\\SAVED\\Python\\CODE PLAYGROUND\\WEB PROJECTS\\## WEBAPPS\\#16 CODEBITS (BLOG)\\client\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
 // import withRedux from 'next-redux-wrapper';
// import { Provider } from 'react-redux';
// import makeStore from '../store/index';
// import App from "next/app";
// import React from "react";
// import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper";
// import store from "../store/index";
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







class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    console.log(appProps);
    return {
      appProps: appProps
    };
  }

  render() {
    const {
      Component,
      appProps
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: _store__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, appProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    })));
  }

}

const makeStore = () => _store__WEBPACK_IMPORTED_MODULE_6__["default"];

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(makeStore)(MyApp));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJnZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJhcHBQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJwcm9wcyIsInN0b3JlIiwibWFrZVN0b3JlIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CQywrQ0FBcEIsQ0FBd0I7QUFDcEIsZUFBYUMsZUFBYixDQUE2QjtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsR0FBN0IsRUFBaUQ7QUFDN0MsVUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNELGVBQVYsR0FBNEIsTUFBTUMsU0FBUyxDQUFDRCxlQUFWLENBQTBCRSxHQUExQixDQUFsQyxHQUFtRSxFQUFwRjtBQUVBRSxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFdBQU87QUFBRUEsY0FBUSxFQUFFQTtBQUFaLEtBQVA7QUFDSDs7QUFFREcsUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFTCxlQUFGO0FBQWFFO0FBQWIsUUFBMEIsS0FBS0ksS0FBckM7QUFFQSxXQUNJLE1BQUMsb0RBQUQ7QUFBVSxXQUFLLEVBQUVDLDhDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxTQUFELHlGQUFlTCxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FESixDQURKO0FBS0g7O0FBaEJtQjs7QUFtQnhCLE1BQU1NLFNBQVMsR0FBRyxNQUFNRCw4Q0FBeEI7O0FBQ2VFLGlJQUFTLENBQUNELFNBQUQsQ0FBVCxDQUFxQlgsS0FBckIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjAzZDEyYjA0NTU4ZjcxZDAzMzc3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2dsb2JhbC9nbG9iYWwuY3NzXCI7XHJcbi8vIGltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCBtYWtlU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xyXG5cclxuLy8gaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG4vLyBpbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcblxyXG4vLyBUaGlzIGRlZmF1bHQgZXhwb3J0IGlzIHJlcXVpcmVkIGluIGEgbmV3IGBwYWdlcy9fYXBwLmpzYCBmaWxlLlxyXG4vLyBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSwgLi4ucmVzdCB9KSB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4vLyAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbi8vICAgICAgICAgPC9Qcm92aWRlcj5cclxuLy8gICAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKTtcclxuXHJcbi8vIGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlLCAuLi5yZXN0IH0pIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbi8vICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuLy8gICAgICAgICA8L1Byb3ZpZGVyPlxyXG4vLyAgICAgKTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XHJcbi8vIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcblxyXG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gICAgICAgIGNvbnN0IGFwcFByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9O1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhhcHBQcm9wcyk7XHJcbiAgICAgICAgcmV0dXJuIHsgYXBwUHJvcHM6IGFwcFByb3BzIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBhcHBQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLmFwcFByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKSJdLCJzb3VyY2VSb290IjoiIn0=