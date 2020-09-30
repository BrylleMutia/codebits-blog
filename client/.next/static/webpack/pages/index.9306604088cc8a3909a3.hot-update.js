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
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const postsDetails = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(state => state.posts.posts);

  const startLoading = () => setLoading(true);

  const stopLoading = () => setLoading(false);
  /*
      posts fetching happens after page navigation,
      so we need to switch loading state on router events.
  */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_actions_postsActions__WEBPACK_IMPORTED_MODULE_5__["getPosts"])(1));
  }, []);
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
  // let content = null;
  // if (isLoading) {
  //     content = <div>Loading...</div>;
  // } else {
  //     // generate posts list
  //     content = (
  //         <ul>
  //             {/* {postsDetails.posts.map((post) => (
  //                 <li key={post._id}>{post.title}</li>
  //             ))} */}
  //         </ul>
  //     );
  // }


  return __jsx("div", {
    className: _global_styles_module_css__WEBPACK_IMPORTED_MODULE_4__["container"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, "Posts list with pagination in Next.js"), __jsx(react_paginate__WEBPACK_IMPORTED_MODULE_2__["ReactPaginate"], {
    previousLabel: "previous",
    nextLabel: "next",
    breakLabel: "...",
    breakClassName: "break-me",
    activeClassName: "active",
    containerClassName: "pagination",
    subContainerClassName: "pages pagination",
    initialPage: postsDetails.currentPage - 1,
    pageCount: postsDetails.totalPages,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 5,
    onPageChange: paginationHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }));
}; // fetching posts in getInitialProps to make the app SEO-friendly
// Home.getInitialProps = ({ store, query }) => {
//     const page = query.page || 1; // if page is empty request the first page
//     store.dispatch(getPosts(1));
//     const posts = store.getState().posts.posts.posts;
//     return posts;
// };


_s(Home, "sFppGaz3K7TvSnlQHfoq25l/y1w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c = Home;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJwb3N0c0RldGFpbHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdHMiLCJzdGFydExvYWRpbmciLCJzdG9wTG9hZGluZyIsInVzZUVmZmVjdCIsImdldFBvc3RzIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJvZmYiLCJwYWdpbmF0aW9uSGFuZGxlciIsInBhZ2UiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsImN1cnJlbnRRdWVyeSIsInF1ZXJ5Iiwic2VsZWN0ZWQiLCJwdXNoIiwiY29udGFpbmVyIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDcEIsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTBCQyxzREFBUSxDQUFDLEtBQUQsQ0FBeEM7QUFFQSxRQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFFQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQSxLQUF4QixDQUFoQzs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsTUFBTVIsVUFBVSxDQUFDLElBQUQsQ0FBckM7O0FBQ0EsUUFBTVMsV0FBVyxHQUFHLE1BQU1ULFVBQVUsQ0FBQyxLQUFELENBQXBDO0FBRUE7Ozs7OztBQUtBVSx5REFBUyxDQUFDLE1BQU07QUFDWlIsWUFBUSxDQUFDUyxzRUFBUSxDQUFDLENBQUQsQ0FBVCxDQUFSO0FBQ0gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBRCx5REFBUyxDQUFDLE1BQU07QUFDWjtBQUNBRSxzREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDTixZQUFyQztBQUNBSSxzREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDTCxXQUF4QztBQUVBLFdBQU8sTUFBTTtBQUNUO0FBQ0FHLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixrQkFBbEIsRUFBc0NQLFlBQXRDO0FBQ0FJLHdEQUFNLENBQUNDLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNOLFdBQXpDO0FBQ0gsS0FKRDtBQUtILEdBVlEsRUFVTixFQVZNLENBQVQsQ0FsQm9CLENBOEJwQjtBQUNBOztBQUNBLFFBQU1PLGlCQUFpQixHQUFJQyxJQUFELElBQVU7QUFDaENDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZckIsS0FBSyxDQUFDc0IsTUFBbEI7QUFFQSxVQUFNQyxXQUFXLEdBQUd2QixLQUFLLENBQUNzQixNQUFOLENBQWFFLFFBQWpDO0FBQ0EsVUFBTUMsWUFBWSxHQUFHekIsS0FBSyxDQUFDc0IsTUFBTixDQUFhSSxLQUFsQztBQUVBRCxnQkFBWSxDQUFDTixJQUFiLEdBQW9CQSxJQUFJLENBQUNRLFFBQUwsR0FBZ0IsQ0FBcEM7QUFFQTNCLFNBQUssQ0FBQ3NCLE1BQU4sQ0FBYU0sSUFBYixDQUFrQjtBQUNkSixjQUFRLEVBQUVELFdBREk7QUFFZEcsV0FBSyxFQUFFRDtBQUZPLEtBQWxCO0FBSUgsR0FaRCxDQWhDb0IsQ0E4Q3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQ0k7QUFBSyxhQUFTLEVBQUVJLG1FQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FESixFQUlJLE1BQUMsNERBQUQ7QUFDSSxpQkFBYSxFQUFFLFVBRG5CO0FBRUksYUFBUyxFQUFFLE1BRmY7QUFHSSxjQUFVLEVBQUUsS0FIaEI7QUFJSSxrQkFBYyxFQUFFLFVBSnBCO0FBS0ksbUJBQWUsRUFBRSxRQUxyQjtBQU1JLHNCQUFrQixFQUFFLFlBTnhCO0FBT0kseUJBQXFCLEVBQUUsa0JBUDNCO0FBUUksZUFBVyxFQUFFdkIsWUFBWSxDQUFDd0IsV0FBYixHQUEyQixDQVI1QztBQVNJLGFBQVMsRUFBRXhCLFlBQVksQ0FBQ3lCLFVBVDVCO0FBVUksd0JBQW9CLEVBQUUsQ0FWMUI7QUFXSSxzQkFBa0IsRUFBRSxDQVh4QjtBQVlJLGdCQUFZLEVBQUViLGlCQVpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FESjtBQXFCSCxDQWxGRCxDLENBb0ZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7R0E1Rk1uQixJO1VBR2VNLHVELEVBQ0lFLHVEOzs7S0FKbkJSLEk7QUE4RlMscUVBQUFpQyw4REFBVSxDQUFDakMsSUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MzA2NjA0MDg4Y2M4YTM5MDlhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBSZWFjdFBhZ2luYXRlIH0gZnJvbSBcInJlYWN0LXBhZ2luYXRlXCI7XHJcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgY29udGFpbmVyLCBhcHAgfSBmcm9tIFwiLi9nbG9iYWwvc3R5bGVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIi4uL2FjdGlvbnMvcG9zdHNBY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHBvc3RzRGV0YWlscyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdHMucG9zdHMpO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgIC8qXHJcbiAgICAgICAgcG9zdHMgZmV0Y2hpbmcgaGFwcGVucyBhZnRlciBwYWdlIG5hdmlnYXRpb24sXHJcbiAgICAgICAgc28gd2UgbmVlZCB0byBzd2l0Y2ggbG9hZGluZyBzdGF0ZSBvbiByb3V0ZXIgZXZlbnRzLlxyXG4gICAgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKGdldFBvc3RzKDEpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgc2V0IHJvdXRlciBldmVudCBoYW5kbGVyc1xyXG4gICAgICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICAgICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgc3RvcExvYWRpbmcpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudFxyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgc3RhcnRMb2FkaW5nKTtcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIHN0b3BMb2FkaW5nKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vIHdoZW4gbmV3IHBhZ2UgaXMgc2VsZWN0ZWQgaW4gcGFnaW5hdGlvbiwgdGFrZSBjdXJyZW50IHBhdGggYW5kIHF1ZXJ5IHBhcmFtc1xyXG4gICAgLy8gdGhlbiBhZGQgb3IgbW9kaWZ5IHF1ZXJ5IHBhZ2UgcGFyYW0gYW5kIHRoZW4gbmF2aWdhdGUgdG8gdGhlIG5ldyByb3V0ZVxyXG4gICAgY29uc3QgcGFnaW5hdGlvbkhhbmRsZXIgPSAocGFnZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnJvdXRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcHJvcHMucm91dGVyLnBhdGhuYW1lO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRRdWVyeSA9IHByb3BzLnJvdXRlci5xdWVyeTtcclxuXHJcbiAgICAgICAgY3VycmVudFF1ZXJ5LnBhZ2UgPSBwYWdlLnNlbGVjdGVkICsgMTtcclxuXHJcbiAgICAgICAgcHJvcHMucm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBwYXRobmFtZTogY3VycmVudFBhdGgsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiBjdXJyZW50UXVlcnksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNvbmRpdGlvbmFsIHJlbmRlcmluZyBvZiB0aGUgcG9zdHMgbGlzdCBvciB0aGUgbG9hZGluZyBpbmRpY2F0b3JcclxuICAgIC8vIGxldCBjb250ZW50ID0gbnVsbDtcclxuICAgIC8vIGlmIChpc0xvYWRpbmcpIHtcclxuICAgIC8vICAgICBjb250ZW50ID0gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gICAgLy8gfSBlbHNlIHtcclxuICAgIC8vICAgICAvLyBnZW5lcmF0ZSBwb3N0cyBsaXN0XHJcbiAgICAvLyAgICAgY29udGVudCA9IChcclxuICAgIC8vICAgICAgICAgPHVsPlxyXG4gICAgLy8gICAgICAgICAgICAgey8qIHtwb3N0c0RldGFpbHMucG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5faWR9Pntwb3N0LnRpdGxlfTwvbGk+XHJcbiAgICAvLyAgICAgICAgICAgICApKX0gKi99XHJcbiAgICAvLyAgICAgICAgIDwvdWw+XHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDE+UG9zdHMgbGlzdCB3aXRoIHBhZ2luYXRpb24gaW4gTmV4dC5qczwvaDE+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInBvc3RzXCI+e2NvbnRlbnR9PC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgICAgPFJlYWN0UGFnaW5hdGVcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzTGFiZWw9e1wicHJldmlvdXNcIn1cclxuICAgICAgICAgICAgICAgIG5leHRMYWJlbD17XCJuZXh0XCJ9XHJcbiAgICAgICAgICAgICAgICBicmVha0xhYmVsPXtcIi4uLlwifVxyXG4gICAgICAgICAgICAgICAgYnJlYWtDbGFzc05hbWU9e1wiYnJlYWstbWVcIn1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzTmFtZT17XCJhY3RpdmVcIn1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT17XCJwYWdpbmF0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICBzdWJDb250YWluZXJDbGFzc05hbWU9e1wicGFnZXMgcGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgaW5pdGlhbFBhZ2U9e3Bvc3RzRGV0YWlscy5jdXJyZW50UGFnZSAtIDF9XHJcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e3Bvc3RzRGV0YWlscy50b3RhbFBhZ2VzfVxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUGFnZXNEaXNwbGF5ZWQ9ezJ9XHJcbiAgICAgICAgICAgICAgICBwYWdlUmFuZ2VEaXNwbGF5ZWQ9ezV9XHJcbiAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3BhZ2luYXRpb25IYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbi8vIGZldGNoaW5nIHBvc3RzIGluIGdldEluaXRpYWxQcm9wcyB0byBtYWtlIHRoZSBhcHAgU0VPLWZyaWVuZGx5XHJcbi8vIEhvbWUuZ2V0SW5pdGlhbFByb3BzID0gKHsgc3RvcmUsIHF1ZXJ5IH0pID0+IHtcclxuLy8gICAgIGNvbnN0IHBhZ2UgPSBxdWVyeS5wYWdlIHx8IDE7IC8vIGlmIHBhZ2UgaXMgZW1wdHkgcmVxdWVzdCB0aGUgZmlyc3QgcGFnZVxyXG5cclxuLy8gICAgIHN0b3JlLmRpc3BhdGNoKGdldFBvc3RzKDEpKTtcclxuLy8gICAgIGNvbnN0IHBvc3RzID0gc3RvcmUuZ2V0U3RhdGUoKS5wb3N0cy5wb3N0cy5wb3N0cztcclxuXHJcbi8vICAgICByZXR1cm4gcG9zdHM7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEhvbWUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9