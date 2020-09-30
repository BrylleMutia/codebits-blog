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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");

var _jsxFileName = "C:\\Users\\Brylle Mutia\\Downloads\\SAVED\\Python\\CODE PLAYGROUND\\WEB PROJECTS\\## WEBAPPS\\#16 CODEBITS (BLOG)\\client\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // import withRedux from 'next-redux-wrapper';
// import { Provider } from 'react-redux';
// import makeStore from '../store/index';
// import App from "next/app";

 // import { Provider } from "react-redux";
// import { createWrapper } from "next-redux-wrapper";



const WrappedApp = ({
  Component,
  pageProps
}) => {
  __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }));

  return __jsx(Provider, {
    store: store,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })));
};

_c = WrappedApp;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_index__WEBPACK_IMPORTED_MODULE_3__["wrapper"].withRedux(WrappedApp)); // This default export is required in a new `pages/_app.js` file.
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

var _c, _c2;

$RefreshReg$(_c, "WrappedApp");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBO0FBQ0E7QUFFQTs7Q0FFQTtBQUNBOztBQUNBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzdDLFFBQUMsU0FBRCx5RkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQ0ksTUFBQyxRQUFEO0FBQVUsU0FBSyxFQUFFQyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxTQUFELHlGQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESixDQURKO0FBS0gsQ0FSRDs7S0FBTUYsVTtBQVVTLHFFQUFBSSxvREFBTyxDQUFDQyxTQUFSLENBQWtCTCxVQUFsQixDQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45NDNhNDI0ZmRiODVlYTAzYTc2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9nbG9iYWwvZ2xvYmFsLmNzc1wiO1xyXG4vLyBpbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgbWFrZVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcclxuXHJcbi8vIGltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuLy8gaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZS9pbmRleFwiO1xyXG5cclxuY29uc3QgV3JhcHBlZEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoV3JhcHBlZEFwcCk7XHJcblxyXG4vLyBUaGlzIGRlZmF1bHQgZXhwb3J0IGlzIHJlcXVpcmVkIGluIGEgbmV3IGBwYWdlcy9fYXBwLmpzYCBmaWxlLlxyXG4vLyBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzLCBzdG9yZSwgLi4ucmVzdCB9KSB7XHJcbi8vICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4vLyAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbi8vICAgICAgICAgPC9Qcm92aWRlcj5cclxuLy8gICAgICk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChtYWtlU3RvcmUpKE15QXBwKTtcclxuXHJcbi8vIGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlLCAuLi5yZXN0IH0pIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbi8vICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuLy8gICAgICAgICA8L1Byb3ZpZGVyPlxyXG4vLyAgICAgKTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gc3RvcmU7XHJcbi8vIGNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKG1ha2VTdG9yZSk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcblxyXG4vLyBpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xyXG4vLyBpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG4vLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBzdG9yZSBmcm9tIFwiLi4vc3RvcmUvaW5kZXhcIjtcclxuXHJcbi8vIGV4cG9ydCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbi8vICAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4vLyAgICAgICAgIGNvbnN0IGFwcFByb3BzID0gQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA/IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KSA6IHt9O1xyXG5cclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhhcHBQcm9wcyk7XHJcbi8vICAgICAgICAgcmV0dXJuIHsgYXBwUHJvcHM6IGFwcFByb3BzIH07XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmVuZGVyKCkge1xyXG4vLyAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBhcHBQcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuXHJcbi8vICAgICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbi8vICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5hcHBQcm9wc30gLz5cclxuLy8gICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuLy8gY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9