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
    const baseUrl = ("TURBOPACK compile-time value", "http://localhost:8000") || 'http://localhost:8000';
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
"[project]/src/components/user/payment/PaymentInstructionBox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PaymentInstructionBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-client] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/palette.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function PaymentInstructionBox({ paymentDetails, price }) {
    const copyToClipboard = (text, label)=>{
        navigator.clipboard.writeText(text).then(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`${label} — COPY INITIATED`, {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite}`,
                    fontWeight: 900,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '11px'
                },
                duration: 2000,
                icon: '📋'
            });
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border relative overflow-hidden",
        style: {
            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].obsidian,
            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-8xl font-black italic",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                    },
                    children: "$"
                }, void 0, false, {
                    fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 py-5 border-b flex items-center gap-3",
                style: {
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                    backgroundColor: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "w-2 h-2 rounded-full animate-pulse",
                        style: {
                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige,
                            boxShadow: `0 0 10px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[10px] font-black tracking-[0.4em] uppercase",
                        style: {
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                        },
                        children: "PAYMENT PROTOCOL"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 space-y-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[9px] tracking-[0.2em] mb-2 uppercase",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                },
                                children: "TRANSFER AMOUNT"
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-black tracking-widest",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                },
                                children: [
                                    "Rp ",
                                    price.toLocaleString('id-ID')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    paymentDetails.bank_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                size: 16,
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash,
                                    marginTop: 2,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] tracking-[0.2em] mb-1 uppercase",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                        },
                                        children: "FINANCIAL NODE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-black tracking-widest uppercase",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                        },
                                        children: paymentDetails.bank_name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    paymentDetails.bank_account_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                size: 16,
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash,
                                    marginTop: 2,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] tracking-[0.2em] mb-1 uppercase",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                        },
                                        children: "ACCOUNT HOLDER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-black tracking-widest uppercase",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                        },
                                        children: paymentDetails.bank_account_name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    paymentDetails.bank_account_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
                                size: 16,
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash,
                                    marginTop: 2,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] tracking-[0.2em] mb-1 uppercase",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                        },
                                        children: "ACCOUNT ID"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-lg font-black tracking-[0.3em]",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                                },
                                                children: paymentDetails.bank_account_number
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>copyToClipboard(paymentDetails.bank_account_number, 'ACCOUNT ID'),
                                                className: "flex items-center gap-2 px-3 py-1.5 border text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer hover:scale-[1.05]",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige,
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige;
                                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite;
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite;
                                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx;
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, this),
                                                    " COPY"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    paymentDetails.transfer_note_format && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                size: 16,
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash,
                                    marginTop: 2,
                                    flexShrink: 0
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[9px] tracking-[0.2em] mb-1 uppercase",
                                        style: {
                                            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                        },
                                        children: "TRANSFER NOTE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[.7rem] lg:text-sm font-black tracking-wider px-3 py-2 border",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx
                                                },
                                                children: paymentDetails.transfer_note_format
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>copyToClipboard(paymentDetails.transfer_note_format, 'TRANSFER NOTE'),
                                                className: "flex items-center gap-2 px-3 py-1.5 border text-[9px] font-black uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer hover:scale-[1.05]",
                                                style: {
                                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige,
                                                    backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige;
                                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite;
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite;
                                                    e.currentTarget.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx;
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 19
                                                    }, this),
                                                    " COPY"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-8 py-4 border-t",
                style: {
                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[9px] tracking-[0.15em] uppercase",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                    },
                    children: "⚠ TRANSFER EXACT AMOUNT. INCLUDE THE TRANSFER NOTE FOR FASTER VERIFICATION."
                }, void 0, false, {
                    fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                    lineNumber: 194,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/user/payment/PaymentInstructionBox.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = PaymentInstructionBox;
var _c;
__turbopack_context__.k.register(_c, "PaymentInstructionBox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/EventRegisterClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventRegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/event-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/palette.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$payment$2f$PaymentInstructionBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/user/payment/PaymentInstructionBox.tsx [app-client] (ecmascript)");
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
;
;
function EventRegisterPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const key = params?.key;
    const { data: event, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'event',
            key
        ],
        queryFn: {
            "EventRegisterPage.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventService"].getEvent(key)
        }["EventRegisterPage.useQuery"],
        enabled: !!key
    });
    const [paymentFile, setPaymentFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentPreview, setPaymentPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCompressing, setIsCompressing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFileUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) {
            setPaymentFile(null);
            setPaymentPreview(null);
            return;
        }
        if (file.type === 'application/pdf') {
            setPaymentFile(file);
            setPaymentPreview(null);
            return;
        }
        setIsCompressing(true);
        try {
            const options = {
                maxSizeMB: 0.5,
                maxWidthOrHeight: 1280,
                useWebWorker: true
            };
            const compressedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(file, options);
            setPaymentFile(compressedFile);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPaymentPreview(reader.result);
            };
            reader.readAsDataURL(compressedFile);
        } catch (error) {
            setPaymentFile(file);
            // Create preview for original file
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setPaymentPreview(reader.result);
            };
            reader.readAsDataURL(file);
        } finally{
            setIsCompressing(false);
        }
    };
    const isPaid = event ? Number(event.price) > 0 : false;
    // 🔥 1. FETCH STATUS REGISTRASI UNTUK CEK DOBEL DAFTAR / REJECT 🔥
    const { data: regStatus, isLoading: isStatusLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'event-status',
            key
        ],
        queryFn: {
            "EventRegisterPage.useQuery": async ()=>{
                try {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventService"].checkStatusRegistrations(key);
                } catch (error) {
                    return null;
                }
            }
        }["EventRegisterPage.useQuery"],
        enabled: !!key,
        retry: false,
        // 🔥 TAMBAHIN DUA BARIS SAKTI INI BRO! 🔥
        staleTime: 0,
        gcTime: 0
    });
    // Logika Penjaga Gawang
    const statusStr = regStatus?.status?.toUpperCase() || '';
    const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
    // 🔥 TAMBAHIN BARIS INI YANG KELUPAAN DI EVENT 🔥
    const isUnregistered = statusStr === 'UNREGISTERED';
    // 🔥 TAMBAHIN INI BIAR DRAFT BISA LEWAT 🔥
    const isDraft = statusStr === 'DRAFT';
    // Berarti dia "Sudah Daftar" HANYA JIKA statusnya bukan REJECT, bukan UNREGISTERED, dan bukan DRAFT
    const isAlreadyRegistered = regStatus && regStatus.status && !isRejected && !isUnregistered && !isDraft;
    // 🔥 2. EFEK USIR USER KALAU UDAH DAFTAR 🔥
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "EventRegisterPage.useEffect": ()=>{
            if (isAlreadyRegistered) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'info',
                    title: 'ALREADY REGISTERED',
                    text: 'You have already submitted a registration protocol for this event. Check your dashboard for updates.',
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                    confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].walnut,
                    allowOutsideClick: false,
                    customClass: {
                        popup: 'border border-[#7b787a] rounded-none',
                        title: 'font-black tracking-[0.2em] uppercase text-xl',
                        confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3'
                    }
                }).then({
                    "EventRegisterPage.useEffect": ()=>{
                        router.push('/dashboard');
                    }
                }["EventRegisterPage.useEffect"]);
            }
        }
    }["EventRegisterPage.useEffect"], [
        isAlreadyRegistered,
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setFormErrors(null);
        if (isPaid && !paymentFile) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('PAYMENT PROOF IS REQUIRED.', {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite}`
                }
            });
        }
        // Beda message untuk event gratis vs berbayar
        const confirmationMessage = isPaid ? 'Are you sure you want to submit? Please ensure your payment proof is correct. Data cannot be altered later.' : 'Are you sure you want to register for this free event? Once confirmed, you cannot cancel your registration.';
        const confirmation = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            icon: 'question',
            title: isPaid ? 'CONFIRM SUBMISSION?' : 'CONFIRM REGISTRATION?',
            text: confirmationMessage,
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
            showCancelButton: true,
            confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].walnut,
            cancelButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
            confirmButtonText: isPaid ? 'SUBMIT NOW' : 'YES, REGISTER',
            cancelButtonText: 'CANCEL',
            customClass: {
                popup: 'border border-[#7b787a] rounded-none',
                title: 'font-black tracking-[0.2em] uppercase text-xl',
                confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2',
                cancelButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
            }
        });
        if (!confirmation.isConfirmed) return;
        setIsSubmitting(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventService"].submitFinal(key, paymentFile);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Registration protocol submitted successfully!', {
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                    border: `1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite}`
                }
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'event',
                    key
                ]
            });
            router.push('/dashboard/event');
        } catch (error) {
            if (error.isValidationError) {
                const validationErrors = error.errors;
                if (validationErrors.status) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        title: 'ACCESS RESTRICTED',
                        text: validationErrors.status[0],
                        icon: 'warning',
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                        confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].walnut,
                        confirmButtonText: 'RETURN TO TERMINAL',
                        customClass: {
                            popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                            title: 'font-black tracking-[0.2em]'
                        }
                    }).then(()=>{
                        router.push('/dashboard');
                    });
                } else {
                    setFormErrors(validationErrors);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        title: 'DATA REJECTED',
                        text: isPaid ? 'Data entry protocol rejected. Please verify your clearance fee proof.' : 'Registration failed. Please try again.',
                        icon: 'error',
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                        confirmButtonColor: '#ef4444',
                        confirmButtonText: 'RECALIBRATE',
                        customClass: {
                            popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                            title: 'font-black tracking-[0.2em]'
                        }
                    });
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    title: 'SYSTEM FAILURE',
                    text: error.message || 'Registration protocol failed to execute.',
                    icon: 'error',
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                    confirmButtonColor: '#ef4444',
                    confirmButtonText: 'ACKNOWLEDGE',
                    customClass: {
                        popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                        title: 'font-black tracking-[0.2em]'
                    }
                });
            }
        } finally{
            setIsSubmitting(false);
        }
    };
    // Layar Loading ditahan sampai API checkStatus selesai!
    if (isLoading || isStatusLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]",
        style: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
        },
        children: "DECRYPTING PROTOCOL..."
    }, void 0, false, {
        fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
        lineNumber: 234,
        columnNumber: 44
    }, this);
    if (isAlreadyRegistered) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
        },
        children: "VERIFYING PROTOCOL..."
    }, void 0, false, {
        fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
        lineNumber: 235,
        columnNumber: 35
    }, this);
    if (!event) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
        },
        children: "SYSTEM NOTICE: EVENT PROTOCOL NOT FOUND."
    }, void 0, false, {
        fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
        lineNumber: 236,
        columnNumber: 22
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative py-12 min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 max-w-3xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.back(),
                    className: "mb-12 font-bold text-xs tracking-[0.3em] uppercase cursor-pointer transition-colors flex items-center gap-3 hover:text-white",
                    style: {
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-8 h-[1px] block transition-all",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        " ABORT ENTRY"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-9xl font-black italic",
                                style: {
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                                },
                                children: "E"
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-6 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-2 h-2 rounded-full animate-pulse",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                                        boxShadow: `0 0 10px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco}`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                    style: {
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                    },
                                    children: "PASS GENERATION PROTOCOL"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 256,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest relative z-10",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco
                            },
                            children: event.title || 'UNKNOWN EVENT'
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                            },
                            children: event.description || 'Secure your pass for this exclusive gathering.'
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].obsidian,
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] tracking-[0.2em] mb-2 uppercase",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            children: "CLEARANCE FEE"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 268,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-black tracking-widest",
                                            style: {
                                                color: isPaid ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                            },
                                            children: isPaid ? `Rp ${Number(event.price).toLocaleString('id-ID')}` : 'NO CHARGE'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-right hidden md:block",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] tracking-[0.2em] mb-2 uppercase",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            children: "SYSTEM STATUS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 274,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-bold uppercase tracking-widest",
                                            style: {
                                                color: isRejected ? '#ef4444' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                            },
                                            children: isRejected ? 'REJECTED - AWAITING RESUBMISSION' : isPaid ? 'AWAITING PAYMENT' : 'READY TO SECURE'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 275,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        isPaid && event.payment_details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-10 relative z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$user$2f$payment$2f$PaymentInstructionBox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                paymentDetails: event.payment_details,
                                price: Number(event.price)
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                lineNumber: 284,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 283,
                            columnNumber: 13
                        }, this),
                        isRejected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border p-6 mb-8 relative z-10",
                            style: {
                                borderColor: '#ef4444',
                                backgroundColor: 'rgba(239, 68, 68, 0.1)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-red-500 font-bold tracking-[0.2em] uppercase mb-2 text-sm",
                                    children: "⚠️ PREVIOUS SUBMISSION REJECTED"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 294,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-200 text-sm mb-1",
                                    children: "Your previous registration was rejected by the Administrator."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                regStatus?.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-200 text-sm font-bold mb-3",
                                    children: [
                                        "Reason: ",
                                        regStatus.rejection_reason
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 297,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white text-[10px] tracking-[0.2em] uppercase font-bold",
                                    children: isPaid ? 'Please upload a valid payment proof and resubmit below.' : 'Please resubmit your registration below.'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 293,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-10 relative z-10",
                            children: [
                                isPaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-[10px] font-bold mb-4 uppercase tracking-[0.2em]",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                            },
                                            children: "PAYMENT PROOF (JPG/PNG/PDF) *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".jpg,.jpeg,.png,.pdf",
                                            onChange: handleFileUpload,
                                            className: "w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none focus:border-white/50",
                                            style: {
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].obsidian,
                                                borderColor: formErrors?.payment_proof ? '#ef4444' : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ash
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 311,
                                            columnNumber: 17
                                        }, this),
                                        formErrors?.payment_proof && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]",
                                            children: [
                                                "⚠️ ",
                                                formErrors.payment_proof[0]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 317,
                                            columnNumber: 47
                                        }, this),
                                        paymentPreview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 border p-4",
                                            style: {
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].obsidian
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] font-bold mb-3 uppercase tracking-[0.2em]",
                                                    style: {
                                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                                    },
                                                    children: "PREVIEW:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: paymentPreview,
                                                    alt: "Payment proof preview",
                                                    className: "w-full max-w-md mx-auto rounded",
                                                    style: {
                                                        border: `2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite}`
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                                    lineNumber: 322,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 320,
                                            columnNumber: 19
                                        }, this),
                                        paymentFile && paymentFile.type === 'application/pdf' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 border p-4",
                                            style: {
                                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].graphite,
                                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].obsidian
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold uppercase tracking-wider",
                                                style: {
                                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige
                                                },
                                                children: [
                                                    "✓ PDF FILE UPLOADED: ",
                                                    paymentFile.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                                lineNumber: 328,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                            lineNumber: 327,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isSubmitting || isCompressing,
                                    className: "w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer",
                                    style: {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].stucco,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].onyx,
                                        boxShadow: `0 0 15px ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].greige}40`
                                    },
                                    children: isCompressing ? 'COMPRESSING FILE...' : isSubmitting ? 'PROCESSING...' : isPaid ? 'SUBMIT REGISTRATION' : 'REGISTER NOW'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                                    lineNumber: 334,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
                    lineNumber: 249,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
            lineNumber: 244,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/pages/EventRegisterClient.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, this);
}
_s(EventRegisterPage, "YQEbLuVAjmsIyKFxG9di0eSQdcE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = EventRegisterPage;
var _c;
__turbopack_context__.k.register(_c, "EventRegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9832da1c._.js.map