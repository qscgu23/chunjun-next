"use strict";
(() => {
var exports = {};
exports.id = 708;
exports.ids = [708];
exports.modules = {

/***/ 2540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
;// CONCATENATED MODULE: ./api/sql-api.ts


const SEP = "@";
const SQL_PATH = "/chunjun-examples/sql";
const sqlDirectory = (0,external_path_.join)(process.cwd(), SQL_PATH);
const getAllSqlPaths = (root = SQL_PATH, allFiles = [])=>{
    const currentDir = (0,external_path_.join)(process.cwd(), root);
    const files = external_fs_default().readdirSync(currentDir);
    for (const file of files){
        if (file.includes(".")) {
            allFiles.push(root === SQL_PATH ? file : `${root.split("/").slice(3).join("/")}/${file}`);
        } else {
            getAllSqlPaths(`${root}/${file}`, allFiles);
        }
    }
    return allFiles.filter((file)=>file.includes(".sql"));
};
const getSqlByName = (name)=>{
    const realSlug = name.split(SEP).join("/").replace(/\.sql$/, "");
    const fullPath = (0,external_path_.join)(sqlDirectory, `${realSlug}.sql`);
    const fileContents = external_fs_default().readFileSync(fullPath, "utf8");
    return {
        slug: realSlug,
        content: fileContents
    };
};
const getAllSqlFiles = ()=>{
    const fileNames = getAllSqlPaths();
    const sqlFiles = fileNames.map((name)=>getSqlByName(name));
    return sqlFiles;
};

// EXTERNAL MODULE: ./utils/generateTree.ts
var generateTree = __webpack_require__(866);
// EXTERNAL MODULE: ./common/document-like.tsx + 1 modules
var document_like = __webpack_require__(8052);
// EXTERNAL MODULE: external "@mantine/prism"
var prism_ = __webpack_require__(5982);
;// CONCATENATED MODULE: ./pages/examples/sql/[slug].tsx





const _slug_SEP = "@";
const SqlExamples = (props)=>{
    const { sql , tree  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(document_like/* default */.Z, {
        tree: tree,
        target: "/examples/sql",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "md:col-span-4 md:px-12 md:py-8 p-2",
            children: /*#__PURE__*/ jsx_runtime_.jsx(prism_.Prism, {
                spellCheck: true,
                language: "sql",
                children: sql
            })
        })
    });
};
/* harmony default export */ const _slug_ = (SqlExamples);
const getStaticPaths = async ()=>{
    const sqlFiles = getAllSqlFiles();
    return {
        paths: sqlFiles.map((name)=>{
            return {
                params: {
                    slug: name.slug.split("/").join(_slug_SEP)
                }
            };
        }),
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const sql = getSqlByName(params.slug);
    const allPaths = getAllSqlPaths();
    const tree = (0,generateTree/* generateTree */.T)(allPaths);
    return {
        props: {
            sql: sql.content,
            tree
        }
    };
};


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 5982:
/***/ ((module) => {

module.exports = require("@mantine/prism");

/***/ }),

/***/ 9105:
/***/ ((module) => {

module.exports = require("color");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [707,533,706,546,629], () => (__webpack_exec__(2540)));
module.exports = __webpack_exports__;

})();