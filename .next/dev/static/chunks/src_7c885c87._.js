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
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/event/[key]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Beams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Beams.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// 'use client';
// import { useState } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { eventService } from '@/services/event-service';
// import toast from 'react-hot-toast';
// import Beams from '@/components/ui/Beams';
// import Swal from 'sweetalert2'
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
// export default function EventRegisterPage() {
//   const params = useParams();
//   const router = useRouter();
//   const queryClient = useQueryClient();
//   const key = params?.key as string;
//   // 🔥 TARIK DATA EVENT DARI DATABASE BERDASARKAN SLUG 🔥
//   const { data: event, isLoading } = useQuery({
//     queryKey: ['event', key],
//     queryFn: () => eventService.getEvent(key),
//     enabled: !!key, 
//   });
//   const [paymentFile, setPaymentFile] = useState<File | null>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formErrors, setFormErrors] = useState<any>(null);
//   // Deteksi Event Berbayar / Gratis dari Database
//   const isPaid = event ? Number(event.price) > 0 : false;
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormErrors(null);
//     if (!paymentFile) {
//       return toast.error('PAYMENT PROOF IS REQUIRED.', {
//         style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
//       });
//     }
//     // 🔥 GANTI WINDOW.CONFIRM JADI SWEETALERT DYSTOPIAN 🔥
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
//     if (!confirmation.isConfirmed) return; // Kalau user klik ABORT, stop di sini
//     setIsSubmitting(true);
//     try {
//       await eventService.submitFinal(key, paymentFile);
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
//   if (isLoading) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]" style={{ color: palette.ash }}>DECRYPTING PROTOCOL...</div>;
//   if (!event) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>SYSTEM NOTICE: EVENT PROTOCOL NOT FOUND.</div>;
//   return (
//     <div className="relative py-12 min-h-screen bg-[#0a0a0a]">
//       {/* Background Beams di Layout Utama, jadi gak perlu dirender lagi di sini kalau lu udah pasang di layout */}
//       <div className="relative z-10 max-w-3xl mx-auto px-4">
//         <button onClick={() => router.back()} className="mb-12 font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
//           <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> ABORT ENTRY
//         </button>
//         <div className="p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
//           <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
//             <span className="text-9xl font-black italic" style={{ color: palette.stucco }}>E</span>
//           </div>
//           <div className="flex items-center gap-3 mb-6 relative z-10">
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
//               <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>PASS GENERATION PROTOCOL</p>
//           </div>
//           <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest relative z-10" style={{ color: palette.stucco }}>
//             {event.title || 'UNKNOWN EVENT'}
//           </h1>
//           <p className="mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10" style={{ color: palette.ash }}>
//             {event.description || 'Secure your pass for this exclusive gathering.'}
//           </p>
//           <div className="border p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite }}>
//             <div>
//               <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>CLEARANCE FEE</p>
//               <span className="text-3xl font-black tracking-widest" style={{ color: isPaid ? palette.stucco : palette.greige }}>
//                 {isPaid ? `Rp ${Number(event.price).toLocaleString('id-ID')}` : 'NO CHARGE'}
//               </span>
//             </div>
//             <div className="text-right hidden md:block">
//                 <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>SYSTEM STATUS</p>
//                 <div className="text-xs font-bold uppercase tracking-widest" style={{ color: palette.greige }}>
//                     {isPaid ? 'AWAITING PAYMENT' : 'READY TO SECURE'}
//                 </div>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
//             {isPaid && (
//               <div>
//                 <label className="block text-[10px] font-bold mb-4 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
//                   PAYMENT PROOF (JPG/PNG/PDF) *
//                 </label>
//                 {/* INI UDAH DIJAMIN BENER PAKAI setPaymentFile */}
//                 <input 
//                   type="file" accept=".jpg,.jpeg,.png,.pdf"
//                   onChange={(e) => setPaymentFile(e.target.files?.[0] || null)}
//                   className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none focus:border-white/50"
//                   style={{ backgroundColor: palette.obsidian, borderColor: formErrors?.payment_proof ? '#ef4444' : palette.graphite, color: palette.ash }}
//                 />
//                 {formErrors?.payment_proof && <p className="text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]">⚠️ {formErrors.payment_proof[0]}</p>}
//               </div>
//             )}
//             <button 
//               type="submit" disabled={isSubmitting}
//               className="w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
//               style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
//             >
//               {isSubmitting ? 'GENERATING PASS...' : 'OBTAIN PASS NOW'}
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
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
            const compressedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(file, options);
            setPaymentFile(compressedFile);
        } catch (error) {
            setPaymentFile(file);
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
                    background: palette.onyx,
                    color: palette.stucco,
                    border: `1px solid ${palette.graphite}`
                }
            });
        }
        const confirmation = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
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
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$event$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eventService"].submitFinal(key, paymentFile);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Registration protocol submitted successfully!', {
                style: {
                    background: palette.onyx,
                    color: palette.stucco,
                    border: `1px solid ${palette.graphite}`
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
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
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
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
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
    // Layar Loading ditahan sampai API checkStatus selesai!
    if (isLoading || isStatusLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "DECRYPTING PROTOCOL..."
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
        lineNumber: 429,
        columnNumber: 44
    }, this);
    if (isAlreadyRegistered) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "VERIFYING PROTOCOL..."
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
        lineNumber: 430,
        columnNumber: 35
    }, this);
    if (!event) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "SYSTEM NOTICE: EVENT PROTOCOL NOT FOUND."
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
        lineNumber: 431,
        columnNumber: 22
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative py-12 min-h-screen bg-[#0a0a0a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Beams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    beamWidth: 3,
                    beamHeight: 30,
                    beamNumber: 20,
                    lightColor: palette.greige,
                    speed: 2,
                    noiseIntensity: 1.75,
                    scale: 0.2,
                    rotation: 30
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-3xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.back(),
                        className: "mb-12 font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white",
                        style: {
                            color: palette.ash
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-8 h-[1px] block transition-all",
                                style: {
                                    backgroundColor: palette.ash
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                lineNumber: 441,
                                columnNumber: 11
                            }, this),
                            " ABORT ENTRY"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                        style: {
                            backgroundColor: palette.onyx,
                            borderColor: palette.graphite,
                            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-9xl font-black italic",
                                    style: {
                                        color: palette.stucco
                                    },
                                    children: "E"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-6 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 rounded-full animate-pulse",
                                        style: {
                                            backgroundColor: palette.stucco,
                                            boxShadow: `0 0 10px ${palette.stucco}`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 450,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                        style: {
                                            color: palette.ash
                                        },
                                        children: "PASS GENERATION PROTOCOL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 451,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest relative z-10",
                                style: {
                                    color: palette.stucco
                                },
                                children: event.title || 'UNKNOWN EVENT'
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                lineNumber: 454,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-10 text-sm font-medium tracking-wide leading-relaxed relative z-10",
                                style: {
                                    color: palette.ash
                                },
                                children: event.description || 'Secure your pass for this exclusive gathering.'
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-8 mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative z-10",
                                style: {
                                    backgroundColor: palette.obsidian,
                                    borderColor: palette.graphite
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] tracking-[0.2em] mb-2 uppercase",
                                                style: {
                                                    color: palette.ash
                                                },
                                                children: "CLEARANCE FEE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                                lineNumber: 463,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-black tracking-widest",
                                                style: {
                                                    color: isPaid ? palette.stucco : palette.greige
                                                },
                                                children: isPaid ? `Rp ${Number(event.price).toLocaleString('id-ID')}` : 'NO CHARGE'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                                lineNumber: 464,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right hidden md:block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] tracking-[0.2em] mb-2 uppercase",
                                                style: {
                                                    color: palette.ash
                                                },
                                                children: "SYSTEM STATUS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                                lineNumber: 469,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-bold uppercase tracking-widest",
                                                style: {
                                                    color: isRejected ? '#ef4444' : palette.greige
                                                },
                                                children: isRejected ? 'REJECTED - AWAITING RESUBMISSION' : isPaid ? 'AWAITING PAYMENT' : 'READY TO SECURE'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 468,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                lineNumber: 461,
                                columnNumber: 11
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
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 479,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-200 text-sm mb-1",
                                        children: "Your previous registration was rejected by the Administrator."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 480,
                                        columnNumber: 15
                                    }, this),
                                    regStatus?.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-200 text-sm font-bold mb-3",
                                        children: [
                                            "Reason: ",
                                            regStatus.rejection_reason
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-[10px] tracking-[0.2em] uppercase font-bold",
                                        children: "Please upload a valid payment proof and resubmit below."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                lineNumber: 478,
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
                                                    color: palette.greige
                                                },
                                                children: "PAYMENT PROOF (JPG/PNG/PDF) *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                                lineNumber: 491,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                                lineNumber: 494,
                                                columnNumber: 17
                                            }, this),
                                            formErrors?.payment_proof && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-red-500 text-[10px] mt-3 font-bold uppercase tracking-[0.2em]",
                                                children: [
                                                    "⚠️ ",
                                                    formErrors.payment_proof[0]
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 490,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSubmitting,
                                        className: "w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100",
                                        style: {
                                            backgroundColor: palette.stucco,
                                            color: palette.onyx,
                                            boxShadow: `0 0 15px ${palette.greige}40`
                                        },
                                        children: isSubmitting ? 'GENERATING PASS...' : 'OBTAIN PASS NOW'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                        lineNumber: 444,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
                lineNumber: 439,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/event/[key]/page.tsx",
        lineNumber: 434,
        columnNumber: 5
    }, this);
}
_s(EventRegisterPage, "7RUhQzVXMO8v9ybPrhoR49biXvQ=", false, function() {
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

//# sourceMappingURL=src_7c885c87._.js.map