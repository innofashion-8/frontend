// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useQuery, useQueryClient } from '@tanstack/react-query'; // 👈 Tambah useQueryClient
// import { userService } from '@/services/user-service'; 
// import { useSession } from 'next-auth/react';
// import toast from 'react-hot-toast';
// import { themeColors } from '@/lib/theme';

// export default function CompleteRegistrationPage() {
//   const router = useRouter();
//   const { data: session } = useSession(); // 👈 updateSession udah dihapus
//   const userType = session?.user?.userType; 
//   const queryClient = useQueryClient(); // 👈 Alat buat me-reset ingatan browser

//   const { data: statusData, isLoading: isLoadingStatus } = useQuery({
//       queryKey: ['profileStatus'],
//       queryFn: userService.checkStatus,
//   });

//   const [phone, setPhone] = useState('');
//   const [lineId, setLineId] = useState('');
//   const [major, setMajor] = useState('');
//   const [documentFile, setDocumentFile] = useState<File | null>(null);
//   const [nrp, setNrp] = useState('');
//   const [batch, setBatch] = useState('');
//   const [institution, setInstitution] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [formErrors, setFormErrors] = useState<any>(null);

//   useEffect(() => {
//     if (statusData?.is_completed) router.push('/dashboard');
//     const data = statusData as any;
//     if (data?.draft_data) {
//       setPhone(data.draft_data.phone || '');
//       setLineId(data.draft_data.line_id || '');
//       setMajor(data.draft_data.major || '');
//       setNrp(data.draft_data.nrp || '');
//       setBatch(data.draft_data.batch || '');
//       setInstitution(data.draft_data.institution || '');
//     }
//   }, [statusData, router]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormErrors(null);

//     if (!documentFile) {
//       return toast.error(`Please upload your ${userType === 'INTERNAL' ? 'KTM' : 'ID Card'}.`);
//     }

//     setIsLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('phone', phone);
//       if (lineId) formData.append('line', lineId);
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

//       await userService.submitProfile(formData as any); 

//       toast.success('Profile completed successfully!');
      
//       // ✅ FIX: Hapus ingatan lama React Query, paksa dia nanya ke Laravel lagi!
//       await queryClient.invalidateQueries({ queryKey: ['profileStatus'] });
      
//       router.push('/dashboard');
//     } catch (error: any) {
//       if (error.isValidationError) {
//         setFormErrors(error.errors);
//         toast.error('Please check your inputs.');
//       } else {
//         toast.error(error.message || 'Failed to submit profile.');
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (isLoadingStatus || statusData?.is_completed || !userType) return null;

//   return (
//     <div 
//       className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
//       style={{ 
//         backgroundColor: themeColors.bg,
//         backgroundImage: "url('/assets/BACKGROUND.png')",
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     >
//       <div className="w-full max-w-xl relative z-10 flex flex-col items-center my-10 backdrop-blur-sm p-8 rounded-3xl border border-white/10" style={{ backgroundColor: themeColors.cardBg }}>
//         <h1 
//           className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-widest text-center" 
//           style={{ color: themeColors.textMain, textShadow: '0 0 25px rgba(255,255,255,0.8)' }}
//         >
//           COMPLETE PROFILE
//         </h1>

//         <form onSubmit={handleSubmit} className="w-full space-y-5">
//           {userType === 'INTERNAL' && (
//             <>
//               <InputPill placeholder="NRP *" value={nrp} onChange={setNrp} error={formErrors?.nrp} />
//               <InputPill placeholder="Batch / Angkatan (e.g. 2024) *" value={batch} onChange={setBatch} error={formErrors?.batch} />
//             </>
//           )}
//           {userType === 'EXTERNAL' && (
//             <InputPill placeholder="Institution / School *" value={institution} onChange={setInstitution} error={formErrors?.institution} />
//           )}

//           <InputPill placeholder="Major / Jurusan *" value={major} onChange={setMajor} error={formErrors?.major} />
//           <InputPill placeholder="Active WhatsApp Number *" value={phone} onChange={setPhone} error={formErrors?.phone} />
//           <InputPill placeholder="Line ID (Optional)" value={lineId} onChange={setLineId} required={false} error={formErrors?.line} />

//           <div className="w-full">
//             <label className="block text-sm font-bold mb-3 uppercase tracking-widest pl-4" style={{ color: themeColors.textMain }}>
//               UPLOAD {userType === 'INTERNAL' ? 'KTM (STUDENT ID)' : 'ID CARD'} *
//             </label>
//             <input 
//               type="file" accept=".jpg,.jpeg,.png,.pdf"
//               onChange={(e) => setDocumentFile(e.target.files?.[0] || null)}
//               className="w-full px-6 py-4 rounded-full text-sm focus:outline-none transition-all font-medium file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-bold file:uppercase file:tracking-widest file:bg-black file:text-white hover:file:bg-gray-800"
//               style={{ backgroundColor: themeColors.inputBg, color: '#1a1a1a' }}
//             />
//             {formErrors?.ktm_path && <p className="text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest">⚠️ {formErrors.ktm_path[0]}</p>}
//             {formErrors?.id_card_path && <p className="text-red-500 text-xs mt-2 pl-4 font-bold tracking-widest">⚠️ {formErrors.id_card_path[0]}</p>}
//           </div>

//           <button 
//             type="submit" disabled={isLoading}
//             className="w-full py-5 rounded-full font-black text-xl hover:-translate-y-1 transition-all mt-8 disabled:opacity-50 uppercase tracking-widest"
//             style={{ backgroundColor: themeColors.textMain, color: themeColors.bg, boxShadow: '0 0 15px rgba(255,255,255,0.3)' }}
//           >
//             {isLoading ? 'SUBMITTING...' : 'SUBMIT & CONTINUE'}
//           </button>
//         </form>
//       </div>
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

import { CompleteProfileForm } from '@/components/registration/CompleteProfileForm';
import { themeColors } from '@/lib/theme';

export default function CompleteRegistrationPage() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      style={{ 
        backgroundColor: themeColors.bg,
        backgroundImage: "url('/assets/BACKGROUND.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Panggil komponen pintar yang udah kita pisah tadi */}
      <CompleteProfileForm />
    </div>
  );
}