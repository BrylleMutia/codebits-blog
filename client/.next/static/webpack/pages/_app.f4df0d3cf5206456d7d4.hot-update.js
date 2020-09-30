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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");

var _jsxFileName = "C:\\Users\\Brylle Mutia\\Downloads\\SAVED\\Python\\CODE PLAYGROUND\\WEB PROJECTS\\## WEBAPPS\\#16 CODEBITS (BLOG)\\client\\src\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // import withRedux from 'next-redux-wrapper';
// import { Provider } from 'react-redux';
// import makeStore from '../store/index';
// import App from "next/app";


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

  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
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
/* harmony default export */ __webpack_exports__["default"] = (_c2 = _store_index__WEBPACK_IMPORTED_MODULE_4__["wrapper"].withRedux(WrappedApp)); // This default export is required in a new `pages/_app.js` file.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInN0b3JlIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUM3QyxRQUFDLFNBQUQseUZBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUNJLE1BQUMsb0RBQUQ7QUFBVSxTQUFLLEVBQUVDLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQseUZBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURKLENBREo7QUFLSCxDQVJEOztLQUFNRixVO0FBVVMscUVBQUFJLG9EQUFPLENBQUNDLFNBQVIsQ0FBa0JMLFVBQWxCLENBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY0ZGYwZDNjZjUyMDY0NTZkN2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2dsb2JhbC9nbG9iYWwuY3NzXCI7XHJcbi8vIGltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuLy8gaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCBtYWtlU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xyXG5cclxuLy8gaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyB3cmFwcGVyIH0gZnJvbSBcIi4uL3N0b3JlL2luZGV4XCI7XHJcblxyXG5jb25zdCBXcmFwcGVkQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChXcmFwcGVkQXBwKTtcclxuXHJcbi8vIFRoaXMgZGVmYXVsdCBleHBvcnQgaXMgcmVxdWlyZWQgaW4gYSBuZXcgYHBhZ2VzL19hcHAuanNgIGZpbGUuXHJcbi8vIGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlLCAuLi5yZXN0IH0pIHtcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbi8vICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuLy8gICAgICAgICA8L1Byb3ZpZGVyPlxyXG4vLyAgICAgKTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KG1ha2VTdG9yZSkoTXlBcHApO1xyXG5cclxuLy8gZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUsIC4uLnJlc3QgfSkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuLy8gICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4vLyAgICAgICAgIDwvUHJvdmlkZXI+XHJcbi8vICAgICApO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBtYWtlU3RvcmUgPSAoKSA9PiBzdG9yZTtcclxuLy8gY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIobWFrZVN0b3JlKTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTtcclxuXHJcbi8vIGltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XHJcbi8vIGltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9zdG9yZS9pbmRleFwiO1xyXG5cclxuLy8gZXhwb3J0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuLy8gICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIGN0eCB9KSB7XHJcbi8vICAgICAgICAgY29uc3QgYXBwUHJvcHMgPSBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID8gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpIDoge307XHJcblxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGFwcFByb3BzKTtcclxuLy8gICAgICAgICByZXR1cm4geyBhcHBQcm9wczogYXBwUHJvcHMgfTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIGFwcFByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuLy8gICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLmFwcFByb3BzfSAvPlxyXG4vLyAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi8vIGNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHN0b3JlO1xyXG4vLyBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpO1xyXG4vLyBleHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=