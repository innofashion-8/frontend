
// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { competitionService } from '@/services/competition-service';
// import toast from 'react-hot-toast';
// import Swal from 'sweetalert2';
// import imageCompression from 'browser-image-compression';
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
//   const queryClient = useQueryClient();
//   const key = params?.key as string;

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

//   // 🔥 DETEKSI MURNI DARI BACKEND 🔥
//   const isGroup = competition?.participant_type === 'GROUP'; 
//   const minMembers = competition?.min_members || (isGroup ? 2 : 1);
//   const maxMembers = competition?.max_members || (isGroup ? 3 : 1);

//   // State Form
//   const [members, setMembers] = useState<Member[]>([{ name: '', email: '', phone: '', id_card: null }]);
//   const [groupName, setGroupName] = useState('');
//   const [region, setRegion] = useState<'NATIONAL' | 'INTERNATIONAL'>('NATIONAL');
  
//   // Karena Fashion Sketch sekarang 1 lomba, peserta milih category DI SINI
//   const [category, setCategory] = useState<'INTERMEDIATE' | 'ADVANCED' | ''>(''); 

//   const [submissionFile, setSubmissionFile] = useState<File | null>(null); 
//   const [conceptFile, setConceptFile] = useState<File | null>(null); 
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formErrors, setFormErrors] = useState<any>(null);

//   const statusStr = regStatus?.status?.toUpperCase() || '';
//   const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
//   const isUnregistered = statusStr === 'UNREGISTERED'; 
//   const isDraft = statusStr === 'DRAFT';
//   const isAlreadyRegistered = regStatus && regStatus.status && !isRejected && !isUnregistered && !isDraft;

//   // LOAD DRAFT & AUTO FILL
//   useEffect(() => {
//     if (regStatus && competition) {
//       const profile = regStatus.user_profile;
//       let initialMembers: Member[] = [{ name: profile?.name || '', email: profile?.email || '', phone: profile?.phone || '', id_card: null }];

//       const draft = regStatus.draft_data;
//       if (draft && Object.keys(draft).length > 0) {
//         if (draft.region) setRegion(draft.region);
//         if (draft.group_name) setGroupName(draft.group_name);
//         if (draft.category) setCategory(draft.category);
        
//         if (draft.members && Array.isArray(draft.members)) {
//            const draftMembers = draft.members.map((m: any) => ({ name: m.name || '', email: m.email || '', phone: m.phone || '', id_card: null }));
//            initialMembers = [...initialMembers, ...draftMembers];
//         }
//       }

//       while (initialMembers.length < minMembers) {
//          initialMembers.push({ name: '', email: '', phone: '', id_card: null });
//       }
//       setMembers(initialMembers);
//     }
//   }, [regStatus, competition, minMembers]);

//   // AUTO-SAVE DRAFT
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
//   }, [members, groupName, region, category, isGroup, key, isAlreadyRegistered, isSubmitting, competition, isLoading]); 

//   // ALERT GATES
//   useEffect(() => {
//     // ALERT PENOLAKAN DARI BACKEND KALAU MAHASISWA DAFTAR RESTYLING (UDAH BENER INI)
//     if (regStatus && regStatus.is_eligible === false) {
//       Swal.fire({ icon: 'error', title: 'ACCESS RESTRICTED', text: regStatus.ineligibility_reason || 'You are not eligible for this competition.', background: palette.onyx, color: palette.stucco, confirmButtonColor: '#ef4444', allowOutsideClick: false, customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em] uppercase text-xl', confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3' } }).then(() => router.push('/dashboard/competition'));
//     }
//   }, [regStatus, router]);

//   useEffect(() => {
//     if (isAlreadyRegistered) {
//       Swal.fire({ icon: 'info', title: 'ALREADY REGISTERED', text: 'You have already submitted a registration protocol for this battlefield. Check your dashboard for updates.', background: palette.onyx, color: palette.stucco, confirmButtonColor: palette.walnut, allowOutsideClick: false, customClass: { popup: 'border border-[#7b787a] rounded-none', title: 'font-black tracking-[0.2em] uppercase text-xl', confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3' } }).then(() => router.push('/dashboard'));
//     }
//   }, [isAlreadyRegistered, router]);

//   // HANDLERS MEMBER
//   const handleAddMember = () => { if (members.length < maxMembers) setMembers([...members, { name: '', email: '', phone: '', id_card: null }]); };
//   const handleRemoveMember = (index: number) => { if (members.length > minMembers && index !== 0) setMembers(members.filter((_, i) => i !== index)); };
//   const handleMemberChange = (index: number, field: keyof Member, value: any) => { const newMembers = [...members]; newMembers[index] = { ...newMembers[index], [field]: value }; setMembers(newMembers); };

//   const handleFileUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     if (file.type === 'application/pdf') return handleMemberChange(index, 'id_card', file);
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

//     if (isGroup && members.length < 2) return toast.error('A group must have at least 2 members.', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
//     if (isGroup && !groupName) return toast.error('Group name is required.', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
    
//     if (!isGroup && !category) return toast.error('Category is required.', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
//     if (!isGroup && !submissionFile) return toast.error('Please upload your sketch artwork (PDF).', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
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
      
//       // 1. Submit Registration
//       await competitionService.submitFinal(key, membersToSubmit, groupName, region, isGroup ? undefined : category);
      
//       // 2. Upload Karya (KHUSUS SKETCH)
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
          
//           <div className="flex items-center gap-3 mb-6 relative z-10">
//               <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
//               <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>DATA ENTRY PROTOCOL</p>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest relative z-10" style={{ color: palette.stucco }}>
//              {competition.name || 'UNKNOWN BATTLEFIELD'}
//           </h1>

//           <div className="border p-6 mb-10 relative z-10 flex flex-col md:flex-row justify-between items-start gap-4" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite }}>
//             <div>
//               <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>TEAM SIZE / TIER</p>
//               <span className="text-xl md:text-2xl font-black tracking-widest" style={{ color: palette.stucco }}>
//                 {isGroup ? `GROUP (${minMembers}-${maxMembers} MEMBERS)` : `INDIVIDUAL (${category || 'SELECT TIER BELOW'})`}
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

//             {/* 🔥 MUNCULKAN TOMBOL PILIH CATEGORY KALAU LOMBA INDIVIDU (SKETCH) 🔥 */}
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

//             {/* 🔥 UPLOAD KARYA & KONSEP (KHUSUS FASHION SKETCH) 🔥 */}
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

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { competitionService } from '@/services/competition-service';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import imageCompression from 'browser-image-compression';
import { fetchClient } from '@/lib/fetch-client';

const palette = {
  onyx: '#1C1C1B', obsidian: '#1a1a1a', walnut: '#6A5D52', greige: '#B7AC9B',
  ash: '#979086', stucco: '#E2E2DE', graphite: '#494947', gravel: '#7b787a'
};

interface Member {
  name: string; email: string; phone: string; id_card: File | null;
}

export default function CompetitionRegisterPage() {
  const params = useParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const key = params?.key as string;

  const { data: competition, isLoading } = useQuery({
    queryKey: ['competition', key],
    queryFn: () => competitionService.getCompetition(key),
    enabled: !!key, 
  });

  const { data: regStatus, isLoading: isStatusLoading } = useQuery({
    queryKey: ['competition-status', key], 
    queryFn: async () => {
      try { return await competitionService.checkStatusRegistrations(key); } 
      catch (error: any) { return null; }
    },
    enabled: !!key, retry: false, staleTime: 0, gcTime: 0     
  });

  // DETEKSI MURNI DARI BACKEND
  const isGroup = competition?.participant_type === 'GROUP'; 
  const minMembers = competition?.min_members || (isGroup ? 2 : 1);
  const maxMembers = competition?.max_members || (isGroup ? 3 : 1);

  const [members, setMembers] = useState<Member[]>([{ name: '', email: '', phone: '', id_card: null }]);
  const [groupName, setGroupName] = useState('');
  const [region, setRegion] = useState<'NATIONAL' | 'INTERNATIONAL'>('NATIONAL');
  const [category, setCategory] = useState<'INTERMEDIATE' | 'ADVANCED' | ''>(''); 

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<any>(null);

  const statusStr = regStatus?.status?.toUpperCase() || '';
  const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
  const isUnregistered = statusStr === 'UNREGISTERED'; 
  const isDraft = statusStr === 'DRAFT';
  const isAlreadyRegistered = regStatus && regStatus.status && !isRejected && !isUnregistered && !isDraft;

  // LOAD DRAFT & AUTO FILL
  useEffect(() => {
    if (regStatus && competition) {
      const profile = regStatus.user_profile;
      let initialMembers: Member[] = [{ name: profile?.name || '', email: profile?.email || '', phone: profile?.phone || '', id_card: null }];

      const draft = regStatus.draft_data;
      if (draft && Object.keys(draft).length > 0) {
        if (draft.region) setRegion(draft.region);
        if (draft.group_name) setGroupName(draft.group_name);
        if (draft.category) setCategory(draft.category);
        
        if (draft.members && Array.isArray(draft.members)) {
           const draftMembers = draft.members.map((m: any) => ({ name: m.name || '', email: m.email || '', phone: m.phone || '', id_card: null }));
           initialMembers = [...initialMembers, ...draftMembers];
        }
      }

      while (initialMembers.length < minMembers) {
         initialMembers.push({ name: '', email: '', phone: '', id_card: null });
      }
      setMembers(initialMembers);
    }
  }, [regStatus, competition, minMembers]);

  // AUTO-SAVE DRAFT
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) { isInitialMount.current = false; return; }
    if (isAlreadyRegistered || isSubmitting || !competition || isLoading) return;

    const timer = setTimeout(async () => {
       const formData = new FormData();
       formData.append('draft_data[region]', region);
       if (groupName) formData.append('draft_data[group_name]', groupName);
       if (category) formData.append('draft_data[category]', category);

       const membersToDraft = isGroup ? members.slice(1) : [];
       membersToDraft.forEach((m, idx) => {
          if (m.name) formData.append(`draft_data[members][${idx}][name]`, m.name);
          if (m.email) formData.append(`draft_data[members][${idx}][email]`, m.email);
          if (m.phone) formData.append(`draft_data[members][${idx}][phone]`, m.phone);
          if (m.id_card instanceof File) formData.append(`draft_data[members][${idx}][id_card]`, m.id_card);
       });

       try { await competitionService.saveDraft(key, formData); } 
       catch(e) {}
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [members, groupName, region, category, isGroup, key, isAlreadyRegistered, isSubmitting, competition, isLoading]); 

  // ALERT GATES
  useEffect(() => {
    if (regStatus && regStatus.is_eligible === false) {
      Swal.fire({ icon: 'error', title: 'ACCESS RESTRICTED', text: regStatus.ineligibility_reason || 'You are not eligible for this competition.', background: palette.onyx, color: palette.stucco, confirmButtonColor: '#ef4444', allowOutsideClick: false, customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em] uppercase text-xl', confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3' } }).then(() => router.push('/dashboard/competition'));
    }
  }, [regStatus, router]);

  useEffect(() => {
    if (isAlreadyRegistered) {
      Swal.fire({ icon: 'info', title: 'ALREADY REGISTERED', text: 'You have already submitted a registration protocol for this battlefield. Check your dashboard for updates.', background: palette.onyx, color: palette.stucco, confirmButtonColor: palette.walnut, allowOutsideClick: false, customClass: { popup: 'border border-[#7b787a] rounded-none', title: 'font-black tracking-[0.2em] uppercase text-xl', confirmButton: 'font-bold tracking-widest uppercase rounded-none px-8 py-3' } }).then(() => router.push('/dashboard'));
    }
  }, [isAlreadyRegistered, router]);

  // HANDLERS MEMBER
  const handleAddMember = () => { if (members.length < maxMembers) setMembers([...members, { name: '', email: '', phone: '', id_card: null }]); };
  const handleRemoveMember = (index: number) => { if (members.length > minMembers && index !== 0) setMembers(members.filter((_, i) => i !== index)); };
  const handleMemberChange = (index: number, field: keyof Member, value: any) => { const newMembers = [...members]; newMembers[index] = { ...newMembers[index], [field]: value }; setMembers(newMembers); };

  const handleFileUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type === 'application/pdf') return handleMemberChange(index, 'id_card', file);
    try {
      const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1280, useWebWorker: true };
      const compressedFile = await imageCompression(file, options);
      handleMemberChange(index, 'id_card', compressedFile);
    } catch (error) { handleMemberChange(index, 'id_card', file); }
  };

  const getFieldError = (field: string) => {
    if (!formErrors || !formErrors[field]) return null;
    return <p className="text-red-500 text-[10px] font-bold mt-2 uppercase tracking-wider animate-pulse">{formErrors[field][0]}</p>;
  };
  const getMemberError = (frontendIndex: number, field: string) => {
    if (frontendIndex === 0) return null; 
    const backendIndex = frontendIndex - 1; 
    return getFieldError(`members.${backendIndex}.${field}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    if (isGroup && members.length < 2) return toast.error('A group must have at least 2 members.', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
    if (isGroup && !groupName) return toast.error('Group name is required.', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
    
    if (!isGroup && !category) return toast.error('Category is required.', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });

    const confirmation = await Swal.fire({
      icon: 'warning', title: 'INITIATE PROTOCOL?', text: 'Are you sure you want to submit? Data cannot be altered later.',
      background: palette.onyx, color: palette.stucco, showCancelButton: true, confirmButtonColor: palette.walnut, cancelButtonColor: palette.graphite, confirmButtonText: 'SECURE PASS', cancelButtonText: 'ABORT',
      customClass: { popup: 'border border-[#7b787a] rounded-none', title: 'font-black tracking-[0.2em] uppercase text-xl', confirmButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2', cancelButton: 'font-bold tracking-widest uppercase rounded-none px-6 py-2' }
    });

    if (!confirmation.isConfirmed) return;

    setIsSubmitting(true);
    try {
      const membersToSubmit = isGroup ? members.slice(1) : [];
      
      // 1. Submit Registration Murni Tanpa PDF Karya
      await competitionService.submitFinal(key, membersToSubmit, groupName, region, isGroup ? undefined : category);

      toast.success('Registration protocol submitted successfully!', { style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` } });
      queryClient.invalidateQueries({ queryKey: ['competition', key] });
      router.push('/dashboard/competition'); 
    } catch (error: any) {
      if (error.isValidationError) {
        const validationErrors = error.errors;
        if (validationErrors.status) {
          Swal.fire({ title: 'ACCESS RESTRICTED', text: validationErrors.status[0], icon: 'warning', background: palette.onyx, color: palette.stucco, confirmButtonColor: palette.walnut, confirmButtonText: 'RETURN TO TERMINAL', customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em]' } }).then(() => router.push('/dashboard'));
        } else {
          setFormErrors(validationErrors); 
          Swal.fire({ title: 'DATA REJECTED', text: 'Data entry protocol rejected. Please verify the highlighted fields.', icon: 'error', background: palette.onyx, color: palette.stucco, confirmButtonColor: '#ef4444', confirmButtonText: 'RECALIBRATE', customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em]' } });
        }
      } else {
        Swal.fire({ title: 'SYSTEM FAILURE', text: error.message || 'Registration protocol failed to execute.', icon: 'error', background: palette.onyx, color: palette.stucco, confirmButtonColor: '#ef4444', confirmButtonText: 'ACKNOWLEDGE', customClass: { popup: 'border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]', title: 'font-black tracking-[0.2em]' } });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || isStatusLoading) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse bg-[#0a0a0a]" style={{ color: palette.ash }}>ESTABLISHING CONNECTION...</div>;
  if (isAlreadyRegistered) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>VERIFYING PROTOCOL...</div>;
  if (regStatus?.is_eligible === false) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>ACCESS RESTRICTED...</div>;
  if (!competition) return <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase bg-[#0a0a0a]" style={{ color: palette.ash }}>SYSTEM NOTICE: COMPETITION NOT FOUND.</div>;

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-4">
        <button onClick={() => router.back()} className="mb-12 cursor-pointer font-bold text-xs tracking-[0.3em] uppercase transition-colors flex items-center gap-3 hover:text-white" style={{ color: palette.ash }}>
          <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> ABORT REGISTRATION
        </button>

        <div className="p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}>
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}></span>
              <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>DATA ENTRY PROTOCOL</p>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest relative z-10" style={{ color: palette.stucco }}>
             {competition.name || 'UNKNOWN BATTLEFIELD'}
          </h1>

          <div className="border p-6 mb-10 relative z-10 flex flex-col md:flex-row justify-between items-start gap-4" style={{ backgroundColor: palette.obsidian, borderColor: palette.graphite }}>
            <div>
              <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>TEAM SIZE / TIER</p>
              <span className="text-xl md:text-2xl font-black tracking-widest" style={{ color: palette.stucco }}>
                {isGroup ? `GROUP (${minMembers}-${maxMembers} MEMBERS)` : `INDIVIDUAL (${category || 'SELECT TIER BELOW'})`}
              </span>
            </div>
            <div className="text-right">
                <p className="text-[10px] tracking-[0.2em] mb-2 uppercase" style={{ color: palette.ash }}>CLEARANCE FEE</p>
                <div className="text-xl md:text-2xl font-black uppercase tracking-widest" style={{ color: palette.greige }}>NO CHARGE</div>
            </div>
          </div>

          {isRejected && (
            <div className="border p-6 mb-8 relative z-10" style={{ borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)' }}>
              <h3 className="text-red-500 font-bold tracking-[0.2em] uppercase mb-2 text-sm">⚠️ PREVIOUS SUBMISSION REJECTED</h3>
              <p className="text-red-200 text-sm mb-1">Your previous registration was rejected by the Administrator.</p>
              {regStatus?.rejection_reason && <p className="text-red-200 text-sm font-bold mb-3">Reason: {regStatus.rejection_reason}</p>}
              <p className="text-white text-[10px] tracking-[0.2em] uppercase font-bold">Please resubmit with correct information.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            {isGroup && (
              <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>GROUP INFORMATION</h3>
                <div>
                  <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>GROUP NAME *</label>
                  <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} className="w-full px-4 py-3 border text-sm focus:outline-none" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.['group_name'] ? '#ef4444' : palette.graphite, color: palette.stucco }} required />
                  {getFieldError('group_name')}
                </div>
              </div>
            )}

            <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
              <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>REGION *</h3>
              <div className="flex gap-4">
                <button type="button" onClick={() => setRegion('NATIONAL')} className="flex-1 py-3 border font-bold text-sm uppercase tracking-wider transition-all cursor-pointer" style={{ backgroundColor: region === 'NATIONAL' ? palette.stucco : 'transparent', color: region === 'NATIONAL' ? palette.onyx : palette.stucco, borderColor: palette.graphite }}>NATIONAL</button>
                <button type="button" onClick={() => setRegion('INTERNATIONAL')} className="flex-1 py-3 border font-bold text-sm uppercase tracking-wider transition-all cursor-pointer" style={{ backgroundColor: region === 'INTERNATIONAL' ? palette.stucco : 'transparent', color: region === 'INTERNATIONAL' ? palette.onyx : palette.stucco, borderColor: palette.graphite }}>INTERNATIONAL (ABROAD)</button>
              </div>
              {getFieldError('region')}
            </div>

            {!isGroup && (
              <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                <h3 className="text-sm font-black uppercase tracking-wider mb-4" style={{ color: palette.greige }}>CATEGORY *</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="button" disabled={regStatus?.user_profile?.type === 'INTERNAL'} onClick={() => setCategory('INTERMEDIATE')} className={`flex-1 py-3 px-2 border font-bold text-xs uppercase tracking-wider transition-all ${regStatus?.user_profile?.type === 'INTERNAL' ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`} style={{ backgroundColor: category === 'INTERMEDIATE' ? palette.stucco : 'transparent', color: category === 'INTERMEDIATE' ? palette.onyx : palette.stucco, borderColor: palette.graphite }}>
                    INTERMEDIATE (SMP/SMA) {regStatus?.user_profile?.type === 'INTERNAL' && <span className="block text-[8px] text-red-500 mt-1 tracking-widest">UNAVAILABLE FOR UNIV.</span>}
                  </button>
                  <button type="button" onClick={() => setCategory('ADVANCED')} className="flex-1 py-3 px-2 border font-bold text-xs uppercase tracking-wider transition-all cursor-pointer" style={{ backgroundColor: category === 'ADVANCED' ? palette.stucco : 'transparent', color: category === 'ADVANCED' ? palette.onyx : palette.stucco, borderColor: palette.graphite }}>ADVANCED (MAHASISWA/UMUM)</button>
                </div>
                {getFieldError('category')}
              </div>
            )}

            {!isGroup ? (
              <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <p className="text-xs font-bold uppercase tracking-wider" style={{ color: palette.greige }}>NOTE:</p>
                <p className="text-xs mt-2" style={{ color: palette.ash }}>For individual competition, your profile data will be used automatically.</p>
              </div>
            ) : (
              <>
                <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: palette.greige }}>NOTE:</p>
                  <p className="text-xs mt-2" style={{ color: palette.ash }}>Leader (you) will be registered automatically. Add other team members below.</p>
                  {getFieldError('members')}
                </div>

                {members.map((member, index) => (
                  <div key={index} className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-black uppercase tracking-wider" style={{ color: palette.greige }}>
                        {index === 0 ? 'LEADER (YOU)' : `MEMBER ${index + 1}`}
                      </h3>
                      {index >= minMembers && (
                        <button type="button" onClick={() => handleRemoveMember(index)} className="text-red-500 text-xs font-bold uppercase tracking-wider hover:text-red-400 cursor-pointer">REMOVE</button>
                      )}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>NAME *</label>
                        <input type="text" value={member.name} onChange={(e) => handleMemberChange(index, 'name', e.target.value)} className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.name`] ? '#ef4444' : palette.graphite, color: palette.stucco }} disabled={index === 0 && !!regStatus?.user_profile?.name} required />
                        {getMemberError(index, 'name')}
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>EMAIL *</label>
                        <input type="email" value={member.email} onChange={(e) => handleMemberChange(index, 'email', e.target.value)} className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.email`] ? '#ef4444' : palette.graphite, color: palette.stucco }} disabled={index === 0 && !!regStatus?.user_profile?.email} required />
                        {getMemberError(index, 'email')}
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>Whatsapp Contact *</label>
                        <input type="tel" value={member.phone} onChange={(e) => handleMemberChange(index, 'phone', e.target.value)} className="w-full px-4 py-3 border text-sm focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.phone`] ? '#ef4444' : palette.graphite, color: palette.stucco }} disabled={index === 0 && !!regStatus?.user_profile?.phone} required />
                        {getMemberError(index, 'phone')}
                      </div>

                      {index === 0 ? (
                        regStatus?.user_profile?.ktm_path || regStatus?.user_profile?.id_card_path ? (
                          <div>
                            <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (FROM PROFILE)</label>
                            <div className="border p-4" style={{ borderColor: palette.graphite, backgroundColor: palette.onyx }}>
                              <span className="text-xs font-bold text-green-500 uppercase tracking-widest">✓ VERIFIED BY SYSTEM</span>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (JPG/PNG/PDF) *</label>
                            <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(index, e)} className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none" style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, color: palette.ash }} required />
                          </div>
                        )
                      ) : (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                             <label className="block text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: palette.greige }}>ID CARD (JPG/PNG/PDF) *</label>
                             {regStatus?.draft_data?.members?.[index - 1]?.id_card && !members[index].id_card && (
                                <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">✓ Saved in Draft</span>
                             )}
                          </div>
                          <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileUpload(index, e)} className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none" style={{ backgroundColor: palette.onyx, borderColor: formErrors?.[`members.${index - 1}.id_card`] ? '#ef4444' : palette.graphite, color: palette.ash }} required={!regStatus?.draft_data?.members?.[index - 1]?.id_card} />
                          {getMemberError(index, 'id_card')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {members.length < maxMembers && (
                  <button type="button" onClick={handleAddMember} className="w-full py-4 border font-bold text-sm uppercase tracking-[0.2em] transition-all hover:bg-opacity-10 cursor-pointer" style={{ borderColor: palette.graphite, color: palette.greige }}>+ ADD MEMBER</button>
                )}
              </>
            )}

            <button type="submit" disabled={isSubmitting} className="w-full py-5 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer" style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}>
              {isSubmitting ? 'PROCESSING...' : 'SUBMIT PROTOCOL'}
            </button>
          </form>
        </div>
      </div>
  );
}