"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Navbar from "@/components/opening/navbar";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import imageCompression from "browser-image-compression";
import { authService } from "@/services/auth-service";
import { UserWithRegistrations } from "@/types/user";
import palette from "@/config/palette";

export default function ProfileClient() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [institution, setInstitution] = useState("");
  
  const [major, setMajor] = useState("");
  const [line, setLine] = useState("");
  const [nrp, setNrp] = useState("");
  const [batch, setBatch] = useState("");
  
  const [idCardFile, setIdCardFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompressing, setIsCompressing] = useState(false);
  const [formErrors, setFormErrors] = useState<any>(null);

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["user-profile"],
    queryFn: () => authService.getProfile(),
  });

  const profile = profileData as UserWithRegistrations | undefined;

  const isInternal = profile?.type === "INTERNAL";

  useEffect(() => {
    if (profile) {
      setName(profile.name || "");
      setPhone(profile.phone || "");
      setInstitution(profile.institution || "");
      setMajor(profile.major || "");
      setLine(profile.line || "");
      setNrp(profile.nrp || "");
      setBatch(profile.batch || "");
    }
  }, [profile]);

  // Bersihin memori browser pas ganti gambar atau pindah page
  useEffect(() => {
    return () => {
      if (previewUrl && idCardFile) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl, idCardFile]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setIdCardFile(null);
      setPreviewUrl(null);
      return;
    }

    if (file.type === "application/pdf") {
      setIdCardFile(file);
      setPreviewUrl(null);
      return;
    }

    setIsCompressing(true);

    try {
      const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1280, useWebWorker: true };
      const compressedFile = await imageCompression(file, options);
      setIdCardFile(compressedFile);
      setPreviewUrl(URL.createObjectURL(compressedFile));
    } catch (error) {
      setIdCardFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } finally {
      setIsCompressing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors(null);

    const confirmation = await Swal.fire({
      icon: "question",
      title: "UPDATE PROTOCOL?",
      text: "Are you sure you want to alter your system identity?",
      background: palette.onyx,
      color: palette.stucco,
      showCancelButton: true,
      confirmButtonColor: palette.walnut,
      cancelButtonColor: palette.graphite,
      confirmButtonText: "YES, UPDATE",
      cancelButtonText: "CANCEL",
      customClass: {
        popup: "border border-[#7b787a] rounded-none",
        title: "font-black tracking-[0.2em] uppercase text-xl",
        confirmButton: "font-bold tracking-widest uppercase rounded-none px-6 py-2",
        cancelButton: "font-bold tracking-widest uppercase rounded-none px-6 py-2",
      },
    });

    if (!confirmation.isConfirmed) return;

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      // Data locked tetep dikirim biar lolos validasi backend
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("institution", institution);
      formData.append("major", major);
      
      if (line) formData.append("line", line);
      
      if (isInternal) {
        formData.append("nrp", nrp);
        formData.append("batch", batch);
      }
      
      if (idCardFile) {
        if (isInternal) {
          formData.append("ktm_path", idCardFile);
        } else {
          formData.append("id_card_path", idCardFile);
        }
      }

      const message = await authService.updateProfile(formData);

      toast.success(message || "Identity recalibrated successfully!", {
        style: { background: palette.onyx, color: palette.stucco, border: `1px solid ${palette.graphite}` },
      });

      queryClient.invalidateQueries({ queryKey: ["user-profile"] });
      router.push("/dashboard");

    } catch (error: any) {
      if (error.isValidationError) {
        setFormErrors(error.errors);
        Swal.fire({
          title: "DATA REJECTED",
          text: "Protocol rejected. Please verify the highlighted fields.",
          icon: "error",
          background: palette.onyx,
          color: palette.stucco,
          confirmButtonColor: "#ef4444",
          confirmButtonText: "RECALIBRATE",
          customClass: {
            popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
            title: "font-black tracking-[0.2em]",
          },
        });
      } else {
        Swal.fire({
          title: "SYSTEM FAILURE",
          text: error.message || "Failed to update profile.",
          icon: "error",
          background: palette.onyx,
          color: palette.stucco,
          confirmButtonColor: "#ef4444",
          confirmButtonText: "ACKNOWLEDGE",
          customClass: {
            popup: "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
            title: "font-black tracking-[0.2em]",
          },
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-bold tracking-[0.3em] uppercase animate-pulse" style={{ color: palette.ash }}>
        FETCHING IDENTITY PROTOCOL...
      </div>
    );
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const existingPath = profile?.ktm_path || profile?.id_card_path;
  const existingImageUrl = existingPath ? `${baseUrl}/storage/${existingPath}` : null;
  const displayUrl = previewUrl || existingImageUrl; 
  
  const isNewFilePdf = idCardFile?.type === "application/pdf";
  const isOldFilePdf = !idCardFile && existingPath?.endsWith(".pdf");
  const isPdf = isNewFilePdf || isOldFilePdf;

  return (
    <div className="relative py-12 min-h-screen">
      <Navbar isVisible={true} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 mt-10">
        <button
          onClick={() => router.back()}
          className="mb-12 font-bold text-xs tracking-[0.3em] uppercase cursor-pointer transition-colors flex items-center gap-3 hover:text-white"
          style={{ color: palette.ash }}
        >
          <span className="w-8 h-[1px] block transition-all" style={{ backgroundColor: palette.ash }}></span> 
          ABORT RECALIBRATION
        </button>

        <div
          className="p-10 md:p-14 border backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
            <span className="text-9xl font-black italic" style={{ color: palette.stucco }}>ID</span>
          </div>

          <div className="flex items-center gap-3 mb-6 relative z-10">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: palette.stucco, boxShadow: `0 0 10px ${palette.stucco}` }}
            ></span>
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: palette.ash }}>
              IDENTITY RECALIBRATION
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-widest relative z-10" style={{ color: palette.stucco }}>
            SYSTEM PROFILE
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            
            {/* EMAIL (Read Only) */}
            <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
              <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                SYSTEM EMAIL (LOCKED)
              </label>
              <input
                type="email"
                value={profile?.email || session?.user?.email || ""}
                disabled
                className="w-full px-4 py-3 border text-sm opacity-50 cursor-not-allowed focus:outline-none"
                style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, color: palette.ash }}
              />
            </div>

            {/* NAME (Read Only) */}
            <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
              <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                FULL NAME
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                className="w-full px-4 py-3 border text-sm focus:outline-none"
                style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, color: palette.ash }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* PHONE */}
              <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                  WHATSAPP CONTACT *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border text-sm focus:outline-none"
                  style={{ backgroundColor: palette.onyx, borderColor: formErrors?.phone ? "#ef4444" : palette.graphite, color: palette.stucco }}
                  required
                />
                {formErrors?.phone && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-wider animate-pulse">{formErrors.phone[0]}</p>}
              </div>

              {/* LINE (OPTIONAL) */}
              <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                  LINE ID (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={line}
                  onChange={(e) => setLine(e.target.value)}
                  className="w-full px-4 py-3 border text-sm focus:outline-none"
                  style={{ backgroundColor: palette.onyx, borderColor: formErrors?.line ? "#ef4444" : palette.graphite, color: palette.stucco }}
                />
                {formErrors?.line && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-wider animate-pulse">{formErrors.line[0]}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* INSTITUTION */}
              <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                  INSTITUTION / SCHOOL *
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-4 py-3 border text-sm focus:outline-none"
                  style={{ backgroundColor: palette.onyx, borderColor: formErrors?.institution ? "#ef4444" : palette.graphite, color: palette.stucco }}
                  required
                />
                {formErrors?.institution && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-wider animate-pulse">{formErrors.institution[0]}</p>}
              </div>

              {/* MAJOR */}
              <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                  MAJOR / DEPARTMENT *
                </label>
                <input
                  type="text"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                  className="w-full px-4 py-3 border text-sm focus:outline-none"
                  style={{ backgroundColor: palette.onyx, borderColor: formErrors?.major ? "#ef4444" : palette.graphite, color: palette.stucco }}
                  required
                />
                {formErrors?.major && <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-wider animate-pulse">{formErrors.major[0]}</p>}
              </div>
            </div>

            {/* KHUSUS INTERNAL (NRP & BATCH - Read Only) */}
            {isInternal && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* NRP */}
                <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                  <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                    NRP (LOCKED)
                  </label>
                  <input
                    type="text"
                    value={nrp}
                    disabled
                    className="w-full px-4 py-3 border text-sm opacity-50 cursor-not-allowed focus:outline-none"
                    style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, color: palette.ash }}
                  />
                </div>

                {/* BATCH */}
                <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
                  <label className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                    BATCH / YEAR (LOCKED)
                  </label>
                  <input
                    type="text"
                    value={batch}
                    disabled
                    className="w-full px-4 py-3 border text-sm opacity-50 cursor-not-allowed focus:outline-none"
                    style={{ backgroundColor: palette.onyx, borderColor: palette.graphite, color: palette.ash }}
                  />
                </div>
              </div>
            )}

            {/* ID CARD / KTM UPLOAD & PREVIEW */}
            <div className="border p-6" style={{ borderColor: palette.graphite, backgroundColor: palette.obsidian }}>
              <div className="flex justify-between items-center mb-4">
                 <label className="block text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: palette.greige }}>
                   {isInternal ? "STUDENT CARD / KTM (JPG/PNG/PDF)" : "ID CARD (JPG/PNG/PDF)"}
                 </label>
                 {existingPath && !idCardFile && (
                    <span className="text-[10px] text-green-500 font-bold tracking-widest uppercase">✓ ON FILE</span>
                 )}
                 {idCardFile && (
                    <span className="text-[10px] text-[#B7AC9B] font-bold tracking-widest uppercase">● NEW FILE SELECTED</span>
                 )}
              </div>

              {/* KOTAK PREVIEW */}
              {(displayUrl || isPdf) && (
                <div className="mb-6 w-full max-w-sm h-48 border border-dashed flex items-center justify-center p-2 relative overflow-hidden" style={{ borderColor: palette.graphite, backgroundColor: palette.onyx }}>
                  {isPdf ? (
                    <div className="text-center">
                      <span className="text-4xl block mb-2" style={{ color: palette.greige }}>📄</span>
                      <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: palette.stucco }}>PDF DOCUMENT</p>
                      {!isNewFilePdf && (
                         <a href={displayUrl!} target="_blank" rel="noreferrer" className="text-[9px] mt-2 block hover:underline" style={{ color: palette.ash }}>VIEW CURRENT FILE</a>
                      )}
                    </div>
                  ) : (
                    <img src={displayUrl!} alt="Preview" className="max-w-full max-h-full object-contain" />
                  )}
                </div>
              )}
              
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileUpload}
                className="w-full text-sm border p-4 cursor-pointer file:mr-6 file:py-3 file:px-6 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none"
                style={{ backgroundColor: palette.onyx, borderColor: formErrors?.id_card_path || formErrors?.ktm_path ? "#ef4444" : palette.graphite, color: palette.ash }}
              />
              <p className="text-[9px] mt-3 italic uppercase tracking-wider" style={{ color: palette.gravel }}>
                ⚠️ LEAVE THIS FIELD BLANK IF YOU DO NOT WISH TO CHANGE YOUR CURRENT DOCUMENT.
              </p>
              {(formErrors?.id_card_path || formErrors?.ktm_path) && (
                <p className="text-red-500 text-[10px] mt-2 font-bold uppercase tracking-wider animate-pulse">
                  {formErrors.id_card_path?.[0] || formErrors.ktm_path?.[0]}
                </p>
              )}
            </div>

            {/* 🔥 SUBMIT BUTTON DENGAN LOGIKA COMPRESSING 🔥 */}
            <button
              type="submit"
              disabled={isSubmitting || isCompressing}
              className="w-full py-5 mt-6 font-black text-sm uppercase tracking-[0.2em] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
              style={{ backgroundColor: palette.stucco, color: palette.onyx, boxShadow: `0 0 15px ${palette.greige}40` }}
            >
              {isCompressing ? "COMPRESSING ID CARD..." : isSubmitting ? "PROCESSING..." : "UPDATE PROTOCOL"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}