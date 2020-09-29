webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/styles.module.css */ "./src/pages/global/styles.module.css");
/* harmony import */ var _global_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_postsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/postsActions */ "./src/actions/postsActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "C:\\Users\\Brylle Mutia\\Downloads\\SAVED\\Python\\CODE PLAYGROUND\\WEB PROJECTS\\## WEBAPPS\\#16 CODEBITS (BLOG)\\client\\src\\pages\\index.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Home = props => {
  _s();

  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const startLoading = () => setLoading(true);

  const stopLoading = () => setLoading(false);
  /*
      posts fetching happens after page navigation,
      so we need to switch loading state on router events.
  */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // after the component is mounted, set router event handlers
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on("routeChangeStart", startLoading);
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.on("routeChangeComplete", stopLoading);
    return () => {
      // componentWillUnmount
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.off("routeChangeStart", startLoading);
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.events.off("routeChangeComplete", stopLoading);
    };
  }, []); // when new page is selected in pagination, take current path and query params
  // then add or modify query page param and then navigate to the new route

  const paginationHandler = page => {
    console.log(props.router);
    const currentPath = props.router.pathname;
    const currentQuery = props.router.query;
    currentQuery.page = page.selected + 1;
    props.router.push({
      pathname: currentPath,
      query: currentQuery
    });
  }; // conditional rendering of the posts list or the loading indicator


  let content = null;

  if (isLoading) {
    content = __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, "Loading...");
  } else {
    // generate posts list
    content = __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, props.posts.posts.map(post => __jsx("li", {
      key: post._id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, post.title)));
  }

  return __jsx("div", {
    className: _global_styles_module_css__WEBPACK_IMPORTED_MODULE_4__["container"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Posts list with pagination in Next.js"), __jsx("div", {
    className: "posts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, content), __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_2__["ReactPaginate"], {
    previousLabel: "previous",
    nextLabel: "next",
    breakLabel: "...",
    breakClassName: "break-me",
    activeClassName: "active",
    containerClassName: "pagination",
    subContainerClassName: "pages pagination",
    initialPage: props.posts.currentPage - 1,
    pageCount: props.posts.totalPages,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 5,
    onPageChange: paginationHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }));
}; // fetching posts in getInitialProps to make the app SEO-friendly


_s(Home, "LHJkidtbt8bk0SOCXf2Y2viet6g=");

_c = Home;
Home.getInitialProps = _s2(({
  store,
  query
}) => {
  _s2();

  const page = query.page || 1; // if page is empty request the first page

  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  store.dispatch(Object(_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__["getPosts"])(page));
  return posts;
}, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"]];
});
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Home));

var _c, _c2;

$RefreshReg$(_c, "Home");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInN0YXJ0TG9hZGluZyIsInN0b3BMb2FkaW5nIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJvZmYiLCJwYWdpbmF0aW9uSGFuZGxlciIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsImN1cnJlbnRRdWVyeSIsInF1ZXJ5Iiwic2VsZWN0ZWQiLCJwdXNoIiwiY29udGVudCIsInBvc3RzIiwibWFwIiwicG9zdCIsIl9pZCIsInRpdGxlIiwiY29udGFpbmVyIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZ2V0UG9zdHMiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDcEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTBCQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEM7O0FBRUEsUUFBTUMsWUFBWSxHQUFHLE1BQU1GLFVBQVUsQ0FBQyxJQUFELENBQXJDOztBQUNBLFFBQU1HLFdBQVcsR0FBRyxNQUFNSCxVQUFVLENBQUMsS0FBRCxDQUFwQztBQUVBOzs7Ozs7QUFLQUkseURBQVMsQ0FBQyxNQUFNO0FBQ1o7QUFDQUMsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0wsWUFBckM7QUFDQUcsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixF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LHVEQUZyQjtBQUFBO0FBU2UscUVBQUFFLDhEQUFVLENBQUNyQyxJQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0Y2NhMGZlOGZkNjdlODA2OTE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IFJlYWN0UGFnaW5hdGUgfSBmcm9tIFwicmVhY3QtcGFnaW5hdGVcIjtcclxuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBjb250YWluZXIsIGFwcCB9IGZyb20gXCIuL2dsb2JhbC9zdHlsZXMubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tIFwiLi4vYWN0aW9ucy9wb3N0c0FjdGlvbnNcIjtcclxuXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuY29uc3QgSG9tZSA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnN0IHN0b3BMb2FkaW5nID0gKCkgPT4gc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgLypcclxuICAgICAgICBwb3N0cyBmZXRjaGluZyBoYXBwZW5zIGFmdGVyIHBhZ2UgbmF2aWdhdGlvbixcclxuICAgICAgICBzbyB3ZSBuZWVkIHRvIHN3aXRjaCBsb2FkaW5nIHN0YXRlIG9uIHJvdXRlciBldmVudHMuXHJcbiAgICAqL1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLCBzZXQgcm91dGVyIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnRMb2FkaW5nKTtcclxuICAgICAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBzdG9wTG9hZGluZyk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudFdpbGxVbm1vdW50XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydExvYWRpbmcpO1xyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgc3RvcExvYWRpbmcpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gd2hlbiBuZXcgcGFnZSBpcyBzZWxlY3RlZCBpbiBwYWdpbmF0aW9uLCB0YWtlIGN1cnJlbnQgcGF0aCBhbmQgcXVlcnkgcGFyYW1zXHJcbiAgICAvLyB0aGVuIGFkZCBvciBtb2RpZnkgcXVlcnkgcGFnZSBwYXJhbSBhbmQgdGhlbiBuYXZpZ2F0ZSB0byB0aGUgbmV3IHJvdXRlXHJcbiAgICBjb25zdCBwYWdpbmF0aW9uSGFuZGxlciA9IChwYWdlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvcHMucm91dGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwcm9wcy5yb3V0ZXIucGF0aG5hbWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFF1ZXJ5ID0gcHJvcHMucm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgICAgICBjdXJyZW50UXVlcnkucGFnZSA9IHBhZ2Uuc2VsZWN0ZWQgKyAxO1xyXG5cclxuICAgICAgICBwcm9wcy5yb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIHBhdGhuYW1lOiBjdXJyZW50UGF0aCxcclxuICAgICAgICAgICAgcXVlcnk6IGN1cnJlbnRRdWVyeSxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY29uZGl0aW9uYWwgcmVuZGVyaW5nIG9mIHRoZSBwb3N0cyBsaXN0IG9yIHRoZSBsb2FkaW5nIGluZGljYXRvclxyXG4gICAgbGV0IGNvbnRlbnQgPSBudWxsO1xyXG4gICAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgICAgIGNvbnRlbnQgPSA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGdlbmVyYXRlIHBvc3RzIGxpc3RcclxuICAgICAgICBjb250ZW50ID0gKFxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMucG9zdHMucG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5faWR9Pntwb3N0LnRpdGxlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMT5Qb3N0cyBsaXN0IHdpdGggcGFnaW5hdGlvbiBpbiBOZXh0LmpzPC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0c1wiPntjb250ZW50fTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9e1wicHJldmlvdXNcIn1cclxuICAgICAgICAgICAgICAgIG5leHRMYWJlbD17XCJuZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdpbmF0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICBzdWJDb250YWluZXJDbGFzc05hbWU9e1wicGFnZXMgcGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U9e3Byb3BzLnBvc3RzLmN1cnJlbnRQYWdlIC0gMX1cclxuICAgICAgICAgICAgICAgIHBhZ2VDb3VudD17cHJvcHMucG9zdHMudG90YWxQYWdlc31cclxuICAgICAgICAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXsyfVxyXG4gICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxyXG4gICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtwYWdpbmF0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBmZXRjaGluZyBwb3N0cyBpbiBnZXRJbml0aWFsUHJvcHMgdG8gbWFrZSB0aGUgYXBwIFNFTy1mcmllbmRseVxyXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9ICh7IHN0b3JlLCBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCBwYWdlID0gcXVlcnkucGFnZSB8fCAxOyAvLyBpZiBwYWdlIGlzIGVtcHR5IHJlcXVlc3QgdGhlIGZpcnN0IHBhZ2VcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBzdG9yZS5kaXNwYXRjaChnZXRQb3N0cyhwYWdlKSk7XHJcblxyXG4gICAgcmV0dXJuIHBvc3RzO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIb21lKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==