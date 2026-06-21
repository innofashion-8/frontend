(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Providers({ children }) {
    _s();
    // Setup TanStack Query
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Providers.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]()
    }["Providers.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        refetchInterval: 5 * 60,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/providers.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Providers, "qFhNRSk+4hqflxYLL9+zYF5AcuQ=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlobalErrorWatcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalErrorWatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ErrorWatcher() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ErrorWatcher.useEffect": ()=>{
            const error = searchParams?.get('error');
            if (error) {
                let title = "AKSES DITOLAK!";
                let text = "Anda tidak memiliki izin untuk mengakses halaman tersebut.";
                if (error === 'unauthenticated') {
                    title = "SESI HABIS";
                    text = "Silakan login terlebih dahulu untuk melanjutkan.";
                } else if (error === 'unauthorized_admin') {
                    text = "Halaman tersebut khusus untuk Administrator.";
                } else if (error === 'unauthorized_user') {
                    text = "Admin tidak dapat mengakses halaman khusus pengguna biasa.";
                } else if (error === 'forbidden_role') {
                    text = "Anda tidak memiliki hak akses (permission) untuk menu ini.";
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    title,
                    text,
                    icon: 'warning',
                    confirmButtonColor: '#1c1c1b',
                    confirmButtonText: 'MENGERTI',
                    customClass: {
                        popup: 'rounded-none border-4 border-[#1c1c1b]',
                        title: 'font-creato-title font-black uppercase',
                        confirmButton: 'rounded-none font-creato-title font-bold uppercase tracking-widest'
                    }
                });
                const newParams = new URLSearchParams(searchParams?.toString());
                newParams.delete('error');
                const newUrl = `${pathname}${newParams.toString() ? `?${newParams.toString()}` : ''}`;
                router.replace(newUrl, {
                    scroll: false
                });
            }
        }
    }["ErrorWatcher.useEffect"], [
        searchParams,
        pathname,
        router
    ]);
    return null;
}
_s(ErrorWatcher, "LHOpDQtt2VmxLld617QifV5/r+g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ErrorWatcher;
function GlobalErrorWatcher() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorWatcher, {}, void 0, false, {
            fileName: "[project]/src/components/GlobalErrorWatcher.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/GlobalErrorWatcher.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c1 = GlobalErrorWatcher;
var _c, _c1;
__turbopack_context__.k.register(_c, "ErrorWatcher");
__turbopack_context__.k.register(_c1, "GlobalErrorWatcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InnoFashionLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LuxuryLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const BRAND_TEXT = "INNOFASHION SHOW";
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
const SPARKLE_POSITIONS = [
    {
        top: "8%",
        left: "12%",
        delay: 0.0,
        duration: 2.0
    },
    {
        top: "12%",
        right: "10%",
        delay: 0.15,
        duration: 1.8
    },
    {
        top: "78%",
        left: "8%",
        delay: 0.3,
        duration: 2.2
    },
    {
        top: "82%",
        right: "15%",
        delay: 0.1,
        duration: 1.9
    },
    {
        top: "50%",
        left: "3%",
        delay: 0.2,
        duration: 2.4
    },
    {
        top: "48%",
        right: "4%",
        delay: 0.25,
        duration: 1.7
    },
    {
        top: "25%",
        left: "45%",
        delay: 0.35,
        duration: 2.1
    },
    {
        top: "88%",
        left: "50%",
        delay: 0.05,
        duration: 2.0
    },
    {
        top: "35%",
        left: "5%",
        delay: 0.4,
        duration: 1.8
    },
    {
        top: "65%",
        right: "6%",
        delay: 0.1,
        duration: 2.3
    },
    {
        top: "18%",
        left: "30%",
        delay: 0.3,
        duration: 1.9
    },
    {
        top: "75%",
        right: "35%",
        delay: 0.2,
        duration: 2.1
    }
];
const FLOAT_PARTICLES = [
    {
        left: "20%",
        bottom: "30%",
        delay: 0,
        duration: 4
    },
    {
        left: "35%",
        bottom: "25%",
        delay: 1.2,
        duration: 3.5
    },
    {
        left: "50%",
        bottom: "35%",
        delay: 0.5,
        duration: 4.5
    },
    {
        left: "65%",
        bottom: "28%",
        delay: 1.8,
        duration: 3.8
    },
    {
        left: "80%",
        bottom: "32%",
        delay: 0.8,
        duration: 4.2
    },
    {
        left: "25%",
        bottom: "40%",
        delay: 2.0,
        duration: 3.2
    },
    {
        left: "70%",
        bottom: "38%",
        delay: 1.5,
        duration: 3.6
    },
    {
        left: "45%",
        bottom: "20%",
        delay: 2.5,
        duration: 4.0
    }
];
function LuxuryLoader({ isLoading }) {
    _s();
    const [scrambledText, setScrambledText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isRevealing, setIsRevealing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const iterationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const displayedText = isLoading ? scrambledText : BRAND_TEXT;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LuxuryLoader.useEffect": ()=>{
            setMounted(true);
        }
    }["LuxuryLoader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LuxuryLoader.useEffect": ()=>{
            let intervalId;
            if (isLoading) {
                // Start the scrambling effect slowly
                intervalId = setInterval({
                    "LuxuryLoader.useEffect": ()=>{
                        setScrambledText(BRAND_TEXT.split("").map({
                            "LuxuryLoader.useEffect": (char, index)=>{
                                if (index < iterationRef.current) {
                                    return char;
                                }
                                return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                            }
                        }["LuxuryLoader.useEffect"]).join(""));
                        if (iterationRef.current >= BRAND_TEXT.length) {
                            clearInterval(intervalId);
                            setIsRevealing(true);
                        }
                        iterationRef.current += 1 / 3; // Controls the speed of reveal
                    }
                }["LuxuryLoader.useEffect"], 50);
            } else {
                // Instantly reveal the full text when loading is finished
                setScrambledText(BRAND_TEXT);
                setIsRevealing(true);
            }
            return ({
                "LuxuryLoader.useEffect": ()=>{
                    if (intervalId) clearInterval(intervalId);
                }
            })["LuxuryLoader.useEffect"];
        }
    }["LuxuryLoader.useEffect"], [
        isLoading
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden pointer-events-auto",
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.8,
                ease: "easeIn",
                delay: 0.5
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "silver-ambient",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 2,
                        delay: 0.3
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/InnoFashionLoader.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "silver-ambient-secondary",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 2,
                        delay: 0.8
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/InnoFashionLoader.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        scale: 0.9,
                        opacity: 0
                    },
                    transition: {
                        duration: 0.4,
                        ease: "easeInOut"
                    },
                    className: "mb-8 relative inline-flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo_INNOF.png",
                            alt: "INNOFASHION SHOW",
                            width: 280,
                            height: 70,
                            priority: true,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InnoFashionLoader.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "logo-shimmer-silver z-20"
                        }, void 0, false, {
                            fileName: "[project]/src/components/InnoFashionLoader.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InnoFashionLoader.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 1.2,
                        delay: 0.1
                    },
                    className: "flex flex-col items-center justify-center gap-4 relative z-50 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-mono text-xs tracking-[0.3em] text-white/80 h-4 text-silver-glow whitespace-nowrap flex",
                            children: displayedText.split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    exit: i === 3 ? {
                                        scale: 600,
                                        opacity: 1,
                                        transition: {
                                            duration: 1.5,
                                            ease: [
                                                0.32,
                                                0,
                                                0.67,
                                                0
                                            ]
                                        }
                                    } : {
                                        opacity: 0,
                                        transition: {
                                            duration: 0.2,
                                            ease: "easeOut"
                                        }
                                    },
                                    style: i === 3 ? {
                                        display: "inline-block",
                                        transformOrigin: "center",
                                        position: "relative",
                                        zIndex: 100
                                    } : {
                                        display: "inline-block"
                                    },
                                    children: char === " " ? "\u00A0" : char
                                }, i, false, {
                                    fileName: "[project]/src/components/InnoFashionLoader.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/InnoFashionLoader.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full z-20 mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute top-0 left-0 h-full silver-progress-fill",
                                initial: {
                                    width: "0%"
                                },
                                animate: {
                                    width: isRevealing ? "100%" : "80%"
                                },
                                transition: {
                                    duration: isRevealing ? 0.5 : 2.5,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/InnoFashionLoader.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InnoFashionLoader.tsx",
                            lineNumber: 168,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/InnoFashionLoader.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this),
                SPARKLE_POSITIONS.map((spark, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "sparkle",
                        style: {
                            top: spark.top,
                            left: spark.left,
                            right: spark.right
                        },
                        exit: {
                            opacity: 0
                        },
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: isRevealing ? 0.5 : 0.8
                        },
                        transition: {
                            opacity: {
                                duration: 0.6,
                                delay: spark.delay
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: !isRevealing ? "sparkle-swing" : "sparkle-stopped",
                            style: {
                                "--swing-delay": `${spark.delay}s`,
                                "--swing-duration": `${spark.duration}s`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `sparkle-inner ${isRevealing ? "sparkle-settled" : ""}`,
                                style: {
                                    "--delay": `${spark.delay}s`,
                                    "--duration": `${spark.duration}s`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/InnoFashionLoader.tsx",
                                lineNumber: 214,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/InnoFashionLoader.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this)
                    }, `sparkle-${i}`, false, {
                        fileName: "[project]/src/components/InnoFashionLoader.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, this)),
                FLOAT_PARTICLES.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "float-particle",
                        style: {
                            left: p.left,
                            bottom: p.bottom,
                            background: "rgba(255,255,255,0.4)",
                            boxShadow: "0 0 10px rgba(230,230,250,0.5)",
                            "--float-delay": `${p.delay}s`,
                            "--float-duration": `${p.duration}s`
                        },
                        initial: {
                            opacity: 0
                        },
                        exit: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 0.3,
                            delay: 1.0 + p.delay
                        }
                    }, `float-${i}`, false, {
                        fileName: "[project]/src/components/InnoFashionLoader.tsx",
                        lineNumber: 228,
                        columnNumber: 13
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/InnoFashionLoader.tsx",
            lineNumber: 89,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/InnoFashionLoader.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(LuxuryLoader, "JYNJyIMLoQLCAV6rro1nNGaYyDY=");
_c = LuxuryLoader;
var _c;
__turbopack_context__.k.register(_c, "LuxuryLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GlobalLoader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InnoFashionLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InnoFashionLoader.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function GlobalLoader() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Skip loader untuk halaman admin dan homepage
    const isAdminPage = pathname?.startsWith('/admin');
    const isHomePage = pathname === '/';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalLoader.useEffect": ()=>{
            // Jangan tampilkan loader kalau di halaman admin atau homepage
            if (isAdminPage || isHomePage) {
                setIsLoading(false);
                return;
            }
            // Trigger loader on route change
            setIsLoading(true);
            // Provide enough time for animation and fake loading progress
            const timer = setTimeout({
                "GlobalLoader.useEffect.timer": ()=>{
                    setIsLoading(false);
                }
            }["GlobalLoader.useEffect.timer"], 2600); // Dikurangi dari 2800ms ke 1500ms
            return ({
                "GlobalLoader.useEffect": ()=>clearTimeout(timer)
            })["GlobalLoader.useEffect"];
        }
    }["GlobalLoader.useEffect"], [
        pathname,
        isAdminPage,
        isHomePage
    ]);
    // Jangan render loader sama sekali kalau di admin atau homepage
    if (isAdminPage || isHomePage) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InnoFashionLoader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        isLoading: isLoading
    }, void 0, false, {
        fileName: "[project]/src/components/GlobalLoader.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_s(GlobalLoader, "YDgxyTMkglChBUCWNNB3dsm33wE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = GlobalLoader;
var _c;
__turbopack_context__.k.register(_c, "GlobalLoader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0028a887._.js.map