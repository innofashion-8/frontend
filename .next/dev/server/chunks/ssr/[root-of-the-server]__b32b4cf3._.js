module.exports = [
"[project]/src/components/admin/UniversalTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversalTable",
    ()=>UniversalTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function UniversalTable({ columns, data, isLoading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-x-auto border-[3px] border-[#1c1c1b] bg-[#fdfdfd] shadow-[8px_8px_0px_#1c1c1b] mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-left border-collapse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "bg-[#1c1c1b] text-[#E2E2DE] font-creato-title uppercase tracking-widest text-xs md:text-sm",
                        children: columns.map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-4 border-b-2 border-[#1c1c1b] font-black",
                                children: col.header
                            }, idx, false, {
                                fileName: "[project]/src/components/admin/UniversalTable.tsx",
                                lineNumber: 24,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/UniversalTable.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/UniversalTable.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "font-creato-body text-[#1c1c1b]",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: columns.length,
                            className: "p-10 text-center font-bold animate-pulse text-[#6A5D52]",
                            children: "LOADING_DATA..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/UniversalTable.tsx",
                            lineNumber: 30,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/UniversalTable.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this) : data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            colSpan: columns.length,
                            className: "p-10 text-center font-bold text-[#979086]",
                            children: "NO_DATA_FOUND."
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/UniversalTable.tsx",
                            lineNumber: 32,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/UniversalTable.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this) : data.map((item, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b-2 border-[#1c1c1b] hover:bg-[#dcdad9]/40 transition-colors group",
                            children: columns.map((col, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    className: "p-4",
                                    children: col.render ? col.render(item, rowIdx) : item[col.key]
                                }, colIdx, false, {
                                    fileName: "[project]/src/components/admin/UniversalTable.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, this))
                        }, rowIdx, false, {
                            fileName: "[project]/src/components/admin/UniversalTable.tsx",
                            lineNumber: 35,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/UniversalTable.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/UniversalTable.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/UniversalTable.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/admin/UniversalPagination.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversalPagination",
    ()=>UniversalPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function UniversalPagination({ meta, onPageChange }) {
    if (!meta || meta.last_page <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-between gap-4 mt-6 font-creato-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-bold uppercase text-[#484847]",
                children: [
                    "Showing ",
                    meta.from,
                    " to ",
                    meta.to,
                    " of ",
                    meta.total,
                    " Entries"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/UniversalPagination.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: meta.current_page === 1,
                        onClick: ()=>onPageChange(meta.current_page - 1),
                        className: "px-4 py-2 border-[3px] border-[#1c1c1b] font-black uppercase text-xs hover:bg-[#1c1c1b] hover:text-white disabled:opacity-30 transition-all shadow-[4px_4px_0px_#1c1c1b] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white",
                        children: "PREV"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/UniversalPagination.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: meta.current_page === meta.last_page,
                        onClick: ()=>onPageChange(meta.current_page + 1),
                        className: "px-4 py-2 border-[3px] border-[#1c1c1b] font-black uppercase text-xs hover:bg-[#1c1c1b] hover:text-white disabled:opacity-30 transition-all shadow-[4px_4px_0px_#1c1c1b] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white",
                        children: "NEXT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/UniversalPagination.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/UniversalPagination.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/UniversalPagination.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/pages/api/auth/[...nextauth].ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth-service.ts [app-ssr] (ecmascript)");
;
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            id: "google-admin",
            name: "Admin Google",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            id: "google-user",
            name: "User Google",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        async signIn ({ account, profile }) {
            if (account?.provider === "google-admin") {
                const email = profile?.email || "";
                if (!email.endsWith("@john.petra.ac.id")) {
                    return "/admin/login?error=EmailNotAllowed";
                }
            }
            return true;
        },
        // 🔥 FIX INFINITE LOOP: NANGKEP TRIGGER "update" DARI HALAMAN REGISTRASI 🔥
        async jwt ({ token, account, trigger, session }) {
            // 1. TANGKAP SINYAL UPDATE DARI CLIENT
            if (trigger === "update" && session?.is_profile_complete !== undefined) {
                token.is_profile_complete = session.is_profile_complete;
            }
            // 2. PROSES LOGIN ADMIN
            if (account?.provider === "google-admin" && account.access_token) {
                try {
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].loginGoogleAdmin(account.access_token);
                    token.accessToken = data.token;
                    token.role = data.role;
                    token.division = data.division;
                    token.is_profile_complete = data.is_profile_complete;
                    token.permissions = data.permissions;
                    token.userType = data.userType;
                } catch (e) {
                    throw new Error("ADMIN_ERROR:" + (e.message || "Akses ditolak. Anda bukan Admin."));
                }
            } else if (account?.provider === "google-user" && account.access_token) {
                try {
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].loginGoogleUser(account.access_token);
                    token.accessToken = data.token;
                    token.role = data.role;
                    token.division = data.division;
                    token.is_profile_complete = data.is_profile_complete;
                    token.permissions = data.permissions;
                    token.userType = data.userType;
                } catch (e) {
                    throw new Error(e.message || "Gagal login dengan Google");
                }
            }
            return token;
        },
        async session ({ session, token }) {
            session.accessToken = token.accessToken;
            session.user.role = token.role || null;
            session.user.permissions = token.permissions || [];
            session.user.division = token.division;
            session.user.is_profile_complete = token.is_profile_complete || false;
            session.user.userType = token.userType;
            return session;
        }
    },
    pages: {
        signIn: '/login',
        error: '/login'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(authOptions);
}),
"[project]/src/services/registration-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registrationService",
    ()=>registrationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-backend.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/api/auth/[...nextauth].ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-ssr] (ecmascript)");
;
;
;
;
const registrationService = {
    async getEventRegistrations (page = 1) {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authOptions"]);
        const token = session?.accessToken;
        if (!token) {
            throw new Error("Unauthorized: Tidak ada token session.");
        }
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBackend"])(`/admin/registrations/events?page=${page}`, {
            method: 'GET',
            token: token
        });
        const response = await res.json();
        if (response.success && response.data) {
            return response.data;
        }
        throw new Error(response.message || "Gagal mengambil data dari server");
    },
    async updateEventStatus (id, status, rejection_reason) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/registrations/events/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({
                status,
                rejection_reason
            })
        });
    },
    async getCompetitionsRegistrations (page = 1) {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authOptions"]);
        const token = session?.accessToken;
        if (!token) {
            throw new Error("Unauthorized: Tidak ada token session.");
        }
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBackend"])(`/admin/registrations/competitions?page=${page}`, {
            method: 'GET',
            token: token
        });
        const response = await res.json();
        if (response.success && response.data) {
            return response.data;
        }
        throw new Error(response.message || "Gagal mengambil data dari server");
    },
    async updateCompetitionStatus (id, status, rejection_reason) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/registrations/competitions/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({
                status,
                rejection_reason
            })
        });
    }
};
}),
"[project]/src/components/admin/competition-registration/RegistrationClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetitionRegistrationClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/UniversalTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalPagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/UniversalPagination.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$registration$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/registration-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function CompetitionRegistrationClient({ data, meta, title }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [selectedDetail, setSelectedDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isClosing, setIsClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showFilterModal, setShowFilterModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterUserType, setFilterUserType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ALL');
    const [filterCompetitionCategory, setFilterCompetitionCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ALL');
    // Filter Kategori (Intermediate / Advanced)
    const competitionCategories = Array.from(new Set(data.map((reg)=>reg.category).filter(Boolean)));
    const filteredData = data.filter((reg)=>{
        const matchSearch = reg.user.name.toLowerCase().includes(searchQuery.toLowerCase()) || reg.user.email.toLowerCase().includes(searchQuery.toLowerCase()) || reg.user.type.toLowerCase().includes(searchQuery.toLowerCase()) || reg.competition.name.toLowerCase().includes(searchQuery.toLowerCase()) || reg.status.toLowerCase().includes(searchQuery.toLowerCase());
        const matchUserType = filterUserType === 'ALL' || reg.user.type === filterUserType;
        const matchCompetitionCategory = filterCompetitionCategory === 'ALL' || reg.category === filterCompetitionCategory;
        return matchSearch && matchUserType && matchCompetitionCategory;
    });
    const handleCloseModal = ()=>{
        setIsClosing(true);
        setTimeout(()=>{
            setSelectedDetail(null);
            setIsClosing(false);
        }, 200);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEsc = (e)=>{
            if (e.key === 'Escape') {
                if (showFilterModal) {
                    setShowFilterModal(false);
                } else if (selectedDetail) {
                    handleCloseModal();
                }
            }
        };
        window.addEventListener('keydown', handleEsc);
        return ()=>window.removeEventListener('keydown', handleEsc);
    }, [
        selectedDetail,
        showFilterModal
    ]);
    const handleUpdateStatus = async (id, newStatus)=>{
        let rejectionReason = "";
        if (newStatus === "REJECTED") {
            const { value: reason, isDismissed } = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'ALASAN PENOLAKAN',
                input: 'textarea',
                inputPlaceholder: 'Tuliskan alasan penolakan...',
                showCancelButton: true,
                confirmButtonColor: '#1c1c1b',
                cancelButtonColor: '#d33',
                confirmButtonText: 'TOLAK PESERTA',
                cancelButtonText: 'BATAL',
                inputValidator: (value)=>{
                    if (!value) return 'Alasan penolakan wajib diisi!';
                },
                customClass: {
                    popup: 'rounded-none border-4 border-[#1c1c1b]',
                    confirmButton: 'rounded-none font-bold uppercase tracking-widest text-lg',
                    cancelButton: 'rounded-none font-bold uppercase tracking-widest text-lg',
                    input: 'border-2 border-[#1c1c1b] rounded-none focus:ring-0 text-lg p-3'
                }
            });
            if (isDismissed) {
                router.refresh();
                return;
            }
            rejectionReason = reason;
        } else {
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'KONFIRMASI UPDATE',
                text: `Ubah status menjadi ${newStatus}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#1c1c1b',
                cancelButtonColor: '#d33',
                confirmButtonText: 'YA, PROSES',
                customClass: {
                    popup: 'rounded-none border-4 border-[#1c1c1b]',
                    confirmButton: 'rounded-none font-bold uppercase tracking-widest text-lg',
                    cancelButton: 'rounded-none font-bold uppercase tracking-widest text-lg'
                }
            });
            if (!result.isConfirmed) {
                router.refresh();
                return;
            }
        }
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'SEDANG MEMPROSES...',
                allowOutsideClick: false,
                didOpen: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].showLoading(),
                customClass: {
                    popup: 'rounded-none border-4 border-[#1c1c1b]'
                }
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$registration$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registrationService"].updateCompetitionStatus(id, newStatus, rejectionReason);
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'BERHASIL!',
                icon: 'success',
                confirmButtonColor: '#1c1c1b',
                customClass: {
                    popup: 'rounded-none border-4 border-[#1c1c1b]'
                }
            });
            if (selectedDetail && selectedDetail.id === id) {
                setSelectedDetail((prev)=>prev ? {
                        ...prev,
                        status: newStatus,
                        rejection_reason: rejectionReason
                    } : null);
            }
            router.refresh();
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                title: 'GAGAL!',
                text: error.message || 'Terjadi kesalahan',
                icon: 'error',
                confirmButtonColor: '#1c1c1b',
                customClass: {
                    popup: 'rounded-none border-4 border-[#1c1c1b]'
                }
            });
            router.refresh();
        }
    };
    const columns = [
        {
            header: "NO",
            key: "id",
            render: (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-black text-lg",
                    children: (meta.current_page - 1) * meta.per_page + (index + 1)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 155,
                    columnNumber: 29
                }, this)
        },
        {
            header: "NAMA PESERTA / KETUA",
            key: "name",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold uppercase text-base",
                    children: item.user.name
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
        },
        {
            header: "COMPETITION",
            key: "competition",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm md:text-base font-bold block max-w-[200px] leading-snug",
                    children: item.competition.name
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 167,
                    columnNumber: 25
                }, this)
        },
        {
            header: "GROUP NAME",
            key: "group_name",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold",
                    children: item.group_name || '-'
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
        },
        {
            header: "REGION / TIER",
            key: "region",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold uppercase block",
                            children: item.region || '-'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 181,
                            columnNumber: 12
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] text-[#6A5D52] font-bold uppercase block",
                            children: item.category || '-'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 182,
                            columnNumber: 12
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this)
        },
        {
            header: "STATUS",
            key: "status",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: item.status,
                    onChange: (e)=>handleUpdateStatus(item.id, e.target.value),
                    className: `px-3 py-1.5 border-[3px] border-[#1c1c1b] font-black text-xs uppercase cursor-pointer outline-none shadow-[4px_4px_0px_#1c1c1b] transition-colors
            ${item.status === 'VERIFIED' ? 'bg-green-400' : item.status === 'REJECTED' ? 'bg-red-500 text-white' : 'bg-yellow-400'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "PENDING",
                            children: "PENDING"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "VERIFIED",
                            children: "VERIFIED"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "REJECTED",
                            children: "REJECTED"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this)
        },
        {
            header: "AKSI",
            key: "action",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSelectedDetail(item),
                    className: "px-4 py-1.5 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white text-xs font-black hover:bg-[#1c1c1b] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider",
                    children: "DETAIL"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 219,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Cari nama, email, lomba, grup, status...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] placeholder:text-[#6A5D52] placeholder:font-medium focus:outline-none shadow-[4px_4px_0px_#1c1c1b]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchQuery(''),
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#1c1c1b] hover:text-[#6A5D52] font-black text-xl",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowFilterModal(true),
                                className: "px-6 py-3 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase cursor-pointer hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-5 h-5",
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
                                                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                lineNumber: 249,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    "FILTER",
                                    (filterUserType !== 'ALL' || filterCompetitionCategory !== 'ALL') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-black",
                                        children: "!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    (searchQuery || filterUserType !== 'ALL' || filterCompetitionCategory !== 'ALL') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm font-bold text-[#6A5D52]",
                        children: [
                            "Found ",
                            filteredData.length,
                            " result",
                            filteredData.length !== 1 ? 's' : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] mb-6 overflow-x-auto",
                children: filteredData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-20 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 text-[#1c1c1b]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-24 h-24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9 11l3 3l8 -8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                        lineNumber: 269,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                lineNumber: 268,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3",
                            children: searchQuery ? 'No results found' : 'No registrations yet'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#6A5D52] font-bold text-center",
                            children: searchQuery ? 'Try a different search term' : 'No competition registrations found'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 266,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniversalTable"], {
                    columns: columns,
                    data: filteredData
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 276,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalPagination$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UniversalPagination"], {
                meta: meta,
                onPageChange: (page)=>router.push(`?page=${page}`)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            showFilterModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200",
                onClick: ()=>setShowFilterModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] w-full max-w-md p-8 relative",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowFilterModal(false),
                            className: "absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-black font-creato-title uppercase border-b-4 border-[#1c1c1b] pb-4 mb-6",
                            children: "Filter Options"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 301,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider",
                                            children: "User Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filterUserType,
                                            onChange: (e)=>setFilterUserType(e.target.value),
                                            className: "w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ALL",
                                                    children: "ALL TYPES"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "INTERNAL",
                                                    children: "INTERNAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "EXTERNAL",
                                                    children: "EXTERNAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 306,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider",
                                            children: "Tier (Category)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 320,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filterCompetitionCategory,
                                            onChange: (e)=>setFilterCompetitionCategory(e.target.value),
                                            className: "w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ALL",
                                                    children: "ALL TIERS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 19
                                                }, this),
                                                competitionCategories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: category || '',
                                                        children: category || '-'
                                                    }, category || 'empty', false, {
                                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 319,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setFilterUserType('ALL');
                                        setFilterCompetitionCategory('ALL');
                                    },
                                    className: "flex-1 py-3 px-4 border-[3px] border-[#1c1c1b] bg-white text-[#1c1c1b] font-black uppercase hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowFilterModal(false),
                                    className: "flex-1 py-3 px-4 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider",
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 334,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 290,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, this),
            selectedDetail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-in-out ${isClosing ? 'opacity-0' : 'opacity-100'}`,
                onClick: handleCloseModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] w-full max-w-5xl max-h-[90vh] overflow-y-auto p-8 md:p-10 relative transition-all duration-200 ease-in-out ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCloseModal,
                            className: "absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer z-10",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 364,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row md:items-end justify-between mb-8 border-b-4 border-[#1c1c1b] pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-4xl font-black font-creato-title uppercase text-[#1C1C1B]",
                                    children: selectedDetail.group_name || selectedDetail.user.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 372,
                                    columnNumber: 16
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 md:mt-0 text-right",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-black text-[#6A5D52] uppercase block",
                                            children: selectedDetail.competition.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 376,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-block mt-1 px-3 py-1 text-xs font-black border-2 border-[#1c1c1b] ${selectedDetail.status === 'VERIFIED' ? 'bg-green-400 text-[#1c1c1b]' : selectedDetail.status === 'REJECTED' ? 'bg-red-400 text-white' : 'bg-yellow-300 text-[#1c1c1b]'}`,
                                            children: selectedDetail.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 375,
                                    columnNumber: 16
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 371,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black text-[#1C1C1B] uppercase mb-4 bg-[#1C1C1B] text-white py-2 px-4 inline-block",
                                    children: "Data Peserta / Anggota Tim"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 389,
                                    columnNumber: 15
                                }, this),
                                selectedDetail.members && selectedDetail.members.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: selectedDetail.members.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-5 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 bg-[#1c1c1b] text-white text-[10px] font-black px-3 py-1 uppercase",
                                                    children: member.member_order === 1 ? 'LEADER' : `MEMBER ${member.member_order}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black text-[#6A5D52] uppercase tracking-wider",
                                                                    children: "Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-[#1c1c1b] text-base",
                                                                    children: member.user?.name || '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 400,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black text-[#6A5D52] uppercase tracking-wider",
                                                                    children: "Email / Phone"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                    lineNumber: 405,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-[#1c1c1b] text-sm",
                                                                    children: member.user?.email || '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                    lineNumber: 406,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-bold text-[#1c1c1b] text-sm",
                                                                    children: member.user?.phone || '-'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                    lineNumber: 407,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 404,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pt-3 border-t-2 border-dashed border-gray-300",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[10px] font-black text-[#6A5D52] uppercase tracking-wider mb-2",
                                                                    children: "Dokumen Identitas"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 27
                                                                }, this),
                                                                member.user?.id_card_path || member.user?.ktm_path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: `${process.env.NEXT_PUBLIC_API_URL}/storage/${member.user.id_card_path || member.user.ktm_path}`,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: "px-4 py-1.5 border-[2px] border-[#1c1c1b] bg-[#E2E2DE] text-[#1c1c1b] text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all inline-block cursor-pointer tracking-wider",
                                                                    children: [
                                                                        "BUKA ",
                                                                        member.user.id_card_path ? 'KTP / ID CARD' : 'KTM'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs font-bold text-red-500 italic",
                                                                    children: "BELUM UPLOAD KTP/KTM!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                    lineNumber: 423,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 399,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, member.id, true, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 394,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 392,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-red-500",
                                    children: "Error: Tidak ada data anggota ditemukan."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 431,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 388,
                            columnNumber: 13
                        }, this),
                        selectedDetail.submissions && selectedDetail.submissions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black text-[#1C1C1B] uppercase mb-4 bg-[#6A5D52] text-white py-2 px-4 inline-block",
                                    children: "Karya & Konsep (Submissions)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 438,
                                    columnNumber: 18
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-5",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: selectedDetail.submissions.map((sub)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-2 border-[#1c1c1b] p-4 flex justify-between items-center bg-[#E2E2DE]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-black text-[#1c1c1b] uppercase tracking-wider",
                                                                children: sub.file_type
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                lineNumber: 444,
                                                                columnNumber: 30
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-[#6A5D52] font-bold",
                                                                children: [
                                                                    "Uploaded: ",
                                                                    new Date(sub.submitted_at).toLocaleDateString('id-ID')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: `${process.env.NEXT_PUBLIC_API_URL}/storage/${sub.file_path}`,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "px-4 py-2 border-[2px] border-[#1c1c1b] bg-[#1c1c1b] text-white text-xs font-black hover:bg-white hover:text-[#1c1c1b] transition-all inline-block cursor-pointer",
                                                        children: "UNDUH PDF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 28
                                                    }, this)
                                                ]
                                            }, sub.id, true, {
                                                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                lineNumber: 442,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                        lineNumber: 440,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 439,
                                    columnNumber: 18
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 437,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2",
                                    children: "Registration Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#6A5D52] text-[10px] font-black uppercase tracking-wider mb-1",
                                                            children: "Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-[#1c1c1b]",
                                                            children: new Date(selectedDetail.created_at).toLocaleDateString('id-ID')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 467,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#6A5D52] text-[10px] font-black uppercase tracking-wider mb-1",
                                                            children: "Region"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-[#1c1c1b] uppercase",
                                                            children: selectedDetail.region || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#6A5D52] text-[10px] font-black uppercase tracking-wider mb-1",
                                                            children: "Tier / Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 476,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-[#1c1c1b] uppercase",
                                                            children: selectedDetail.category || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 477,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 475,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#6A5D52] text-[10px] font-black uppercase tracking-wider mb-1",
                                                            children: "Inst. / Asal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 480,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-[#1c1c1b] uppercase",
                                                            children: selectedDetail.user?.institution || '-'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                            lineNumber: 481,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 466,
                                            columnNumber: 17
                                        }, this),
                                        selectedDetail.status === 'REJECTED' && selectedDetail.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 pt-4 border-t-2 border-dashed border-[#1c1c1b]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-black text-red-600 uppercase tracking-wider mb-2",
                                                    children: "Rejection Reason"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-sm text-red-600 bg-red-100 p-3 border-[2px] border-red-600",
                                                    children: selectedDetail.rejection_reason
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                            lineNumber: 486,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                                    lineNumber: 465,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 463,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCloseModal,
                            className: "w-full cursor-pointer py-4 font-black uppercase text-[#1c1c1b] bg-[#E2E2DE] border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-widest mt-4",
                            children: "TUTUP PANEL"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                    lineNumber: 360,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
                lineNumber: 356,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/competition-registration/RegistrationClient.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b32b4cf3._.js.map