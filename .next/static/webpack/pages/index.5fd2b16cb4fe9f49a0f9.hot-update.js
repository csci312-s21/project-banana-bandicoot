webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/AddEvent.js":
/*!************************************!*\
  !*** ./src/components/AddEvent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AddEvent; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/runner/project-banana-bandicoot/src/components/AddEvent.js\",\n    _s = $RefreshSig$();\n\n\nfunction AddEvent() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      titleInput = _useState[0],\n      setTitle = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      timeInput = _useState2[0],\n      setTime = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      locationInput = _useState3[0],\n      setLocation = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      capacityInput = _useState4[0],\n      setCapacity = _useState4[1];\n\n  var newEvent = {\n    title: titleInput,\n    time: timeInput,\n    location: locationInput,\n    capacity: capacityInput\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      id: \"text_title\",\n      name: \"title\",\n      placeholder: \"title must be set\",\n      value: titleInput,\n      onChange: function onChange() {\n        return setTitle(event.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      id: \"text_time\",\n      name: \"time\",\n      placeholder: \"set time of event\",\n      value: timeInput,\n      onChange: function onChange() {\n        return setTime(event.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      id: \"text_title\",\n      name: \"title\",\n      placeholder: \"title must be set\",\n      value: titleInput,\n      onChange: function onChange() {\n        return setTitle(event.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"button\",\n      id: \"saveButton\",\n      name: \"saveButton\",\n      disabled: titleInput.length < 1,\n      onClick: function onClick() {\n        return complete(newArticle);\n      },\n      value: \"Save\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"button\",\n      id: \"cancelButton\",\n      name: \"cancelButton\",\n      onClick: function onClick() {\n        return complete();\n      },\n      value: \"Cancel\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\n\n_s(AddEvent, \"lYk+GCsy1k5+u0eqEeZ38+CnP88=\");\n\n_c = AddEvent;\n\nvar _c;\n\n$RefreshReg$(_c, \"AddEvent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWRkRXZlbnQuanM/YzZjMiJdLCJuYW1lcyI6WyJBZGRFdmVudCIsInVzZVN0YXRlIiwidGl0bGVJbnB1dCIsInNldFRpdGxlIiwidGltZUlucHV0Iiwic2V0VGltZSIsImxvY2F0aW9uSW5wdXQiLCJzZXRMb2NhdGlvbiIsImNhcGFjaXR5SW5wdXQiLCJzZXRDYXBhY2l0eSIsIm5ld0V2ZW50IiwidGl0bGUiLCJ0aW1lIiwibG9jYXRpb24iLCJjYXBhY2l0eSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJsZW5ndGgiLCJjb21wbGV0ZSIsIm5ld0FydGljbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxRQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBRURDLHNEQUFRLENBQUMsRUFBRCxDQUZQO0FBQUEsTUFFekJDLFVBRnlCO0FBQUEsTUFFYkMsUUFGYTs7QUFBQSxtQkFJSEYsc0RBQVEsQ0FBQyxFQUFELENBSkw7QUFBQSxNQUl6QkcsU0FKeUI7QUFBQSxNQUlkQyxPQUpjOztBQUFBLG1CQU1LSixzREFBUSxDQUFDLEVBQUQsQ0FOYjtBQUFBLE1BTXpCSyxhQU55QjtBQUFBLE1BTVZDLFdBTlU7O0FBQUEsbUJBUUtOLHNEQUFRLENBQUMsRUFBRCxDQVJiO0FBQUEsTUFRekJPLGFBUnlCO0FBQUEsTUFRVkMsV0FSVTs7QUFVaEMsTUFBTUMsUUFBUSxHQUFHO0FBQUNDLFNBQUssRUFBRVQsVUFBUjtBQUFvQlUsUUFBSSxFQUFFUixTQUExQjtBQUFvQ1MsWUFBUSxFQUFFUCxhQUE5QztBQUE2RFEsWUFBUSxFQUFFTjtBQUF2RSxHQUFqQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFFLEVBQUMsWUFBdEI7QUFBbUMsVUFBSSxFQUFDLE9BQXhDO0FBQWdELGlCQUFXLEVBQUcsbUJBQTlEO0FBQWtGLFdBQUssRUFBSU4sVUFBM0Y7QUFBdUcsY0FBUSxFQUFJO0FBQUEsZUFBTUMsUUFBUSxDQUFDWSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFkO0FBQUE7QUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBS0U7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFFLEVBQUMsV0FBdEI7QUFBa0MsVUFBSSxFQUFDLE1BQXZDO0FBQThDLGlCQUFXLEVBQUcsbUJBQTVEO0FBQWdGLFdBQUssRUFBSWIsU0FBekY7QUFBb0csY0FBUSxFQUFJO0FBQUEsZUFBTUMsT0FBTyxDQUFDVSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFiO0FBQUE7QUFBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBU0U7QUFBTyxVQUFJLEVBQUMsTUFBWjtBQUFtQixRQUFFLEVBQUMsWUFBdEI7QUFBbUMsVUFBSSxFQUFDLE9BQXhDO0FBQWdELGlCQUFXLEVBQUcsbUJBQTlEO0FBQWtGLFdBQUssRUFBSWYsVUFBM0Y7QUFBdUcsY0FBUSxFQUFJO0FBQUEsZUFBTUMsUUFBUSxDQUFDWSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFkO0FBQUE7QUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBZUU7QUFBTyxVQUFJLEVBQUcsUUFBZDtBQUF1QixRQUFFLEVBQUcsWUFBNUI7QUFBeUMsVUFBSSxFQUFHLFlBQWhEO0FBQTZELGNBQVEsRUFBSWYsVUFBVSxDQUFDZ0IsTUFBWCxHQUFvQixDQUE3RjtBQUFnRyxhQUFPLEVBQUk7QUFBQSxlQUFNQyxRQUFRLENBQUNDLFVBQUQsQ0FBZDtBQUFBLE9BQTNHO0FBQXVJLFdBQUssRUFBRztBQUEvSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkYsZUFpQkU7QUFBTyxVQUFJLEVBQUcsUUFBZDtBQUF1QixRQUFFLEVBQUcsY0FBNUI7QUFBMkMsVUFBSSxFQUFHLGNBQWxEO0FBQWlFLGFBQU8sRUFBSTtBQUFBLGVBQU1ELFFBQVEsRUFBZDtBQUFBLE9BQTVFO0FBQThGLFdBQUssRUFBRztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQWxDdUJuQixROztLQUFBQSxRIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQWRkRXZlbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEV2ZW50KCl7XG5cbiAgY29uc3QgW3RpdGxlSW5wdXQsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbdGltZUlucHV0LCBzZXRUaW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbbG9jYXRpb25JbnB1dCwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IFtjYXBhY2l0eUlucHV0LCBzZXRDYXBhY2l0eV0gPSB1c2VTdGF0ZSgnJyk7XG4gIFxuICBjb25zdCBuZXdFdmVudCA9IHt0aXRsZTogdGl0bGVJbnB1dCwgdGltZTogdGltZUlucHV0LGxvY2F0aW9uOiBsb2NhdGlvbklucHV0LCBjYXBhY2l0eTogY2FwYWNpdHlJbnB1dH07XG5cbiAgcmV0dXJuKFxuICAgIDxmb3JtPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0ZXh0X3RpdGxlXCIgbmFtZT1cInRpdGxlXCIgcGxhY2Vob2xkZXIgPSBcInRpdGxlIG11c3QgYmUgc2V0XCIgdmFsdWUgPSB7dGl0bGVJbnB1dH0gb25DaGFuZ2UgPSB7KCkgPT4gc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKX0vPlxuXG4gICAgICA8YnI+PC9icj5cblxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0ZXh0X3RpbWVcIiBuYW1lPVwidGltZVwiIHBsYWNlaG9sZGVyID0gXCJzZXQgdGltZSBvZiBldmVudFwiIHZhbHVlID0ge3RpbWVJbnB1dH0gb25DaGFuZ2UgPSB7KCkgPT4gc2V0VGltZShldmVudC50YXJnZXQudmFsdWUpfS8+XG5cbiAgICAgIDxicj48L2JyPlxuXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRleHRfdGl0bGVcIiBuYW1lPVwidGl0bGVcIiBwbGFjZWhvbGRlciA9IFwidGl0bGUgbXVzdCBiZSBzZXRcIiB2YWx1ZSA9IHt0aXRsZUlucHV0fSBvbkNoYW5nZSA9IHsoKSA9PiBzZXRUaXRsZShldmVudC50YXJnZXQudmFsdWUpfS8+XG5cbiAgICAgIDxicj48L2JyPlxuXG4gICAgICA8YnI+PC9icj5cblxuICAgICAgPGlucHV0IHR5cGUgPSBcImJ1dHRvblwiIGlkID0gXCJzYXZlQnV0dG9uXCIgbmFtZSA9IFwic2F2ZUJ1dHRvblwiIGRpc2FibGVkID0ge3RpdGxlSW5wdXQubGVuZ3RoIDwgMX0gb25DbGljayA9IHsoKSA9PiBjb21wbGV0ZShuZXdBcnRpY2xlKX0gdmFsdWUgPSBcIlNhdmVcIi8+XG5cbiAgICAgIDxpbnB1dCB0eXBlID0gXCJidXR0b25cIiBpZCA9IFwiY2FuY2VsQnV0dG9uXCIgbmFtZSA9IFwiY2FuY2VsQnV0dG9uXCIgb25DbGljayA9IHsoKSA9PiBjb21wbGV0ZSgpfSB2YWx1ZSA9IFwiQ2FuY2VsXCIvPlxuICAgICAgXG4gICAgICA8L2Zvcm0+XG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AddEvent.js\n");

/***/ })

})