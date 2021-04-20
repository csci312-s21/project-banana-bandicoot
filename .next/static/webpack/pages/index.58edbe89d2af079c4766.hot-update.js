webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _data_seed_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/seed.json */ \"./data/seed.json\");\nvar _data_seed_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/seed.json */ \"./data/seed.json\", 1);\n/* harmony import */ var _components_Event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Event.js */ \"./src/components/Event.js\");\n/* harmony import */ var _components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AddEvent.js */ \"./src/components/AddEvent.js\");\n/* harmony import */ var _components_MenuBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MenuBar */ \"./src/components/MenuBar.js\");\n\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      visible = _useState[0],\n      toggleMenu = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(_data_seed_json__WEBPACK_IMPORTED_MODULE_5__),\n      collection = _useState2[0],\n      setCollection = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      hobby = _useState3[0],\n      setHobby = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"main\"),\n      currentPage = _useState4[0],\n      setPage = _useState4[1];\n\n  var icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n    onClick: function onClick() {\n      toggleMenu(!visible);\n    },\n    children: visible ? null : \"☰\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n\n  var hobbies = [];\n  collection.forEach(function (event) //determine sections\n  {\n    if (hobbies.includes(event.hobby)) {\n      return null;\n    } else {\n      hobbies.push(event.hobby);\n    }\n  });\n  hobbies.sort();\n\n  function complete(newEvent) {\n    if (newEvent != null) {\n      var coll_copy = [].concat(Object(_home_runner_project_banana_bandicoot_Leilym_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(collection), [newEvent]);\n      setCollection(coll_copy);\n    }\n\n    setPage(\"main\");\n  }\n\n  if (currentPage === \"main\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.mainContainer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [icon, visible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_MenuBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n            visible: visible,\n            toggleMenu: toggleMenu,\n            select: setHobby,\n            allHobbies: hobbies\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 16\n          }, this) : null]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 5\n        }, this), hobby ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"title\", {\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n              rel: \"icon\",\n              href: \"/favicon.ico\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"main\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n              children: [hobby, \" events\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n              children: collection.filter(function (event) {\n                return event.hobby === hobby;\n              }).map(function (event) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Event_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                  title: event.title,\n                  time: event.time,\n                  location: event.location,\n                  numJoined: event.number_joined,\n                  maxNumber: event.max_number\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 13\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n              className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.addButton,\n              type: \"button\",\n              name: \"addEvent\",\n              id: \"addEvent\",\n              value: \"Add Event\",\n              onClick: function onClick() {\n                return setPage(\"add\");\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 5\n        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.welcome,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            children: \"Welcome to Hobby Buddy!\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 47\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" Lets Go! - DaBaby\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 79\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" The FaceBook of the 21st Century - Mark Zuckerberg\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 106\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" Hobby Buddy to the moon - Elon Musk\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 166\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n            children: \" Banana Bandicoot is the future of american democracy - Joe Biden\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 211\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"footer\", {\n        children: \"A CS 312 Project\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }, this);\n  } else if (currentPage === \"add\") {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_AddEvent_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        complete: complete,\n        currHobby: hobby\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this);\n  }\n}\n\n_s(Home, \"UPolEtc4F+T7MLXgGd1MfhcW5yw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInRvZ2dsZU1lbnUiLCJkYXRhIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb24iLCJob2JieSIsInNldEhvYmJ5IiwiY3VycmVudFBhZ2UiLCJzZXRQYWdlIiwiaWNvbiIsImhvYmJpZXMiLCJmb3JFYWNoIiwiZXZlbnQiLCJpbmNsdWRlcyIsInB1c2giLCJzb3J0IiwiY29tcGxldGUiLCJuZXdFdmVudCIsImNvbGxfY29weSIsInN0eWxlcyIsIm1haW5Db250YWluZXIiLCJjb250YWluZXIiLCJ0aXRsZSIsImZpbHRlciIsIm1hcCIsInRpbWUiLCJsb2NhdGlvbiIsIm51bWJlcl9qb2luZWQiLCJtYXhfbnVtYmVyIiwiYWRkQnV0dG9uIiwid2VsY29tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBR2UsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLEtBQUQsQ0FEVDtBQUFBLE1BQ3RCQyxPQURzQjtBQUFBLE1BQ2JDLFVBRGE7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUNHLDRDQUFELENBRmY7QUFBQSxNQUV0QkMsVUFGc0I7QUFBQSxNQUVWQyxhQUZVOztBQUFBLG1CQUdITCxzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BR3RCTSxLQUhzQjtBQUFBLE1BR2ZDLFFBSGU7O0FBQUEsbUJBSUVQLHNEQUFRLENBQUMsTUFBRCxDQUpWO0FBQUEsTUFJdEJRLFdBSnNCO0FBQUEsTUFJVEMsT0FKUzs7QUFNN0IsTUFBTUMsSUFBSSxnQkFDUjtBQUFNLFdBQU8sRUFBRSxtQkFBTTtBQUFDUixnQkFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUFxQixLQUEzQztBQUFBLGNBQ0NBLE9B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QUFBO0FBQUE7QUFBQSxrQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRE0sZ0JBaUJJO0FBQUssbUJBQVMsRUFBRVcsOERBQU0sQ0FBQ1csT0FBdkI7QUFBQSxrQ0FBZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWhDLGVBQWdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFoRSxlQUEyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBM0YsZUFBdUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQXZKLGVBQW9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFwTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBeUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBNkJDLEdBOUJELE1BOEJPLElBQUd2QixXQUFXLEtBQUssS0FBbkIsRUFBeUI7QUFDOUIsd0JBQ0U7QUFBQSw2QkFDRSxxRUFBQywrREFBRDtBQUFVLGdCQUFRLEVBQUlTLFFBQXRCO0FBQWdDLGlCQUFTLEVBQUlYO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRDtBQUVGOztHQXZFdUJQLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9zZWVkLmpzb25cIjtcblxuaW1wb3J0IEV2ZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0V2ZW50LmpzXCI7XG5cbmltcG9ydCBBZGRFdmVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRFdmVudC5qc1wiO1xuXG5pbXBvcnQgTWVudUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9NZW51QmFyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3Zpc2libGUsIHRvZ2dsZU1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29sbGVjdGlvbiwgc2V0Q29sbGVjdGlvbl0gPSB1c2VTdGF0ZShkYXRhKTtcbiAgY29uc3QgW2hvYmJ5LCBzZXRIb2JieV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKFwibWFpblwiKTtcblxuICBjb25zdCBpY29uID0gKFxuICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHt0b2dnbGVNZW51KCF2aXNpYmxlKX19PlxuICAgIHt2aXNpYmxlID8gbnVsbCA6IFwi4piwXCJ9PC9zcGFuPlxuICAgICk7XG5cbiAgY29uc3QgaG9iYmllcyA9IFtdO1xuICBjb2xsZWN0aW9uLmZvckVhY2goKGV2ZW50KT0+IC8vZGV0ZXJtaW5lIHNlY3Rpb25zXG4gIHtpZihob2JiaWVzLmluY2x1ZGVzKGV2ZW50LmhvYmJ5KSl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgZWxzZXtcbiAgICBob2JiaWVzLnB1c2goZXZlbnQuaG9iYnkpO1xuICB9XG4gIH1cbiAgKTtcbiAgaG9iYmllcy5zb3J0KCk7IFxuXG5cbiAgZnVuY3Rpb24gY29tcGxldGUgKG5ld0V2ZW50KXtcbiAgICAgIGlmKG5ld0V2ZW50ICE9IG51bGwpe1xuICAgICAgICBjb25zdCBjb2xsX2NvcHkgPSBbLi4uY29sbGVjdGlvbiwgbmV3RXZlbnRdO1xuICAgICAgICBzZXRDb2xsZWN0aW9uKGNvbGxfY29weSk7XG4gICAgICB9XG4gICAgc2V0UGFnZShcIm1haW5cIik7XG4gIH1cbiAgXG5cbiAgaWYoY3VycmVudFBhZ2UgPT09IFwibWFpblwiKXtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5Db250YWluZXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8ZGl2PlxuICAgIHtpY29ufVxuICAgIHt2aXNpYmxlID8gPE1lbnVCYXIgdmlzaWJsZSA9IHt2aXNpYmxlfSB0b2dnbGVNZW51ID0ge3RvZ2dsZU1lbnV9IHNlbGVjdCA9IHtzZXRIb2JieX0gYWxsSG9iYmllcyA9IHtob2JiaWVzfSAvPjogbnVsbCB9XG4gICAgPC9kaXY+XG4gICAge2hvYmJ5PyAgXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2hvYmJ5fSBldmVudHM8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICBcbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57aG9iYnl9IGV2ZW50czwvaDE+IFxuICAgICAgICA8dWw+XG4gICAgICAgIHtjb2xsZWN0aW9uLmZpbHRlcihldmVudCA9PiBldmVudC5ob2JieSA9PT0gaG9iYnkpLm1hcChldmVudCA9PihcbiAgICAgICAgICAgIDxFdmVudCB0aXRsZSA9IHtldmVudC50aXRsZX0gdGltZSA9IHtldmVudC50aW1lfSBsb2NhdGlvbiA9IHtldmVudC5sb2NhdGlvbn0gbnVtSm9pbmVkID0ge2V2ZW50Lm51bWJlcl9qb2luZWR9IG1heE51bWJlciA9IHtldmVudC5tYXhfbnVtYmVyfS8+XG4gICAgICAgICkpfTwvdWw+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259IHR5cGUgPSBcImJ1dHRvblwiIG5hbWUgPSBcImFkZEV2ZW50XCIgaWQgPSBcImFkZEV2ZW50XCIgdmFsdWUgPSBcIkFkZCBFdmVudFwiIG9uQ2xpY2sgPSB7KCkgPT4gc2V0UGFnZShcImFkZFwiKX0vPlxuICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+OiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndlbGNvbWV9PjxoMj5XZWxjb21lIHRvIEhvYmJ5IEJ1ZGR5ITwvaDI+PGg1PiBMZXRzIEdvISAtIERhQmFieTwvaDU+PGg1PiBUaGUgRmFjZUJvb2sgb2YgdGhlIDIxc3QgQ2VudHVyeSAtIE1hcmsgWnVja2VyYmVyZzwvaDU+PGg1PiBIb2JieSBCdWRkeSB0byB0aGUgbW9vbiAtIEVsb24gTXVzazwvaDU+PGg1PiBCYW5hbmEgQmFuZGljb290IGlzIHRoZSBmdXR1cmUgb2YgYW1lcmljYW4gZGVtb2NyYWN5IC0gSm9lIEJpZGVuPC9oNT48L2Rpdj59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+QSBDUyAzMTIgUHJvamVjdDwvZm9vdGVyPlxuICAgIDwvZGl2PiAgXG4gICAgKTtcbiAgfSBlbHNlIGlmKGN1cnJlbnRQYWdlID09PSBcImFkZFwiKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8QWRkRXZlbnQgY29tcGxldGUgPSB7Y29tcGxldGV9IGN1cnJIb2JieSA9IHtob2JieX0vPlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG4gIFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})