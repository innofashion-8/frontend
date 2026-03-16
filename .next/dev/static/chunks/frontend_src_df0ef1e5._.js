(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/frontend/src/components/admin/competition/CompetitionCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetitionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CompetitionCard({ competition, onViewDetail, onEdit, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#E2E2DE] p-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] hover:shadow-[8px_8px_0px_#1c1c1b] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 flex flex-col justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-black font-creato-title uppercase text-[#1C1C1B] mb-3 leading-tight",
                        children: competition.name
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 bg-[#1C1C1B] text-white text-xs font-black px-3 py-1.5 border-2 border-[#1c1c1b] shadow-[2px_2px_0px_#1c1c1b] mb-3 uppercase tracking-wider",
                        children: competition.category
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#1C1C1B] text-sm font-bold",
                        children: [
                            "Fee: Rp ",
                            competition.registration_fee.toLocaleString('id-ID')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "my-4 border-[#1c1c1b] border-2"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onViewDetail(competition),
                        className: "bg-[#6A5D52] text-white px-4 py-2.5 font-black uppercase text-xs hover:bg-[#1C1C1B] transition-colors w-full cursor-pointer border-[3px] border-[#1c1c1b] shadow-[3px_3px_0px_#1c1c1b] tracking-wider",
                        children: "View Details"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onEdit(competition),
                                className: "flex-1 border-[3px] border-[#1c1c1b] text-[#1c1c1b] bg-white px-3 py-2 font-black uppercase text-xs hover:bg-[#1c1c1b] hover:text-white transition-colors cursor-pointer shadow-[3px_3px_0px_#1c1c1b] tracking-wider",
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onDelete(competition.id),
                                className: "flex-1 bg-[#1c1c1b] text-white px-3 py-2 font-black uppercase text-xs hover:bg-black transition-colors cursor-pointer border-[3px] border-[#1c1c1b] shadow-[3px_3px_0px_#1c1c1b] tracking-wider",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/admin/competition/CompetitionCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = CompetitionCard;
var _c;
__turbopack_context__.k.register(_c, "CompetitionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/admin/competition/CompetitionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetitionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function CompetitionModal({ competition, onClose }) {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompetitionModal.useEffect": ()=>{
            if (competition) {
                setIsVisible(true);
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return ({
                "CompetitionModal.useEffect": ()=>{
                    document.body.style.overflow = 'unset';
                }
            })["CompetitionModal.useEffect"];
        }
    }["CompetitionModal.useEffect"], [
        competition
    ]);
    const handleClose = ()=>{
        setIsVisible(false);
        setTimeout(onClose, 200);
    };
    if (!competition) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`,
        onClick: handleClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative w-full max-w-3xl bg-[#E2E2DE] border-4 border-[#1c1c1b] shadow-[12px_12px_0px_#1c1c1b] p-8 md:p-10 transition-all duration-200 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClose,
                    className: "absolute top-4 right-6 text-4xl font-black text-[#1c1c1b] hover:scale-110 transition-transform cursor-pointer z-10",
                    "aria-label": "Tutup",
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-black font-creato-title uppercase border-b-4 border-[#1c1c1b] pb-4 mb-8",
                    children: competition.name
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-[#1C1C1B]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-5 h-5 text-white",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                                lineNumber: 57,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3z"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider",
                                            children: "Kategori"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-lg text-[#1C1C1B] uppercase",
                                            children: competition.category
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 p-4 bg-white border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 bg-[#5B4D4B]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-5 h-5 text-white",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "1.5",
                                        stroke: "currentColor",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M20 12v4h-4a2 2 0 0 1 0 -4h4"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-black text-[#6A5D52] uppercase tracking-wider",
                                            children: "Biaya Pendaftaran"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-lg text-[#5B4D4B]",
                                            children: competition.registration_fee === 0 ? "Gratis" : `Rp ${competition.registration_fee.toLocaleString('id-ID')}`
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-black text-[#1C1C1B] uppercase mb-4 border-b-2 border-[#1c1c1b] pb-2",
                            children: "Deskripsi Kompetisi"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-base text-[#484847] leading-relaxed whitespace-pre-wrap",
                            children: competition.description
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleClose,
                    className: "w-full cursor-pointer py-3 px-6 font-black uppercase text-[#1c1c1b] bg-white border-[3px] border-[#1c1c1b] hover:bg-[#1c1c1b] hover:text-white transition-all shadow-[4px_4px_0px_#1c1c1b] tracking-wider",
                    children: "Tutup"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/admin/competition/CompetitionModal.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(CompetitionModal, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = CompetitionModal;
var _c;
__turbopack_context__.k.register(_c, "CompetitionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetitionSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CompetitionSidebar({ isOpen, isEditing, formData, errors, onClose, onSubmit, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/60 z-[55] transition-opacity duration-300",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 right-0 h-full w-full md:w-[30rem] bg-white shadow-[-10px_0_50px_rgba(0,0,0,0.15)] border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-[56] p-8 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-[#1C1C1B]",
                                children: isEditing ? 'Edit Kompetisi' : 'Tambah Kompetisi'
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-[#7B7D7B] hover:text-[#1A1A1A] text-4xl transition-colors cursor-pointer",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: onSubmit,
                        className: "flex flex-col gap-5 flex-grow overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold mb-2 text-[#5B4D4B]",
                                        children: "Judul Kompetisi"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        required: true,
                                        className: "w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors",
                                        value: formData.name,
                                        onChange: (e)=>onChange({
                                                ...formData,
                                                name: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    errors?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.name[0]
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 45,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold mb-2 text-[#5B4D4B]",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        required: true,
                                        className: "w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors",
                                        value: formData.category,
                                        onChange: (e)=>onChange({
                                                ...formData,
                                                category: e.target.value
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "INTERMEDIATE",
                                                children: "INTERMEDIATE"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ADVANCED",
                                                children: "ADVANCED"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 50,
                                        columnNumber: 13
                                    }, this),
                                    errors?.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.category[0]
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 34
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold mb-2 text-[#5B4D4B]",
                                        children: "Registration Fee (Rp)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        required: true,
                                        min: "0",
                                        step: "1",
                                        className: "w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] transition-colors",
                                        value: formData.registration_fee,
                                        onChange: (e)=>onChange({
                                                ...formData,
                                                registration_fee: parseInt(e.target.value) || 0
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    errors?.registration_fee && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.registration_fee[0]
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 73,
                                        columnNumber: 42
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-bold mb-2 text-[#5B4D4B]",
                                        children: "Deskripsi"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        required: true,
                                        rows: 5,
                                        className: "w-full border-2 border-[#B2B4B2] bg-white text-[#1C1C1B] rounded-lg p-3 focus:outline-none focus:border-[#5B4D4B] resize-none transition-colors",
                                        value: formData.description,
                                        onChange: (e)=>onChange({
                                                ...formData,
                                                description: e.target.value
                                            })
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    errors?.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-600 text-sm mt-1",
                                        children: errors.description[0]
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto pt-6 flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "border-2 border-[#978D82] text-[#7B7D7B] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#978D82] hover:text-[#EBEBDD] transition-colors cursor-pointer",
                                        children: "Batal"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "bg-[#5B4D4B] text-[#EBEBDD] font-bold rounded-lg py-3 px-6 flex-1 hover:bg-[#1C1C1B] transition-colors shadow-md cursor-pointer",
                                        children: "Simpan"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = CompetitionSidebar;
var _c;
__turbopack_context__.k.register(_c, "CompetitionSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/components/admin/competition/CompetitionClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompetitionClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/services/competition-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$admin$2f$competition$2f$CompetitionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/admin/competition/CompetitionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$admin$2f$competition$2f$CompetitionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/admin/competition/CompetitionModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$admin$2f$competition$2f$CompetitionSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/admin/competition/CompetitionSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CompetitionClient({ initialCompetitions }) {
    _s();
    const [competitions, setCompetitions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialCompetitions);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        category: 'INTERMEDIATE',
        description: '',
        registration_fee: 0,
        is_active: true
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [viewDetail, setViewDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleOpenCreate = ()=>{
        setFormData({
            name: '',
            category: 'INTERMEDIATE',
            description: '',
            registration_fee: 0,
            is_active: true
        });
        setErrors(null);
        setIsEditing(false);
        setIsSidebarOpen(true);
    };
    const handleOpenUpdate = (comp)=>{
        setFormData({
            name: comp.name,
            category: comp.category,
            description: comp.description,
            registration_fee: comp.registration_fee,
            is_active: comp.is_active
        });
        setErrors(null);
        setEditingId(comp.id);
        setIsEditing(true);
        setIsSidebarOpen(true);
    };
    const handleDelete = async (id)=>{
        const compToDelete = competitions.find((c)=>c.id === id);
        const compName = compToDelete?.name || 'Kompetisi ini';
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
            title: "HAPUS KOMPETISI?",
            text: `Data "${compName}" akan dihapus permanen dan tidak bisa dikembalikan.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1c1c1b",
            cancelButtonColor: "#979086",
            confirmButtonText: "YA, HANGUSKAN!",
            cancelButtonText: "BATAL",
            customClass: {
                popup: 'rounded-none border-4 border-[#1c1c1b]',
                title: 'font-creato-title font-bold uppercase',
                confirmButton: 'rounded-none font-creato-title font-bold uppercase tracking-widest',
                cancelButton: 'rounded-none font-creato-title font-bold uppercase tracking-widest'
            }
        }).then(async (result)=>{
            if (result.isConfirmed) {
                try {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        title: 'MENGHAPUS...',
                        allowOutsideClick: false,
                        didOpen: ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].showLoading();
                        },
                        customClass: {
                            popup: 'rounded-none border-4 border-[#1c1c1b]'
                        }
                    });
                    await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionService"].deleteEvent(id);
                    setCompetitions(competitions.filter((comp)=>comp.id !== id));
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        title: "TERHAPUS!",
                        text: "Kompetisi berhasil dilenyapkan dari database.",
                        icon: "success",
                        confirmButtonColor: "#6A5D52",
                        confirmButtonText: "MANTAP",
                        customClass: {
                            popup: 'rounded-none border-4 border-[#1c1c1b]',
                            title: 'font-creato-title font-bold uppercase',
                            confirmButton: 'rounded-none font-creato-title font-bold uppercase tracking-widest'
                        }
                    });
                } catch (error) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                        title: "GAGAL!",
                        text: error.message || "Server lagi ngambek, coba lagi nanti.",
                        icon: "error",
                        confirmButtonColor: "#1c1c1b",
                        customClass: {
                            popup: 'rounded-none border-4 border-[#1c1c1b]',
                            confirmButton: 'rounded-none font-creato-title font-bold uppercase'
                        }
                    });
                }
            }
        });
    };
    const handleSave = async (e)=>{
        e.preventDefault();
        setErrors(null);
        try {
            if (isEditing) {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionService"].updateCompetition(editingId, formData);
                setCompetitions(competitions.map((comp)=>comp.id === editingId ? result.data : comp));
            } else {
                const result = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$services$2f$competition$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["competitionService"].storeCompetition(formData);
                setCompetitions([
                    ...competitions,
                    result.data
                ]);
            }
            setIsSidebarOpen(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                toast: true,
                position: 'top-end',
                icon: 'success',
                title: isEditing ? 'Update Berhasil' : 'Kompetisi Disimpan',
                showConfirmButton: false,
                timer: 3000,
                customClass: {
                    popup: 'border-2 border-[#1c1c1b] rounded-none'
                }
            });
        } catch (error) {
            if (error.isValidationError) {
                setErrors(error.errors);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
                    title: "SYSTEM ERROR",
                    text: error.message || "Terjadi kesalahan saat menyimpan data.",
                    icon: "error",
                    confirmButtonColor: "#1c1c1b",
                    customClass: {
                        popup: 'rounded-none border-4 border-[#1c1c1b]',
                        title: 'font-creato-title font-black uppercase',
                        confirmButton: 'rounded-none font-creato-title font-bold uppercase tracking-widest'
                    }
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen text-[#1C1C1B]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2",
                            children: "Manage Competitions"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleOpenCreate,
                            className: "bg-[#6A5D52] text-white px-6 py-3 font-black uppercase text-sm hover:bg-[#1C1C1B] transition-colors w-full sm:w-auto cursor-pointer border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] tracking-wider",
                            children: "+ Add Competition"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto bg-[#E2E2DE] p-6 sm:p-8 md:p-10 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b]",
                children: competitions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center py-20 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 text-[#1c1c1b]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-24 h-24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 57
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 22h16"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 99
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 119
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 189
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                                        lineNumber: 176,
                                        columnNumber: 260
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-3",
                            children: "No competition yet"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#6A5D52] mb-6 text-center font-bold",
                            children: "Start adding your first competition"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleOpenCreate,
                            className: "bg-[#6A5D52] text-white px-6 py-3 font-black uppercase text-sm hover:bg-[#1C1C1B] transition-colors cursor-pointer border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] tracking-wider",
                            children: "+ Add Competition"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: competitions.map((comp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$admin$2f$competition$2f$CompetitionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            competition: comp,
                            onViewDetail: setViewDetail,
                            onEdit: handleOpenUpdate,
                            onDelete: handleDelete
                        }, comp.id, false, {
                            fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                            lineNumber: 188,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$admin$2f$competition$2f$CompetitionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                competition: viewDetail,
                onClose: ()=>setViewDetail(null)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$admin$2f$competition$2f$CompetitionSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isSidebarOpen,
                isEditing: isEditing,
                formData: formData,
                errors: errors,
                onClose: ()=>setIsSidebarOpen(false),
                onSubmit: handleSave,
                onChange: setFormData
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/admin/competition/CompetitionClient.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_s(CompetitionClient, "SG59gcm68bV2yvY85MKPWPGovFs=");
_c = CompetitionClient;
var _c;
__turbopack_context__.k.register(_c, "CompetitionClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_df0ef1e5._.js.map