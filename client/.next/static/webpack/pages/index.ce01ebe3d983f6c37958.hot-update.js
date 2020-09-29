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
    _s = $RefreshSig$();

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

Home.getInitialProps = ({
  store,
  query
}) => {
  const page = query.page || 1; // if page is empty request the first page

  store.dispatch(Object(_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__["getPosts"])(page));
  return posts;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsInN0YXJ0TG9hZGluZyIsInN0b3BMb2FkaW5nIiwidXNlRWZmZWN0IiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJvZmYiLCJwYWdpbmF0aW9uSGFuZGxlciIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsImN1cnJlbnRRdWVyeSIsInF1ZXJ5Iiwic2VsZWN0ZWQiLCJwdXNoIiwiY29udGVudCIsInBvc3RzIiwibWFwIiwicG9zdCIsIl9pZCIsInRpdGxlIiwiY29udGFpbmVyIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwiZ2V0SW5pdGlhbFByb3BzIiwic3RvcmUiLCJkaXNwYXRjaCIsImdldFBvc3RzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDcEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTBCQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEM7O0FBRUEsUUFBTUMsWUFBWSxHQUFHLE1BQU1GLFVBQVUsQ0FBQyxJQUFELENBQXJDOztBQUNBLFFBQU1HLFdBQVcsR0FBRyxNQUFNSCxVQUFVLENBQUMsS0FBRCxDQUFwQztBQUVBOzs7Ozs7QUFLQUkseURBQVMsQ0FBQyxNQUFNO0FBQ1o7QUFDQUMsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0wsWUFBckM7QUFDQUcsc0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3Q0osV0FBeEM7QUFF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cy9pbmRleC5jZTAxZWJlM2Q5ODNmNmMzNzk1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBSZWFjdFBhZ2luYXRlIH0gZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgY29udGFpbmVyLCBhcHAgfSBmcm9tIFwiLi9nbG9iYWwvc3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIi4uL2FjdGlvbnMvcG9zdHNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgICAgcG9zdHMgZmV0Y2hpbmcgaGFwcGVucyBhZnRlciBwYWdlIG5hdmlnYXRpb24sXHJcbiAgICAgICAgc28gd2UgbmVlZCB0byBzd2l0Y2ggbG9hZGluZyBzdGF0ZSBvbiByb3V0ZXIgZXZlbnRzLlxyXG4gICAgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgc2V0IHJvdXRlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICAgICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgc3RvcExvYWRpbmcpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudFxyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnRMb2FkaW5nKTtcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIHN0b3BMb2FkaW5nKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIHdoZW4gbmV3IHBhZ2UgaXMgc2VsZWN0ZWQgaW4gcGFnaW5hdGlvbiwgdGFrZSBjdXJyZW50IHBhdGggYW5kIHF1ZXJ5IHBhcmFtc1xyXG4gICAgLy8gdGhlbiBhZGQgb3IgbW9kaWZ5IHF1ZXJ5IHBhZ2UgcGFyYW0gYW5kIHRoZW4gbmF2aWdhdGUgdG8gdGhlIG5ldyByb3V0ZVxyXG4gICAgY29uc3QgcGFnaW5hdGlvbkhhbmRsZXIgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnJvdXRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcHJvcHMucm91dGVyLnBhdGhuYW1lO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRRdWVyeSA9IHByb3BzLnJvdXRlci5xdWVyeTtcclxuXHJcbiAgICAgICAgY3VycmVudFF1ZXJ5LnBhZ2UgPSBwYWdlLnNlbGVjdGVkICsgMTtcclxuXHJcbiAgICAgICAgcHJvcHMucm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogY3VycmVudFBhdGgsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBjdXJyZW50UXVlcnksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbmRpdGlvbmFsIHJlbmRlcmluZyBvZiB0aGUgcG9zdHMgbGlzdCBvciB0aGUgbG9hZGluZyBpbmRpY2F0b3JcclxuICAgIGxldCBjb250ZW50ID0gbnVsbDtcclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgICBjb250ZW50ID0gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBnZW5lcmF0ZSBwb3N0cyBsaXN0XHJcbiAgICAgICAgY29udGVudCA9IChcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLnBvc3RzLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuX2lkfT57cG9zdC50aXRsZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDE+UG9zdHMgbGlzdCB3aXRoIHBhZ2luYXRpb24gaW4gTmV4dC5qczwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdHNcIj57Y29udGVudH08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcInByZXZpb3VzXCJ9XHJcbiAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e1wibmV4dFwifVxyXG4gICAgICAgICAgICAgICAgYnJlYWtMYWJlbD17XCIuLi5cIn1cclxuICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrLW1lXCJ9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e1wiYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9e1wicGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2VzIHBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlPXtwcm9wcy5wb3N0cy5jdXJyZW50UGFnZSAtIDF9XHJcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3Byb3BzLnBvc3RzLnRvdGFsUGFnZXN9XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5QYWdlc0Rpc3BsYXllZD17Mn1cclxuICAgICAgICAgICAgICAgIHBhZ2VSYW5nZURpc3BsYXllZD17NX1cclxuICAgICAgICAgICAgICAgIG9uUGFnZUNoYW5nZT17cGFnaW5hdGlvbkhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gZmV0Y2hpbmcgcG9zdHMgaW4gZ2V0SW5pdGlhbFByb3BzIHRvIG1ha2UgdGhlIGFwcCBTRU8tZnJpZW5kbHlcclxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSAoeyBzdG9yZSwgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZSA9IHF1ZXJ5LnBhZ2UgfHwgMTsgLy8gaWYgcGFnZSBpcyBlbXB0eSByZXF1ZXN0IHRoZSBmaXJzdCBwYWdlXHJcblxyXG4gICAgc3RvcmUuZGlzcGF0Y2goZ2V0UG9zdHMocGFnZSkpO1xyXG5cclxuICAgIHJldHVybiBwb3N0cztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSG9tZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=