(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/admin-swal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminConfirm",
    ()=>adminConfirm,
    "adminError",
    ()=>adminError,
    "adminInput",
    ()=>adminInput,
    "adminLoading",
    ()=>adminLoading,
    "adminSuccess",
    ()=>adminSuccess,
    "adminToast",
    ()=>adminToast,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sweetalert2/dist/sweetalert2.all.js [app-client] (ecmascript)");
;
const baseCustomClass = {
    popup: 'rounded-none border-[3px] border-[#494947] shadow-[8px_8px_0px_#000000]',
    title: 'font-creato-title font-black uppercase tracking-wider text-[#E2E2DE]',
    htmlContainer: 'text-[#B7AC9B]',
    confirmButton: 'rounded-none font-black uppercase tracking-widest text-sm px-6 py-2.5',
    cancelButton: 'rounded-none font-black uppercase tracking-widest text-sm px-6 py-2.5',
    input: 'rounded-none border-2 border-[#494947] bg-[#1a1a1a] text-[#E2E2DE] font-bold'
};
const baseOptions = {
    background: '#1C1C1B',
    color: '#E2E2DE',
    confirmButtonColor: '#6A5D52',
    cancelButtonColor: '#494947',
    customClass: baseCustomClass
};
function mergeOptions(...optionsList) {
    const merged = {};
    for (const opts of optionsList){
        Object.assign(merged, opts);
    }
    // Merge customClass separately
    const mergedCustomClass = {};
    for (const opts of optionsList){
        if (opts.customClass && typeof opts.customClass === 'object') {
            Object.assign(mergedCustomClass, opts.customClass);
        }
    }
    merged.customClass = mergedCustomClass;
    return merged;
}
const adminConfirm = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'warning',
        showCancelButton: true
    }, options));
const adminSuccess = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'success'
    }, options));
const adminError = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        icon: 'error',
        confirmButtonColor: '#ef4444'
    }, options));
const adminLoading = (title = 'PROCESSING...')=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        title,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].showLoading()
    }));
const adminToast = (title, icon = 'success')=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire({
        toast: true,
        position: 'top-end',
        icon,
        title,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#1C1C1B',
        color: '#E2E2DE',
        customClass: {
            popup: 'rounded-none border-2 border-[#494947] shadow-[4px_4px_0px_#000000]',
            title: 'font-black uppercase tracking-wider text-sm'
        }
    });
const adminInput = (options)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fire(mergeOptions(baseOptions, {
        input: 'textarea'
    }, options));
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sweetalert2$2f$dist$2f$sweetalert2$2e$all$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/admin/attendance/AttendanceClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AttendanceClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@yudiel/react-qr-scanner/dist/index.esm.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-swal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/fetch-client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AttendanceClient() {
    _s();
    const [manualId, setManualId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cameraActive, setCameraActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [deviceId, setDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [devices, setDevices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSwitching, setIsSwitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Ambil daftar kamera
    const getCameras = async ()=>{
        try {
            const allDevices = await navigator.mediaDevices.enumerateDevices();
            const videoDevices = allDevices.filter((device)=>device.kind === 'videoinput');
            setDevices(videoDevices);
        } catch (err) {
            console.warn("Gagal mengambil daftar kamera:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttendanceClient.useEffect": ()=>{
            // Beri jeda sebentar biar komponen Scanner sempat minta izin kamera dulu
            const timer = setTimeout({
                "AttendanceClient.useEffect.timer": ()=>{
                    getCameras();
                }
            }["AttendanceClient.useEffect.timer"], 1500);
            return ({
                "AttendanceClient.useEffect": ()=>clearTimeout(timer)
            })["AttendanceClient.useEffect"];
        }
    }["AttendanceClient.useEffect"], []);
    const handleCameraChange = (e)=>{
        const newDeviceId = e.target.value || undefined;
        // Unmount scanner sebentar biar browser ngelepas akses ke kamera lama
        setIsSwitching(true);
        setDeviceId(newDeviceId);
        setTimeout(()=>{
            setIsSwitching(false);
        }, 500);
    };
    const processCheckIn = async (registrationId)=>{
        if (isProcessing || !registrationId) return;
        setIsProcessing(true);
        setCameraActive(false); // Pause kamera biar gak ke-scan dobel
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])(`/api/admin/scan/attendance`, {
                method: "POST",
                body: JSON.stringify({
                    registration_id: registrationId
                })
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminSuccess"])({
                title: "ACCESS GRANTED",
                text: res.message,
                confirmButtonText: "NEXT SCAN"
            }).then(()=>{
                setCameraActive(true);
            });
            setManualId("");
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$swal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["adminError"])({
                title: "ACCESS DENIED",
                text: error.message || "ID tidak valid atau belum diverifikasi.",
                confirmButtonText: "TUTUP"
            }).then(()=>{
                setCameraActive(true);
            });
        } finally{
            setIsProcessing(false);
        }
    };
    const handleScan = (detectedCodes)=>{
        if (detectedCodes.length > 0) {
            const scannedText = detectedCodes[0].rawValue;
            processCheckIn(scannedText);
        }
    };
    const handleManualSubmit = (e)=>{
        e.preventDefault();
        processCheckIn(manualId);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative pb-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-4xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]",
                        children: "Attendance Scanner"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm font-bold text-[#6A5D52] uppercase tracking-wider",
                        children: "Verify Ticket Protocol / Scan Access Pass"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#E2E2DE] p-6 md:p-8 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-6 border-b-2 border-[#1c1c1b] pb-2 w-full text-center",
                                children: "Optical Scanner"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-sm mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-sm font-black text-[#6A5D52] uppercase block mb-1 tracking-wider",
                                        children: "Pilih Kamera"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: deviceId || "",
                                        onClick: getCameras,
                                        onChange: handleCameraChange,
                                        className: "w-full px-3 py-2 border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] focus:outline-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Default Camera"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            devices.map((device)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: device.deviceId,
                                                    children: device.label || `Camera ${device.deviceId.substring(0, 5)}...`
                                                }, device.deviceId, false, {
                                                    fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            cameraActive && !isSwitching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-sm aspect-square relative border-4 border-[#1c1c1b] shadow-[8px_8px_0px_#1c1c1b] bg-black overflow-hidden p-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$yudiel$2f$react$2d$qr$2d$scanner$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Scanner"], {
                                        onScan: handleScan,
                                        onError: (error)=>console.log(error?.message || error),
                                        constraints: deviceId ? {
                                            deviceId: {
                                                exact: deviceId
                                            }
                                        } : undefined,
                                        components: {
                                            audio: false,
                                            onOff: true,
                                            torch: true
                                        },
                                        styles: {
                                            container: {
                                                width: '100%',
                                                height: '100%'
                                            }
                                        }
                                    }, deviceId || 'default', false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 w-full h-[4px] bg-[#22c55e] animate-[scan_2s_linear_infinite]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-sm aspect-square border-4 border-[#1c1c1b] shadow-[8px_8px_0px_#1c1c1b] bg-white flex flex-col items-center justify-center text-center p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-20 h-20 text-[#1c1c1b] animate-spin mb-4",
                                        viewBox: "0 0 24 24",
                                        strokeWidth: "2",
                                        stroke: "currentColor",
                                        fill: "none",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                stroke: "none",
                                                d: "M0 0h24v24H0z",
                                                fill: "none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 3a9 9 0 1 0 9 9"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-black font-creato-title uppercase text-[#1c1c1b]",
                                        children: "PROCESSING..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex items-center gap-2 px-4 py-2 border-[2px] border-[#1c1c1b] bg-white shadow-[3px_3px_0px_#1c1c1b]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-3 h-3 border border-[#1c1c1b] ${cameraActive ? 'bg-green-500 animate-pulse' : 'bg-yellow-400'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold tracking-widest uppercase text-[#1c1c1b]",
                                        children: cameraActive ? 'CAMERA ACTIVE' : 'SYSTEM PAUSED'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#E2E2DE] p-6 md:p-8 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b] flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-black font-creato-title uppercase text-[#1c1c1b] mb-4 border-b-2 border-[#1c1c1b] pb-2",
                                        children: "Manual Override"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-bold text-[#6A5D52]",
                                        children: "Gunakan terminal ini jika QR Code Access Pass peserta rusak atau tidak terbaca oleh kamera."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleManualSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-sm font-black text-[#6A5D52] uppercase block mb-2 tracking-wider",
                                                children: "TICKET ID / UUID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: manualId,
                                                onChange: (e)=>setManualId(e.target.value),
                                                className: "w-full px-4 py-4 border-[3px] border-[#1c1c1b] bg-white font-bold text-[#1c1c1b] placeholder:text-gray-400 placeholder:font-medium focus:outline-none shadow-[4px_4px_0px_#1c1c1b]",
                                                placeholder: "Paste ID Tiket disini...",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isProcessing,
                                        className: "w-full py-4 border-[3px] border-[#1c1c1b] bg-[#1c1c1b] text-white font-black uppercase hover:bg-[#6A5D52] hover:border-[#6A5D52] transition-all shadow-[4px_4px_0px_#1c1c1b] cursor-pointer tracking-wider disabled:opacity-50 text-lg",
                                        children: isProcessing ? "VERIFYING..." : "FORCE CHECK-IN"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
        @keyframes scan {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }
      `
                }
            }, void 0, false, {
                fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/attendance/AttendanceClient.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(AttendanceClient, "8+P9TzDRV3NJZ8OzjfHxnCN8cN8=");
_c = AttendanceClient;
var _c;
__turbopack_context__.k.register(_c, "AttendanceClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7176696a._.js.map