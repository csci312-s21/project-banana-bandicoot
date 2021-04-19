webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_seed_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/seed.json */ \"./data/seed.json\");\nvar _data_seed_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/seed.json */ \"./data/seed.json\", 1);\n/* harmony import */ var _components_Event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Event.js */ \"./src/components/Event.js\");\n/* harmony import */ var _components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddEvent.js */ \"./src/components/AddEvent.js\");\n\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data_seed_json__WEBPACK_IMPORTED_MODULE_5__),\n      collection = _useState[0],\n      setCollection = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"chess\"),\n      hobby = _useState2[0],\n      setHobby = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"main\"),\n      currentPage = _useState3[0],\n      setPage = _useState3[1];\n\n  function complete(newEvent) {\n    if (newEvent != null) {\n      var coll_copy = [].concat(Object(_home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(collection), [newEvent]);\n      setCollection(coll_copy);\n    }\n\n    setPage(\"main\");\n  }\n\n  if (currentPage === \"main\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: [hobby, \" events\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n          rel: \"icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n          children: [hobby, \" events\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n          children: collection.filter(function (event) {\n            return event.hobby == hobby;\n          }).map(function (event) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Event_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n              title: event.title,\n              time: event.time,\n              location: event.location,\n              numJoined: event.number_joined,\n              maxNumber: event.max_number\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 13\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,\n          type: \"button\",\n          name: \"addEvent\",\n          id: \"addEvent\",\n          value: \"Add Event\",\n          onClick: function onClick() {\n            return setPage(\"add\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        children: \"A CS 312 Project\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, this);\n  } else if (currentPage === \"add\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.addButton,\n        complete: complete,\n        currHobby: hobby\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this);\n  }\n}\n\n_s(Home, \"O20Av4DI5Y82sRyGfrV/Mxk+gLk=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJzZXRDb2xsZWN0aW9uIiwiaG9iYnkiLCJzZXRIb2JieSIsImN1cnJlbnRQYWdlIiwic2V0UGFnZSIsImNvbXBsZXRlIiwibmV3RXZlbnQiLCJjb2xsX2NvcHkiLCJzdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsImZpbHRlciIsImV2ZW50IiwibWFwIiwidGltZSIsImxvY2F0aW9uIiwibnVtYmVyX2pvaW5lZCIsIm1heF9udW1iZXIiLCJidXR0b24iLCJhZGRCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFFT0Msc0RBQVEsQ0FBQ0MsNENBQUQsQ0FGZjtBQUFBLE1BRXRCQyxVQUZzQjtBQUFBLE1BRVZDLGFBRlU7O0FBQUEsbUJBSUhILHNEQUFRLENBQUMsT0FBRCxDQUpMO0FBQUEsTUFJdEJJLEtBSnNCO0FBQUEsTUFJZkMsUUFKZTs7QUFBQSxtQkFNRUwsc0RBQVEsQ0FBQyxNQUFELENBTlY7QUFBQSxNQU10Qk0sV0FOc0I7QUFBQSxNQU1UQyxPQU5TOztBQVE3QixXQUFTQyxRQUFULENBQW1CQyxRQUFuQixFQUE0QjtBQUN4QixRQUFHQSxRQUFRLElBQUksSUFBZixFQUFvQjtBQUNsQixVQUFNQyxTQUFTLG1LQUFPUixVQUFQLElBQW1CTyxRQUFuQixFQUFmO0FBQ0FOLG1CQUFhLENBQUNPLFNBQUQsQ0FBYjtBQUNEOztBQUNISCxXQUFPLENBQUMsTUFBRCxDQUFQO0FBQ0Q7O0FBRUQsTUFBR0QsV0FBVyxLQUFLLE1BQW5CLEVBQTBCO0FBQ3hCLHdCQUNBO0FBQUssZUFBUyxFQUFFSyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQSxxQkFBUVIsS0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFNLGFBQUcsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBQSxnQ0FFRTtBQUFJLG1CQUFTLEVBQUVPLDhEQUFNLENBQUNFLEtBQXRCO0FBQUEscUJBQThCVCxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLG9CQUNDRixVQUFVLENBQUNZLE1BQVgsQ0FBa0IsVUFBQUMsS0FBSztBQUFBLG1CQUFJQSxLQUFLLENBQUNYLEtBQU4sSUFBZUEsS0FBbkI7QUFBQSxXQUF2QixFQUFpRFksR0FBakQsQ0FBcUQsVUFBQUQsS0FBSztBQUFBLGdDQUN2RCxxRUFBQyw0REFBRDtBQUFPLG1CQUFLLEVBQUlBLEtBQUssQ0FBQ0YsS0FBdEI7QUFBNkIsa0JBQUksRUFBSUUsS0FBSyxDQUFDRSxJQUEzQztBQUFpRCxzQkFBUSxFQUFJRixLQUFLLENBQUNHLFFBQW5FO0FBQTZFLHVCQUFTLEVBQUlILEtBQUssQ0FBQ0ksYUFBaEc7QUFBK0csdUJBQVMsRUFBSUosS0FBSyxDQUFDSztBQUFsSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUR1RDtBQUFBLFdBQTFEO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEYsZUFRRTtBQUFPLG1CQUFTLEVBQUVULDhEQUFNLENBQUNVLE1BQXpCO0FBQWlDLGNBQUksRUFBRyxRQUF4QztBQUFpRCxjQUFJLEVBQUcsVUFBeEQ7QUFBbUUsWUFBRSxFQUFHLFVBQXhFO0FBQW1GLGVBQUssRUFBRyxXQUEzRjtBQUF1RyxpQkFBTyxFQUFJO0FBQUEsbUJBQU1kLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQTtBQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBaUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBO0FBcUJELEdBdEJELE1Bc0JPLElBQUdELFdBQVcsS0FBSyxLQUFuQixFQUF5QjtBQUM5Qix3QkFDRTtBQUFBLDZCQUNFLHFFQUFDLCtEQUFEO0FBQVUsaUJBQVMsRUFBRUssOERBQU0sQ0FBQ1csU0FBNUI7QUFBc0MsZ0JBQVEsRUFBSWQsUUFBbEQ7QUFBNEQsaUJBQVMsRUFBSUo7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEO0FBRUY7O0dBOUN1QkwsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9zZWVkLmpzb25cIjtcblxuaW1wb3J0IEV2ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0V2ZW50LmpzXCI7XG5cbmltcG9ydCBBZGRFdmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRFdmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtjb2xsZWN0aW9uLCBzZXRDb2xsZWN0aW9uXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4gIGNvbnN0IFtob2JieSwgc2V0SG9iYnldID0gdXNlU3RhdGUoXCJjaGVzc1wiKTtcbiAgXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShcIm1haW5cIik7XG5cbiAgZnVuY3Rpb24gY29tcGxldGUgKG5ld0V2ZW50KXtcbiAgICAgIGlmKG5ld0V2ZW50ICE9IG51bGwpe1xuICAgICAgICBjb25zdCBjb2xsX2NvcHkgPSBbLi4uY29sbGVjdGlvbiwgbmV3RXZlbnRdO1xuICAgICAgICBzZXRDb2xsZWN0aW9uKGNvbGxfY29weSk7XG4gICAgICB9XG4gICAgc2V0UGFnZShcIm1haW5cIik7XG4gIH1cblxuICBpZihjdXJyZW50UGFnZSA9PT0gXCJtYWluXCIpe1xuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57aG9iYnl9IGV2ZW50czwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIFxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntob2JieX0gZXZlbnRzPC9oMT4gXG4gICAgICAgIDx1bD5cbiAgICAgICAge2NvbGxlY3Rpb24uZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmhvYmJ5ID09IGhvYmJ5KS5tYXAoZXZlbnQgPT4oXG4gICAgICAgICAgICA8RXZlbnQgdGl0bGUgPSB7ZXZlbnQudGl0bGV9IHRpbWUgPSB7ZXZlbnQudGltZX0gbG9jYXRpb24gPSB7ZXZlbnQubG9jYXRpb259IG51bUpvaW5lZCA9IHtldmVudC5udW1iZXJfam9pbmVkfSBtYXhOdW1iZXIgPSB7ZXZlbnQubWF4X251bWJlcn0vPlxuICAgICAgICApKX08L3VsPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gdHlwZSA9IFwiYnV0dG9uXCIgbmFtZSA9IFwiYWRkRXZlbnRcIiBpZCA9IFwiYWRkRXZlbnRcIiB2YWx1ZSA9IFwiQWRkIEV2ZW50XCIgb25DbGljayA9IHsoKSA9PiBzZXRQYWdlKFwiYWRkXCIpfS8+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXI+QSBDUyAzMTIgUHJvamVjdDwvZm9vdGVyPlxuICAgIDwvZGl2PiAgXG4gICAgKTtcbiAgfSBlbHNlIGlmKGN1cnJlbnRQYWdlID09PSBcImFkZFwiKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWRkRXZlbnQgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufWNvbXBsZXRlID0ge2NvbXBsZXRlfSBjdXJySG9iYnkgPSB7aG9iYnl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxuICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})