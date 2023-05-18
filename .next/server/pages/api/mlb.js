"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/mlb";
exports.ids = ["pages/api/mlb"];
exports.modules = {

/***/ "@vercel/kv":
/*!*****************************!*\
  !*** external "@vercel/kv" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("@vercel/kv");;

/***/ }),

/***/ "(api)/./src/pages/api/mlb.js":
/*!******************************!*\
  !*** ./src/pages/api/mlb.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _vercel_kv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vercel/kv */ \"@vercel/kv\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_kv__WEBPACK_IMPORTED_MODULE_0__]);\n_vercel_kv__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    const now = Date.now();\n    const nowInSeconds = Math.round(now / 1000);\n    // get cached data and run stale check\n    _vercel_kv__WEBPACK_IMPORTED_MODULE_0__.kv.get(\"mlb\").then((data)=>{\n        if (data) {\n            // if data exists and is not stale, return it\n            if (nowInSeconds - data.updated_at < 15) {\n                res.status(200).json(data);\n            } else {\n                // otherwise get new data and cache it with a new timestamp\n                fetch(\"https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json\").then((response)=>{\n                    return response.json();\n                }).then((data)=>{\n                    _vercel_kv__WEBPACK_IMPORTED_MODULE_0__.kv.set(\"mlb\", {\n                        ...data,\n                        updated_at: nowInSeconds\n                    });\n                    res.status(200).json(data);\n                });\n            }\n        } else {\n            // if data doesn't exist, get it and cache it with a timestamp\n            fetch(\"https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json\").then((response)=>{\n                return response.json();\n            }).then((data)=>{\n                _vercel_kv__WEBPACK_IMPORTED_MODULE_0__.kv.set(\"mlb\", data);\n                res.status(200).json(data);\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL21sYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDZFQUE2RTtBQUM3QztBQUNqQixTQUFTQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxNQUFNQyxNQUFNQyxLQUFLRCxHQUFHO0lBQ3BCLE1BQU1FLGVBQWVDLEtBQUtDLEtBQUssQ0FBQ0osTUFBTTtJQUV0QyxzQ0FBc0M7SUFDdENKLDhDQUFNLENBQUMsT0FBT1UsSUFBSSxDQUFDLENBQUNDLE9BQVM7UUFDM0IsSUFBSUEsTUFBTTtZQUNSLDZDQUE2QztZQUM3QyxJQUFJTCxlQUFlSyxLQUFLQyxVQUFVLEdBQUcsSUFBSTtnQkFDdkNULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1lBQ3ZCLE9BQU87Z0JBQ0wsMkRBQTJEO2dCQUMzREksTUFDRSwrRkFFQ0wsSUFBSSxDQUFDLENBQUNNLFdBQWE7b0JBQ2xCLE9BQU9BLFNBQVNGLElBQUk7Z0JBQ3RCLEdBQ0NKLElBQUksQ0FBQyxDQUFDQyxPQUFTO29CQUNkWCw4Q0FBTSxDQUFDLE9BQU87d0JBQUUsR0FBR1csSUFBSTt3QkFBRUMsWUFBWU47b0JBQWE7b0JBQ2xESCxJQUFJVSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtnQkFDdkI7WUFDSixDQUFDO1FBQ0gsT0FBTztZQUNMLDhEQUE4RDtZQUM5REksTUFDRSwrRkFFQ0wsSUFBSSxDQUFDLENBQUNNLFdBQWE7Z0JBQ2xCLE9BQU9BLFNBQVNGLElBQUk7WUFDdEIsR0FDQ0osSUFBSSxDQUFDLENBQUNDLE9BQVM7Z0JBQ2RYLDhDQUFNLENBQUMsT0FBT1c7Z0JBQ2RSLElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1lBQ3ZCO1FBQ0osQ0FBQztJQUNIO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhcnN0b29sLWNoYWxsZW5nZS8uL3NyYy9wYWdlcy9hcGkvbWxiLmpzP2Y4NmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IGt2IH0gZnJvbSBcIkB2ZXJjZWwva3ZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3Qgbm93SW5TZWNvbmRzID0gTWF0aC5yb3VuZChub3cgLyAxMDAwKTtcblxuICAvLyBnZXQgY2FjaGVkIGRhdGEgYW5kIHJ1biBzdGFsZSBjaGVja1xuICBrdi5nZXQoXCJtbGJcIikudGhlbigoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICAvLyBpZiBkYXRhIGV4aXN0cyBhbmQgaXMgbm90IHN0YWxlLCByZXR1cm4gaXRcbiAgICAgIGlmIChub3dJblNlY29uZHMgLSBkYXRhLnVwZGF0ZWRfYXQgPCAxNSkge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG90aGVyd2lzZSBnZXQgbmV3IGRhdGEgYW5kIGNhY2hlIGl0IHdpdGggYSBuZXcgdGltZXN0YW1wXG4gICAgICAgIGZldGNoKFxuICAgICAgICAgIFwiaHR0cHM6Ly9jaHVtbGV5LmJhcnN0b29sc3BvcnRzLmNvbS9kZXYvZGF0YS9nYW1lcy9lZWQzODQ1Ny1kYjI4LTQ2NTgtYWU0Zi00ZDRkMzhlOWUyMTIuanNvblwiXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAga3Yuc2V0KFwibWxiXCIsIHsgLi4uZGF0YSwgdXBkYXRlZF9hdDogbm93SW5TZWNvbmRzIH0pO1xuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIGRhdGEgZG9lc24ndCBleGlzdCwgZ2V0IGl0IGFuZCBjYWNoZSBpdCB3aXRoIGEgdGltZXN0YW1wXG4gICAgICBmZXRjaChcbiAgICAgICAgXCJodHRwczovL2NodW1sZXkuYmFyc3Rvb2xzcG9ydHMuY29tL2Rldi9kYXRhL2dhbWVzL2VlZDM4NDU3LWRiMjgtNDY1OC1hZTRmLTRkNGQzOGU5ZTIxMi5qc29uXCJcbiAgICAgIClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBrdi5zZXQoXCJtbGJcIiwgZGF0YSk7XG4gICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsia3YiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibm93IiwiRGF0ZSIsIm5vd0luU2Vjb25kcyIsIk1hdGgiLCJyb3VuZCIsImdldCIsInRoZW4iLCJkYXRhIiwidXBkYXRlZF9hdCIsInN0YXR1cyIsImpzb24iLCJmZXRjaCIsInJlc3BvbnNlIiwic2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/mlb.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/mlb.js"));
module.exports = __webpack_exports__;

})();