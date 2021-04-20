webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MenuBar.js":
/*!***********************************!*\
  !*** ./src/components/MenuBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/MenuBar.module.css */ \"./src/styles/MenuBar.module.css\");\n/* harmony import */ var _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/components/MenuBar.js\";\n\nfunction MenuBar(_ref) {\n  var _this = this;\n\n  var visible = _ref.visible,\n      toggleMenu = _ref.toggleMenu,\n      select = _ref.select,\n      allHobbies = _ref.allHobbies;\n\n  var icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    onClick: function onClick() {\n      toggleMenu(!visible);\n    },\n    className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuHeader,\n    children: [visible ? \"☰\" : null, \" \\u2003Hobby Buddy\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n\n  var hobbiesList = allHobbies.map(function (hobby) {\n    //list of sections\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.li,\n      \"data-testid\": \"hobby\",\n      onClick: function onClick() {\n        return select(hobby);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"curr\", {\n        children: hobby\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 105\n      }, _this)\n    }, hobby, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 12\n    }, _this);\n  }); //initiate helper to perform callbacks on click\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n      children: [icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,\n        children: \"+ add hobby\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ul,\n        children: hobbiesList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n_c = MenuBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudUJhci5qcz9jYWI4Il0sIm5hbWVzIjpbIk1lbnVCYXIiLCJ2aXNpYmxlIiwidG9nZ2xlTWVudSIsInNlbGVjdCIsImFsbEhvYmJpZXMiLCJpY29uIiwic3R5bGVzIiwibWVudUhlYWRlciIsImhvYmJpZXNMaXN0IiwibWFwIiwiaG9iYnkiLCJsaSIsImNvbnRhaW5lciIsImJ1dHRvbjEiLCJ1bCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUdlLFNBQVNBLE9BQVQsT0FBMkQ7QUFBQTs7QUFBQSxNQUF6Q0MsT0FBeUMsUUFBekNBLE9BQXlDO0FBQUEsTUFBaENDLFVBQWdDLFFBQWhDQSxVQUFnQztBQUFBLE1BQXBCQyxNQUFvQixRQUFwQkEsTUFBb0I7QUFBQSxNQUFaQyxVQUFZLFFBQVpBLFVBQVk7O0FBQ3hFLE1BQU1DLElBQUksZ0JBQ1I7QUFBTyxXQUFPLEVBQUUsbUJBQU07QUFBQ0gsZ0JBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7QUFBcUIsS0FBNUM7QUFBOEMsYUFBUyxFQUFJSyxpRUFBTSxDQUFDQyxVQUFsRTtBQUFBLGVBQ0NOLE9BQU8sR0FBRyxHQUFILEdBQVEsSUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7O0FBS0EsTUFBTU8sV0FBVyxHQUFHSixVQUFVLENBQUNLLEdBQVgsQ0FBZSxVQUFDQyxLQUFELEVBQVU7QUFBRTtBQUM3Qyx3QkFBTztBQUFJLGVBQVMsRUFBRUosaUVBQU0sQ0FBQ0ssRUFBdEI7QUFBeUMscUJBQWMsT0FBdkQ7QUFBK0QsYUFBTyxFQUFFO0FBQUEsZUFBTVIsTUFBTSxDQUFDTyxLQUFELENBQVo7QUFBQSxPQUF4RTtBQUFBLDZCQUE2RjtBQUFBLGtCQUFPQTtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0YsT0FBa0NBLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNBLEdBRmtCLENBQXBCLENBTndFLENBUW5FOztBQUdQLHNCQUVJO0FBQUssYUFBUyxFQUFFSixpRUFBTSxDQUFDTSxTQUF2QjtBQUFBLDJCQUNBO0FBQUssZUFBUyxFQUFFTixpRUFBTSxDQUFDTSxTQUF2QjtBQUFBLGlCQUVDUCxJQUZELGVBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpBLGVBS0E7QUFBUSxpQkFBUyxFQUFJQyxpRUFBTSxDQUFDTyxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBLGVBT0U7QUFBSSxpQkFBUyxFQUFFUCxpRUFBTSxDQUFDUSxFQUF0QjtBQUFBLGtCQUNFTjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFvQkM7S0EvQnVCUixPIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTWVudUJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL01lbnVCYXIubW9kdWxlLmNzc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVCYXIoe3Zpc2libGUsIHRvZ2dsZU1lbnUsIHNlbGVjdCwgYWxsSG9iYmllc30pe1xuICBjb25zdCBpY29uID0gKFxuICAgIDxzcGFuICBvbkNsaWNrPXsoKSA9PiB7dG9nZ2xlTWVudSghdmlzaWJsZSl9fSBjbGFzc05hbWUgPSB7c3R5bGVzLm1lbnVIZWFkZXJ9PlxuICAgIHt2aXNpYmxlID8gXCLimLBcIjogbnVsbH0gJmVtc3A7SG9iYnkgQnVkZHk8L3NwYW4+XG4gICk7XG5cbiAgY29uc3QgaG9iYmllc0xpc3QgPSBhbGxIb2JiaWVzLm1hcCgoaG9iYnkpPT4geyAvL2xpc3Qgb2Ygc2VjdGlvbnNcbiAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpIH0ga2V5ID0ge2hvYmJ5fSBkYXRhLXRlc3RpZCA9IFwiaG9iYnlcIiBvbkNsaWNrPXsoKSA9PiBzZWxlY3QoaG9iYnkpfT48Y3Vycj57aG9iYnl9PC9jdXJyPjwvbGk+O1xuICAgfSk7IC8vaW5pdGlhdGUgaGVscGVyIHRvIHBlcmZvcm0gY2FsbGJhY2tzIG9uIGNsaWNrXG5cblxucmV0dXJuIChcbiAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICB7aWNvbn1cblxuICAgIDxiciAvPlxuICAgIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5idXR0b24xfSA+KyBhZGQgaG9iYnk8L2J1dHRvbj5cblxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVsfT5cbiAgICAgICB7aG9iYmllc0xpc3R9XG5cbiAgICAgIDwvdWw+XG5cblxuICAgIDwvZGl2PlxuICAgPC9kaXY+XG4gICk7XG5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/MenuBar.js\n");

/***/ })

})