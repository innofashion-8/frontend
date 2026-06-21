(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/NavLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLink",
    ()=>NavLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const NavLink = ({ label, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        style: {
            position: 'relative',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 0',
            color: 'white'
        },
        className: "nav-link-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: 'clamp(13px, 1.1vw, 17px)',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NavLink.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "nav-underline"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NavLink.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .nav-link-item .nav-underline {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 100%;
          height: 2px;
          border-radius: 99px;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          transform-origin: center;
        }
        .nav-link-item:hover .nav-underline {
          transform: translateX(-50%) scaleX(1);
        }
        .nav-link-item:hover span:first-child {
          color: rgba(255,255,255,0.75);
          transition: color 0.2s ease;
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NavLink.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/NavLink.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = NavLink;
var _c;
__turbopack_context__.k.register(_c, "NavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ShimmerCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShimmerCard",
    ()=>ShimmerCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const ShimmerCard = ({ href, onClick, children, className = '' })=>{
    _s();
    const shimmerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseEnter = ()=>{
        const el = shimmerRef.current;
        if (!el) return;
        el.style.transition = 'none';
        el.style.transform = 'skewX(-12deg) translateX(-150%)';
        // Force reflow
        void el.offsetWidth;
        el.style.transition = 'transform 1.5s ease-in-out';
        el.style.transform = 'skewX(-12deg) translateX(200%)';
    };
    const cardStyle = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: '9999px',
        background: 'linear-gradient(180deg, rgba(85,85,85,0.75) 0%, rgba(20,20,20,0.95) 100%)',
        boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.25), 0 8px 24px rgba(0,0,0,0.55)',
        border: '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(8px)',
        cursor: 'pointer',
        textDecoration: 'none',
        transition: 'filter 0.25s ease'
    };
    const shimmerStyle = {
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '150%',
        height: '100%',
        zIndex: 20,
        pointerEvents: 'none',
        transform: 'skewX(-12deg) translateX(-150%)',
        background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)'
    };
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: shimmerRef,
                style: shimmerStyle
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ShimmerCard.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: 'relative',
                    zIndex: 10,
                    color: 'white',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    fontSize: 'clamp(13px, 1vw, 16px)',
                    letterSpacing: '-0.02em',
                    whiteSpace: 'nowrap'
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ShimmerCard.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            style: {
                ...cardStyle,
                padding: '10px 28px'
            },
            className: className,
            onMouseEnter: handleMouseEnter,
            children: inner
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ShimmerCard.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        style: {
            ...cardStyle,
            padding: '10px 28px'
        },
        className: className,
        onClick: onClick,
        onMouseEnter: handleMouseEnter,
        children: inner
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ShimmerCard.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ShimmerCard, "vSTzG03Pobx28PEz02nL/L2Mj04=");
_c = ShimmerCard;
var _c;
__turbopack_context__.k.register(_c, "ShimmerCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/opening/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ShimmerCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const Navbar = ({ isVisible })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [showNav, setShowNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const navLinks = [
        {
            id: 'about',
            label: 'ABOUT US'
        },
        {
            id: 'competitions',
            label: 'COMPETITIONS'
        },
        {
            id: 'timeline',
            label: 'TIMELINE'
        },
        {
            id: 'contact',
            label: 'CONTACT US'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const controlNavbar = {
                "Navbar.useEffect.controlNavbar": ()=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        if (isOpen) return;
                        if (window.scrollY > lastScrollY && window.scrollY > 80) {
                            setShowNav(false);
                        } else {
                            setShowNav(true);
                        }
                        setLastScrollY(window.scrollY);
                    }
                }
            }["Navbar.useEffect.controlNavbar"];
            window.addEventListener('scroll', controlNavbar);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener('scroll', controlNavbar);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        lastScrollY,
        isOpen
    ]);
    const handleScroll = (id)=>{
        setIsOpen(false);
        if (pathname !== '/') {
            router.push(`/#${id}`);
        } else {
            const target = document.getElementById(id);
            if (target) target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    const handleLogout = async ()=>{
        setIsOpen(false);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: '/'
        });
    };
    const shouldShowNavbar = isVisible && (showNav || isOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${shouldShowNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/opening/navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 w-full h-full flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start items-center ml-2 lg:ml-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/photo/logo.png",
                                                alt: "LOGO",
                                                className: "h-7 md:h-12 w-auto object-contain cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/navbar.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center space-x-4 xl:space-x-6",
                                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                                                label: link.label,
                                                onClick: ()=>handleScroll(link.id)
                                            }, link.id, false, {
                                                fileName: "[project]/src/components/opening/navbar.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center space-x-3 mr-4",
                                        children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                href: "/",
                                                children: "HOME"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/navbar.tsx",
                                                lineNumber: 101,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                        href: "/dashboard",
                                                        children: "DASHBOARD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                        onClick: handleLogout,
                                                        children: "LOGOUT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                    href: "/login",
                                                    children: "REGISTER"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/opening/navbar.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                    href: "/login",
                                                    children: "SIGN IN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/opening/navbar.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "lg:hidden text-white mr-4 z-50 relative",
                                        onClick: ()=>setIsOpen(!isOpen),
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 121,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 121,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/opening/navbar.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/opening/navbar.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/opening/navbar.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/opening/navbar.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-6 w-full",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleScroll(link.id),
                                className: "text-white font-black italic text-2xl tracking-tighter uppercase",
                                children: link.label
                            }, link.id, false, {
                                fileName: "[project]/src/components/opening/navbar.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-4 pt-6 w-full px-12",
                            children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/navbar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            onClick: ()=>setIsOpen(false),
                                            className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                            children: "DASHBOARD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 156,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogout,
                                            className: "text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                            children: "LOGOUT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 163,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                        children: "REGISTER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                        children: "SIGN IN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/opening/navbar.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/opening/navbar.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/opening/navbar.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "dxO7+wHJED0rTGjJrFIA0kDg4iw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/opening/introvideo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const IntroVideo = ({ isFinished, onVideoReady })=>{
    _s();
    const heroTextRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const line3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IntroVideo.useEffect": ()=>{
            if (!isFinished) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                line1Ref.current,
                line2Ref.current,
                line3Ref.current,
                subtitleRef.current,
                ctaRef.current
            ], {
                willChange: "transform, opacity"
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                delay: 1.2,
                onComplete: {
                    "IntroVideo.useEffect.tl": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                            line1Ref.current,
                            line2Ref.current,
                            line3Ref.current,
                            subtitleRef.current,
                            ctaRef.current
                        ], {
                            clearProps: "willChange"
                        });
                    }
                }["IntroVideo.useEffect.tl"]
            });
            tl.fromTo(line1Ref.current, {
                x: -80,
                opacity: 0,
                skewX: -8
            }, {
                x: 0,
                opacity: 1,
                skewX: 0,
                duration: 1.1,
                ease: 'power3.out'
            }).fromTo(line2Ref.current, {
                x: -60,
                opacity: 0,
                skewX: -6
            }, {
                x: 0,
                opacity: 1,
                skewX: 0,
                duration: 1.0,
                ease: 'power3.out'
            }, '-=0.75').fromTo(line3Ref.current, {
                x: -40,
                opacity: 0,
                skewX: -4
            }, {
                x: 0,
                opacity: 1,
                skewX: 0,
                duration: 0.9,
                ease: 'power3.out'
            }, '-=0.7').fromTo(subtitleRef.current, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.4').fromTo(ctaRef.current, {
                y: 16,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power2.out'
            }, '-=0.3');
        }
    }["IntroVideo.useEffect"], [
        isFinished
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "home",
        className: "relative w-full h-screen overflow-hidden bg-black z-0",
        style: {
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                preload: "auto",
                poster: "/photo/teaser-poster.png",
                className: "w-full h-full object-cover transform-gpu",
                onCanPlayThrough: onVideoReady,
                onLoadedData: onVideoReady,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: "/photo/teaser.webm",
                        type: "video/webm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/introvideo.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        src: "/photo/teaser.mp4",
                        type: "video/mp4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/introvideo.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/opening/introvideo.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 bg-black/50 transition-opacity duration-1000 ${isFinished ? 'opacity-100' : 'opacity-0'}`
            }, void 0, false, {
                fileName: "[project]/src/components/opening/introvideo.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none hidden sm:block",
                style: {
                    background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.08) 70%, transparent 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/opening/introvideo.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none sm:hidden",
                style: {
                    background: `
            linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 80%),
            linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%)
          `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/opening/introvideo.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: heroTextRef,
                className: `absolute inset-0 flex transition-opacity duration-500
          items-center pb-14 sm:pb-0
          ${isFinished ? 'opacity-100' : 'opacity-0 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[1500px] mx-auto px-4 sm:px-10 lg:px-16 xl:px-20",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:gap-3 md:gap-4 w-full sm:max-w-[52vw]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: subtitleRef,
                                className: "opacity-0 mb-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(255,255,255,0.55)',
                                        fontSize: 'clamp(9px, 2.8vw, 13px)',
                                        fontWeight: 700,
                                        fontStyle: 'italic',
                                        letterSpacing: '0.16em',
                                        textTransform: 'uppercase'
                                    },
                                    children: "Petra Christian University"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/introvideo.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/opening/introvideo.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col leading-none",
                                children: [
                                    {
                                        ref: line1Ref,
                                        text: 'INNO',
                                        gold: false
                                    },
                                    {
                                        ref: line2Ref,
                                        text: 'FASHION',
                                        gold: true
                                    },
                                    {
                                        ref: line3Ref,
                                        text: 'SHOW',
                                        gold: false
                                    }
                                ].map(({ ref, text, gold })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: ref,
                                        className: "opacity-0",
                                        style: {
                                            fontWeight: 900,
                                            fontStyle: 'italic',
                                            fontSize: 'clamp(56px, 20vw, 96px)',
                                            lineHeight: 0.88,
                                            letterSpacing: '-0.03em',
                                            textTransform: 'uppercase',
                                            ...gold ? {
                                                background: 'linear-gradient(90deg, #fff 0%, rgba(180,180,180,0.9) 50%, rgba(120,120,120,0.75) 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text'
                                            } : {
                                                color: 'white'
                                            }
                                        },
                                        children: text
                                    }, text, false, {
                                        fileName: "[project]/src/components/opening/introvideo.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/opening/introvideo.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: ctaRef,
                                className: "opacity-0 mt-2 sm:mt-3 md:mt-5 flex flex-col items-start gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: 'rgba(255,255,255,0.6)',
                                            fontSize: 'clamp(11px, 3.2vw, 15px)',
                                            fontWeight: 500,
                                            letterSpacing: '0.04em',
                                            maxWidth: '340px',
                                            lineHeight: 1.6
                                        },
                                        children: [
                                            "Celebrate creativity, culture, and innovation",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden sm:block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/introvideo.tsx",
                                                lineNumber: 180,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "through the lens of fashion."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/opening/introvideo.tsx",
                                        lineNumber: 169,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login?next=/dashboard",
                                        className: "group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border border-white/20 px-7 py-3 text-sm font-black italic uppercase tracking-[0.12em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 sm:px-9",
                                        style: {
                                            background: 'linear-gradient(180deg, rgba(245,245,245,0.26) 0%, rgba(70,70,70,0.85) 100%)',
                                            boxShadow: 'inset 0 2px 5px rgba(255,255,255,0.35), 0 14px 34px rgba(0,0,0,0.55)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-y-0 -left-full w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-[320%]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/introvideo.tsx",
                                                lineNumber: 192,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative z-10 whitespace-nowrap",
                                                children: "Register Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/introvideo.tsx",
                                                lineNumber: 193,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/opening/introvideo.tsx",
                                        lineNumber: 184,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/opening/introvideo.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/opening/introvideo.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/opening/introvideo.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/opening/introvideo.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/opening/introvideo.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(IntroVideo, "41TlJglwytrcywPBPkm0mY+KEOA=");
_c = IntroVideo;
const __TURBOPACK__default__export__ = IntroVideo;
var _c;
__turbopack_context__.k.register(_c, "IntroVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/opening/competition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const Competition = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const shimmersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const knowMoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const knowMoreShimmerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dust1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dust2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dust3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- STATE UNTUK MENU BRIEFING ---
    const [briefingStep, setBriefingStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // --- HANDLE ESC KEY ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Competition.useEffect": ()=>{
            const handleEscape = {
                "Competition.useEffect.handleEscape": (e)=>{
                    if (e.key === 'Escape' && briefingStep > 0) {
                        if (briefingStep === 2) {
                            setBriefingStep(1);
                        } else {
                            setBriefingStep(0);
                        }
                    }
                }
            }["Competition.useEffect.handleEscape"];
            document.addEventListener('keydown', handleEscape);
            return ({
                "Competition.useEffect": ()=>document.removeEventListener('keydown', handleEscape)
            })["Competition.useEffect"];
        }
    }["Competition.useEffect"], [
        briefingStep
    ]);
    const buttons = [
        {
            id: "briefing",
            label: "Competition Briefing"
        },
        {
            id: "regis",
            label: "Competition Registration"
        },
        {
            id: "submit",
            label: "Competition Submission"
        }
    ];
    // --- LOGIC KLIK TOMBOL UTAMA ---
    const handleMainClick = (id)=>{
        if (id === "briefing") {
            setBriefingStep(1);
        } else if (id === "regis" || id === "submit") {
            router.push("/dashboard");
        }
    };
    // --- LOGIC KLIK DOWNLOAD PDF ---
    const handleDownloadPdf = (region)=>{
        const pdfPaths = {
            sketch: {
                national: "/assets/fashion-sketch-national.pdf",
                international: "/assets/fashion-sketch-international.pdf"
            },
            restyling: {
                national: "/assets/restyling-national.pdf",
                international: "/assets/restyling-international.pdf"
            }
        };
        const fileUrl = pdfPaths[selectedCategory][region];
        window.open(fileUrl, "_blank");
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Competition.useEffect": ()=>{
            let ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Competition.useEffect.ctx": ()=>{
                    if (!sectionRef.current || !titleGroupRef.current) return;
                    const titleImages = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".title-img", titleGroupRef.current);
                    const btnElements = buttonsRef.current.filter({
                        "Competition.useEffect.ctx.btnElements": (el)=>el !== null
                    }["Competition.useEffect.ctx.btnElements"]);
                    const shimmerElements = shimmersRef.current.filter({
                        "Competition.useEffect.ctx.shimmerElements": (el)=>el !== null
                    }["Competition.useEffect.ctx.shimmerElements"]);
                    const animatedButtons = [
                        ...btnElements,
                        knowMoreRef.current
                    ].filter(Boolean);
                    const animatedShimmers = [
                        ...shimmerElements,
                        knowMoreShimmerRef.current
                    ].filter(Boolean);
                    // --- 1. ANIMASI DEBU ---
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dust1Ref.current, {
                        y: -30,
                        x: 10,
                        duration: 4,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dust2Ref.current, {
                        y: 30,
                        x: -15,
                        duration: 5,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: 1
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dust3Ref.current, {
                        y: -20,
                        scale: 1.05,
                        duration: 6,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: 0.5
                    });
                    // --- 2. ANIMASI JUDUL ---
                    const titleTween = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(titleImages, {
                        opacity: 0,
                        x: -50,
                        scale: 0.95
                    }, {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        duration: 1.5,
                        stagger: 0.3,
                        ease: "power3.out",
                        paused: true
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: sectionRef.current,
                        start: "top 60%",
                        end: "top 10%",
                        onEnter: {
                            "Competition.useEffect.ctx": ()=>titleTween.restart()
                        }["Competition.useEffect.ctx"],
                        onLeaveBack: {
                            "Competition.useEffect.ctx": ()=>titleTween.pause(0)
                        }["Competition.useEffect.ctx"]
                    });
                    // --- 3. Set posisi awal kartu & shimmer ---
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(animatedButtons, {
                        opacity: 0
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(animatedShimmers, {
                        xPercent: -150
                    });
                    // --- 4. MASTER TIMELINE SCRUB (DI-TWEAK SPEED-NYA) ---
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            pin: true,
                            start: "top top",
                            end: "+=180%",
                            scrub: 1.2
                        }
                    });
                    const SHIMMER_DUR = 1.2;
                    const FADE_DUR = 0.4;
                    const SLOT = 0.8;
                    const GAP = 0.15;
                    animatedButtons.forEach({
                        "Competition.useEffect.ctx": (btn, i)=>{
                            const shimmer = animatedShimmers[i];
                            const startAt = 0.15 + i * (SLOT + GAP);
                            tl.fromTo(btn, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                duration: FADE_DUR,
                                ease: "none"
                            }, startAt);
                            tl.fromTo(shimmer, {
                                xPercent: -150
                            }, {
                                xPercent: 150,
                                duration: SHIMMER_DUR,
                                ease: "none"
                            }, startAt);
                        }
                    }["Competition.useEffect.ctx"]);
                    // Padding akhir biar ada jeda dikit sebelum lepas pin
                    tl.to({}, {
                        duration: 0.5
                    });
                }
            }["Competition.useEffect.ctx"], sectionRef);
            return ({
                "Competition.useEffect": ()=>ctx.revert()
            })["Competition.useEffect"];
        }
    }["Competition.useEffect"], []);
    const dustMaskStyle = {
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "competitions",
        className: "relative h-screen w-full flex items-center justify-center overflow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: dust1Ref,
                        src: "/photo/dust-abu.png",
                        className: "absolute bottom-0 lg:-bottom-[13%] -left-[15%] lg:-bottom-[3%] lg:-left-[8%] w-[40%] lg:w-[22%] rotate-10 opacity-100 object-contain",
                        style: dustMaskStyle,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/competition.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: dust2Ref,
                        src: "/photo/dust-abu.png",
                        className: "absolute bottom-0 lg:-bottom-[17%] -right-[15%] lg:-right-[8%] w-[40%] lg:w-[22%] opacity-100 -scale-x-100 -rotate-10",
                        style: dustMaskStyle,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/competition.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: dust3Ref,
                        src: "/photo/dust-kuning.webp",
                        className: "absolute top-[20%] md:top-[12%] lg:top-[-3%] left-[10%] lg:left-[22%] w-[80%] lg:w-[65%] opacity-100 lg:blur-none",
                        style: dustMaskStyle,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/competition.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/opening/competition.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 items-center justify-center gap-10 md:gap-16 lg:gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: titleGroupRef,
                        className: "w-full flex justify-center lg:justify-start -mt-5 md:-mt-10 lg:-mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:gap-8 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full overflow-hidden py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/compe.png",
                                        alt: "COMPE",
                                        className: "title-img w-full h-auto drop-shadow-2xl opacity-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/competition.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/competition.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[85%] lg:w-[90%] ml-auto lg:ml-20 -mt-[10%] md:-mt-[12%] lg:-mt-[15%] overflow-hidden py-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/tition.png",
                                        alt: "TITION",
                                        className: "title-img w-full h-auto drop-shadow-2xl opacity-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/competition.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/competition.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/opening/competition.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/competition.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full flex flex-col items-center lg:items-end gap-5 md:gap-7 lg:gap-9 lg:mt-[-10%] perspective-[1200px]",
                        children: [
                            buttons.map((btn, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>{
                                        buttonsRef.current[idx] = el;
                                    },
                                    onClick: ()=>handleMainClick(btn.id),
                                    className: "relative group cursor-pointer w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] rounded-[2rem] overflow-hidden transition-all duration-300 hover:brightness-110",
                                    style: {
                                        background: "linear-gradient(180deg, rgba(85,85,85,0.7) 0%, rgba(30,30,30,0.9) 100%)",
                                        boxShadow: "inset 0 2px 4px rgba(255,255,255,0.3), 0 10px 30px rgba(0,0,0,0.6)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        backdropFilter: "blur(8px)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 py-5 sm:py-6 flex items-center justify-center pointer-events-none px-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-extrabold text-sm sm:text-base md:text-xl lg:text-2xl italic uppercase tracking-[0.08em] drop-shadow-lg text-center leading-none",
                                                children: btn.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/competition.tsx",
                                                lineNumber: 186,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/competition.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                shimmersRef.current[idx] = el;
                                            },
                                            className: "absolute top-0 -inset-full w-[150%] h-full z-20 pointer-events-none -skew-x-12",
                                            style: {
                                                background: `linear-gradient(to right, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.35) 38%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.35) 62%, rgba(255,255,255,0.08) 80%, transparent 100%)`,
                                                filter: "blur(2px)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/competition.tsx",
                                            lineNumber: 192,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 -inset-full w-[150%] h-full z-20 pointer-events-none transform -skew-x-12 -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1500ms] ease-in-out",
                                            style: {
                                                background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/competition.tsx",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, btn.id, true, {
                                    fileName: "[project]/src/components/opening/competition.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: knowMoreRef,
                                type: "button",
                                onClick: ()=>router.push("/login?next=/dashboard/competition"),
                                className: "group relative mt-1 w-[82%] max-w-[235px] overflow-hidden rounded-full border border-white/15 px-4 py-3 text-center text-[10px] font-black italic uppercase tracking-[0.16em] text-white/85 shadow-[0_8px_22px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white hover:brightness-125 md:max-w-[315px] md:text-xs lg:max-w-[340px]",
                                style: {
                                    background: "linear-gradient(180deg, rgba(92,92,92,0.44) 0%, rgba(18,18,18,0.9) 100%)",
                                    boxShadow: "inset 0 1px 3px rgba(255,255,255,0.18), 0 8px 22px rgba(0,0,0,0.45)",
                                    backdropFilter: "blur(8px)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        ref: knowMoreShimmerRef,
                                        className: "absolute top-0 -inset-full z-20 h-full w-[150%] -skew-x-12 pointer-events-none",
                                        style: {
                                            background: "linear-gradient(to right, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.35) 38%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.35) 62%, rgba(255,255,255,0.08) 80%, transparent 100%)",
                                            filter: "blur(2px)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/competition.tsx",
                                        lineNumber: 220,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute top-0 -inset-full z-20 h-full w-[150%] -skew-x-12 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1500ms] ease-in-out pointer-events-none group-hover:translate-x-[150%]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/competition.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: "Click to Know More"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/competition.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/opening/competition.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/80 backdrop-blur-lg rounded-[2rem] border border-[#494947] transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.8)]
            ${briefingStep > 0 ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`,
                                onClick: (e)=>{
                                    if (e.target === e.currentTarget) {
                                        if (briefingStep === 2) {
                                            setBriefingStep(1);
                                        } else {
                                            setBriefingStep(0);
                                        }
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-white font-black italic text-xl md:text-2xl tracking-widest mb-2 uppercase drop-shadow-lg",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: briefingStep === 1 ? "SELECT CATEGORY" : "SELECT REGION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/competition.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    briefingStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-4 w-full",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubButton, {
                                                label: "FASHION SKETCH",
                                                onClick: ()=>{
                                                    setSelectedCategory("sketch");
                                                    setBriefingStep(2);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/competition.tsx",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubButton, {
                                                label: "RESTYLING",
                                                onClick: ()=>{
                                                    setSelectedCategory("restyling");
                                                    setBriefingStep(2);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/competition.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setBriefingStep(0),
                                                className: "mt-4 text-[#B7AC9B] font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:text-white transition-colors cursor-pointer",
                                                children: "[ CANCEL ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/competition.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/opening/competition.tsx",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    briefingStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center gap-4 w-full",
                                        onClick: (e)=>e.stopPropagation(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubButton, {
                                                label: "NATIONAL",
                                                onClick: ()=>handleDownloadPdf("national")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/competition.tsx",
                                                lineNumber: 267,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubButton, {
                                                label: "INTERNATIONAL",
                                                onClick: ()=>handleDownloadPdf("international")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/competition.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setBriefingStep(1),
                                                className: "mt-4 text-[#B7AC9B] font-bold uppercase tracking-[0.2em] text-xs md:text-sm hover:text-white transition-colors cursor-pointer",
                                                children: "[ BACK ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/competition.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/opening/competition.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/opening/competition.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/opening/competition.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/opening/competition.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/opening/competition.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Competition, "/itF6A9rPwclKMsEWBAYcQ4k4uQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Competition;
// --- KOMPONEN TOMBOL SUB-MENU ---
function SubButton({ label, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "relative group cursor-pointer w-[85%] max-w-[400px] rounded-full overflow-hidden transition-all duration-300",
        style: {
            background: "linear-gradient(90deg, rgba(73,73,71,0.4) 0%, rgba(28,28,27,0.8) 100%)",
            border: "1px solid rgba(183,172,155,0.3)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 py-4 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-extrabold text-sm md:text-lg italic uppercase tracking-[0.1em] drop-shadow-md",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/opening/competition.tsx",
                    lineNumber: 297,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/opening/competition.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#B7AC9B] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            }, void 0, false, {
                fileName: "[project]/src/components/opening/competition.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/opening/competition.tsx",
        lineNumber: 288,
        columnNumber: 5
    }, this);
}
_c1 = SubButton;
const __TURBOPACK__default__export__ = Competition;
var _c, _c1;
__turbopack_context__.k.register(_c, "Competition");
__turbopack_context__.k.register(_c1, "SubButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/opening/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative w-full bg-[#0a0a0a] py-8 lg:py-12 border-t border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center md:items-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/photo/logo.png",
                        alt: "INNOFASHION SHOW",
                        className: "h-8 md:h-12 w-auto object-contain"
                    }, void 0, false, {
                        fileName: "[project]/src/components/opening/footer.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/opening/footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center md:items-end space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://tiktok.com/@innofashionshow",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/logo-tiktok.png",
                                        className: "h-12 md:h-16 w-auto mt-[-20]",
                                        alt: "TikTok"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/footer.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://instagram.com/innofashion.pcu",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/logo-ig.png",
                                        className: "h-12 md:h-16 w-auto mt-[-20]",
                                        alt: "Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/footer.tsx",
                                        lineNumber: 31,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://line.me/ti/p/@182dplyt",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/logo-line.png",
                                        className: "h-12 md:h-16 w-auto mt-[-20]",
                                        alt: "Line"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/footer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/opening/footer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center md:text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-creato-body text-[10px] md:text-[12px] mt-[-10] uppercase tracking-[0.15em] leading-tight",
                                    children: "@2026 INNOFASHION SHOW."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-creato-body text-[10px] md:text-[12px] mt-[-2] uppercase tracking-[0.15em] leading-tight",
                                    children: "All Right Reserved"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/opening/footer.tsx",
                            lineNumber: 40,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/opening/footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/opening/footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/opening/footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/about.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bgImage": "about-module__MDR4lW__bgImage",
  "bgOverlay": "about-module__MDR4lW__bgOverlay",
  "bgWrapper": "about-module__MDR4lW__bgWrapper",
  "boardFrame": "about-module__MDR4lW__boardFrame",
  "boardWrapper": "about-module__MDR4lW__boardWrapper",
  "bodyText": "about-module__MDR4lW__bodyText",
  "container": "about-module__MDR4lW__container",
  "dustImage": "about-module__MDR4lW__dustImage",
  "dustWrapper": "about-module__MDR4lW__dustWrapper",
  "fadeIn": "about-module__MDR4lW__fadeIn",
  "fadeInUp": "about-module__MDR4lW__fadeInUp",
  "layer20Image": "about-module__MDR4lW__layer20Image",
  "layer20Wrapper": "about-module__MDR4lW__layer20Wrapper",
  "leftCol": "about-module__MDR4lW__leftCol",
  "modelBlurry": "about-module__MDR4lW__modelBlurry",
  "modelBlurryWrapper": "about-module__MDR4lW__modelBlurryWrapper",
  "modelMain": "about-module__MDR4lW__modelMain",
  "modelMainWrapper": "about-module__MDR4lW__modelMainWrapper",
  "modelShadow": "about-module__MDR4lW__modelShadow",
  "modelShadowWrapper": "about-module__MDR4lW__modelShadowWrapper",
  "rightCol": "about-module__MDR4lW__rightCol",
  "section": "about-module__MDR4lW__section",
  "titleImage": "about-module__MDR4lW__titleImage",
  "titleWrapper": "about-module__MDR4lW__titleWrapper",
});
}),
"[project]/src/components/ui/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const ScrollReveal = ({ children, scrollContainerRef, enableBlur = true, baseOpacity = 0.15, baseRotation = 3, blurStrength = 4, containerClassName = '', textClassName = '', start = 'top bottom-=15%', rotationEnd = 'top center+=15%', wordAnimationEnd = 'top center+=15%' })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const splitText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScrollReveal.useMemo[splitText]": ()=>{
            return children.split(/(\s+)/).map({
                "ScrollReveal.useMemo[splitText]": (word, index)=>{
                    if (word.match(/^\s+$/)) return word;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block word",
                        children: word
                    }, index, false, {
                        fileName: "[project]/src/components/ui/ScrollReveal.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0));
                }
            }["ScrollReveal.useMemo[splitText]"]);
        }
    }["ScrollReveal.useMemo[splitText]"], [
        children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const el = containerRef.current;
            if (!el) return;
            const scroller = scrollContainerRef?.current ? scrollContainerRef.current : window;
            // 🔥 PENTING: Gunakan gsap.context agar cleanup aman 🔥
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "ScrollReveal.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
                        transformOrigin: '0% 50%',
                        rotate: baseRotation
                    }, {
                        ease: 'none',
                        rotate: 0,
                        scrollTrigger: {
                            trigger: el,
                            scroller,
                            start: 'top bottom',
                            end: rotationEnd,
                            scrub: 1
                        }
                    });
                    const wordElements = el.querySelectorAll('.word');
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(wordElements, {
                        opacity: baseOpacity,
                        willChange: 'opacity'
                    }, {
                        ease: 'none',
                        opacity: 1,
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: el,
                            scroller,
                            start: start,
                            end: wordAnimationEnd,
                            scrub: true
                        }
                    });
                    if (enableBlur) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(wordElements, {
                            filter: `blur(${blurStrength}px)`
                        }, {
                            ease: 'none',
                            filter: 'blur(0px)',
                            stagger: 0.05,
                            scrollTrigger: {
                                trigger: el,
                                scroller,
                                start: start,
                                end: wordAnimationEnd,
                                scrub: true
                            }
                        });
                    }
                }
            }["ScrollReveal.useEffect.ctx"], el);
            return ({
                "ScrollReveal.useEffect": ()=>ctx.revert()
            })["ScrollReveal.useEffect"]; // Cleanup yang aman!
        }
    }["ScrollReveal.useEffect"], [
        scrollContainerRef,
        enableBlur,
        baseRotation,
        baseOpacity,
        start,
        rotationEnd,
        wordAnimationEnd,
        blurStrength
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        ref: containerRef,
        className: `my-5 ${containerClassName}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: `text-[clamp(1rem,1.5vw,1.5rem)] font-creato-body ${textClassName}`,
            children: splitText
        }, void 0, false, {
            fileName: "[project]/src/components/ui/ScrollReveal.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ScrollReveal.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollReveal, "hIZrZL5u/LWmVxtB2uNEyPh5EJc=");
_c = ScrollReveal;
const __TURBOPACK__default__export__ = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/about.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ScrollReveal.tsx [app-client] (ecmascript)"); // Pastikan path importnya sesuai
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function AboutSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightColRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dustRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelMainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelBlurRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Wrapper untuk efek parallax text keseluruhan (bukan reveal per kata)
    const textWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSection.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "AboutSection.useEffect.ctx": ()=>{
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            ease: 'power3.out'
                        }
                    });
                    tl.fromTo(titleRef.current, {
                        x: -140,
                        opacity: 0
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 1.4
                    }, 0.3);
                    tl.fromTo(rightColRef.current, {
                        x: 180,
                        scale: 0.85,
                        opacity: 0
                    }, {
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 1.6,
                        clearProps: 'scale'
                    }, 0.5);
                    // Catatan: Efek fade in teks awal dihapus karena sudah diurus ScrollReveal
                    if (modelMainRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(modelMainRef.current, {
                        yPercent: -8,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 1.2
                        }
                    });
                    if (modelBlurRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(modelBlurRef.current, {
                        yPercent: -12,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 2
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(titleRef.current, {
                        yPercent: -25,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 1
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textWrapperRef.current, {
                        yPercent: -15,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 1.3
                        }
                    });
                    if (boardRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(boardRef.current, {
                        scale: 1.04,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 2
                        }
                    });
                }
            }["AboutSection.useEffect.ctx"], sectionRef);
            return ({
                "AboutSection.useEffect": ()=>ctx.revert()
            })["AboutSection.useEffect"];
        }
    }["AboutSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].section,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dustWrapper,
                ref: dustRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/dust.png",
                    alt: "",
                    fill: true,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dustImage
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leftCol,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleWrapper,
                                ref: titleRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/about-us-title.png",
                                    alt: "About Us",
                                    width: 700,
                                    height: 160,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleImage,
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: textWrapperRef,
                                className: "text-[#c0c0c0]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: "Innofashion Show is an annual event organized by the Fashion Design and Textile Program at Petra Christian University. In 2026, the event will enter its 8th year. This annual show is regularly held as a platform to appreciate the academic achievements of final year DFT students."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        children: "The theme of Innofashion Show 8 is “Zerith,” which comes from the word “zenith,” meaning the highest point of a journey. This theme symbolizes the peak of the creative process, struggles, and learning experiences of DFT students. Through this theme, Innofashion Show 8 is expected to serve as a bridge for DFT students and young individuals interested in the fashion world to encourage the emergence of new collaborations and innovations within the fashion industry."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rightCol,
                        ref: rightColRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].boardWrapper,
                                ref: boardRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/board-frame.png",
                                        alt: "",
                                        fill: true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].boardFrame
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layer20Wrapper,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/layer20.png",
                                            alt: "",
                                            fill: true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layer20Image
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modelBlurryWrapper,
                                ref: modelBlurRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/model-blurry.png",
                                    alt: "",
                                    fill: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modelBlurry
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modelShadowWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/model-shadow.png",
                                    alt: "",
                                    fill: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modelShadow
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modelMainWrapper,
                                ref: modelMainRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/model-main.png",
                                    alt: "Fashion model",
                                    fill: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modelMain,
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/About.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "QDirIqfPHDbiLpKXxChzCAz6XhY=");
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelinePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const nodes = [
    {
        date: 'Mar 27, 2026',
        name: 'Open Registration Sketch'
    },
    {
        date: 'Apr 03, 2026',
        name: 'Open Registration Restyling'
    },
    {
        date: 'May 18, 2026',
        name: 'Seminar: What Makes It Fashion'
    },
    {
        date: 'May 22, 2026',
        name: 'Workshop: Daredevil'
    },
    {
        date: 'May 29, 2026',
        name: 'Workshop: Trinkets'
    },
    {
        date: 'Jul 10, 2026',
        name: 'Close Registration Sketch'
    },
    {
        date: 'Jul 12, 2026',
        name: 'Last Subsmission Sketch'
    },
    {
        date: 'Jul 15, 2026',
        name: 'Penjurian'
    },
    {
        date: 'Jul 20, 2026',
        name: 'Finalist Announcement'
    },
    {
        date: 'Jul 30, 2026',
        name: 'Competition Deadline'
    },
    {
        date: 'Jul 31, 2026',
        name: 'Briefing Restyling'
    },
    {
        date: 'TBA',
        name: 'Grand Exhibition'
    },
    {
        date: 'Aug 13, 2026',
        name: 'Graduation & Awarding'
    }
];
function TimelinePage() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressLineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelinePage.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "TimelinePage.useEffect.ctx": ()=>{
                    // 1. Title Reveal
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(titleRef.current, {
                        scale: 0.9,
                        opacity: 0,
                        y: 30,
                        filter: 'blur(10px)',
                        duration: 1.2,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                    // 2. HORIZONTAL SCROLL MAGIC
                    if (trackRef.current && sectionRef.current && progressLineRef.current) {
                        const getScrollAmount = {
                            "TimelinePage.useEffect.ctx.getScrollAmount": ()=>{
                                let trackWidth = trackRef.current ? trackRef.current.scrollWidth : 0;
                                return -(trackWidth - window.innerWidth);
                            }
                        }["TimelinePage.useEffect.ctx.getScrollAmount"];
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(trackRef.current, {
                            x: getScrollAmount,
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                pin: true,
                                start: "top top",
                                end: {
                                    "TimelinePage.useEffect.ctx": ()=>`+=${trackRef.current?.scrollWidth || 3000}`
                                }["TimelinePage.useEffect.ctx"],
                                scrub: 1,
                                invalidateOnRefresh: true
                            }
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(progressLineRef.current, {
                            scaleX: 1,
                            ease: "none",
                            scrollTrigger: {
                                trigger: sectionRef.current,
                                start: "top top",
                                end: {
                                    "TimelinePage.useEffect.ctx": ()=>`+=${trackRef.current?.scrollWidth || 3000}`
                                }["TimelinePage.useEffect.ctx"],
                                scrub: 1,
                                invalidateOnRefresh: true
                            }
                        });
                    }
                }
            }["TimelinePage.useEffect.ctx"], sectionRef);
            return ({
                "TimelinePage.useEffect": ()=>ctx.revert()
            })["TimelinePage.useEffect"];
        }
    }["TimelinePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "relative w-full h-screen overflow-hidden bg-transparent flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    opacity: 0.28,
                    pointerEvents: 'none',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/DUST.png",
                    alt: "",
                    fill: true,
                    style: {
                        objectFit: 'cover'
                    },
                    unoptimized: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Timeline.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    opacity: 0.15,
                    pointerEvents: 'none',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/DUST-1.png",
                    alt: "",
                    fill: true,
                    style: {
                        objectFit: 'cover'
                    },
                    unoptimized: true
                }, void 0, false, {
                    fileName: "[project]/src/components/Timeline.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[10%] md:top-[8%] w-full max-w-[900px] flex items-center justify-center z-20 pointer-events-none",
                ref: titleRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        zIndex: 1,
                        width: 480,
                        maxWidth: '75%'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                left: '-15%',
                                top: '50%',
                                transform: 'translate(-20%, -50%)',
                                width: 280,
                                height: 220,
                                opacity: 0.75,
                                pointerEvents: 'none',
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/DUST-1.png",
                                alt: "",
                                className: "-scale-x-100",
                                fill: true,
                                style: {
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                },
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/Timeline.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                right: '-15%',
                                top: '50%',
                                transform: 'translate(20%, -50%)',
                                width: 280,
                                height: 220,
                                opacity: 0.75,
                                pointerEvents: 'none',
                                zIndex: -1
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/DUST-1.png",
                                alt: "",
                                fill: true,
                                style: {
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                },
                                unoptimized: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/Timeline.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/TIME LINE.png",
                            alt: "TIME LINE",
                            width: 580,
                            height: 145,
                            style: {
                                width: '100%',
                                height: 'auto',
                                position: 'relative',
                                zIndex: 1
                            },
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Timeline.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: trackRef,
                className: "absolute top-[12vh] md:top-[18vh] left-0 h-[88vh] md:h-[82vh] flex flex-row items-center w-max z-10 px-[50vw] md:px-[40vw] gap-10 md:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[#494947]/30 z-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timeline.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: progressLineRef,
                        className: "absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-[#E2E2DE] z-0 origin-left scale-x-0",
                        style: {
                            boxShadow: '0 0 15px 2px rgba(226,226,222,0.6)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Timeline.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    nodes.map((node, idx)=>{
                        const isTop = idx % 2 === 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex flex-col items-center justify-center w-[260px] md:w-[320px] shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 md:w-6 md:h-6 z-10 flex items-center justify-center rounded-full bg-[#E2E2DE] border-4 border-[#1C1C1B] shadow-[0_0_0_2px_rgba(226,226,222,0.3)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute left-1/2 w-[2px] bg-[#494947]/60 -translate-x-1/2 ${isTop ? 'bottom-[calc(50%+10px)] h-[40px] md:h-[60px]' : 'top-[calc(50%+10px)] h-[40px] md:h-[60px]'}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute left-1/2 -translate-x-1/2 w-full ${isTop ? 'bottom-[calc(50%+60px)] md:bottom-[calc(50%+80px)]' : 'top-[calc(50%+60px)] md:top-[calc(50%+80px)]'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative p-4 md:p-6 border bg-[#1a1a1a]/60 backdrop-blur-md transition-all duration-500 hover:bg-[#1a1a1a]/90 hover:-translate-y-1",
                                        style: {
                                            borderColor: '#494947'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-[#E2E2DE]/5 to-transparent -translate-x-[100%] group-hover:animate-shimmer pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Timeline.tsx",
                                                lineNumber: 143,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-[5px] h-[5px] rounded-full bg-[#B7AC9B] group-hover:animate-pulse shadow-[0_0_8px_#B7AC9B]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Timeline.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-[#B7AC9B] uppercase",
                                                        children: [
                                                            "PHASE // ",
                                                            idx < 9 ? `0${idx + 1}` : idx + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Timeline.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Timeline.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl md:text-2xl font-black text-[#E2E2DE] tracking-widest uppercase mb-1",
                                                style: {
                                                    fontFamily: "'Creato Display', sans-serif"
                                                },
                                                children: node.date
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Timeline.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs md:text-sm text-[#979086] font-medium tracking-wider uppercase",
                                                children: node.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Timeline.tsx",
                                                lineNumber: 155,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Timeline.tsx",
                                        lineNumber: 140,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Timeline.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/Timeline.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Timeline.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(TimelinePage, "F8IcRW8MjC7YPTHkWAVYUNb6Vk8=");
_c = TimelinePage;
var _c;
__turbopack_context__.k.register(_c, "TimelinePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const contacts = [
    {
        platformIcon: null,
        username: '@innofashion.pcu',
        href: 'https://instagram.com/innofashion.pcu',
        type: 'instagram',
        label: 'COMM.LINK // IG'
    },
    {
        platformIcon: '/assets/LOGO LINE.png',
        username: '@182dplyt',
        href: 'https://line.me/ti/p/@182dplyt',
        type: 'line',
        label: 'COMM.LINK // LN'
    },
    {
        platformIcon: '/assets/LOGO TIKTOK.png',
        username: '@innofashionshow',
        href: 'https://tiktok.com/@innofashionshow',
        type: 'tiktok',
        label: 'COMM.LINK // TT'
    }
];
const InstagramIcon = ({ size = 32 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactUs.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactUs.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "6.5",
                r: "1",
                fill: "white",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactUs.tsx",
                lineNumber: 40,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactUs.tsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = InstagramIcon;
function ContactPage() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactPage.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "ContactPage.useEffect.ctx": ()=>{
                    // Model — slide in from left (Desktop) / bottom (Mobile)
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(modelRef.current, {
                        x: window.innerWidth > 600 ? -150 : 0,
                        y: window.innerWidth <= 600 ? 100 : 0,
                        opacity: 0,
                        duration: 1.3,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 60%',
                            end: 'top 20%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                    // Title — slide in from right
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(titleRef.current, {
                        x: 120,
                        opacity: 0,
                        duration: 1.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 55%',
                            end: 'top 20%',
                            toggleActions: 'play none none reverse'
                        }
                    });
                    // Modern Cards Reveal — stagger fade up & blur (Biar sama kayak Timeline)
                    const cardElements = cardsRef.current.filter({
                        "ContactPage.useEffect.ctx.cardElements": (el)=>el !== null
                    }["ContactPage.useEffect.ctx.cardElements"]);
                    cardElements.forEach({
                        "ContactPage.useEffect.ctx": (card, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(card, {
                                opacity: 0,
                                y: 30,
                                filter: 'blur(5px)'
                            }, {
                                opacity: 1,
                                y: 0,
                                filter: 'blur(0px)',
                                duration: 0.8,
                                delay: i * 0.15,
                                ease: 'power2.out',
                                scrollTrigger: {
                                    trigger: sectionRef.current,
                                    start: 'top 50%',
                                    toggleActions: 'play none none reverse'
                                }
                            });
                        }
                    }["ContactPage.useEffect.ctx"]);
                }
            }["ContactPage.useEffect.ctx"], sectionRef);
            return ({
                "ContactPage.useEffect": ()=>ctx.revert()
            })["ContactPage.useEffect"];
        }
    }["ContactPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "contact-root",
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-model",
                        ref: modelRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/ASET ORANG SHADOW (KALO KURANG JELAS).png",
                                alt: "model shadow",
                                fill: true,
                                className: "model-img"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactUs.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/DUST ABU.png",
                                alt: "dust",
                                fill: true,
                                className: "model-img dust-left"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactUs.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/DUST KUNING.png",
                                alt: "dust",
                                fill: true,
                                className: "model-img dust-right"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactUs.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/ASET ORANG.png",
                                alt: "model",
                                fill: true,
                                className: "model-img"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactUs.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactUs.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-title-wrap",
                                ref: titleRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/CONTACT US.png",
                                    alt: "CONTACT US",
                                    fill: true,
                                    style: {
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                        top: '10%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactUs.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactUs.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-cards",
                                children: contacts.map((contact, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: contact.href,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        ref: (el)=>{
                                            cardsRef.current[i] = el;
                                        },
                                        className: "group relative p-5 md:p-7 border bg-[#1a1a1a]/40 backdrop-blur-md transition-all duration-500 hover:bg-[#1a1a1a]/80 block w-full overflow-hidden",
                                        style: {
                                            borderColor: '#494947'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-[#E2E2DE]/5 to-transparent -translate-x-[100%] group-hover:animate-shimmer pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactUs.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 mb-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-[6px] h-[6px] rounded-full bg-[#B7AC9B] group-hover:animate-pulse shadow-[0_0_8px_#B7AC9B]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ContactUs.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[8px] md:text-[9px] font-bold tracking-[0.3em] text-[#B7AC9B] uppercase",
                                                                        children: contact.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ContactUs.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ContactUs.tsx",
                                                                lineNumber: 145,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-sm md:text-[17px] font-black text-[#E2E2DE] tracking-widest uppercase",
                                                                style: {
                                                                    fontFamily: "'Creato Display', sans-serif"
                                                                },
                                                                children: contact.username
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactUs.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ContactUs.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 md:w-10 md:h-10 relative opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 flex items-center justify-center flex-shrink-0",
                                                        children: contact.type === 'instagram' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramIcon, {}, void 0, false, {
                                                            fileName: "[project]/src/components/ContactUs.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: contact.platformIcon,
                                                            alt: contact.type,
                                                            fill: true,
                                                            style: {
                                                                objectFit: 'contain'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactUs.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactUs.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ContactUs.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, contact.type, true, {
                                        fileName: "[project]/src/components/ContactUs.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactUs.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactUs.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactUs.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* ─── Root ─────────────────────────────────────────── */
        .contact-root {
          width: 100vw;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background-color: transparent;
          font-family: var(--font-creato-title);
        }

        /* ─── Main layout ───────────────────────────────────── */
        .contact-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: row;
          height: 100vh;
        }

        /* ─── LEFT: Model ───────────────────────────────────── */
        .contact-model {
          flex: 0 0 45%;
          position: relative;
          height: 100%;
        }
        .model-img {
          object-fit: contain;
          object-position: bottom center;
        }
        .dust-left  { transform: translateX(-10%); }
        .dust-right { transform: translateX(15%); }

        /* ─── RIGHT: Content ────────────────────────────────── */
        .contact-right {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding-top: 2%;
          padding-left: 0;
          gap: 0;
        }

        /* ─── Title ─────────────────────────────────────────── */
        .contact-title-wrap {
          position: relative;
          width: 100%;
          height: clamp(120px, 26vh, 240px);
          margin-bottom: 3vh;
          align-self: flex-end;
        }

        /* ─── Cards container ───────────────────────────────── */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 85%;
          max-width: 480px;
          margin-top: 2vh;
        }

        /* ✨ Shimmer Animation (Tailwind integration) */
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }

        /* ─── TABLET (≤ 900px) ──────────────────────────────── */
        @media (max-width: 900px) {
          .contact-model { flex: 0 0 38%; }
          .contact-right {
            flex: 0 0 62%;
            padding-right: 24px;
            padding-top: 8%;
          }
          .contact-title-wrap {
            height: 100px;
            margin-bottom: 20px;
          }
          .contact-cards {
            width: 90%;
            max-width: 400px;
            gap: 16px;
            margin-top: 30px;
          }
        }

        /* ─── MOBILE (≤ 600px) ──────────────────────────────── */
        @media (max-width: 600px) {
          .contact-root { min-height: 100svh; }
          .contact-content {
            flex-direction: column;
            height: 100svh;
            overflow-x: hidden;
          }
          .contact-right {
            flex: none;
            width: 100%;
            padding: 40px 20px 20px;
            justify-content: flex-start;
            align-items: center;
            order: 1;
          }
          .contact-model {
            flex: none;
            width: 100vw;
            margin-left: 2px;
            height: 80vw;
            min-height: 300px;
            max-height: 500px;
            order: 2;
            overflow: hidden;
            margin-top: auto;
          }
          .model-img {
            object-fit: cover !important;
            object-position: top center !important;
          }
          .dust-left  { transform: translateX(0) scale(1.1) !important; }
          .dust-right { transform: translateX(0) scale(1.1) !important; }
          .contact-title-wrap {
            height: clamp(60px, 18vw, 100px);
            margin-bottom: 12px;
            align-self: center;
          }
          .contact-cards {
            width: 100%;
            max-width: 360px;
            gap: 14px;
            margin-top: 10px;
          }
        }

        /* ─── SMALL MOBILE (≤ 380px) ────────────────────────── */
        @media (max-width: 380px) {
          .contact-model { height: 100vw; min-height: 250px; }
          .contact-cards { width: 95%; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ContactUs.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactUs.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_s(ContactPage, "qrChSQwwiJqXs9tGvyhlnrEAa6U=");
_c1 = ContactPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "InstagramIcon");
__turbopack_context__.k.register(_c1, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Logoloop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoLoop",
    ()=>LogoLoop,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
const ANIMATION_CONFIG = {
    SMOOTH_TAU: 0.25,
    MIN_COPIES: 2,
    COPY_HEADROOM: 2
};
const toCssLength = (value)=>typeof value === "number" ? `${value}px` : value ?? undefined;
const cx = (...parts)=>parts.filter(Boolean).join(" ");
const useResizeObserver = (callback, elements, dependencies)=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResizeObserver.useEffect": ()=>{
            if (!window.ResizeObserver) {
                const handleResize = {
                    "useResizeObserver.useEffect.handleResize": ()=>callback()
                }["useResizeObserver.useEffect.handleResize"];
                window.addEventListener("resize", handleResize);
                callback();
                return ({
                    "useResizeObserver.useEffect": ()=>window.removeEventListener("resize", handleResize)
                })["useResizeObserver.useEffect"];
            }
            const observers = elements.map({
                "useResizeObserver.useEffect.observers": (ref)=>{
                    if (!ref.current) return null;
                    const observer = new ResizeObserver(callback);
                    observer.observe(ref.current);
                    return observer;
                }
            }["useResizeObserver.useEffect.observers"]);
            callback();
            return ({
                "useResizeObserver.useEffect": ()=>{
                    observers.forEach({
                        "useResizeObserver.useEffect": (observer)=>observer?.disconnect()
                    }["useResizeObserver.useEffect"]);
                }
            })["useResizeObserver.useEffect"];
        }
    }["useResizeObserver.useEffect"], dependencies);
};
_s(useResizeObserver, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const useImageLoader = (seqRef, onLoad, dependencies)=>{
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImageLoader.useEffect": ()=>{
            const images = seqRef.current?.querySelectorAll("img") ?? [];
            if (images.length === 0) {
                onLoad();
                return;
            }
            let remainingImages = images.length;
            const handleImageLoad = {
                "useImageLoader.useEffect.handleImageLoad": ()=>{
                    remainingImages -= 1;
                    if (remainingImages === 0) {
                        onLoad();
                    }
                }
            }["useImageLoader.useEffect.handleImageLoad"];
            images.forEach({
                "useImageLoader.useEffect": (img)=>{
                    const htmlImg = img;
                    if (htmlImg.complete) {
                        handleImageLoad();
                    } else {
                        htmlImg.addEventListener("load", handleImageLoad, {
                            once: true
                        });
                        htmlImg.addEventListener("error", handleImageLoad, {
                            once: true
                        });
                    }
                }
            }["useImageLoader.useEffect"]);
            return ({
                "useImageLoader.useEffect": ()=>{
                    images.forEach({
                        "useImageLoader.useEffect": (img)=>{
                            img.removeEventListener("load", handleImageLoad);
                            img.removeEventListener("error", handleImageLoad);
                        }
                    }["useImageLoader.useEffect"]);
                }
            })["useImageLoader.useEffect"];
        }
    }["useImageLoader.useEffect"], dependencies);
};
_s1(useImageLoader, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const useAnimationLoop = (trackRef, targetVelocity, seqWidth, seqHeight, isHovered, hoverSpeed, isVertical)=>{
    _s2();
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimestampRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const offsetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const velocityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAnimationLoop.useEffect": ()=>{
            const track = trackRef.current;
            if (!track) return;
            const prefersReduced = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const seqSize = isVertical ? seqHeight : seqWidth;
            if (seqSize > 0) {
                offsetRef.current = (offsetRef.current % seqSize + seqSize) % seqSize;
                const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                track.style.transform = transformValue;
            }
            if (prefersReduced) {
                track.style.transform = isVertical ? "translate3d(0, 0, 0)" : "translate3d(0, 0, 0)";
                return ({
                    "useAnimationLoop.useEffect": ()=>{
                        lastTimestampRef.current = null;
                    }
                })["useAnimationLoop.useEffect"];
            }
            const animate = {
                "useAnimationLoop.useEffect.animate": (timestamp)=>{
                    if (lastTimestampRef.current === null) {
                        lastTimestampRef.current = timestamp;
                    }
                    const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
                    lastTimestampRef.current = timestamp;
                    const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;
                    const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
                    velocityRef.current += (target - velocityRef.current) * easingFactor;
                    if (seqSize > 0) {
                        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
                        nextOffset = (nextOffset % seqSize + seqSize) % seqSize;
                        offsetRef.current = nextOffset;
                        const transformValue = isVertical ? `translate3d(0, ${-offsetRef.current}px, 0)` : `translate3d(${-offsetRef.current}px, 0, 0)`;
                        track.style.transform = transformValue;
                    }
                    rafRef.current = requestAnimationFrame(animate);
                }
            }["useAnimationLoop.useEffect.animate"];
            rafRef.current = requestAnimationFrame(animate);
            return ({
                "useAnimationLoop.useEffect": ()=>{
                    if (rafRef.current !== null) {
                        cancelAnimationFrame(rafRef.current);
                        rafRef.current = null;
                    }
                    lastTimestampRef.current = null;
                }
            })["useAnimationLoop.useEffect"];
        }
    }["useAnimationLoop.useEffect"], [
        targetVelocity,
        seqWidth,
        seqHeight,
        isHovered,
        hoverSpeed,
        isVertical
    ]);
};
_s2(useAnimationLoop, "CHkB9QIrZTEfgjfB6nwY5WHuHxk=");
const LogoLoop = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s3(({ logos, speed = 120, direction = "left", width = "100%", logoHeight = 28, gap = 32, pauseOnHover, hoverSpeed, fadeOut = false, fadeOutColor, scaleOnHover = false, renderItem, ariaLabel = "Partner logos", className, style })=>{
    _s3();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const seqRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [seqWidth, setSeqWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [seqHeight, setSeqHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [copyCount, setCopyCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const effectiveHoverSpeed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[effectiveHoverSpeed]": ()=>{
            if (hoverSpeed !== undefined) return hoverSpeed;
            if (pauseOnHover === true) return 0;
            if (pauseOnHover === false) return undefined;
            return 0;
        }
    }["LogoLoop.useMemo[effectiveHoverSpeed]"], [
        hoverSpeed,
        pauseOnHover
    ]);
    const isVertical = direction === "up" || direction === "down";
    const targetVelocity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[targetVelocity]": ()=>{
            const magnitude = Math.abs(speed);
            let directionMultiplier;
            if (isVertical) {
                directionMultiplier = direction === "up" ? 1 : -1;
            } else {
                directionMultiplier = direction === "left" ? 1 : -1;
            }
            const speedMultiplier = speed < 0 ? -1 : 1;
            return magnitude * directionMultiplier * speedMultiplier;
        }
    }["LogoLoop.useMemo[targetVelocity]"], [
        speed,
        direction,
        isVertical
    ]);
    const updateDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[updateDimensions]": ()=>{
            const containerWidth = containerRef.current?.clientWidth ?? 0;
            const sequenceRect = seqRef.current?.getBoundingClientRect?.();
            const sequenceWidth = sequenceRect?.width ?? 0;
            const sequenceHeight = sequenceRect?.height ?? 0;
            if (isVertical) {
                const parentHeight = containerRef.current?.parentElement?.clientHeight ?? 0;
                if (containerRef.current && parentHeight > 0) {
                    const targetHeight = Math.ceil(parentHeight);
                    if (containerRef.current.style.height !== `${targetHeight}px`) containerRef.current.style.height = `${targetHeight}px`;
                }
                if (sequenceHeight > 0) {
                    setSeqHeight(Math.ceil(sequenceHeight));
                    const viewport = containerRef.current?.clientHeight ?? parentHeight ?? sequenceHeight;
                    const copiesNeeded = Math.ceil(viewport / sequenceHeight) + ANIMATION_CONFIG.COPY_HEADROOM;
                    setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
                }
            } else if (sequenceWidth > 0) {
                setSeqWidth(Math.ceil(sequenceWidth));
                const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
                setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
            }
        }
    }["LogoLoop.useCallback[updateDimensions]"], [
        isVertical
    ]);
    useResizeObserver(updateDimensions, [
        containerRef,
        seqRef
    ], [
        logos,
        gap,
        logoHeight,
        isVertical
    ]);
    useImageLoader(seqRef, updateDimensions, [
        logos,
        gap,
        logoHeight,
        isVertical
    ]);
    useAnimationLoop(trackRef, targetVelocity, seqWidth, seqHeight, isHovered, effectiveHoverSpeed, isVertical);
    const cssVariables = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[cssVariables]": ()=>({
                "--logoloop-gap": `${gap}px`,
                "--logoloop-logoHeight": `${logoHeight}px`,
                ...fadeOutColor && {
                    "--logoloop-fadeColor": fadeOutColor
                }
            })
    }["LogoLoop.useMemo[cssVariables]"], [
        gap,
        logoHeight,
        fadeOutColor
    ]);
    const rootClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[rootClasses]": ()=>cx("relative group", isVertical ? "overflow-hidden h-full inline-block" : "overflow-x-hidden", "[--logoloop-gap:32px]", "[--logoloop-logoHeight:28px]", "[--logoloop-fadeColorAuto:#ffffff]", "dark:[--logoloop-fadeColorAuto:#0b0b0b]", scaleOnHover && "py-[calc(var(--logoloop-logoHeight)*0.1)]", "no-scrollbar", className)
    }["LogoLoop.useMemo[rootClasses]"], [
        isVertical,
        scaleOnHover,
        className
    ]);
    const handleMouseEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[handleMouseEnter]": ()=>{
            if (effectiveHoverSpeed !== undefined) setIsHovered(true);
        }
    }["LogoLoop.useCallback[handleMouseEnter]"], [
        effectiveHoverSpeed
    ]);
    const handleMouseLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[handleMouseLeave]": ()=>{
            if (effectiveHoverSpeed !== undefined) setIsHovered(false);
        }
    }["LogoLoop.useCallback[handleMouseLeave]"], [
        effectiveHoverSpeed
    ]);
    const renderLogoItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LogoLoop.useCallback[renderLogoItem]": (item, key)=>{
            if (renderItem) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: cx("flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]", isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]", scaleOnHover && "overflow-visible group/item"),
                    role: "listitem",
                    children: renderItem(item, key)
                }, key, false, {
                    fileName: "[project]/src/components/Logoloop.tsx",
                    lineNumber: 354,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            }
            const isNodeItem = "node" in item;
            const content = isNodeItem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: cx("inline-flex items-center", "motion-reduce:transition-none", scaleOnHover && "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),
                "aria-hidden": !!item.href && !item.ariaLabel,
                children: item.node
            }, void 0, false, {
                fileName: "[project]/src/components/Logoloop.tsx",
                lineNumber: 373,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                className: cx("h-[var(--logoloop-logoHeight)] w-auto block object-contain", "[-webkit-user-drag:none] pointer-events-none", "[image-rendering:-webkit-optimize-contrast]", "motion-reduce:transition-none", scaleOnHover && "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120"),
                src: item.src,
                srcSet: item.srcSet,
                sizes: item.sizes,
                width: item.width,
                height: item.height,
                alt: item.alt ?? "",
                title: item.title,
                loading: "lazy",
                decoding: "async",
                draggable: false
            }, void 0, false, {
                fileName: "[project]/src/components/Logoloop.tsx",
                lineNumber: 385,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
            const itemAriaLabel = isNodeItem ? item.ariaLabel ?? item.title : item.alt ?? item.title;
            const inner = item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: cx("inline-flex items-center no-underline rounded", "transition-opacity duration-200 ease-linear", "hover:opacity-80", "focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2"),
                href: item.href,
                "aria-label": itemAriaLabel || "logo link",
                target: "_blank",
                rel: "noreferrer noopener",
                children: content
            }, void 0, false, {
                fileName: "[project]/src/components/Logoloop.tsx",
                lineNumber: 412,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : content;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: cx("flex-none text-[length:var(--logoloop-logoHeight)] leading-[1]", isVertical ? "mb-[var(--logoloop-gap)]" : "mr-[var(--logoloop-gap)]", scaleOnHover && "overflow-visible group/item"),
                role: "listitem",
                children: inner
            }, key, false, {
                fileName: "[project]/src/components/Logoloop.tsx",
                lineNumber: 431,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        }
    }["LogoLoop.useCallback[renderLogoItem]"], [
        isVertical,
        scaleOnHover,
        renderItem
    ]);
    const logoLists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[logoLists]": ()=>Array.from({
                length: copyCount
            }, {
                "LogoLoop.useMemo[logoLists]": (_, copyIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: cx("flex items-center", isVertical && "flex-col"),
                        role: "list",
                        "aria-hidden": copyIndex > 0,
                        ref: copyIndex === 0 ? seqRef : undefined,
                        children: logos.map({
                            "LogoLoop.useMemo[logoLists]": (item, itemIndex)=>renderLogoItem(item, `${copyIndex}-${itemIndex}`)
                        }["LogoLoop.useMemo[logoLists]"])
                    }, `copy-${copyIndex}`, false, {
                        fileName: "[project]/src/components/Logoloop.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
            }["LogoLoop.useMemo[logoLists]"])
    }["LogoLoop.useMemo[logoLists]"], [
        copyCount,
        logos,
        renderLogoItem,
        isVertical
    ]);
    const containerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LogoLoop.useMemo[containerStyle]": ()=>({
                width: isVertical ? toCssLength(width) === "100%" ? undefined : toCssLength(width) : toCssLength(width) ?? "100%",
                ...cssVariables,
                ...style
            })
    }["LogoLoop.useMemo[containerStyle]"], [
        width,
        cssVariables,
        style,
        isVertical
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: rootClasses,
        style: containerStyle,
        role: "region",
        "aria-label": ariaLabel,
        children: [
            fadeOut && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: isVertical ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: cx("pointer-events-none absolute inset-x-0 top-0 z-10", "h-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_bottom,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Logoloop.tsx",
                            lineNumber: 492,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: cx("pointer-events-none absolute inset-x-0 bottom-0 z-10", "h-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_top,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Logoloop.tsx",
                            lineNumber: 500,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: cx("pointer-events-none absolute inset-y-0 left-0 z-10", "w-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_right,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Logoloop.tsx",
                            lineNumber: 511,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: cx("pointer-events-none absolute inset-y-0 right-0 z-10", "w-[clamp(24px,8%,120px)]", "bg-[linear-gradient(to_left,var(--logoloop-fadeColor,var(--logoloop-fadeColorAuto))_0%,rgba(0,0,0,0)_100%)]")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Logoloop.tsx",
                            lineNumber: 519,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: cx("flex will-change-transform select-none relative z-0", "motion-reduce:transform-none", isVertical ? "flex-col h-max w-full" : "flex-row w-max"),
                ref: trackRef,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                children: logoLists
            }, void 0, false, {
                fileName: "[project]/src/components/Logoloop.tsx",
                lineNumber: 532,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Logoloop.tsx",
        lineNumber: 481,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "RVu0L+YemxMSJWfZnmFP+1NHcrc=", false, function() {
    return [
        useResizeObserver,
        useImageLoader,
        useAnimationLoop
    ];
})), "RVu0L+YemxMSJWfZnmFP+1NHcrc=", false, function() {
    return [
        useResizeObserver,
        useImageLoader,
        useAnimationLoop
    ];
});
_c1 = LogoLoop;
LogoLoop.displayName = "LogoLoop";
const __TURBOPACK__default__export__ = LogoLoop;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoLoop$React.memo");
__turbopack_context__.k.register(_c1, "LogoLoop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/HomeClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/opening/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$introvideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/opening/introvideo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$competition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/opening/competition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/opening/footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/About.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactUs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactUs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logoloop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Logoloop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InnoFashionLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InnoFashionLoader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
const sponsorLogos = [
    {
        src: "/assets/logoloop/anitas-kitchen.png",
        alt: "Anita's Kitchen"
    },
    {
        src: "/assets/logoloop/demandailing.jpeg",
        alt: "DeMandailing"
    },
    {
        src: "/assets/logoloop/hope-beauty.jpg",
        alt: "Partner Logo"
    },
    {
        src: "/assets/logoloop/make-over.png",
        alt: "Make Over"
    },
    {
        src: "/assets/logoloop/logo-pnp.png",
        alt: "PNP"
    }
];
const renderSponsorItem = (item)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex items-center justify-center h-24 md:h-36 w-56 md:w-80 rounded-2xl md:rounded-3xl bg-transparent border border-white/[0.06] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.03] hover:border-[#B7AC9B]/40 hover:shadow-[0_0_35px_rgba(183,172,155,0.15),inset_0_1px_1px_rgba(255,255,255,0.05)] hover:scale-[1.03] overflow-hidden group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover:animate-shimmer pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: item.src,
                alt: item.alt || "Sponsor",
                className: "h-12 md:h-20 max-w-[85%] max-h-[75%] w-auto object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0 contrast-[1.1]"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/HomeClient.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function HomeClient() {
    _s();
    const [isVideoLoaded, setIsVideoLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showContent, setShowContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 1. Initial Mount: Scroll Restoration & Safety Fallback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeClient.useEffect": ()=>{
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "manual";
            }
            window.scrollTo(0, 0);
            // Fallback safety timeout: Force isVideoLoaded to true after 5000ms
            const fallbackTimer = setTimeout({
                "HomeClient.useEffect.fallbackTimer": ()=>{
                    setIsVideoLoaded(true);
                }
            }["HomeClient.useEffect.fallbackTimer"], 5000);
            return ({
                "HomeClient.useEffect": ()=>{
                    clearTimeout(fallbackTimer);
                }
            })["HomeClient.useEffect"];
        }
    }["HomeClient.useEffect"], []);
    // 2. Video Loading Logic: Wait for video, then wait 500ms buffer to turn off loader
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeClient.useEffect": ()=>{
            if (isVideoLoaded) {
                const bufferTimer = setTimeout({
                    "HomeClient.useEffect.bufferTimer": ()=>{
                        setIsLoading(false);
                    }
                }["HomeClient.useEffect.bufferTimer"], 500);
                return ({
                    "HomeClient.useEffect": ()=>{
                        clearTimeout(bufferTimer);
                    }
                })["HomeClient.useEffect"];
            }
        }
    }["HomeClient.useEffect"], [
        isVideoLoaded
    ]);
    // 3. Reveal Logic: Wait 1200ms after isLoading becomes false to show content
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeClient.useEffect": ()=>{
            if (!isLoading) {
                const revealTimer = setTimeout({
                    "HomeClient.useEffect.revealTimer": ()=>{
                        setShowContent(true);
                    }
                }["HomeClient.useEffect.revealTimer"], 1200);
                return ({
                    "HomeClient.useEffect": ()=>{
                        clearTimeout(revealTimer);
                    }
                })["HomeClient.useEffect"];
            }
        }
    }["HomeClient.useEffect"], [
        isLoading
    ]);
    // 4. Scroll Lock Logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomeClient.useEffect": ()=>{
            if (!showContent) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
            return ({
                "HomeClient.useEffect": ()=>{
                    document.body.style.overflow = "auto";
                }
            })["HomeClient.useEffect"];
        }
    }["HomeClient.useEffect"], [
        showContent
    ]);
    return(// 🔥 1. HAPUS overflow-x-hidden di sini agar posisi 'sticky' bisa bekerja! 🔥
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen bg-[#0a0a0a] overflow-x-clip",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InnoFashionLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isLoading: isLoading
            }, void 0, false, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`,
                style: {
                    backgroundImage: "url('/assets/BACKGROUND FULL.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: showContent
            }, void 0, false, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sticky top-0 h-screen w-full bg-[#0a0a0a] z-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$introvideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isFinished: showContent,
                            onVideoReady: ()=>setIsVideoLoaded(true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/HomeClient.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative z-10 bg-[#0a0a0a] transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            id: "about",
                            className: "relative bg-[#0a0a0a] after:content-[''] after:absolute after:-bottom-40 after:left-0 after:w-full after:h-40 after:bg-gradient-to-b after:from-[#0a0a0a] after:to-transparent after:pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/pages/HomeClient.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/HomeClient.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative bg-transparent py-24 border-t border-white/5 overflow-hidden no-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-[#B7AC9B]/[0.02] blur-[120px] rounded-full pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1500px] mx-auto px-6 mb-16 flex items-center justify-center gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/5 to-white/15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/HomeClient.tsx",
                                lineNumber: 141,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[11px] md:text-xs font-bold tracking-[0.4em] text-[#B7AC9B] uppercase whitespace-nowrap",
                                style: {
                                    fontFamily: "'Creato Display', sans-serif"
                                },
                                children: "COLLABORATIONS & SPONSORS"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/HomeClient.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/5 to-white/15"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/HomeClient.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logoloop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        logos: sponsorLogos,
                        speed: 100,
                        logoHeight: 144,
                        gap: 56,
                        fadeOut: true,
                        fadeOutColor: "#0a0a0a",
                        scaleOnHover: false,
                        renderItem: renderSponsorItem,
                        className: "no-scrollbar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 transition-opacity duration-1000 ease-in-out ${showContent ? "opacity-100" : "opacity-0"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "competitions",
                        className: "relative py-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$competition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/pages/HomeClient.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "timeline",
                        className: "relative bg-[#0a0a0a]   before:content-[''] before:absolute before:-top-40 before:left-0 before:w-full before:h-40 before:bg-gradient-to-b before:from-transparent before:to-[#0a0a0a] before:pointer-events-none    after:content-[''] after:absolute after:-bottom-40 after:left-0 after:w-full after:h-40 after:bg-gradient-to-b after:from-[#0a0a0a] after:to-transparent after:pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/pages/HomeClient.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "contact",
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactUs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/pages/HomeClient.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20 bg-[#0a0a0a] before:content-[''] before:absolute before:-top-40 before:left-0 before:w-full before:h-40 before:bg-gradient-to-b before:from-transparent before:to-[#0a0a0a] before:pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/pages/HomeClient.tsx",
                            lineNumber: 186,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/login?next=/dashboard",
                className: `fixed bottom-5 right-4 z-40 group flex items-center gap-3 rounded-full border border-white/20 bg-white/95 px-5 py-3 text-black shadow-[0_16px_40px_rgba(0,0,0,0.55)] transition-all duration-500 hover:-translate-y-1 hover:bg-white sm:bottom-8 sm:right-8 sm:px-6 sm:py-4 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}`,
                "aria-label": "Register now",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex flex-col leading-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-black uppercase tracking-[0.18em] text-black/55",
                                children: "Start Here"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/HomeClient.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap text-sm font-black italic uppercase tracking-[0.06em] text-black sm:text-base",
                                children: "Register Now"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/HomeClient.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-black transition-transform duration-300 group-hover:translate-x-1",
                        children: ">"
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/HomeClient.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/HomeClient.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/HomeClient.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this));
}
_s(HomeClient, "4T5MLq8WQQ9uKWlBFjccDHGm0RI=");
_c = HomeClient;
var _c;
__turbopack_context__.k.register(_c, "HomeClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_38c91bcc._.js.map