(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/src/lib/fetch-backend.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchBackend",
    ()=>fetchBackend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const BASE_URL = ("TURBOPACK compile-time value", "http://localhost:8000") || 'http://localhost:8000';
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/fetch-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchClient",
    ()=>fetchClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
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
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])();
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
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
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
"[project]/frontend/src/services/auth-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authService",
    ()=>authService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fetch-backend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fetch-client.ts [app-client] (ecmascript)");
;
;
const authService = {
    register: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/register`, {
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
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/admin/login/google', {
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
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/login/google', {
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
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBackend"])('/auth/login', {
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/logout`, {
                method: 'POST'
            });
            return res.message || 'Logout berhasil!';
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getProfile: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/auth/profile`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/pages/api/auth/[...nextauth].ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-auth/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-auth/providers/google.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/auth-service.ts [app-client] (ecmascript)");
;
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            id: "google-admin",
            name: "Admin Google",
            clientId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GOOGLE_CLIENT_ID,
            clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GOOGLE_CLIENT_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            id: "google-user",
            name: "User Google",
            clientId: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GOOGLE_CLIENT_ID,
            clientSecret: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.GOOGLE_CLIENT_SECRET
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
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].loginGoogleAdmin(account.access_token);
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
                    const data = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$auth$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authService"].loginGoogleUser(account.access_token);
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
    secret: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXTAUTH_SECRET
};
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(authOptions);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/services/user-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userService",
    ()=>userService
]);
// import { fetchBackend } from '@/lib/fetch-backend';
// import { fetchClient } from '@/lib/fetch-client';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';
// import { PaginatedResponse } from '@/types';
// import { ApiResponse, ApiValidationErrors } from '@/types/api';
// import { UserRegistrations } from '@/types/registration';
// import { DraftRegisterPayload, ProfileData, ProfileStatusResponse, UserWithRegistrations } from '@/types/user';
// import { getServerSession } from 'next-auth';
// export const userService = {
//     getUser: async(id: string): Promise<UserWithRegistrations> => {
//         try {
//         const res = await fetchClient<ApiResponse<UserWithRegistrations>>(`/api/admin/users/${id}`, {
//             method: 'GET',
//         });
//         return res.data as UserWithRegistrations;
//         } catch (error: any) {
//         throw new Error(error.message);
//         }
//     },
//     getUsers: async(page: number = 1): Promise<PaginatedResponse<UserWithRegistrations>> => {
//         try {
//             const session = await getServerSession(authOptions);
//             const token = session?.accessToken;
//             if (!token) {
//                 throw new Error("Unauthorized: Tidak ada token session.");
//             }
//             const res = await fetchBackend(`/admin/users?page=${page}`, {
//                 method: 'GET',
//                 token: token as string,
//             });
//             const response = await res.json();
//             if (response.success && response.data) {
//                 return response.data;
//             }
//             throw new Error(response.message || 'Failed to fetch users');
//         } catch (error: any) {
//             console.error('Error fetching users:', error);
//             throw error;
//         }
//     },
//     checkStatus: async(): Promise<ProfileStatusResponse> => {
//         try {
//         const res = await fetchClient<ApiResponse<ProfileStatusResponse>>('/api/complete-registration/status', {
//             method: 'GET',
//         });
//         return res.data as ProfileStatusResponse;
//         } catch (error: any) {
//         throw new Error(error.message);
//         }
//     },
//     submitProfile: async (payload: ProfileData): Promise<string> => {
//         try {
//         const formData = new FormData();
//         formData.append('major', payload.major);
//         formData.append('phone', payload.phone);
//         formData.append('institution', payload.institution);
//         if (payload.line) formData.append('line', payload.line);
//         if (payload.nrp) formData.append('nrp', payload.nrp);
//         if (payload.batch) formData.append('batch', payload.batch);
//         if (payload.whatsapp) formData.append('whatsapp', payload.whatsapp);
//         if (payload.line_id) formData.append('line_id', payload.line_id);
//         if (payload.asal_sekolah) formData.append('asal_sekolah', payload.asal_sekolah);
//         if (payload.ktm_path) formData.append('ktm_path', payload.ktm_path);
//         if (payload.id_card_path) formData.append('id_card_path', payload.id_card_path);
//         const res = await fetchClient<ApiResponse>('/api/complete-registration/submit', {
//             method: 'POST',
//             body: formData,
//         });
//         return res.message || 'Profil lengkap!';
//         } catch (error: any) {
//         if (error.isValidationError) throw { isValidationError: true, errors: error.data };
//         throw new Error(error.message);
//         }
//     },
//     saveDraft: async (payload: DraftRegisterPayload): Promise<string> => {
//         try {
//         const formData = new FormData();
//         // Format array draft_data untuk Laravel
//         if (payload.draft_data.institution) formData.append('draft_data[institution]', payload.draft_data.institution);
//         if (payload.draft_data.phone) formData.append('draft_data[phone]', payload.draft_data.phone);
//         if (payload.draft_data.line) formData.append('draft_data[line]', payload.draft_data.line);
//         if (payload.draft_data.major) formData.append('draft_data[major]', payload.draft_data.major);
//         if (payload.draft_data.nrp) formData.append('draft_data[nrp]', payload.draft_data.nrp);
//         if (payload.draft_data.batch) formData.append('draft_data[batch]', payload.draft_data.batch);
//         if (payload.draft_data.ktm_path) formData.append('draft_data[ktm_path]', payload.draft_data.ktm_path);
//         if (payload.draft_data.id_card_path) formData.append('draft_data[id_card_path]', payload.draft_data.id_card_path);
//         const res = await fetchClient<ApiResponse>('/api/complete-registration/draft', {
//             method: 'POST',
//             body: formData,
//         });
//         return res.message || 'Draft profil disimpan';
//         } catch (error: any) {
//         if (error.isValidationError) throw { isValidationError: true, errors: error.data };
//         throw new Error(error.message);
//         }
//     },
//     getRegistrations: async (): Promise<UserRegistrations> => {
//         try {
//         const res = await fetchClient<ApiResponse<UserRegistrations>>('/api/registrations', {
//             method: 'GET',
//         });
//         return res.data as UserRegistrations;
//         } catch (error: any) {
//         throw new Error(error.message);
//         }
//     },
// };
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fetch-backend.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fetch-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/pages/api/auth/[...nextauth].ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-auth/index.js [app-client] (ecmascript)");
;
;
;
;
const userService = {
    getUser: async (id)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/users/${id}`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getUsers: async (page = 1)=>{
        try {
            const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$pages$2f$api$2f$auth$2f5b2e2e2e$nextauth$5d2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authOptions"]);
            const token = session?.accessToken;
            if (!token) {
                throw new Error("Unauthorized: Tidak ada token session.");
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$backend$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchBackend"])(`/admin/users?page=${page}`, {
                method: 'GET',
                token: token
            });
            const response = await res.json();
            if (response.success && response.data) {
                return response.data;
            }
            throw new Error(response.message || 'Failed to fetch users');
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },
    checkStatus: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])('/api/complete-registration/status', {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    submitProfile: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])('/api/complete-registration/submit', {
                method: 'POST',
                body: payload
            });
            return res.message || 'Profil lengkap!';
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data || error.errors
            };
            throw new Error(error.message);
        }
    },
    saveDraft: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])('/api/complete-registration/draft', {
                method: 'POST',
                body: payload
            });
            return res.message || 'Draft profil disimpan';
        } catch (error) {
            if (error.isValidationError) throw {
                isValidationError: true,
                errors: error.data || error.errors
            };
            throw new Error(error.message);
        }
    },
    getRegistrations: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])('/api/registrations', {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/theme.ts
__turbopack_context__.s([
    "themeColors",
    ()=>themeColors
]);
const themeColors = {
    bg: '#1a1a1a',
    cardBg: 'rgba(28, 28, 27, 0.4)',
    textMain: '#FFFFFF',
    textMuted: '#bebebf',
    primary: '#bebebf',
    primaryHover: '#dcdad9',
    border: '#494947',
    inputBg: '#bebebf' // Warna abu-abu solid untuk input form (kayak di gambar)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/registration/CompleteProfileForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompleteProfileForm",
    ()=>CompleteProfileForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/user-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/theme.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function CompleteProfileForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: session, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const userType = session?.user?.userType;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: statusData, isLoading: isLoadingStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'profileStatus'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].checkStatus
    });
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [line, setLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [major, setMajor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [documentFile, setDocumentFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nrp, setNrp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [batch, setBatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [institution, setInstitution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // 1. 🔥 JURUS AUTO-HEAL SINKRONISASI 🔥
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompleteProfileForm.useEffect": ()=>{
            // Kalau Laravel bilang udah komplit...
            if (statusData?.is_completed) {
                // Tapi NextAuth masih nganggap belum...
                if (session?.user?.is_profile_complete !== true) {
                    console.log("[SYSTEM] Sinkronisasi Token...");
                    update({
                        is_profile_complete: true
                    }).then({
                        "CompleteProfileForm.useEffect": ()=>{
                            window.location.href = '/dashboard';
                        }
                    }["CompleteProfileForm.useEffect"]);
                } else {
                    // Kalau udah sinkron dua-duanya
                    router.push('/dashboard');
                }
                return;
            }
            // Tarik Draft
            const data = statusData;
            if (data?.draft_data) {
                setPhone(data.draft_data.phone || '');
                setLine(data.draft_data.line || '');
                setMajor(data.draft_data.major || '');
                setNrp(data.draft_data.nrp || '');
                setBatch(data.draft_data.batch || '');
                setInstitution(data.draft_data.institution || '');
            }
        }
    }["CompleteProfileForm.useEffect"], [
        statusData,
        session,
        router,
        update
    ]);
    // 2. AUTO-SAVE DRAFT 
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompleteProfileForm.useEffect": ()=>{
            if (isLoadingStatus || statusData?.is_completed) return;
            const timer = setTimeout({
                "CompleteProfileForm.useEffect.timer": ()=>{
                    if (phone || line || major || nrp || batch || institution) {
                        const draftForm = new FormData();
                        if (phone) draftForm.append('draft_data[phone]', phone);
                        if (line) draftForm.append('draft_data[line]', line);
                        if (major) draftForm.append('draft_data[major]', major);
                        if (nrp) draftForm.append('draft_data[nrp]', nrp);
                        if (batch) draftForm.append('draft_data[batch]', batch);
                        if (institution) draftForm.append('draft_data[institution]', institution);
                        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].saveDraft(draftForm).catch({
                            "CompleteProfileForm.useEffect.timer": ()=>{}
                        }["CompleteProfileForm.useEffect.timer"]);
                    }
                }
            }["CompleteProfileForm.useEffect.timer"], 2000);
            return ({
                "CompleteProfileForm.useEffect": ()=>clearTimeout(timer)
            })["CompleteProfileForm.useEffect"];
        }
    }["CompleteProfileForm.useEffect"], [
        phone,
        line,
        major,
        nrp,
        batch,
        institution,
        isLoadingStatus,
        statusData
    ]);
    // 3. Handle Submit
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setFormErrors(null);
        if (!documentFile) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'warning',
                title: 'FILE MISSING',
                text: `Please upload your ${userType === 'INTERNAL' ? 'KTM' : 'ID Card'}!`,
                background: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].cardBg,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].textMain,
                confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].primary
            });
        }
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('phone', phone);
            if (line) formData.append('line', line);
            formData.append('major', major);
            if (userType === 'INTERNAL') {
                formData.append('nrp', nrp);
                formData.append('batch', batch);
                formData.append('ktm_path', documentFile);
                formData.append('institution', 'Petra Christian University');
            } else {
                formData.append('institution', institution);
                formData.append('id_card_path', documentFile);
            }
            // Submit ke API
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].submitProfile(formData);
            // Reset memori cache API
            await queryClient.invalidateQueries({
                queryKey: [
                    'profileStatus'
                ]
            });
            // 🔥 UPDATE TOKEN SEKARANG JUGA! 🔥
            await update({
                is_profile_complete: true
            });
            // Kasih delay pake Swal buat memastikan cookie nyangkut
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'success',
                title: 'ACCESS GRANTED',
                text: 'Profile completed successfully!',
                background: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].cardBg,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].textMain,
                timer: 1500,
                showConfirmButton: false
            });
            // Banting pintu masuk dashboard!
            window.location.href = '/dashboard';
        } catch (error) {
            if (error.isValidationError) {
                setFormErrors(error.errors);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'error',
                    title: 'ACCESS DENIED',
                    text: 'Please check your inputs! Some data are invalid.',
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].cardBg,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].textMain,
                    confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].primary
                });
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'error',
                    title: 'SYSTEM ERROR',
                    text: error.message || 'Failed to submit profile.',
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].cardBg,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].textMain,
                    confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].primary
                });
            }
        } finally{
            setIsLoading(false);
        }
    };
    if (isLoadingStatus || statusData?.is_completed || !userType) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-xl relative z-10 flex flex-col items-center my-10 backdrop-blur-sm p-8 rounded-3xl border border-white/10",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].cardBg
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl md:text-5xl font-black mb-8 uppercase tracking-widest text-center",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].textMain,
                    textShadow: '0 0 25px rgba(255,255,255,0.8)'
                },
                children: "COMPLETE PROFILE"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "w-full space-y-5",
                children: [
                    userType === 'INTERNAL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputPill, {
                                placeholder: "NRP *",
                                value: nrp,
                                onChange: setNrp,
                                error: formErrors?.nrp
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputPill, {
                                placeholder: "Batch / Angkatan (e.g. 2024) *",
                                value: batch,
                                onChange: setBatch,
                                error: formErrors?.batch
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    userType === 'EXTERNAL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputPill, {
                        placeholder: "Institution / School *",
                        value: institution,
                        onChange: setInstitution,
                        error: formErrors?.institution
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputPill, {
                        placeholder: "Major / Jurusan *",
                        value: major,
                        onChange: setMajor,
                        error: formErrors?.major
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputPill, {
                        placeholder: "Active WhatsApp Number *",
                        value: phone,
                        onChange: setPhone,
                        error: formErrors?.phone
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputPill, {
                        placeholder: "Line ID (Optional)",
                        value: line,
                        onChange: setLine,
                        required: false,
                        error: formErrors?.line
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-bold mb-3 uppercase tracking-widest pl-4",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].textMain
                                },
                                children: [
                                    "UPLOAD ",
                                    userType === 'INTERNAL' ? 'KTM (STUDENT ID)' : 'ID CARD',
                                    " *"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                accept: ".jpg,.jpeg,.png,.pdf",
                                onChange: (e)=>setDocumentFile(e.target.files?.[0] || null),
                                className: "w-full px-6 py-4 rounded-full text-sm focus:outline-none transition-all font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-bold file:uppercase file:tracking-widest file:bg-black file:text-white hover:file:bg-gray-800",
                                style: {
                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].inputBg,
                                    color: '#1a1a1a'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            formErrors?.ktm_path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest",
                                children: [
                                    "⚠️ ",
                                    formErrors.ktm_path[0]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                lineNumber: 200,
                                columnNumber: 36
                            }, this),
                            formErrors?.id_card_path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest",
                                children: [
                                    "⚠️ ",
                                    formErrors.id_card_path[0]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                lineNumber: 201,
                                columnNumber: 40
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isLoading,
                        className: "w-full py-5 rounded-full font-black cursor-pointer text-xl hover:-translate-y-1 transition-all mt-8 disabled:opacity-50 uppercase tracking-widest",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].textMain,
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].bg,
                            boxShadow: '0 0 15px rgba(255,255,255,0.3)'
                        },
                        children: isLoading ? 'SUBMITTING...' : 'SUBMIT & CONTINUE'
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s(CompleteProfileForm, "8AA9Lb3mMuTDREWkDr0LSEji6xg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = CompleteProfileForm;
function InputPill({ placeholder, value, onChange, required = true, error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                required: required,
                placeholder: placeholder,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                className: "w-full px-8 py-5 rounded-full text-lg focus:outline-none transition-all placeholder:text-black/60 font-medium",
                style: {
                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeColors"].inputBg,
                    color: '#1a1a1a',
                    boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.1)'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest uppercase",
                children: [
                    "⚠️ ",
                    error[0]
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                lineNumber: 225,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_c1 = InputPill;
var _c, _c1;
__turbopack_context__.k.register(_c, "CompleteProfileForm");
__turbopack_context__.k.register(_c1, "InputPill");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_4a131855._.js.map