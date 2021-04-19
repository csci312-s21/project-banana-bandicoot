webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_seed_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/seed.json */ \"./data/seed.json\");\nvar _data_seed_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/seed.json */ \"./data/seed.json\", 1);\n/* harmony import */ var _components_Event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Event.js */ \"./src/components/Event.js\");\n/* harmony import */ var _components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddEvent.js */ \"./src/components/AddEvent.js\");\n/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MenuBar */ \"./src/components/MenuBar.js\");\n\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      visible = _useState[0],\n      toggleMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data_seed_json__WEBPACK_IMPORTED_MODULE_5__),\n      collection = _useState2[0],\n      setCollection = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      hobby = _useState3[0],\n      setHobby = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"main\"),\n      currentPage = _useState4[0],\n      setPage = _useState4[1];\n\n  var icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n    onClick: function onClick() {\n      toggleMenu(!visible);\n    },\n    children: visible ? null : \"☰\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n\n  var hobbies = [];\n  collection.forEach(function (event) //determine sections\n  {\n    if (hobbies.includes(event.hobby)) {\n      return null;\n    } else {\n      hobbies.push(event.hobby);\n    }\n  });\n  hobbies.sort();\n\n  function complete(newEvent) {\n    if (newEvent != null) {\n      var coll_copy = [].concat(Object(_home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(collection), [newEvent]);\n      setCollection(coll_copy);\n    }\n\n    setPage(\"main\");\n  }\n\n  if (currentPage === \"main\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [icon, visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_MenuBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            visible: visible,\n            toggleMenu: toggleMenu,\n            select: setHobby,\n            allHobbies: hobbies\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 16\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 5\n        }, this), hobby ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n              rel: \"icon\",\n              href: \"/favicon.ico\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n              children: collection.filter(function (event) {\n                return event.hobby == hobby;\n              }).map(function (event) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Event_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  title: event.title,\n                  time: event.time,\n                  location: event.location,\n                  numJoined: event.number_joined,\n                  maxNumber: event.max_number\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 13\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.addButton,\n              type: \"button\",\n              name: \"addEvent\",\n              id: \"addEvent\",\n              value: \"Add Event\",\n              onClick: function onClick() {\n                return setPage(\"add\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 74,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 5\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n          children: \"Welcome to Hobby Buddy!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {\n        children: \"A CS 312 Project\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }, this);\n  } else if (currentPage === \"add\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        complete: complete,\n        currHobby: hobby\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, this);\n  }\n}\n\n_s(Home, \"UPolEtc4F+T7MLXgGd1MfhcW5yw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInRvZ2dsZU1lbnUiLCJkYXRhIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJob2JieSIsInNldEhvYmJ5IiwiY3VycmVudFBhZ2UiLCJzZXRQYWdlIiwiaWNvbiIsImhvYmJpZXMiLCJmb3JFYWNoIiwiZXZlbnQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0IiwiY29tcGxldGUiLCJuZXdFdmVudCIsImNvbGxfY29weSIsInN0eWxlcyIsIm1haW5Db250YWluZXIiLCJjb250YWluZXIiLCJ0aXRsZSIsImZpbHRlciIsIm1hcCIsInRpbWUiLCJsb2NhdGlvbiIsIm51bWJlcl9qb2luZWQiLCJtYXhfbnVtYmVyIiwiYWRkQnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFHZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsS0FBRCxDQURUO0FBQUEsTUFDdEJDLE9BRHNCO0FBQUEsTUFDYkMsVUFEYTs7QUFBQSxtQkFFT0Ysc0RBQVEsQ0FBQ0csNENBQUQsQ0FGZjtBQUFBLE1BRXRCQyxVQUZzQjtBQUFBLE1BRVZDLGFBRlU7O0FBQUEsbUJBR0hMLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHdEJNLEtBSHNCO0FBQUEsTUFHZkMsUUFIZTs7QUFBQSxtQkFJRVAsc0RBQVEsQ0FBQyxNQUFELENBSlY7QUFBQSxNQUl0QlEsV0FKc0I7QUFBQSxNQUlUQyxPQUpTOztBQU03QixNQUFNQyxJQUFJLGdCQUNSO0FBQU8sV0FBTyxFQUFFLG1CQUFNO0FBQUNSLGdCQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFWO0FBQXFCLEtBQTVDO0FBQUEsY0FDQ0EsT0FBTyxHQUFHLElB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QUEsa0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURNLGdCQWlCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF0QlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUF5QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUE2QkMsR0E5QkQsTUE4Qk8sSUFBR0QsV0FBVyxLQUFLLEtBQW5CLEVBQXlCO0FBQzlCLHdCQUNFO0FBQUEsNkJBQ0UscUVBQUMsK0RBQUQ7QUFBVSxnQkFBUSxFQUFJUyxRQUF0QjtBQUFnQyxpQkFBUyxFQUFJWDtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBS0Q7QUFFRjs7R0F2RXVCUCxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9zZWVkLmpzb25cIjtcblxuaW1wb3J0IEV2ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0V2ZW50LmpzXCI7XG5cbmltcG9ydCBBZGRFdmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRFdmVudC5qc1wiO1xuXG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51QmFyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Zpc2libGUsIHRvZ2dsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sbGVjdGlvbiwgc2V0Q29sbGVjdGlvbl0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgY29uc3QgW2hvYmJ5LCBzZXRIb2JieV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKFwibWFpblwiKTtcblxuICBjb25zdCBpY29uID0gKFxuICAgIDxzcGFuICBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlTWVudSghdmlzaWJsZSl9fT5cbiAgICB7dmlzaWJsZSA/IG51bGwgOiBcIuKYsFwifTwvc3Bhbj5cbiAgICApO1xuXG4gIGNvbnN0IGhvYmJpZXMgPSBbXTtcbiAgY29sbGVjdGlvbi5mb3JFYWNoKChldmVudCk9PiAvL2RldGVybWluZSBzZWN0aW9uc1xuICB7aWYoaG9iYmllcy5pbmNsdWRlcyhldmVudC5ob2JieSkpe1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGVsc2V7XG4gICAgaG9iYmllcy5wdXNoKGV2ZW50LmhvYmJ5KTtcbiAgfVxuICB9XG4gICk7XG4gIGhvYmJpZXMuc29ydCgpOyBcblxuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlIChuZXdFdmVudCl7XG4gICAgICBpZihuZXdFdmVudCAhPSBudWxsKXtcbiAgICAgICAgY29uc3QgY29sbF9jb3B5ID0gWy4uLmNvbGxlY3Rpb24sIG5ld0V2ZW50XTtcbiAgICAgICAgc2V0Q29sbGVjdGlvbihjb2xsX2NvcHkpO1xuICAgICAgfVxuICAgIHNldFBhZ2UoXCJtYWluXCIpO1xuICB9XG4gIFxuXG4gIGlmKGN1cnJlbnRQYWdlID09PSBcIm1haW5cIil7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPGRpdj5cbiAgICB7aWNvbn1cbiAgICB7dmlzaWJsZSA/IDxNZW51QmFyIHZpc2libGUgPSB7dmlzaWJsZX0gdG9nZ2xlTWVudSA9IHt0b2dnbGVNZW51fSBzZWxlY3QgPSB7c2V0SG9iYnl9IGFsbEhvYmJpZXMgPSB7aG9iYmllc30gLz46IG51bGwgfVxuICAgIDwvZGl2PlxuICAgIHtob2JieT8gIFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntob2JieX0gZXZlbnRzPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2hvYmJ5fSBldmVudHM8L2gxPiBcbiAgICAgICAgPHVsPlxuICAgICAgICB7Y29sbGVjdGlvbi5maWx0ZXIoZXZlbnQgPT4gZXZlbnQuaG9iYnkgPT0gaG9iYnkpLm1hcChldmVudCA9PihcbiAgICAgICAgICAgIDxFdmVudCB0aXRsZSA9IHtldmVudC50aXRsZX0gdGltZSA9IHtldmVudC50aW1lfSBsb2NhdGlvbiA9IHtldmVudC5sb2NhdGlvbn0gbnVtSm9pbmVkID0ge2V2ZW50Lm51bWJlcl9qb2luZWR9IG1heE51bWJlciA9IHtldmVudC5tYXhfbnVtYmVyfS8+XG4gICAgICAgICkpfTwvdWw+XG4gICAgICAgIDxicj48L2JyPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnV0dG9ufSB0eXBlID0gXCJidXR0b25cIiBuYW1lID0gXCJhZGRFdmVudFwiIGlkID0gXCJhZGRFdmVudFwiIHZhbHVlID0gXCJBZGQgRXZlbnRcIiBvbkNsaWNrID0geygpID0+IHNldFBhZ2UoXCJhZGRcIil9Lz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PjogPGgyPldlbGNvbWUgdG8gSG9iYnkgQnVkZHkhPC9oMj4gfVxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyPkEgQ1MgMzEyIFByb2plY3Q8L2Zvb3Rlcj5cbiAgICA8L2Rpdj4gIFxuICAgICk7XG4gIH0gZWxzZSBpZihjdXJyZW50UGFnZSA9PT0gXCJhZGRcIil7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEFkZEV2ZW50IGNvbXBsZXRlID0ge2NvbXBsZXRlfSBjdXJySG9iYnkgPSB7aG9iYnl9Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxuICBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})