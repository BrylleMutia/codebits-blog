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
  dispatch(Object(_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__["getPosts"])(page));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInN0YXJ0TG9hZGluZyIsInN0b3BMb2FkaW5nIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJvZmYiLCJwYWdpbmF0aW9uSGFuZGxlciIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsImN1cnJlbnRRdWVyeSIsInF1ZXJ5Iiwic2VsZWN0ZWQiLCJwdXNoIiwiY29udGVudCIsInBvc3RzIiwibWFwIiwicG9zdCIsIl9pZCIsInRpdGxlIiwiY29udGFpbmVyIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZ2V0UG9zdHMiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDcEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTBCQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEM7O0FBRUEsUUFBTUMsWUFBWSxHQUFHLE1BQU1GLFVBQVUsQ0FBQyxJQUFELENBQXJDOztBQUNBLFFBQU1HLFdBQVcsR0FBRyxNQUFNSCxVQUFVLENBQUMsS0FBRCxDQUFwQztBQUVBOzs7Ozs7QUFLQUkseURBQVMsQ0FBQyxNQUFNO0FBQ1o7QUFDQUMsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0wsWUFBckM7QUFDQUcsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixF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O0FBQUE7QUFTZSxxRUFBQUUsOERBQVUsQ0FBQ3JDLElBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTEyOWI5MTkyYTVjNjJmN2JmNWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgUmVhY3RQYWdpbmF0ZSB9IGZyb20gXCJyZWFjdC1wYWdpbmF0ZVwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IGNvbnRhaW5lciwgYXBwIH0gZnJvbSBcIi4vZ2xvYmFsL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zL3Bvc3RzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgIHBvc3RzIGZldGNoaW5nIGhhcHBlbnMgYWZ0ZXIgcGFnZSBuYXZpZ2F0aW9uLFxyXG4gICAgICAgIHNvIHdlIG5lZWQgdG8gc3dpdGNoIGxvYWRpbmcgc3RhdGUgb24gcm91dGVyIGV2ZW50cy5cclxuICAgICovXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBhZnRlciB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQsIHNldCByb3V0ZXIgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydExvYWRpbmcpO1xyXG4gICAgICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIHN0b3BMb2FkaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29tcG9uZW50V2lsbFVubW91bnRcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBzdG9wTG9hZGluZyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyB3aGVuIG5ldyBwYWdlIGlzIHNlbGVjdGVkIGluIHBhZ2luYXRpb24sIHRha2UgY3VycmVudCBwYXRoIGFuZCBxdWVyeSBwYXJhbXNcclxuICAgIC8vIHRoZW4gYWRkIG9yIG1vZGlmeSBxdWVyeSBwYWdlIHBhcmFtIGFuZCB0aGVuIG5hdmlnYXRlIHRvIHRoZSBuZXcgcm91dGVcclxuICAgIGNvbnN0IHBhZ2luYXRpb25IYW5kbGVyID0gKHBhZ2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5yb3V0ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHByb3BzLnJvdXRlci5wYXRobmFtZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UXVlcnkgPSBwcm9wcy5yb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgICAgIGN1cnJlbnRRdWVyeS5wYWdlID0gcGFnZS5zZWxlY3RlZCArIDE7XHJcblxyXG4gICAgICAgIHByb3BzLnJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGN1cnJlbnRQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25kaXRpb25hbCByZW5kZXJpbmcgb2YgdGhlIHBvc3RzIGxpc3Qgb3IgdGhlIGxvYWRpbmcgaW5kaWNhdG9yXHJcbiAgICBsZXQgY29udGVudCA9IG51bGw7XHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgICAgY29udGVudCA9IDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgcG9zdHMgbGlzdFxyXG4gICAgICAgIGNvbnRlbnQgPSAoXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5wb3N0cy5wb3N0cy5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0Ll9pZH0+e3Bvc3QudGl0bGV9PC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgxPlBvc3RzIGxpc3Qgd2l0aCBwYWdpbmF0aW9uIGluIE5leHQuanM8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzXCI+e2NvbnRlbnR9PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8UmVhY3RQYWdpbmF0ZVxyXG4gICAgICAgICAgICAgICAgcHJldmlvdXNMYWJlbD17XCJwcmV2aW91c1wifVxyXG4gICAgICAgICAgICAgICAgbmV4dExhYmVsPXtcIm5leHRcIn1cclxuICAgICAgICAgICAgICAgIGJyZWFrTGFiZWw9e1wiLi4uXCJ9XHJcbiAgICAgICAgICAgICAgICBicmVha0NsYXNzTmFtZT17XCJicmVhay1tZVwifVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtcImFjdGl2ZVwifVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgIHN1YkNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdlcyBwYWdpbmF0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsUGFnZT17cHJvcHMucG9zdHMuY3VycmVudFBhZ2UgLSAxfVxyXG4gICAgICAgICAgICAgICAgcGFnZUNvdW50PXtwcm9wcy5wb3N0cy50b3RhbFBhZ2VzfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3BhZ2luYXRpb25IYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIGZldGNoaW5nIHBvc3RzIGluIGdldEluaXRpYWxQcm9wcyB0byBtYWtlIHRoZSBhcHAgU0VPLWZyaWVuZGx5XHJcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gKHsgc3RvcmUsIHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IHBhZ2UgPSBxdWVyeS5wYWdlIHx8IDE7IC8vIGlmIHBhZ2UgaXMgZW1wdHkgcmVxdWVzdCB0aGUgZmlyc3QgcGFnZVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcblxyXG4gICAgZGlzcGF0Y2goZ2V0UG9zdHMocGFnZSkpO1xyXG5cclxuICAgIHJldHVybiBwb3N0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSG9tZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=