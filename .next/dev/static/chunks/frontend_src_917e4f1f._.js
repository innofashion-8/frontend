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
    submitFinal: async (key, members, groupName, region, category)=>{
        try {
            const formData = new FormData();
            if (groupName) formData.append('group_name', groupName);
            if (region) formData.append('region', region);
            if (category) formData.append('category', category); // Insert category
            members.forEach((member, index)=>{
                if (member.name) formData.append(`members[${index}][name]`, member.name);
                if (member.email) formData.append(`members[${index}][email]`, member.email);
                if (member.phone) formData.append(`members[${index}][phone]`, member.phone);
                if (member.id_card) {
                    const fileName = member.id_card.name || `id_card_member_${index}.jpg`;
                    formData.append(`members[${index}][id_card]`, member.id_card, fileName);
                }
            });
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
    saveDraft: async (key, formData)=>{
        try {
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
"[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/browser-image-compression/dist/browser-image-compression.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fetch-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// // 'use client';
// // import React, { useState, useEffect, useRef } from 'react';
// // import { useParams, useRouter, useSearchParams } from 'next/navigation';
// // import { useQuery, useQueryClient } from '@tanstack/react-query';
// // import { competitionService } from '@/services/competition-service';
// // import toast from 'react-hot-toast';
// // import Swal from 'sweetalert2';
// // import imageCompression from 'browser-image-compression';
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
// // interface Member {
// //   name: string;
// //   email: string;
// //   phone: string;
// //   id_card: File | null;
// // }
// // export default function CompetitionRegisterPage() {
// //   const params = useParams();
// //   const router = useRouter();
// //   const searchParams = useSearchParams();
// //   const queryClient = useQueryClient();
// //   const key = params?.key as string;
// //   const queryCategory = searchParams?.get('category')?.toUpperCase() as 'INTERMEDIATE' | 'ADVANCED' | '';
// //   const { data: competition, isLoading } = useQuery({
// //     queryKey: ['competition', key],
// //     queryFn: () => competitionService.getCompetition(key),
// //     enabled: !!key, 
// //   });
// //   const { data: regStatus, isLoading: isStatusLoading } = useQuery({
// //     queryKey: ['competition-status', key], 
// //     queryFn: async () => {
// //       try {
// //         return await competitionService.checkStatusRegistrations(key); 
// //       } catch (error: any) {
// //         return null;
// //       }
// //     },
// //     enabled: !!key,
// //     retry: false,
// //     staleTime: 0, 
// //     gcTime: 0     
// //   });
// //   const minMembers = competition?.min_members || 1;
// //   const maxMembers = competition?.max_members || 1;
// //   const [members, setMembers] = useState<Member[]>([{ name: '', email: '', phone: '', id_card: null }]);
// //   const [groupName, setGroupName] = useState('');
// //   const [region, setRegion] = useState<'NATIONAL' | 'INTERNATIONAL'>('NATIONAL');
// //   const [category, setCategory] = useState<'INTERMEDIATE' | 'ADVANCED' | ''>(
// //     (queryCategory === 'INTERMEDIATE' || queryCategory === 'ADVANCED') ? queryCategory : ''
// //   ); 
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [formErrors, setFormErrors] = useState<any>(null);
// //   const isGroup = competition?.participant_type === 'GROUP';
// //   const statusStr = regStatus?.status?.toUpperCase() || '';
// //   const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
// //   const isUnregistered = statusStr === 'UNREGISTERED'; 
// //   const isDraft = statusStr === 'DRAFT';
// //   const isAlreadyRegistered = regStatus && regStatus.status && !isRejected && !isUnregistered && !isDraft;
// //   // 🔥 1. LOAD DATA DRAFT & AUTO-FILL LEADER
// //   useEffect(() => {
// //     if (regStatus && competition) {
// //       const profile = regStatus.user_profile;
// //       let initialMembers: Member[] = [{
// //         name: profile?.name || '',
// //         email: profile?.email || '',
// //         phone: profile?.phone || '',
// //         id_card: null
// //       }];
// //       const draft = regStatus.draft_data;
// //       if (draft && Object.keys(draft).length > 0) {
// //         if (draft.region) setRegion(draft.region);
// //         if (draft.group_name) setGroupName(draft.group_name);
// //         if (draft.category) setCategory(draft.category);
// //         if (draft.members && Array.isArray(draft.members)) {
// //            const draftMembers = draft.members.map((m: any) => ({
// //               name: m.name || '',
// //               email: m.email || '',
// //               phone: m.phone || '',
// //               id_card: null 
// //            }));
// //            initialMembers = [...initialMembers, ...draftMembers];
// //         }
// //       }
// //       while (initialMembers.length < competition.min_members) {
// //          initialMembers.push({ name: '', email: '', phone: '', id_card: null });
// //       }
// //       setMembers(initialMembers);
// //     }
// //   }, [regStatus, competition]);
// //   // 🔥 2. AUTO-SAVE DRAFT (DEBOUNCE 3 DETIK)
// //   const isInitialMount = useRef(true);
// //   useEffect(() => {
// //     if (isInitialMount.current) {
// //       isInitialMount.current = false;
// //       return;
// //     }
// //     if (isAlreadyRegistered || isSubmitting || !competition || isLoading) return;
// //     const timer = setTimeout(async () => {
// //        const formData = new FormData();
// //        formData.append('draft_data[region]', region);
// //        if (groupName) formData.append('draft_data[group_name]', groupName);
// //        if (category) formData.append('draft_data[category]', category);
// //        const membersToDraft = isGroup ? members.slice(1) : [];
// //        membersToDraft.forEach((m, idx) => {
// //           if (m.name) formData.append(`draft_data[members][${idx}][name]`, m.name);
// //           if (m.email) formData.append(`draft_data[members][${idx}][email]`, m.email);
// //           if (m.phone) formData.append(`draft_data[members][${idx}][phone]`, m.phone);
// //           if (m.id_card instanceof File) {
// //              formData.append(`draft_data[members][${idx}][id_card]`, m.id_card);
// //           }
// //        });
// //        try {
// //           await competitionService.saveDraft(key, formData);
// //           console.log("Draft auto-saved to cloud");
// //        } catch(e) {
// //           console.error("Failed to auto-save draft");
// //        }
// //     }, 3000); 
// //     return () => clearTimeout(timer); 
// //   }, [members, groupName, region, category]); 
// //   useEffect(() => {
// //     if (regStatus && regStatus.is_eligible === false) {
// //       Swal.fire({
// //         icon: 'error',
// //         title: 'ACCESS RESTRICTED',
// //         text: regStatus.ineligibility_reason || 'You are not eligible for this competition.',
// //         background: palette.onyx,
// //         color: palette.stucco,
// //         confirmButtonColor: '#ef4444',
// //         allowOutsideClick: false, 
// //         customClass: {
// //           popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
// //           title: 'font-black tracking-[0.2em] uppercase text-xl',
// //           confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3'
// //         }
// //       }).then(() => router.push('/dashboard/competition'));
// //     }
// //   }, [regStatus, router]);
// //   useEffect(() => {
// //     if (isAlreadyRegistered) {
// //       Swal.fire({
// //         icon: 'info',
// //         title: 'ALREADY REGISTERED',
// //         text: 'You have already submitted a registration protocol for this battlefield. Check your dashboard for updates.',
// //         background: palette.onyx,
// //         color: palette.stucco,
// //         confirmButtonColor: palette.walnut,
// //         allowOutsideClick: false, 
// //         customClass: {
// //           popup: 'border border-[#7b787a] rounded-none',
// //           title: 'font-black tracking-[0.2em] uppercase text-xl',
// //           confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3'
// //         }
// //       }).then(() => router.push('/dashboard'));
// //     }
// //   }, [isAlreadyRegistered, router]);
// //   // HANDLERS
// //   const handleAddMember = () => {
// //     if (members.length < maxMembers) {
// //       setMembers([...members, { name: '', email: '', phone: '', id_card: null }]);
// //     }
// //   };
// //   const handleRemoveMember = (index: number) => {
// //     if (members.length > minMembers && index !== 0) {
// //       setMembers(members.filter((_, i) => i !== index));
// //     }
// //   };
// //   const handleMemberChange = (index: number, field: keyof Member, value: any) => {
// //     const newMembers = [...members];
// //     newMembers[index] = { ...newMembers[index], [field]: value };
// //     setMembers(newMembers);
// //   };
// //   const handleFileUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (!file) return;
// //     if (file.type === 'application/pdf') {
// //       handleMemberChange(index, 'id_card', file);
// //       return;
// //     }
// //     try {
// //       const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1280, useWebWorker: true };
// //       const compressedFile = await imageCompression(file, options);
// //       handleMemberChange(index, 'id_card', compressedFile);
// //     } catch (error) {
// //       handleMemberChange(index, 'id_card', file);
// //     }
// //   };
// //   const getFieldError = (field: string) => {
// //     if (!formErrors || !formErrors[field]) return null;
// //     return <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wider animate-pulse">{formErrors[field][0]}</p>;
// //   };
// //   const getMemberError = (frontendIndex: number, field: string) => {
// //     if (frontendIndex === 0) return null; 
// //     const backendIndex = frontendIndex - 1; 
// //     return getFieldError(`members.${backendIndex}.${field}`);
// //   };
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setFormErrors(null);
// //     if (members.length < minMembers) {
// //       return toast.error(`Minimal ${minMembers} anggota diperlukan`, {
// //         style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
// //       });
// //     }
// //     if (isGroup && !groupName) {
// //       return toast.error('Group name is required', {
// //         style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
// //       });
// //     }
// //     if (!isGroup && !category) {
// //       return toast.error('Category (Intermediate/Advanced) is required', {
// //         style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` }
// //       });
// //     }
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
// //     if (!confirmation.isConfirmed) return;
// //     setIsSubmitting(true);
// //     try {
// //       const membersToSubmit = isGroup ? members.slice(1) : [];
// //       await competitionService.submitFinal(
// //         key, 
// //         membersToSubmit, 
// //         groupName, 
// //         region, 
// //         isGroup ? undefined : category 
// //       );
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
// //           }).then(() => router.push('/dashboard'));
// //         } else {
// //           setFormErrors(validationErrors); 
// //           Swal.fire({
// //             title: 'DATA REJECTED',
// //             text: 'Data entry protocol rejected. Please verify the highlighted fields.',
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
// //   // 🔥 LOADING & RENDER GATES
// //   if (isLoading || isStatusLoading) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]" style={{ color: palette.ash }}>ESTABLISHING CONNECTION...</div>;
// //   if (isAlreadyRegistered) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>VERIFYING PROTOCOL...</div>;
// //   // Mencegah layar berkedip jika user tidak eligible dan sedang di-redirect oleh useEffect
// //   if (regStatus?.is_eligible === false) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>ACCESS RESTRICTED...</div>;
// //   if (!competition) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>SYSTEM NOTICE: COMPETITION NOT FOUND.</div>;
// //   return (
// //     <div className="relative py-12 min-h-screen bg-[#0a0a0a]">
// //       {/* <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
// //         <Beams beamWidth={3} beamHeight={30} beamNumber={20} lightColor={palette.greige} speed={2} noiseIntensity={1.75} scale={0.2} rotation={30} />
// //       </div> */}
// //       <div className="relative z-10 max-w-4xl mx-auto px-4">
// //         <button onClick={() => router.back()} className="mb-12 cursor-pointer font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
// //           <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> ABORT REGISTRATION
// //         </button>
// //         <div className="p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
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
// //             {competition.description || 'Secure your slot in this competition.'}
// //           </p>
// //           <div className="border p-6 mb-10 relative z-10" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite }}>
// //             <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>TEAM SIZE</p>
// //             <span className="text-2xl font-black tracking-widest" style={{ color: palette.stucco }}>
// //               {minMembers === maxMembers ? `${minMembers} MEMBER${minMembers > 1 ? 'S' : ''}` : `${minMembers}-${maxMembers} MEMBERS`}
// //             </span>
// //           </div>
// //           {isRejected && (
// //             <div className="border p-6 mb-8 relative z-10" style={{ borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
// //               <h3 className="text-red-500 font-bold tracking-[0.2em] uppercase mb-2 text-sm">⚠️ PREVIOUS SUBMISSION REJECTED</h3>
// //               <p className="text-red-200 text-sm mb-1">Your previous registration was rejected by the Administrator.</p>
// //               {regStatus?.rejection_reason && (
// //                 <p className="text-red-200 text-sm font-bold mb-3">Reason: {regStatus.rejection_reason}</p>
// //               )}
// //               <p className="text-white text-[10px] tracking-[0.2em] uppercase font-bold">Please resubmit with correct information.</p>
// //             </div>
// //           )}
// //           <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
// //             {isGroup && (
// //               <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
// //                 <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>GROUP INFORMATION</h3>
// //                 <div>
// //                   <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>GROUP NAME *</label>
// //                   <input 
// //                     type="text"
// //                     value={groupName}
// //                     onChange={(e) => setGroupName(e.target.value)}
// //                     className="w-full px-4 py-3 border text-sm focus:outline-none"
// //                     style={{ backgroundColor: palette.onyx, borderColor: formErrors?.['group_name'] ? '#ef4444' : palette.graphite, color: palette.stucco }}
// //                     required
// //                   />
// //                   {getFieldError('group_name')}
// //                 </div>
// //               </div>
// //             )}
// //             <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
// //               <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>REGION *</h3>
// //               <div className="flex gap-4">
// //                 <button
// //                   type="button"
// //                   onClick={() => setRegion('NATIONAL')}
// //                   className="flex-1 py-3 border font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
// //                   style={{
// //                     backgroundColor: region === 'NATIONAL' ? palette.stucco : 'transparent',
// //                     color: region === 'NATIONAL' ? palette.onyx : palette.stucco,
// //                     borderColor: palette.graphite
// //                   }}
// //                 >
// //                   NATIONAL
// //                 </button>
// //                 <button
// //                   type="button"
// //                   onClick={() => setRegion('INTERNATIONAL')}
// //                   className="flex-1 py-3 border font-bold text-sm uppercase tracking-wider transition-all cursor-pointer"
// //                   style={{
// //                     backgroundColor: region === 'INTERNATIONAL' ? palette.stucco : 'transparent',
// //                     color: region === 'INTERNATIONAL' ? palette.onyx : palette.stucco,
// //                     borderColor: palette.graphite
// //                   }}
// //                 >
// //                   INTERNATIONAL
// //                 </button>
// //               </div>
// //               {getFieldError('region')}
// //             </div>
// //             {/* 🔥 TIER SELECTION (DISABLED FOR INTERNAL IF INTERMEDIATE) */}
// //             {!isGroup && (
// //               <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
// //                 <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>CATEGORY *</h3>
// //                 <div className="flex flex-col sm:flex-row gap-4">
// //                   <button
// //                     type="button"
// //                     disabled={regStatus?.user_profile?.type === 'INTERNAL'}
// //                     onClick={() => setCategory('INTERMEDIATE')}
// //                     className={`flex-1 py-3 px-2 border font-bold text-xs uppercase tracking-wider transition-all ${
// //                         regStatus?.user_profile?.type === 'INTERNAL' ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
// //                     }`}
// //                     style={{
// //                       backgroundColor: category === 'INTERMEDIATE' ? palette.stucco : 'transparent',
// //                       color: category === 'INTERMEDIATE' ? palette.onyx : palette.stucco,
// //                       borderColor: palette.graphite
// //                     }}
// //                   >
// //                     INTERMEDIATE (SMP/SMA)
// //                     {regStatus?.user_profile?.type === 'INTERNAL' && (
// //                         <span className="block text-[8px] text-red-500 mt-1 tracking-widest">UNAVAILABLE FOR UNIV.</span>
// //                     )}
// //                   </button>
// //                   <button
// //                     type="button"
// //                     onClick={() => setCategory('ADVANCED')}
// //                     className="flex-1 py-3 px-2 border font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
// //                     style={{
// //                       backgroundColor: category === 'ADVANCED' ? palette.stucco : 'transparent',
// //                       color: category === 'ADVANCED' ? palette.onyx : palette.stucco,
// //                       borderColor: palette.graphite
// //                     }}
// //                   >
// //                     ADVANCED (MAHASISWA)
// //                   </button>
// //                 </div>
// //                 {getFieldError('category')}
// //               </div>
// //             )}
// //             {!isGroup ? (
// //               <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(255,255,255,0.05)' }}>
// //                 <p className="text-xs font-bold uppercase tracking-wider" style={{ color: palette.greige }}>NOTE:</p>
// //                 <p className="text-xs mt-2" style={{ color: palette.ash }}>For individual competition, your profile data will be used automatically.</p>
// //               </div>
// //             ) : (
// //               <>
// //                 <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(255,255,255,0.05)' }}>
// //                   <p className="text-xs font-bold uppercase tracking-wider" style={{ color: palette.greige }}>NOTE:</p>
// //                   <p className="text-xs mt-2" style={{ color: palette.ash }}>Leader (you) will be registered automatically. Add other team members below.</p>
// //                   {getFieldError('members')}
// //                 </div>
// //                 {members.map((member, index) => (
// //               <div key={index} className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
// //                 <div className="flex justify-between items-center mb-4">
// //                   <h3 className="text-sm font-black uppercase tracking-wider" style={{ color: palette.greige }}>
// //                     {index === 0 ? 'LEADER (YOU)' : `MEMBER ${index}`}
// //                   </h3>
// //                   {members.length > minMembers && index !== 0 && (
// //                     <button type="button" onClick={() => handleRemoveMember(index)} className="text-red-500 text-xs font-bold uppercase tracking-wider hover:text-red-400 cursor-pointer">
// //                       REMOVE
// //                     </button>
// //                   )}
// //                 </div>
// //                 <div className="space-y-4">
// //                   <div>
// //                     <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>NAME *</label>
// //                     <input 
// //                       type="text"
// //                       value={member.name}
// //                       onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
// //                       className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
// //                       style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.name`] ? '#ef4444' : palette.graphite, color: palette.stucco }}
// //                       disabled={index === 0 && !!regStatus?.user_profile?.name}
// //                       required
// //                     />
// //                     {getMemberError(index, 'name')}
// //                   </div>
// //                   <div>
// //                     <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>EMAIL *</label>
// //                     <input 
// //                       type="email"
// //                       value={member.email}
// //                       onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
// //                       className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
// //                       style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.email`] ? '#ef4444' : palette.graphite, color: palette.stucco }}
// //                       disabled={index === 0 && !!regStatus?.user_profile?.email}
// //                       required
// //                     />
// //                     {getMemberError(index, 'email')}
// //                   </div>
// //                   <div>
// //                     <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>Whatsapp Contact *</label>
// //                     <input 
// //                       type="tel"
// //                       value={member.phone}
// //                       onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
// //                       className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
// //                       style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.phone`] ? '#ef4444' : palette.graphite, color: palette.stucco }}
// //                       disabled={index === 0 && !!regStatus?.user_profile?.phone}
// //                       required
// //                     />
// //                     {getMemberError(index, 'phone')}
// //                   </div>
// //                   {index === 0 ? (
// //                     regStatus?.user_profile?.ktm_path || regStatus?.user_profile?.id_card_path ? (
// //                       <div>
// //                         <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (FROM PROFILE)</label>
// //                         <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: palette.onyx }}>
// //                           <img 
// //                             src={`${process.env.NEXT_PUBLIC_API_URL}/storage/${regStatus.user_profile.ktm_path || regStatus.user_profile.id_card_path}`}
// //                             alt="ID Card"
// //                             className="max-w-full h-auto"
// //                             style={{ maxHeight: '200px' }}
// //                           />
// //                         </div>
// //                       </div>
// //                     ) : (
// //                       <div>
// //                         <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (JPG/PNG/PDF) *</label>
// //                         <input 
// //                           type="file"
// //                           accept=".jpg,.jpeg,.png,.pdf"
// //                           onChange={(e) => handleFileUpload(index, e)}
// //                           className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none"
// //                           style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, color: palette.ash }}
// //                           required
// //                         />
// //                       </div>
// //                     )
// //                   ) : (
// //                     <div>
// //                       <div className="flex justify-between items-center mb-2">
// //                          <label className="block text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (JPG/PNG/PDF) *</label>
// //                          {/* INFO DRAFT: Biar peserta tau kalau KTP mereka sebenernya udah ke-save di draft */}
// //                          {regStatus?.draft_data?.members?.[index - 1]?.id_card && !members[index].id_card && (
// //                             <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">✓ Saved in Draft</span>
// //                          )}
// //                       </div>
// //                       <input 
// //                         type="file"
// //                         accept=".jpg,.jpeg,.png,.pdf"
// //                         onChange={(e) => handleFileUpload(index, e)}
// //                         className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none"
// //                         style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.id_card`] ? '#ef4444' : palette.graphite, color: palette.ash }}
// //                         required={!regStatus?.draft_data?.members?.[index - 1]?.id_card} 
// //                       />
// //                       {getMemberError(index, 'id_card')}
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>
// //                 ))}
// //                 {members.length < maxMembers && (
// //                   <button 
// //                     type="button"
// //                     onClick={handleAddMember}
// //                     className="w-full py-4 border font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-opacity-10 cursor-pointer"
// //                     style={{ borderColor: palette.graphite, color: palette.greige }}
// //                   >
// //                     + ADD MEMBER
// //                   </button>
// //                 )}
// //               </>
// //             )}
// //             <button 
// //               type="submit" 
// //               disabled={isSubmitting}
// //               className="w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
// //               style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
// //             >
// //               {isSubmitting ? 'PROCESSING...' : 'SUBMIT PROTOCOL'}
// //             </button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// 'use client';
// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, useRouter, useSearchParams } from 'next/navigation';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { competitionService } from '@/services/competition-service';
// import toast from 'react-hot-toast';
// import Swal from 'sweetalert2';
// import imageCompression from 'browser-image-compression';
// // 🔥 INI DIA YANG BIKIN ERROR KEMAREN BRO! UDAH GUA IMPORT 🔥
// import { fetchClient } from '@/lib/fetch-client';
// const palette = {
//   onyx: '#1C1C1B', obsidian: '#1a1a1a', walnut: '#6A5D52', greige: '#B7AC9B',
//   ash: '#979086', stucco: '#E2E2DE', graphite: '#494947', gravel: '#7b787a'
// };
// interface Member {
//   name: string; email: string; phone: string; id_card: File | null;
// }
// export default function CompetitionRegisterPage() {
//   const params = useParams();
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const queryClient = useQueryClient();
//   const key = params?.key as string;
//   const queryCategory = searchParams?.get('category')?.toUpperCase() as 'INTERMEDIATE' | 'ADVANCED' | '';
//   const { data: competition, isLoading } = useQuery({
//     queryKey: ['competition', key],
//     queryFn: () => competitionService.getCompetition(key),
//     enabled: !!key, 
//   });
//   const { data: regStatus, isLoading: isStatusLoading } = useQuery({
//     queryKey: ['competition-status', key], 
//     queryFn: async () => {
//       try { return await competitionService.checkStatusRegistrations(key); } 
//       catch (error: any) { return null; }
//     },
//     enabled: !!key, retry: false, staleTime: 0, gcTime: 0     
//   });
//   const isGroup = competition?.participant_type === 'GROUP';
//   const minMembers = competition?.min_members || 1;
//   const maxMembers = competition?.max_members || 1;
//   const [members, setMembers] = useState<Member[]>([{ name: '', email: '', phone: '', id_card: null }]);
//   const [groupName, setGroupName] = useState('');
//   const [region, setRegion] = useState<'NATIONAL' | 'INTERNATIONAL'>('NATIONAL');
//   const [category, setCategory] = useState<'INTERMEDIATE' | 'ADVANCED' | ''>((queryCategory === 'INTERMEDIATE' || queryCategory === 'ADVANCED') ? queryCategory : ''); 
//   // STATE UPLOAD KARYA & KONSEP
//   const [submissionFile, setSubmissionFile] = useState<File | null>(null); 
//   const [conceptFile, setConceptFile] = useState<File | null>(null); 
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formErrors, setFormErrors] = useState<any>(null);
//   const statusStr = regStatus?.status?.toUpperCase() || '';
//   const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
//   const isUnregistered = statusStr === 'UNREGISTERED'; 
//   const isDraft = statusStr === 'DRAFT';
//   const isAlreadyRegistered = regStatus && regStatus.status && !isRejected && !isUnregistered && !isDraft;
//   // 1. LOAD DATA DRAFT & AUTO-FILL LEADER
//   useEffect(() => {
//     if (regStatus && competition) {
//       const profile = regStatus.user_profile;
//       let initialMembers: Member[] = [{
//         name: profile?.name || '', email: profile?.email || '', phone: profile?.phone || '', id_card: null
//       }];
//       const draft = regStatus.draft_data;
//       if (draft && Object.keys(draft).length > 0) {
//         if (draft.region) setRegion(draft.region);
//         if (draft.group_name) setGroupName(draft.group_name);
//         if (draft.category) setCategory(draft.category);
//         if (draft.members && Array.isArray(draft.members)) {
//            const draftMembers = draft.members.map((m: any) => ({
//               name: m.name || '', email: m.email || '', phone: m.phone || '', id_card: null 
//            }));
//            initialMembers = [...initialMembers, ...draftMembers];
//         }
//       }
//       while (initialMembers.length < competition.min_members) {
//          initialMembers.push({ name: '', email: '', phone: '', id_card: null });
//       }
//       setMembers(initialMembers);
//     }
//   }, [regStatus, competition]);
//   // 2. AUTO-SAVE DRAFT (DEBOUNCE 3 DETIK)
//   const isInitialMount = useRef(true);
//   useEffect(() => {
//     if (isInitialMount.current) { isInitialMount.current = false; return; }
//     if (isAlreadyRegistered || isSubmitting || !competition || isLoading) return;
//     const timer = setTimeout(async () => {
//        const formData = new FormData();
//        formData.append('draft_data[region]', region);
//        if (groupName) formData.append('draft_data[group_name]', groupName);
//        if (category) formData.append('draft_data[category]', category);
//        const membersToDraft = isGroup ? members.slice(1) : [];
//        membersToDraft.forEach((m, idx) => {
//           if (m.name) formData.append(`draft_data[members][${idx}][name]`, m.name);
//           if (m.email) formData.append(`draft_data[members][${idx}][email]`, m.email);
//           if (m.phone) formData.append(`draft_data[members][${idx}][phone]`, m.phone);
//           if (m.id_card instanceof File) formData.append(`draft_data[members][${idx}][id_card]`, m.id_card);
//        });
//        try { await competitionService.saveDraft(key, formData); } 
//        catch(e) {}
//     }, 3000); 
//     return () => clearTimeout(timer); 
//   }, [members, groupName, region, category]); 
//   useEffect(() => {
//     if (regStatus && regStatus.is_eligible === false) {
//       Swal.fire({
//         icon: 'error', title: 'ACCESS RESTRICTED', text: regStatus.ineligibility_reason || 'You are not eligible for this competition.',
//         background: palette.onyx, color: palette.stucco, confirmButtonColor: '#ef4444', allowOutsideClick: false, 
//         customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em] uppercase text-xl', confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3' }
//       }).then(() => router.push('/dashboard/competition'));
//     }
//   }, [regStatus, router]);
//   useEffect(() => {
//     if (isAlreadyRegistered) {
//       Swal.fire({
//         icon: 'info', title: 'ALREADY REGISTERED', text: 'You have already submitted a registration protocol for this battlefield. Check your dashboard for updates.',
//         background: palette.onyx, color: palette.stucco, confirmButtonColor: palette.walnut, allowOutsideClick: false, 
//         customClass: { popup: 'border border-[#7b787a] rounded-none', title: 'font-black tracking-[0.2em] uppercase text-xl', confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3' }
//       }).then(() => router.push('/dashboard'));
//     }
//   }, [isAlreadyRegistered, router]);
//   // HANDLERS
//   const handleAddMember = () => { if (members.length < maxMembers) setMembers([...members, { name: '', email: '', phone: '', id_card: null }]); };
//   const handleRemoveMember = (index: number) => { if (members.length > minMembers && index !== 0) setMembers(members.filter((_, i) => i !== index)); };
//   const handleMemberChange = (index: number, field: keyof Member, value: any) => { const newMembers = [...members]; newMembers[index] = { ...newMembers[index], [field]: value }; setMembers(newMembers); };
//   const handleFileUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (file.type === 'application/pdf') { handleMemberChange(index, 'id_card', file); return; }
//     try {
//       const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1280, useWebWorker: true };
//       const compressedFile = await imageCompression(file, options);
//       handleMemberChange(index, 'id_card', compressedFile);
//     } catch (error) { handleMemberChange(index, 'id_card', file); }
//   };
//   const getFieldError = (field: string) => {
//     if (!formErrors || !formErrors[field]) return null;
//     return <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wider animate-pulse">{formErrors[field][0]}</p>;
//   };
//   const getMemberError = (frontendIndex: number, field: string) => {
//     if (frontendIndex === 0) return null; 
//     const backendIndex = frontendIndex - 1; 
//     return getFieldError(`members.${backendIndex}.${field}`);
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormErrors(null);
//     if (members.length < minMembers) return toast.error(`Minimal ${minMembers} anggota diperlukan`, { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
//     if (isGroup && !groupName) return toast.error('Group name is required', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
//     if (!isGroup && !category) return toast.error('Category (Intermediate/Advanced) is required', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
//     // 🔥 Validasi Upload Karya Khusus Individu (Fashion Sketch) 🔥
//     if (!isGroup && !submissionFile) return toast.error('Please upload your artwork (PDF).', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
//     if (!isGroup && !conceptFile) return toast.error('Please upload your concept file (PDF).', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
//     const confirmation = await Swal.fire({
//       icon: 'warning', title: 'INITIATE PROTOCOL?', text: 'Are you sure you want to submit? Data cannot be altered later.',
//       background: palette.onyx, color: palette.stucco, showCancelButton: true, confirmButtonColor: palette.walnut, cancelButtonColor: palette.graphite, confirmButtonText: 'SECURE PASS', cancelButtonText: 'ABORT',
//       customClass: { popup: 'border border-[#7b787a] rounded-none', title: 'font-black tracking-[0.2em] uppercase text-xl', confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2', cancelButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2' }
//     });
//     if (!confirmation.isConfirmed) return;
//     setIsSubmitting(true);
//     try {
//       const membersToSubmit = isGroup ? members.slice(1) : [];
//       // 1. Pendaftaran
//       await competitionService.submitFinal(key, membersToSubmit, groupName, region, isGroup ? undefined : category);
//       // 2. Upload Karya (HANYA UNTUK INDIVIDU / SKETCH)
//       if (!isGroup && submissionFile && conceptFile) {
//         const submissionForm = new FormData();
//         submissionForm.append('artwork', submissionFile);
//         submissionForm.append('concept', conceptFile);
//         await fetchClient(`/api/competitions/${key}/submission`, { method: 'POST', body: submissionForm });
//       }
//       toast.success('Registration protocol submitted successfully!', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
//       queryClient.invalidateQueries({ queryKey: ['competition', key] });
//       router.push('/dashboard/competition'); 
//     } catch (error: any) {
//       // (Kodingan Error Handling Tetap Sama)
//       if (error.isValidationError) {
//         const validationErrors = error.errors;
//         if (validationErrors.status) {
//           Swal.fire({ title: 'ACCESS RESTRICTED', text: validationErrors.status[0], icon: 'warning', background: palette.onyx, color: palette.stucco, confirmButtonColor: palette.walnut, confirmButtonText: 'RETURN TO TERMINAL', customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em]' } }).then(() => router.push('/dashboard'));
//         } else {
//           setFormErrors(validationErrors); 
//           Swal.fire({ title: 'DATA REJECTED', text: 'Data entry protocol rejected. Please verify the highlighted fields.', icon: 'error', background: palette.onyx, color: palette.stucco, confirmButtonColor: '#ef4444', confirmButtonText: 'RECALIBRATE', customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em]' } });
//         }
//       } else {
//         Swal.fire({ title: 'SYSTEM FAILURE', text: error.message || 'Registration protocol failed to execute.', icon: 'error', background: palette.onyx, color: palette.stucco, confirmButtonColor: '#ef4444', confirmButtonText: 'ACKNOWLEDGE', customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em]' } });
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   if (isLoading || isStatusLoading) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]" style={{ color: palette.ash }}>ESTABLISHING CONNECTION...</div>;
//   if (isAlreadyRegistered) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>VERIFYING PROTOCOL...</div>;
//   if (regStatus?.is_eligible === false) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>ACCESS RESTRICTED...</div>;
//   if (!competition) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>SYSTEM NOTICE: COMPETITION NOT FOUND.</div>;
//   return (
//     <div className="relative z-10 max-w-4xl mx-auto px-4">
//         <button onClick={() => router.back()} className="mb-12 cursor-pointer font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
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
//           <div className="border p-6 mb-10 relative z-10 flex flex-col md:flex-row justify-between items-start gap-4" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite }}>
//             <div>
//               <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>TEAM SIZE / TIER</p>
//               <span className="text-xl md:text-2xl font-black tracking-widest" style={{ color: palette.stucco }}>
//                 {isGroup ? `RESTYLING (${minMembers}-${maxMembers} MEMBERS)` : `SKETCH (${category || 'SELECT TIER BELOW'})`}
//               </span>
//             </div>
//             <div className="text-right">
//                 <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>CLEARANCE FEE</p>
//                 <div className="text-xl md:text-2xl font-black uppercase tracking-widest" style={{ color: palette.greige }}>NO CHARGE</div>
//             </div>
//           </div>
//           {isRejected && (
//             <div className="border p-6 mb-8 relative z-10" style={{ borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
//               <h3 className="text-red-500 font-bold tracking-[0.2em] uppercase mb-2 text-sm">⚠️ PREVIOUS SUBMISSION REJECTED</h3>
//               <p className="text-red-200 text-sm mb-1">Your previous registration was rejected by the Administrator.</p>
//               {regStatus?.rejection_reason && <p className="text-red-200 text-sm font-bold mb-3">Reason: {regStatus.rejection_reason}</p>}
//               <p className="text-white text-[10px] tracking-[0.2em] uppercase font-bold">Please resubmit with correct information.</p>
//             </div>
//           )}
//           <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
//             {isGroup && (
//               <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
//                 <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>GROUP INFORMATION</h3>
//                 <div>
//                   <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>GROUP NAME *</label>
//                   <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} className="w-full px-4 py-3 border text-sm focus:outline-none" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.['group_name'] ? '#ef4444' : palette.graphite, color: palette.stucco }} required />
//                   {getFieldError('group_name')}
//                 </div>
//               </div>
//             )}
//             <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
//               <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>REGION *</h3>
//               <div className="flex gap-4">
//                 <button type="button" onClick={() => setRegion('NATIONAL')} className="flex-1 py-3 border font-bold text-sm uppercase tracking-wider transition-all cursor-pointer" style={{ backgroundColor: region === 'NATIONAL' ? palette.stucco : 'transparent', color: region === 'NATIONAL' ? palette.onyx : palette.stucco, borderColor: palette.graphite }}>NATIONAL</button>
//                 <button type="button" onClick={() => setRegion('INTERNATIONAL')} className="flex-1 py-3 border font-bold text-sm uppercase tracking-wider transition-all cursor-pointer" style={{ backgroundColor: region === 'INTERNATIONAL' ? palette.stucco : 'transparent', color: region === 'INTERNATIONAL' ? palette.onyx : palette.stucco, borderColor: palette.graphite }}>INTERNATIONAL (ABROAD)</button>
//               </div>
//               {getFieldError('region')}
//             </div>
//             {!isGroup && (
//               <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
//                 <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>CATEGORY *</h3>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button type="button" disabled={regStatus?.user_profile?.type === 'INTERNAL'} onClick={() => setCategory('INTERMEDIATE')} className={`flex-1 py-3 px-2 border font-bold text-xs uppercase tracking-wider transition-all ${regStatus?.user_profile?.type === 'INTERNAL' ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`} style={{ backgroundColor: category === 'INTERMEDIATE' ? palette.stucco : 'transparent', color: category === 'INTERMEDIATE' ? palette.onyx : palette.stucco, borderColor: palette.graphite }}>
//                     INTERMEDIATE (SMP/SMA) {regStatus?.user_profile?.type === 'INTERNAL' && <span className="block text-[8px] text-red-500 mt-1 tracking-widest">UNAVAILABLE FOR UNIV.</span>}
//                   </button>
//                   <button type="button" onClick={() => setCategory('ADVANCED')} className="flex-1 py-3 px-2 border font-bold text-xs uppercase tracking-wider transition-all cursor-pointer" style={{ backgroundColor: category === 'ADVANCED' ? palette.stucco : 'transparent', color: category === 'ADVANCED' ? palette.onyx : palette.stucco, borderColor: palette.graphite }}>ADVANCED (MAHASISWA/UMUM)</button>
//                 </div>
//                 {getFieldError('category')}
//               </div>
//             )}
//             {!isGroup ? (
//               <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(255,255,255,0.05)' }}>
//                 <p className="text-xs font-bold uppercase tracking-wider" style={{ color: palette.greige }}>NOTE:</p>
//                 <p className="text-xs mt-2" style={{ color: palette.ash }}>For individual competition, your profile data will be used automatically.</p>
//               </div>
//             ) : (
//               <>
//                 <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(255,255,255,0.05)' }}>
//                   <p className="text-xs font-bold uppercase tracking-wider" style={{ color: palette.greige }}>NOTE:</p>
//                   <p className="text-xs mt-2" style={{ color: palette.ash }}>Leader (you) will be registered automatically. Add other team members below.</p>
//                   {getFieldError('members')}
//                 </div>
//                 {members.map((member, index) => (
//                   <div key={index} className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
//                     <div className="flex justify-between items-center mb-4">
//                       <h3 className="text-sm font-black uppercase tracking-wider" style={{ color: palette.greige }}>
//                         {index === 0 ? 'LEADER (YOU)' : `MEMBER ${index + 1}`}
//                       </h3>
//                       {index >= minMembers && (
//                         <button type="button" onClick={() => handleRemoveMember(index)} className="text-red-500 text-xs font-bold uppercase tracking-wider hover:text-red-400 cursor-pointer">REMOVE</button>
//                       )}
//                     </div>
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>NAME *</label>
//                         <input type="text" value={member.name} onChange={(e) => handleMemberChange(index, 'name', e.target.value)} className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.name`] ? '#ef4444' : palette.graphite, color: palette.stucco }} disabled={index === 0 && !!regStatus?.user_profile?.name} required />
//                         {getMemberError(index, 'name')}
//                       </div>
//                       <div>
//                         <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>EMAIL *</label>
//                         <input type="email" value={member.email} onChange={(e) => handleMemberChange(index, 'email', e.target.value)} className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.email`] ? '#ef4444' : palette.graphite, color: palette.stucco }} disabled={index === 0 && !!regStatus?.user_profile?.email} required />
//                         {getMemberError(index, 'email')}
//                       </div>
//                       <div>
//                         <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>Whatsapp Contact *</label>
//                         <input type="tel" value={member.phone} onChange={(e) => handleMemberChange(index, 'phone', e.target.value)} className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.phone`] ? '#ef4444' : palette.graphite, color: palette.stucco }} disabled={index === 0 && !!regStatus?.user_profile?.phone} required />
//                         {getMemberError(index, 'phone')}
//                       </div>
//                       {index === 0 ? (
//                         regStatus?.user_profile?.ktm_path || regStatus?.user_profile?.id_card_path ? (
//                           <div>
//                             <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (FROM PROFILE)</label>
//                             <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: palette.onyx }}>
//                               <span className="text-xs font-bold text-green-500 uppercase tracking-widest">✓ VERIFIED BY SYSTEM</span>
//                             </div>
//                           </div>
//                         ) : (
//                           <div>
//                             <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (JPG/PNG/PDF) *</label>
//                             <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(index, e)} className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, color: palette.ash }} required />
//                           </div>
//                         )
//                       ) : (
//                         <div>
//                           <div className="flex justify-between items-center mb-2">
//                              <label className="block text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (JPG/PNG/PDF) *</label>
//                              {regStatus?.draft_data?.members?.[index - 1]?.id_card && !members[index].id_card && (
//                                 <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">✓ Saved in Draft</span>
//                              )}
//                           </div>
//                           <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(index, e)} className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.id_card`] ? '#ef4444' : palette.graphite, color: palette.ash }} required={!regStatus?.draft_data?.members?.[index - 1]?.id_card} />
//                           {getMemberError(index, 'id_card')}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//                 {members.length < maxMembers && (
//                   <button type="button" onClick={handleAddMember} className="w-full py-4 border font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-opacity-10 cursor-pointer" style={{ borderColor: palette.graphite, color: palette.greige }}>+ ADD MEMBER</button>
//                 )}
//               </>
//             )}
//             {/* 🔥 KHUSUS FASHION SKETCH AJA YANG UPLOAD KARYA 🔥 */}
//             {!isGroup && (
//               <div className="border p-6 mt-12" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(255,255,255,0.05)' }}>
//                   <h3 className="text-sm font-black uppercase tracking-wider mb-6" style={{ color: palette.stucco }}>ARTWORK SUBMISSION PROTOCOL</h3>
//                   <div className="space-y-6">
//                       <div>
//                           <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>UPLOAD SKETCH (PDF) *</label>
//                           <input type="file" accept=".pdf" onChange={(e) => setSubmissionFile(e.target.files?.[0] || null)} className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite, color: palette.ash }} required />
//                           <p className="text-[9px] mt-2 italic" style={{ color: palette.gravel }}>Format: Nama Lengkap_Kategori Lomba.pdf</p>
//                       </div>
//                       <div>
//                           <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>UPLOAD CONCEPT (PDF) *</label>
//                           <input type="file" accept=".pdf" onChange={(e) => setConceptFile(e.target.files?.[0] || null)} className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite, color: palette.ash }} required />
//                           <p className="text-[9px] mt-2 italic" style={{ color: palette.gravel }}>Format: Nama Lengkap_Concept_Kategori Lomba.pdf</p>
//                       </div>
//                   </div>
//               </div>
//             )}
//             <button type="submit" disabled={isSubmitting} className="w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer" style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}>
//               {isSubmitting ? 'PROCESSING...' : 'SUBMIT PROTOCOL'}
//             </button>
//           </form>
//         </div>
//       </div>
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
    // 🔥 DETEKSI MANUAL TIPE LOMBA (MENGAKALI BACKEND YANG NGACO) 🔥
    const compName = (competition?.name || '').toUpperCase();
    const isRestyling = compName.includes('RESTYLING') || compName.includes('STYLING');
    // Restyling = Group (2-3). Sketch = Individu (1).
    const isGroup = isRestyling;
    const minMembers = isGroup ? 2 : 1;
    const maxMembers = isGroup ? 3 : 1;
    // Deteksi Category Otomatis dari nama lomba (INT/ADV)
    let autoCategory = '';
    if (!isGroup) {
        if (compName.includes('INTERMEDIATE')) autoCategory = 'INTERMEDIATE';
        else if (compName.includes('ADVANCED')) autoCategory = 'ADVANCED';
    }
    // State Form
    const [members, setMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            name: '',
            email: '',
            phone: '',
            id_card: null
        }
    ]);
    const [groupName, setGroupName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('NATIONAL');
    // STATE UPLOAD KARYA & KONSEP (KHUSUS SKETCH)
    const [submissionFile, setSubmissionFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [conceptFile, setConceptFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formErrors, setFormErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const statusStr = regStatus?.status?.toUpperCase() || '';
    const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
    const isUnregistered = statusStr === 'UNREGISTERED';
    const isDraft = statusStr === 'DRAFT';
    const isAlreadyRegistered = regStatus && regStatus.status && !isRejected && !isUnregistered && !isDraft;
    // LOAD DRAFT & AUTO FILL
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompetitionRegisterPage.useEffect": ()=>{
            if (regStatus && competition) {
                const profile = regStatus.user_profile;
                let initialMembers = [
                    {
                        name: profile?.name || '',
                        email: profile?.email || '',
                        phone: profile?.phone || '',
                        id_card: null
                    }
                ];
                const draft = regStatus.draft_data;
                if (draft && Object.keys(draft).length > 0) {
                    if (draft.region) setRegion(draft.region);
                    if (draft.group_name) setGroupName(draft.group_name);
                    if (draft.members && Array.isArray(draft.members)) {
                        const draftMembers = draft.members.map({
                            "CompetitionRegisterPage.useEffect.draftMembers": (m)=>({
                                    name: m.name || '',
                                    email: m.email || '',
                                    phone: m.phone || '',
                                    id_card: null
                                })
                        }["CompetitionRegisterPage.useEffect.draftMembers"]);
                        initialMembers = [
                            ...initialMembers,
                            ...draftMembers
                        ];
                    }
                }
                while(initialMembers.length < minMembers){
                    initialMembers.push({
                        name: '',
                        email: '',
                        phone: '',
                        id_card: null
                    });
                }
                setMembers(initialMembers);
            }
        }
    }["CompetitionRegisterPage.useEffect"], [
        regStatus,
        competition,
        minMembers
    ]);
    // AUTO-SAVE DRAFT
    const isInitialMount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompetitionRegisterPage.useEffect": ()=>{
            if (isInitialMount.current) {
                isInitialMount.current = false;
                return;
            }
            if (isAlreadyRegistered || isSubmitting || !competition || isLoading) return;
            const timer = setTimeout({
                "CompetitionRegisterPage.useEffect.timer": async ()=>{
                    const formData = new FormData();
                    formData.append('draft_data[region]', region);
                    if (groupName) formData.append('draft_data[group_name]', groupName);
                    if (autoCategory) formData.append('draft_data[category]', autoCategory);
                    const membersToDraft = isGroup ? members.slice(1) : [];
                    membersToDraft.forEach({
                        "CompetitionRegisterPage.useEffect.timer": (m, idx)=>{
                            if (m.name) formData.append(`draft_data[members][${idx}][name]`, m.name);
                            if (m.email) formData.append(`draft_data[members][${idx}][email]`, m.email);
                            if (m.phone) formData.append(`draft_data[members][${idx}][phone]`, m.phone);
                            if (m.id_card instanceof File) formData.append(`draft_data[members][${idx}][id_card]`, m.id_card);
                        }
                    }["CompetitionRegisterPage.useEffect.timer"]);
                    try {
                        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionService"].saveDraft(key, formData);
                    } catch (e) {}
                }
            }["CompetitionRegisterPage.useEffect.timer"], 3000);
            return ({
                "CompetitionRegisterPage.useEffect": ()=>clearTimeout(timer)
            })["CompetitionRegisterPage.useEffect"];
        }
    }["CompetitionRegisterPage.useEffect"], [
        members,
        groupName,
        region,
        autoCategory,
        isGroup,
        key,
        isAlreadyRegistered,
        isSubmitting,
        competition,
        isLoading
    ]);
    // ALERT GATES
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompetitionRegisterPage.useEffect": ()=>{
            if (regStatus && regStatus.is_eligible === false) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    icon: 'error',
                    title: 'ACCESS RESTRICTED',
                    text: regStatus.ineligibility_reason || 'You are not eligible for this competition.',
                    background: palette.onyx,
                    color: palette.stucco,
                    confirmButtonColor: '#ef4444',
                    allowOutsideClick: false,
                    customClass: {
                        popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]',
                        title: 'font-black tracking-[0.2em] uppercase text-xl',
                        confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3'
                    }
                }).then({
                    "CompetitionRegisterPage.useEffect": ()=>router.push('/dashboard/competition')
                }["CompetitionRegisterPage.useEffect"]);
            }
        }
    }["CompetitionRegisterPage.useEffect"], [
        regStatus,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
                    "CompetitionRegisterPage.useEffect": ()=>router.push('/dashboard')
                }["CompetitionRegisterPage.useEffect"]);
            }
        }
    }["CompetitionRegisterPage.useEffect"], [
        isAlreadyRegistered,
        router
    ]);
    // HANDLERS MEMBER
    const handleAddMember = ()=>{
        if (members.length < maxMembers) setMembers([
            ...members,
            {
                name: '',
                email: '',
                phone: '',
                id_card: null
            }
        ]);
    };
    const handleRemoveMember = (index)=>{
        if (members.length > minMembers && index !== 0) setMembers(members.filter((_, i)=>i !== index));
    };
    const handleMemberChange = (index, field, value)=>{
        const newMembers = [
            ...members
        ];
        newMembers[index] = {
            ...newMembers[index],
            [field]: value
        };
        setMembers(newMembers);
    };
    const handleFileUpload = async (index, e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.type === 'application/pdf') return handleMemberChange(index, 'id_card', file);
        try {
            const options = {
                maxSizeMB: 0.5,
                maxWidthOrHeight: 1280,
                useWebWorker: true
            };
            const compressedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$browser$2d$image$2d$compression$2f$dist$2f$browser$2d$image$2d$compression$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(file, options);
            handleMemberChange(index, 'id_card', compressedFile);
        } catch (error) {
            handleMemberChange(index, 'id_card', file);
        }
    };
    const getFieldError = (field)=>{
        if (!formErrors || !formErrors[field]) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wider animate-pulse",
            children: formErrors[field][0]
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
            lineNumber: 1224,
            columnNumber: 12
        }, this);
    };
    const getMemberError = (frontendIndex, field)=>{
        if (frontendIndex === 0) return null;
        const backendIndex = frontendIndex - 1;
        return getFieldError(`members.${backendIndex}.${field}`);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setFormErrors(null);
        if (isGroup && members.length < 2) return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('A group must have at least 2 members.', {
            style: {
                background: palette.onyx,
                color: palette.stucco,
                border: `1px solid ${palette.graphite}`
            }
        });
        if (isGroup && !groupName) return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Group name is required.', {
            style: {
                background: palette.onyx,
                color: palette.stucco,
                border: `1px solid ${palette.graphite}`
            }
        });
        if (!isGroup && !submissionFile) return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Please upload your sketch artwork (PDF).', {
            style: {
                background: palette.onyx,
                color: palette.stucco,
                border: `1px solid ${palette.graphite}`
            }
        });
        if (!isGroup && !conceptFile) return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error('Please upload your concept file (PDF).', {
            style: {
                background: palette.onyx,
                color: palette.stucco,
                border: `1px solid ${palette.graphite}`
            }
        });
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
            const membersToSubmit = isGroup ? members.slice(1) : [];
            // 1. Submit Registration
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionService"].submitFinal(key, membersToSubmit, groupName, region, isGroup ? undefined : autoCategory);
            // 2. Upload Karya (KHUSUS SKETCH)
            if (!isGroup && submissionFile && conceptFile) {
                const submissionForm = new FormData();
                submissionForm.append('artwork', submissionFile);
                submissionForm.append('concept', conceptFile);
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/competitions/${key}/submission`, {
                    method: 'POST',
                    body: submissionForm
                });
            }
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
                    }).then(()=>router.push('/dashboard'));
                } else {
                    setFormErrors(validationErrors);
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        title: 'DATA REJECTED',
                        text: 'Data entry protocol rejected. Please verify the highlighted fields.',
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
        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
        lineNumber: 1285,
        columnNumber: 44
    }, this);
    if (isAlreadyRegistered) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "VERIFYING PROTOCOL..."
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
        lineNumber: 1286,
        columnNumber: 35
    }, this);
    if (regStatus?.is_eligible === false) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "ACCESS RESTRICTED..."
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
        lineNumber: 1287,
        columnNumber: 48
    }, this);
    if (!competition) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]",
        style: {
            color: palette.ash
        },
        children: "SYSTEM NOTICE: COMPETITION NOT FOUND."
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
        lineNumber: 1288,
        columnNumber: 28
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-10 max-w-4xl mx-auto px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.back(),
                className: "mb-12 cursor-pointer font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white",
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
                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                        lineNumber: 1293,
                        columnNumber: 11
                    }, this),
                    " ABORT REGISTRATION"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                lineNumber: 1292,
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
                        className: "flex items-center gap-3 mb-6 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full animate-pulse",
                                style: {
                                    backgroundColor: palette.stucco,
                                    boxShadow: `0 0 10px ${palette.stucco}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1299,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                style: {
                                    color: palette.ash
                                },
                                children: "DATA ENTRY PROTOCOL"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1300,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                        lineNumber: 1298,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest relative z-10",
                        style: {
                            color: palette.stucco
                        },
                        children: isRestyling ? 'FASHION RESTYLING COMPETITION' : compName
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                        lineNumber: 1303,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border p-6 mb-10 relative z-10 flex flex-col md:flex-row justify-between items-start gap-4",
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
                                        children: "TEAM SIZE / TIER"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1309,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl md:text-2xl font-black tracking-widest",
                                        style: {
                                            color: palette.stucco
                                        },
                                        children: isGroup ? `GROUP (2-3 MEMBERS)` : `INDIVIDUAL (${autoCategory})`
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1310,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1308,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] tracking-[0.2em] mb-2 uppercase",
                                        style: {
                                            color: palette.ash
                                        },
                                        children: "CLEARANCE FEE"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1315,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl md:text-2xl font-black uppercase tracking-widest",
                                        style: {
                                            color: palette.greige
                                        },
                                        children: "NO CHARGE"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1316,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1314,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                        lineNumber: 1307,
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
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1322,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-200 text-sm mb-1",
                                children: "Your previous registration was rejected by the Administrator."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1323,
                                columnNumber: 15
                            }, this),
                            regStatus?.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-200 text-sm font-bold mb-3",
                                children: [
                                    "Reason: ",
                                    regStatus.rejection_reason
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1324,
                                columnNumber: 47
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white text-[10px] tracking-[0.2em] uppercase font-bold",
                                children: "Please resubmit with correct information."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1325,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                        lineNumber: 1321,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-8 relative z-10",
                        children: [
                            isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-6",
                                style: {
                                    borderColor: palette.graphite,
                                    backgroundColor: palette.obsidian
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-black uppercase tracking-wider mb-4",
                                        style: {
                                            color: palette.greige
                                        },
                                        children: "GROUP INFORMATION"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1332,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                                style: {
                                                    color: palette.greige
                                                },
                                                children: "GROUP NAME *"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                lineNumber: 1334,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: groupName,
                                                onChange: (e)=>setGroupName(e.target.value),
                                                className: "w-full px-4 py-3 border text-sm focus:outline-none",
                                                style: {
                                                    backgroundColor: palette.onyx,
                                                    borderColor: formErrors?.['group_name'] ? '#ef4444' : palette.graphite,
                                                    color: palette.stucco
                                                },
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                lineNumber: 1335,
                                                columnNumber: 19
                                            }, this),
                                            getFieldError('group_name')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1333,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1331,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-6",
                                style: {
                                    borderColor: palette.graphite,
                                    backgroundColor: palette.obsidian
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-black uppercase tracking-wider mb-4",
                                        style: {
                                            color: palette.greige
                                        },
                                        children: "REGION *"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setRegion('NATIONAL'),
                                                className: "flex-1 py-3 border font-bold text-sm uppercase tracking-wider transition-all cursor-pointer",
                                                style: {
                                                    backgroundColor: region === 'NATIONAL' ? palette.stucco : 'transparent',
                                                    color: region === 'NATIONAL' ? palette.onyx : palette.stucco,
                                                    borderColor: palette.graphite
                                                },
                                                children: "NATIONAL"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                lineNumber: 1344,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setRegion('INTERNATIONAL'),
                                                className: "flex-1 py-3 border font-bold text-sm uppercase tracking-wider transition-all cursor-pointer",
                                                style: {
                                                    backgroundColor: region === 'INTERNATIONAL' ? palette.stucco : 'transparent',
                                                    color: region === 'INTERNATIONAL' ? palette.onyx : palette.stucco,
                                                    borderColor: palette.graphite
                                                },
                                                children: "INTERNATIONAL (ABROAD)"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                lineNumber: 1345,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1343,
                                        columnNumber: 15
                                    }, this),
                                    getFieldError('region')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1341,
                                columnNumber: 13
                            }, this),
                            !isGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-4",
                                style: {
                                    borderColor: palette.graphite,
                                    backgroundColor: 'rgba(255,255,255,0.05)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold uppercase tracking-wider",
                                        style: {
                                            color: palette.greige
                                        },
                                        children: "NOTE:"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1352,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs mt-2",
                                        style: {
                                            color: palette.ash
                                        },
                                        children: "For individual competition, your profile data will be used automatically."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1353,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1351,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border p-4",
                                        style: {
                                            borderColor: palette.graphite,
                                            backgroundColor: 'rgba(255,255,255,0.05)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-bold uppercase tracking-wider",
                                                style: {
                                                    color: palette.greige
                                                },
                                                children: "NOTE:"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                lineNumber: 1358,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs mt-2",
                                                style: {
                                                    color: palette.ash
                                                },
                                                children: "Leader (you) will be registered automatically. Add other team members below."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                lineNumber: 1359,
                                                columnNumber: 19
                                            }, this),
                                            getFieldError('members')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1357,
                                        columnNumber: 17
                                    }, this),
                                    members.map((member, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border p-6",
                                            style: {
                                                borderColor: palette.graphite,
                                                backgroundColor: palette.obsidian
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-sm font-black uppercase tracking-wider",
                                                            style: {
                                                                color: palette.greige
                                                            },
                                                            children: index === 0 ? 'LEADER (YOU)' : `MEMBER ${index + 1}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                            lineNumber: 1366,
                                                            columnNumber: 23
                                                        }, this),
                                                        index >= minMembers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleRemoveMember(index),
                                                            className: "text-red-500 text-xs font-bold uppercase tracking-wider hover:text-red-400 cursor-pointer",
                                                            children: "REMOVE"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                            lineNumber: 1370,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                    lineNumber: 1365,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                                                    style: {
                                                                        color: palette.greige
                                                                    },
                                                                    children: "NAME *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1376,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    value: member.name,
                                                                    onChange: (e)=>handleMemberChange(index, 'name', e.target.value),
                                                                    className: "w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
                                                                    style: {
                                                                        backgroundColor: palette.onyx,
                                                                        borderColor: formErrors?.[`members.${index - 1}.name`] ? '#ef4444' : palette.graphite,
                                                                        color: palette.stucco
                                                                    },
                                                                    disabled: index === 0 && !!regStatus?.user_profile?.name,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1377,
                                                                    columnNumber: 25
                                                                }, this),
                                                                getMemberError(index, 'name')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                            lineNumber: 1375,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                                                    style: {
                                                                        color: palette.greige
                                                                    },
                                                                    children: "EMAIL *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1381,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "email",
                                                                    value: member.email,
                                                                    onChange: (e)=>handleMemberChange(index, 'email', e.target.value),
                                                                    className: "w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
                                                                    style: {
                                                                        backgroundColor: palette.onyx,
                                                                        borderColor: formErrors?.[`members.${index - 1}.email`] ? '#ef4444' : palette.graphite,
                                                                        color: palette.stucco
                                                                    },
                                                                    disabled: index === 0 && !!regStatus?.user_profile?.email,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1382,
                                                                    columnNumber: 25
                                                                }, this),
                                                                getMemberError(index, 'email')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                            lineNumber: 1380,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                                                    style: {
                                                                        color: palette.greige
                                                                    },
                                                                    children: "Whatsapp Contact *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1386,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "tel",
                                                                    value: member.phone,
                                                                    onChange: (e)=>handleMemberChange(index, 'phone', e.target.value),
                                                                    className: "w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed",
                                                                    style: {
                                                                        backgroundColor: palette.onyx,
                                                                        borderColor: formErrors?.[`members.${index - 1}.phone`] ? '#ef4444' : palette.graphite,
                                                                        color: palette.stucco
                                                                    },
                                                                    disabled: index === 0 && !!regStatus?.user_profile?.phone,
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1387,
                                                                    columnNumber: 25
                                                                }, this),
                                                                getMemberError(index, 'phone')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                            lineNumber: 1385,
                                                            columnNumber: 23
                                                        }, this),
                                                        index === 0 ? regStatus?.user_profile?.ktm_path || regStatus?.user_profile?.id_card_path ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                                                    style: {
                                                                        color: palette.greige
                                                                    },
                                                                    children: "ID CARD (FROM PROFILE)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1394,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border p-4",
                                                                    style: {
                                                                        borderColor: palette.graphite,
                                                                        backgroundColor: palette.onyx
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold text-green-500 uppercase tracking-widest",
                                                                        children: "✓ VERIFIED BY SYSTEM"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                        lineNumber: 1396,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1395,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                            lineNumber: 1393,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                                                    style: {
                                                                        color: palette.greige
                                                                    },
                                                                    children: "ID CARD (JPG/PNG/PDF) *"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1401,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: ".jpg,.jpeg,.png,.pdf",
                                                                    onChange: (e)=>handleFileUpload(index, e),
                                                                    className: "w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none",
                                                                    style: {
                                                                        backgroundColor: palette.onyx,
                                                                        borderColor: palette.graphite,
                                                                        color: palette.ash
                                                                    },
                                                                    required: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1402,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                            lineNumber: 1400,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "block text-[10px] font-bold uppercase tracking-[0.2em]",
                                                                            style: {
                                                                                color: palette.greige
                                                                            },
                                                                            children: "ID CARD (JPG/PNG/PDF) *"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                            lineNumber: 1408,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        regStatus?.draft_data?.members?.[index - 1]?.id_card && !members[index].id_card && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[10px] text-green-500 font-bold tracking-widest uppercase",
                                                                            children: "✓ Saved in Draft"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                            lineNumber: 1410,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1407,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: ".jpg,.jpeg,.png,.pdf",
                                                                    onChange: (e)=>handleFileUpload(index, e),
                                                                    className: "w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none",
                                                                    style: {
                                                                        backgroundColor: palette.onyx,
                                                                        borderColor: formErrors?.[`members.${index - 1}.id_card`] ? '#ef4444' : palette.graphite,
                                                                        color: palette.ash
                                                                    },
                                                                    required: !regStatus?.draft_data?.members?.[index - 1]?.id_card
                                                                }, void 0, false, {
                                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                                    lineNumber: 1413,
                                                                    columnNumber: 27
                                                                }, this),
                                                                getMemberError(index, 'id_card')
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                            lineNumber: 1406,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                    lineNumber: 1374,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                            lineNumber: 1364,
                                            columnNumber: 19
                                        }, this)),
                                    members.length < maxMembers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleAddMember,
                                        className: "w-full py-4 border font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-opacity-10 cursor-pointer",
                                        style: {
                                            borderColor: palette.graphite,
                                            color: palette.greige
                                        },
                                        children: "+ ADD MEMBER"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1422,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true),
                            !isGroup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border p-6 mt-12",
                                style: {
                                    borderColor: palette.graphite,
                                    backgroundColor: 'rgba(255,255,255,0.05)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-black uppercase tracking-wider mb-6",
                                        style: {
                                            color: palette.stucco
                                        },
                                        children: "ARTWORK SUBMISSION PROTOCOL"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1429,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                                        style: {
                                                            color: palette.greige
                                                        },
                                                        children: "UPLOAD SKETCH (PDF) *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                        lineNumber: 1432,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: ".pdf",
                                                        onChange: (e)=>setSubmissionFile(e.target.files?.[0] || null),
                                                        className: "w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none",
                                                        style: {
                                                            backgroundColor: palette.obsidian,
                                                            borderColor: palette.graphite,
                                                            color: palette.ash
                                                        },
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                        lineNumber: 1433,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] mt-2 italic",
                                                        style: {
                                                            color: palette.gravel
                                                        },
                                                        children: "Format: Nama Lengkap_Kategori Lomba.pdf"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                        lineNumber: 1434,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                lineNumber: 1431,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]",
                                                        style: {
                                                            color: palette.greige
                                                        },
                                                        children: "UPLOAD CONCEPT (PDF) *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: ".pdf",
                                                        onChange: (e)=>setConceptFile(e.target.files?.[0] || null),
                                                        className: "w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none",
                                                        style: {
                                                            backgroundColor: palette.obsidian,
                                                            borderColor: palette.graphite,
                                                            color: palette.ash
                                                        },
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                        lineNumber: 1438,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] mt-2 italic",
                                                        style: {
                                                            color: palette.gravel
                                                        },
                                                        children: "Format: Nama Lengkap_Concept_Kategori Lomba.pdf"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                        lineNumber: 1439,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                                lineNumber: 1436,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                        lineNumber: 1430,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1428,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSubmitting,
                                className: "w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer",
                                style: {
                                    backgroundColor: palette.stucco,
                                    color: palette.onyx,
                                    boxShadow: `0 0 15px ${palette.greige}40`
                                },
                                children: isSubmitting ? 'PROCESSING...' : 'SUBMIT PROTOCOL'
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                                lineNumber: 1445,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                        lineNumber: 1329,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
                lineNumber: 1296,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/pages/CompetitionRegisterClient.tsx",
        lineNumber: 1291,
        columnNumber: 5
    }, this);
}
_s(CompetitionRegisterPage, "j6CWAaE4005ixfY+8Zz+6v1Xhiw=", false, function() {
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

//# sourceMappingURL=frontend_src_917e4f1f._.js.map