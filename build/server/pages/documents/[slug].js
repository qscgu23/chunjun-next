(() => {
var exports = {};
exports.id = 814;
exports.ids = [814];
exports.modules = {

/***/ 2820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pS": () => (/* binding */ getAllPaths),
  "Bd": () => (/* binding */ getAllPosts),
  "zQ": () => (/* binding */ getPostBySlug)
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./api/post-api.ts



//获取环境变量
const SEP = "@";
const ROOT_ZH = "/docs_zh";
const postsDirectory = (0,external_path_.join)(process.cwd(), ROOT_ZH);
// 读取文件
const getAllPaths = (root = ROOT_ZH, allFiles = [])=>{
    const currentDir = (0,external_path_.join)(process.cwd(), root);
    const files = external_fs_default().readdirSync(currentDir);
    for (const file of files){
        if (file.includes(".md")) {
            allFiles.push(root === ROOT_ZH ? file : `${root.split("/").slice(2).join("/")}/${file}`);
        } else {
            getAllPaths(`${root}/${file}`, allFiles);
        }
    }
    return allFiles.filter((file)=>file.includes(".md"));
};
function getPostBySlug(slug, fields = []) {
    const realSlug = slug.split(SEP).join("/").replace(/\.md$/, "");
    const fullPath = (0,external_path_.join)(postsDirectory, `${realSlug}.md`);
    const fileContents = external_fs_default().readFileSync(fullPath, "utf8");
    const { data , content  } = external_gray_matter_default()(fileContents);
    const items = {};
    fields.forEach((field)=>{
        if (field === "slug") {
            items[field] = realSlug;
        }
        if (field === "content") {
            items[field] = content;
        }
        if (data[field]) {
            items[field] = data[field];
        }
    });
    return items;
}
function getAllPosts(fields = []) {
    const slugs = getAllPaths();
    const posts = slugs.map((slug)=>getPostBySlug(slug, fields));
    return posts;
}


/***/ }),

/***/ 360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(411);
/* harmony import */ var highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_atom_one_dark_css__WEBPACK_IMPORTED_MODULE_2__);




const PostBody = (props)=>{
    const { content  } = props;
    const { colorScheme  } = (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.useMantineColorScheme)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TypographyStylesProvider, {
        className: "md:col-span-3 p-4 overflow-hidden",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
            className: `article ${colorScheme}`,
            dangerouslySetInnerHTML: {
                __html: content
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostBody);


/***/ }),

/***/ 2907:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PostBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(360);
/* harmony import */ var _utils_markdown2html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8818);
/* harmony import */ var _api_post_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2820);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_document_like__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8052);
/* harmony import */ var _utils_generateTree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(866);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_markdown2html__WEBPACK_IMPORTED_MODULE_2__]);
_utils_markdown2html__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const SEP = "@";
const Post = ({ content , tree , toc  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_document_like__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            tree: tree,
            target: "/documents",
            toc: toc,
            children: router.isFallback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {
                visible: true,
                className: "md:col-span-4"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostBody__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                content: content
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
async function getStaticPaths() {
    const posts = (0,_api_post_api__WEBPACK_IMPORTED_MODULE_3__/* .getAllPosts */ .Bd)([
        "slug"
    ]);
    return {
        paths: posts.map((posts)=>{
            return {
                params: {
                    slug: posts.slug.split("/").join(SEP)
                }
            };
        }),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const post = (0,_api_post_api__WEBPACK_IMPORTED_MODULE_3__/* .getPostBySlug */ .zQ)(params.slug, [
        "slug",
        "content"
    ]);
    const { content , toc  } = await (0,_utils_markdown2html__WEBPACK_IMPORTED_MODULE_2__/* .markdownToHtml */ .c)(post.content || "");
    const allPaths = (0,_api_post_api__WEBPACK_IMPORTED_MODULE_3__/* .getAllPaths */ .pS)();
    const tree = (0,_utils_generateTree__WEBPACK_IMPORTED_MODULE_7__/* .generateTree */ .T)(allPaths);
    return {
        props: {
            content,
            tree,
            toc
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ markdownToHtml)
/* harmony export */ });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8974);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6555);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1000);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__, highlight_js__WEBPACK_IMPORTED_MODULE_2__]);
([marked__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__, highlight_js__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const markdownToHtml = async (markdown)=>{
    const toc = [];
    const renderer = {
        heading (text, level) {
            toc.push({
                text,
                level,
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)()
            });
            return `
              <a id="${text}" style='display: block; height: 35px;'></a>
              <h${level}>
                ${text}
              </h${level}>
            `;
        }
    };
    marked__WEBPACK_IMPORTED_MODULE_0__.marked.use({
        renderer
    });
    marked__WEBPACK_IMPORTED_MODULE_0__.marked.setOptions({
        highlight: function(code) {
            return highlight_js__WEBPACK_IMPORTED_MODULE_2__["default"].highlightAuto(code).value;
        }
    });
    return {
        content: marked__WEBPACK_IMPORTED_MODULE_0__.marked.parse(markdown),
        toc
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 411:
/***/ (() => {



/***/ }),

/***/ 2247:
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ 9105:
/***/ ((module) => {

"use strict";
module.exports = require("color");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1000:
/***/ ((module) => {

"use strict";
module.exports = import("highlight.js");;

/***/ }),

/***/ 8974:
/***/ ((module) => {

"use strict";
module.exports = import("marked");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [707,533,706,546,629], () => (__webpack_exec__(2907)));
module.exports = __webpack_exports__;

})();