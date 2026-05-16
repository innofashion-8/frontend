(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/services/admin-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminService",
    ()=>adminService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-backend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages/api/auth/[...nextauth].ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-client] (ecmascript)");
;
;
;
;
const adminService = {
    async getAdmins (page = 1) {
        const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authOptions"]);
        const token = session?.accessToken;
        if (!token) {
            throw new Error('Unauthorized: Tidak ada token session.');
        }
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBackend"])(`/admin/admins?page=${page}`, {
            method: 'GET',
            token: token
        });
        if (!response.ok) {
            throw new Error('Failed to fetch admins');
        }
        const result = await response.json();
        if (!result.data) {
            throw new Error('No data returned from server');
        }
        return result.data;
    },
    async createAdmin (data) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])('/api/admin/admins', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    async updateAdmin (id, data) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/admins/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data)
        });
    },
    async deleteAdmin (id) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/admins/${id}`, {
            method: 'DELETE'
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
"[project]/src/components/admin/admin-management/AdminModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminModal",
    ()=>AdminModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/admin-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-swal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AdminModal({ admin, divisions, roles, onClose }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        nrp: "",
        email: "",
        division_id: "",
        role: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminModal.useEffect": ()=>{
            if (admin) {
                setFormData({
                    name: admin.name,
                    nrp: admin.nrp,
                    email: admin.email,
                    division_id: admin.division_id,
                    role: admin.roles?.[0]?.name || ""
                });
            }
        }
    }["AdminModal.useEffect"], [
        admin
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminLoading"])(admin ? "UPDATING ADMIN..." : "CREATING ADMIN...");
            let response;
            if (admin) {
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].updateAdmin(admin.id, formData);
            } else {
                response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].createAdmin(formData);
            }
            if (response.success) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminSuccess"])({
                    title: admin ? "UPDATED!" : "CREATED!",
                    text: `Admin has been ${admin ? "updated" : "created"} successfully.`
                });
                onClose(true);
            } else {
                throw new Error(response.message || `Failed to ${admin ? "update" : "create"} admin`);
            }
        } catch (error) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminError"])({
                title: admin ? "UPDATE FAILED" : "CREATE FAILED",
                text: error.message || `Failed to ${admin ? "update" : "create"} admin`
            });
        } finally{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].close();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-2xl rounded-none border-4 border-[#1C1C1B] bg-[#E2E2DE] shadow-[8px_8px_0px_#1a1a1a] my-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b-4 border-[#1C1C1B] bg-[#6A5D52] px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-black text-2xl uppercase tracking-[0.2em] text-[#E2E2DE]",
                        children: admin ? "EDIT ADMIN" : "CREATE ADMIN"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2",
                                    children: "NAME *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.name,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                name: e.target.value
                                            })),
                                    className: "w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]",
                                    placeholder: "Enter admin name",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2",
                                    children: "NRP *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.nrp,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                nrp: e.target.value
                                            })),
                                    className: "w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]",
                                    placeholder: "Enter NRP",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2",
                                    children: "EMAIL *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: formData.email,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                email: e.target.value
                                            })),
                                    className: "w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]",
                                    placeholder: "Enter email",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2",
                                    children: "DIVISION *"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.division_id,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                division_id: e.target.value
                                            })),
                                    className: "w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]",
                                    required: true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "SELECT DIVISION"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        divisions.map((division)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: division.id,
                                                children: division.name
                                            }, division.id, false, {
                                                fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2",
                                    children: "ROLE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: formData.role,
                                    onChange: (e)=>setFormData((prev)=>({
                                                ...prev,
                                                role: e.target.value
                                            })),
                                    className: "w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "NO ROLE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        roles.map((role)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: role.name,
                                                children: role.name.toUpperCase()
                                            }, role.id, false, {
                                                fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-[#6A5D52] mt-1 font-bold",
                                    children: "Optional: Assign a role to this admin"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-4 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex-1 rounded-none border-4 border-[#1C1C1B] bg-[#6A5D52] px-6 py-3 font-black uppercase tracking-widest text-[#E2E2DE] shadow-[4px_4px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]",
                                    children: admin ? "UPDATE" : "CREATE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onClose(false),
                                    className: "flex-1 rounded-none border-4 border-[#1C1C1B] bg-[#979086] px-6 py-3 font-black uppercase tracking-widest text-[#E2E2DE] shadow-[4px_4px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]",
                                    children: "CANCEL"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                                    lineNumber: 177,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/admin-management/AdminModal.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(AdminModal, "p0Ei425aicr8UpIiT1VS+ZEUV90=");
_c = AdminModal;
var _c;
__turbopack_context__.k.register(_c, "AdminModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/admin-management/AdminManagementClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminManagementClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/admin-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-swal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/UniversalTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/UniversalPagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$admin$2d$management$2f$AdminModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/admin-management/AdminModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
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
function AdminManagementClient({ data, divisions, roles }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingAdmin, setEditingAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Debug: log pagination data
    console.log('Admin pagination data:', {
        current_page: data.current_page,
        last_page: data.last_page,
        from: data.from,
        to: data.to,
        total: data.total,
        per_page: data.per_page
    });
    const handleCreate = ()=>{
        setEditingAdmin(null);
        setIsModalOpen(true);
    };
    const handleEdit = (admin)=>{
        setEditingAdmin(admin);
        setIsModalOpen(true);
    };
    const handleDelete = async (admin)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminConfirm"])({
            title: "DELETE ADMIN?",
            html: `Are you sure you want to delete <strong>${admin.name}</strong>?<br/>This action cannot be undone.`,
            confirmButtonText: "DELETE",
            cancelButtonText: "CANCEL"
        });
        if (result.isConfirmed) {
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminLoading"])("DELETING ADMIN...");
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$admin$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminService"].deleteAdmin(admin.id);
                if (response.success) {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminSuccess"])({
                        title: "DELETED!",
                        text: "Admin has been deleted successfully."
                    });
                    router.refresh();
                } else {
                    throw new Error(response.message || "Failed to delete admin");
                }
            } catch (error) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminError"])({
                    title: "DELETE FAILED",
                    text: error.message || "Failed to delete admin"
                });
            } finally{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].close();
            }
        }
    };
    const handleModalClose = (shouldRefresh)=>{
        setIsModalOpen(false);
        setEditingAdmin(null);
        if (shouldRefresh) {
            router.refresh();
        }
    };
    const columns = [
        {
            header: "NAME",
            key: "name"
        },
        {
            header: "NRP",
            key: "nrp"
        },
        {
            header: "EMAIL",
            key: "email"
        },
        {
            header: "DIVISION",
            key: "division",
            render: (admin)=>admin.division?.name || "-"
        },
        {
            header: "ROLE",
            key: "roles",
            render: (admin)=>admin.roles?.[0]?.name || "-"
        },
        {
            header: "ACTIONS",
            key: "actions",
            render: (admin)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleEdit(admin),
                            className: "px-4 py-1.5 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white text-xs font-black hover:bg-[#1c1c1b] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider",
                            children: "EDIT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleDelete(admin),
                            className: "px-4 py-1.5 border-[3px] border-[#1c1c1b] bg-[#ef4444] text-white text-xs font-black hover:bg-[#dc2626] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider",
                            children: "DELETE"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                            lineNumber: 121,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]",
                            children: "Manage Admins"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleCreate,
                            className: "bg-[#6A5D52] cursor-pointer text-white px-6 py-3 font-black uppercase text-sm hover:bg-[#1C1C1B] transition-colors w-full sm:w-auto border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] tracking-wider",
                            children: "+ Create Admin"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalTable"], {
                columns: columns,
                data: data.data
            }, void 0, false, {
                fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$UniversalPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniversalPagination"], {
                meta: data,
                onPageChange: (page)=>router.push(`/admin/admin-management?page=${page}`)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$admin$2d$management$2f$AdminModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminModal"], {
                admin: editingAdmin,
                divisions: divisions,
                roles: roles,
                onClose: handleModalClose
            }, void 0, false, {
                fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
                lineNumber: 161,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/admin-management/AdminManagementClient.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(AdminManagementClient, "G2VlKZwF6LSlyubIXFlfO73HbRU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminManagementClient;
var _c;
__turbopack_context__.k.register(_c, "AdminManagementClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3803a85d._.js.map