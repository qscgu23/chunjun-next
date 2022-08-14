"use strict";
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 2546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AppFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js
var next_link = __webpack_require__(6533);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+next@12.2.3_biqbaboplfbrettd7655fr4n2y/node_modules/next/image.js
var next_image = __webpack_require__(4706);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "color"
var external_color_ = __webpack_require__(9105);
var external_color_default = /*#__PURE__*/__webpack_require__.n(external_color_);
;// CONCATENATED MODULE: ./config/color.ts

const primaryColor = external_color_default()("#88C0D6") // HEX: #88C0D6
 // RGB: R136 G192 B214
 // CMYK: C36 M10 Y0 K16
 // HSB: H196 S36% B83%
;

;// CONCATENATED MODULE: ./components/AppFooter.tsx





const AppFooter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "text-white pt-[100px] pb-[20px] z-[1000]",
        style: {
            backgroundColor: primaryColor.darken(0.7).toString()
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-white flex flex-col md:flex-row justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " w-full flex justify-center items-center bg-block bg-contain bg-center bg-no-repeat",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Card, {
                            component: "a",
                            className: "bg-transparent",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Card.Section, {
                                    className: "flex justify-center items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/assets/img/dt.jpg",
                                        height: 140,
                                        width: 140,
                                        alt: "二维码"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                    pt: 20,
                                    weight: 500,
                                    className: "text-center text-gray-300",
                                    children: "联系我们"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                    color: "dimmed",
                                    size: "sm",
                                    children: "在这里你可以获取到最新的技术及产品知识"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-full bg-block2 bg-no-repeat bg-center bg-contain w-full flex justify-center items-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex md:space-x-12 space-x-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "mb-5 text-[20px]",
                                            children: "文档"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "flex flex-col space-y-2 text-[13px] text-gray-300",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/documents/快速开始",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: "快速开始"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "mb-5 text-[20px]",
                                            children: "社区"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "flex flex-col space-y-2 text-[13px] text-gray-300",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://github.com/DTStack/chunjun/issues",
                                                    children: "Issue Tracker"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://github.com/DTStack/chunjun/pulls",
                                                    children: "Pull Requests"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://github.com/DTStack/chunjun/discussions",
                                                    children: "Discussions"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            className: "mb-5 text-[20px]",
                                            children: "更多"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "flex flex-col text-[13px] space-y-2 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "博客"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://github.com/DTStack/chunjun",
                                                    children: "Github"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-[20px] text-white text-base flex justify-center items-center text-center",
                children: "Apache LICENSE 2.0 Licensed, Copyright 2018-2022 Chunjun All Rights Reserved"
            })
        ]
    });
};
/* harmony default export */ const components_AppFooter = (AppFooter);


/***/ })

};
;