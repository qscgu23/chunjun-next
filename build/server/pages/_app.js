"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "tabler-icons-react"
var external_tabler_icons_react_ = __webpack_require__(1384);
// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/image.js
var next_image = __webpack_require__(4706);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/logo-dark.svg
/* harmony default export */ const logo_dark = ({"src":"/_next/static/media/logo-dark.4b8f0b11.svg","height":549,"width":558});
;// CONCATENATED MODULE: ./config/headerLinks.ts
const SEP = "@";
const headerLinks = [
    {
        name: "首页",
        path: "/",
        key: "home"
    },
    {
        name: "文档",
        path: "/documents/快速开始",
        key: "documents"
    },
    {
        name: "下载",
        path: "https://github.com/DTStack/chunjun/releases",
        key: "download"
    },
    {
        name: "指南",
        path: "/faq",
        key: "faq"
    },
    {
        name: "案例",
        path: [
            {
                name: "sql",
                path: `/examples/sql/binlog${SEP}binlog_stream`,
                key: "sql"
            },
            {
                name: "json",
                path: `/examples/json/binlog${SEP}binlog_hive`,
                key: "json"
            }
        ],
        key: "examples"
    }
];

// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(6533);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/AppHeader.tsx








const AppHeader = (props)=>{
    const { theme , changeTheme , opened , changeOpened  } = props;
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Header, {
        height: 64,
        className: "flex items-center justify-between sticky shadow-md bg--gray-50",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Burger, {
                opened: opened,
                onClick: changeOpened,
                className: "md:hidden inline-block"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-full flex items-center flex-1 cursor-pointer",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex h-full items-center md:justify-start justify-center md:w-auto w-full",
                        onClick: ()=>router.push("/"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo_dark,
                                height: 48,
                                width: 48,
                                alt: "logo of chunjun"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                className: "text-xl capitalize flex items-center font-raleway select-none",
                                children: "Chunjun"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-full justify-center flex-1 md:flex hidden items-center",
                        children: headerLinks.map((link)=>{
                            if (link.path[0] === "/" && !Array.isArray(link.path)) {
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: link.path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "font-raleway inline-block md:w-[72px] text-center",
                                        children: link.name
                                    })
                                }, link.key);
                            } else if (Array.isArray(link.path)) {
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Menu, {
                                    shadow: "md",
                                    width: 120,
                                    trigger: "hover",
                                    openDelay: 100,
                                    closeDelay: 200,
                                    position: "bottom",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Target, {
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "flex items-center md:w-[72px] justify-center text-center",
                                                children: [
                                                    link.name,
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.ChevronDown, {
                                                        size: 16,
                                                        className: "ml-1"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Dropdown, {
                                            children: link.path.map((url)=>{
                                                return /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Item, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: url.path,
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "uppercase",
                                                            children: [
                                                                url.name,
                                                                "示例"
                                                            ]
                                                        })
                                                    })
                                                }, url.key);
                                            })
                                        })
                                    ]
                                }, link.key);
                            } else {
                                return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: link.path,
                                    className: "font-raleway inline-block md:w-[72px] text-center",
                                    target: "blank",
                                    children: link.name
                                }, link.key);
                            }
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-full flex items-center space-x-4 pr-[9px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.SegmentedControl, {
                        data: [
                            {
                                label: "简体中文",
                                value: "zh-Hans"
                            },
                            {
                                label: "English",
                                value: "en"
                            }
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                        variant: "outline",
                        color: theme === "dark" ? "yellow" : "blue",
                        onClick: changeTheme,
                        children: theme === "light" ? /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Sun, {}) : /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Moon, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AppHeader = (AppHeader);

;// CONCATENATED MODULE: ./components/AppNavbar.tsx






// TODO:同步header的链接
const AppNavbar = (props)=>{
    const { opened , changeOpened  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Drawer, {
        overlayColor: "transparent",
        padding: "md",
        opened: opened,
        onClose: changeOpened,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " flex items-center mb-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: logo_dark,
                        height: 36,
                        width: 36,
                        alt: "logo of chunjun"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                        className: "text-xl font-bold capitalize flex items-center font-mono",
                        children: "Chunjun"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[36px] flex items-center p-md cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                        variant: "light",
                        color: "violet",
                        className: "mx-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Signature, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/documents",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "font-mono",
                            children: "文档"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[36px] flex items-center p-md cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                        variant: "light",
                        color: "blue",
                        className: "mx-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Database, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/documents/sql",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "font-mono",
                            children: "SQL"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[36px] flex items-center p-md cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                        color: "orange",
                        className: "mx-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Code, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/documents/JSON",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "font-mono",
                            children: "JSON"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[36px] flex items-center p-md cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                        color: "red",
                        className: "mx-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Tool, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/documents/faq",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "font-mono",
                            children: "指南"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-[36px] flex items-center p-md cursor-pointer",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                        color: "green",
                        className: "mx-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_tabler_icons_react_.Download, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/DTStack/chunjun/releases",
                        target: "blank",
                        className: "font-mono",
                        children: "下载"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_AppNavbar = (AppNavbar);

;// CONCATENATED MODULE: ./pages/_app.tsx









function MyApp({ Component , pageProps  }) {
    const { 0: colorScheme , 1: setColorScheme  } = (0,external_react_.useState)("light");
    const { 0: opened , 1: setOpened  } = (0,external_react_.useState)(false);
    const toggleColorScheme = ()=>setColorScheme(colorScheme === "dark" ? "light" : "dark");
    const toggleNavbar = ()=>{
        setOpened((o)=>!o);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.ColorSchemeProvider, {
        colorScheme: colorScheme,
        toggleColorScheme: toggleColorScheme,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.MantineProvider, {
            theme: {
                colorScheme
            },
            withGlobalStyles: true,
            withNormalizeCSS: true,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "纯钧"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "纯钧Chunjun"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/logo-dark.svg"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.AppShell, {
                    padding: "md",
                    header: /*#__PURE__*/ jsx_runtime_.jsx(components_AppHeader, {
                        opened: opened,
                        changeOpened: toggleNavbar,
                        changeTheme: toggleColorScheme,
                        theme: colorScheme
                    }),
                    styles: (theme)=>({
                            main: {
                                backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.white,
                                padding: 0
                            }
                        }),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_AppNavbar, {
                            opened: opened,
                            changeOpened: toggleNavbar
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

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

/***/ 1384:
/***/ ((module) => {

module.exports = require("tabler-icons-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [707,533,706], () => (__webpack_exec__(9907)));
module.exports = __webpack_exports__;

})();