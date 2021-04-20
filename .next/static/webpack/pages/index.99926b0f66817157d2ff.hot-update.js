webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Event.js":
/*!*********************************!*\
  !*** ./src/components/Event.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot-Leilym/src/components/Event.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Event(_ref) {\n  _s();\n\n  var title = _ref.title,\n      time = _ref.time,\n      location = _ref.location,\n      numJoined = _ref.numJoined,\n      maxNumber = _ref.maxNumber;\n\n  //let numPeople = numJoined;\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(numJoined),\n      numPeople = _useState[0],\n      setNumPeople = _useState[1]; //  useEffect(() =>{\n  //   }, [numPeople]);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.list,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n            children: [\" \", title, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            children: [\" \", location, \" || \", time, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n            children: [\" Spots: \", numPeople, \" / \", maxNumber, \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.button,\n            type: \"button\",\n            id: \"joinButton\",\n            name: \"joinButton\",\n            value: \"Join\",\n            onClick: function onClick() {\n              return setNumPeople(numPeople + 1);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 18\n        }, this), \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Event, \"7QeaKERCvSdJnzyt9JcFlGGd+9E=\");\n\n_c = Event;\n\nvar _c;\n\n$RefreshReg$(_c, \"Event\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnQuanM/OWE1NyJdLCJuYW1lcyI6WyJFdmVudCIsInRpdGxlIiwidGltZSIsImxvY2F0aW9uIiwibnVtSm9pbmVkIiwibWF4TnVtYmVyIiwidXNlU3RhdGUiLCJudW1QZW9wbGUiLCJzZXROdW1QZW9wbGUiLCJzdHlsZXMiLCJsaXN0IiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNBLEtBQVQsT0FBa0U7QUFBQTs7QUFBQSxNQUFqREMsS0FBaUQsUUFBakRBLEtBQWlEO0FBQUEsTUFBMUNDLElBQTBDLFFBQTFDQSxJQUEwQztBQUFBLE1BQXBDQyxRQUFvQyxRQUFwQ0EsUUFBb0M7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhOztBQUVqRjtBQUZpRixrQkFJNUNDLHNEQUFRLENBQUNGLFNBQUQsQ0FKb0M7QUFBQSxNQUl4RUcsU0FKd0U7QUFBQSxNQUk3REMsWUFKNkQsaUJBTWpGO0FBQ0E7OztBQUVBLHNCQUNRO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxJQUF2QjtBQUFBLDJCQUNFO0FBQUEsNkJBQ0U7QUFBQSxxQ0FBSztBQUFBLGtDQUNMO0FBQUEsNEJBQU1ULEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURLLGVBRUw7QUFBQSw0QkFBTUUsUUFBTixVQUFvQkQsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZLLGVBR0w7QUFBQSxtQ0FBYUssU0FBYixTQUEyQkYsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhLLGVBSUw7QUFBTyxxQkFBUyxFQUFFSSw4REFBTSxDQUFDRSxNQUF6QjtBQUFpQyxnQkFBSSxFQUFHLFFBQXhDO0FBQWlELGNBQUUsRUFBRyxZQUF0RDtBQUFtRSxnQkFBSSxFQUFHLFlBQTFFO0FBQXVGLGlCQUFLLEVBQUcsTUFBL0Y7QUFBc0csbUJBQU8sRUFBSTtBQUFBLHFCQUFNSCxZQUFZLENBQUNELFNBQVMsR0FBRyxDQUFiLENBQWxCO0FBQUE7QUFBakg7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUjtBQWFDOztHQXRCdUJQLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FdmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50KHsgdGl0bGUsIHRpbWUsIGxvY2F0aW9uICwgbnVtSm9pbmVkICwgbWF4TnVtYmVyIH0pIHtcblxuLy9sZXQgbnVtUGVvcGxlID0gbnVtSm9pbmVkO1xuXG4gIGNvbnN0IFtudW1QZW9wbGUsIHNldE51bVBlb3BsZSBdID0gdXNlU3RhdGUobnVtSm9pbmVkKTtcblxuLy8gIHVzZUVmZmVjdCgoKSA9Pntcbi8vICAgfSwgW251bVBlb3BsZV0pO1xuXG5yZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxuICAgICAgICAgIDx1bCA+XG4gICAgICAgICAgICA8bGk+IDxkaXY+XG4gICAgICAgICAgICA8aDQ+IHt0aXRsZX0gPC9oND5cbiAgICAgICAgICAgIDxoNT4ge2xvY2F0aW9ufSB8fCB7dGltZX0gPC9oNT5cbiAgICAgICAgICAgIDxoNT4gU3BvdHM6IHtudW1QZW9wbGV9IC8ge21heE51bWJlcn0gPC9oNT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGUgPSBcImJ1dHRvblwiIGlkID0gXCJqb2luQnV0dG9uXCIgbmFtZSA9IFwiam9pbkJ1dHRvblwiIHZhbHVlID0gXCJKb2luXCIgb25DbGljayA9IHsoKSA9PiBzZXROdW1QZW9wbGUobnVtUGVvcGxlICsgMSl9Lz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+IDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4pO1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Event.js\n");

/***/ })

})