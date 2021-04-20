webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_seed_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/seed.json */ \"./data/seed.json\");\nvar _data_seed_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/seed.json */ \"./data/seed.json\", 1);\n/* harmony import */ var _components_Event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Event.js */ \"./src/components/Event.js\");\n/* harmony import */ var _components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddEvent.js */ \"./src/components/AddEvent.js\");\n/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MenuBar */ \"./src/components/MenuBar.js\");\n\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      visible = _useState[0],\n      toggleMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data_seed_json__WEBPACK_IMPORTED_MODULE_5__),\n      collection = _useState2[0],\n      setCollection = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      hobby = _useState3[0],\n      setHobby = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"main\"),\n      currentPage = _useState4[0],\n      setPage = _useState4[1];\n\n  var icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n    onClick: function onClick() {\n      toggleMenu(!visible);\n    },\n    children: visible ? null : \" {&emsp;☰\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n\n  var hobbies = [];\n  collection.forEach(function (event) //determine sections\n  {\n    if (hobbies.includes(event.hobby)) {\n      return null;\n    } else {\n      hobbies.push(event.hobby);\n    }\n  });\n  hobbies.sort();\n\n  function complete(newEvent) {\n    if (newEvent != null) {\n      var coll_copy = [].concat(Object(_home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(collection), [newEvent]);\n      setCollection(coll_copy);\n    }\n\n    setPage(\"main\");\n  }\n\n  if (currentPage === \"main\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [icon, visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_MenuBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            visible: visible,\n            toggleMenu: toggleMenu,\n            select: setHobby,\n            allHobbies: hobbies\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 16\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 5\n        }, this), hobby ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n              rel: \"icon\",\n              href: \"/favicon.ico\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n              children: collection.filter(function (event) {\n                return event.hobby === hobby;\n              }).map(function (event) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Event_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  title: event.title,\n                  time: event.time,\n                  location: event.location,\n                  numJoined: event.number_joined,\n                  maxNumber: event.max_number\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 13\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.addButton,\n              type: \"button\",\n              name: \"addEvent\",\n              id: \"addEvent\",\n              value: \"Add Event\",\n              onClick: function onClick() {\n                return setPage(\"add\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 5\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.welcome,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            children: \"Welcome to Hobby Buddy!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 47\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" Lets Go! - DaBaby\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 79\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" The FaceBook of the 21st Century - Mark Zuckerberg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 106\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" Hobby Buddy to the moon - Elon Musk\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 166\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" Banana Bandicoot is the future of american democracy - Joe Biden\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 211\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {\n        children: \"A CS 312 Project\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }, this);\n  } else if (currentPage === \"add\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        complete: complete,\n        currHobby: hobby\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this);\n  }\n}\n\n_s(Home, \"UPolEtc4F+T7MLXgGd1MfhcW5yw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInRvZ2dsZU1lbnUiLCJkYXRhIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJob2JieSIsInNldEhvYmJ5IiwiY3VycmVudFBhZ2UiLCJzZXRQYWdlIiwiaWNvbiIsImhvYmJpZXMiLCJmb3JFYWNoIiwiZXZlbnQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0IiwiY29tcGxldGUiLCJuZXdFdmVudCIsImNvbGxfY29weSIsInN0eWxlcyIsIm1haW5Db250YWluZXIiLCJjb250YWluZXIiLCJ0aXRsZSIsImZpbHRlciIsIm1hcCIsInRpbWUiLCJsb2NhdGlvbiIsIm51bWJlcl9qb2luZWQiLCJtYXhfbnVtYmVyIiwiYWRkQnV0dG9uIiwid2VsY29tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLEtBQUQsQ0FEVDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFVBRGE7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUNHLDRDQUFELENBRmY7QUFBQSxNQUV0QkMsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUFBLG1CQUdITCxzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BR3RCTSxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBQUEsbUJBSUVQLHNEQUFRLENBQUMsTUFBRCxDQUpWO0FBQUEsTUFJdEJRLFdBSnNCO0FBQUEsTUFJVEMsT0FKUzs7QUFNN0IsTUFBTUMsSUFBSSxnQkFDUjtBQUFNLFdBQU8sRUFBRSxtQkFBTTtBQUFDUixnQkFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUFxQixLQUEzQztBQUFBLGNBQ0NBLE9B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QUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE0sZ0JBaUJJO0FBQUssbUJBQVMsRUFBRVcsOERBQU0sQ0FBQ1csT0FBdkI7QUFBQSxrQ0FBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWhDLGVBQWdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFoRSxlQUEyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBM0YsZUFBdUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXZKLGVBQW9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFwTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBNkJDLEdBOUJELE1BOEJPLElBQUd2QixXQUFXLEtBQUssS0FBbkIsRUFBeUI7QUFDOUIsd0JBQ0U7QUFBQSw2QkFDRSxxRUFBQywrREFBRDtBQUFVLGdCQUFRLEVBQUlTLFFBQXRCO0FBQWdDLGlCQUFTLEVBQUlYO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDtBQUVGOztHQXZFdUJQLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9zZWVkLmpzb25cIjtcblxuaW1wb3J0IEV2ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0V2ZW50LmpzXCI7XG5cbmltcG9ydCBBZGRFdmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRFdmVudC5qc1wiO1xuXG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51QmFyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Zpc2libGUsIHRvZ2dsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sbGVjdGlvbiwgc2V0Q29sbGVjdGlvbl0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgY29uc3QgW2hvYmJ5LCBzZXRIb2JieV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKFwibWFpblwiKTtcblxuICBjb25zdCBpY29uID0gKFxuICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHt0b2dnbGVNZW51KCF2aXNpYmxlKX19PlxuICAgIHt2aXNpYmxlID8gbnVsbCA6IFwiIHsmZW1zcDvimLBcIn08L3NwYW4+XG4gICAgKTtcblxuICBjb25zdCBob2JiaWVzID0gW107XG4gIGNvbGxlY3Rpb24uZm9yRWFjaCgoZXZlbnQpPT4gLy9kZXRlcm1pbmUgc2VjdGlvbnNcbiAge2lmKGhvYmJpZXMuaW5jbHVkZXMoZXZlbnQuaG9iYnkpKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBlbHNle1xuICAgIGhvYmJpZXMucHVzaChldmVudC5ob2JieSk7XG4gIH1cbiAgfVxuICApO1xuICBob2JiaWVzLnNvcnQoKTsgXG5cblxuICBmdW5jdGlvbiBjb21wbGV0ZSAobmV3RXZlbnQpe1xuICAgICAgaWYobmV3RXZlbnQgIT0gbnVsbCl7XG4gICAgICAgIGNvbnN0IGNvbGxfY29weSA9IFsuLi5jb2xsZWN0aW9uLCBuZXdFdmVudF07XG4gICAgICAgIHNldENvbGxlY3Rpb24oY29sbF9jb3B5KTtcbiAgICAgIH1cbiAgICBzZXRQYWdlKFwibWFpblwiKTtcbiAgfVxuICBcblxuICBpZihjdXJyZW50UGFnZSA9PT0gXCJtYWluXCIpe1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgIDxkaXY+XG4gICAge2ljb259XG4gICAge3Zpc2libGUgPyA8TWVudUJhciB2aXNpYmxlID0ge3Zpc2libGV9IHRvZ2dsZU1lbnUgPSB7dG9nZ2xlTWVudX0gc2VsZWN0ID0ge3NldEhvYmJ5fSBhbGxIb2JiaWVzID0ge2hvYmJpZXN9IC8+OiBudWxsIH1cbiAgICA8L2Rpdj5cbiAgICB7aG9iYnk/ICBcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57aG9iYnl9IGV2ZW50czwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIFxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntob2JieX0gZXZlbnRzPC9oMT4gXG4gICAgICAgIDx1bD5cbiAgICAgICAge2NvbGxlY3Rpb24uZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmhvYmJ5ID09PSBob2JieSkubWFwKGV2ZW50ID0+KFxuICAgICAgICAgICAgPEV2ZW50IHRpdGxlID0ge2V2ZW50LnRpdGxlfSB0aW1lID0ge2V2ZW50LnRpbWV9IGxvY2F0aW9uID0ge2V2ZW50LmxvY2F0aW9ufSBudW1Kb2luZWQgPSB7ZXZlbnQubnVtYmVyX2pvaW5lZH0gbWF4TnVtYmVyID0ge2V2ZW50Lm1heF9udW1iZXJ9Lz5cbiAgICAgICAgKSl9PC91bD5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmFkZEJ1dHRvbn0gdHlwZSA9IFwiYnV0dG9uXCIgbmFtZSA9IFwiYWRkRXZlbnRcIiBpZCA9IFwiYWRkRXZlbnRcIiB2YWx1ZSA9IFwiQWRkIEV2ZW50XCIgb25DbGljayA9IHsoKSA9PiBzZXRQYWdlKFwiYWRkXCIpfS8+XG4gICAgICA8L21haW4+XG4gICAgICA8L2Rpdj46IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud2VsY29tZX0+PGgyPldlbGNvbWUgdG8gSG9iYnkgQnVkZHkhPC9oMj48aDU+IExldHMgR28hIC0gRGFCYWJ5PC9oNT48aDU+IFRoZSBGYWNlQm9vayBvZiB0aGUgMjFzdCBDZW50dXJ5IC0gTWFyayBadWNrZXJiZXJnPC9oNT48aDU+IEhvYmJ5IEJ1ZGR5IHRvIHRoZSBtb29uIC0gRWxvbiBNdXNrPC9oNT48aDU+IEJhbmFuYSBCYW5kaWNvb3QgaXMgdGhlIGZ1dHVyZSBvZiBhbWVyaWNhbiBkZW1vY3JhY3kgLSBKb2UgQmlkZW48L2g1PjwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5BIENTIDMxMiBQcm9qZWN0PC9mb290ZXI+XG4gICAgPC9kaXY+ICBcbiAgICApO1xuICB9IGVsc2UgaWYoY3VycmVudFBhZ2UgPT09IFwiYWRkXCIpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxBZGRFdmVudCBjb21wbGV0ZSA9IHtjb21wbGV0ZX0gY3VyckhvYmJ5ID0ge2hvYmJ5fS8+XG4gICAgICA8L2Rpdj5cbiAgICAgICk7XG4gIH1cbiAgXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})