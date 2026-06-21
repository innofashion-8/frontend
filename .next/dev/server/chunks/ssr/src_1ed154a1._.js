module.exports = [
"[project]/src/lib/fetch-client.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchClient",
    ()=>fetchClient
]);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
;
const fetchClient = async (path, options = {})=>{
    // 1. 🔥 KITA PAKSA SELALU NEMBAK KE LARAVEL (GAK PAKE PROXY NEXT.JS LAGI) 🔥
    const baseUrl = ("TURBOPACK compile-time value", "http://localhost:8000") || 'http://localhost:8000';
    // Pastikan path ada slash di depannya
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const url = `${baseUrl}${cleanPath}`;
    const headers = new Headers(options.headers);
    // 2. 🔥 KITA AMBIL TOKEN DARI NEXT-AUTH & MASUKIN KE HEADER 🔥
    // (Ini jalan di Client Component maupun Server Component)
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSession"])();
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
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        throw {
            code: 401,
            message: 'Unauthorized',
            isValidationError: false
        };
    }
    if (options.responseType === 'blob') {
        if (!res.ok) {
            const errorText = await res.text().catch(()=>'Error fetching file');
            throw new Error(errorText);
        }
        const blob = await res.blob();
        return blob;
    }
    const responseData = await res.json().catch(()=>({}));
    if (!res.ok) {
        if (res.status === 413) {
            throw new Error('File terlalu besar. Maksimal ukuran file adalah 2MB.');
        }
        throw {
            code: responseData.code || res.status,
            message: responseData.message || 'Terjadi Kesalahan',
            data: responseData.errors || responseData.data || null,
            isValidationError: res.status === 422 || responseData.code === 422
        };
    }
    return responseData;
};
}),
"[project]/src/components/ui/NavLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLink",
    ()=>NavLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const NavLink = ({ label, onClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "nav-underline"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/NavLink.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
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
}),
"[project]/src/components/ui/ShimmerCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShimmerCard",
    ()=>ShimmerCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const ShimmerCard = ({ href, onClick, children, className = '' })=>{
    const shimmerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
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
    const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: shimmerRef,
                style: shimmerStyle
            }, void 0, false, {
                fileName: "[project]/src/components/ui/ShimmerCard.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/src/components/opening/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NavLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ShimmerCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const Navbar = ({ isVisible })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [showNav, setShowNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const controlNavbar = ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
        window.addEventListener('scroll', controlNavbar);
        return ()=>{
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: '/'
        });
    };
    const shouldShowNavbar = isVisible && (showNav || isOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${shouldShowNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl"
                            }, void 0, false, {
                                fileName: "[project]/src/components/opening/navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 w-full h-full flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start items-center ml-2 lg:ml-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center space-x-4 xl:space-x-6",
                                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NavLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavLink"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center space-x-3 mr-4",
                                        children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                href: "/",
                                                children: "HOME"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/opening/navbar.tsx",
                                                lineNumber: 101,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                        href: "/dashboard",
                                                        children: "DASHBOARD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                        onClick: handleLogout,
                                                        children: "LOGOUT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShimmerCard"], {
                                                    href: "/login",
                                                    children: "REGISTER"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/opening/navbar.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ShimmerCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShimmerCard"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "lg:hidden text-white mr-4 z-50 relative",
                                        onClick: ()=>setIsOpen(!isOpen),
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 121,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-6 w-full",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleScroll(link.id),
                                className: "text-white font-black italic text-2xl tracking-tighter uppercase",
                                children: link.label
                            }, link.id, false, {
                                fileName: "[project]/src/components/opening/navbar.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-4 pt-6 w-full px-12",
                            children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/opening/navbar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            onClick: ()=>setIsOpen(false),
                                            className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                            children: "DASHBOARD"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/opening/navbar.tsx",
                                            lineNumber: 156,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                        children: "REGISTER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/opening/navbar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/src/services/event-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eventService",
    ()=>eventService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-ssr] (ecmascript)");
;
const eventService = {
    submitFinal: async (key, paymentProof)=>{
        try {
            const formData = new FormData();
            if (paymentProof) {
                formData.append('payment_proof', paymentProof);
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/submit`, {
                method: 'POST',
                body: formData
            });
            return res.message || 'Pendaftaran berhasil';
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    getEvent: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getEvents: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    storeEvent: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events`, {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            return {
                message: res.message || 'Event berhasil disimpan',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    updateEvent: async (key, payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}`, {
                method: 'PUT',
                body: JSON.stringify(payload)
            });
            return {
                message: res.message || 'Event berhasil diperbarui',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    deleteEvent: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}`, {
                method: 'DELETE'
            });
            return res.message || 'Event berhasil dihapus';
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    checkStatusRegistrations: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/status`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    saveDraft: async (key, paymentProof)=>{
        try {
            const formData = new FormData();
            if (paymentProof) {
                formData.append('draft_data[payment_proof]', paymentProof);
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/draft`, {
                method: 'POST',
                body: formData
            });
            return res.message || 'Draft disimpan';
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data
            };
            throw new Error(error.message);
        }
    },
    getRotatingQr: async (key, validity = 30)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}/rotating-qr?validity=${validity}`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    userScanCheckIn: async (token)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/scan-attendance`, {
                method: 'POST',
                body: JSON.stringify({
                    token
                })
            });
            return {
                message: res.message || 'Check-in berhasil',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) {
                let msg = error.message;
                if (!msg && error.data) {
                    msg = typeof error.data === 'string' ? error.data : Object.values(error.data).flat()[0];
                }
                throw {
                    isValidationError: true,
                    errors: error.data,
                    message: msg || 'Verification failed. Invalid QR Code data.'
                };
            }
            throw new Error(error.message);
        }
    },
    getEvaluationQuestions: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/evaluation-questions`, {
                method: 'GET'
            });
            return res.data || [];
        } catch (error) {
            throw new Error(error.message);
        }
    },
    submitEvaluation: async (key, answers)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/evaluation`, {
                method: 'POST',
                body: JSON.stringify({
                    answers
                })
            });
            return {
                message: res.message || 'Evaluasi berhasil disubmit',
                data: res.data
            };
        } catch (error) {
            if (error.isValidationError) {
                let msg = error.message;
                if (!msg && error.data) {
                    msg = typeof error.data === 'string' ? error.data : Object.values(error.data).flat()[0];
                }
                throw {
                    isValidationError: true,
                    errors: error.data,
                    message: msg || 'Gagal mengirim evaluasi.'
                };
            }
            throw new Error(error.message);
        }
    }
};
}),
"[project]/src/components/user/attendance/UserQrScanner.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserQrScanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@yudiel/react-qr-scanner/dist/index.esm.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/event-service.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function UserQrScanner() {
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraActive, setCameraActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [deviceId, setDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSwitching, setIsSwitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const getCameras = async ()=>{
        try {
            const allDevices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = allDevices.filter((device)=>device.kind === 'videoinput');
            setDevices(videoDevices);
        } catch (err) {
            console.warn("Camera init failed:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            getCameras();
        }, 1500);
        return ()=>clearTimeout(timer);
    }, []);
    const handleCameraChange = (e)=>{
        const newDeviceId = e.target.value || undefined;
        setIsSwitching(true);
        setDeviceId(newDeviceId);
        setTimeout(()=>{
            setIsSwitching(false);
        }, 500);
    };
    const processScan = async (token)=>{
        if (isProcessing || !token) return;
        setIsProcessing(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventService"].userScanCheckIn(token);
            // Matikan kamera jika sukses agar tidak scan berulang
            setCameraActive(false);
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'success',
                title: 'ACCESS GRANTED',
                text: res.message,
                background: '#1C1C1B',
                color: '#E2E2DE',
                confirmButtonColor: '#6A5D52',
                confirmButtonText: 'ACKNOWLEDGE',
                customClass: {
                    popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                    title: 'font-black tracking-[0.2em] uppercase text-xl text-[#E2E2DE]',
                    confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:scale-[1.02] transition-all border-2 border-[#E2E2DE]'
                }
            });
        } catch (error) {
            let errorMessage = 'Verification failed. Target node unresponsive.';
            if (error.message) {
                errorMessage = error.message;
            } else if (error.isValidationError && error.errors) {
                const firstKey = Object.keys(error.errors)[0];
                errorMessage = Array.isArray(error.errors[firstKey]) ? error.errors[firstKey][0] : error.errors[firstKey];
            }
            // Matikan kamera juga saat error agar user sadar dan tidak looping error
            setCameraActive(false);
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'error',
                title: 'ACCESS DENIED',
                text: errorMessage,
                background: '#1C1C1B',
                color: '#E2E2DE',
                confirmButtonColor: '#6A5D52',
                confirmButtonText: 'REBOOT',
                customClass: {
                    popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                    title: 'font-black tracking-[0.2em] uppercase text-xl text-red-500',
                    confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:bg-red-900 transition-all border-2 border-[#E2E2DE]'
                }
            });
        } finally{
            setIsProcessing(false);
        }
    };
    const handleScan = (detectedCodes)=>{
        if (detectedCodes.length > 0) {
            const scannedText = detectedCodes[0].rawValue;
            // If it contains a token, it's for check-in
            if (scannedText && scannedText.includes('token=')) {
                let finalToken = scannedText;
                try {
                    const urlObj = new URL(scannedText);
                    const extractedToken = urlObj.searchParams.get('token');
                    if (extractedToken) finalToken = extractedToken;
                } catch (e) {
                    const parts = scannedText.split('token=');
                    if (parts.length > 1) {
                        finalToken = parts[1].split('&')[0];
                    }
                }
                processScan(finalToken);
            } else if (scannedText && (scannedText.startsWith('http://') || scannedText.startsWith('https://'))) {
                window.location.href = scannedText;
            } else {
                processScan(scannedText);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-[#1C1C1B] p-3 sm:p-4 md:p-6 border-4 border-[#494947] shadow-[12px_12px_0px_#1a1a1a] flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full border-b-4 border-[#494947] pb-2 sm:pb-3 mb-3 sm:mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg sm:text-xl md:text-2xl font-black text-[#E2E2DE] uppercase tracking-[0.2em] text-center",
                        children: "IDENTITY LINK"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[9px] sm:text-[10px] font-bold text-[#979086] uppercase tracking-widest text-center",
                        children: "Scan Event Broadcast Node"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mb-3 sm:mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[9px] sm:text-[10px] font-black text-[#979086] uppercase block mb-1.5 sm:mb-2 tracking-widest",
                        children: "OPTICAL SENSOR"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: deviceId || "",
                        onClick: getCameras,
                        onChange: handleCameraChange,
                        className: "w-full px-2 sm:px-3 py-1.5 sm:py-2 border-2 border-[#494947] bg-[#1C1C1B] font-bold text-[#E2E2DE] text-[10px] sm:text-xs uppercase tracking-wider focus:outline-none focus:border-[#B7AC9B] transition-colors appearance-none cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Default Interface"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            devices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: device.deviceId,
                                    children: device.label || `LENS-${device.deviceId.substring(0, 5)}`
                                }, device.deviceId, false, {
                                    fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full aspect-square relative border-4 border-[#494947] bg-black overflow-hidden p-1 shadow-[8px_8px_0px_#1a1a1a] max-w-sm mx-auto",
                children: cameraActive && !isSwitching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scanner"], {
                            onScan: handleScan,
                            onError: (error)=>console.log(error?.message || error),
                            constraints: deviceId ? {
                                deviceId: {
                                    exact: deviceId
                                }
                            } : undefined,
                            components: {
                                audio: false,
                                onOff: true,
                                torch: true
                            },
                            styles: {
                                container: {
                                    width: '100%',
                                    height: '100%'
                                },
                                video: {
                                    objectFit: 'cover'
                                }
                            }
                        }, deviceId || 'default', false, {
                            fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 w-full h-[2px] bg-[#B7AC9B] shadow-[0_0_8px_#B7AC9B] animate-[scan_2s_linear_infinite]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-[#6A5D52] opacity-50 pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t-4 border-l-4 border-[#E2E2DE]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                                    lineNumber: 183,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t-4 border-r-4 border-[#E2E2DE]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b-4 border-l-4 border-[#E2E2DE]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b-4 border-r-4 border-[#E2E2DE]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                            lineNumber: 182,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full flex flex-col items-center justify-center bg-[#1C1C1B]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-black text-[#6A5D52] tracking-[0.2em] uppercase",
                        children: "SENSOR OFFLINE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                        lineNumber: 191,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 sm:mt-4 w-full flex items-center justify-between border-2 border-[#494947] p-2 bg-[#1C1C1B]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `w-2 h-2 border border-[#494947] ${cameraActive ? 'bg-[#E2E2DE] animate-pulse shadow-[0_0_8px_#E2E2DE]' : 'bg-[#6A5D52]'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#979086]",
                                children: cameraActive ? 'LINK ACTIVE' : 'CONNECTION SEVERED'
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    !cameraActive && !isProcessing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCameraActive(true),
                        className: "text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-[#1C1C1B] bg-[#E2E2DE] px-2 py-1 hover:bg-[#B7AC9B] transition-colors",
                        children: "RE-ENGAGE"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/user/attendance/UserQrScanner.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/config/palette.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/components/pages/DashboardClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/opening/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$attendance$2f$UserQrScanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/user/attendance/UserQrScanner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/palette.ts [app-ssr] (ecmascript)");
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
function DashboardClient() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    // STATE UNTUK MODAL UPLOAD
    const [uploadCompKey, setUploadCompKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [artworkFile, setArtworkFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [conceptFile, setConceptFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showQrScanner, setShowQrScanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isQrClosing, setIsQrClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: registrations, isLoading: isRegLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "my-registrations"
        ],
        queryFn: async ()=>{
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])("/api/registrations", {
                method: "GET"
            });
            return res.data;
        },
        enabled: status === "authenticated"
    });
    const handleLogout = async ()=>await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: "/login"
        });
    const handleCloseQrScanner = ()=>{
        setIsQrClosing(true);
        setTimeout(()=>{
            setShowQrScanner(false);
            setIsQrClosing(false);
        }, 200);
    };
    // ESC key handler for QR Scanner
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (e)=>{
            if (e.key === 'Escape' && showQrScanner) {
                handleCloseQrScanner();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return ()=>window.removeEventListener('keydown', handleEsc);
    }, [
        showQrScanner
    ]);
    if (status === "loading") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-transparent",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs font-bold tracking-[0.4em] uppercase animate-pulse",
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
            },
            children: "LOADING DASHBOARD..."
        }, void 0, false, {
            fileName: "[project]/src/components/pages/DashboardClient.tsx",
            lineNumber: 62,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/DashboardClient.tsx",
        lineNumber: 61,
        columnNumber: 7
    }, this);
    const getStatusColor = (statusReg)=>{
        const s = (statusReg || "").toUpperCase();
        if (s.includes("REJECT") || s.includes("TOLAK")) return "#ef4444";
        if (s.includes("VERIFI") || s.includes("ACCEPT") || s.includes("APPROV")) return "#22c55e";
        if (s.includes("PENDING") || s.includes("WAIT")) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash;
    };
    const getWhatsAppLink = (reg)=>{
        if (reg?.event) return reg.event.wa_link;
        if (reg?.competition) {
            const userRegion = (reg.region || reg.draft_data?.region || 'NATIONAL').toUpperCase();
            return userRegion === "NATIONAL" ? reg.competition.wa_link_national : reg.competition.wa_link_international;
        }
        return null;
    };
    const uploadFileInChunks = async (file, fileId, fileType)=>{
        const chunkSize = 1024 * 1024; // 1MB chunks
        const totalChunks = Math.ceil(file.size / chunkSize);
        for(let i = 0; i < totalChunks; i++){
            const start = i * chunkSize;
            const end = Math.min(start + chunkSize, file.size);
            const chunk = file.slice(start, end);
            const chunkData = new FormData();
            chunkData.append("file", chunk, file.name);
            chunkData.append("file_id", fileId);
            chunkData.append("file_type", fileType);
            chunkData.append("chunk_index", i.toString());
            chunkData.append("total_chunks", totalChunks.toString());
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions/${uploadCompKey}/chunk-upload`, {
                method: "POST",
                body: chunkData
            });
        }
    };
    const handleUploadSubmit = async (e)=>{
        e.preventDefault();
        if (!artworkFile || !conceptFile) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Both Artwork and Concept files are required!", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite}`
                }
            });
            return;
        }
        setIsUploading(true);
        try {
            const fileId = Date.now().toString() + Math.random().toString(36).substring(7);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Uploading Artwork (Please wait)...", {
                id: "uploading-toast"
            });
            await uploadFileInChunks(artworkFile, fileId, "artwork");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Uploading Concept (Please wait)...", {
                id: "uploading-toast"
            });
            await uploadFileInChunks(conceptFile, fileId, "concept");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Finalizing Submission...", {
                id: "uploading-toast"
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions/${uploadCompKey}/submission`, {
                method: "POST",
                body: JSON.stringify({
                    file_id: fileId
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].dismiss("uploading-toast");
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Artwork successfully uploaded!", {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite}`
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
            let errorMessage = "System failed to process your artwork.";
            // Handle validation errors dari backend
            if (error.isValidationError && error.errors) {
                const errorMessages = Object.values(error.errors).flat().join("<br>");
                errorMessage = errorMessages;
            } else if (error.message) {
                errorMessage = error.message;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: "UPLOAD FAILED",
                html: `<p style="font-size: 14px; line-height: 1.6;">${errorMessage}</p>`,
                icon: "error",
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                confirmButtonColor: "#ef4444",
                confirmButtonText: "RETRY",
                customClass: {
                    popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
                    title: "font-black tracking-[0.2em] uppercase",
                    confirmButton: "font-bold tracking-widest uppercase rounded-none px-6 py-2"
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
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: "PROCESSING",
                text: "Your artwork is being processed by the server. Please check again later.",
                icon: "info",
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].walnut,
                customClass: {
                    popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
                    title: "font-black tracking-[0.2em]"
                }
            });
            return;
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
            title: "YOUR SUBMISSION",
            html: `
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
          ${artworkUrl ? `<a href="${artworkUrl}" target="_blank" style="padding: 15px; border: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}; color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; text-decoration: none;" onMouseOver="this.style.backgroundColor='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}'; this.style.color='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx}'" onMouseOut="this.style.backgroundColor='transparent'; this.style.color='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}'">VIEW ARTWORK (PDF)</a>` : ""}
          ${conceptUrl ? `<a href="${conceptUrl}" target="_blank" style="padding: 15px; border: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}; color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; text-decoration: none;" onMouseOver="this.style.backgroundColor='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}'; this.style.color='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx}'" onMouseOut="this.style.backgroundColor='transparent'; this.style.color='${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}'">VIEW CONCEPT (PDF)</a>` : ""}
        </div>
      `,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
            confirmButtonText: "CLOSE",
            confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
            customClass: {
                popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
                title: "font-black tracking-[0.2em] uppercase",
                confirmButton: "font-bold tracking-widest uppercase rounded-none px-6 py-2"
            }
        });
    };
    const handleViewTicket = (regId, eventName)=>{
        const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(regId)}&size=300&margin=2`;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
            title: "ACCESS PASS",
            html: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; margin-top: 20px;">
          <p style="color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige}; font-size: 12px; letter-spacing: 2px; text-transform: uppercase;">${eventName}</p>
          
          <div style="background: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco}; padding: 15px; display: inline-block;">
            <img src="${qrUrl}" alt="QR Code" style="width: 250px; height: 250px; display: block;" />
          </div>
          
          <p style="color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash}; font-size: 10px; letter-spacing: 1px; margin-top: 15px; text-transform: uppercase;">
            TICKET ID:
          </p>
          <div style="padding: 10px; border: 1px dashed ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite}; background: rgba(0,0,0,0.5); width: 100%;">
            <strong style="color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco}; font-size: 12px; letter-spacing: 2px; word-break: break-all;">${regId}</strong>
          </div>
          
          <p style="color: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].gravel}; font-size: 9px; margin-top: 10px; font-style: italic;">
            Present this QR Code or ID at the entrance gate.
          </p>
        </div>
      `,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
            confirmButtonText: "CLOSE",
            confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].walnut,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: true
            }, void 0, false, {
                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-6xl mx-auto px-4 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 p-10 md:p-16 border bg-black/40 backdrop-blur-md relative overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(106,93,82,0.3)]",
                        style: {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-full",
                                style: {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full animate-pulse",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                                                    boxShadow: `0 0 10px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                                },
                                                children: "MAIN DASHBOARD"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowQrScanner(true),
                                                className: "w-full sm:w-auto group flex items-center gap-2 px-4 py-2 border transition-all duration-300 cursor-pointer hover:bg-white/10",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                                    backgroundColor: "rgba(28,28,27,0.5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-4 h-4 text-gray-400 group-hover:text-white transition-colors",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "2",
                                                        stroke: "currentColor",
                                                        fill: "none",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                stroke: "none",
                                                                d: "M0 0h24v24H0z",
                                                                fill: "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 320,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "4",
                                                                y: "4",
                                                                width: "6",
                                                                height: "6",
                                                                rx: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "7",
                                                                y1: "17",
                                                                x2: "7",
                                                                y2: "17.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "14",
                                                                y: "4",
                                                                width: "6",
                                                                height: "6",
                                                                rx: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 323,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "7",
                                                                y1: "7",
                                                                x2: "7",
                                                                y2: "7.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                x: "4",
                                                                y: "14",
                                                                width: "6",
                                                                height: "6",
                                                                rx: "1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "17",
                                                                y1: "7",
                                                                x2: "17",
                                                                y2: "7.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "14",
                                                                y1: "14",
                                                                x2: "17",
                                                                y2: "14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 327,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "20",
                                                                y1: "14",
                                                                x2: "20",
                                                                y2: "14.01"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "14",
                                                                y1: "14",
                                                                x2: "14",
                                                                y2: "17"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "14",
                                                                y1: "20",
                                                                x2: "17",
                                                                y2: "20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 330,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "17",
                                                                y1: "17",
                                                                x2: "20",
                                                                y2: "17"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 331,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                x1: "20",
                                                                y1: "17",
                                                                x2: "20",
                                                                y2: "20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-white",
                                                        children: "SCAN QR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 311,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>router.push("/dashboard/profile"),
                                                className: "w-full sm:w-auto group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-white/10",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                                    backgroundColor: "rgba(28,28,27,0.5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "w-4 h-4 text-gray-400 group-hover:text-white transition-colors",
                                                        viewBox: "0 0 24 24",
                                                        strokeWidth: "2",
                                                        stroke: "currentColor",
                                                        fill: "none",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                stroke: "none",
                                                                d: "M0 0h24v24H0z",
                                                                fill: "none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 349,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "7",
                                                                r: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 350,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-white",
                                                        children: "PROFILE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 340,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleLogout,
                                                className: "w-full sm:w-auto group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm cursor-pointer",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                                    backgroundColor: "rgba(28,28,27,0.5)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1 h-1 rounded-full bg-red-500 opacity-50 group-hover:opacity-100 transition-opacity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-red-400",
                                                        children: "LOG OUT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 358,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 309,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                },
                                children: [
                                    "WELCOME,",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                        },
                                        children: session?.user?.name?.split(" ")[0] || "UNKNOWN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-medium tracking-widest max-w-2xl leading-relaxed",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                },
                                children: "Choose the Innofashion Show 8 registration path you want to take or monitor your registration status."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 border p-8 bg-black/40 backdrop-blur-md",
                        style: {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-8 pb-4 border-b",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold tracking-[0.3em] uppercase",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                    },
                                    children: "[ REGISTRATION STATUS ]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 399,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, this),
                            isRegLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold tracking-[0.3em] uppercase animate-pulse",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                },
                                children: "SYNCING WITH DATABASE..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 407,
                                columnNumber: 13
                            }, this) : allRegistrations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium tracking-widest uppercase",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                },
                                children: "NO ACTIVE REGISTRATIONS FOUND."
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: allRegistrations.map((reg, idx)=>{
                                    const itemName = reg?.competition?.name || reg?.event?.title || "UNKNOWN REGISTRATION";
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
                                    const baseUrl = ("TURBOPACK compile-time value", "http://localhost:8000") || "";
                                    const artworkUrl = artworkObj?.file_path ? `${baseUrl}/storage/${artworkObj.file_path}` : null;
                                    const conceptUrl = conceptObj?.file_path ? `${baseUrl}/storage/${conceptObj.file_path}` : null;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col p-4 border transition-colors hover:bg-white/5",
                                        style: {
                                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col lg:flex-row justify-between items-start lg:items-center w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 lg:mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[9px] tracking-[0.2em] mb-1 uppercase",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                                                },
                                                                children: itemType
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 480,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-lg tracking-widest uppercase",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: itemName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 486,
                                                                columnNumber: 25
                                                            }, this),
                                                            (reg?.region || reg?.category) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-bold tracking-widest uppercase mt-2",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                                                },
                                                                children: [
                                                                    reg?.region,
                                                                    " ",
                                                                    reg?.category && `| ${reg.category}`
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 27
                                                            }, this),
                                                            isEvent && reg?.event?.start_time_human && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-bold tracking-widest uppercase mt-2 flex items-center gap-2",
                                                                style: {
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "w-3 h-3",
                                                                        style: {
                                                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                                                        },
                                                                        viewBox: "0 0 24 24",
                                                                        strokeWidth: "2",
                                                                        stroke: "currentColor",
                                                                        fill: "none",
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                stroke: "none",
                                                                                d: "M0 0h24v24H0z",
                                                                                fill: "none"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                                lineNumber: 506,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                cx: "12",
                                                                                cy: "12",
                                                                                r: "9"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                                lineNumber: 507,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                                points: "12 7 12 12 15 15"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                                lineNumber: 508,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                        lineNumber: 505,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    "START: ",
                                                                    reg.event.start_time_human
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4",
                                                        children: [
                                                            isAccepted && isSketchComp && !hasSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>setUploadCompKey(compKey),
                                                                className: "w-full sm:w-auto px-4 py-2 border font-bold text-[10px] tracking-widest uppercase text-[#E2E2DE] hover:bg-white hover:text-black transition-all cursor-pointer",
                                                                style: {
                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: "UPLOAD SUBMISSION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 519,
                                                                columnNumber: 27
                                                            }, this),
                                                            isAccepted && isSketchComp && hasSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleViewSubmission(artworkUrl, conceptUrl),
                                                                className: "w-full sm:w-auto px-4 py-2 border font-bold text-[10px] tracking-widest uppercase bg-white/10 hover:bg-white hover:text-black transition-all cursor-pointer",
                                                                style: {
                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: "VIEW SUBMISSION"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 27
                                                            }, this),
                                                            isAccepted && isEvent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleViewTicket(reg.id, itemName),
                                                                className: "w-full sm:w-auto px-4 py-2 border font-bold text-[10px] tracking-widest uppercase text-[#E2E2DE] hover:bg-[#E2E2DE] hover:text-[#1C1C1B] transition-all cursor-pointer",
                                                                style: {
                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                                },
                                                                children: "VIEW TICKET"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 547,
                                                                columnNumber: 27
                                                            }, this),
                                                            isAccepted && finalWaLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: finalWaLink,
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                className: "w-full sm:w-auto px-4 py-2 border font-bold text-[10px] tracking-widest uppercase bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer text-center",
                                                                style: {
                                                                    borderColor: '#25D366'
                                                                },
                                                                children: "JOIN WHATSAPP"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 560,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 px-4 py-2 border w-full sm:w-auto",
                                                                style: {
                                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                                                    backgroundColor: "rgba(0,0,0,0.5)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-2 h-2 rounded-full animate-pulse",
                                                                        style: {
                                                                            backgroundColor: getStatusColor(statusStr),
                                                                            boxShadow: `0 0 10px ${getStatusColor(statusStr)}`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                        lineNumber: 576,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-black tracking-widest uppercase",
                                                                        style: {
                                                                            color: getStatusColor(statusStr)
                                                                        },
                                                                        children: statusStr
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                        lineNumber: 583,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 478,
                                                columnNumber: 21
                                            }, this),
                                            isRejected && reg?.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 p-4 border border-red-500/50 bg-red-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase mb-1",
                                                        children: "REJECTION REASON:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-red-200",
                                                        children: reg.rejection_reason
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 597,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                        children: "REVISE REGISTRATION"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 593,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 470,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            "          ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>router.push("/dashboard/event"),
                                className: "group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-9xl font-black italic",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                            },
                                            children: "E"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 636,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 635,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.3em] mb-8 uppercase",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                                },
                                                children: "[ EVENT CATALOG ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 644,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                },
                                                children: "EVENTS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 650,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                                },
                                                children: "Join various exciting events, inspiring workshops, and spectacular exhibitions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 656,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 643,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-[1px] w-12 group-hover:w-24 transition-all duration-700",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 665,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                },
                                                children: "REGISTER EVENT >"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 669,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 627,
                                columnNumber: 74
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>router.push("/dashboard/competition"),
                                className: "group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-9xl font-black italic",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                            },
                                            children: "C"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 687,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 686,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.3em] mb-8 uppercase",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                                },
                                                children: "[ COMPETITION REGISTRATION ]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 695,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                },
                                                children: "COMPETITIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 701,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                                },
                                                children: "Showcase your best talent and compete on the grand stage of Innofashion Show 8."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 707,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 694,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-[1px] w-12 group-hover:w-24 transition-all duration-700",
                                                style: {
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 716,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                },
                                                children: "VIEW COMPETITIONS >"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                                lineNumber: 720,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                        lineNumber: 715,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/pages/DashboardClient.tsx",
                        lineNumber: 627,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            uploadCompKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-lg border p-8 animate-in fade-in zoom-in duration-300 shadow-2xl",
                    style: {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full animate-pulse",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                                        boxShadow: `0 0 10px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 742,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                    },
                                    children: "ARTWORK SUBMISSION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 749,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                            lineNumber: 741,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-black text-white mb-6 tracking-widest uppercase",
                            children: "UPLOAD FILES"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                            lineNumber: 756,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleUploadSubmit,
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                            },
                                            children: "UPLOAD SKETCH (PDF) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 762,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".pdf",
                                            onChange: (e)=>setArtworkFile(e.target.files?.[0] || null),
                                            className: "w-full text-sm border p-4 cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian,
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 768,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] mt-2 italic",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].gravel
                                            },
                                            children: "Format: Full Name_Competition Category.pdf | Max: 5MB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 780,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 761,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                            },
                                            children: "UPLOAD CONCEPT (PDF) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 788,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".pdf",
                                            onChange: (e)=>setConceptFile(e.target.files?.[0] || null),
                                            className: "w-full text-sm border p-4 cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian,
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 794,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] mt-2 italic",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].gravel
                                            },
                                            children: "Format: Full Name_Concept_Competition Category.pdf | Max: 5MB"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 806,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 787,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mt-8 pt-4 border-t",
                                    style: {
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>{
                                                setUploadCompKey(null);
                                                setArtworkFile(null);
                                                setConceptFile(null);
                                            },
                                            className: "flex-1 py-3 font-bold text-[10px] uppercase tracking-[0.2em] border hover:bg-white/5 transition-all cursor-pointer",
                                            style: {
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            children: "CANCEL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 818,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isUploading,
                                            className: "flex-1 py-3 font-black text-[10px] uppercase tracking-[0.2em] disabled:opacity-50 transition-all cursor-pointer",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx
                                            },
                                            children: isUploading ? "UPLOADING..." : "UPLOAD FILES"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                            lineNumber: 830,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                                    lineNumber: 814,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                            lineNumber: 760,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                    lineNumber: 734,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                lineNumber: 733,
                columnNumber: 9
            }, this),
            showQrScanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-200 ${isQrClosing ? 'opacity-0' : 'opacity-100'}`,
                onClick: handleCloseQrScanner,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative w-full max-w-lg transition-all duration-200 ${isQrClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCloseQrScanner,
                            className: "absolute -top-2 -right-2 z-10 w-8 h-8 flex items-center justify-center bg-[#1C1C1B] border-2 border-[#494947] text-white font-black text-lg hover:bg-red-600 hover:border-red-600 transition-all cursor-pointer",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                            lineNumber: 857,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$attendance$2f$UserQrScanner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/pages/DashboardClient.tsx",
                            lineNumber: 863,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/DashboardClient.tsx",
                    lineNumber: 853,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/pages/DashboardClient.tsx",
                lineNumber: 849,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_1ed154a1._.js.map