webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_runner_project_banana_bandicoot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_seed_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/seed.json */ \"./data/seed.json\");\nvar _data_seed_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/seed.json */ \"./data/seed.json\", 1);\n/* harmony import */ var _components_Event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Event.js */ \"./src/components/Event.js\");\n/* harmony import */ var _components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddEvent.js */ \"./src/components/AddEvent.js\");\n\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data_seed_json__WEBPACK_IMPORTED_MODULE_5__),\n      collection = _useState[0],\n      setCollection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"chess\"),\n      hobby = _useState2[0],\n      setHobby = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"main\"),\n      currentPage = _useState3[0],\n      setPage = _useState3[1];\n\n  function complete(newArticle) {\n    if (newArticle != null) {\n      var coll_copy = [].concat(Object(_home_runner_project_banana_bandicoot_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(collection), [newArticle]);\n      setCollection(coll_copy);\n    }\n\n    setCurrentArticle(newArticle);\n    handleClick(\"main\");\n  }\n\n  if (currentPage === \"main\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: [hobby, \" events\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"title\",\n          children: [hobby, \" events\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 9\n        }, this), collection.filter(function (event) {\n          return event.hobby == hobby;\n        }).map(function (event) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Event_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            title: event.title,\n            time: event.time,\n            location: event.location,\n            numJoined: event.number_joined,\n            maxNumber: event.max_number\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"button\",\n          name: \"addEvent\",\n          id: \"addEvent\",\n          value: \"Add Event\",\n          onClick: function onClick() {\n            return setPage(\"add\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        children: \"A CS 312 Project\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }, this);\n  } else if (currentPage === \"add\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Add Event\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        complete: complete\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }, this);\n  }\n}\n\n_s(Home, \"O20Av4DI5Y82sRyGfrV/Mxk+gLk=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJzZXRDb2xsZWN0aW9uIiwiaG9iYnkiLCJzZXRIb2JieSIsImN1cnJlbnRQYWdlIiwic2V0UGFnZSIsImNvbXBsZXRlIiwibmV3QXJ0aWNsZSIsImNvbGxfY29weSIsInNldEN1cnJlbnRBcnRpY2xlIiwiaGFuZGxlQ2xpY2siLCJzdHlsZXMiLCJjb250YWluZXIiLCJmaWx0ZXIiLCJldmVudCIsIm1hcCIsInRpdGxlIiwidGltZSIsImxvY2F0aW9uIiwibnVtYmVyX2pvaW5lZCIsIm1heF9udW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQ0MsNENBQUQsQ0FGZjtBQUFBLE1BRXRCQyxVQUZzQjtBQUFBLE1BRVZDLGFBRlU7O0FBQUEsbUJBSUhILHNEQUFRLENBQUMsT0FBRCxDQUpMO0FBQUEsTUFJdEJJLEtBSnNCO0FBQUEsTUFJZkMsUUFKZTs7QUFBQSxtQkFNRUwsc0RBQVEsQ0FBQyxNQUFELENBTlY7QUFBQSxNQU10Qk0sV0FOc0I7QUFBQSxNQU1UQyxPQU5TOztBQVE3QixXQUFTQyxRQUFULENBQW1CQyxVQUFuQixFQUE4QjtBQUMxQixRQUFHQSxVQUFVLElBQUksSUFBakIsRUFBc0I7QUFDdEIsVUFBTUMsU0FBUyw0SkFBT1IsVUFBUCxJQUFtQk8sVUFBbkIsRUFBZjtBQUNBTixtQkFBYSxDQUFDTyxTQUFELENBQWI7QUFDQzs7QUFDSEMscUJBQWlCLENBQUNGLFVBQUQsQ0FBakI7QUFDQUcsZUFBVyxDQUFDLE1BQUQsQ0FBWDtBQUNEOztBQUlELE1BQUdOLFdBQVcsS0FBSyxNQUFuQixFQUEwQjtBQUN4Qix3QkFDQTtBQUFLLGVBQVMsRUFBRU8sOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUEscUJBQVFWLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxhQUFHLEVBQUMsTUFBVjtBQUFpQixjQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUEsZ0NBRUU7QUFBSSxtQkFBUyxFQUFDLE9BQWQ7QUFBQSxxQkFBdUJBLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUdHRixVQUFVLENBQUNhLE1BQVgsQ0FBa0IsVUFBQUMsS0FBSztBQUFBLGlCQUFJQSxLQUFLLENBQUNaLEtBQU4sSUFBZUEsS0FBbkI7QUFBQSxTQUF2QixFQUFpRGEsR0FBakQsQ0FBcUQsVUFBQUQsS0FBSztBQUFBLDhCQUN2RCxxRUFBQyw0REFBRDtBQUFPLGlCQUFLLEVBQUlBLEtBQUssQ0FBQ0UsS0FBdEI7QUFBNkIsZ0JBQUksRUFBSUYsS0FBSyxDQUFDRyxJQUEzQztBQUFpRCxvQkFBUSxFQUFJSCxLQUFLLENBQUNJLFFBQW5FO0FBQTZFLHFCQUFTLEVBQUlKLEtBQUssQ0FBQ0ssYUFBaEc7QUFBK0cscUJBQVMsRUFBSUwsS0FBSyxDQUFDTTtBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUR1RDtBQUFBLFNBQTFELENBSEgsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0U7QUFBTyxjQUFJLEVBQUcsUUFBZDtBQUF1QixjQUFJLEVBQUcsVUFBOUI7QUFBeUMsWUFBRSxFQUFHLFVBQTlDO0FBQXlELGVBQUssRUFBRyxXQUFqRTtBQUE2RSxpQkFBTyxFQUFJO0FBQUEsbUJBQU1mLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQTtBQUF4RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBZ0JFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBO0FBb0JELEdBckJELE1BcUJPLElBQUdELFdBQVcsS0FBSyxLQUFuQixFQUF5QjtBQUM5Qix3QkFDRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQywrREFBRDtBQUFVLGdCQUFRLEVBQUlFO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQU1EO0FBRUY7O0dBakR1QlQsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9zZWVkLmpzb25cIjtcblxuaW1wb3J0IEV2ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0V2ZW50LmpzXCI7XG5cbmltcG9ydCBBZGRFdmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRFdmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtjb2xsZWN0aW9uLCBzZXRDb2xsZWN0aW9uXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4gIGNvbnN0IFtob2JieSwgc2V0SG9iYnldID0gdXNlU3RhdGUoXCJjaGVzc1wiKTtcbiAgXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShcIm1haW5cIik7XG5cbiAgZnVuY3Rpb24gY29tcGxldGUgKG5ld0FydGljbGUpe1xuICAgICAgaWYobmV3QXJ0aWNsZSAhPSBudWxsKXtcbiAgICAgIGNvbnN0IGNvbGxfY29weSA9IFsuLi5jb2xsZWN0aW9uLCBuZXdBcnRpY2xlXTtcbiAgICAgIHNldENvbGxlY3Rpb24oY29sbF9jb3B5KTtcbiAgICAgIH1cbiAgICBzZXRDdXJyZW50QXJ0aWNsZShuZXdBcnRpY2xlKTtcbiAgICBoYW5kbGVDbGljayhcIm1haW5cIik7XG4gIH1cblxuXG5cbiAgaWYoY3VycmVudFBhZ2UgPT09IFwibWFpblwiKXtcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2hvYmJ5fSBldmVudHM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICBcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+e2hvYmJ5fSBldmVudHM8L2gxPlxuICAgICAgICB7Y29sbGVjdGlvbi5maWx0ZXIoZXZlbnQgPT4gZXZlbnQuaG9iYnkgPT0gaG9iYnkpLm1hcChldmVudCA9PihcbiAgICAgICAgICAgIDxFdmVudCB0aXRsZSA9IHtldmVudC50aXRsZX0gdGltZSA9IHtldmVudC50aW1lfSBsb2NhdGlvbiA9IHtldmVudC5sb2NhdGlvbn0gbnVtSm9pbmVkID0ge2V2ZW50Lm51bWJlcl9qb2luZWR9IG1heE51bWJlciA9IHtldmVudC5tYXhfbnVtYmVyfS8+XG4gICAgICAgICkpfVxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGlucHV0IHR5cGUgPSBcImJ1dHRvblwiIG5hbWUgPSBcImFkZEV2ZW50XCIgaWQgPSBcImFkZEV2ZW50XCIgdmFsdWUgPSBcIkFkZCBFdmVudFwiIG9uQ2xpY2sgPSB7KCkgPT4gc2V0UGFnZShcImFkZFwiKX0vPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPkEgQ1MgMzEyIFByb2plY3Q8L2Zvb3Rlcj5cbiAgICA8L2Rpdj4gIFxuICAgICk7XG4gIH0gZWxzZSBpZihjdXJyZW50UGFnZSA9PT0gXCJhZGRcIil7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkFkZCBFdmVudDwvaDI+XG4gICAgICAgIDxBZGRFdmVudCBjb21wbGV0ZSA9IHtjb21wbGV0ZX0vPlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG4gIFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})