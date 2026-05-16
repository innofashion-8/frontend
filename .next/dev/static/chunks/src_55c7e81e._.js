(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/admin/UniversalTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversalTable",
    ()=>UniversalTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function UniversalTable({ columns, data, isLoading }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full overflow-x-auto border-[3px] border-[#1c1c1b] bg-[#fdfdfd] shadow-[8px_8px_0px_#1c1c1b] mb-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-left border-collapse",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "bg-[#1c1c1b] text-[#E2E2DE] font-creato-title uppercase tracking-widest text-xs md:text-sm",
                        children: columns.map((col, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    className: "font-creato-body text-[#1c1c1b]",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                    }, this) : data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
                    }, this) : data.map((item, rowIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                            className: "border-b-2 border-[#1c1c1b] hover:bg-[#dcdad9]/40 transition-colors group",
                            children: columns.map((col, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
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
_c = UniversalTable;
var _c;
__turbopack_context__.k.register(_c, "UniversalTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/UniversalPagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UniversalPagination",
    ()=>UniversalPagination
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function UniversalPagination({ meta, onPageChange }) {
    // Debug log
    console.log('UniversalPagination meta:', meta);
    const pMeta = meta?.meta || meta;
    if (!pMeta || !pMeta.last_page || pMeta.last_page <= 1) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center justify-between gap-4 mt-6 font-creato-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-bold uppercase text-[#484847]",
                children: [
                    "Showing ",
                    pMeta.from || 0,
                    " to ",
                    pMeta.to || 0,
                    " of ",
                    pMeta.total || 0,
                    " Entries"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/UniversalPagination.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: pMeta.current_page === 1,
                        onClick: ()=>onPageChange(pMeta.current_page - 1),
                        className: "px-4 py-2 border-[3px] border-[#1c1c1b] font-black uppercase text-xs hover:bg-[#1c1c1b] hover:text-white disabled:opacity-30 transition-all shadow-[4px_4px_0px_#1c1c1b] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white",
                        children: "PREV"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/UniversalPagination.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: pMeta.current_page === pMeta.last_page,
                        onClick: ()=>onPageChange(pMeta.current_page + 1),
                        className: "px-4 py-2 border-[3px] border-[#1c1c1b] font-black uppercase text-xs hover:bg-[#1c1c1b] hover:text-white disabled:opacity-30 transition-all shadow-[4px_4px_0px_#1c1c1b] active:shadow-none active:translate-x-1 active:translate-y-1 bg-white",
                        children: "NEXT"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/UniversalPagination.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/UniversalPagination.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/UniversalPagination.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = UniversalPagination;
var _c;
__turbopack_context__.k.register(_c, "UniversalPagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/pages/api/auth/[...nextauth].ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth-service.ts [app-client] (ecmascript)");
;
;
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            id: "google-admin",
            name: "Admin Google",
            clientId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GOOGLE_CLIENT_ID,
            clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GOOGLE_CLIENT_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            id: "google-user",
            name: "User Google",
            clientId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GOOGLE_CLIENT_ID,
            clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GOOGLE_CLIENT_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            id: "credentials",
            name: "Credentials",
            credentials: {
                token: {
                    label: "Token",
                    type: "text"
                },
                user: {
                    label: "User",
                    type: "text"
                }
            },
            async authorize (credentials) {
                if (!credentials?.token || !credentials?.user) return null;
                try {
                    const userData = JSON.parse(credentials.user);
                    return {
                        id: userData.id,
                        name: userData.name,
                        email: userData.email,
                        accessToken: credentials.token,
                        is_profile_complete: userData.is_profile_complete,
                        userType: userData.type
                    };
                } catch (error) {
                    return null;
                }
            }
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
        async jwt ({ token, account, user, trigger, session }) {
            // 1. TANGKAP SINYAL UPDATE DARI CLIENT
            if (trigger === "update" && session?.is_profile_complete !== undefined) {
                token.is_profile_complete = session.is_profile_complete;
            }
            // 2. CREDENTIALS LOGIN (IMPERSONATE)
            if (account?.provider === "credentials" && user) {
                token.accessToken = user.accessToken;
                token.is_profile_complete = user.is_profile_complete;
                token.userType = user.userType;
                token.role = null;
                token.division = null;
                token.permissions = [];
                return token;
            }
            // 3. PROSES LOGIN ADMIN
            if (account?.provider === "google-admin" && account.access_token) {
                try {
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].loginGoogleAdmin(account.access_token);
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
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].loginGoogleUser(account.access_token);
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
        strategy: "jwt",
        maxAge: 24 * 60 * 60
    },
    secret: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_SECRET
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(authOptions);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/registration-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "registrationService",
    ()=>registrationService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-backend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/api/auth/[...nextauth].ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-client] (ecmascript)");
;
;
;
;
const registrationService = {
    exportCompetitionsRegistrations: async ()=>{
        try {
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])('/api/admin/registrations/competitions/export', {
                method: 'GET',
                responseType: 'blob'
            });
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'competition_registrations.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(()=>window.URL.revokeObjectURL(downloadUrl), 100);
        } catch (error) {
            throw new Error("Gagal mengexport data");
        }
    },
    exportEventRegistrations: async ()=>{
        try {
            const blob = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])('/api/admin/registrations/events/export', {
                method: 'GET',
                responseType: 'blob'
            });
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'event_registrations.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(()=>window.URL.revokeObjectURL(downloadUrl), 100);
        } catch (error) {
            throw new Error("Gagal mengexport data events");
        }
    },
    async getEventRegistrations (params = {}) {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authOptions"]);
        const token = session?.accessToken;
        if (!token) {
            throw new Error("Unauthorized: Tidak ada token session.");
        }
        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append('page', params.page.toString());
        if (params.search) queryParams.append('search', params.search);
        if (params.status && params.status !== 'ALL') queryParams.append('status', params.status);
        if (params.event_name && params.event_name !== 'ALL') queryParams.append('event_name', params.event_name);
        if (params.user_type && params.user_type !== 'ALL') queryParams.append('user_type', params.user_type);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBackend"])(`/admin/registrations/events?${queryParams.toString()}`, {
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/registrations/events/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({
                status,
                rejection_reason
            })
        });
    },
    async getCompetitionsRegistrations (params = {}) {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authOptions"]);
        const token = session?.accessToken;
        if (!token) {
            throw new Error("Unauthorized: Tidak ada token session.");
        }
        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append('page', params.page.toString());
        if (params.search) queryParams.append('search', params.search);
        if (params.status && params.status !== 'ALL') queryParams.append('status', params.status);
        if (params.competition_name && params.competition_name !== 'ALL') queryParams.append('competition_name', params.competition_name);
        if (params.category && params.category !== 'ALL') queryParams.append('category', params.category);
        if (params.user_type && params.user_type !== 'ALL') queryParams.append('user_type', params.user_type);
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBackend"])(`/admin/registrations/competitions?${queryParams.toString()}`, {
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
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/registrations/competitions/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({
                status,
                rejection_reason
            })
        });
    },
    async updateEventAttendance (id, attended) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/registrations/events/${id}/attendance`, {
            method: 'PATCH',
            body: JSON.stringify({
                attended
            })
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin-swal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminConfirm",
    ()=>adminConfirm,
    "adminError",
    ()=>adminError,
    "adminInput",
    ()=>adminInput,
    "adminLoading",
    ()=>adminLoading,
    "adminSuccess",
    ()=>adminSuccess,
    "adminToast",
    ()=>adminToast,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
const baseCustomClass = {
    popup: 'rounded-none border-[3px] border-[#494947] shadow-[8px_8px_0px_#000000]',
    title: 'font-creato-title font-black uppercase tracking-wider text-[#E2E2DE]',
    htmlContainer: 'text-[#B7AC9B]',
    confirmButton: 'rounded-none font-black uppercase tracking-widest text-sm px-6 py-2.5',
    cancelButton: 'rounded-none font-black uppercase tracking-widest text-sm px-6 py-2.5',
    input: 'rounded-none border-2 border-[#494947] bg-[#1a1a1a] text-[#E2E2DE] font-bold'
};
const baseOptions = {
    background: '#1C1C1B',
    color: '#E2E2DE',
    confirmButtonColor: '#6A5D52',
    cancelButtonColor: '#494947',
    customClass: baseCustomClass
};
function mergeOptions(...optionsList) {
    const merged = {};
    for (const opts of optionsList){
        Object.assign(merged, opts);
    }
    // Merge customClass separately
    const mergedCustomClass = {};
    for (const opts of optionsList){
        if (opts.customClass && typeof opts.customClass === 'object') {
            Object.assign(mergedCustomClass, opts.customClass);
        }
    }
    merged.customClass = mergedCustomClass;
    return merged;
}
const adminConfirm = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'warning',
        showCancelButton: true
    }, options));
const adminSuccess = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'success'
    }, options));
const adminError = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'error',
        confirmButtonColor: '#ef4444'
    }, options));
const adminLoading = (title = 'PROCESSING...')=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        title,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].showLoading()
    }));
const adminToast = (title, icon = 'success')=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
        toast: true,
        position: 'top-end',
        icon,
        title,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#1C1C1B',
        color: '#E2E2DE',
        customClass: {
            popup: 'rounded-none border-2 border-[#494947] shadow-[4px_4px_0px_#000000]',
            title: 'font-black uppercase tracking-wider text-sm'
        }
    });
const adminInput = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        input: 'textarea'
    }, options));
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/event-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "eventService",
    ()=>eventService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-client] (ecmascript)");
;
const eventService = {
    submitFinal: async (key, paymentProof)=>{
        try {
            const formData = new FormData();
            if (paymentProof) {
                formData.append('payment_proof', paymentProof);
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/submit`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getEvents: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    storeEvent: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/status`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/draft`, {
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
    getRotatingQr: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}/rotating-qr`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    userScanCheckIn: async (token)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/scan-attendance`, {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/evaluation-questions`, {
                method: 'GET'
            });
            return res.data || [];
        } catch (error) {
            throw new Error(error.message);
        }
    },
    submitEvaluation: async (key, answers)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/events/${key}/evaluation`, {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/event-registration/RegistrationClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventRegistrationClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/UniversalTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/UniversalPagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$registration$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/registration-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-swal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/event-service.ts [app-client] (ecmascript)");
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
function EventRegistrationClient({ data, meta, title }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // State untuk data modal dan animasi
    const [selectedDetail, setSelectedDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isClosing, setIsClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ambil state awal dari URL params
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get('search') || '');
    const [showFilterModal, setShowFilterModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filterUserType, setFilterUserType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get('user_type') || 'ALL');
    const [filterEventName, setFilterEventName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get('event_name') || '');
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams?.get('status') || 'ALL');
    const [eventOptions, setEventOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventRegistrationClient.useEffect": ()=>{
            const fetchEvents = {
                "EventRegistrationClient.useEffect.fetchEvents": async ()=>{
                    try {
                        const evts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventService"].getEvents();
                        setEventOptions(evts.map({
                            "EventRegistrationClient.useEffect.fetchEvents": (e)=>e.title
                        }["EventRegistrationClient.useEffect.fetchEvents"]));
                    } catch (err) {
                        console.error("Failed to fetch event options", err);
                    }
                }
            }["EventRegistrationClient.useEffect.fetchEvents"];
            fetchEvents();
        }
    }["EventRegistrationClient.useEffect"], []);
    const applyFilters = (search)=>{
        const params = new URLSearchParams();
        // Kita paksakan page=1 tiap kali apply filter
        params.set('page', '1');
        const finalSearch = search !== undefined ? search : searchQuery;
        if (finalSearch) params.set('search', finalSearch);
        if (filterUserType !== 'ALL') params.set('user_type', filterUserType);
        if (filterEventName) params.set('event_name', filterEventName);
        if (filterStatus !== 'ALL') params.set('status', filterStatus);
        router.push(`?${params.toString()}`);
    };
    const handleExport = async ()=>{
        try {
            setIsExporting(true);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$registration$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrationService"].exportEventRegistrations();
        } catch (error) {
            alert("Gagal mengexport data events");
        } finally{
            setIsExporting(false);
        }
    };
    const handleSearchSubmit = (e)=>{
        if (e) e.preventDefault();
        applyFilters();
    };
    const handleClearSearch = ()=>{
        setSearchQuery('');
        applyFilters('');
    };
    const filteredData = data;
    // Fungsi untuk menutup modal dengan animasi
    const handleCloseModal = ()=>{
        setIsClosing(true);
        setTimeout(()=>{
            setSelectedDetail(null);
            setIsClosing(false);
        }, 200);
    };
    // ESC key handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventRegistrationClient.useEffect": ()=>{
            const handleEsc = {
                "EventRegistrationClient.useEffect.handleEsc": (e)=>{
                    if (e.key === 'Escape') {
                        if (showFilterModal) {
                            setShowFilterModal(false);
                        } else if (selectedDetail) {
                            handleCloseModal();
                        }
                    }
                }
            }["EventRegistrationClient.useEffect.handleEsc"];
            window.addEventListener('keydown', handleEsc);
            return ({
                "EventRegistrationClient.useEffect": ()=>window.removeEventListener('keydown', handleEsc)
            })["EventRegistrationClient.useEffect"];
        }
    }["EventRegistrationClient.useEffect"], [
        selectedDetail,
        showFilterModal
    ]);
    const handleUpdateStatus = async (id, newStatus)=>{
        let rejectionReason = "";
        if (newStatus === "REJECTED") {
            const { value: reason, isDismissed } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminInput"])({
                title: 'ALASAN PENOLAKAN',
                input: 'textarea',
                inputPlaceholder: 'Tuliskan alasan penolakan...',
                showCancelButton: true,
                confirmButtonText: 'TOLAK PESERTA',
                cancelButtonText: 'BATAL',
                inputValidator: (value)=>{
                    if (!value) return 'Alasan penolakan wajib diisi!';
                }
            });
            if (isDismissed) {
                router.refresh();
                return;
            }
            rejectionReason = reason;
        } else {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminConfirm"])({
                title: 'KONFIRMASI UPDATE',
                text: `Ubah status menjadi ${newStatus}?`,
                confirmButtonText: 'YA, PROSES'
            });
            if (!result.isConfirmed) {
                router.refresh();
                return;
            }
        }
        // 3. EKSEKUSI API
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminLoading"])('SEDANG MEMPROSES...');
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$registration$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registrationService"].updateEventStatus(id, newStatus, rejectionReason);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminSuccess"])({
                title: 'BERHASIL!'
            });
            // Kalau modal lagi kebuka dan datanya sama, kita refresh state-nya
            if (selectedDetail && selectedDetail.id === id) {
                setSelectedDetail((prev)=>prev ? {
                        ...prev,
                        status: newStatus,
                        rejection_reason: rejectionReason
                    } : null);
            }
            router.refresh();
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminError"])({
                title: 'GAGAL!',
                text: error.message || 'Terjadi kesalahan'
            });
            router.refresh();
        }
    };
    const columns = [
        {
            header: "NO",
            key: "id",
            render: (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-black text-lg",
                    children: (meta.current_page - 1) * meta.per_page + (index + 1)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 172,
                    columnNumber: 29
                }, this)
        },
        {
            header: "NAMA PESERTA",
            key: "name",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold uppercase text-base",
                    children: item.user.name
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
        },
        {
            header: "EMAIL",
            key: "email",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm md:text-base font-medium text-[#484847]",
                    children: item.user.email
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
        },
        {
            header: "TYPE",
            key: "type",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `px-3 py-1.5 border-[3px] border-[#1c1c1b] font-bold text-xs uppercase shadow-[3px_3px_0px_#1c1c1b] tracking-wider
          ${item.user.type === 'INTERNAL' ? 'bg-[#1c1c1b] text-white' : 'bg-white text-[#1c1c1b]'}`,
                    children: item.user.type
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
        },
        {
            header: "EVENT",
            key: "event",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm md:text-base font-bold block max-w-[200px] leading-snug",
                    children: item.event.title
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 201,
                    columnNumber: 25
                }, this)
        },
        {
            header: "PAYMENT",
            key: "payment_proof",
            render: (item)=>item.payment_proof ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>window.open(`${("TURBOPACK compile-time value", "http://localhost:8000")}/storage/${item.payment_proof}`, '_blank'),
                    className: "px-3 py-1.5 border-[3px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer",
                    children: "LIHAT BUKTI"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 208,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm italic font-medium text-gray-500",
                    children: "NO_FILE"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 214,
                    columnNumber: 13
                }, this)
        },
        {
            header: "STATUS",
            key: "status",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: item.status,
                    onChange: (e)=>handleUpdateStatus(item.id, e.target.value),
                    className: `px-3 py-1.5 border-[3px] border-[#1c1c1b] font-black text-xs uppercase cursor-pointer outline-none shadow-[4px_4px_0px_#1c1c1b] transition-colors
            ${item.status === 'VERIFIED' ? 'bg-green-400' : item.status === 'REJECTED' ? 'bg-red-500 text-white' : 'bg-yellow-400'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "PENDING",
                            children: "PENDING"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "VERIFIED",
                            children: "VERIFIED"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: "REJECTED",
                            children: "REJECTED"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 221,
                    columnNumber: 9
                }, this)
        },
        {
            header: "AKSI",
            key: "action",
            render: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setSelectedDetail(item),
                    className: "px-4 py-1.5 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white text-xs font-black hover:bg-[#1c1c1b] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider",
                    children: "DETAIL"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearchSubmit,
                                className: "flex-1 relative w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search by name, email, type, event, or status...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] placeholder:text-[#6A5D52] placeholder:font-medium focus:outline-none shadow-[4px_4px_0px_#1c1c1b]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleClearSearch,
                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#1c1c1b] hover:text-[#6A5D52] font-black text-xl",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                        lineNumber: 268,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-3 w-full md:w-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowFilterModal(true),
                                        className: "px-6 py-3 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase cursor-pointer hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "2",
                                                stroke: "currentColor",
                                                fill: "none",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        stroke: "none",
                                                        d: "M0 0h24v24H0z",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this),
                                            "FILTER",
                                            (filterUserType !== 'ALL' || filterEventName || filterStatus !== 'ALL') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-black",
                                                children: "!"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                lineNumber: 288,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExport,
                                        disabled: isExporting,
                                        className: `px-6 py-3 border-[3px] border-[#1c1c1b] font-black uppercase cursor-pointer transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider flex items-center gap-2
              ${isExporting ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-[#1c1c1b] hover:text-white'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "2",
                                                stroke: "currentColor",
                                                fill: "none",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        stroke: "none",
                                                        d: "M0 0h24v24H0z",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M14 3v4a1 1 0 0 0 1 1h4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M12 11v6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M9.5 13.5l2.5 2.5l2.5 -2.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this),
                                            isExporting ? 'EXPORTING...' : 'EXPORT EXCEL'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                        lineNumber: 291,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                lineNumber: 277,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this),
                    (searchQuery || filterUserType !== 'ALL' || filterEventName || filterStatus !== 'ALL') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm font-bold text-[#6A5D52]",
                        children: [
                            "Found ",
                            meta.total,
                            " result",
                            meta.total !== 1 ? 's' : '',
                            " in Total"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                        lineNumber: 309,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] mb-6",
                children: filteredData.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-20 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 text-[#1c1c1b]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-24 h-24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9 11l3 3l8 -8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                        lineNumber: 320,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                lineNumber: 319,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 318,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3",
                            children: searchQuery ? 'No results found' : 'No registrations yet'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 323,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#6A5D52] font-bold text-center",
                            children: searchQuery ? 'Try a different search term' : 'No event registrations found'
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 324,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 317,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalTable"], {
                    columns: columns,
                    data: filteredData
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 327,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalPagination"], {
                meta: meta,
                onPageChange: (page)=>router.push(`?page=${page}`)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                lineNumber: 331,
                columnNumber: 7
            }, this),
            showFilterModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200",
                onClick: ()=>setShowFilterModal(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] w-full max-w-md p-8 relative",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowFilterModal(false),
                            className: "absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 346,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl font-black font-creato-title uppercase border-b-4 border-[#1c1c1b] pb-4 mb-6",
                            children: "Filter Options"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 353,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider",
                                            children: "User Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 359,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filterUserType,
                                            onChange: (e)=>setFilterUserType(e.target.value),
                                            className: "w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ALL",
                                                    children: "ALL TYPES"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "INTERNAL",
                                                    children: "INTERNAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "EXTERNAL",
                                                    children: "EXTERNAL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 360,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 358,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider",
                                            children: "Event Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filterEventName,
                                            onChange: (e)=>setFilterEventName(e.target.value),
                                            className: "w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "ALL EVENTS"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 19
                                                }, this),
                                                eventOptions.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: name,
                                                        children: name
                                                    }, name, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 380,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: filterStatus,
                                            onChange: (e)=>setFilterStatus(e.target.value),
                                            className: "w-full px-4 py-3 border-[3px] border-[#1c1c1b] bg-white font-black text-[#1c1c1b] cursor-pointer focus:outline-none shadow-[4px_4px_0px_#1c1c1b] uppercase",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ALL",
                                                    children: "ALL STATUSES"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "PENDING",
                                                    children: "PENDING"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 393,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "VERIFIED",
                                                    children: "VERIFIED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "REJECTED",
                                                    children: "REJECTED"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 387,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 385,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setFilterUserType('ALL');
                                        setFilterEventName('');
                                        setFilterStatus('ALL');
                                        setIsClosing(true);
                                        setTimeout(()=>{
                                            setShowFilterModal(false);
                                            // Langsung router ganti url
                                            router.push('?page=1');
                                            setIsClosing(false);
                                        }, 100);
                                    },
                                    className: "flex-1 py-3 px-4 border-[3px] border-[#1c1c1b] bg-white text-[#1c1c1b] font-black uppercase hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider",
                                    children: "Reset"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 401,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowFilterModal(false);
                                        applyFilters();
                                    },
                                    className: "flex-1 py-3 px-4 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white font-black uppercase hover:bg-[#1c1c1b] transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider",
                                    children: "Apply"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 418,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 400,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 342,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                lineNumber: 338,
                columnNumber: 9
            }, this),
            selectedDetail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ease-in-out ${isClosing ? 'opacity-0' : 'opacity-100'}`,
                onClick: handleCloseModal,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 md:p-10 relative transition-all duration-200 ease-in-out ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`,
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCloseModal,
                            className: "absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer z-10",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl md:text-4xl font-black font-creato-title uppercase border-b-4 border-[#1c1c1b] pb-4 mb-8",
                            children: selectedDetail.user.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 449,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 bg-[#1C1C1B]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5 text-white",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                fill: "none",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        stroke: "none",
                                                        d: "M0 0h24v24H0z",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 7l9 6l9 -6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 456,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 464,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-md text-[#1C1C1B]",
                                                    children: selectedDetail.user.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 465,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 463,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 455,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 bg-[#5B4D4B]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5 text-white",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                fill: "none",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        stroke: "none",
                                                        d: "M0 0h24v24H0z",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 473,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                lineNumber: 471,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 470,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider",
                                                    children: "Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-lg text-[#5B4D4B] uppercase",
                                                    children: selectedDetail.user.type
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 479,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 477,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 469,
                                    columnNumber: 15
                                }, this),
                                selectedDetail.user.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 bg-[#978D82]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5 text-white",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                fill: "none",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        stroke: "none",
                                                        d: "M0 0h24v24H0z",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 487,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                lineNumber: 486,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 485,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 492,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-lg text-[#978D82]",
                                                    children: selectedDetail.user.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 491,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 484,
                                    columnNumber: 17
                                }, this),
                                selectedDetail.user.institution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 bg-[#B1A79B]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-5 h-5 text-white",
                                                viewBox: "0 0 24 24",
                                                strokeWidth: "1.5",
                                                stroke: "currentColor",
                                                fill: "none",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        stroke: "none",
                                                        d: "M0 0h24v24H0z",
                                                        fill: "none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M22 9l-10 -4l-10 4l10 4l10 -4v6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 503,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                lineNumber: 501,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 500,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider",
                                                    children: "Institution"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 508,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-sm text-[#B1A79B]",
                                                    children: selectedDetail.user.institution
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 507,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 499,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 454,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2",
                                    children: "Additional Info"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 517,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1",
                                                    children: "Major"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 520,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[#1c1c1b]",
                                                    children: selectedDetail.user.major || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1",
                                                    children: "Line ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 524,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[#1c1c1b]",
                                                    children: selectedDetail.user.line || '-'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 523,
                                            columnNumber: 17
                                        }, this),
                                        selectedDetail.user.type === 'INTERNAL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-1",
                                                    children: "NRP / Batch"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 529,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-[#1c1c1b]",
                                                    children: [
                                                        selectedDetail.user.nrp || '-',
                                                        " / ",
                                                        selectedDetail.user.batch || '-'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 528,
                                            columnNumber: 19
                                        }, this),
                                        selectedDetail.user.type === 'INTERNAL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-2",
                                                    children: "KTM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 21
                                                }, this),
                                                selectedDetail.user.ktm_path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `${("TURBOPACK compile-time value", "http://localhost:8000")}/storage/${selectedDetail.user.ktm_path}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "px-4 py-2 border-[3px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] inline-block cursor-pointer tracking-wider",
                                                    children: "LIHAT KTM"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-[#6A5D52] italic",
                                                    children: "Belum Upload"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 546,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 534,
                                            columnNumber: 19
                                        }, this),
                                        selectedDetail.user.type === 'EXTERNAL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider mb-2",
                                                    children: "ID Card"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 552,
                                                    columnNumber: 21
                                                }, this),
                                                selectedDetail.user.id_card_path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `${("TURBOPACK compile-time value", "http://localhost:8000")}/storage/${selectedDetail.user.id_card_path}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "px-4 py-2 border-[3px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[3px_3px_0px_#1c1c1b] inline-block cursor-pointer tracking-wider",
                                                    children: "LIHAT ID CARD"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 554,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-[#6A5D52] italic",
                                                    children: "Belum Upload"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 551,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 518,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 516,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2",
                                    children: "Event Registration"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 572,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-black text-[#1C1C1B] text-xl",
                                                    children: selectedDetail.event.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 575,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-3 py-1 text-xs font-black border-2 border-[#1c1c1b] ${selectedDetail.status === 'VERIFIED' ? 'bg-green-400 text-[#1c1c1b]' : selectedDetail.status === 'REJECTED' ? 'bg-red-400 text-white' : 'bg-yellow-300 text-[#1c1c1b]'}`,
                                                    children: selectedDetail.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 574,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#6A5D52] font-black uppercase",
                                                            children: "Registered At"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                            lineNumber: 585,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-bold text-[#1c1c1b]",
                                                            children: new Date(selectedDetail.created_at).toLocaleString('id-ID')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                            lineNumber: 586,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 19
                                                }, this),
                                                selectedDetail.payment_proof && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#6A5D52] font-black uppercase mb-2",
                                                            children: "Payment Proof"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                            lineNumber: 590,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: `${("TURBOPACK compile-time value", "http://localhost:8000")}/storage/${selectedDetail.payment_proof}`,
                                                            target: "_blank",
                                                            rel: "noopener noreferrer",
                                                            className: "px-3 py-1.5 border-[2px] border-[#1c1c1b] bg-white text-xs font-black hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[2px_2px_0px_#1c1c1b] inline-block cursor-pointer",
                                                            children: "VIEW PAYMENT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                            lineNumber: 591,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 589,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 583,
                                            columnNumber: 17
                                        }, this),
                                        selectedDetail.status === 'REJECTED' && selectedDetail.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 pt-4 border-t-2 border-[#1c1c1b]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-black text-red-600 uppercase tracking-wider mb-2",
                                                    children: "Rejection Reason"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-sm text-red-600 bg-red-100 p-3 border-[2px] border-red-600",
                                                    children: selectedDetail.rejection_reason
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                                    lineNumber: 605,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                            lineNumber: 603,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                                    lineNumber: 573,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 571,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCloseModal,
                            className: "w-full cursor-pointer py-3 px-6 font-black uppercase text-[#1c1c1b] bg-white border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                            lineNumber: 613,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                    lineNumber: 438,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
                lineNumber: 434,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/event-registration/RegistrationClient.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s(EventRegistrationClient, "clxTudctK8YQpgPa4EAPohY/BKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = EventRegistrationClient;
var _c;
__turbopack_context__.k.register(_c, "EventRegistrationClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_55c7e81e._.js.map