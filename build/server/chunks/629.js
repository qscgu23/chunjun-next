"use strict";
exports.id = 629;
exports.ids = [629];
exports.modules = {

/***/ 8052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ document_like)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
;// CONCATENATED MODULE: ./components/TableOfContent.tsx


const TableOfContent = (props)=>{
    const { toc  } = props;
    const { colorScheme  } = (0,core_.useMantineColorScheme)();
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: "md:inline-block hidden relative",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `sticky top-[100px] h-[100vh-64px] overflow-y-auto scrollbar ${colorScheme === "light" ? "border-l-gray-200" : "border-l-gray-600"} border-l-[1px]`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "w-full pl-4",
                children: toc.filter((t)=>t.level <= 2).map((t)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: `pl-${t.level * 2}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: `#${t.text}`,
                            className: `font-raleway text-sm ${colorScheme === "light" ? "hover:text-indigo-600" : "hover:text-indigo-400"}`,
                            children: t.text
                        })
                    }, `${t.id}`))
            })
        })
    });
};
/* harmony default export */ const components_TableOfContent = (TableOfContent);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(6533);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/AppFooter.tsx + 1 modules
var AppFooter = __webpack_require__(2546);
;// CONCATENATED MODULE: ./common/document-like.tsx






const SEP = "@";
const DocumentLike = (props)=>{
    const { children , target , tree , toc  } = props;
    const { colorScheme  } = (0,core_.useMantineColorScheme)();
    const router = (0,router_.useRouter)();
    const generateNavLink = (t, href)=>{
        if (t.category === "file") {
            return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                passHref: true,
                href: `${target}/${href}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.NavLink, {
                    component: "a",
                    color: "indigo",
                    variant: "light",
                    label: t.label,
                    classNames: {
                        body: "py-2"
                    },
                    active: router.asPath.includes(encodeURI(t.label))
                })
            }, t.label);
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx(core_.NavLink, {
                label: t.label,
                childrenOffset: 15,
                variant: "filled",
                classNames: {
                    body: "py-2"
                },
                children: t.children?.map((p)=>generateNavLink(p, `${href}${SEP}${p.label}`))
            }, t.label);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: "md:pl-[256px] relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                className: `fixed shadow-xl h-[calc(100vh-64px)] overflow-y-auto left-0 top-[64px] md:w-[256px] hidden md:inline-block ${colorScheme === "light" ? "bg-white scrollbar" : "bg-gray-800 dark-scrollbar"}`,
                children: tree.map((l)=>generateNavLink(l, l.label))
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "grid md:grid-cols-4 grid-cols-1",
                children: [
                    children,
                    toc && /*#__PURE__*/ jsx_runtime_.jsx(components_TableOfContent, {
                        toc: toc
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "grid grid-cols-1",
                children: /*#__PURE__*/ jsx_runtime_.jsx(AppFooter/* default */.Z, {})
            })
        ]
    });
};
/* harmony default export */ const document_like = (DocumentLike);


/***/ }),

/***/ 866:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ generateTree)
/* harmony export */ });
const generateTree = (allPaths)=>{
    const map = new Map();
    const tree = [];
    const generate = (path, obj)=>{
        if (!path.includes("/")) {
            obj.push({
                label: path.split(".")[0],
                path: path.split(".")[0],
                category: "file"
            });
        } else {
            const t = path.split("/")[0];
            const f = obj.find((o)=>o.label === t);
            const current = path.split("/").slice(1).join("/");
            if (!f) {
                obj.push({
                    label: path.split("/")[0],
                    category: "dir",
                    children: []
                });
                return generate(current, obj.find((o)=>o.label === t)?.children);
            } else {
                return generate(current, f?.children);
            }
        }
        return obj;
    };
    for (const link of allPaths){
        if (!link.includes("/")) {
            tree.push({
                label: link.split(".")[0],
                category: "file"
            });
            continue;
        }
        map.set(link.split("/")[0], true);
    }
    for (const m of map){
        const root = {
            label: m[0],
            children: [],
            category: "dir"
        };
        for (const link1 of allPaths){
            if (link1.split("/")[0] === root.label) {
                generate(link1.split("/").slice(1).join("/"), root.children);
            }
        }
        tree.push(root);
    }
    return tree;
};


/***/ })

};
;