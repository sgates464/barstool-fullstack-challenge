"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/NBA/NBA.js":
/*!***********************************!*\
  !*** ./src/components/NBA/NBA.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NBA; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TeamBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TeamBox */ \"./src/components/TeamBox.js\");\n/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ \"./node_modules/grommet/es6/index.js\");\n/* harmony import */ var _BoxScore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoxScore */ \"./src/components/NBA/BoxScore.js\");\n/* harmony import */ var _PlayerStatsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerStatsCard */ \"./src/components/NBA/PlayerStatsCard.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NBA() {\n    _s();\n    const [home, setHome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [away, setAway] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [event, setEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const size = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(grommet__WEBPACK_IMPORTED_MODULE_5__.ResponsiveContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/nba\").then((res)=>{\n            res.json().then((data)=>{\n                setHome({\n                    team_info: data.home_team,\n                    scores: data.home_period_scores,\n                    stats: data.home_stats,\n                    totals: data.home_totals\n                });\n                setAway({\n                    team_info: data.away_team,\n                    scores: data.away_period_scores,\n                    stats: data.away_stats,\n                    totals: data.away_totals\n                });\n                setEvent(data.event_information);\n                setIsLoaded(true);\n            });\n        });\n    }, []);\n    if (!isLoaded) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            basis: \"large\",\n            justify: \"center\",\n            align: \"center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                size: \"xlarge\"\n            }, void 0, false, {\n                fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        gap: \"medium\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TeamBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                away: {\n                    team_info: away.team_info,\n                    score: away.scores.reduce((a, b)=>a + b, 0)\n                },\n                home: {\n                    team_info: home.team_info,\n                    score: home.scores.reduce((a, b)=>a + b, 0)\n                },\n                status: event.status\n            }, void 0, false, {\n                fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BoxScore__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                home: home,\n                away: away\n            }, void 0, false, {\n                fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                direction: size === \"small\" ? \"column\" : \"row\",\n                gap: \"medium\",\n                align: \"start\",\n                justify: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerStatsCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        players: away.stats,\n                        team: away.team_info.abbreviation,\n                        totals: away.totals\n                    }, void 0, false, {\n                        fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PlayerStatsCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        players: home.stats,\n                        team: home.team_info.abbreviation,\n                        totals: home.totals\n                    }, void 0, false, {\n                        fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(grommet__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                height: \"small\"\n            }, void 0, false, {\n                fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/samuelgates/Documents/Personal/Job Hunt/barstool/barstool-challenge/barstool-fullstack-challenge/src/components/NBA/NBA.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(NBA, \"MsGiq2b2BP2LvMZMpU0d/iKZ1o8=\");\n_c = NBA;\nvar _c;\n$RefreshReg$(_c, \"NBA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OQkEvTkJBLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdEO0FBQ3ZCO0FBQ3lCO0FBQ3JCO0FBQ1c7QUFFakMsU0FBU1MsTUFBTTs7SUFDNUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDWSxPQUFPQyxTQUFTLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzlDLE1BQU1nQixPQUFPbEIsaURBQVVBLENBQUNLLHNEQUFpQkE7SUFFekNKLGdEQUFTQSxDQUFDLElBQU07UUFDZGtCLE1BQU0sWUFBWUMsSUFBSSxDQUFDLENBQUNDLE1BQVE7WUFDOUJBLElBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDLENBQUNHLE9BQVM7Z0JBQ3hCWixRQUFRO29CQUNOYSxXQUFXRCxLQUFLRSxTQUFTO29CQUN6QkMsUUFBUUgsS0FBS0ksa0JBQWtCO29CQUMvQkMsT0FBT0wsS0FBS00sVUFBVTtvQkFDdEJDLFFBQVFQLEtBQUtRLFdBQVc7Z0JBQzFCO2dCQUNBbEIsUUFBUTtvQkFDTlcsV0FBV0QsS0FBS1MsU0FBUztvQkFDekJOLFFBQVFILEtBQUtVLGtCQUFrQjtvQkFDL0JMLE9BQU9MLEtBQUtXLFVBQVU7b0JBQ3RCSixRQUFRUCxLQUFLWSxXQUFXO2dCQUMxQjtnQkFDQXBCLFNBQVNRLEtBQUthLGlCQUFpQjtnQkFDL0JuQixZQUFZLElBQUk7WUFDbEI7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUksQ0FBQ0QsVUFBVTtRQUNiLHFCQUNFLDhEQUFDWix3Q0FBR0E7WUFBQ2lDLE9BQU07WUFBUUMsU0FBUTtZQUFTQyxPQUFNO3NCQUN4Qyw0RUFBQ2pDLDRDQUFPQTtnQkFBQ1ksTUFBSzs7Ozs7Ozs7Ozs7SUFHcEIsQ0FBQztJQUVELHFCQUNFLDhEQUFDZCx3Q0FBR0E7UUFBQ29DLEtBQUk7OzBCQUNQLDhEQUFDckMsZ0RBQU9BO2dCQUNOUyxNQUFNO29CQUNKWSxXQUFXWixLQUFLWSxTQUFTO29CQUN6QmlCLE9BQU83QixLQUFLYyxNQUFNLENBQUNnQixNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsSUFBSUMsR0FBRztnQkFDN0M7Z0JBQ0FsQyxNQUFNO29CQUNKYyxXQUFXZCxLQUFLYyxTQUFTO29CQUN6QmlCLE9BQU8vQixLQUFLZ0IsTUFBTSxDQUFDZ0IsTUFBTSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELElBQUlDLEdBQUc7Z0JBQzdDO2dCQUNBQyxRQUFRL0IsTUFBTStCLE1BQU07Ozs7OzswQkFFdEIsOERBQUN0QyxpREFBV0E7Z0JBQUNHLE1BQU1BO2dCQUFNRSxNQUFNQTs7Ozs7OzBCQUMvQiw4REFBQ1Isd0NBQUdBO2dCQUNGMEMsV0FBVzVCLFNBQVMsVUFBVSxXQUFXLEtBQUs7Z0JBQzlDc0IsS0FBSTtnQkFDSkQsT0FBTTtnQkFDTkQsU0FBUTs7a0NBRVIsOERBQUM5Qix3REFBZUE7d0JBQ2R1QyxTQUFTbkMsS0FBS2dCLEtBQUs7d0JBQ25Cb0IsTUFBTXBDLEtBQUtZLFNBQVMsQ0FBQ3lCLFlBQVk7d0JBQ2pDbkIsUUFBUWxCLEtBQUtrQixNQUFNOzs7Ozs7a0NBRXJCLDhEQUFDdEIsd0RBQWVBO3dCQUNkdUMsU0FBU3JDLEtBQUtrQixLQUFLO3dCQUNuQm9CLE1BQU10QyxLQUFLYyxTQUFTLENBQUN5QixZQUFZO3dCQUNqQ25CLFFBQVFwQixLQUFLb0IsTUFBTTs7Ozs7Ozs7Ozs7OzBCQUd2Qiw4REFBQzFCLHdDQUFHQTtnQkFBQzhDLFFBQU87Ozs7Ozs7Ozs7OztBQUdsQixDQUFDO0dBdEV1QnpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05CQS9OQkEuanM/ZjE1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGVhbUJveCBmcm9tIFwiLi4vVGVhbUJveFwiO1xuaW1wb3J0IHsgQm94LCBSZXNwb25zaXZlQ29udGV4dCwgU3Bpbm5lciB9IGZyb20gXCJncm9tbWV0XCI7XG5pbXBvcnQgTkJBQm94U2NvcmUgZnJvbSBcIi4vQm94U2NvcmVcIjtcbmltcG9ydCBQbGF5ZXJTdGF0c0NhcmQgZnJvbSBcIi4vUGxheWVyU3RhdHNDYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5CQSgpIHtcbiAgY29uc3QgW2hvbWUsIHNldEhvbWVdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbYXdheSwgc2V0QXdheV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtldmVudCwgc2V0RXZlbnRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc0xvYWRlZCwgc2V0SXNMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaXplID0gdXNlQ29udGV4dChSZXNwb25zaXZlQ29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi9hcGkvbmJhXCIpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldEhvbWUoe1xuICAgICAgICAgIHRlYW1faW5mbzogZGF0YS5ob21lX3RlYW0sXG4gICAgICAgICAgc2NvcmVzOiBkYXRhLmhvbWVfcGVyaW9kX3Njb3JlcyxcbiAgICAgICAgICBzdGF0czogZGF0YS5ob21lX3N0YXRzLFxuICAgICAgICAgIHRvdGFsczogZGF0YS5ob21lX3RvdGFscyxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEF3YXkoe1xuICAgICAgICAgIHRlYW1faW5mbzogZGF0YS5hd2F5X3RlYW0sXG4gICAgICAgICAgc2NvcmVzOiBkYXRhLmF3YXlfcGVyaW9kX3Njb3JlcyxcbiAgICAgICAgICBzdGF0czogZGF0YS5hd2F5X3N0YXRzLFxuICAgICAgICAgIHRvdGFsczogZGF0YS5hd2F5X3RvdGFscyxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldEV2ZW50KGRhdGEuZXZlbnRfaW5mb3JtYXRpb24pO1xuICAgICAgICBzZXRJc0xvYWRlZCh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKCFpc0xvYWRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGJhc2lzPVwibGFyZ2VcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsYXJnZVwiIC8+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGdhcD1cIm1lZGl1bVwiPlxuICAgICAgPFRlYW1Cb3hcbiAgICAgICAgYXdheT17e1xuICAgICAgICAgIHRlYW1faW5mbzogYXdheS50ZWFtX2luZm8sXG4gICAgICAgICAgc2NvcmU6IGF3YXkuc2NvcmVzLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApLFxuICAgICAgICB9fVxuICAgICAgICBob21lPXt7XG4gICAgICAgICAgdGVhbV9pbmZvOiBob21lLnRlYW1faW5mbyxcbiAgICAgICAgICBzY29yZTogaG9tZS5zY29yZXMucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCksXG4gICAgICAgIH19XG4gICAgICAgIHN0YXR1cz17ZXZlbnQuc3RhdHVzfVxuICAgICAgLz5cbiAgICAgIDxOQkFCb3hTY29yZSBob21lPXtob21lfSBhd2F5PXthd2F5fSAvPlxuICAgICAgPEJveFxuICAgICAgICBkaXJlY3Rpb249e3NpemUgPT09IFwic21hbGxcIiA/IFwiY29sdW1uXCIgOiBcInJvd1wifVxuICAgICAgICBnYXA9XCJtZWRpdW1cIlxuICAgICAgICBhbGlnbj1cInN0YXJ0XCJcbiAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxQbGF5ZXJTdGF0c0NhcmRcbiAgICAgICAgICBwbGF5ZXJzPXthd2F5LnN0YXRzfVxuICAgICAgICAgIHRlYW09e2F3YXkudGVhbV9pbmZvLmFiYnJldmlhdGlvbn1cbiAgICAgICAgICB0b3RhbHM9e2F3YXkudG90YWxzfVxuICAgICAgICAvPlxuICAgICAgICA8UGxheWVyU3RhdHNDYXJkXG4gICAgICAgICAgcGxheWVycz17aG9tZS5zdGF0c31cbiAgICAgICAgICB0ZWFtPXtob21lLnRlYW1faW5mby5hYmJyZXZpYXRpb259XG4gICAgICAgICAgdG90YWxzPXtob21lLnRvdGFsc31cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBoZWlnaHQ9XCJzbWFsbFwiIC8+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVGVhbUJveCIsIkJveCIsIlJlc3BvbnNpdmVDb250ZXh0IiwiU3Bpbm5lciIsIk5CQUJveFNjb3JlIiwiUGxheWVyU3RhdHNDYXJkIiwiTkJBIiwiaG9tZSIsInNldEhvbWUiLCJhd2F5Iiwic2V0QXdheSIsImV2ZW50Iiwic2V0RXZlbnQiLCJpc0xvYWRlZCIsInNldElzTG9hZGVkIiwic2l6ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwidGVhbV9pbmZvIiwiaG9tZV90ZWFtIiwic2NvcmVzIiwiaG9tZV9wZXJpb2Rfc2NvcmVzIiwic3RhdHMiLCJob21lX3N0YXRzIiwidG90YWxzIiwiaG9tZV90b3RhbHMiLCJhd2F5X3RlYW0iLCJhd2F5X3BlcmlvZF9zY29yZXMiLCJhd2F5X3N0YXRzIiwiYXdheV90b3RhbHMiLCJldmVudF9pbmZvcm1hdGlvbiIsImJhc2lzIiwianVzdGlmeSIsImFsaWduIiwiZ2FwIiwic2NvcmUiLCJyZWR1Y2UiLCJhIiwiYiIsInN0YXR1cyIsImRpcmVjdGlvbiIsInBsYXllcnMiLCJ0ZWFtIiwiYWJicmV2aWF0aW9uIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NBA/NBA.js\n"));

/***/ })

});