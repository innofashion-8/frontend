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
    getRotatingQr: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/events/${key}/rotating-qr`, {
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
"[project]/src/components/user/evaluation/EvaluationClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EvaluationClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/event-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.esm.all.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/palette.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function EvaluationClient({ eventId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const draftKey = `eval_draft_${eventId}`;
    const sortedQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...questions
        ].sort((a, b)=>(a.page_number ?? 1) - (b.page_number ?? 1) || (a.sort_order ?? 0) - (b.sort_order ?? 0));
    }, [
        questions
    ]);
    const totalPages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!sortedQuestions.length) return 1;
        const maxPage = Math.max(...sortedQuestions.map((q)=>q.page_number ?? 1));
        return maxPage > 0 ? maxPage : 1;
    }, [
        sortedQuestions
    ]);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const currentPageQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return sortedQuestions.filter((q)=>(q.page_number ?? 1) === currentPage);
    }, [
        sortedQuestions,
        currentPage
    ]);
    const handleDraftSave = (nextAnswers)=>{
        // Headers have no user answers, so we simply ignore them by not saving in UI handlers.
        localStorage.setItem(draftKey, JSON.stringify(nextAnswers));
    };
    const handleAnswerChange = (questionId, value)=>{
        setAnswers((prev)=>{
            const next = {
                ...prev,
                [questionId]: value
            };
            return next;
        });
    };
    const handleTextBlur = (questionId, value)=>{
        const nextValue = value;
        setAnswers((prev)=>{
            const next = {
                ...prev,
                [questionId]: nextValue
            };
            handleDraftSave(next);
            return next;
        });
    };
    const handleRadioOrRatingChange = (questionId, value)=>{
        setAnswers((prev)=>{
            const next = {
                ...prev,
                [questionId]: value
            };
            handleDraftSave(next);
            return next;
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchQuestions = async ()=>{
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventService"].getEvaluationQuestions(eventId);
                setQuestions(data);
                // draft prefill (must happen after questions load to align keys)
                const raw = localStorage.getItem(draftKey);
                if (raw) {
                    try {
                        const parsed = JSON.parse(raw);
                        setAnswers(parsed ?? {});
                    } catch  {
                    // ignore corrupted drafts
                    }
                }
            } catch (err) {
                setError('Failed to fetch evaluation nodes. Connection severed.');
            } finally{
                setLoading(false);
            }
        };
        fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        eventId
    ]);
    const validatePageRequired = ()=>{
        const required = currentPageQuestions.filter((q)=>q.type !== 'header' && q.is_required);
        const missing = required.filter((q)=>{
            const v = answers[q.id];
            return v === undefined || v === null || v === '' || typeof v === 'number' && Number.isNaN(v);
        });
        return missing;
    };
    const handleSubmit = async (mode)=>{
        const missingRequired = validatePageRequired();
        if (missingRequired.length > 0) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'warning',
                title: 'INCOMPLETE DATA',
                text: 'You must fill all required fields before continuing.',
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].walnut,
                customClass: {
                    popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                    title: 'font-black tracking-[0.2em] uppercase text-xl',
                    confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:scale-[1.02] transition-all border-2'
                }
            });
            return;
        }
        setSubmitting(true);
        try {
            if (mode === 'page') {
                setCurrentPage((p)=>Math.min(totalPages, p + 1));
                return;
            }
            // final submit payload
            const payload = Object.entries(answers).filter(([questionId])=>{
                const q = sortedQuestions.find((qq)=>qq.id === questionId);
                return q ? q.type !== 'header' : true;
            }).map(([question_id, value])=>({
                    question_id,
                    value
                }));
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eventService"].submitEvaluation(eventId, payload);
            // clear draft
            localStorage.removeItem(draftKey);
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'success',
                title: 'SESSION TERMINATED',
                text: res.message || 'CHECK-OUT SUCCESS',
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                confirmButtonColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].walnut,
                confirmButtonText: 'RETURN TO GRID',
                customClass: {
                    popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                    title: 'font-black tracking-[0.2em] uppercase text-xl',
                    confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:scale-[1.02] transition-all border-2'
                }
            });
            router.push('/dashboard');
        } catch (err) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$esm$2e$all$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].fire({
                icon: 'error',
                title: mode === 'final' ? 'TERMINATION FAILED' : 'PROCEED FAILED',
                text: err.message || 'Unknown error occurred during checkout sequence.',
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                confirmButtonColor: '#ef4444',
                confirmButtonText: 'RETRY',
                customClass: {
                    popup: 'border-4 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                    title: mode === 'final' ? 'font-black tracking-[0.2em] uppercase text-xl text-red-500' : 'font-black tracking-[0.2em] uppercase text-xl text-red-500',
                    confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2 hover:bg-red-900 transition-all border-2'
                }
            });
        } finally{
            setSubmitting(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full min-h-[calc(100vh-80px)] flex items-center justify-center font-creato-body",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl font-black uppercase tracking-[0.3em] animate-pulse",
                style: {
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                },
                children: "ESTABLISHING LINK..."
            }, void 0, false, {
                fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
            lineNumber: 208,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full min-h-[calc(100vh-80px)] flex items-center justify-center font-creato-body",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-4 p-8 max-w-lg bg-black/50",
                style: {
                    borderColor: '#ef4444'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-black uppercase tracking-widest text-red-500 mb-4",
                        children: "CRITICAL ERROR"
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold tracking-widest uppercase text-white",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
            lineNumber: 221,
            columnNumber: 7
        }, this);
    }
    const isFinalPage = currentPage >= totalPages;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-[calc(100vh-80px)] p-4 sm:p-6 lg:p-10 flex justify-center font-creato-body relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-3xl border bg-black/60 backdrop-blur-md p-6 sm:p-8 md:p-10 relative overflow-hidden",
            style: {
                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 w-2 h-full",
                    style: {
                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].walnut
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b-2 pb-4 mb-8",
                    style: {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] tracking-[0.3em] mb-1 uppercase",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                            },
                            children: "[ NODE CHECK-OUT SEQUENCE ]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-widest",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                            },
                            children: "EVALUATION PROTOCOL"
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-bold tracking-wider mt-3 uppercase",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                            },
                            children: [
                                "Page ",
                                currentPage,
                                " of ",
                                totalPages,
                                ". Provide feedback to terminate your session and unlock your node access."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                    lineNumber: 242,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: currentPageQuestions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-2 border-dashed p-6 text-center",
                        style: {
                            borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-black uppercase tracking-wider",
                            style: {
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                            },
                            children: "No questions on this page."
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                            lineNumber: 257,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                        lineNumber: 256,
                        columnNumber: 13
                    }, this) : currentPageQuestions.map((q, index)=>{
                        const displayNumber = index + 1;
                        const isHeader = q.type === 'header';
                        if (isHeader) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 sm:p-6 border relative transition-all",
                                style: {
                                    borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian,
                                    backgroundColor: 'rgba(28, 28, 27, 0.35)'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-black tracking-widest uppercase mb-1",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            children: [
                                                "SECTION ",
                                                displayNumber
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                            lineNumber: 277,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl sm:text-2xl font-black uppercase tracking-widest",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                            },
                                            children: q.header_title || 'UNTITLED NODE HEADER'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                            lineNumber: 280,
                                            columnNumber: 23
                                        }, this),
                                        q.header_description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm font-bold tracking-wider uppercase",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                            },
                                            children: q.header_description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                            lineNumber: 284,
                                            columnNumber: 25
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                    lineNumber: 276,
                                    columnNumber: 21
                                }, this)
                            }, q.id, false, {
                                fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                lineNumber: 268,
                                columnNumber: 19
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6 border relative group transition-all",
                            style: {
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian,
                                backgroundColor: 'rgba(28, 28, 27, 0.4)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -left-[1px] top-4 w-[3px] h-8 bg-transparent group-hover:bg-[#E2E2DE] transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                    lineNumber: 302,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-black tracking-widest uppercase mb-1 block",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                                            },
                                            children: [
                                                "QUERY ",
                                                displayNumber,
                                                " ",
                                                q.is_required ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 62
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                            lineNumber: 305,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg sm:text-xl font-bold uppercase tracking-wider",
                                            style: {
                                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                            },
                                            children: q.question_text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                            lineNumber: 308,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                    lineNumber: 304,
                                    columnNumber: 19
                                }, this),
                                q.type === 'text' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    className: "w-full bg-black/40 border-2 p-3 font-mono text-sm focus:outline-none focus:ring-0 transition-colors",
                                    style: {
                                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite,
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                    },
                                    rows: 4,
                                    placeholder: "INPUT YOUR DATA HERE...",
                                    defaultValue: answers[q.id] ? String(answers[q.id]) : '',
                                    onBlur: (e)=>handleTextBlur(q.id, e.target.value),
                                    required: !!q.is_required
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                    lineNumber: 314,
                                    columnNumber: 21
                                }, this),
                                q.type === 'multiple_choice' && q.options && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: q.options.map((opt, i)=>{
                                        const checked = answers[q.id] === opt;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: `flex items-center gap-3 p-3 border-2 cursor-pointer transition-all ${checked ? 'bg-black/80' : 'bg-black/30 hover:bg-black/50'}`,
                                            style: {
                                                borderColor: checked ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "radio",
                                                    name: q.id,
                                                    value: opt,
                                                    className: "hidden",
                                                    checked: checked,
                                                    onChange: (e)=>handleRadioOrRatingChange(q.id, e.target.value),
                                                    required: !!q.is_required
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 border-2 flex items-center justify-center transition-all",
                                                    style: {
                                                        borderColor: checked ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite
                                                    },
                                                    children: checked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2",
                                                        style: {
                                                            backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 42
                                                    }, this) : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold tracking-widest text-sm uppercase",
                                                    style: {
                                                        color: checked ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].greige
                                                    },
                                                    children: opt
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                            lineNumber: 330,
                                            columnNumber: 27
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                    lineNumber: 326,
                                    columnNumber: 21
                                }, this),
                                q.type === 'rating' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DystopianRatingRadio, {
                                            value: answers[q.id] == null ? undefined : typeof answers[q.id] === 'number' ? answers[q.id] : Number(answers[q.id]),
                                            onChange: (value)=>handleRadioOrRatingChange(q.id, value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                            lineNumber: 367,
                                            columnNumber: 23
                                        }, this),
                                        q.is_required && (!answers[q.id] || Number(answers[q.id]) === 0) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            required: true,
                                            className: "opacity-0 absolute w-0 h-0",
                                            value: answers[q.id] ? Number(answers[q.id]) : '',
                                            onChange: ()=>{}
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                            lineNumber: 379,
                                            columnNumber: 25
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                    lineNumber: 365,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, q.id, true, {
                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                            lineNumber: 294,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `pt-6 border-t-2 flex gap-3 ${currentPage > 1 ? 'justify-between' : 'justify-end'}`,
                    style: {
                        borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].graphite
                    },
                    children: [
                        currentPage > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: submitting,
                            onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                            className: "px-8 py-4 font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden border-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                            style: {
                                backgroundColor: '#00000000',
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian
                            },
                            children: "< RETURN"
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                            lineNumber: 397,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            disabled: submitting || sortedQuestions.length === 0,
                            onClick: ()=>handleSubmit(isFinalPage ? 'final' : 'page'),
                            className: "px-8 py-4 font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden group border-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco,
                                color: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].onyx,
                                borderColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out z-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 flex items-center gap-2",
                                    children: submitting ? 'TERMINATING...' : isFinalPage ? 'SUBMIT' : 'PROCEED >'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
            lineNumber: 236,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
// ---- replaced slider with dystopian radio circles ----
function DystopianRatingRadio({ value, onChange }) {
    const currentValue = Number(value || 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between w-full mt-4",
        children: [
            1,
            2,
            3,
            4,
            5
        ].map((mark)=>{
            const checked = currentValue === mark;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex flex-col items-center justify-center gap-2 cursor-pointer group flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[3px] flex items-center justify-center transition-all ${checked ? 'bg-black/80 shadow-[0_0_15px_rgba(226,226,222,0.3)]' : 'bg-black/30 group-hover:bg-black/50'}`,
                        style: {
                            borderColor: checked ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].obsidian
                        },
                        children: checked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 sm:w-4 sm:h-4 rounded-full",
                            style: {
                                backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                            lineNumber: 460,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                        lineNumber: 453,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs sm:text-sm font-black tracking-widest uppercase transition-colors",
                        style: {
                            color: checked ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stucco : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$palette$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].ash
                        },
                        children: mark
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                        lineNumber: 463,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "radio",
                        className: "hidden",
                        name: `rating-${mark}`,
                        value: mark,
                        checked: checked,
                        onChange: ()=>onChange(mark)
                    }, void 0, false, {
                        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                        lineNumber: 469,
                        columnNumber: 13
                    }, this)
                ]
            }, mark, true, {
                fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
                lineNumber: 449,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/user/evaluation/EvaluationClient.tsx",
        lineNumber: 445,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_6ee7f067._.js.map