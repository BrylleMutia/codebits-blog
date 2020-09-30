module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/errorActions.js":
/*!*************************************!*\
  !*** ./src/actions/errorActions.js ***!
  \*************************************/
/*! exports provided: returnErrors, clearErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnErrors", function() { return returnErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearErrors", function() { return clearErrors; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
 // error logging state

const returnErrors = (msg, status) => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["GET_ERRORS"],
  payload: {
    msg,
    status
  }
});
const clearErrors = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERRORS"]
});

/***/ }),

/***/ "./src/actions/postsActions.js":
/*!*************************************!*\
  !*** ./src/actions/postsActions.js ***!
  \*************************************/
/*! exports provided: getPosts, setPostsLoading, setPostsLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPostsLoading", function() { return setPostsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPostsLoaded", function() { return setPostsLoaded; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
/* harmony import */ var _errorActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errorActions */ "./src/actions/errorActions.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


 // get posts from database

const getPosts = page => dispatch => {
  dispatch(setPostsLoading());
  const headers = {
    "Content-Type": "application/json"
  };
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/posts?page=${page}`, headers).then(posts => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SET_POSTS"],
    payload: posts.data
  })).catch(err => dispatch(Object(_errorActions__WEBPACK_IMPORTED_MODULE_1__["returnErrors"])(err.response.data, err.response.status)));
  dispatch(setPostsLoaded());
};
const setPostsLoading = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["POSTS_LOADING"]
});
const setPostsLoaded = () => ({
  type: _types__WEBPACK_IMPORTED_MODULE_0__["POSTS_LOADED"]
});

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: CHANGE_TAB, SET_POSTS, POSTS_LOADING, POSTS_LOADED, GET_ERRORS, CLEAR_ERRORS, SWITCH_ON, SWITCH_OFF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_TAB", function() { return CHANGE_TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_POSTS", function() { return SET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_LOADING", function() { return POSTS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS_LOADED", function() { return POSTS_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ERRORS", function() { return GET_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERRORS", function() { return CLEAR_ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_ON", function() { return SWITCH_ON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWITCH_OFF", function() { return SWITCH_OFF; });
const CHANGE_TAB = "CHANGE_TAB";
const SET_POSTS = "SET_POSTS";
const POSTS_LOADING = "POSTS_LOADING";
const POSTS_LOADED = "POSTS_LOADED";
const GET_ERRORS = "GET_ERRORS";
const CLEAR_ERRORS = "CLEAR_ERRORS";
const SWITCH_ON = "SWITCH_ON";
const SWITCH_OFF = "SWITCH_OFF";

/***/ }),

/***/ "./src/pages/global/styles.module.css":
/*!********************************************!*\
  !*** ./src/pages/global/styles.module.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"app": "styles_app__3l-Bl",
	"container": "styles_container__m8K0S",
	"side_padding": "styles_side_padding__3PPNm",
	"horizontal_spacer": "styles_horizontal_spacer__3lawl",
	"flex_row": "styles_flex_row__2ta7A",
	"link": "styles_link__kna0W",
	"input": "styles_input__1vuuO"
};


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-paginate */ "react-paginate");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/styles.module.css */ "./src/pages/global/styles.module.css");
/* harmony import */ var _global_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_global_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_postsActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/postsActions */ "./src/actions/postsActions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Brylle Mutia\\Downloads\\SAVED\\Python\\CODE PLAYGROUND\\WEB PROJECTS\\## WEBAPPS\\#16 CODEBITS (BLOG)\\client\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Home = props => {
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


/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Home));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-paginate":
/*!*********************************!*\
  !*** external "react-paginate" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-paginate");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZXJyb3JBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3Bvc3RzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZ2xvYmFsL3N0eWxlcy5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wYWdpbmF0ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsicmV0dXJuRXJyb3JzIiwibXNnIiwic3RhdHVzIiwidHlwZSIsIkdFVF9FUlJPUlMiLCJwYXlsb2FkIiwiY2xlYXJFcnJvcnMiLCJDTEVBUl9FUlJPUlMiLCJnZXRQb3N0cyIsInBhZ2UiLCJkaXNwYXRjaCIsInNldFBvc3RzTG9hZGluZyIsImhlYWRlcnMiLCJheGlvcyIsImdldCIsInRoZW4iLCJwb3N0cyIsIlNFVF9QT1NUUyIsImRhdGEiLCJjYXRjaCIsImVyciIsInJlc3BvbnNlIiwic2V0UG9zdHNMb2FkZWQiLCJQT1NUU19MT0FESU5HIiwiUE9TVFNfTE9BREVEIiwiQ0hBTkdFX1RBQiIsIlNXSVRDSF9PTiIsIlNXSVRDSF9PRkYiLCJIb21lIiwicHJvcHMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJ1c2VEaXNwYXRjaCIsInBvc3RzRGV0YWlscyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzdGFydExvYWRpbmciLCJzdG9wTG9hZGluZyIsInVzZUVmZmVjdCIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwib2ZmIiwicGFnaW5hdGlvbkhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwiY3VycmVudFBhdGgiLCJwYXRobmFtZSIsImN1cnJlbnRRdWVyeSIsInF1ZXJ5Iiwic2VsZWN0ZWQiLCJwdXNoIiwiY29udGFpbmVyIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLE1BQU1BLFlBQVksR0FBRyxDQUFDQyxHQUFELEVBQU1DLE1BQU4sTUFBa0I7QUFDMUNDLE1BQUksRUFBRUMsaURBRG9DO0FBRTFDQyxTQUFPLEVBQUU7QUFDTEosT0FESztBQUVMQztBQUZLO0FBRmlDLENBQWxCLENBQXJCO0FBUUEsTUFBTUks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QjtBQVdJLHNCQUFrQixFQUFFLENBWHhCO0FBWUksZ0JBQVksRUFBRVosaUJBWmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixDQURKO0FBcUJILENBbEZELEMsQ0FvRkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVlYSw2SEFBVSxDQUFDN0IsSUFBRCxDQUF6QixFOzs7Ozs7Ozs7OztBQ3pHQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgR0VUX0VSUk9SUywgQ0xFQVJfRVJST1JTIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbi8vIGVycm9yIGxvZ2dpbmcgc3RhdGVcclxuZXhwb3J0IGNvbnN0IHJldHVybkVycm9ycyA9IChtc2csIHN0YXR1cykgPT4gKHtcclxuICAgIHR5cGU6IEdFVF9FUlJPUlMsXHJcbiAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgbXNnLFxyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgY2xlYXJFcnJvcnMgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogQ0xFQVJfRVJST1JTLFxyXG59KTtcclxuIiwiaW1wb3J0IHsgU0VUX1BPU1RTLCBQT1NUU19MT0FERUQsIFBPU1RTX0xPQURJTkcgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyByZXR1cm5FcnJvcnMsIGNsZWFyRXJyb3JzIH0gZnJvbSBcIi4vZXJyb3JBY3Rpb25zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIGdldCBwb3N0cyBmcm9tIGRhdGFiYXNlXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IChwYWdlKSA9PiAoZGlzcGF0Y2gpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldFBvc3RzTG9hZGluZygpKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXJzID0ge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfTtcclxuXHJcbiAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoYC9hcGkvcG9zdHM/cGFnZT0ke3BhZ2V9YCwgaGVhZGVycylcclxuICAgICAgICAudGhlbigocG9zdHMpID0+XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFNFVF9QT1NUUyxcclxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHBvc3RzLmRhdGEsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBkaXNwYXRjaChyZXR1cm5FcnJvcnMoZXJyLnJlc3BvbnNlLmRhdGEsIGVyci5yZXNwb25zZS5zdGF0dXMpKSk7XHJcblxyXG4gICAgZGlzcGF0Y2goc2V0UG9zdHNMb2FkZWQoKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0UG9zdHNMb2FkaW5nID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFBPU1RTX0xPQURJTkcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFBvc3RzTG9hZGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6IFBPU1RTX0xPQURFRCxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBDSEFOR0VfVEFCID0gXCJDSEFOR0VfVEFCXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfUE9TVFMgPSBcIlNFVF9QT1NUU1wiO1xyXG5leHBvcnQgY29uc3QgUE9TVFNfTE9BRElORyA9IFwiUE9TVFNfTE9BRElOR1wiO1xyXG5leHBvcnQgY29uc3QgUE9TVFNfTE9BREVEID0gXCJQT1NUU19MT0FERURcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9FUlJPUlMgPSBcIkdFVF9FUlJPUlNcIjtcclxuZXhwb3J0IGNvbnN0IENMRUFSX0VSUk9SUyA9IFwiQ0xFQVJfRVJST1JTXCI7XHJcbmV4cG9ydCBjb25zdCBTV0lUQ0hfT04gPSBcIlNXSVRDSF9PTlwiO1xyXG5leHBvcnQgY29uc3QgU1dJVENIX09GRiA9IFwiU1dJVENIX09GRlwiOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFwcFwiOiBcInN0eWxlc19hcHBfXzNsLUJsXCIsXG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fbThLMFNcIixcblx0XCJzaWRlX3BhZGRpbmdcIjogXCJzdHlsZXNfc2lkZV9wYWRkaW5nX18zUFBObVwiLFxuXHRcImhvcml6b250YWxfc3BhY2VyXCI6IFwic3R5bGVzX2hvcml6b250YWxfc3BhY2VyX18zbGF3bFwiLFxuXHRcImZsZXhfcm93XCI6IFwic3R5bGVzX2ZsZXhfcm93X18ydGE3QVwiLFxuXHRcImxpbmtcIjogXCJzdHlsZXNfbGlua19fa25hMFdcIixcblx0XCJpbnB1dFwiOiBcInN0eWxlc19pbnB1dF9fMXZ1dU9cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgUmVhY3RQYWdpbmF0ZSB9IGZyb20gXCJyZWFjdC1wYWdpbmF0ZVwiO1xyXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IGNvbnRhaW5lciwgYXBwIH0gZnJvbSBcIi4vZ2xvYmFsL3N0eWxlcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gXCIuLi9hY3Rpb25zL3Bvc3RzQWN0aW9uc1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBwb3N0c0RldGFpbHMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3RzLnBvc3RzKTtcclxuXHJcbiAgICBjb25zdCBzdGFydExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAvKlxyXG4gICAgICAgIHBvc3RzIGZldGNoaW5nIGhhcHBlbnMgYWZ0ZXIgcGFnZSBuYXZpZ2F0aW9uLFxyXG4gICAgICAgIHNvIHdlIG5lZWQgdG8gc3dpdGNoIGxvYWRpbmcgc3RhdGUgb24gcm91dGVyIGV2ZW50cy5cclxuICAgICovXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChnZXRQb3N0cygxKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBhZnRlciB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQsIHNldCByb3V0ZXIgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICBSb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCBzdGFydExvYWRpbmcpO1xyXG4gICAgICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIHN0b3BMb2FkaW5nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29tcG9uZW50V2lsbFVubW91bnRcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHN0YXJ0TG9hZGluZyk7XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBzdG9wTG9hZGluZyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvLyB3aGVuIG5ldyBwYWdlIGlzIHNlbGVjdGVkIGluIHBhZ2luYXRpb24sIHRha2UgY3VycmVudCBwYXRoIGFuZCBxdWVyeSBwYXJhbXNcclxuICAgIC8vIHRoZW4gYWRkIG9yIG1vZGlmeSBxdWVyeSBwYWdlIHBhcmFtIGFuZCB0aGVuIG5hdmlnYXRlIHRvIHRoZSBuZXcgcm91dGVcclxuICAgIGNvbnN0IHBhZ2luYXRpb25IYW5kbGVyID0gKHBhZ2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5yb3V0ZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHByb3BzLnJvdXRlci5wYXRobmFtZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UXVlcnkgPSBwcm9wcy5yb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgICAgIGN1cnJlbnRRdWVyeS5wYWdlID0gcGFnZS5zZWxlY3RlZCArIDE7XHJcblxyXG4gICAgICAgIHByb3BzLnJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGN1cnJlbnRQYXRoLFxyXG4gICAgICAgICAgICBxdWVyeTogY3VycmVudFF1ZXJ5LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBjb25kaXRpb25hbCByZW5kZXJpbmcgb2YgdGhlIHBvc3RzIGxpc3Qgb3IgdGhlIGxvYWRpbmcgaW5kaWNhdG9yXHJcbiAgICAvLyBsZXQgY29udGVudCA9IG51bGw7XHJcbiAgICAvLyBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAvLyAgICAgY29udGVudCA9IDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICAgIC8vIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgLy8gZ2VuZXJhdGUgcG9zdHMgbGlzdFxyXG4gICAgLy8gICAgIGNvbnRlbnQgPSAoXHJcbiAgICAvLyAgICAgICAgIDx1bD5cclxuICAgIC8vICAgICAgICAgICAgIHsvKiB7cG9zdHNEZXRhaWxzLnBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuX2lkfT57cG9zdC50aXRsZX08L2xpPlxyXG4gICAgLy8gICAgICAgICAgICAgKSl9ICovfVxyXG4gICAgLy8gICAgICAgICA8L3VsPlxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGgxPlBvc3RzIGxpc3Qgd2l0aCBwYWdpbmF0aW9uIGluIE5leHQuanM8L2gxPlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwb3N0c1wiPntjb250ZW50fTwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICAgIDxSZWFjdFBhZ2luYXRlXHJcbiAgICAgICAgICAgICAgICBwcmV2aW91c0xhYmVsPXtcInByZXZpb3VzXCJ9XHJcbiAgICAgICAgICAgICAgICBuZXh0TGFiZWw9e1wibmV4dFwifVxyXG4gICAgICAgICAgICAgICAgYnJlYWtMYWJlbD17XCIuLi5cIn1cclxuICAgICAgICAgICAgICAgIGJyZWFrQ2xhc3NOYW1lPXtcImJyZWFrLW1lXCJ9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e1wiYWN0aXZlXCJ9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzc05hbWU9e1wicGFnaW5hdGlvblwifVxyXG4gICAgICAgICAgICAgICAgc3ViQ29udGFpbmVyQ2xhc3NOYW1lPXtcInBhZ2VzIHBhZ2luYXRpb25cIn1cclxuICAgICAgICAgICAgICAgIGluaXRpYWxQYWdlPXtwb3N0c0RldGFpbHMuY3VycmVudFBhZ2UgLSAxfVxyXG4gICAgICAgICAgICAgICAgcGFnZUNvdW50PXtwb3N0c0RldGFpbHMudG90YWxQYWdlc31cclxuICAgICAgICAgICAgICAgIG1hcmdpblBhZ2VzRGlzcGxheWVkPXsyfVxyXG4gICAgICAgICAgICAgICAgcGFnZVJhbmdlRGlzcGxheWVkPXs1fVxyXG4gICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtwYWdpbmF0aW9uSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG4vLyBmZXRjaGluZyBwb3N0cyBpbiBnZXRJbml0aWFsUHJvcHMgdG8gbWFrZSB0aGUgYXBwIFNFTy1mcmllbmRseVxyXG4vLyBIb21lLmdldEluaXRpYWxQcm9wcyA9ICh7IHN0b3JlLCBxdWVyeSB9KSA9PiB7XHJcbi8vICAgICBjb25zdCBwYWdlID0gcXVlcnkucGFnZSB8fCAxOyAvLyBpZiBwYWdlIGlzIGVtcHR5IHJlcXVlc3QgdGhlIGZpcnN0IHBhZ2VcclxuXHJcbi8vICAgICBzdG9yZS5kaXNwYXRjaChnZXRQb3N0cygxKSk7XHJcbi8vICAgICBjb25zdCBwb3N0cyA9IHN0b3JlLmdldFN0YXRlKCkucG9zdHMucG9zdHMucG9zdHM7XHJcblxyXG4vLyAgICAgcmV0dXJuIHBvc3RzO1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihIb21lKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGFnaW5hdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==