webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_seed_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/seed.json */ \"./data/seed.json\");\nvar _data_seed_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/seed.json */ \"./data/seed.json\", 1);\n/* harmony import */ var _components_Event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Event.js */ \"./src/components/Event.js\");\n/* harmony import */ var _components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddEvent.js */ \"./src/components/AddEvent.js\");\n/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MenuBar */ \"./src/components/MenuBar.js\");\n\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      visible = _useState[0],\n      toggleMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data_seed_json__WEBPACK_IMPORTED_MODULE_5__),\n      collection = _useState2[0],\n      setCollection = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      hobby = _useState3[0],\n      setHobby = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"main\"),\n      currentPage = _useState4[0],\n      setPage = _useState4[1];\n\n  var icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n    onClick: function onClick() {\n      toggleMenu(!visible);\n    },\n    children: visible ? null : \"☰\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n\n  var hobbies = [];\n  collection.forEach(function (event) //determine sections\n  {\n    if (hobbies.includes(event.hobby)) {\n      return null;\n    } else {\n      hobbies.push(event.hobby);\n    }\n  });\n  hobbies.sort();\n\n  function complete(newEvent) {\n    if (newEvent != null) {\n      var coll_copy = [].concat(Object(_home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(collection), [newEvent]);\n      setCollection(coll_copy);\n    }\n\n    setPage(\"main\");\n  }\n\n  if (currentPage === \"main\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [icon, visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_MenuBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            visible: visible,\n            toggleMenu: toggleMenu,\n            select: setHobby,\n            allHobbies: hobbies\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 16\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 5\n        }, this), hobby ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n              rel: \"icon\",\n              href: \"/favicon.ico\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n              children: collection.filter(function (event) {\n                return event.hobby == hobby;\n              }).map(function (event) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Event_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  title: event.title,\n                  time: event.time,\n                  location: event.location,\n                  numJoined: event.number_joined,\n                  maxNumber: event.max_number\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 13\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.addButton,\n              type: \"button\",\n              name: \"addEvent\",\n              id: \"addEvent\",\n              value: \"Add Event\",\n              onClick: function onClick() {\n                return setPage(\"add\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 5\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.welcome,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            children: \"Welcome to Hobby Buddy!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 47\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" Let's Go! - DaBaby\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 79\n          }, this), \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {\n        children: \"A CS 312 Project\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }, this);\n  } else if (currentPage === \"add\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        complete: complete,\n        currHobby: hobby\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this);\n  }\n}\n\n_s(Home, \"UPolEtc4F+T7MLXgGd1MfhcW5yw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInRvZ2dsZU1lbnUiLCJkYXRhIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJob2JieSIsInNldEhvYmJ5IiwiY3VycmVudFBhZ2UiLCJzZXRQYWdlIiwiaWNvbiIsImhvYmJpZXMiLCJmb3JFYWNoIiwiZXZlbnQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0IiwiY29tcGxldGUiLCJuZXdFdmVudCIsImNvbGxfY29weSIsInN0eWxlcyIsIm1haW5Db250YWluZXIiLCJjb250YWluZXIiLCJ0aXRsZSIsImZpbHRlciIsIm1hcCIsInRpbWUiLCJsb2NhdGlvbiIsIm51bWJlcl9qb2luZWQiLCJtYXhfbnVtYmVyIiwiYWRkQnV0dG9uIiwid2VsY29tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLEtBQUQsQ0FEVDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFVBRGE7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUNHLDRDQUFELENBRmY7QUFBQSxNQUV0QkMsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUFBLG1CQUdITCxzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BR3RCTSxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBQUEsbUJBSUVQLHNEQUFRLENBQUMsTUFBRCxDQUpWO0FBQUEsTUFJdEJRLFdBSnNCO0FBQUEsTUFJVEMsT0FKUzs7QUFNN0IsTUFBTUMsSUFBSSxnQkFDUjtBQUFPLFdBQU8sRUFBRSxtQkFBTTtBQUFDUixnQkFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUFxQixLQUE1QztBQUFBLGNBQ0NBLE9B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QUE7QUFBQTtBQUFBLGtCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFETSxnQkFpQkk7QUFBSyxtQkFBUyxFQUFFVyw4REFBTSxDQUFDVyxPQUF2QjtBQUFBLGtDQUFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBaEMsZUFBZ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUE2QkMsR0E5QkQsTUE4Qk8sSUFBR3ZCLFdBQVcsS0FBSyxLQUFuQixFQUF5QjtBQUM5Qix3QkFDRTtBQUFBLDZCQUNFLHFFQUFDLCtEQUFEO0FBQVUsZ0JBQVEsRUFBSVMsUUFBdEI7QUFBZ0MsaUJBQVMsRUFBSVg7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUtEO0FBRUY7O0dBdkV1QlAsSTs7S0FBQUEsSSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi9kYXRhL3NlZWQuanNvblwiO1xuXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXZlbnQuanNcIjtcblxuaW1wb3J0IEFkZEV2ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0FkZEV2ZW50LmpzXCI7XG5cbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVCYXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdmlzaWJsZSwgdG9nZ2xlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xsZWN0aW9uLCBzZXRDb2xsZWN0aW9uXSA9IHVzZVN0YXRlKGRhdGEpO1xuICBjb25zdCBbaG9iYnksIHNldEhvYmJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY3VycmVudFBhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoXCJtYWluXCIpO1xuXG4gIGNvbnN0IGljb24gPSAoXG4gICAgPHNwYW4gIG9uQ2xpY2s9eygpID0+IHt0b2dnbGVNZW51KCF2aXNpYmxlKX19PlxuICAgIHt2aXNpYmxlID8gbnVsbCA6IFwi4piwXCJ9PC9zcGFuPlxuICAgICk7XG5cbiAgY29uc3QgaG9iYmllcyA9IFtdO1xuICBjb2xsZWN0aW9uLmZvckVhY2goKGV2ZW50KT0+IC8vZGV0ZXJtaW5lIHNlY3Rpb25zXG4gIHtpZihob2JiaWVzLmluY2x1ZGVzKGV2ZW50LmhvYmJ5KSl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZWxzZXtcbiAgICBob2JiaWVzLnB1c2goZXZlbnQuaG9iYnkpO1xuICB9XG4gIH1cbiAgKTtcbiAgaG9iYmllcy5zb3J0KCk7IFxuXG5cbiAgZnVuY3Rpb24gY29tcGxldGUgKG5ld0V2ZW50KXtcbiAgICAgIGlmKG5ld0V2ZW50ICE9IG51bGwpe1xuICAgICAgICBjb25zdCBjb2xsX2NvcHkgPSBbLi4uY29sbGVjdGlvbiwgbmV3RXZlbnRdO1xuICAgICAgICBzZXRDb2xsZWN0aW9uKGNvbGxfY29weSk7XG4gICAgICB9XG4gICAgc2V0UGFnZShcIm1haW5cIik7XG4gIH1cbiAgXG5cbiAgaWYoY3VycmVudFBhZ2UgPT09IFwibWFpblwiKXtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5Db250YWluZXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8ZGl2PlxuICAgIHtpY29ufVxuICAgIHt2aXNpYmxlID8gPE1lbnVCYXIgdmlzaWJsZSA9IHt2aXNpYmxlfSB0b2dnbGVNZW51ID0ge3RvZ2dsZU1lbnV9IHNlbGVjdCA9IHtzZXRIb2JieX0gYWxsSG9iYmllcyA9IHtob2JiaWVzfSAvPjogbnVsbCB9XG4gICAgPC9kaXY+XG4gICAge2hvYmJ5PyAgXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2hvYmJ5fSBldmVudHM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICBcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57aG9iYnl9IGV2ZW50czwvaDE+IFxuICAgICAgICA8dWw+XG4gICAgICAgIHtjb2xsZWN0aW9uLmZpbHRlcihldmVudCA9PiBldmVudC5ob2JieSA9PSBob2JieSkubWFwKGV2ZW50ID0+KFxuICAgICAgICAgICAgPEV2ZW50IHRpdGxlID0ge2V2ZW50LnRpdGxlfSB0aW1lID0ge2V2ZW50LnRpbWV9IGxvY2F0aW9uID0ge2V2ZW50LmxvY2F0aW9ufSBudW1Kb2luZWQgPSB7ZXZlbnQubnVtYmVyX2pvaW5lZH0gbWF4TnVtYmVyID0ge2V2ZW50Lm1heF9udW1iZXJ9Lz5cbiAgICAgICAgKSl9PC91bD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0gdHlwZSA9IFwiYnV0dG9uXCIgbmFtZSA9IFwiYWRkRXZlbnRcIiBpZCA9IFwiYWRkRXZlbnRcIiB2YWx1ZSA9IFwiQWRkIEV2ZW50XCIgb25DbGljayA9IHsoKSA9PiBzZXRQYWdlKFwiYWRkXCIpfS8+XG4gICAgICA8L21haW4+XG4gICAgICA8L2Rpdj46IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2VsY29tZX0+PGgyPldlbGNvbWUgdG8gSG9iYnkgQnVkZHkhPC9oMj48aDU+IExldCdzIEdvISAtIERhQmFieTwvaDU+IDwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5BIENTIDMxMiBQcm9qZWN0PC9mb290ZXI+XG4gICAgPC9kaXY+ICBcbiAgICApO1xuICB9IGVsc2UgaWYoY3VycmVudFBhZ2UgPT09IFwiYWRkXCIpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRFdmVudCBjb21wbGV0ZSA9IHtjb21wbGV0ZX0gY3VyckhvYmJ5ID0ge2hvYmJ5fS8+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbiAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})