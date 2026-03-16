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
;
var _s = __turbopack_context__.k.signature();
// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { userService } from '@/services/user-service'; 
// import { useSession } from 'next-auth/react';
// import Swal from 'sweetalert2'; 
// import { themeColors } from '@/lib/theme';
// export function CompleteProfileForm() {
//   const router = useRouter(); 
//   const { data: session, update } = useSession();
//   const userType = session?.user?.userType; 
//   const queryClient = useQueryClient();
//   const { data: statusData, isLoading: isLoadingStatus } = useQuery({
//       queryKey: ['profileStatus'],
//       queryFn: userService.checkStatus,
//   });
//   const [phone, setPhone] = useState('');
//   const [line, setLine] = useState(''); 
//   const [major, setMajor] = useState('');
//   const [documentFile, setDocumentFile] = useState<File | null>(null);
//   const [nrp, setNrp] = useState('');
//   const [batch, setBatch] = useState('');
//   const [institution, setInstitution] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [formErrors, setFormErrors] = useState<any>(null);
//   // 1. 🔥 JURUS AUTO-HEAL SINKRONISASI 🔥
//   useEffect(() => {
//     // Kalau Laravel bilang udah komplit...
//     if (statusData?.is_completed) {
//       // Tapi NextAuth masih nganggap belum...
//       if (session?.user?.is_profile_complete !== true) {
//         console.log("[SYSTEM] Sinkronisasi Token...");
//         update({ is_profile_complete: true }).then(() => {
//           window.location.href = '/dashboard';
//         });
//       } else {
//         // Kalau udah sinkron dua-duanya
//         router.push('/dashboard');
//       }
//       return; 
//     }
//     // Tarik Draft
//     const data = statusData as any;
//     if (data?.draft_data) {
//       setPhone(data.draft_data.phone || '');
//       setLine(data.draft_data.line || ''); 
//       setMajor(data.draft_data.major || '');
//       setNrp(data.draft_data.nrp || '');
//       setBatch(data.draft_data.batch || '');
//       setInstitution(data.draft_data.institution || '');
//     }
//   }, [statusData, session, router, update]);
//   // 2. AUTO-SAVE DRAFT 
//   useEffect(() => {
//     if (isLoadingStatus || statusData?.is_completed) return;
//     const timer = setTimeout(() => {
//       if (phone || line || major || nrp || batch || institution) {
//         const draftForm = new FormData();
//         if (phone) draftForm.append('draft_data[phone]', phone);
//         if (line) draftForm.append('draft_data[line]', line);
//         if (major) draftForm.append('draft_data[major]', major);
//         if (nrp) draftForm.append('draft_data[nrp]', nrp);
//         if (batch) draftForm.append('draft_data[batch]', batch);
//         if (institution) draftForm.append('draft_data[institution]', institution);
//         userService.saveDraft(draftForm).catch(() => {});
//       }
//     }, 2000); 
//     return () => clearTimeout(timer);
//   }, [phone, line, major, nrp, batch, institution, isLoadingStatus, statusData]);
//   // 3. Handle Submit
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormErrors(null);
//     if (!documentFile) {
//       return Swal.fire({
//         icon: 'warning',
//         title: 'FILE MISSING',
//         text: `Please upload your ${userType === 'INTERNAL' ? 'KTM' : 'ID Card'}!`,
//         background: themeColors.cardBg,
//         color: themeColors.textMain,
//         confirmButtonColor: themeColors.primary
//       });
//     }
//     setIsLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('phone', phone);
//       if (line) formData.append('line', line); 
//       formData.append('major', major);
//       if (userType === 'INTERNAL') {
//         formData.append('nrp', nrp);
//         formData.append('batch', batch);
//         formData.append('ktm_path', documentFile); 
//         formData.append('institution', 'Petra Christian University'); 
//       } else {
//         formData.append('institution', institution);
//         formData.append('id_card_path', documentFile); 
//       }
//       // Submit ke API
//       await userService.submitProfile(formData as any); 
//       // Reset memori cache API
//       await queryClient.invalidateQueries({ queryKey: ['profileStatus'] });
//       // 🔥 UPDATE TOKEN SEKARANG JUGA! 🔥
//       await update({ is_profile_complete: true });
//       // Kasih delay pake Swal buat memastikan cookie nyangkut
//       await Swal.fire({
//         icon: 'success',
//         title: 'ACCESS GRANTED',
//         text: 'Profile completed successfully!',
//         background: themeColors.cardBg,
//         color: themeColors.textMain,
//         timer: 1500,
//         showConfirmButton: false
//       });
//       // Banting pintu masuk dashboard!
//       window.location.href = '/dashboard';
//     } catch (error: any) {
//       if (error.isValidationError) {
//         setFormErrors(error.errors);
//         Swal.fire({
//           icon: 'error',
//           title: 'ACCESS DENIED',
//           text: 'Please check your inputs! Some data are invalid.',
//           background: themeColors.cardBg,
//           color: themeColors.textMain,
//           confirmButtonColor: themeColors.primary
//         });
//       } else {
//         Swal.fire({
//           icon: 'error',
//           title: 'SYSTEM ERROR',
//           text: error.message || 'Failed to submit profile.',
//           background: themeColors.cardBg,
//           color: themeColors.textMain,
//           confirmButtonColor: themeColors.primary
//         });
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   if (isLoadingStatus || statusData?.is_completed || !userType) return null;
//   return (
//     <div className="w-full max-w-xl relative z-10 flex flex-col items-center my-10 backdrop-blur-sm p-8 rounded-3xl border border-white/10" style={{ backgroundColor: themeColors.cardBg }}>
//       <h1 
//         className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-widest text-center" 
//         style={{ color: themeColors.textMain, textShadow: '0 0 25px rgba(255,255,255,0.8)' }}
//       >
//         COMPLETE PROFILE
//       </h1>
//       <form onSubmit={handleSubmit} className="w-full space-y-5">
//         {userType === 'INTERNAL' && (
//           <>
//             <InputPill placeholder="NRP *" value={nrp} onChange={setNrp} error={formErrors?.nrp} />
//             <InputPill placeholder="Batch / Angkatan (e.g. 2024) *" value={batch} onChange={setBatch} error={formErrors?.batch} />
//           </>
//         )}
//         {userType === 'EXTERNAL' && (
//           <InputPill placeholder="Institution / School *" value={institution} onChange={setInstitution} error={formErrors?.institution} />
//         )}
//         <InputPill placeholder="Major / Jurusan *" value={major} onChange={setMajor} error={formErrors?.major} />
//         <InputPill placeholder="Active WhatsApp Number *" value={phone} onChange={setPhone} error={formErrors?.phone} />
//         <InputPill placeholder="Line ID (Optional)" value={line} onChange={setLine} required={false} error={formErrors?.line} />
//         <div className="w-full">
//           <label className="block text-sm font-bold mb-3 uppercase tracking-widest pl-4" style={{ color: themeColors.textMain }}>
//             UPLOAD {userType === 'INTERNAL' ? 'KTM (STUDENT ID)' : 'ID CARD'} *
//           </label>
//           <input 
//             type="file" accept=".jpg,.jpeg,.png,.pdf"
//             onChange={(e) => setDocumentFile(e.target.files?.[0] || null)}
//             className="w-full px-6 py-4 rounded-full text-sm focus:outline-none transition-all font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-bold file:uppercase file:tracking-widest file:bg-black file:text-white hover:file:bg-gray-800"
//             style={{ backgroundColor: themeColors.inputBg, color: '#1a1a1a' }}
//           />
//           {formErrors?.ktm_path && <p className="text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest">⚠️ {formErrors.ktm_path[0]}</p>}
//           {formErrors?.id_card_path && <p className="text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest">⚠️ {formErrors.id_card_path[0]}</p>}
//         </div>
//         <button 
//           type="submit" disabled={isLoading}
//           className="w-full py-5 rounded-full font-black cursor-pointer text-xl hover:-translate-y-1 transition-all mt-8 disabled:opacity-50 uppercase tracking-widest"
//           style={{ backgroundColor: themeColors.textMain, color: themeColors.bg, boxShadow: '0 0 15px rgba(255,255,255,0.3)' }}
//         >
//           {isLoading ? 'SUBMITTING...' : 'SUBMIT & CONTINUE'}
//         </button>
//       </form>
//     </div>
//   );
// }
// function InputPill({ placeholder, value, onChange, required = true, error }: any) {
//   return (
//     <div className="w-full">
//       <input 
//         type="text" required={required} placeholder={placeholder} value={value} 
//         onChange={(e) => onChange(e.target.value)} 
//         className="w-full px-8 py-5 rounded-full text-lg focus:outline-none transition-all placeholder:text-black/60 font-medium" 
//         style={{ backgroundColor: themeColors.inputBg, color: '#1a1a1a', boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.1)' }}
//       />
//       {error && <p className="text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest uppercase">⚠️ {error[0]}</p>}
//     </div>
//   );
// }
'use client';
;
;
;
;
;
;
// INJEKSI COLOR PALETTE DYSTOPIAN
const palette = {
    onyx: '#1C1C1B',
    obsidian: '#1a1a1a',
    walnut: '#6A5D52',
    greige: '#B7AC9B',
    ash: '#979086',
    stucco: '#E2E2DE',
    graphite: '#494947',
    gravel: '#7b787a'
};
// 🔥 HELPER SAKTI: Mencegah Layar Putih (Crash) kalau error dari Laravel bentuknya aneh
const getErrorMsg = (err)=>{
    if (!err) return null;
    if (Array.isArray(err)) return typeof err[0] === 'string' ? err[0] : JSON.stringify(err[0]);
    if (typeof err === 'string') return err;
    return JSON.stringify(err);
};
function CompleteProfileForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: session, status, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const userType = session?.user?.userType;
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data: statusData, isLoading: isLoadingStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'profileStatus'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].checkStatus,
        enabled: status === 'authenticated'
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
            if (statusData?.is_completed) {
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
                    router.push('/dashboard');
                }
                return;
            }
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
                background: palette.onyx,
                color: palette.stucco,
                confirmButtonColor: palette.walnut,
                customClass: {
                    popup: 'border border-[#7b787a] rounded-none',
                    title: 'font-black tracking-[0.2em] uppercase text-xl',
                    confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
                }
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$user$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userService"].submitProfile(formData);
            await queryClient.invalidateQueries({
                queryKey: [
                    'profileStatus'
                ]
            });
            await update({
                is_profile_complete: true
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'success',
                title: 'ACCESS GRANTED',
                text: 'Profile completed successfully!',
                background: palette.onyx,
                color: palette.stucco,
                timer: 1500,
                showConfirmButton: false,
                customClass: {
                    popup: 'border border-[#7b787a] rounded-none',
                    title: 'font-black tracking-[0.2em] uppercase text-xl'
                }
            });
            window.location.href = '/dashboard';
        } catch (error) {
            console.error("DEBUG ERROR DARI LARAVEL:", error);
            if (error.isValidationError) {
                setFormErrors(error.errors);
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'error',
                    title: 'ACCESS DENIED',
                    text: 'Please check your inputs! Some data are invalid.',
                    background: palette.onyx,
                    color: palette.stucco,
                    confirmButtonColor: '#ef4444',
                    customClass: {
                        popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                        title: 'font-black tracking-[0.2em]',
                        confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
                    }
                });
            } else {
                const safeErrorMsg = typeof error.message === 'string' ? error.message : JSON.stringify(error.message || 'SYSTEM FAILURE');
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'error',
                    title: 'SYSTEM ERROR',
                    text: safeErrorMsg,
                    background: palette.onyx,
                    color: palette.stucco,
                    confirmButtonColor: '#ef4444',
                    customClass: {
                        popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                        title: 'font-black tracking-[0.2em]',
                        confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
                    }
                });
            }
        } finally{
            setIsLoading(false);
        }
    };
    if (isLoadingStatus || status === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 text-xs font-bold tracking-[0.4em] uppercase animate-pulse",
            style: {
                color: palette.ash
            },
            children: "DECRYPTING IDENTITY..."
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
            lineNumber: 425,
            columnNumber: 12
        }, this);
    }
    if (statusData?.is_completed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 text-xs font-bold tracking-[0.4em] uppercase",
            style: {
                color: palette.stucco
            },
            children: "PROFILE COMPLETED. REDIRECTING..."
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
            lineNumber: 428,
            columnNumber: 14
        }, this);
    }
    if (!userType) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-10 w-full max-w-3xl mx-auto px-4 my-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-10 md:p-14 border bg-black/40 backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
            style: {
                borderColor: palette.graphite,
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-9xl font-black italic",
                        style: {
                            color: palette.stucco
                        },
                        children: "P"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                    lineNumber: 438,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 mb-6 relative z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-2 h-2 rounded-full animate-pulse",
                            style: {
                                backgroundColor: palette.stucco,
                                boxShadow: `0 0 10px ${palette.stucco}`
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                            lineNumber: 443,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                            style: {
                                color: palette.ash
                            },
                            children: "IDENTITY VERIFICATION PROTOCOL"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                            lineNumber: 444,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest relative z-10",
                    style: {
                        color: palette.stucco
                    },
                    children: "COMPLETE PROFILE"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                    lineNumber: 447,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10",
                    style: {
                        color: palette.ash
                    },
                    children: "Provide your valid credentials to gain full access to the Innofashion Show 8 terminal."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                    lineNumber: 450,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-8 relative z-10",
                    children: [
                        userType === 'INTERNAL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DystopianInput, {
                                    label: "NRP",
                                    placeholder: "E.g. c112xxxx",
                                    value: nrp,
                                    onChange: setNrp,
                                    error: formErrors?.nrp
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                    lineNumber: 457,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DystopianInput, {
                                    label: "BATCH / ANGKATAN",
                                    placeholder: "E.g. 2024",
                                    value: batch,
                                    onChange: setBatch,
                                    error: formErrors?.batch
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                            lineNumber: 456,
                            columnNumber: 13
                        }, this),
                        userType === 'EXTERNAL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DystopianInput, {
                            label: "INSTITUTION / SCHOOL",
                            placeholder: "Enter your institution",
                            value: institution,
                            onChange: setInstitution,
                            error: formErrors?.institution
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                            lineNumber: 462,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DystopianInput, {
                            label: "MAJOR / JURUSAN",
                            placeholder: "Enter your major",
                            value: major,
                            onChange: setMajor,
                            error: formErrors?.major
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                            lineNumber: 465,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DystopianInput, {
                                    label: "ACTIVE WHATSAPP",
                                    placeholder: "+62...",
                                    value: phone,
                                    onChange: setPhone,
                                    error: formErrors?.phone
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                    lineNumber: 468,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DystopianInput, {
                                    label: "LINE ID (OPTIONAL)",
                                    placeholder: "Your Line ID",
                                    value: line,
                                    onChange: setLine,
                                    required: false,
                                    error: formErrors?.line
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                    lineNumber: 469,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                            lineNumber: 467,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-[10px] font-bold mb-4 uppercase tracking-[0.2em]",
                                    style: {
                                        color: palette.greige
                                    },
                                    children: [
                                        "UPLOAD ",
                                        userType === 'INTERNAL' ? 'KTM (STUDENT ID)' : 'ID CARD',
                                        " (JPG/PNG/PDF) *"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                    lineNumber: 473,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: ".jpg,.jpeg,.png,.pdf",
                                    onChange: (e)=>setDocumentFile(e.target.files?.[0] || null),
                                    className: "w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none focus:border-white/50",
                                    style: {
                                        backgroundColor: palette.obsidian,
                                        borderColor: formErrors?.ktm_path || formErrors?.id_card_path ? '#ef4444' : palette.graphite,
                                        color: palette.ash
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                    lineNumber: 476,
                                    columnNumber: 13
                                }, this),
                                formErrors?.ktm_path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]",
                                    children: [
                                        "⚠️ ",
                                        getErrorMsg(formErrors.ktm_path)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                    lineNumber: 486,
                                    columnNumber: 38
                                }, this),
                                formErrors?.id_card_path && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]",
                                    children: [
                                        "⚠️ ",
                                        getErrorMsg(formErrors.id_card_path)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                                    lineNumber: 487,
                                    columnNumber: 42
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                            lineNumber: 472,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: "w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 mt-6",
                            style: {
                                backgroundColor: palette.stucco,
                                color: palette.onyx,
                                boxShadow: `0 0 15px ${palette.greige}40`
                            },
                            children: isLoading ? 'SYNCING DATA...' : 'SUBMIT & CONTINUE'
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                            lineNumber: 490,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                    lineNumber: 454,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
            lineNumber: 434,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_s(CompleteProfileForm, "h7sa6Uiq1Y8pfdKvO6Z/EP6BgiE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = CompleteProfileForm;
// Komponen Input ala Dystopian
function DystopianInput({ label, placeholder, value, onChange, required = true, error }) {
    const errorMsg = getErrorMsg(error);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-[10px] font-bold mb-3 uppercase tracking-[0.2em]",
                style: {
                    color: palette.greige
                },
                children: [
                    label,
                    " ",
                    required && '*'
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                required: required,
                placeholder: placeholder,
                value: value,
                onChange: (e)=>onChange(e.target.value),
                className: "w-full text-sm border p-4 transition-all focus:outline-none focus:border-white/50 bg-transparent font-medium tracking-widest placeholder:text-white/20",
                style: {
                    backgroundColor: palette.obsidian,
                    borderColor: errorMsg ? '#ef4444' : palette.graphite,
                    color: palette.stucco
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            errorMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-[10px] mt-3 font-bold tracking-[0.2em] uppercase",
                children: [
                    "⚠️ ",
                    errorMsg
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
                lineNumber: 521,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/registration/CompleteProfileForm.tsx",
        lineNumber: 507,
        columnNumber: 5
    }, this);
}
_c1 = DystopianInput;
var _c, _c1;
__turbopack_context__.k.register(_c, "CompleteProfileForm");
__turbopack_context__.k.register(_c1, "DystopianInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_5204b307._.js.map