"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchClient } from "@/lib/fetch-client";
import Navbar from "@/components/opening/navbar";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import palette from "@/config/palette";

export default function DashboardClient() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: session, status } = useSession();

  // STATE UNTUK MODAL UPLOAD
  const [uploadCompKey, setUploadCompKey] = useState<string | null>(null);
  const [artworkFile, setArtworkFile] = useState<File | null>(null);
  const [conceptFile, setConceptFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const { data: registrations, isLoading: isRegLoading } = useQuery({
    queryKey: ["my-registrations"],
    queryFn: async () => {
      const res = await fetchClient<any>("/api/registrations", {
        method: "GET",
      });
      return res.data;
    },
    enabled: status === "authenticated",
  });

  const handleLogout = async () => await signOut({ callbackUrl: "/login" });

  if (status === "loading")
    return (
      <div className="min-h-screen flex items-center justify-center bg-transparent">
        <div
          className="text-xs font-bold tracking-[0.4em] uppercase animate-pulse"
          style={{ color: palette.ash }}
        >
          DECRYPTING IDENTITY...
        </div>
      </div>
    );

  const getStatusColor = (statusReg: string) => {
    const s = (statusReg || "").toUpperCase();
    if (s.includes("REJECT") || s.includes("TOLAK")) return "#ef4444";
    if (s.includes("VERIFI") || s.includes("ACCEPT") || s.includes("APPROV"))
      return "#22c55e";
    if (s.includes("PENDING") || s.includes("WAIT")) return palette.greige;
    return palette.ash;
  };

  const getWhatsAppLink = (reg: any) => {
    if (reg?.event) return reg.event.wa_link; 
    
    if (reg?.competition) {
      const userRegion = (reg.region || reg.draft_data?.region || 'NATIONAL').toUpperCase();
      return userRegion === "NATIONAL" ? reg.competition.wa_link_national : reg.competition.wa_link_international;
    }
    return null;
  };

  const handleUploadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!artworkFile || !conceptFile) {
      toast.error("Both Artwork and Concept files are required!", {
        style: {
          background: palette.onyx,
          color: palette.stucco,
          border: `1px solid ${palette.graphite}`,
        },
      });
      return;
    }

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("artwork", artworkFile);
      formData.append("concept", conceptFile);

      await fetchClient(`/api/competitions/${uploadCompKey}/submission`, {
        method: "POST",
        body: formData,
      });

      toast.success("Artwork successfully uploaded!", {
        style: {
          background: palette.onyx,
          color: palette.stucco,
          border: `1px solid ${palette.graphite}`,
        },
      });

      setUploadCompKey(null);
      setArtworkFile(null);
      setConceptFile(null);

      queryClient.invalidateQueries({ queryKey: ["my-registrations"] });
    } catch (error: any) {
      Swal.fire({
        title: "UPLOAD FAILED",
        text: error.message || "System failed to process your artwork.",
        icon: "error",
        background: palette.onyx,
        color: palette.stucco,
        confirmButtonColor: "#ef4444",
        customClass: {
          popup:
            "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
          title: "font-black tracking-[0.2em]",
        },
      });
        queryClient.invalidateQueries({ queryKey: ['my-registrations'] });
    } finally {
      setIsUploading(false);
    }
  };

  const handleViewSubmission = (
    artworkUrl: string | null,
    conceptUrl: string | null,
  ) => {
    if (!artworkUrl && !conceptUrl) {
      Swal.fire({
        title: "PROCESSING",
        text: "Your artwork is being processed by the server. Please check again later.",
        icon: "info",
        background: palette.onyx,
        color: palette.stucco,
        confirmButtonColor: palette.walnut,
        customClass: {
          popup:
            "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
          title: "font-black tracking-[0.2em]",
        },
      });
      return;
    }

    Swal.fire({
      title: "YOUR SUBMISSION",
      html: `
        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
          ${artworkUrl ? `<a href="${artworkUrl}" target="_blank" style="padding: 15px; border: 1px solid ${palette.greige}; color: ${palette.greige}; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; text-decoration: none;" onMouseOver="this.style.backgroundColor='${palette.greige}'; this.style.color='${palette.onyx}'" onMouseOut="this.style.backgroundColor='transparent'; this.style.color='${palette.greige}'">VIEW ARTWORK (PDF)</a>` : ""}
          ${conceptUrl ? `<a href="${conceptUrl}" target="_blank" style="padding: 15px; border: 1px solid ${palette.greige}; color: ${palette.greige}; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; text-decoration: none;" onMouseOver="this.style.backgroundColor='${palette.greige}'; this.style.color='${palette.onyx}'" onMouseOut="this.style.backgroundColor='transparent'; this.style.color='${palette.greige}'">VIEW CONCEPT (PDF)</a>` : ""}
        </div>
      `,
      background: palette.onyx,
      color: palette.stucco,
      confirmButtonText: "CLOSE",
      confirmButtonColor: palette.graphite,
      customClass: {
        popup:
          "border-2 border-[#494947] rounded-none shadow-[8px_8px_0px_#1a1a1a]",
        title: "font-black tracking-[0.2em] uppercase",
        confirmButton:
          "font-bold tracking-widest uppercase rounded-none px-6 py-2",
      },
    });
  };

  let allRegistrations: any[] = [];
  if (registrations) {
    allRegistrations = Array.isArray(registrations)
      ? registrations
      : [
          ...(registrations.competitions || []),
          ...(registrations.events || []),
        ];
  }

  return (
    <>
      <Navbar isVisible={true} />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-10">
        <div
          className="mb-12 p-10 md:p-16 border bg-black/40 backdrop-blur-md relative overflow-hidden transition-all duration-700 hover:shadow-[0_20px_40px_-15px_rgba(106,93,82,0.3)]"
          style={{ borderColor: palette.graphite }}
        >
          <div
            className="absolute top-0 left-0 w-2 h-full"
            style={{ backgroundColor: palette.greige }}
          ></div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: palette.stucco,
                  boxShadow: `0 0 10px ${palette.stucco}`,
                }}
              ></span>
              <p
                className="text-[10px] font-bold tracking-[0.4em] uppercase"
                style={{ color: palette.ash }}
              >
                MAIN DASHBOARD
              </p>
            </div>
            <div className="flex items-center gap-3">
              {/* TOMBOL EDIT PROFILE */}
              <button
                onClick={() => router.push("/dashboard/profile")}
                className="group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm cursor-pointer hover:bg-white/10"
                style={{
                  borderColor: palette.graphite,
                  backgroundColor: "rgba(28,28,27,0.5)",
                }}
              >
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-white">
                  EDIT IDENTITY
                </span>
              </button>

              <button
                onClick={handleLogout}
                className="group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm cursor-pointer"
                style={{
                  borderColor: palette.graphite,
                  backgroundColor: "rgba(28,28,27,0.5)",
                }}
              >
                <span className="w-1 h-1 rounded-full bg-red-500 opacity-50 group-hover:opacity-100 transition-opacity"></span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-red-400">
                  LOG OUT
                </span>
              </button>
            </div>
          </div>
          <h1
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest"
            style={{ color: palette.stucco }}
          >
            WELCOME,{" "}
            <span style={{ color: palette.greige }}>
              {session?.user?.name?.split(" ")[0] || "UNKNOWN"}
            </span>
          </h1>
          <p
            className="text-lg md:text-xl font-medium tracking-widest max-w-2xl leading-relaxed"
            style={{ color: palette.ash }}
          >
            Choose the Innofashion Show 8 registration path you want to take or
            monitor your registration status.
          </p>
        </div>

        <div
          className="mb-12 border p-8 bg-black/40 backdrop-blur-md"
          style={{ borderColor: palette.graphite }}
        >
          <div
            className="flex items-center gap-3 mb-8 pb-4 border-b"
            style={{ borderColor: palette.graphite }}
          >
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: palette.greige }}
            >
              [ REGISTRATION PROTOCOL STATUS ]
            </p>
          </div>
          {isRegLoading ? (
            <div
              className="text-xs font-bold tracking-[0.3em] uppercase animate-pulse"
              style={{ color: palette.ash }}
            >
              SYNCING WITH DATABASE...
            </div>
          ) : allRegistrations.length === 0 ? (
            <div
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: palette.ash }}
            >
              NO ACTIVE REGISTRATIONS FOUND.
            </div>
          ) : (
            <div className="space-y-4">
              {allRegistrations.map((reg, idx) => {
                const itemName =
                  reg?.competition?.name ||
                  reg?.event?.title ||
                  "UNKNOWN PROTOCOL";
                const itemType = reg?.competition ? "COMPETITION" : "EVENT";
                const statusStr = (reg?.status || "PENDING").toUpperCase();
                const isRejected =
                  statusStr.includes("REJECT") || statusStr.includes("TOLAK");
                const isAccepted =
                  statusStr.includes("VERIFI") ||
                  statusStr.includes("ACCEPT") ||
                  statusStr.includes("APPROV");

                const finalWaLink = getWhatsAppLink(reg);

                const isComp = !!reg?.competition;
                const compKey = reg?.competition?.slug || reg?.competition?.id;
                const currentCompName = (
                  reg?.competition?.name || ""
                ).toUpperCase();
                const isRestylingComp =
                  isComp &&
                  (currentCompName.includes("RESTYLING") ||
                    currentCompName.includes("STYLING"));
                const isSketchComp =
                  isComp && currentCompName.includes("SKETCH");
                const isEvent = !!reg?.event;

                const submissionsArray = reg?.submissions || [];
                const hasSubmitted = submissionsArray.length > 0;

                const artworkObj = submissionsArray.find(
                  (s: any) => s.file_type === "ARTWORK",
                );
                const conceptObj = submissionsArray.find(
                  (s: any) => s.file_type === "CONCEPT",
                );

                const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
                const artworkUrl = artworkObj?.file_path
                  ? `${baseUrl}/storage/${artworkObj.file_path}`
                  : null;
                const conceptUrl = conceptObj?.file_path
                  ? `${baseUrl}/storage/${conceptObj.file_path}`
                  : null;

                return (
                  <div
                    key={idx}
                    className="flex flex-col p-4 border transition-colors hover:bg-white/5"
                    style={{
                      borderColor: palette.graphite,
                      backgroundColor: palette.obsidian,
                    }}
                  >
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full">
                      <div className="mb-4 lg:mb-0">
                        <div
                          className="text-[9px] tracking-[0.2em] mb-1 uppercase"
                          style={{ color: palette.ash }}
                        >
                          {itemType}
                        </div>
                        <div
                          className="font-bold text-lg tracking-widest uppercase"
                          style={{ color: palette.stucco }}
                        >
                          {itemName}
                        </div>
                        {(reg?.region || reg?.category) && (
                          <div
                            className="text-[10px] font-bold tracking-widest uppercase mt-2"
                            style={{ color: palette.greige }}
                          >
                            {reg?.region} {reg?.category && `| ${reg.category}`}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        
                        {/* 🔥 TOMBOL UPLOAD / VIEW (KHUSUS SKETCH) 🔥 */}
                        {isAccepted && isSketchComp && !hasSubmitted && (
                          <button
                            onClick={() => setUploadCompKey(compKey)}
                            className="px-4 py-2 border font-bold text-[10px] tracking-widest uppercase text-[#E2E2DE] hover:bg-white hover:text-black transition-all cursor-pointer"
                            style={{
                              borderColor: palette.stucco,
                            }}
                          >
                            UPLOAD SUBMISSION
                          </button>
                        )}

                        {isAccepted && isSketchComp && hasSubmitted && (
                          <button
                            onClick={() =>
                              handleViewSubmission(artworkUrl, conceptUrl)
                            }
                            className="px-4 py-2 border font-bold text-[10px] tracking-widest uppercase bg-white/10 hover:bg-white hover:text-black transition-all cursor-pointer"
                            style={{
                              borderColor: palette.stucco,
                              color: palette.stucco,
                            }}
                          >
                            VIEW SUBMISSION
                          </button>
                        )}
                        {/* 🔥 TOMBOL WHATSAPP (SEKARANG MUNCUL UNTUK SEMUA YG VERIFIED: SKETCH, RESTYLING, EVENT) 🔥 */}
                        {isAccepted && finalWaLink && (
                          <a 
                            href={finalWaLink} target="_blank" rel="noopener noreferrer"
                            className="px-4 py-2 border font-bold text-[10px] tracking-widest uppercase bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all cursor-pointer"
                            style={{ borderColor: '#25D366' }}
                          >
                            JOIN WHATSAPP
                          </a>
                        )}

                        <div
                          className="flex items-center gap-3 px-4 py-2 border"
                          style={{
                            borderColor: palette.graphite,
                            backgroundColor: "rgba(0,0,0,0.5)",
                          }}
                        >
                          <span
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{
                              backgroundColor: getStatusColor(statusStr),
                              boxShadow: `0 0 10px ${getStatusColor(statusStr)}`,
                            }}
                          ></span>
                          <span
                            className="text-xs font-black tracking-widest uppercase"
                            style={{ color: getStatusColor(statusStr) }}
                          >
                            {statusStr}
                          </span>
                        </div>
                      </div>
                    </div>
                    {isRejected && reg?.rejection_reason && (
                      <div className="mt-4 p-4 border border-red-500/50 bg-red-500/10">
                        <p className="text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase mb-1">
                          REJECTION REASON:
                        </p>
                        <p className="text-sm font-medium text-red-200">
                          {reg.rejection_reason}
                        </p>
                        
                        {/* 🔥 GANTI TEKS JADI TOMBOL DIRECT LINK 🔥 */}
                        <button
                          onClick={() => {
                            if (isComp) {
                              router.push(`/dashboard/competition/${compKey}`);
                            } else if (isEvent) {
                              const eventKey = reg?.event?.slug || reg?.event?.id;
                              router.push(`/dashboard/event/${eventKey}`);
                            }
                          }}
                          className="mt-4 w-full md:w-auto px-6 py-3 font-black text-[10px] tracking-[0.2em] uppercase transition-all cursor-pointer border text-[#ef4444] hover:bg-red-500 hover:text-white"
                          style={{ 
                            borderColor: '#ef4444', 
                          }}
                        >
                          REVISE REGISTRATION PROTOCOL
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* MENU CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            onClick={() => router.push("/dashboard/event")}
            className="group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between"
            style={{
              borderColor: palette.graphite,
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
            }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <span
                className="text-9xl font-black italic"
                style={{ color: palette.stucco }}
              >
                E
              </span>
            </div>
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.3em] mb-8 uppercase"
                style={{ color: palette.greige }}
              >
                [ EVENT CATALOG ]
              </p>
              <h2
                className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest"
                style={{ color: palette.stucco }}
              >
                EVENTS
              </h2>
              <p
                className="text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide"
                style={{ color: palette.ash }}
              >
                Join various exciting events, inspiring workshops, and
                spectacular exhibitions.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <span
                className="h-[1px] w-12 group-hover:w-24 transition-all duration-700"
                style={{ backgroundColor: palette.ash }}
              ></span>
              <span
                className="font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white"
                style={{ color: palette.stucco }}
              >
                REGISTER EVENT ➔
              </span>
            </div>
          </div>

          <div
            onClick={() => router.push("/dashboard/competition")}
            className="group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 hover:-translate-y-2 flex flex-col justify-between"
            style={{
              borderColor: palette.graphite,
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
            }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <span
                className="text-9xl font-black italic"
                style={{ color: palette.stucco }}
              >
                C
              </span>
            </div>
            <div>
              <p
                className="text-[10px] font-bold tracking-[0.3em] mb-8 uppercase"
                style={{ color: palette.greige }}
              >
                [ COMPETITION REGISTRATION ]
              </p>
              <h2
                className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest"
                style={{ color: palette.stucco }}
              >
                COMPETITIONS
              </h2>
              <p
                className="text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide"
                style={{ color: palette.ash }}
              >
                Showcase your best talent and compete on the grand stage of
                Innofashion Show 8.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-auto">
              <span
                className="h-[1px] w-12 group-hover:w-24 transition-all duration-700"
                style={{ backgroundColor: palette.ash }}
              ></span>
              <span
                className="font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white"
                style={{ color: palette.stucco }}
              >
                VIEW COMPETITIONS ➔
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL POP-UP UPLOAD KARYA */}
      {uploadCompKey && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div
            className="w-full max-w-lg border p-8 animate-in fade-in zoom-in duration-300 shadow-2xl"
            style={{
              borderColor: palette.graphite,
              backgroundColor: palette.onyx,
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{
                  backgroundColor: palette.stucco,
                  boxShadow: `0 0 10px ${palette.stucco}`,
                }}
              ></span>
              <p
                className="text-[10px] font-bold tracking-[0.4em] uppercase"
                style={{ color: palette.ash }}
              >
                ARTWORK SUBMISSION
              </p>
            </div>
            <h2 className="text-2xl font-black text-white mb-6 tracking-widest uppercase">
              UPLOAD FILES
            </h2>

            <form onSubmit={handleUploadSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]"
                  style={{ color: palette.greige }}
                >
                  UPLOAD SKETCH (PDF) *
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setArtworkFile(e.target.files?.[0] || null)}
                  className="w-full text-sm border p-4 cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none"
                  style={{
                    backgroundColor: palette.obsidian,
                    borderColor: palette.graphite,
                    color: palette.ash,
                  }}
                  required
                />
                <p
                  className="text-[9px] mt-2 italic"
                  style={{ color: palette.gravel }}
                >
                  Format: Full Name_Competition Category.pdf
                </p>
              </div>
              <div>
                <label
                  className="block text-[10px] font-bold mb-2 uppercase tracking-[0.2em]"
                  style={{ color: palette.greige }}
                >
                  UPLOAD CONCEPT (PDF) *
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setConceptFile(e.target.files?.[0] || null)}
                  className="w-full text-sm border p-4 cursor-pointer file:mr-4 file:py-2 file:px-4 file:border-0 file:font-bold file:uppercase file:tracking-widest transition-all focus:outline-none"
                  style={{
                    backgroundColor: palette.obsidian,
                    borderColor: palette.graphite,
                    color: palette.ash,
                  }}
                  required
                />
                <p
                  className="text-[9px] mt-2 italic"
                  style={{ color: palette.gravel }}
                >
                  Format: Full Name_Concept_Competition Category.pdf
                </p>
              </div>

              <div
                className="flex gap-4 mt-8 pt-4 border-t"
                style={{ borderColor: palette.graphite }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setUploadCompKey(null);
                    setArtworkFile(null);
                    setConceptFile(null);
                  }}
                  className="flex-1 py-3 font-bold text-[10px] uppercase tracking-[0.2em] border hover:bg-white/5 transition-all cursor-pointer"
                  style={{ borderColor: palette.graphite, color: palette.ash }}
                >
                  ABORT
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className="flex-1 py-3 font-black text-[10px] uppercase tracking-[0.2em] disabled:opacity-50 transition-all cursor-pointer"
                  style={{
                    backgroundColor: palette.stucco,
                    color: palette.onyx,
                  }}
                >
                  {isUploading ? "UPLOADING..." : "SECURE UPLOAD"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
