module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/lib/fetch-backend.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBackend",
    ()=>fetchBackend
]);
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
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
"[project]/src/lib/fetch-client.ts [api] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__ = __turbopack_context__.i("[externals]/next-auth/react [external] (next-auth/react, cjs, [project]/node_modules/next-auth)");
;
const fetchClient = async (path, options = {})=>{
    // 1. 🔥 KITA PAKSA SELALU NEMBAK KE LARAVEL (GAK PAKE PROXY NEXT.JS LAGI) 🔥
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    // Pastikan path ada slash di depannya
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const url = `${baseUrl}${cleanPath}`;
    const headers = new Headers(options.headers);
    // 2. 🔥 KITA AMBIL TOKEN DARI NEXT-AUTH & MASUKIN KE HEADER 🔥
    // (Ini jalan di Client Component maupun Server Component)
    const session = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$react__$5b$external$5d$__$28$next$2d$auth$2f$react$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__["getSession"])();
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
"[project]/src/services/auth-service.ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-backend.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [api] (ecmascript)");
;
;
const authService = {
    register: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/register`, {
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
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/admin/login/google', {
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
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/login/google', {
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
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/login', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/logout`, {
                method: 'POST'
            });
            return res.message || 'Logout berhasil!';
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getProfile: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/profile`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};
}),
"[project]/src/pages/api/auth/[...nextauth].ts [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__ = __turbopack_context__.i("[externals]/next-auth [external] (next-auth, cjs, [project]/node_modules/next-auth)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$google__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$google$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__ = __turbopack_context__.i("[externals]/next-auth/providers/google [external] (next-auth/providers/google, cjs, [project]/node_modules/next-auth)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/auth-service.ts [api] (ecmascript)");
;
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$google__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$google$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__["default"])({
            id: "google-admin",
            name: "Admin Google",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth$2f$providers$2f$google__$5b$external$5d$__$28$next$2d$auth$2f$providers$2f$google$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__["default"])({
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
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["authService"].loginGoogleAdmin(account.access_token);
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
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["authService"].loginGoogleUser(account.access_token);
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
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$next$2d$auth__$5b$external$5d$__$28$next$2d$auth$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$next$2d$auth$29$__["default"])(authOptions);
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a167bef3._.js.map