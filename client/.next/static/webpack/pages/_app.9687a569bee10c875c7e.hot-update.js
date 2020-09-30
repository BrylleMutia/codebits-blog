webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);




const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]]; // const store = createStore(
//     rootReducer,
//     // applyMiddleware(...middleware)
//     compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// );
// export default store;

const initialState = {};

const makeStore = () => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, // applyMiddleware(...middleware)
  Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (makeStore); // const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
// export default store;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2luZGV4LmpzIl0sIm5hbWVzIjpbIm1pZGRsZXdhcmUiLCJ0aHVuayIsImluaXRpYWxTdGF0ZSIsIm1ha2VTdG9yZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDQyxtREFBRCxDQUFuQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1DLFlBQVksR0FBRyxFQUFyQjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsTUFBTTtBQUNwQixRQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQ3JCQyx1REFEcUIsRUFFckJKLFlBRnFCLEVBR3JCO0FBQ0FLLHNGQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdSLFVBQUosQ0FBaEIsQ0FKRSxDQUF6QjtBQU9BLFNBQU9JLEtBQVA7QUFDSCxDQVREOztBQVdlRCx3RUFBZixFLENBRUE7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjk2ODdhNTY5YmVlMTBjODc1YzdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5cclxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua107XHJcblxyXG4vLyBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4vLyAgICAgcm9vdFJlZHVjZXIsXHJcbi8vICAgICAvLyBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcclxuLy8gICAgIGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpLCB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpKVxyXG4vLyApO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgc3RvcmU7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxyXG5cclxuY29uc3QgbWFrZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgICAgICByb290UmVkdWNlcixcclxuICAgICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgICAgLy8gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXHJcbiAgICAgICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VTdG9yZTtcclxuXHJcbi8vIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKSk7XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBzdG9yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==