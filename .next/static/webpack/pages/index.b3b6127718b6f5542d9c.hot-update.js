webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_seed_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/seed.json */ \"./data/seed.json\");\nvar _data_seed_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/seed.json */ \"./data/seed.json\", 1);\n/* harmony import */ var _components_Event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Event.js */ \"./src/components/Event.js\");\n/* harmony import */ var _components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddEvent.js */ \"./src/components/AddEvent.js\");\n/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MenuBar */ \"./src/components/MenuBar.js\");\n\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      visible = _useState[0],\n      toggleMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data_seed_json__WEBPACK_IMPORTED_MODULE_5__),\n      collection = _useState2[0],\n      setCollection = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"chess\"),\n      hobby = _useState3[0],\n      setHobby = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"main\"),\n      currentPage = _useState4[0],\n      setPage = _useState4[1];\n\n  var icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n    onClick: function onClick() {\n      toggleMenu(!visible);\n    },\n    children: visible ? null : \"☰\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n\n  var hobbies = [];\n  collection.forEach(function (event) //determine sections\n  {\n    if (hobbies.includes(event.hobby.toUpperCase())) {\n      return null;\n    } else {\n      sections.push(entry.title.charAt(0));\n    }\n  });\n  sections.sort();\n\n  function complete(newEvent) {\n    if (newEvent != null) {\n      var coll_copy = [].concat(Object(_home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(collection), [newEvent]);\n      setCollection(coll_copy);\n    }\n\n    setPage(\"main\");\n  }\n\n  if (currentPage === \"main\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [icon, visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_MenuBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            visible: visible,\n            toggleMenu: toggleMenu,\n            select: setHobby\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 16\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 5\n        }, this), hobby ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n              rel: \"icon\",\n              href: \"/favicon.ico\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n              children: collection.filter(function (event) {\n                return event.hobby == hobby;\n              }).map(function (event) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Event_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  title: event.title,\n                  time: event.time,\n                  location: event.location,\n                  numJoined: event.number_joined,\n                  maxNumber: event.max_number\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 13\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.addButton,\n              type: \"button\",\n              name: \"addEvent\",\n              id: \"addEvent\",\n              value: \"Add Event\",\n              onClick: function onClick() {\n                return setPage(\"add\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 5\n        }, this) : Here]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {\n        children: \"A CS 312 Project\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }, this);\n  } else if (currentPage === \"add\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        complete: complete,\n        currHobby: hobby\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this);\n  }\n}\n\n_s(Home, \"oq6ANvkcxsdPnPnvZxPXCL7hdjM=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInRvZ2dsZU1lbnUiLCJkYXRhIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJob2JieSIsInNldEhvYmJ5IiwiY3VycmVudFBhZ2UiLCJzZXRQYWdlIiwiaWNvbiIsImhvYmJpZXMiLCJmb3JFYWNoIiwiZXZlbnQiLCJpbmNsdWRlcyIsInRvVXBwZXJDYXNlIiwic2VjdGlvbnMiLCJwdXNoIiwiZW50cnkiLCJ0aXRsZSIsImNoYXJBdCIsInNvcnQiLCJjb21wbGV0ZSIsIm5ld0V2ZW50IiwiY29sbF9jb3B5Iiwic3R5bGVzIiwibWFpbkNvbnRhaW5lciIsImNvbnRhaW5lciIsImZpbHRlciIsIm1hcCIsInRpbWUiLCJsb2NhdGlvbiIsIm51bWJlcl9qb2luZWQiLCJtYXhfbnVtYmVyIiwiYWRkQnV0dG9uIiwiSGVyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQTtBQUdBO0FBRUE7QUFFQTtBQUVBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLEtBQUQsQ0FEVDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFVBRGE7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUNHLDRDQUFELENBRmY7QUFBQSxNQUV0QkMsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUFBLG1CQUdITCxzREFBUSxDQUFDLE9BQUQsQ0FITDtBQUFBLE1BR3RCTSxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBQUEsbUJBSUVQLHNEQUFRLENBQUMsTUFBRCxDQUpWO0FBQUEsTUFJdEJRLFdBSnNCO0FBQUEsTUFJVEMsT0FKUzs7QUFNN0IsTUFBTUMsSUFBSSxnQkFDUjtBQUFPLFdBQU8sRUFBRSxtQkFBTTtBQUFDUixnQkFBVSxDQUFDLENB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QixPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUE7QUFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURNLEdBaUJJMEIsSUF0QlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUE2QkMsR0E5QkQsTUE4Qk8sSUFBRzNCLFdBQVcsS0FBSyxLQUFuQixFQUF5QjtBQUM5Qix3QkFDRTtBQUFBLDZCQUNFLHFFQUFDLCtEQUFEO0FBQVUsZ0JBQVEsRUFBSWMsUUFBdEI7QUFBZ0MsaUJBQVMsRUFBSWhCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDtBQUVGOztHQXZFdUJQLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5cbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi9kYXRhL3NlZWQuanNvblwiO1xuXG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXZlbnQuanNcIjtcblxuaW1wb3J0IEFkZEV2ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0FkZEV2ZW50LmpzXCI7XG5cbmltcG9ydCBNZW51QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL01lbnVCYXJcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdmlzaWJsZSwgdG9nZ2xlTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xsZWN0aW9uLCBzZXRDb2xsZWN0aW9uXSA9IHVzZVN0YXRlKGRhdGEpO1xuICBjb25zdCBbaG9iYnksIHNldEhvYmJ5XSA9IHVzZVN0YXRlKFwiY2hlc3NcIik7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShcIm1haW5cIik7XG5cbiAgY29uc3QgaWNvbiA9IChcbiAgICA8c3BhbiAgb25DbGljaz17KCkgPT4ge3RvZ2dsZU1lbnUoIXZpc2libGUpfX0+XG4gICAge3Zpc2libGUgPyBudWxsIDogXCLimLBcIn08L3NwYW4+XG4gICAgKTtcblxuICBjb25zdCBob2JiaWVzID0gW107XG4gIGNvbGxlY3Rpb24uZm9yRWFjaCgoZXZlbnQpPT4gLy9kZXRlcm1pbmUgc2VjdGlvbnNcbiAge2lmKGhvYmJpZXMuaW5jbHVkZXMoZXZlbnQuaG9iYnkudG9VcHBlckNhc2UoKSkpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGVsc2V7XG4gICAgc2VjdGlvbnMucHVzaChlbnRyeS50aXRsZS5jaGFyQXQoMCkpO1xuICB9XG4gIH1cbiAgKTtcbiAgc2VjdGlvbnMuc29ydCgpOyBcblxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlIChuZXdFdmVudCl7XG4gICAgICBpZihuZXdFdmVudCAhPSBudWxsKXtcbiAgICAgICAgY29uc3QgY29sbF9jb3B5ID0gWy4uLmNvbGxlY3Rpb24sIG5ld0V2ZW50XTtcbiAgICAgICAgc2V0Q29sbGVjdGlvbihjb2xsX2NvcHkpO1xuICAgICAgfVxuICAgIHNldFBhZ2UoXCJtYWluXCIpO1xuICB9XG4gIFxuXG4gIGlmKGN1cnJlbnRQYWdlID09PSBcIm1haW5cIil7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPGRpdj5cbiAgICB7aWNvbn1cbiAgICB7dmlzaWJsZSA/IDxNZW51QmFyIHZpc2libGUgPSB7dmlzaWJsZX0gdG9nZ2xlTWVudSA9IHt0b2dnbGVNZW51fSBzZWxlY3QgPSB7c2V0SG9iYnl9IC8+OiBudWxsIH1cbiAgICA8L2Rpdj5cbiAgICB7aG9iYnk/ICBcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57aG9iYnl9IGV2ZW50czwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIFxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntob2JieX0gZXZlbnRzPC9oMT4gXG4gICAgICAgIDx1bD5cbiAgICAgICAge2NvbGxlY3Rpb24uZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmhvYmJ5ID09IGhvYmJ5KS5tYXAoZXZlbnQgPT4oXG4gICAgICAgICAgICA8RXZlbnQgdGl0bGUgPSB7ZXZlbnQudGl0bGV9IHRpbWUgPSB7ZXZlbnQudGltZX0gbG9jYXRpb24gPSB7ZXZlbnQubG9jYXRpb259IG51bUpvaW5lZCA9IHtldmVudC5udW1iZXJfam9pbmVkfSBtYXhOdW1iZXIgPSB7ZXZlbnQubWF4X251bWJlcn0vPlxuICAgICAgICApKX08L3VsPlxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0gdHlwZSA9IFwiYnV0dG9uXCIgbmFtZSA9IFwiYWRkRXZlbnRcIiBpZCA9IFwiYWRkRXZlbnRcIiB2YWx1ZSA9IFwiQWRkIEV2ZW50XCIgb25DbGljayA9IHsoKSA9PiBzZXRQYWdlKFwiYWRkXCIpfS8+XG4gICAgICA8L21haW4+XG4gICAgICA8L2Rpdj46IEhlcmUgfVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPkEgQ1MgMzEyIFByb2plY3Q8L2Zvb3Rlcj5cbiAgICA8L2Rpdj4gIFxuICAgICk7XG4gIH0gZWxzZSBpZihjdXJyZW50UGFnZSA9PT0gXCJhZGRcIil7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZEV2ZW50IGNvbXBsZXRlID0ge2NvbXBsZXRlfSBjdXJySG9iYnkgPSB7aG9iYnl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxuICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})