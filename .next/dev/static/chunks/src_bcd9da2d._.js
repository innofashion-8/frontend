(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/fetch-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchClient",
    ()=>fetchClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// import { signOut } from "next-auth/react";
// export const fetchClient = async <T = any>(path: string, options: RequestInit = {}): Promise<T> => {
//     const isServer = typeof window === 'undefined';
//     const baseUrl = isServer ? (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000') : '';
//     const url = isServer ? `${baseUrl}${path}` : path;
//     const headers = new Headers(options.headers);
//     // Kalau body BUKAN FormData, baru kita paksa jadi JSON
//     if (!(options.body instanceof FormData)) {
//         if (!headers.has('Content-Type')) {
//             headers.set('Content-Type', 'application/json');
//         }
//     } else {
//         headers.delete('Content-Type');
//     }
//     const res = await fetch(url, {
//         ...options,
//         headers,
//     });
//     if (res.status === 401) {
//         if (typeof window !== 'undefined') {
//             signOut({ callbackUrl: '/login' });
//         }
//         throw { code: 401, message: 'Unauthorized', isValidationError: false };
//     }
//     const responseData = await res.json().catch(() => ({})); 
//     if (!res.ok) {
//         throw {
//             code: responseData.code || res.status,
//             message: responseData.message || 'Terjadi Kesalahan',
//             data: responseData.data || null,
//             isValidationError: res.status === 422 || responseData.code === 422
//         };
//     }
//     return responseData as T;
// };
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
const fetchClient = async (path, options = {})=>{
    // 1. 🔥 KITA PAKSA SELALU NEMBAK KE LARAVEL (GAK PAKE PROXY NEXT.JS LAGI) 🔥
    const baseUrl = ("TURBOPACK compile-time value", "https://api.innofashionshow.petra.ac.id") || 'http://localhost:8000';
    // Pastikan path ada slash di depannya
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const url = `${baseUrl}${cleanPath}`;
    const headers = new Headers(options.headers);
    // 2. 🔥 KITA AMBIL TOKEN DARI NEXT-AUTH & MASUKIN KE HEADER 🔥
    // (Ini jalan di Client Component maupun Server Component)
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])();
    if (session && session.accessToken) {
        headers.set('Authorization', `Bearer ${session.accessToken}`);
    }
    // 3. Aturan FormData lu yang udah bener kemarin
    if (!(options.body instanceof FormData)) {
        if (!headers.has('Content-Type')) {
            headers.set('Content-Type', 'application/json');
            headers.set('Accept', 'application/json');
        }
    } else {
        headers.delete('Content-Type'); // Biarkan browser yg atur boundary multipart/form-data
        headers.set('Accept', 'application/json');
    }
    // 4. Gas Kirim ke Laravel
    const res = await fetch(url, {
        ...options,
        headers
    });
    if (res.status === 401) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                callbackUrl: '/login'
            });
        }
        throw {
            code: 401,
            message: 'Unauthorized',
            isValidationError: false
        };
    }
    const responseData = await res.json().catch(()=>({}));
    if (!res.ok) {
        throw {
            code: responseData.code || res.status,
            message: responseData.message || 'Terjadi Kesalahan',
            data: responseData.errors || responseData.data || null,
            isValidationError: res.status === 422 || responseData.code === 422
        };
    }
    return responseData;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/opening/navbar.tsx",
                                lineNumber: 52,
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
                                                lineNumber: 58,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center space-x-4 xl:space-x-6",
                                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                                                label: link.label,
                                                onClick: ()=>handleScroll(link.id)
                                            }, link.id, false, {
                                                fileName: "[project]/src/components/opening/navbar.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center space-x-3 mr-4",
                                        children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                href: "/",
                                                children: "HOME"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/navbar.tsx",
                                                lineNumber: 74,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                        href: "/dashboard",
                                                        children: "DASHBOARD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                        onClick: handleLogout,
                                                        children: "LOGOUT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                                        lineNumber: 78,
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
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                    href: "/login",
                                                    children: "SIGN IN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/opening/navbar.tsx",
                                                    lineNumber: 85,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "lg:hidden text-white mr-4 z-50 relative",
                                        onClick: ()=>setIsOpen(!isOpen),
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 94,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 94,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/opening/navbar.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/opening/navbar.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/opening/navbar.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/opening/navbar.tsx",
                lineNumber: 46,
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
                                lineNumber: 107,
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
                                    lineNumber: 120,
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
                                            lineNumber: 129,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogout,
                                            className: "text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                            children: "LOGOUT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 136,
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
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                        children: "SIGN IN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/src/components/opening/navbar.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/opening/navbar.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/opening/navbar.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "XdGK/0hAmzqBq+kOneP40pymbPQ=", false, function() {
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
"[project]/src/config/palette.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const palette = {
    onyx: "#1C1C1B",
    obsidian: "#1a1a1a",
    walnut: "#6A5D52",
    greige: "#B7AC9B",
    ash: "#979086",
    stucco: "#E2E2DE",
    graphite: "#494947",
    gravel: "#7b787a"
};
const __TURBOPACK__default__export__ = palette;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/DashboardClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/opening/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/palette.ts [app-client] (ecmascript)");
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
function DashboardClient() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // STATE UNTUK MODAL UPLOAD
    const [uploadCompKey, setUploadCompKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [artworkFile, setArtworkFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [conceptFile, setConceptFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: registrations, isLoading: isRegLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "my-registrations"
        ],
        queryFn: {
            "DashboardClient.useQuery": async ()=>{
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])("/api/registrations", {
                    method: "GET"
                });
                return res.data;
            }
        }["DashboardClient.useQuery"],
        enabled: status === "authenticated"
    });
    const handleLogout = async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: "/login"
        });
    if (status === "loading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs font-bold tracking-[0.4em] uppercase animate-pulse",
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
            },
            children: "DECRYPTING IDENTITY..."
        }, void 0, false, {
            fileName: "[project]/src/components/pages/DashboardClient.tsx",
            lineNumber: 40,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/DashboardClient.tsx",
        lineNumber: 39,
        columnNumber: 7
    }, this);
    const getStatusColor = (statusReg)=>{
        const s = (statusReg || "").toUpperCase();
        if (s.includes("REJECT") || s.includes("TOLAK")) return "#ef4444";
        if (s.includes("VERIFI") || s.includes("ACCEPT") || s.includes("APPROV")) return "#22c55e";
        if (s.includes("PENDING") || s.includes("WAIT")) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash;
    };
    const getWhatsAppLink = (reg)=>{
        if (reg?.event) return reg.event.wa_link;
        if (reg?.competition) {
            const userRegion = (reg.region || reg.draft_data?.region || 'NATIONAL').toUpperCase();
            return userRegion === "NATIONAL" ? reg.competition.wa_link_national : reg.competition.wa_link_international;
        }
        return null;
    };
    const handleUploadSubmit = async (e)=>{
        e.preventDefault();
        if (!artworkFile || !conceptFile) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Both Artwork and Concept files are required!", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite}`
                }
            });
            return;
        }
        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append("artwork", artworkFile);
            formData.append("concept", conceptFile);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions/${uploadCompKey}/submission`, {
                method: "POST",
                body: formData
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Artwork successfully uploaded!", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite}`
                }
            });
            setUploadCompKey(null);
            setArtworkFile(null);
            setConceptFile(null);
            queryClient.invalidateQueries({
                queryKey: [
                    "my-registrations"
                ]
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                title: "UPLOAD FAILED",
                text: error.message || "System failed to process your artwork.",
                icon: "error",
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                confirmButtonColor: "#ef4444",
                customClass: {
                    popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
                    title: "font-black tracking-[0.2em]"
                }
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'my-registrations'
                ]
            });
        } finally{
            setIsUploading(false);
        }
    };
    const handleViewSubmission = (artworkUrl, conceptUrl)=>{
        if (!artworkUrl && !conceptUrl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                title: "PROCESSING",
                text: "Your artwork is being processed by the server. Please check again later.",
                icon: "info",
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].walnut,
                customClass: {
                    popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
                    title: "font-black tracking-[0.2em]"
                }
            });
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: "YOUR SUBMISSION",
            html: `
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
          ${artworkUrl ? `<a href="${artworkUrl}" target="_blank" style="padding: 15px; border: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}; color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; text-decoration: none;" onMouseOver="this.style.backgroundColor='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}'; this.style.color='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx}'" onMouseOut="this.style.backgroundColor='transparent'; this.style.color='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}'">VIEW ARTWORK (PDF)</a>` : ""}
          ${conceptUrl ? `<a href="${conceptUrl}" target="_blank" style="padding: 15px; border: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}; color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; text-decoration: none;" onMouseOver="this.style.backgroundColor='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}'; this.style.color='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx}'" onMouseOut="this.style.backgroundColor='transparent'; this.style.color='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}'">VIEW CONCEPT (PDF)</a>` : ""}
        </div>
      `,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
            confirmButtonText: "CLOSE",
            confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
            customClass: {
                popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
                title: "font-black tracking-[0.2em] uppercase",
                confirmButton: "font-bold tracking-widest uppercase rounded-none px-6 py-2"
            }
        });
    };
    const handleViewTicket = (regId, eventName)=>{
        const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(regId)}&size=300&margin=2`;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: "ACCESS PASS",
            html: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 20px;">
          <p style="color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">${eventName}</p>
          
          <div style="background: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco}; padding: 15px; display: inline-block;">
            <img src="${qrUrl}" alt="QR Code" style="width: 250px; height: 250px; display: block;" />
          </div>
          
          <p style="color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash}; font-size: 10px; letter-spacing: 1px; margin-top: 15px; text-transform: uppercase;">
            TICKET PROTOCOL ID:
          </p>
          <div style="padding: 10px; border: 1px dashed ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite}; background: rgba(0,0,0,0.5); width: 100%;">
            <strong style="color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco}; font-size: 12px; letter-spacing: 2px; word-break: break-all;">${regId}</strong>
          </div>
          
          <p style="color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].gravel}; font-size: 9px; margin-top: 10px; font-style: italic;">
            Present this QR Code or ID at the entrance gate.
          </p>
        </div>
      `,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
            confirmButtonText: "ACKNOWLEDGE",
            confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].walnut,
            customClass: {
                popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
                title: "font-black tracking-[0.2em] uppercase",
                confirmButton: "font-bold tracking-widest uppercase rounded-none px-6 py-2"
            }
        });
    };
    let allRegistrations = [];
    if (registrations) {
        allRegistrations = Array.isArray(registrations) ? registrations : [
            ...registrations.competitions || [],
            ...registrations.events || []
        ];
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: true
            }, void 0, false, {
                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-6xl mx-auto px-4 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 p-10 md:p-16 border bg-black/40 backdrop-blur-md relative overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(106,93,82,0.3)]",
                        style: {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-full",
                                style: {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full animate-pulse",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                                                    boxShadow: `0 0 10px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                                },
                                                children: "MAIN DASHBOARD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/dashboard/profile"),
                                                className: "group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-white/10",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                    backgroundColor: "rgba(28,28,27,0.5)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-white",
                                                    children: "EDIT IDENTITY"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm cursor-pointer",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                    backgroundColor: "rgba(28,28,27,0.5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1 h-1 rounded-full bg-red-500 opacity-50 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-red-400",
                                                        children: "LOG OUT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                },
                                children: [
                                    "WELCOME,",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                        },
                                        children: session?.user?.name?.split(" ")[0] || "UNKNOWN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-medium tracking-widest max-w-2xl leading-relaxed",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                },
                                children: "Choose the Innofashion Show 8 registration path you want to take or monitor your registration status."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 border p-8 bg-black/40 backdrop-blur-md",
                        style: {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-8 pb-4 border-b",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold tracking-[0.3em] uppercase",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                    },
                                    children: "[ REGISTRATION PROTOCOL STATUS ]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 299,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            isRegLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold tracking-[0.3em] uppercase animate-pulse",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                },
                                children: "SYNCING WITH DATABASE..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this) : allRegistrations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium tracking-widest uppercase",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                },
                                children: "NO ACTIVE REGISTRATIONS FOUND."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: allRegistrations.map((reg, idx)=>{
                                    const itemName = reg?.competition?.name || reg?.event?.title || "UNKNOWN PROTOCOL";
                                    const itemType = reg?.competition ? "COMPETITION" : "EVENT";
                                    const statusStr = (reg?.status || "PENDING").toUpperCase();
                                    const isRejected = statusStr.includes("REJECT") || statusStr.includes("TOLAK");
                                    const isAccepted = statusStr.includes("VERIFI") || statusStr.includes("ACCEPT") || statusStr.includes("APPROV");
                                    const finalWaLink = getWhatsAppLink(reg);
                                    const isComp = !!reg?.competition;
                                    const compKey = reg?.competition?.slug || reg?.competition?.id;
                                    const currentCompName = (reg?.competition?.name || "").toUpperCase();
                                    const isRestylingComp = isComp && (currentCompName.includes("RESTYLING") || currentCompName.includes("STYLING"));
                                    const isSketchComp = isComp && currentCompName.includes("SKETCH");
                                    const isEvent = !!reg?.event;
                                    const submissionsArray = reg?.submissions || [];
                                    const hasSubmitted = submissionsArray.length > 0;
                                    const artworkObj = submissionsArray.find((s)=>s.file_type === "ARTWORK");
                                    const conceptObj = submissionsArray.find((s)=>s.file_type === "CONCEPT");
                                    const baseUrl = ("TURBOPACK compile-time value", "https://api.innofashionshow.petra.ac.id") || "";
                                    const artworkUrl = artworkObj?.file_path ? `${baseUrl}/storage/${artworkObj.file_path}` : null;
                                    const conceptUrl = conceptObj?.file_path ? `${baseUrl}/storage/${conceptObj.file_path}` : null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col p-4 border transition-colors hover:bg-white/5",
                                        style: {
                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].obsidian
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col lg:flex-row justify-between items-start lg:items-center w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 lg:mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[9px] tracking-[0.2em] mb-1 uppercase",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                                                },
                                                                children: itemType
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 380,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-lg tracking-widest uppercase",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: itemName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 386,
                                                                columnNumber: 25
                                                            }, this),
                                                            (reg?.region || reg?.category) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-bold tracking-widest uppercase mt-2",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                                                },
                                                                children: [
                                                                    reg?.region,
                                                                    " ",
                                                                    reg?.category && `| ${reg.category}`
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 393,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 379,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col sm:flex-row items-start sm:items-center gap-4",
                                                        children: [
                                                            isAccepted && isSketchComp && !hasSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setUploadCompKey(compKey),
                                                                className: "px-4 py-2 border font-bold text-[10px] tracking-widest uppercase text-[#E2E2DE] hover:bg-white hover:text-black transition-all cursor-pointer",
                                                                style: {
                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: "UPLOAD SUBMISSION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 27
                                                            }, this),
                                                            isAccepted && isSketchComp && hasSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleViewSubmission(artworkUrl, conceptUrl),
                                                                className: "px-4 py-2 border font-bold text-[10px] tracking-widest uppercase bg-white/10 hover:bg-white hover:text-black transition-all cursor-pointer",
                                                                style: {
                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: "VIEW SUBMISSION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 418,
                                                                columnNumber: 27
                                                            }, this),
                                                            isAccepted && isEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleViewTicket(reg.id, itemName),
                                                                className: "px-4 py-2 border font-bold text-[10px] tracking-widest uppercase text-[#E2E2DE] hover:bg-[#E2E2DE] hover:text-[#1C1C1B] transition-all cursor-pointer",
                                                                style: {
                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: "VIEW TICKET"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 27
                                                            }, this),
                                                            isAccepted && finalWaLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: finalWaLink,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "px-4 py-2 border font-bold text-[10px] tracking-widest uppercase bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer",
                                                                style: {
                                                                    borderColor: '#25D366'
                                                                },
                                                                children: "JOIN WHATSAPP"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 px-4 py-2 border",
                                                                style: {
                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                                    backgroundColor: "rgba(0,0,0,0.5)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-2 h-2 rounded-full animate-pulse",
                                                                        style: {
                                                                            backgroundColor: getStatusColor(statusStr),
                                                                            boxShadow: `0 0 10px ${getStatusColor(statusStr)}`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                        lineNumber: 463,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-black tracking-widest uppercase",
                                                                        style: {
                                                                            color: getStatusColor(statusStr)
                                                                        },
                                                                        children: statusStr
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                        lineNumber: 470,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 456,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 378,
                                                columnNumber: 21
                                            }, this),
                                            isRejected && reg?.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 p-4 border border-red-500/50 bg-red-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase mb-1",
                                                        children: "REJECTION REASON:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-red-200",
                                                        children: reg.rejection_reason
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            if (isComp) {
                                                                router.push(`/dashboard/competition/${compKey}`);
                                                            } else if (isEvent) {
                                                                const eventKey = reg?.event?.slug || reg?.event?.id;
                                                                router.push(`/dashboard/event/${eventKey}`);
                                                            }
                                                        },
                                                        className: "mt-4 w-full md:w-auto px-6 py-3 font-black text-[10px] tracking-[0.2em] uppercase transition-all cursor-pointer border text-[#ef4444] hover:bg-red-500 hover:text-white",
                                                        style: {
                                                            borderColor: '#ef4444'
                                                        },
                                                        children: "REVISE REGISTRATION PROTOCOL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 480,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 370,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>router.push("/dashboard/event"),
                                className: "group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-9xl font-black italic",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                            },
                                            children: "E"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.3em] mb-8 uppercase",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                                },
                                                children: "[ EVENT CATALOG ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 532,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                                },
                                                children: "EVENTS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 538,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                                },
                                                children: "Join various exciting events, inspiring workshops, and spectacular exhibitions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 544,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 531,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-[1px] w-12 group-hover:w-24 transition-all duration-700",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 553,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                                },
                                                children: "REGISTER EVENT ➔"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 557,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 552,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 515,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>router.push("/dashboard/competition"),
                                className: "group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-9xl font-black italic",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                            },
                                            children: "C"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 575,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 574,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.3em] mb-8 uppercase",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                                },
                                                children: "[ COMPETITION REGISTRATION ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 583,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                                },
                                                children: "COMPETITIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 589,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                                },
                                                children: "Showcase your best talent and compete on the grand stage of Innofashion Show 8."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 595,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 582,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-[1px] w-12 group-hover:w-24 transition-all duration-700",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 604,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                                },
                                                children: "VIEW COMPETITIONS ➔"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 608,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 603,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 566,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            uploadCompKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg border p-8 animate-in fade-in zoom-in duration-300 shadow-2xl",
                    style: {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full animate-pulse",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                                        boxShadow: `0 0 10px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 630,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                    },
                                    children: "ARTWORK SUBMISSION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 637,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                            lineNumber: 629,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-black text-white mb-6 tracking-widest uppercase",
                            children: "UPLOAD FILES"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                            lineNumber: 644,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleUploadSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                            },
                                            children: "UPLOAD SKETCH (PDF) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 650,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".pdf",
                                            onChange: (e)=>setArtworkFile(e.target.files?.[0] || null),
                                            className: "w-full text-sm border p-4 cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].obsidian,
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 656,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] mt-2 italic",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].gravel
                                            },
                                            children: "Format: Full Name_Competition Category.pdf"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 668,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 649,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                            },
                                            children: "UPLOAD CONCEPT (PDF) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 676,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".pdf",
                                            onChange: (e)=>setConceptFile(e.target.files?.[0] || null),
                                            className: "w-full text-sm border p-4 cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].obsidian,
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 682,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] mt-2 italic",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].gravel
                                            },
                                            children: "Format: Full Name_Concept_Competition Category.pdf"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 694,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 675,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-8 pt-4 border-t",
                                    style: {
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setUploadCompKey(null);
                                                setArtworkFile(null);
                                                setConceptFile(null);
                                            },
                                            className: "flex-1 py-3 font-bold text-[10px] uppercase tracking-[0.2em] border hover:bg-white/5 transition-all cursor-pointer",
                                            style: {
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            children: "ABORT"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isUploading,
                                            className: "flex-1 py-3 font-black text-[10px] uppercase tracking-[0.2em] disabled:opacity-50 transition-all cursor-pointer",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx
                                            },
                                            children: isUploading ? "UPLOADING..." : "SECURE UPLOAD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 718,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 702,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                            lineNumber: 648,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                    lineNumber: 622,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                lineNumber: 621,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(DashboardClient, "PUfYLpCr/uD3wZY4Fs2oGdJmhD8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = DashboardClient;
var _c;
__turbopack_context__.k.register(_c, "DashboardClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bcd9da2d._.js.map