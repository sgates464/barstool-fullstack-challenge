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
exports.id = "pages/api/nba";
exports.ids = ["pages/api/nba"];
exports.modules = {

/***/ "@vercel/kv":
/*!*****************************!*\
  !*** external "@vercel/kv" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("@vercel/kv");;

/***/ }),

/***/ "(api)/./src/pages/api/nba.js":
/*!******************************!*\
  !*** ./src/pages/api/nba.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _vercel_kv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vercel/kv */ \"@vercel/kv\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_kv__WEBPACK_IMPORTED_MODULE_0__]);\n_vercel_kv__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    const now = Date.now();\n    const nowInSeconds = Math.round(now / 1000);\n    let nbaData = {};\n    // get cached data and run stale check\n    _vercel_kv__WEBPACK_IMPORTED_MODULE_0__.kv.get(\"nba\").then((data)=>{\n        if (data) {\n            // if data exists and is not stale, return it\n            if (nowInSeconds - data.updated_at < 15) {\n                res.status(200).json(data);\n            } else {\n                // otherwise get new data and cache it with a new timestamp\n                fetch(\"https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json\").then((response)=>{\n                    return response.json();\n                }).then((data)=>{\n                    _vercel_kv__WEBPACK_IMPORTED_MODULE_0__.kv.set(\"nba\", {\n                        ...data,\n                        updated_at: nowInSeconds\n                    });\n                    res.status(200).json(data);\n                });\n            }\n        } else {\n            // if data doesn't exist, get it and cache it with a timestamp\n            fetch(\"https://chumley.barstoolsports.com/dev/data/games/6c974274-4bfc-4af8-a9c4-8b926637ba74.json\").then((response)=>{\n                return response.json();\n            }).then((data)=>{\n                _vercel_kv__WEBPACK_IMPORTED_MODULE_0__.kv.set(\"nba\", data);\n                res.status(200).json(data);\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL25iYS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDZFQUE2RTtBQUM3QztBQUNqQixTQUFTQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4QyxNQUFNQyxNQUFNQyxLQUFLRCxHQUFHO0lBQ3BCLE1BQU1FLGVBQWVDLEtBQUtDLEtBQUssQ0FBQ0osTUFBTTtJQUN0QyxJQUFJSyxVQUFVLENBQUM7SUFDZixzQ0FBc0M7SUFDdENULDhDQUFNLENBQUMsT0FBT1csSUFBSSxDQUFDLENBQUNDLE9BQVM7UUFDM0IsSUFBSUEsTUFBTTtZQUNSLDZDQUE2QztZQUM3QyxJQUFJTixlQUFlTSxLQUFLQyxVQUFVLEdBQUcsSUFBSTtnQkFDdkNWLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1lBQ3ZCLE9BQU87Z0JBQ0wsMkRBQTJEO2dCQUMzREksTUFDRSwrRkFFQ0wsSUFBSSxDQUFDLENBQUNNLFdBQWE7b0JBQ2xCLE9BQU9BLFNBQVNGLElBQUk7Z0JBQ3RCLEdBQ0NKLElBQUksQ0FBQyxDQUFDQyxPQUFTO29CQUNkWiw4Q0FBTSxDQUFDLE9BQU87d0JBQUUsR0FBR1ksSUFBSTt3QkFBRUMsWUFBWVA7b0JBQWE7b0JBQ2xESCxJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtnQkFDdkI7WUFDSixDQUFDO1FBQ0gsT0FBTztZQUNMLDhEQUE4RDtZQUM5REksTUFDRSwrRkFFQ0wsSUFBSSxDQUFDLENBQUNNLFdBQWE7Z0JBQ2xCLE9BQU9BLFNBQVNGLElBQUk7WUFDdEIsR0FDQ0osSUFBSSxDQUFDLENBQUNDLE9BQVM7Z0JBQ2RaLDhDQUFNLENBQUMsT0FBT1k7Z0JBQ2RULElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNIO1lBQ3ZCO1FBQ0osQ0FBQztJQUNIO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhcnN0b29sLWNoYWxsZW5nZS8uL3NyYy9wYWdlcy9hcGkvbmJhLmpzP2UwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB7IGt2IH0gZnJvbSBcIkB2ZXJjZWwva3ZcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgY29uc3Qgbm93SW5TZWNvbmRzID0gTWF0aC5yb3VuZChub3cgLyAxMDAwKTtcbiAgbGV0IG5iYURhdGEgPSB7fTtcbiAgLy8gZ2V0IGNhY2hlZCBkYXRhIGFuZCBydW4gc3RhbGUgY2hlY2tcbiAga3YuZ2V0KFwibmJhXCIpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgLy8gaWYgZGF0YSBleGlzdHMgYW5kIGlzIG5vdCBzdGFsZSwgcmV0dXJuIGl0XG4gICAgICBpZiAobm93SW5TZWNvbmRzIC0gZGF0YS51cGRhdGVkX2F0IDwgMTUpIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBvdGhlcndpc2UgZ2V0IG5ldyBkYXRhIGFuZCBjYWNoZSBpdCB3aXRoIGEgbmV3IHRpbWVzdGFtcFxuICAgICAgICBmZXRjaChcbiAgICAgICAgICBcImh0dHBzOi8vY2h1bWxleS5iYXJzdG9vbHNwb3J0cy5jb20vZGV2L2RhdGEvZ2FtZXMvNmM5NzQyNzQtNGJmYy00YWY4LWE5YzQtOGI5MjY2MzdiYTc0Lmpzb25cIlxuICAgICAgICApXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGt2LnNldChcIm5iYVwiLCB7IC4uLmRhdGEsIHVwZGF0ZWRfYXQ6IG5vd0luU2Vjb25kcyB9KTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBkYXRhIGRvZXNuJ3QgZXhpc3QsIGdldCBpdCBhbmQgY2FjaGUgaXQgd2l0aCBhIHRpbWVzdGFtcFxuICAgICAgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly9jaHVtbGV5LmJhcnN0b29sc3BvcnRzLmNvbS9kZXYvZGF0YS9nYW1lcy82Yzk3NDI3NC00YmZjLTRhZjgtYTljNC04YjkyNjYzN2JhNzQuanNvblwiXG4gICAgICApXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAga3Yuc2V0KFwibmJhXCIsIGRhdGEpO1xuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImt2IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm5vdyIsIkRhdGUiLCJub3dJblNlY29uZHMiLCJNYXRoIiwicm91bmQiLCJuYmFEYXRhIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJ1cGRhdGVkX2F0Iiwic3RhdHVzIiwianNvbiIsImZldGNoIiwicmVzcG9uc2UiLCJzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/nba.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/nba.js"));
module.exports = __webpack_exports__;

})();