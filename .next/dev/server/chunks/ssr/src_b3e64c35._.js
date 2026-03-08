module.exports = [
"[project]/src/lib/fetch-backend.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBackend",
    ()=>fetchBackend
]);
const BASE_URL = ("TURBOPACK compile-time value", "https://api.innofashionshow.petra.ac.id") || 'http://localhost:8000';
const fetchBackend = async (path, options = {})=>{
    const { token, headers, duplex, ...rest } = options;
    const reqHeaders = new Headers(headers);
    if (!reqHeaders.has('Accept')) {
        reqHeaders.set('Accept', 'application/json');
    }
    if (typeof rest.body === 'string') {
        if (!reqHeaders.has('Content-Type')) {
            reqHeaders.set('Content-Type', 'application/json');
        }
    }
    if (token) {
        reqHeaders.set('Authorization', `Bearer ${token}`);
    }
    return fetch(`${BASE_URL}/api${path}`, {
        ...rest,
        headers: reqHeaders,
        duplex: duplex
    });
};
}),
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
    const baseUrl = ("TURBOPACK compile-time value", "https://api.innofashionshow.petra.ac.id") || 'http://localhost:8000';
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
}),
"[project]/src/services/auth-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-backend.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-ssr] (ecmascript)");
;
;
const authService = {
    register: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/register`, {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            return res.message || 'Pendaftaran berhasil! Silakan Login';
        } catch (error) {
            if (error.isValidationError) {
                throw {
                    isValidationError: true,
                    errors: error.data
                };
            }
            throw new Error(error.message);
        }
    },
    loginGoogleAdmin: async (googleIdToken)=>{
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/admin/login/google', {
            method: 'POST',
            body: JSON.stringify({
                token: googleIdToken
            })
        });
        const result = await res.json();
        if (!res.ok || !result.success) throw new Error(result.message || 'Gagal login Admin');
        return {
            token: result.data.token,
            name: result.data.admin.name,
            email: result.data.admin.email,
            division: result.data.admin.division,
            is_profile_complete: null,
            role: result.data.admin.roles || null,
            permissions: result.data.admin.permissions || [],
            userType: 'ADMIN'
        };
    },
    loginGoogleUser: async (googleIdToken)=>{
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/login/google', {
            method: 'POST',
            body: JSON.stringify({
                token: googleIdToken
            })
        });
        const result = await res.json();
        if (!res.ok || !result.success) throw new Error(result.message || 'Gagal login Peserta');
        return {
            id: result.data.user.id,
            token: result.data.token,
            name: result.data.user.name,
            email: result.data.user.email,
            is_profile_complete: result.data.user.is_profile_complete,
            division: null,
            role: null,
            permissions: [],
            userType: result.data.user.type || 'USER'
        };
    },
    loginWithCredentials: async (email, password)=>{
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        });
        const result = await res.json();
        if (!res.ok || !result.success) throw new Error(result.message || 'Email atau password salah');
        return {
            id: result.data.user.id,
            token: result.data.token,
            name: result.data.user.name,
            email: result.data.user.email,
            division: null,
            is_profile_complete: result.data.user.is_profile_complete,
            role: null,
            permissions: [],
            userType: result.data.user.type || 'USER'
        };
    },
    logout: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/logout`, {
                method: 'POST'
            });
            return res.message || 'Logout berhasil!';
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getProfile: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/profile`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};
}),
"[project]/src/components/ui/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Sidebar() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const sidebarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mobileBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const toggleSidebar = ()=>setIsActive(!isActive);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (isActive && sidebarRef.current && !sidebarRef.current.contains(event.target) && mobileBtnRef.current && !mobileBtnRef.current.contains(event.target)) {
                setIsActive(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        isActive
    ]);
    const handleLogout = async ()=>{
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].loading("Keluar dari sistem...", {
                id: "logout-toast"
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authService"].logout();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success("Berhasil logout!", {
                id: "logout-toast"
            });
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error("Sesi server berakhir, menghapus sesi lokal...", {
                id: "logout-toast"
            });
        } finally{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                callbackUrl: "/admin/login",
                redirect: true
            });
        }
    };
    const userPermissions = session?.user?.permissions || [];
    const adminMenus = [
        {
            path: "/admin/dashboard",
            name: "Dashboard",
            permission: null,
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        stroke: "none",
                        d: "M0 0h24v24H0z",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 58,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 12l-2 0l9 -9l9 9l-2 0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 58,
                        columnNumber: 66
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 58,
                        columnNumber: 103
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 58,
                        columnNumber: 158
                    }, this)
                ]
            }, void 0, true)
        },
        {
            path: "/admin/competition",
            name: "Manage Competition",
            permission: "manage_competitions",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 55
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 22h16"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 97
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 187
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 258
                    }, this)
                ]
            }, void 0, true)
        },
        {
            path: "/admin/event",
            name: "Manage Event",
            permission: "manage_events",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "18",
                        height: "18",
                        x: "3",
                        y: "4",
                        rx: "2",
                        ry: "2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 70,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "16",
                        x2: "16",
                        y1: "2",
                        y2: "6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 70,
                        columnNumber: 71
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "8",
                        x2: "8",
                        y1: "2",
                        y2: "6"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 70,
                        columnNumber: 108
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "3",
                        x2: "21",
                        y1: "10",
                        y2: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 70,
                        columnNumber: 143
                    }, this)
                ]
            }, void 0, true)
        },
        {
            path: "/admin/user",
            name: "Manage User",
            permission: "manage_users",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 76,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9",
                        cy: "7",
                        r: "4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 76,
                        columnNumber: 68
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 21v-2a4 4 0 0 0-3-3.87"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 76,
                        columnNumber: 97
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 3.13a4 4 0 0 1 0 7.75"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 76,
                        columnNumber: 135
                    }, this)
                ]
            }, void 0, true)
        },
        {
            path: "/admin/event-registration",
            name: "Event Registration",
            permission: "manage_registrations",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 5v2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 128
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 17v2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 147
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13 11v2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 167
                    }, this)
                ]
            }, void 0, true)
        },
        {
            path: "/admin/competition-registration",
            name: "Comp. Registration",
            permission: "manage_registrations",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 88,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 88,
                        columnNumber: 99
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m9 14 2 2 4-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 88,
                        columnNumber: 181
                    }, this)
                ]
            }, void 0, true)
        }
    ];
    const allowedMenus = adminMenus.filter((item)=>{
        if (!item.permission) return true;
        if (userPermissions.includes("*")) return true;
        return userPermissions.includes(item.permission);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .ham { cursor: pointer; -webkit-tap-highlight-color: transparent; transition: transform 400ms; -moz-user-select: none; }
        .hamRotate.active { transform: rotate(45deg); }
        .line { fill: none; transition: stroke-dasharray 400ms, stroke-dashoffset 400ms; stroke: #1C1C1B; stroke-width: 5.5; stroke-linecap: round; }
        .ham6 .top { stroke-dasharray: 40 172; }
        .ham6 .middle { stroke-dasharray: 40 111; }
        .ham6 .bottom { stroke-dasharray: 40 172; }
        .ham6.active .top { stroke-dashoffset: -132px; }
        .ham6.active .middle { stroke-dashoffset: -71px; }
        .ham6.active .bottom { stroke-dashoffset: -132px; }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Sidebar.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsActive(false),
                className: `fixed inset-0 bg-black/40 z-[30] transition-opacity duration-300 lg:hidden ${isActive ? "opacity-100 visible" : "opacity-0 invisible"}`
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Sidebar.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mobileBtnRef,
                onClick: toggleSidebar,
                className: `fixed top-5 left-5 w-[50px] h-[50px] rounded-xl z-[50] shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 lg:hidden
        ${isActive ? "left-[230px] bg-transparent shadow-none" : "bg-[#dcdad9]/80 backdrop-blur-md"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: `ham ham6 ${isActive ? "active" : ""}`,
                    viewBox: "0 0 100 100",
                    width: "40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "line top",
                            d: "m 30,33 h 40 c 13.1,0 14.3,31.8 6.8,33.4 -24.6,5.3 9.0,-52.3 -12.7,-30.5 l -28.2,28.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "line middle",
                            d: "m 70,50 c 0,0 -32.2,0 -40,0 -7.7,0 -6.4,-4.6 -6.4,-8.5 0,-5.8 6.0,-11.7 12.2,-5.5 6.2,6.2 28.2,28.2 28.2,28.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "line bottom",
                            d: "m 69.5,67.0 h -40 c -13.1,0 -14.3,-31.8 -6.8,-33.4 24.6,-5.3 -9.0,52.3 12.7,30.5 l 28.2,-28.2"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Sidebar.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                ref: sidebarRef,
                className: `fixed top-0 -left-[10%] lg:left-0 h-[100dvh] z-[40] py-2 px-3 transition-all duration-500 overflow-hidden whitespace-nowrap 
        border-r border-[#b7ac9b]/30 backdrop-blur-xl flex flex-col
        ${isActive ? "w-[280px] left-0 bg-[#e9e4e2]/95 shadow-[10px_0_30px_rgba(0,0,0,0.1)]" : "w-0 lg:w-[80px] bg-[#e2e2de]/60 lg:shadow-none"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center w-full min-h-[60px] mb-5 relative text-[#1C1C1B]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: toggleSidebar,
                            className: "absolute left-0 w-[45px] h-[45px] cursor-pointer hidden lg:block",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: `ham ham6 ${isActive ? "active" : ""}`,
                                viewBox: "0 0 100 100",
                                width: "60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "line top",
                                        d: "m 30,33 h 40 c 13.1,0 14.3,31.8 6.8,33.4 -24.6,5.3 9.0,-52.3 -12.7,-30.5 l -28.2,28.2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "line middle",
                                        d: "m 70,50 c 0,0 -32.2,0 -40,0 -7.7,0 -6.4,-4.6 -6.4,-8.5 0,-5.8 6.0,-11.7 12.2,-5.5 6.2,6.2 28.2,28.2 28.2,28.2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        className: "line bottom",
                                        d: "m 69.5,67.0 h -40 c -13.1,0 -14.3,-31.8 -6.8,-33.4 24.6,-5.3 -9.0,52.3 12.7,30.5 l 28.2,-28.2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Sidebar.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-col gap-1 w-full p-0 m-0",
                            children: allowedMenus.map((item, index)=>{
                                const isCurrent = item.path === "/admin/dashboard" ? pathname === "/admin/dashboard" : pathname === item.path || pathname?.startsWith(`${item.path}/`);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "w-full h-[50px] leading-[50px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.path,
                                        onClick: ()=>{
                                            if (window.innerWidth <= 1024) setIsActive(false);
                                        },
                                        className: `flex items-center w-full h-full rounded-xl transition-all duration-400 relative
                    ${isCurrent ? "bg-gradient-to-r from-[#6a5d52]/10 to-transparent border-l-4 border-[#6a5d52] text-[#1a1a1a]" : "text-[#484847] hover:bg-[#b7ac9b]/20"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `min-w-[50px] h-[50px] flex items-center justify-center ${isCurrent ? "text-[#6a5d52]" : ""}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-semibold font-creato-body text-[15px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                    lineNumber: 162,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pb-4 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "my-2 border-b border-[#b7ac9b]/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/Sidebar.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogout,
                                className: "flex items-center w-full h-[50px] rounded-xl text-[#d9534f] hover:bg-[#d9534f]/10 transition-all duration-400 relative cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "min-w-[50px] h-[50px] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "22",
                                            height: "22",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "16 17 21 12 16 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 68
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "21",
                                                    x2: "9",
                                                    y1: "12",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ui/Sidebar.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 105
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ui/Sidebar.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `font-semibold font-creato-body text-[15px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`,
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/Sidebar.tsx",
                                lineNumber: 189,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/Sidebar.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Sidebar.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_b3e64c35._.js.map