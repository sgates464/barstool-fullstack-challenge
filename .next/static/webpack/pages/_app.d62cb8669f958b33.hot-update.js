"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BoxScoreHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BoxScoreHeader */ \"./src/components/BoxScoreHeader.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n\n\n\nfunction App(param) {\n    let { Component , pageProps  } = param;\n    const theme = {\n        name: \"my theme\",\n        rounding: 8,\n        spacing: 24,\n        defaultMode: \"light\",\n        global: {\n            colors: {\n                brand: {\n                    dark: \"#7700cc\",\n                    light: \"#6600cc\"\n                },\n                background: {\n                    dark: \"#111111\",\n                    light: \"#FFFFFF\"\n                },\n                \"background-back\": {\n                    dark: \"#111111\",\n                    light: \"#EEEEEE\"\n                },\n                \"background-front\": {\n                    dark: \"#222222\",\n                    light: \"#FFFFFF\"\n                },\n                \"background-contrast\": {\n                    dark: \"#FFFFFF11\",\n                    light: \"#11111111\"\n                },\n                text: {\n                    dark: \"#EEEEEE\",\n                    light: \"#333333\"\n                },\n                \"text-strong\": {\n                    dark: \"#FFFFFF\",\n                    light: \"#000000\"\n                },\n                \"text-weak\": {\n                    dark: \"#CCCCCC\",\n                    light: \"#444444\"\n                },\n                \"text-xweak\": {\n                    dark: \"#999999\",\n                    light: \"#666666\"\n                },\n                border: {\n                    dark: \"#444444\",\n                    light: \"#CCCCCC\"\n                },\n                control: \"brand\",\n                \"active-background\": \"background-contrast\",\n                \"active-text\": \"text-strong\",\n                \"selected-background\": \"brand\",\n                \"selected-text\": \"text-strong\",\n                \"status-critical\": \"#FF4040\",\n                \"status-warning\": \"#FFAA15\",\n                \"status-ok\": \"#00C781\",\n                \"status-unknown\": \"#CCCCCC\",\n                \"status-disabled\": \"#CCCCCC\",\n                \"graph-0\": \"brand\",\n                \"graph-1\": \"status-warning\"\n            },\n            font: {\n                family: '\"Lexend\"',\n                face: \"/* vietnamese */\\n@font-face {\\n  font-family: 'Lexend';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(https://fonts.gstatic.com/s/lexend/v17/wlptgwvFAVdoq2_F94zlCfv0bz1WCzsWzLhneoCrCEswgqSP.woff2) format('woff2');\\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\\n}\\n/* latin-ext */\\n@font-face {\\n  font-family: 'Lexend';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(https://fonts.gstatic.com/s/lexend/v17/wlptgwvFAVdoq2_F94zlCfv0bz1WCzsWzLlneoCrCEswgqSP.woff2) format('woff2');\\n  unicode-range: U+0100-02AF, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\\n}\\n/* latin */\\n@font-face {\\n  font-family: 'Lexend';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(https://fonts.gstatic.com/s/lexend/v17/wlptgwvFAVdoq2_F94zlCfv0bz1WCzsWzLdneoCrCEswgg.woff2) format('woff2');\\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\\n}\\n\\n/* gurmukhi */\\n@font-face {\\n  font-family: 'Braah One';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(https://fonts.gstatic.com/s/braahone/v1/KFOlCnWUpt6LsxxxiylfJxc4AMP6lbBP.woff2) format('woff2');\\n  unicode-range: U+0964-0965, U+0A01-0A76, U+200C-200D, U+20B9, U+25CC, U+262C, U+A830-A839;\\n}\\n/* vietnamese */\\n@font-face {\\n  font-family: 'Braah One';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(https://fonts.gstatic.com/s/braahone/v1/KFOlCnWUpt6LsxxxiylfCxc4AMP6lbBP.woff2) format('woff2');\\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;\\n}\\n/* latin-ext */\\n@font-face {\\n  font-family: 'Braah One';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(https://fonts.gstatic.com/s/braahone/v1/KFOlCnWUpt6LsxxxiylfChc4AMP6lbBP.woff2) format('woff2');\\n  unicode-range: U+0100-02AF, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\\n}\\n/* latin */\\n@font-face {\\n  font-family: 'Braah One';\\n  font-style: normal;\\n  font-weight: 400;\\n  src: url(https://fonts.gstatic.com/s/braahone/v1/KFOlCnWUpt6LsxxxiylfBBc4AMP6lQ.woff2) format('woff2');\\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\\n}\\n\"\n            },\n            active: {\n                background: \"active-background\",\n                color: \"active-text\"\n            },\n            hover: {\n                background: \"active-background\",\n                color: \"active-text\"\n            },\n            selected: {\n                background: \"selected-background\",\n                color: \"selected-text\"\n            },\n            control: {\n                border: {\n                    radius: \"8px\"\n                }\n            },\n            drop: {\n                border: {\n                    radius: \"8px\"\n                }\n            }\n        },\n        chart: {},\n        diagram: {\n            line: {}\n        },\n        meter: {},\n        tip: {\n            content: {\n                background: {\n                    color: \"background\"\n                },\n                elevation: \"none\",\n                round: false\n            }\n        },\n        layer: {\n            background: {\n                dark: \"#111111\",\n                light: \"#FFFFFF\"\n            }\n        },\n        button: {\n            border: {\n                radius: \"8px\"\n            }\n        },\n        checkBox: {\n            check: {\n                radius: \"8px\"\n            },\n            toggle: {\n                radius: \"8px\"\n            }\n        },\n        radioButton: {\n            check: {\n                radius: \"8px\"\n            }\n        },\n        formField: {\n            border: {\n                color: \"border\",\n                error: {\n                    color: {\n                        dark: \"white\",\n                        light: \"status-critical\"\n                    }\n                },\n                position: \"inner\",\n                side: \"bottom\"\n            },\n            content: {\n                pad: \"small\"\n            },\n            disabled: {\n                background: {\n                    color: \"status-disabled\",\n                    opacity: \"medium\"\n                }\n            },\n            error: {\n                color: \"status-critical\",\n                margin: {\n                    vertical: \"xsmall\",\n                    horizontal: \"small\"\n                }\n            },\n            help: {\n                color: \"dark-3\",\n                margin: {\n                    start: \"small\"\n                }\n            },\n            info: {\n                color: \"text-xweak\",\n                margin: {\n                    vertical: \"xsmall\",\n                    horizontal: \"small\"\n                }\n            },\n            label: {\n                margin: {\n                    vertical: \"xsmall\",\n                    horizontal: \"small\"\n                }\n            },\n            margin: {\n                bottom: \"small\"\n            },\n            survey: {\n                label: {\n                    margin: {\n                        bottom: \"xsmall\"\n                    },\n                    size: \"medium\",\n                    weight: 400\n                }\n            },\n            round: \"8px\"\n        },\n        heading: {\n            font: {\n                family: '\"Braah One\"'\n            },\n            extend: ()=>\"margin-top: 12px; margin-bottom: 12px;\"\n        },\n        text: {\n            xsmall: {\n                size: \"10px\",\n                height: \"16px\",\n                maxWidth: \"240px\"\n            },\n            small: {\n                size: \"14px\",\n                height: \"20px\",\n                maxWidth: \"336px\"\n            },\n            medium: {\n                size: \"18px\",\n                height: \"24px\",\n                maxWidth: \"432px\"\n            },\n            large: {\n                size: \"26px\",\n                height: \"32px\",\n                maxWidth: \"624px\"\n            },\n            xlarge: {\n                size: \"34px\",\n                height: \"40px\",\n                maxWidth: \"816px\"\n            },\n            xxlarge: {\n                size: \"50px\",\n                height: \"56px\",\n                maxWidth: \"1200px\"\n            }\n        },\n        paragraph: {\n            extend: ()=>\"font-weight: 300; margin-top: 0;\",\n            xxlarge: {\n                size: \"28px\"\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_2__.Grommet, {\n        theme: theme,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BoxScoreHeader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/pages/_app.js\",\n                lineNumber: 238,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_2__.Page, {\n                kind: \"full\",\n                background: \"background-contrast\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/pages/_app.js\",\n                    lineNumber: 240,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/pages/_app.js\",\n                lineNumber: 239,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/pages/_app.js\",\n        lineNumber: 237,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb3hTY29yZUhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0JveFNjb3JlSGVhZGVyXCI7XG5pbXBvcnQgeyBHcm9tbWV0LCBQYWdlIH0gZnJvbSBcImdyb21tZXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCB0aGVtZSA9IHtcbiAgICBuYW1lOiBcIm15IHRoZW1lXCIsXG4gICAgcm91bmRpbmc6IDgsXG4gICAgc3BhY2luZzogMjQsXG4gICAgZGVmYXVsdE1vZGU6IFwibGlnaHRcIixcbiAgICBnbG9iYWw6IHtcbiAgICAgIGNvbG9yczoge1xuICAgICAgICBicmFuZDoge1xuICAgICAgICAgIGRhcms6IFwiIzc3MDBjY1wiLFxuICAgICAgICAgIGxpZ2h0OiBcIiM2NjAwY2NcIixcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgIGRhcms6IFwiIzExMTExMVwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNGRkZGRkZcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWJhY2tcIjoge1xuICAgICAgICAgIGRhcms6IFwiIzExMTExMVwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiNFRUVFRUVcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJiYWNrZ3JvdW5kLWZyb250XCI6IHtcbiAgICAgICAgICBkYXJrOiBcIiMyMjIyMjJcIixcbiAgICAgICAgICBsaWdodDogXCIjRkZGRkZGXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFwiYmFja2dyb3VuZC1jb250cmFzdFwiOiB7XG4gICAgICAgICAgZGFyazogXCIjRkZGRkZGMTFcIixcbiAgICAgICAgICBsaWdodDogXCIjMTExMTExMTFcIixcbiAgICAgICAgfSxcbiAgICAgICAgdGV4dDoge1xuICAgICAgICAgIGRhcms6IFwiI0VFRUVFRVwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiMzMzMzMzNcIixcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0ZXh0LXN0cm9uZ1wiOiB7XG4gICAgICAgICAgZGFyazogXCIjRkZGRkZGXCIsXG4gICAgICAgICAgbGlnaHQ6IFwiIzAwMDAwMFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInRleHQtd2Vha1wiOiB7XG4gICAgICAgICAgZGFyazogXCIjQ0NDQ0NDXCIsXG4gICAgICAgICAgbGlnaHQ6IFwiIzQ0NDQ0NFwiLFxuICAgICAgICB9LFxuICAgICAgICBcInRleHQteHdlYWtcIjoge1xuICAgICAgICAgIGRhcms6IFwiIzk5OTk5OVwiLFxuICAgICAgICAgIGxpZ2h0OiBcIiM2NjY2NjZcIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgZGFyazogXCIjNDQ0NDQ0XCIsXG4gICAgICAgICAgbGlnaHQ6IFwiI0NDQ0NDQ1wiLFxuICAgICAgICB9LFxuICAgICAgICBjb250cm9sOiBcImJyYW5kXCIsXG4gICAgICAgIFwiYWN0aXZlLWJhY2tncm91bmRcIjogXCJiYWNrZ3JvdW5kLWNvbnRyYXN0XCIsXG4gICAgICAgIFwiYWN0aXZlLXRleHRcIjogXCJ0ZXh0LXN0cm9uZ1wiLFxuICAgICAgICBcInNlbGVjdGVkLWJhY2tncm91bmRcIjogXCJicmFuZFwiLFxuICAgICAgICBcInNlbGVjdGVkLXRleHRcIjogXCJ0ZXh0LXN0cm9uZ1wiLFxuICAgICAgICBcInN0YXR1cy1jcml0aWNhbFwiOiBcIiNGRjQwNDBcIixcbiAgICAgICAgXCJzdGF0dXMtd2FybmluZ1wiOiBcIiNGRkFBMTVcIixcbiAgICAgICAgXCJzdGF0dXMtb2tcIjogXCIjMDBDNzgxXCIsXG4gICAgICAgIFwic3RhdHVzLXVua25vd25cIjogXCIjQ0NDQ0NDXCIsXG4gICAgICAgIFwic3RhdHVzLWRpc2FibGVkXCI6IFwiI0NDQ0NDQ1wiLFxuICAgICAgICBcImdyYXBoLTBcIjogXCJicmFuZFwiLFxuICAgICAgICBcImdyYXBoLTFcIjogXCJzdGF0dXMtd2FybmluZ1wiLFxuICAgICAgfSxcbiAgICAgIGZvbnQ6IHtcbiAgICAgICAgZmFtaWx5OiAnXCJMZXhlbmRcIicsXG4gICAgICAgIGZhY2U6IFwiLyogdmlldG5hbWVzZSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9sZXhlbmQvdjE3L3dscHRnd3ZGQVZkb3EyX0Y5NHpsQ2Z2MGJ6MVdDenNXekxobmVvQ3JDRXN3Z3FTUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMTAyLTAxMDMsIFUrMDExMC0wMTExLCBVKzAxMjgtMDEyOSwgVSswMTY4LTAxNjksIFUrMDFBMC0wMUExLCBVKzAxQUYtMDFCMCwgVSswMzAwLTAzMDEsIFUrMDMwMy0wMzA0LCBVKzAzMDgtMDMwOSwgVSswMzIzLCBVKzAzMjksIFUrMUVBMC0xRUY5LCBVKzIwQUI7XFxufVxcbi8qIGxhdGluLWV4dCAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9sZXhlbmQvdjE3L3dscHRnd3ZGQVZkb3EyX0Y5NHpsQ2Z2MGJ6MVdDenNXekxsbmVvQ3JDRXN3Z3FTUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswMTAwLTAyQUYsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFMDAtMUVGRiwgVSsyMDIwLCBVKzIwQTAtMjBBQiwgVSsyMEFELTIwQ0YsIFUrMjExMywgVSsyQzYwLTJDN0YsIFUrQTcyMC1BN0ZGO1xcbn1cXG4vKiBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdMZXhlbmQnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9sZXhlbmQvdjE3L3dscHRnd3ZGQVZkb3EyX0Y5NHpsQ2Z2MGJ6MVdDenNXekxkbmVvQ3JDRXN3Z2cud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQkItMDJCQywgVSswMkM2LCBVKzAyREEsIFUrMDJEQywgVSswMzAwLTAzMDEsIFUrMDMwMy0wMzA0LCBVKzAzMDgtMDMwOSwgVSswMzIzLCBVKzAzMjksIFUrMjAwMC0yMDZGLCBVKzIwNzQsIFUrMjBBQywgVSsyMTIyLCBVKzIxOTEsIFUrMjE5MywgVSsyMjEyLCBVKzIyMTUsIFUrRkVGRiwgVStGRkZEO1xcbn1cXG5cXG4vKiBndXJtdWtoaSAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdCcmFhaCBPbmUnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy9icmFhaG9uZS92MS9LRk9sQ25XVXB0NkxzeHh4aXlsZkp4YzRBTVA2bGJCUC53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgdW5pY29kZS1yYW5nZTogVSswOTY0LTA5NjUsIFUrMEEwMS0wQTc2LCBVKzIwMEMtMjAwRCwgVSsyMEI5LCBVKzI1Q0MsIFUrMjYyQywgVStBODMwLUE4Mzk7XFxufVxcbi8qIHZpZXRuYW1lc2UgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQnJhYWggT25lJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYnJhYWhvbmUvdjEvS0ZPbENuV1VwdDZMc3h4eGl5bGZDeGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMi0wMTAzLCBVKzAxMTAtMDExMSwgVSswMTI4LTAxMjksIFUrMDE2OC0wMTY5LCBVKzAxQTAtMDFBMSwgVSswMUFGLTAxQjAsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzFFQTAtMUVGOSwgVSsyMEFCO1xcbn1cXG4vKiBsYXRpbi1leHQgKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQnJhYWggT25lJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYnJhYWhvbmUvdjEvS0ZPbENuV1VwdDZMc3h4eGl5bGZDaGM0QU1QNmxiQlAud29mZjIpIGZvcm1hdCgnd29mZjInKTtcXG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMkFGLCBVKzAzMDAtMDMwMSwgVSswMzAzLTAzMDQsIFUrMDMwOC0wMzA5LCBVKzAzMjMsIFUrMDMyOSwgVSsxRTAwLTFFRkYsIFUrMjAyMCwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzIxMTMsIFUrMkM2MC0yQzdGLCBVK0E3MjAtQTdGRjtcXG59XFxuLyogbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnQnJhYWggT25lJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvYnJhYWhvbmUvdjEvS0ZPbENuV1VwdDZMc3h4eGl5bGZCQmM0QU1QNmxRLndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICB1bmljb2RlLXJhbmdlOiBVKzAwMDAtMDBGRiwgVSswMTMxLCBVKzAxNTItMDE1MywgVSswMkJCLTAyQkMsIFUrMDJDNiwgVSswMkRBLCBVKzAyREMsIFUrMDMwMC0wMzAxLCBVKzAzMDMtMDMwNCwgVSswMzA4LTAzMDksIFUrMDMyMywgVSswMzI5LCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjEyMiwgVSsyMTkxLCBVKzIxOTMsIFUrMjIxMiwgVSsyMjE1LCBVK0ZFRkYsIFUrRkZGRDtcXG59XFxuXCIsXG4gICAgICB9LFxuICAgICAgYWN0aXZlOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IFwiYWN0aXZlLWJhY2tncm91bmRcIixcbiAgICAgICAgY29sb3I6IFwiYWN0aXZlLXRleHRcIixcbiAgICAgIH0sXG4gICAgICBob3Zlcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBcImFjdGl2ZS1iYWNrZ3JvdW5kXCIsXG4gICAgICAgIGNvbG9yOiBcImFjdGl2ZS10ZXh0XCIsXG4gICAgICB9LFxuICAgICAgc2VsZWN0ZWQ6IHtcbiAgICAgICAgYmFja2dyb3VuZDogXCJzZWxlY3RlZC1iYWNrZ3JvdW5kXCIsXG4gICAgICAgIGNvbG9yOiBcInNlbGVjdGVkLXRleHRcIixcbiAgICAgIH0sXG4gICAgICBjb250cm9sOiB7XG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgIHJhZGl1czogXCI4cHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkcm9wOiB7XG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgIHJhZGl1czogXCI4cHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaGFydDoge30sXG4gICAgZGlhZ3JhbToge1xuICAgICAgbGluZToge30sXG4gICAgfSxcbiAgICBtZXRlcjoge30sXG4gICAgdGlwOiB7XG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBjb2xvcjogXCJiYWNrZ3JvdW5kXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGVsZXZhdGlvbjogXCJub25lXCIsXG4gICAgICAgIHJvdW5kOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsYXllcjoge1xuICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICBkYXJrOiBcIiMxMTExMTFcIixcbiAgICAgICAgbGlnaHQ6IFwiI0ZGRkZGRlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgYm9yZGVyOiB7XG4gICAgICAgIHJhZGl1czogXCI4cHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjaGVja0JveDoge1xuICAgICAgY2hlY2s6IHtcbiAgICAgICAgcmFkaXVzOiBcIjhweFwiLFxuICAgICAgfSxcbiAgICAgIHRvZ2dsZToge1xuICAgICAgICByYWRpdXM6IFwiOHB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmFkaW9CdXR0b246IHtcbiAgICAgIGNoZWNrOiB7XG4gICAgICAgIHJhZGl1czogXCI4cHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBmb3JtRmllbGQ6IHtcbiAgICAgIGJvcmRlcjoge1xuICAgICAgICBjb2xvcjogXCJib3JkZXJcIixcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgZGFyazogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgbGlnaHQ6IFwic3RhdHVzLWNyaXRpY2FsXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcG9zaXRpb246IFwiaW5uZXJcIixcbiAgICAgICAgc2lkZTogXCJib3R0b21cIixcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHBhZDogXCJzbWFsbFwiLFxuICAgICAgfSxcbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICBjb2xvcjogXCJzdGF0dXMtZGlzYWJsZWRcIixcbiAgICAgICAgICBvcGFjaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIGNvbG9yOiBcInN0YXR1cy1jcml0aWNhbFwiLFxuICAgICAgICBtYXJnaW46IHtcbiAgICAgICAgICB2ZXJ0aWNhbDogXCJ4c21hbGxcIixcbiAgICAgICAgICBob3Jpem9udGFsOiBcInNtYWxsXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaGVscDoge1xuICAgICAgICBjb2xvcjogXCJkYXJrLTNcIixcbiAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgc3RhcnQ6IFwic21hbGxcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbmZvOiB7XG4gICAgICAgIGNvbG9yOiBcInRleHQteHdlYWtcIixcbiAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgdmVydGljYWw6IFwieHNtYWxsXCIsXG4gICAgICAgICAgaG9yaXpvbnRhbDogXCJzbWFsbFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIG1hcmdpbjoge1xuICAgICAgICAgIHZlcnRpY2FsOiBcInhzbWFsbFwiLFxuICAgICAgICAgIGhvcml6b250YWw6IFwic21hbGxcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBtYXJnaW46IHtcbiAgICAgICAgYm90dG9tOiBcInNtYWxsXCIsXG4gICAgICB9LFxuICAgICAgc3VydmV5OiB7XG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICBib3R0b206IFwieHNtYWxsXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaXplOiBcIm1lZGl1bVwiLFxuICAgICAgICAgIHdlaWdodDogNDAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHJvdW5kOiBcIjhweFwiLFxuICAgIH0sXG4gICAgaGVhZGluZzoge1xuICAgICAgZm9udDoge1xuICAgICAgICBmYW1pbHk6ICdcIkJyYWFoIE9uZVwiJyxcbiAgICAgIH0sXG4gICAgICBleHRlbmQ6ICgpID0+IGBtYXJnaW4tdG9wOiAxMnB4OyBtYXJnaW4tYm90dG9tOiAxMnB4O2AsXG4gICAgfSxcbiAgICB0ZXh0OiB7XG4gICAgICB4c21hbGw6IHtcbiAgICAgICAgc2l6ZTogXCIxMHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIxNnB4XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjI0MHB4XCIsXG4gICAgICB9LFxuICAgICAgc21hbGw6IHtcbiAgICAgICAgc2l6ZTogXCIxNHB4XCIsXG4gICAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgIG1heFdpZHRoOiBcIjMzNnB4XCIsXG4gICAgICB9LFxuICAgICAgbWVkaXVtOiB7XG4gICAgICAgIHNpemU6IFwiMThweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMjRweFwiLFxuICAgICAgICBtYXhXaWR0aDogXCI0MzJweFwiLFxuICAgICAgfSxcbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHNpemU6IFwiMjZweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiMzJweFwiLFxuICAgICAgICBtYXhXaWR0aDogXCI2MjRweFwiLFxuICAgICAgfSxcbiAgICAgIHhsYXJnZToge1xuICAgICAgICBzaXplOiBcIjM0cHhcIixcbiAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgbWF4V2lkdGg6IFwiODE2cHhcIixcbiAgICAgIH0sXG4gICAgICB4eGxhcmdlOiB7XG4gICAgICAgIHNpemU6IFwiNTBweFwiLFxuICAgICAgICBoZWlnaHQ6IFwiNTZweFwiLFxuICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwYXJhZ3JhcGg6IHtcbiAgICAgIGV4dGVuZDogKCkgPT4gYGZvbnQtd2VpZ2h0OiAzMDA7IG1hcmdpbi10b3A6IDA7YCxcbiAgICAgIHh4bGFyZ2U6IHtcbiAgICAgICAgc2l6ZTogXCIyOHB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiAoXG4gICAgPEdyb21tZXQgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxCb3hTY29yZUhlYWRlciAvPlxuICAgICAgPFBhZ2Uga2luZD1cImZ1bGxcIiBiYWNrZ3JvdW5kPVwiYmFja2dyb3VuZC1jb250cmFzdFwiPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1BhZ2U+XG4gICAgPC9Hcm9tbWV0PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveFNjb3JlSGVhZGVyIiwiR3JvbW1ldCIsIlBhZ2UiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsIm5hbWUiLCJyb3VuZGluZyIsInNwYWNpbmciLCJkZWZhdWx0TW9kZSIsImdsb2JhbCIsImNvbG9ycyIsImJyYW5kIiwiZGFyayIsImxpZ2h0IiwiYmFja2dyb3VuZCIsInRleHQiLCJib3JkZXIiLCJjb250cm9sIiwiZm9udCIsImZhbWlseSIsImZhY2UiLCJhY3RpdmUiLCJjb2xvciIsImhvdmVyIiwic2VsZWN0ZWQiLCJyYWRpdXMiLCJkcm9wIiwiY2hhcnQiLCJkaWFncmFtIiwibGluZSIsIm1ldGVyIiwidGlwIiwiY29udGVudCIsImVsZXZhdGlvbiIsInJvdW5kIiwibGF5ZXIiLCJidXR0b24iLCJjaGVja0JveCIsImNoZWNrIiwidG9nZ2xlIiwicmFkaW9CdXR0b24iLCJmb3JtRmllbGQiLCJlcnJvciIsInBvc2l0aW9uIiwic2lkZSIsInBhZCIsImRpc2FibGVkIiwib3BhY2l0eSIsIm1hcmdpbiIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsImhlbHAiLCJzdGFydCIsImluZm8iLCJsYWJlbCIsImJvdHRvbSIsInN1cnZleSIsInNpemUiLCJ3ZWlnaHQiLCJoZWFkaW5nIiwiZXh0ZW5kIiwieHNtYWxsIiwiaGVpZ2h0IiwibWF4V2lkdGgiLCJzbWFsbCIsIm1lZGl1bSIsImxhcmdlIiwieGxhcmdlIiwieHhsYXJnZSIsInBhcmFncmFwaCIsImtpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});