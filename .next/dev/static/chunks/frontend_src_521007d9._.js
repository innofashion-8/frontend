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
"[project]/frontend/src/components/opening/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// "use client";
// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import { useRouter, usePathname } from 'next/navigation';
// import { useSession, signOut } from 'next-auth/react';
// interface NavbarProps {
//   isVisible: boolean;
// }
// const Navbar: React.FC<NavbarProps> = ({ isVisible }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
//   const pathname = usePathname();
//   const { status } = useSession();
//   const navLinks = [
//     { id: 'about', label: 'ABOUT US' },
//     { id: 'competitions', label: 'COMPETITIONS' },
//     { id: 'timeline', label: 'TIMELINE' },
//     { id: 'contact', label: 'CONTACT US' },
//   ];
//   const handleScroll = (id: string) => {
//     setIsOpen(false);
//     if (pathname !== '/') {
//       router.push(`/#${id}`);
//     } else {
//       const target = document.getElementById(id);
//       if (target) {
//         target.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };
//   const handleLogout = async () => {
//     setIsOpen(false);
//     await signOut({ callbackUrl: '/' });
//   };
//   return (
//     <>
//       {/* DESKTOP NAVBAR */}
//       <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
//         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}
//       >
//         <div className="w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent">
//           <nav className="relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8">
//             <div className="absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl"></div>
//             <div className="relative z-10 w-full h-full flex items-center justify-between">
//               {/* LOGO */}
//               <div className="flex justify-start items-center ml-2 lg:ml-6">
//                 <Link href="/">
//                   <img src="/photo/logo.png" alt="LOGO" className="h-7 md:h-12 w-auto object-contain cursor-pointer" />
//                 </Link>
//               </div>
//               <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
//                 {navLinks.map((link) => (
//                   <button
//                     key={link.id}
//                     onClick={() => handleScroll(link.id)}
//                     className="text-white font-black italic text-[14px] xl:text-[18px] tracking-tighter hover:text-gray-400 transition-all uppercase whitespace-nowrap"
//                   >
//                     {link.label}
//                   </button>
//                 ))}
//               </div>
//               <div className="hidden md:flex items-center space-x-3 mr-4">
//                 {status === 'authenticated' ? (
//                   <>
//                     <Link 
//                       href="/dashboard" 
//                       className="relative h-12 w-36 lg:h-12 lg:w-36 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden"
//                     >
//                       <img 
//                         src="/photo/register-bg.png" 
//                         className="absolute inset-0 w-full h-full object-contain z-0" 
//                         alt="" 
//                       />
//                       <span className="relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter">
//                         DASHBOARD
//                       </span>
//                     </Link>
//                     <button 
//                       onClick={handleLogout} 
//                       className="relative h-10 w-28 lg:h-10 lg:w-28 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden cursor-pointer"
//                     >
//                       <img 
//                         src="/photo/signin-bg.png" 
//                         className="absolute inset-0 w-full h-full object-contain z-0" 
//                         alt="" 
//                       />
//                       <span className="relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter">
//                         LOGOUT
//                       </span>
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <Link 
//                       href="/login" 
//                       className="relative h-12 w-36 lg:h-12 lg:w-36 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden"
//                     >
//                       <img 
//                         src="/photo/register-bg.png" 
//                         className="absolute inset-0 w-full h-full object-contain z-0" 
//                         alt="" 
//                       />
//                       <span className="relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter">
//                         REGISTER
//                       </span>
//                     </Link>
//                     <Link 
//                       href="/login" 
//                       className="relative h-10 w-28 lg:h-10 lg:w-28 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden"
//                     >
//                       <img 
//                         src="/photo/signin-bg.png" 
//                         className="absolute inset-0 w-full h-full object-contain z-0" 
//                         alt="" 
//                       />
//                       <span className="relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter">
//                         SIGN IN
//                       </span>
//                     </Link>
//                   </>
//                 )}
//               </div>
//               <button 
//                 className="lg:hidden text-white mr-4 z-50 relative" 
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 {isOpen ? <X size={28} /> : <Menu size={28} />}
//               </button>
//             </div>
//           </nav>
//         </div>
//       </div>
//       <div className={`fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
//         ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}
//       >
//         <div className="flex flex-col items-center space-y-6 w-full">
//           {navLinks.map((link) => (
//             <button 
//               key={link.id} 
//               onClick={() => handleScroll(link.id)} 
//               className="text-white font-black italic text-2xl tracking-tighter uppercase"
//             >
//               {link.label}
//             </button>
//           ))}
//           <div className="flex flex-col space-y-4 pt-6 w-full px-12">
//             {status === 'authenticated' ? (
//               <>
//                 <Link 
//                   href="/dashboard" 
//                   onClick={() => setIsOpen(false)} 
//                   className="text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
//                 >
//                   DASHBOARD
//                 </Link>
//                 <button 
//                   onClick={handleLogout} 
//                   className="text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
//                 >
//                   LOGOUT
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link 
//                   href="/login" 
//                   onClick={() => setIsOpen(false)} 
//                   className="text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
//                 >
//                   REGISTER
//                 </Link>
//                 <Link 
//                   href="/login" 
//                   onClick={() => setIsOpen(false)} 
//                   className="text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full"
//                 >
//                   SIGN IN
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Navbar;
"use client";
;
;
;
;
;
const Navbar = ({ isVisible })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const navLinks = [
        {
            id: 'about',
            label: 'ABOUT US'
        },
        {
            id: 'competitions',
            label: 'COMPETITIONS'
        },
        {
            id: 'timeline',
            label: 'TIMELINE'
        },
        {
            id: 'contact',
            label: 'CONTACT US'
        }
    ];
    const handleScroll = (id)=>{
        setIsOpen(false);
        if (pathname !== '/') {
            router.push(`/#${id}`);
        } else {
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    };
    const handleLogout = async ()=>{
        setIsOpen(false);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: '/'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 w-full h-full flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start items-center ml-2 lg:ml-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/photo/logo.png",
                                                alt: "LOGO",
                                                className: "h-7 md:h-12 w-auto object-contain cursor-pointer"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                            lineNumber: 265,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                        lineNumber: 264,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center space-x-4 xl:space-x-6",
                                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleScroll(link.id),
                                                className: "text-white font-black italic text-[14px] xl:text-[18px] tracking-tighter hover:text-gray-400 transition-all uppercase whitespace-nowrap",
                                                children: link.label
                                            }, link.id, false, {
                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                lineNumber: 272,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center space-x-3 mr-4",
                                        children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "relative h-12 w-36 lg:h-12 lg:w-36 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/photo/register-bg.png",
                                                        className: "absolute inset-0 w-full h-full object-contain z-0",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter",
                                                        children: "HOME"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                lineNumber: 287,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard",
                                                        className: "relative h-12 w-36 lg:h-12 lg:w-36 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/photo/register-bg.png",
                                                                className: "absolute inset-0 w-full h-full object-contain z-0",
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter",
                                                                children: "DASHBOARD"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                                lineNumber: 311,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleLogout,
                                                        className: "relative h-10 w-28 lg:h-10 lg:w-28 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/photo/signin-bg.png",
                                                                className: "absolute inset-0 w-full h-full object-contain z-0",
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter",
                                                                children: "LOGOUT"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                                lineNumber: 324,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true)
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    className: "relative h-12 w-36 lg:h-12 lg:w-36 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/photo/register-bg.png",
                                                            className: "absolute inset-0 w-full h-full object-contain z-0",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter",
                                                            children: "REGISTER"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    className: "relative h-10 w-28 lg:h-10 lg:w-28 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/photo/signin-bg.png",
                                                            className: "absolute inset-0 w-full h-full object-contain z-0",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative z-10 text-white font-black italic text-[16px] lg:text-[18px] tracking-tighter",
                                                            children: "SIGN IN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "lg:hidden text-white mr-4 z-50 relative",
                                        onClick: ()=>setIsOpen(!isOpen),
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                            lineNumber: 368,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                            lineNumber: 368,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                        lineNumber: 258,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-6 w-full",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleScroll(link.id),
                                className: "text-white font-black italic text-2xl tracking-tighter uppercase",
                                children: link.label
                            }, link.id, false, {
                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-4 pt-6 w-full px-12",
                            children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                    lineNumber: 395,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            onClick: ()=>setIsOpen(false),
                                            className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                            children: "DASHBOARD"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                            lineNumber: 404,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleLogout,
                                            className: "text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                            children: "LOGOUT"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                            lineNumber: 411,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true)
                            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                        children: "REGISTER"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                        lineNumber: 422,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                        children: "SIGN IN"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                        lineNumber: 429,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                    lineNumber: 379,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Navbar, "XdGK/0hAmzqBq+kOneP40pymbPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/lib/fetch-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ui$2f$Beams$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ui/Beams.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/opening/navbar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function DashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // 🔥 FETCH DATA REGISTRASI DARI LARAVEL 🔥
    const { data: registrations, isLoading: isRegLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'my-registrations'
        ],
        queryFn: {
            "DashboardPage.useQuery": async ()=>{
                // Nembak endpoint getRegistrations bawaan temen lu
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$lib$2f$fetch$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchClient"])('/api/registrations', {
                    method: 'GET'
                });
                return res.data; // Biasanya Laravel ngirim di dalam key "data"
            }
        }["DashboardPage.useQuery"],
        // Fetch hanya kalau user udah kedetek login
        enabled: status === 'authenticated'
    });
    const handleLogout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: '/login'
        });
    };
    // Layar Loading Super Singkat ala Dystopian
    if (status === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#0a0a0a]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs font-bold tracking-[0.4em] uppercase animate-pulse",
                style: {
                    color: palette.ash
                },
                children: "DECRYPTING IDENTITY..."
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/app/dashboard/page.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this);
    }
    // Helper buat warna status
    const getStatusColor = (statusReg)=>{
        const s = (statusReg || '').toUpperCase();
        if (s.includes('REJECT') || s.includes('TOLAK')) return '#ef4444'; // Red
        if (s.includes('VERIFI') || s.includes('ACCEPT') || s.includes('APPROV')) return '#22c55e'; // Green
        if (s.includes('PENDING') || s.includes('WAIT')) return palette.greige; // Yellow-ish
        return palette.ash; // Default Gray
    };
    // Menggabungkan dan meratakan array kalau backend ngirim object { events: [], competitions: [] }
    let allRegistrations = [];
    if (registrations) {
        if (Array.isArray(registrations)) {
            allRegistrations = registrations;
        } else {
            allRegistrations = [
                ...registrations.competitions || [],
                ...registrations.events || []
            ];
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative py-24 min-h-screen flex flex-col justify-center bg-[#0a0a0a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isVisible: true
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
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
                    fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-6xl mx-auto px-4 mt-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 p-10 md:p-16 border bg-black/40 backdrop-blur-md relative overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_20px_40px_-15px_rgba(106,93,82,0.3)]",
                        style: {
                            borderColor: palette.graphite
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-2 h-full",
                                style: {
                                    backgroundColor: palette.greige
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2 h-2 rounded-full animate-pulse",
                                                style: {
                                                    backgroundColor: palette.stucco,
                                                    boxShadow: `0 0 10px ${palette.stucco}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.4em] uppercase",
                                                style: {
                                                    color: palette.ash
                                                },
                                                children: "DASHBOARD UTAMA"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleLogout,
                                        className: "group flex items-center gap-2 px-4 py-2 border transition-all duration-300 backdrop-blur-sm",
                                        style: {
                                            borderColor: palette.graphite,
                                            backgroundColor: 'rgba(28,28,27,0.5)'
                                        },
                                        onMouseEnter: (e)=>{
                                            e.currentTarget.style.borderColor = '#ef4444';
                                            e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                                        },
                                        onMouseLeave: (e)=>{
                                            e.currentTarget.style.borderColor = palette.graphite;
                                            e.currentTarget.style.backgroundColor = 'rgba(28,28,27,0.5)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1 h-1 rounded-full bg-red-500 opacity-50 group-hover:opacity-100 transition-opacity"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold tracking-[0.3em] uppercase transition-colors text-gray-400 group-hover:text-red-400",
                                                children: "LOG OUT"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl md:text-6xl font-black mb-6 uppercase tracking-widest",
                                style: {
                                    color: palette.stucco
                                },
                                children: [
                                    "WELCOME, ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: palette.greige
                                        },
                                        children: session?.user?.name?.split(' ')[0] || 'UNKNOWN'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl font-medium tracking-widest max-w-2xl leading-relaxed",
                                style: {
                                    color: palette.ash
                                },
                                children: "Pilih jalur pendaftaran Innofashion Show 8 yang ingin kamu ikuti atau pantau status kelulusanmu."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 border p-8 bg-black/40 backdrop-blur-md",
                        style: {
                            borderColor: palette.graphite
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-8 pb-4 border-b",
                                style: {
                                    borderColor: palette.graphite
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-bold tracking-[0.3em] uppercase",
                                    style: {
                                        color: palette.greige
                                    },
                                    children: "[ STATUS PROTOKOL REGISTRASI ]"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            isRegLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs font-bold tracking-[0.3em] uppercase animate-pulse",
                                style: {
                                    color: palette.ash
                                },
                                children: "SYNCING WITH DATABASE..."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this) : allRegistrations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium tracking-widest uppercase",
                                style: {
                                    color: palette.ash
                                },
                                children: "NO ACTIVE REGISTRATIONS FOUND."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: allRegistrations.map((reg, idx)=>{
                                    const itemName = reg?.competition?.name || reg?.event?.title || 'UNKNOWN PROTOCOL';
                                    const itemType = reg?.competition ? 'COMPETITION' : 'EVENT';
                                    const statusStr = (reg?.status || 'PENDING').toUpperCase();
                                    // Cek apakah dia kena reject
                                    const isRejected = statusStr.includes('REJECT') || statusStr.includes('TOLAK');
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col p-4 border transition-colors hover:bg-white/5",
                                        style: {
                                            borderColor: palette.graphite,
                                            backgroundColor: palette.obsidian
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col md:flex-row justify-between items-start md:items-center w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-4 md:mb-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[9px] tracking-[0.2em] mb-1 uppercase",
                                                                style: {
                                                                    color: palette.ash
                                                                },
                                                                children: itemType
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-lg tracking-widest uppercase",
                                                                style: {
                                                                    color: palette.stucco
                                                                },
                                                                children: itemName
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 px-4 py-2 border",
                                                        style: {
                                                            borderColor: palette.graphite,
                                                            backgroundColor: 'rgba(0,0,0,0.5)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full animate-pulse",
                                                                style: {
                                                                    backgroundColor: getStatusColor(statusStr),
                                                                    boxShadow: `0 0 10px ${getStatusColor(statusStr)}`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-black tracking-widest uppercase",
                                                                style: {
                                                                    color: getStatusColor(statusStr)
                                                                },
                                                                children: statusStr
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this),
                                            isRejected && reg?.rejection_reason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 p-4 border border-red-500/50 bg-red-500/10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase mb-1",
                                                        children: "REJECTION REASON:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-red-200",
                                                        children: reg.rejection_reason
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] font-bold tracking-[0.2em] text-white uppercase mt-4",
                                                        children: "➔ PLEASE RE-REGISTER FROM THE CATALOG BELOW"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>router.push('/dashboard/event'),
                                className: "group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 flex flex-col justify-between",
                                style: {
                                    borderColor: palette.graphite,
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.boxShadow = `0 20px 40px -15px ${palette.walnut}60`,
                                onMouseLeave: (e)=>e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-9xl font-black italic",
                                            style: {
                                                color: palette.stucco
                                            },
                                            children: "E"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.3em] mb-8 uppercase",
                                                style: {
                                                    color: palette.greige
                                                },
                                                children: "[ KATALOG EVENT ]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest",
                                                style: {
                                                    color: palette.stucco
                                                },
                                                children: "EVENTS"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide",
                                                style: {
                                                    color: palette.ash
                                                },
                                                children: "Ikuti berbagai rangkaian acara seru, workshop inspiratif, dan pameran karya spektakuler."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-[1px] w-12 group-hover:w-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                style: {
                                                    backgroundColor: palette.ash
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white",
                                                style: {
                                                    color: palette.stucco
                                                },
                                                children: "DAFTAR EVENT ➔"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>router.push('/dashboard/competition'),
                                className: "group relative overflow-hidden border bg-black/40 backdrop-blur-md p-10 md:p-14 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2 flex flex-col justify-between",
                                style: {
                                    borderColor: palette.graphite,
                                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.boxShadow = `0 20px 40px -15px ${palette.walnut}60`,
                                onMouseLeave: (e)=>e.currentTarget.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 pointer-events-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-9xl font-black italic",
                                            style: {
                                                color: palette.stucco
                                            },
                                            children: "C"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] font-bold tracking-[0.3em] mb-8 uppercase",
                                                style: {
                                                    color: palette.greige
                                                },
                                                children: "[ PENDAFTARAN LOMBA ]"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-4xl md:text-5xl font-black mb-6 uppercase tracking-widest",
                                                style: {
                                                    color: palette.stucco
                                                },
                                                children: "COMPETITIONS"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 239,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm md:text-base mb-12 leading-relaxed font-medium tracking-wide",
                                                style: {
                                                    color: palette.ash
                                                },
                                                children: "Tunjukkan bakat terbaikmu dan bersainglah di panggung megah Innofashion Show 8."
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mt-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-[1px] w-12 group-hover:w-24 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                                style: {
                                                    backgroundColor: palette.ash
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold tracking-widest text-xs uppercase transition-colors group-hover:text-white",
                                                style: {
                                                    color: palette.stucco
                                                },
                                                children: "LIHAT LOMBA ➔"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/app/dashboard/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/app/dashboard/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "B54uX5rRtfOcEeaWnPAwsfY9F0U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_src_521007d9._.js.map