webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/MenuBar.js":
/*!***********************************!*\
  !*** ./src/components/MenuBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MenuBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/MenuBar.module.css */ \"./src/styles/MenuBar.module.css\");\n/* harmony import */ var _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/components/MenuBar.js\";\n\nfunction MenuBar(_ref) {\n  var _this = this;\n\n  var visible = _ref.visible,\n      toggleMenu = _ref.toggleMenu,\n      select = _ref.select,\n      allHobbies = _ref.allHobbies;\n\n  var icon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n    onClick: function onClick() {\n      toggleMenu(!visible);\n    },\n    className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.menuHeader,\n    children: [visible ? \"☰\" : null, \" \\u2003Hobby Buddy\"]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n\n  var hobbiesList = allHobbies.map(function (hobby) {\n    //list of sections\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n      className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.li,\n      \"data-testid\": \"hobby\",\n      onClick: function onClick() {\n        return select(hobby);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"curr\", {\n        children: hobby\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 105\n      }, _this)\n    }, hobby, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 12\n    }, _this);\n  }); //initiate helper to perform callbacks on click\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    children: [icon, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button1,\n      children: \"+ add hobby\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      className: _styles_MenuBar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.ul,\n      children: hobbiesL\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n_c = MenuBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWVudUJhci5qcz9jYWI4Il0sIm5hbWVzIjpbIk1lbnVCYXIiLCJ2aXNpYmxlIiwidG9nZ2xlTWVudSIsInNlbGVjdCIsImFsbEhvYmJpZXMiLCJpY29uIiwic3R5bGVzIiwibWVudUhlYWRlciIsImhvYmJpZXNMaXN0IiwibWFwIiwiaG9iYnkiLCJsaSIsImNvbnRhaW5lciIsImJ1dHRvbjEiLCJ1bCIsImhvYmJpZXNMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBR2UsU0FBU0EsT0FBVCxPQUEyRDtBQUFBOztBQUFBLE1BQXpDQyxPQUF5QyxRQUF6Q0EsT0FBeUM7QUFBQSxNQUFoQ0MsVUFBZ0MsUUFBaENBLFVBQWdDO0FBQUEsTUFBcEJDLE1BQW9CLFFBQXBCQSxNQUFvQjtBQUFBLE1BQVpDLFVBQVksUUFBWkEsVUFBWTs7QUFDeEUsTUFBTUMsSUFBSSxnQkFDUjtBQUFPLFdBQU8sRUFBRSxtQkFBTTtBQUFDSCxnQkFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUFxQixLQUE1QztBQUE4QyxhQUFTLEVBQUlLLGlFQUFNLENBQUNDLFVBQWxFO0FBQUEsZUFDQ04sT0FBTyxHQUFHLEdBQUgsR0FBUSxJQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjs7QUFLQSxNQUFNTyxXQUFXLEdBQUdKLFVBQVUsQ0FBQ0ssR0FBWCxDQUFlLFVBQUNDLEtBQUQsRUFBVTtBQUFFO0FBQzdDLHdCQUFPO0FBQUksZUFBUyxFQUFFSixpRUFBTSxDQUFDSyxFQUF0QjtBQUF5QyxxQkFBYyxPQUF2RDtBQUErRCxhQUFPLEVBQUU7QUFBQSxlQUFNUixNQUFNLENBQUNPLEtBQUQsQ0FBWjtBQUFBLE9BQXhFO0FBQUEsNkJBQTZGO0FBQUEsa0JBQU9BO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE3RixPQUFrQ0EsS0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBQ0EsR0FGa0IsQ0FBcEIsQ0FOd0UsQ0FRbkU7O0FBR1Asc0JBRUk7QUFBSyxhQUFTLEVBQUVKLGlFQUFNLENBQUNNLFNBQXZCO0FBQUEsZUFFQ1AsSUFGRCxlQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIQSxlQUlBO0FBQVEsZUFBUyxFQUFJQyxpRUFBTSxDQUFDTyxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpBLGVBTUU7QUFBSSxlQUFTLEVBQUVQLGlFQUFNLENBQUNRLEVBQXRCO0FBQUEsZ0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBZ0JDO0tBM0J1QmYsTyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL01lbnVCYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9NZW51QmFyLm1vZHVsZS5jc3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51QmFyKHt2aXNpYmxlLCB0b2dnbGVNZW51LCBzZWxlY3QsIGFsbEhvYmJpZXN9KXtcbiAgY29uc3QgaWNvbiA9IChcbiAgICA8c3BhbiAgb25DbGljaz17KCkgPT4ge3RvZ2dsZU1lbnUoIXZpc2libGUpfX0gY2xhc3NOYW1lID0ge3N0eWxlcy5tZW51SGVhZGVyfT5cbiAgICB7dmlzaWJsZSA/IFwi4piwXCI6IG51bGx9ICZlbXNwO0hvYmJ5IEJ1ZGR5PC9zcGFuPlxuICApO1xuXG4gIGNvbnN0IGhvYmJpZXNMaXN0ID0gYWxsSG9iYmllcy5tYXAoKGhvYmJ5KT0+IHsgLy9saXN0IG9mIHNlY3Rpb25zXG4gICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saSB9IGtleSA9IHtob2JieX0gZGF0YS10ZXN0aWQgPSBcImhvYmJ5XCIgb25DbGljaz17KCkgPT4gc2VsZWN0KGhvYmJ5KX0+PGN1cnI+e2hvYmJ5fTwvY3Vycj48L2xpPjtcbiAgIH0pOyAvL2luaXRpYXRlIGhlbHBlciB0byBwZXJmb3JtIGNhbGxiYWNrcyBvbiBjbGlja1xuXG5cbnJldHVybiAoXG4gICBcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICB7aWNvbn1cbiAgICA8YnIgLz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IHtzdHlsZXMuYnV0dG9uMX0gPisgYWRkIGhvYmJ5PC9idXR0b24+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy51bH0+XG4gICAgICAgIHtob2JiaWVzTH1cbiAgICAgIDwvdWw+XG5cblxuICAgIDwvZGl2PlxuICApO1xuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/MenuBar.js\n");

/***/ })

})