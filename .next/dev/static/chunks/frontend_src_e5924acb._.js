(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/frontend/src/services/competition-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "competitionService",
    ()=>competitionService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fetch-client.ts [app-client] (ecmascript)");
;
const competitionService = {
    getCompetitions: async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getCompetition: async (key)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions/${key}`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    storeCompetition: async (payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/competitions`, {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            return {
                message: res.message || 'Competition berhasil disimpan',
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
    updateCompetition: async (key, payload)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/competitions/${key}`, {
                method: 'PUT',
                body: JSON.stringify(payload)
            });
            return {
                message: res.message || 'Competition berhasil diperbarui',
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/competitions/${key}`, {
                method: 'DELETE'
            });
            return res.message || 'Competition berhasil dihapus';
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions/${key}/status`, {
                method: 'GET'
            });
            return res.data;
        } catch (error) {
            throw new Error(error.message);
        }
    },
    submitFinal: async (key, paymentProof)=>{
        try {
            const formData = new FormData();
            formData.append('payment_proof', paymentProof);
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions/${key}/submit`, {
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
    saveDraft: async (key, paymentProof)=>{
        try {
            const formData = new FormData();
            if (paymentProof) {
                formData.append('draft_data[payment_proof]', paymentProof);
            }
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions/${key}/draft`, {
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
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/dashboard/competition/[key]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetitionRegisterPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/competition-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$Beams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/Beams.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// // 'use client';
// // import { useState } from 'react';
// // import { useParams, useRouter } from 'next/navigation';
// // import { useQuery, useQueryClient } from '@tanstack/react-query';
// // import { competitionService } from '@/services/competition-service';
// // import toast from 'react-hot-toast';
// // import Beams from '@/components/ui/Beams';
// // import Swal from 'sweetalert2'
// // // INJEKSI COLOR PALETTE DYSTOPIAN
// // const palette = {
// //   onyx: '#1C1C1B',
// //   obsidian: '#1a1a1a',
// //   walnut: '#6A5D52',
// //   greige: '#B7AC9B',
// //   ash: '#979086',
// //   stucco: '#E2E2DE',
// //   graphite: '#494947',
// //   gravel: '#7b787a'
// // };
// // export default function CompetitionRegisterPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const queryClient = useQueryClient();
// //   // Tangkap key dari URL
// //   const key = params?.key as string;
// //   const { data: competition, isLoading } = useQuery({
// //     queryKey: ['competition', key],
// //     queryFn: () => competitionService.getCompetition(key),
// //     enabled: !!key, 
// //   });
// //   const [paymentFile, setPaymentFile] = useState<File | null>(null);
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [formErrors, setFormErrors] = useState<any>(null);
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setFormErrors(null);
// //     if (!paymentFile) {
// //       return toast.error('PAYMENT PROOF IS REQUIRED.', {
// //         style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
// //       });
// //     }
// //     // 🔥 GANTI WINDOW.CONFIRM JADI SWEETALERT DYSTOPIAN 🔥
// //     const confirmation = await Swal.fire({
// //       icon: 'warning',
// //       title: 'INITIATE PROTOCOL?',
// //       text: 'Are you sure you want to submit? Data cannot be altered later.',
// //       background: palette.onyx,
// //       color: palette.stucco,
// //       showCancelButton: true,
// //       confirmButtonColor: palette.walnut,
// //       cancelButtonColor: palette.graphite,
// //       confirmButtonText: 'SECURE PASS',
// //       cancelButtonText: 'ABORT',
// //       customClass: {
// //         popup: 'border border-[#7b787a] rounded-none',
// //         title: 'font-black tracking-[0.2em] uppercase text-xl',
// //         confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2',
// //         cancelButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
// //       }
// //     });
// //     if (!confirmation.isConfirmed) return; // Kalau user klik ABORT, stop di sini
// //     setIsSubmitting(true);
// //     try {
// //       await competitionService.submitFinal(key, paymentFile);
// //       toast.success('Registration protocol submitted successfully!', {
// //         style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
// //       });
// //       queryClient.invalidateQueries({ queryKey: ['competition', key] });
// //       router.push('/dashboard/competition'); 
// //     } catch (error: any) {
// //       if (error.isValidationError) {
// //         const validationErrors = error.errors;
// //         if (validationErrors.status) {
// //           Swal.fire({
// //             title: 'ACCESS RESTRICTED',
// //             text: validationErrors.status[0],
// //             icon: 'warning',
// //             background: palette.onyx,
// //             color: palette.stucco,
// //             confirmButtonColor: palette.walnut, 
// //             confirmButtonText: 'RETURN TO TERMINAL',
// //             customClass: {
// //               popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
// //               title: 'font-black tracking-[0.2em]',
// //             }
// //           }).then(() => {
// //             router.push('/dashboard');
// //           });
// //         } 
// //         else {
// //           setFormErrors(validationErrors); 
// //           Swal.fire({
// //             title: 'DATA REJECTED',
// //             text: 'Data entry protocol rejected. Please verify your clearance fee proof.',
// //             icon: 'error',
// //             background: palette.onyx,
// //             color: palette.stucco,
// //             confirmButtonColor: '#ef4444',
// //             confirmButtonText: 'RECALIBRATE',
// //             customClass: {
// //               popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
// //               title: 'font-black tracking-[0.2em]',
// //             }
// //           });
// //         }
// //       } else {
// //         Swal.fire({
// //           title: 'SYSTEM FAILURE',
// //           text: error.message || 'Registration protocol failed to execute.',
// //           icon: 'error',
// //           background: palette.onyx,
// //           color: palette.stucco,
// //           confirmButtonColor: '#ef4444',
// //           confirmButtonText: 'ACKNOWLEDGE',
// //           customClass: {
// //             popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
// //             title: 'font-black tracking-[0.2em]',
// //           }
// //         });
// //       }
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };
// //   if (isLoading) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]" style={{ color: palette.ash }}>ESTABLISHING CONNECTION...</div>;
// //   if (!competition) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>SYSTEM NOTICE: COMPETITION NOT FOUND.</div>;
// //   return (
// //     <div className="relative py-12 min-h-screen bg-[#0a0a0a]">
// //       {/* 🔥 REACTBITS BEAMS BACKGROUND (Biar nyambung dari halaman sebelumnya) 🔥 */}
// //       <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
// //         <Beams
// //           beamWidth={3}
// //           beamHeight={30}
// //           beamNumber={20}
// //           lightColor={palette.greige}
// //           speed={2}
// //           noiseIntensity={1.75}
// //           scale={0.2}
// //           rotation={30}
// //         />
// //       </div>
// //       <div className="relative z-10 max-w-3xl mx-auto px-4">
// //         <button onClick={() => router.back()} className="mb-12 font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
// //           <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> ABORT REGISTRATION
// //         </button>
// //         <div 
// //           className="p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
// //           style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
// //         >
// //           {/* Watermark C */}
// //           <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
// //             <span className="text-9xl font-black italic" style={{ color: palette.stucco }}>C</span>
// //           </div>
// //           <div className="flex items-center gap-3 mb-6 relative z-10">
// //               <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
// //               <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>DATA ENTRY PROTOCOL</p>
// //           </div>
// //           <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest relative z-10" style={{ color: palette.stucco }}>
// //             {competition.name || 'UNKNOWN BATTLEFIELD'}
// //           </h1>
// //           <p className="mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10" style={{ color: palette.ash }}>
// //             {competition.description || 'Secure your slot in this competition. Upload your clearance fee receipt below to proceed.'}
// //           </p>
// //           <div className="border p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite }}>
// //             <div>
// //               <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>CLEARANCE FEE</p>
// //               <span className="text-3xl font-black tracking-widest" style={{ color: palette.stucco }}>
// //                 Rp {Number(competition.registration_fee || 0).toLocaleString('id-ID')}
// //               </span>
// //             </div>
// //             <div className="text-right hidden md:block">
// //                 <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>SYSTEM STATUS</p>
// //                 <div className="text-xs font-bold uppercase tracking-widest" style={{ color: palette.greige }}>
// //                     AWAITING PAYMENT
// //                 </div>
// //             </div>
// //           </div>
// //           <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
// //             <div>
// //               <label className="block text-[10px] font-bold mb-4 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
// //                 PAYMENT PROOF (JPG/PNG/PDF) *
// //               </label>
// //               <input 
// //                 type="file" accept=".jpg,.jpeg,.png,.pdf"
// //                 // 🔥 INI DIA FIX-NYA: GANTI setDocumentFile jadi setPaymentFile 🔥
// //                 onChange={(e) => setPaymentFile(e.target.files?.[0] || null)}
// //                 className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none focus:border-white/50"
// //                 style={{ 
// //                   backgroundColor: palette.obsidian, 
// //                   borderColor: formErrors?.payment_proof ? '#ef4444' : palette.graphite, 
// //                   color: palette.ash,
// //                 }}
// //               />
// //               {formErrors?.payment_proof && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]">⚠️ {formErrors.payment_proof[0]}</p>}
// //             </div>
// //             <button 
// //               type="submit" disabled={isSubmitting}
// //               className="w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
// //               style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
// //             >
// //               {isSubmitting ? 'UPLOADING DATA...' : 'SUBMIT PROTOCOL'}
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import React, { useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { competitionService } from '@/services/competition-service';
// import toast from 'react-hot-toast';
// import Beams from '@/components/ui/Beams';
// import Swal from 'sweetalert2';
// // INJEKSI COLOR PALETTE DYSTOPIAN
// const palette = {
//   onyx: '#1C1C1B',
//   obsidian: '#1a1a1a',
//   walnut: '#6A5D52',
//   greige: '#B7AC9B',
//   ash: '#979086',
//   stucco: '#E2E2DE',
//   graphite: '#494947',
//   gravel: '#7b787a'
// };
// export default function CompetitionRegisterPage() {
//   const params = useParams();
//   const router = useRouter();
//   const queryClient = useQueryClient();
//   // Tangkap key dari URL
//   const key = params?.key as string;
//   const { data: competition, isLoading } = useQuery({
//     queryKey: ['competition', key],
//     queryFn: () => competitionService.getCompetition(key),
//     enabled: !!key, 
//   });
//   const [paymentFile, setPaymentFile] = useState<File | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formErrors, setFormErrors] = useState<any>(null);
//   // 🔥 1. FETCH STATUS REGISTRASI UNTUK CEK DOBEL DAFTAR / REJECT 🔥
//   const { data: regStatus, isLoading: isStatusLoading } = useQuery({
//     queryKey: ['competition-status', key], // 👈 Kunci khusus lomba
//     queryFn: async () => {
//       try {
//         return await competitionService.checkStatusRegistrations(key); // 👈 Service khusus lomba
//       } catch (error: any) {
//         return null;
//       }
//     },
//     enabled: !!key,
//     retry: false,
//     staleTime: 0, // 👈 Cache killer
//     gcTime: 0     // 👈 Cache killer
//   });
//   // Logika Penjaga Gawang
// // Logika Penjaga Gawang
//   const statusStr = regStatus?.status?.toUpperCase() || '';
//   const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
//   // 🔥 TAMBAHIN PENGECEKAN 'UNREGISTERED' DI SINI 🔥
//   const isUnregistered = statusStr === 'UNREGISTERED'; 
//   // 🔥 TAMBAHIN INI BIAR DRAFT BISA LEWAT 🔥
//   const isDraft = statusStr === 'DRAFT';
// // Berarti dia "Sudah Daftar" HANYA JIKA statusnya bukan REJECT, bukan UNREGISTERED, dan bukan DRAFT
//   // (Alias cuma ngusir yang statusnya PENDING / VERIFIED / ACCEPTED)
//   const isAlreadyRegistered = regStatus && regStatus.status && !isRejected && !isUnregistered && !isDraft;
//   // 🔥 2. EFEK USIR USER KALAU UDAH DAFTAR 🔥
//   React.useEffect(() => {
//     if (isAlreadyRegistered) {
//       Swal.fire({
//         icon: 'info',
//         title: 'ALREADY REGISTERED',
//         text: 'You have already submitted a registration protocol for this battlefield. Check your dashboard for updates.',
//         background: palette.onyx,
//         color: palette.stucco,
//         confirmButtonColor: palette.walnut,
//         allowOutsideClick: false, // Biar nggak bisa di-klik luar
//         customClass: {
//           popup: 'border border-[#7b787a] rounded-none',
//           title: 'font-black tracking-[0.2em] uppercase text-xl',
//           confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3'
//         }
//       }).then(() => {
//         router.push('/dashboard');
//       });
//     }
//   }, [isAlreadyRegistered, router]);
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormErrors(null);
//     if (!paymentFile) {
//       return toast.error('PAYMENT PROOF IS REQUIRED.', {
//         style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
//       });
//     }
//     const confirmation = await Swal.fire({
//       icon: 'warning',
//       title: 'INITIATE PROTOCOL?',
//       text: 'Are you sure you want to submit? Data cannot be altered later.',
//       background: palette.onyx,
//       color: palette.stucco,
//       showCancelButton: true,
//       confirmButtonColor: palette.walnut,
//       cancelButtonColor: palette.graphite,
//       confirmButtonText: 'SECURE PASS',
//       cancelButtonText: 'ABORT',
//       customClass: {
//         popup: 'border border-[#7b787a] rounded-none',
//         title: 'font-black tracking-[0.2em] uppercase text-xl',
//         confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2',
//         cancelButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2'
//       }
//     });
//     if (!confirmation.isConfirmed) return;
//     setIsSubmitting(true);
//     try {
//       await competitionService.submitFinal(key, paymentFile);
//       toast.success('Registration protocol submitted successfully!', {
//         style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
//       });
//       queryClient.invalidateQueries({ queryKey: ['competition', key] });
//       router.push('/dashboard/competition'); 
//     } catch (error: any) {
//       if (error.isValidationError) {
//         const validationErrors = error.errors;
//         if (validationErrors.status) {
//           Swal.fire({
//             title: 'ACCESS RESTRICTED',
//             text: validationErrors.status[0],
//             icon: 'warning',
//             background: palette.onyx,
//             color: palette.stucco,
//             confirmButtonColor: palette.walnut, 
//             confirmButtonText: 'RETURN TO TERMINAL',
//             customClass: {
//               popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
//               title: 'font-black tracking-[0.2em]',
//             }
//           }).then(() => {
//             router.push('/dashboard');
//           });
//         } 
//         else {
//           setFormErrors(validationErrors); 
//           Swal.fire({
//             title: 'DATA REJECTED',
//             text: 'Data entry protocol rejected. Please verify your clearance fee proof.',
//             icon: 'error',
//             background: palette.onyx,
//             color: palette.stucco,
//             confirmButtonColor: '#ef4444',
//             confirmButtonText: 'RECALIBRATE',
//             customClass: {
//               popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
//               title: 'font-black tracking-[0.2em]',
//             }
//           });
//         }
//       } else {
//         Swal.fire({
//           title: 'SYSTEM FAILURE',
//           text: error.message || 'Registration protocol failed to execute.',
//           icon: 'error',
//           background: palette.onyx,
//           color: palette.stucco,
//           confirmButtonColor: '#ef4444',
//           confirmButtonText: 'ACKNOWLEDGE',
//           customClass: {
//             popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', 
//             title: 'font-black tracking-[0.2em]',
//           }
//         });
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   // Layar Loading ditahan sampai API checkStatus selesai!
//   if (isLoading || isStatusLoading) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]" style={{ color: palette.ash }}>ESTABLISHING CONNECTION...</div>;
//   if (isAlreadyRegistered) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>VERIFYING PROTOCOL...</div>;
//   if (!competition) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>SYSTEM NOTICE: COMPETITION NOT FOUND.</div>;
//   return (
//     <div className="relative py-12 min-h-screen bg-[#0a0a0a]">
//       <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
//         <Beams beamWidth={3} beamHeight={30} beamNumber={20} lightColor={palette.greige} speed={2} noiseIntensity={1.75} scale={0.2} rotation={30} />
//       </div>
//       <div className="relative z-10 max-w-3xl mx-auto px-4">
//         <button onClick={() => router.back()} className="mb-12 font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
//           <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> ABORT REGISTRATION
//         </button>
//         <div className="p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
//           <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
//             <span className="text-9xl font-black italic" style={{ color: palette.stucco }}>C</span>
//           </div>
//           <div className="flex items-center gap-3 mb-6 relative z-10">
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
//               <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>DATA ENTRY PROTOCOL</p>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest relative z-10" style={{ color: palette.stucco }}>
//             {competition.name || 'UNKNOWN BATTLEFIELD'}
//           </h1>
//           <p className="mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10" style={{ color: palette.ash }}>
//             {competition.description || 'Secure your slot in this competition. Upload your clearance fee receipt below to proceed.'}
//           </p>
//           <div className="border p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite }}>
//             <div>
//               <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>CLEARANCE FEE</p>
//               <span className="text-3xl font-black tracking-widest" style={{ color: palette.stucco }}>
//                 Rp {Number(competition.registration_fee || 0).toLocaleString('id-ID')}
//               </span>
//             </div>
//             <div className="text-right hidden md:block">
//                 <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>SYSTEM STATUS</p>
//                 <div className="text-xs font-bold uppercase tracking-widest" style={{ color: isRejected ? '#ef4444' : palette.greige }}>
//                     {isRejected ? 'REJECTED - AWAITING RESUBMISSION' : 'AWAITING PAYMENT'}
//                 </div>
//             </div>
//           </div>
//           {/* 🔥 3. KASIH WARNING KALAU DIA MAU RE-SUBMIT KARENA REJECT 🔥 */}
//           {isRejected && (
//             <div className="border p-6 mb-8 relative z-10" style={{ borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
//               <h3 className="text-red-500 font-bold tracking-[0.2em] uppercase mb-2 text-sm">⚠️ PREVIOUS SUBMISSION REJECTED</h3>
//               <p className="text-red-200 text-sm mb-1">Your previous registration was rejected by the Administrator.</p>
//               {regStatus?.rejection_reason && (
//                 <p className="text-red-200 text-sm font-bold mb-3">Reason: {regStatus.rejection_reason}</p>
//               )}
//               <p className="text-white text-[10px] tracking-[0.2em] uppercase font-bold">Please upload a valid payment proof and resubmit below.</p>
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
//             <div>
//               <label className="block text-[10px] font-bold mb-4 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
//                 PAYMENT PROOF (JPG/PNG/PDF) *
//               </label>
//               <input 
//                 type="file" accept=".jpg,.jpeg,.png,.pdf"
//                 onChange={(e) => setPaymentFile(e.target.files?.[0] || null)}
//                 className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none focus:border-white/50"
//                 style={{ 
//                   backgroundColor: palette.obsidian, 
//                   borderColor: formErrors?.payment_proof ? '#ef4444' : palette.graphite, 
//                   color: palette.ash,
//                 }}
//               />
//               {formErrors?.payment_proof && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]">⚠️ {formErrors.payment_proof[0]}</p>}
//             </div>
//             <button 
//               type="submit" disabled={isSubmitting}
//               className="w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
//               style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
//             >
//               {isSubmitting ? 'UPLOADING DATA...' : 'SUBMIT PROTOCOL'}
//             </button>
//           </form>
//         </div>
//       </div>
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
function CompetitionRegisterPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    // Tangkap key dari URL
    const key = params?.key;
    const { data: competition, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'competition',
            key
        ],
        queryFn: {
            "CompetitionRegisterPage.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionService"].getCompetition(key)
        }["CompetitionRegisterPage.useQuery"],
        enabled: !!key
    });
    const [paymentFile, setPaymentFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFileUpload = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return setPaymentFile(null); // 👈 Beda di sini doang (setPaymentFile)
        if (file.type === 'application/pdf') return setPaymentFile(file);
        try {
            const options = {
                maxSizeMB: 0.5,
                maxWidthOrHeight: 1280,
                useWebWorker: true
            };
            const compressedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(file, options);
            setPaymentFile(compressedFile);
        } catch (error) {
            setPaymentFile(file);
        }
    };
    // 🔥 1. DETEKSI LOMBA BERBAYAR / GRATIS 🔥
    const isPaid = competition ? Number(competition.registration_fee) > 0 : false;
    // 🔥 2. FETCH STATUS REGISTRASI UNTUK CEK DOBEL DAFTAR / REJECT 🔥
    const { data: regStatus, isLoading: isStatusLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'competition-status',
            key
        ],
        queryFn: {
            "CompetitionRegisterPage.useQuery": async ()=>{
                try {
                    return await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionService"].checkStatusRegistrations(key);
                } catch (error) {
                    return null;
                }
            }
        }["CompetitionRegisterPage.useQuery"],
        enabled: !!key,
        retry: false,
        staleTime: 0,
        gcTime: 0
    });
    // Logika Penjaga Gawang
    const statusStr = regStatus?.status?.toUpperCase() || '';
    const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
    const isUnregistered = statusStr === 'UNREGISTERED';
    const isDraft = statusStr === 'DRAFT';
    // Berarti dia "Sudah Daftar" HANYA JIKA statusnya bukan REJECT, bukan UNREGISTERED, dan bukan DRAFT
    const isAlreadyRegistered = regStatus && regStatus.status && !isRejected && !isUnregistered && !isDraft;
    // 🔥 3. EFEK USIR USER KALAU UDAH DAFTAR 🔥
    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "CompetitionRegisterPage.useEffect": ()=>{
            if (isAlreadyRegistered) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'info',
                    title: 'ALREADY REGISTERED',
                    text: 'You have already submitted a registration protocol for this battlefield. Check your dashboard for updates.',
                    background: palette.onyx,
                    color: palette.stucco,
                    confirmButtonColor: palette.walnut,
                    allowOutsideClick: false,
                    customClass: {
                        popup: 'border border-[#7b787a] rounded-none',
                        title: 'font-black tracking-[0.2em] uppercase text-xl',
                        confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3'
                    }
                }).then({
                    "CompetitionRegisterPage.useEffect": ()=>{
                        router.push('/dashboard');
                    }
                }["CompetitionRegisterPage.useEffect"]);
            }
        }
    }["CompetitionRegisterPage.useEffect"], [
        isAlreadyRegistered,
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setFormErrors(null);
        // 🔥 4. CEK FILE HANYA KALAU LOMBANYA BERBAYAR 🔥
        if (isPaid && !paymentFile) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('PAYMENT PROOF IS REQUIRED.', {
                style: {
                    background: palette.onyx,
                    color: palette.stucco,
                    border: `1px solid ${palette.graphite}`
                }
            });
        }
        const confirmation = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            icon: 'warning',
            title: 'INITIATE PROTOCOL?',
            text: 'Are you sure you want to submit? Data cannot be altered later.',
            background: palette.onyx,
            color: palette.stucco,
            showCancelButton: true,
            confirmButtonColor: palette.walnut,
            cancelButtonColor: palette.graphite,
            confirmButtonText: 'SECURE PASS',
            cancelButtonText: 'ABORT',
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
            // TypeScript diakali pakai "as File" karena kalau gratis file-nya boleh null
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionService"].submitFinal(key, paymentFile);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Registration protocol submitted successfully!', {
                style: {
                    background: palette.onyx,
                    color: palette.stucco,
                    border: `1px solid ${palette.graphite}`
                }
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'competition',
                    key
                ]
            });
            router.push('/dashboard/competition');
        } catch (error) {
            if (error.isValidationError) {
                const validationErrors = error.errors;
                if (validationErrors.status) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        title: 'ACCESS RESTRICTED',
                        text: validationErrors.status[0],
                        icon: 'warning',
                        background: palette.onyx,
                        color: palette.stucco,
                        confirmButtonColor: palette.walnut,
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        title: 'DATA REJECTED',
                        text: 'Data entry protocol rejected. Please verify your clearance fee proof.',
                        icon: 'error',
                        background: palette.onyx,
                        color: palette.stucco,
                        confirmButtonColor: '#ef4444',
                        confirmButtonText: 'RECALIBRATE',
                        customClass: {
                            popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                            title: 'font-black tracking-[0.2em]'
                        }
                    });
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    title: 'SYSTEM FAILURE',
                    text: error.message || 'Registration protocol failed to execute.',
                    icon: 'error',
                    background: palette.onyx,
                    color: palette.stucco,
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
    if (isLoading || isStatusLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "ESTABLISHING CONNECTION..."
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
        lineNumber: 726,
        columnNumber: 44
    }, this);
    if (isAlreadyRegistered) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "VERIFYING PROTOCOL..."
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
        lineNumber: 727,
        columnNumber: 35
    }, this);
    if (!competition) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "SYSTEM NOTICE: COMPETITION NOT FOUND."
    }, void 0, false, {
        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
        lineNumber: 728,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative py-12 min-h-screen bg-[#0a0a0a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$Beams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    beamWidth: 3,
                    beamHeight: 30,
                    beamNumber: 20,
                    lightColor: palette.greige,
                    speed: 2,
                    noiseIntensity: 1.75,
                    scale: 0.2,
                    rotation: 30
                }, void 0, false, {
                    fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                    lineNumber: 733,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                lineNumber: 732,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-3xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.back(),
                        className: "mb-12 font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white",
                        style: {
                            color: palette.ash
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-8 h-[1px] block transition-all",
                                style: {
                                    backgroundColor: palette.ash
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                lineNumber: 738,
                                columnNumber: 11
                            }, this),
                            " ABORT REGISTRATION"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                        lineNumber: 737,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                        style: {
                            backgroundColor: palette.onyx,
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
                                    children: "C"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                    lineNumber: 743,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                lineNumber: 742,
                                columnNumber: 11
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
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 747,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                        style: {
                                            color: palette.ash
                                        },
                                        children: "DATA ENTRY PROTOCOL"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 748,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                lineNumber: 746,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest relative z-10",
                                style: {
                                    color: palette.stucco
                                },
                                children: competition.name || 'UNKNOWN BATTLEFIELD'
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10",
                                style: {
                                    color: palette.ash
                                },
                                children: competition.description || 'Secure your slot in this competition. Upload your clearance fee receipt below to proceed.'
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                lineNumber: 754,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10",
                                style: {
                                    backgroundColor: palette.obsidian,
                                    borderColor: palette.graphite
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] tracking-[0.2em] mb-2 uppercase",
                                                style: {
                                                    color: palette.ash
                                                },
                                                children: "CLEARANCE FEE"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                                lineNumber: 760,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-black tracking-widest",
                                                style: {
                                                    color: isPaid ? palette.stucco : palette.greige
                                                },
                                                children: isPaid ? `Rp ${Number(competition.registration_fee || 0).toLocaleString('id-ID')}` : 'NO CHARGE'
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                                lineNumber: 761,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right hidden md:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] tracking-[0.2em] mb-2 uppercase",
                                                style: {
                                                    color: palette.ash
                                                },
                                                children: "SYSTEM STATUS"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                                lineNumber: 767,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold uppercase tracking-widest",
                                                style: {
                                                    color: isRejected ? '#ef4444' : palette.greige
                                                },
                                                children: isRejected ? 'REJECTED - AWAITING RESUBMISSION' : isPaid ? 'AWAITING PAYMENT' : 'READY TO SECURE'
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                                lineNumber: 768,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 766,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                lineNumber: 758,
                                columnNumber: 11
                            }, this),
                            isRejected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-6 mb-8 relative z-10",
                                style: {
                                    borderColor: '#ef4444',
                                    backgroundColor: 'rgba(239, 68, 68, 0.1)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-red-500 font-bold tracking-[0.2em] uppercase mb-2 text-sm",
                                        children: "⚠️ PREVIOUS SUBMISSION REJECTED"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 777,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-200 text-sm mb-1",
                                        children: "Your previous registration was rejected by the Administrator."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 778,
                                        columnNumber: 15
                                    }, this),
                                    regStatus?.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-200 text-sm font-bold mb-3",
                                        children: [
                                            "Reason: ",
                                            regStatus.rejection_reason
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 780,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-[10px] tracking-[0.2em] uppercase font-bold",
                                        children: "Please upload a valid payment proof and resubmit below."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 782,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                lineNumber: 776,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-10 relative z-10",
                                children: [
                                    isPaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-bold mb-4 uppercase tracking-[0.2em]",
                                                style: {
                                                    color: palette.greige
                                                },
                                                children: "PAYMENT PROOF (JPG/PNG/PDF) *"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                                lineNumber: 790,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".jpg,.jpeg,.png,.pdf",
                                                onChange: handleFileUpload,
                                                className: "w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none focus:border-white/50",
                                                style: {
                                                    backgroundColor: palette.obsidian,
                                                    borderColor: formErrors?.payment_proof ? '#ef4444' : palette.graphite,
                                                    color: palette.ash
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                                lineNumber: 793,
                                                columnNumber: 17
                                            }, this),
                                            formErrors?.payment_proof && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]",
                                                children: [
                                                    "⚠️ ",
                                                    formErrors.payment_proof[0]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                                lineNumber: 803,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 789,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100",
                                        style: {
                                            backgroundColor: palette.stucco,
                                            color: palette.onyx,
                                            boxShadow: `0 0 15px ${palette.greige}40`
                                        },
                                        children: isSubmitting ? 'PROCESSING...' : isPaid ? 'SUBMIT PROTOCOL' : 'SECURE SLOT NOW'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                        lineNumber: 807,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                                lineNumber: 786,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                        lineNumber: 741,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
                lineNumber: 736,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/dashboard/competition/[key]/page.tsx",
        lineNumber: 731,
        columnNumber: 5
    }, this);
}
_s(CompetitionRegisterPage, "oQyvXmGW4/uzXDXcOD3IysQ6PkA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = CompetitionRegisterPage;
var _c;
__turbopack_context__.k.register(_c, "CompetitionRegisterPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_e5924acb._.js.map