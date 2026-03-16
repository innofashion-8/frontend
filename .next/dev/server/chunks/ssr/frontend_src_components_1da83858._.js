module.exports = [
"[project]/frontend/src/components/opening/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)");
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
;
const Navbar = ({ isVisible })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
            callbackUrl: '/'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-center py-4 lg:py-6 px-4 bg-transparent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "relative w-full max-w-[1500px] h-16 lg:h-22 flex items-center px-4 lg:px-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black border border-white/10 rounded-full z-0 shadow-2xl"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                lineNumber: 260,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 w-full h-full flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-start items-center ml-2 lg:ml-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden lg:flex items-center space-x-4 xl:space-x-6",
                                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:flex items-center space-x-3 mr-4",
                                        children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "relative h-12 w-36 lg:h-12 lg:w-36 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/photo/register-bg.png",
                                                        className: "absolute inset-0 w-full h-full object-contain z-0",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/dashboard",
                                                        className: "relative h-12 w-36 lg:h-12 lg:w-36 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/photo/register-bg.png",
                                                                className: "absolute inset-0 w-full h-full object-contain z-0",
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                                lineNumber: 306,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleLogout,
                                                        className: "relative h-10 w-28 lg:h-10 lg:w-28 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/photo/signin-bg.png",
                                                                className: "absolute inset-0 w-full h-full object-contain z-0",
                                                                alt: ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    className: "relative h-12 w-36 lg:h-12 lg:w-36 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/photo/register-bg.png",
                                                            className: "absolute inset-0 w-full h-full object-contain z-0",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                            lineNumber: 337,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    className: "relative h-10 w-28 lg:h-10 lg:w-28 flex items-center justify-center group transition-transform hover:scale-105 overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/photo/signin-bg.png",
                                                            className: "absolute inset-0 w-full h-full object-contain z-0",
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "lg:hidden text-white mr-4 z-50 relative",
                                        onClick: ()=>setIsOpen(!isOpen),
                                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                            lineNumber: 368,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 bg-black z-[40] flex flex-col items-center justify-center transition-all duration-500 lg:hidden
        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center space-y-6 w-full",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleScroll(link.id),
                                className: "text-white font-black italic text-2xl tracking-tighter uppercase",
                                children: link.label
                            }, link.id, false, {
                                fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-4 pt-6 w-full px-12",
                            children: status === 'authenticated' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: pathname === '/dashboard' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                    lineNumber: 395,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            onClick: ()=>setIsOpen(false),
                                            className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                            children: "DASHBOARD"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                            lineNumber: 404,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        onClick: ()=>setIsOpen(false),
                                        className: "text-black bg-white text-center font-black italic text-xl border border-white/20 px-8 py-3 rounded-full",
                                        children: "REGISTER"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/navbar.tsx",
                                        lineNumber: 422,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/frontend/src/components/opening/introvideo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const IntroVideo = ({ isFinished })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "home",
        className: "relative w-full h-screen overflow-hidden bg-black z-0",
        style: {
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                autoPlay: true,
                muted: true,
                loop: true,
                playsInline: true,
                className: "w-full h-full object-cover",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/photo/teaser.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/opening/introvideo.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/opening/introvideo.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 bg-black/50 transition-opacity duration-1000 
        ${isFinished ? 'opacity-100' : 'opacity-0'}`
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/opening/introvideo.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/opening/introvideo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = IntroVideo;
}),
"[project]/frontend/src/components/opening/competition.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
// // "use client";
// // import React, { useEffect, useRef } from 'react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // gsap.registerPlugin(ScrollTrigger);
// // const Competition = () => {
// //   const sectionRef = useRef<HTMLElement>(null);
// //   const titleGroupRef = useRef<HTMLDivElement>(null);
// //   const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);
// //   const dust1Ref = useRef<HTMLImageElement>(null);
// //   const dust2Ref = useRef<HTMLImageElement>(null);
// //   const dust3Ref = useRef<HTMLImageElement>(null);
// //   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
// //     gsap.to(e.currentTarget, {
// //       scale: 1.05,
// //       duration: 0.4,
// //       ease: "power2.out"
// //     });
// //   };
// //   const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
// //     gsap.to(e.currentTarget, {
// //       scale: 1,
// //       duration: 0.4,
// //       ease: "power2.out"
// //     });
// //   };
// //   const buttons = [
// //     { id: 'briefing', label: 'Briefing Lomba', icon: '/photo/briefing-lomba.png', bg: '/photo/board-transparant.png' },
// //     { id: 'regis', label: 'Pendaftaran Lomba', icon: '/photo/pendaftaran-lomba.png', bg: '/photo/board-transparant.png' },
// //     { id: 'submit', label: 'Pengumpulan Karya', icon: '/photo/pengumpulan-karya.png', bg: '/photo/board-transparant.png' },
// //   ];
// //   useEffect(() => {
// //     let ctx = gsap.context(() => {
// //       // Sembunyikan elemen dulu secara instan lewat GSAP
// //       gsap.set([titleGroupRef.current, buttonsRef.current], { opacity: 0, y: 50 });
// //       // --- 1. Fade In + Slide Up Judul ---
// //       gsap.to(titleGroupRef.current, {
// //         y: 0,
// //         opacity: 1,
// //         duration: 1.2,
// //         ease: 'power3.out',
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: 'top 80%', // Kita naikkan pemicunya agar lebih sensitif
// //           toggleActions: 'play none none reverse',
// //         },
// //       });
// //       // --- 2. Fade In + Stagger Tombol ---
// //       const btnElements = buttonsRef.current.filter(el => el !== null);
// //       gsap.to(btnElements, {
// //         y: 0,
// //         opacity: 1,
// //         duration: 1,
// //         stagger: 0.15, 
// //         ease: 'power2.out',
// //         scrollTrigger: {
// //           trigger: sectionRef.current,
// //           start: 'top 70%',
// //           toggleActions: 'play none none reverse',
// //         },
// //       });
// //       // --- 3. Parallax Debu ---
// //       if (dust1Ref.current) gsap.to(dust1Ref.current, { yPercent: -15, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 1 } });
// //       if (dust2Ref.current) gsap.to(dust2Ref.current, { yPercent: -25, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 1.5 } });
// //       if (dust3Ref.current) gsap.to(dust3Ref.current, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 2 } });
// //     }, sectionRef);
// //     return () => ctx.revert();
// //   }, []);
// //   return (
// //     <section ref={sectionRef} id="competitions" className="relative min-h-screen w-full bg-transparent overflow-hidden flex items-center justify-center py-10 lg:py-20">
// //       {/* LAYER 0: BACKGROUND UTAMA */}
// //       <div className="absolute inset-0 z-0 pointer-events-none">
// //         <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay agar konten lebih kontras */}
// //         <img src="/photo/bg.png" alt="" className="w-full h-full object-cover opacity-100" />
// //       </div>
// //       {/* LAYER 1: DEBU PARALLAX */}
// //       <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
// //         <img ref={dust1Ref} src="/photo/dust-abu.png" className="absolute -bottom-[5%] -left-[10%] lg:-bottom-[3%] lg:-left-[3%] w-[40%] lg:w-[22%] opacity-100 rotate-[-12deg]" alt="" />
// //         <img ref={dust2Ref} src="/photo/dust-abu.png" className="absolute -bottom-[10%] -right-[5%] lg:-right-[0%] w-[40%] lg:w-[20%] opacity-100 rotate-[270deg]" alt="" />
// //         <img ref={dust3Ref} src="/photo/dust-kuning.png" className="absolute top-[0%] lg:top-[-3%] left-[10%] lg:left-[22%] w-[80%] lg:w-[65%] opacity-100 blur-xl lg:blur-none" alt="" />
// //       </div>
// //       {/* LAYER 2: KONTEN UTAMA */}
// //       <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 items-center lg:items-center gap-10 md:gap-12 lg:gap-8min-h-[75vh] lg:min-h-[85vh]">
// // {/* SISI KIRI: JUDUL */}
// // <div ref={titleGroupRef} className="w-full flex justify-center lg:justify-start -mt-5 md:-mt-10 lg:-mt-16">
// //   {/* Gunakan flex-col dengan gap responsif untuk mengatur jarak COMPE dan TITION */}
// //   <div className="flex flex-col items-center lg:items-start 
// //     gap-4 md:gap-6 lg:gap-8
// //     w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]">
// //     {/* COMPE */}
// //     <div className="w-full">
// //       <img src="/photo/compe.png" alt="COMPE" className="w-full h-auto drop-shadow-2xl" />
// //     </div>
// //     {/* TITION */}
// //     <div className="w-[85%] lg:w-[90%] ml-auto lg:ml-20 -mt-[10%] md:-mt-[12%] lg:-mt-[15%]">
// //       <img 
// //         src="/photo/tition.png" 
// //         alt="TITION"
// //         className="w-full h-auto drop-shadow-2xl" 
// //       />
// //     </div>
// //   </div>
// // </div>
// // {/* SISI KANAN: TOMBOL */}
// // <div className="w-full flex flex-col items-center lg:items-end gap-4 md:gap-6 lg:gap-8 lg:mt-[-10%]">
// //   {buttons.map((btn, idx) => (
// //     <div 
// //       key={btn.id}
// //       ref={el => { buttonsRef.current[idx] = el }}
// //       onMouseEnter={handleMouseEnter} // Tambahkan ini
// //       onMouseLeave={handleMouseLeave} // Tambahkan ini
// //       className="relative group cursor-pointer w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] transition-transform duration-500 hover:scale-105"
// //     >
// //       {/* 1. Board Frame (Dasar) */}
// //       <div className="relative z-0">
// //         <img 
// //           src={btn.bg} 
// //           className="w-full h-auto brightness-110 group-hover:brightness-125 transition-all" 
// //           alt="Board" 
// //         />
// //       </div>
// //       {/* 2. Container Teks (Lapisan Atas) */}
// //       <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
// //         {/* Menggunakan Teks Asli agar Tajam dan Terpusat Otomatis */}
// //         <span className="text-white font-bold text-sm sm:text-base md:text-xl lg:text-2xl italic uppercase tracking-wider drop-shadow-md text-center leading-tight">
// //           {btn.label}
// //         </span>
// //       </div>
// //     </div>
// //   ))}
// // </div>
// //       </div>
// //     </section>
// //   );
// // };
// // export default Competition;
// "use client";
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// const Competition = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleGroupRef = useRef<HTMLDivElement>(null);
//   const buttonsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const dust1Ref = useRef<HTMLImageElement>(null);
//   const dust2Ref = useRef<HTMLImageElement>(null);
//   const dust3Ref = useRef<HTMLImageElement>(null);
//   const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.4, ease: "power2.out" });
//   const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => gsap.to(e.currentTarget, { scale: 1, duration: 0.4, ease: "power2.out" });
//   const buttons = [
//     { id: 'briefing', label: 'Briefing Lomba', icon: '/photo/briefing-lomba.png', bg: '/photo/board-transparant.png' },
//     { id: 'regis', label: 'Pendaftaran Lomba', icon: '/photo/pendaftaran-lomba.png', bg: '/photo/board-transparant.png' },
//     { id: 'submit', label: 'Pengumpulan Karya', icon: '/photo/pengumpulan-karya.png', bg: '/photo/board-transparant.png' },
//   ];
//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap.set([titleGroupRef.current, buttonsRef.current], { opacity: 0, y: 50 });
//       gsap.to(titleGroupRef.current, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }});
//       const btnElements = buttonsRef.current.filter(el => el !== null);
//       gsap.to(btnElements, { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', toggleActions: 'play none none reverse' }});
//       if (dust1Ref.current) gsap.to(dust1Ref.current, { yPercent: -15, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 1 } });
//       if (dust2Ref.current) gsap.to(dust2Ref.current, { yPercent: -25, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 1.5 } });
//       if (dust3Ref.current) gsap.to(dust3Ref.current, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: sectionRef.current, scrub: 2 } });
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);
//   return (
//     <section ref={sectionRef} id="competitions" className="relative min-h-screen w-full bg-transparent overflow-hidden flex items-center justify-center py-10 lg:py-20">
//       {/* LAYER 0: HANYA OVERLAY GELAP (BACKGROUND IMAGE DIHAPUS) */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* <div className="absolute inset-0 bg-black/20 z-10" /> Overlay dikurangi dikit biar bg panjangnya keliatan */}
//       </div>
//       {/* LAYER 1: DEBU PARALLAX */}
//       <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
//         <img ref={dust1Ref} src="/photo/dust-abu.png" className="absolute -bottom-[5%] -left-[10%] lg:-bottom-[3%] lg:-left-[3%] w-[40%] lg:w-[22%] opacity-100 rotate-[-12deg]" alt="" />
//         <img ref={dust2Ref} src="/photo/dust-abu.png" className="absolute -bottom-[10%] -right-[5%] lg:-right-[0%] w-[40%] lg:w-[20%] opacity-100 rotate-[270deg]" alt="" />
//         <img ref={dust3Ref} src="/photo/dust-kuning.png" className="absolute top-[0%] lg:top-[-3%] left-[10%] lg:left-[22%] w-[80%] lg:w-[65%] opacity-100 blur-xl lg:blur-none" alt="" />
//       </div>
//       {/* LAYER 2: KONTEN UTAMA */}
//       <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 items-center gap-10 md:gap-12 lg:gap-8 min-h-[75vh] lg:min-h-[85vh]">
//         <div ref={titleGroupRef} className="w-full flex justify-center lg:justify-start -mt-5 md:-mt-10 lg:-mt-16">
//           <div className="flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:gap-8 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]">
//             <div className="w-full"><img src="/photo/compe.png" alt="COMPE" className="w-full h-auto drop-shadow-2xl" /></div>
//             <div className="w-[85%] lg:w-[90%] ml-auto lg:ml-20 -mt-[10%] md:-mt-[12%] lg:-mt-[15%]"><img src="/photo/tition.png" alt="TITION" className="w-full h-auto drop-shadow-2xl" /></div>
//           </div>
//         </div>
//         <div className="w-full flex flex-col items-center lg:items-end gap-4 md:gap-6 lg:gap-8 lg:mt-[-10%]">
//           {buttons.map((btn, idx) => (
//             <div key={btn.id} ref={el => { buttonsRef.current[idx] = el }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative group cursor-pointer w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] transition-transform duration-500 hover:scale-105">
//               <div className="relative z-0"><img src={btn.bg} className="w-full h-auto brightness-110 group-hover:brightness-125 transition-all" alt="Board" /></div>
//               <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
//                 <span className="text-white font-bold text-sm sm:text-base md:text-xl lg:text-2xl italic uppercase tracking-wider drop-shadow-md text-center leading-tight">{btn.label}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Competition;
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const Competition = ()=>{
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const dust1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dust2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dust3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseEnter = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
            scale: 1.05,
            duration: 0.4,
            ease: "power2.out"
        });
    const handleMouseLeave = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    const buttons = [
        {
            id: 'briefing',
            label: 'Briefing Lomba',
            icon: '/photo/briefing-lomba.png',
            bg: '/photo/board-transparant.png'
        },
        {
            id: 'regis',
            label: 'Pendaftaran Lomba',
            icon: '/photo/pendaftaran-lomba.png',
            bg: '/photo/board-transparant.png'
        },
        {
            id: 'submit',
            label: 'Pengumpulan Karya',
            icon: '/photo/pengumpulan-karya.png',
            bg: '/photo/board-transparant.png'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let ctx = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                titleGroupRef.current,
                buttonsRef.current
            ], {
                opacity: 0,
                y: 50
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(titleGroupRef.current, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
            const btnElements = buttonsRef.current.filter((el)=>el !== null);
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btnElements, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                }
            });
            if (dust1Ref.current) __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dust1Ref.current, {
                yPercent: -15,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 1
                }
            });
            if (dust2Ref.current) __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dust2Ref.current, {
                yPercent: -25,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 1.5
                }
            });
            if (dust3Ref.current) __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(dust3Ref.current, {
                yPercent: 10,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scrub: 2
                }
            });
        }, sectionRef);
        return ()=>ctx.revert();
    }, []);
    // 🔥 STYLE SAKTI: BIAR UJUNG GAMBAR DEBU PUDAR HALUS 🔥
    const dustMaskStyle = {
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "competitions",
        className: "relative min-h-screen w-full bg-transparent overflow-hidden flex items-center justify-center py-10 lg:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/opening/competition.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-10 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: dust1Ref,
                        src: "/photo/dust-abu.png",
                        className: "absolute -bottom-[5%] -left-[10%] lg:-bottom-[3%] lg:-left-[3%] w-[40%] lg:w-[22%] opacity-100 rotate-[-12deg]",
                        style: dustMaskStyle,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: dust2Ref,
                        src: "/photo/dust-abu.png",
                        className: "absolute -bottom-[10%] -right-[5%] lg:-right-[0%] w-[40%] lg:w-[20%] opacity-100 rotate-[270deg]",
                        style: dustMaskStyle,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: dust3Ref,
                        src: "/photo/dust-kuning.png",
                        className: "absolute top-[0%] lg:top-[-3%] left-[10%] lg:left-[22%] w-[80%] lg:w-[65%] opacity-100 blur-xl lg:blur-none",
                        style: dustMaskStyle,
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/opening/competition.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:grid lg:grid-cols-2 items-center gap-10 md:gap-12 lg:gap-8 min-h-[75vh] lg:min-h-[85vh]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: titleGroupRef,
                        className: "w-full flex justify-center lg:justify-start -mt-5 md:-mt-10 lg:-mt-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center lg:items-start gap-4 md:gap-6 lg:gap-8 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/compe.png",
                                        alt: "COMPE",
                                        className: "w-full h-auto drop-shadow-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                        lineNumber: 325,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                    lineNumber: 325,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[85%] lg:w-[90%] ml-auto lg:ml-20 -mt-[10%] md:-mt-[12%] lg:-mt-[15%]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/tition.png",
                                        alt: "TITION",
                                        className: "w-full h-auto drop-shadow-2xl"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                        lineNumber: 326,
                                        columnNumber: 102
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/opening/competition.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col items-center lg:items-end gap-4 md:gap-6 lg:gap-8 lg:mt-[-10%]",
                        children: buttons.map((btn, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    buttonsRef.current[idx] = el;
                                },
                                onMouseEnter: handleMouseEnter,
                                onMouseLeave: handleMouseLeave,
                                className: "relative group cursor-pointer w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] transition-transform duration-500 hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: btn.bg,
                                            className: "w-full h-auto brightness-110 group-hover:brightness-125 transition-all",
                                            alt: "Board"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                            lineNumber: 332,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-sm sm:text-base md:text-xl lg:text-2xl italic uppercase tracking-wider drop-shadow-md text-center leading-tight",
                                            children: btn.label
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, btn.id, true, {
                                fileName: "[project]/frontend/src/components/opening/competition.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/opening/competition.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/opening/competition.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/opening/competition.tsx",
        lineNumber: 289,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Competition;
}),
"[project]/frontend/src/components/opening/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative w-full bg-transparent py-8 lg:py-12 border-t border-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center md:items-start",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/photo/logo.png",
                        alt: "INNOFASHION SHOW",
                        className: "h-8 md:h-12 w-auto object-contain"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/opening/footer.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/opening/footer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center md:items-end space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://tiktok.com/@innofashionshow",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/logo-tiktok.png",
                                        className: "h-12 md:h-16 w-auto mt-[-20]",
                                        alt: "TikTok"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/footer.tsx",
                                        lineNumber: 26,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/footer.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://instagram.com/innofashion.pcu",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/logo-ig.png",
                                        className: "h-12 md:h-16 w-auto mt-[-20]",
                                        alt: "Instagram"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/footer.tsx",
                                        lineNumber: 31,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/footer.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://line.me/ti/p/@182dplyt",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/photo/logo-line.png",
                                        className: "h-12 md:h-16 w-auto mt-[-20]",
                                        alt: "Line"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/opening/footer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/opening/footer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center md:text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-normal text-[10px] md:text-[12px] mt-[-10] uppercase tracking-[0.15em] leading-tight",
                                    children: "@2026 INNOFASHION SHOW."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/footer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white font-normal text-[10px] md:text-[12px] mt-[-2] uppercase tracking-[0.15em] leading-tight",
                                    children: "All Right Reserved"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/opening/footer.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/opening/footer.tsx",
                            lineNumber: 40,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/opening/footer.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/opening/footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/opening/footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
"[project]/frontend/src/components/about.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bgImage": "about-module__h7u8Dq__bgImage",
  "bgOverlay": "about-module__h7u8Dq__bgOverlay",
  "bgWrapper": "about-module__h7u8Dq__bgWrapper",
  "boardFrame": "about-module__h7u8Dq__boardFrame",
  "boardWrapper": "about-module__h7u8Dq__boardWrapper",
  "bodyText": "about-module__h7u8Dq__bodyText",
  "container": "about-module__h7u8Dq__container",
  "dustImage": "about-module__h7u8Dq__dustImage",
  "dustWrapper": "about-module__h7u8Dq__dustWrapper",
  "fadeIn": "about-module__h7u8Dq__fadeIn",
  "fadeInUp": "about-module__h7u8Dq__fadeInUp",
  "layer20Image": "about-module__h7u8Dq__layer20Image",
  "layer20Wrapper": "about-module__h7u8Dq__layer20Wrapper",
  "leftCol": "about-module__h7u8Dq__leftCol",
  "modelBlurry": "about-module__h7u8Dq__modelBlurry",
  "modelBlurryWrapper": "about-module__h7u8Dq__modelBlurryWrapper",
  "modelMain": "about-module__h7u8Dq__modelMain",
  "modelMainWrapper": "about-module__h7u8Dq__modelMainWrapper",
  "modelShadow": "about-module__h7u8Dq__modelShadow",
  "modelShadowWrapper": "about-module__h7u8Dq__modelShadowWrapper",
  "rightCol": "about-module__h7u8Dq__rightCol",
  "section": "about-module__h7u8Dq__section",
  "titleImage": "about-module__h7u8Dq__titleImage",
  "titleWrapper": "about-module__h7u8Dq__titleWrapper",
});
}),
"[project]/frontend/src/components/About.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/frontend/src/components/about.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
// 'use client';
// import Image from 'next/image';
// import styles from './about.module.css';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// export default function AboutSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const bodyRef = useRef<HTMLParagraphElement>(null);
//   const rightColRef = useRef<HTMLDivElement>(null);
//   const dustRef = useRef<HTMLDivElement>(null);
//   const bgRef = useRef<HTMLDivElement>(null);
//   const modelMainRef = useRef<HTMLDivElement>(null);
//   const modelBlurRef = useRef<HTMLDivElement>(null);
//   const boardRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // ─── ENTRANCE TIMELINE (plays on mount with delays) ───
//       const tl = gsap.timeline({
//         defaults: { ease: 'power3.out' },
//       });
//       // Title: slide from left + fade in
//       tl.fromTo(titleRef.current,
//         { x: -140, opacity: 0 },
//         { x: 0, opacity: 1, duration: 1.4 },
//         0.3
//       );
//       // Right column (model board): slide from right + scale + fade in
//       tl.fromTo(rightColRef.current,
//         { x: 180, scale: 0.85, opacity: 0 },
//         { x: 0, scale: 1, opacity: 1, duration: 1.6, clearProps: 'scale' },
//         0.5
//       );
//       // Body text: slide up + fade in
//       tl.fromTo(bodyRef.current,
//         { y: 80, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.2 },
//         0.9
//       );
//       // ─── SCROLL-DRIVEN PARALLAX EFFECTS ───
//       // Background image parallax — moves slower than scroll
//       if (bgRef.current) {
//         gsap.to(bgRef.current, {
//           yPercent: 20,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: 1,
//           },
//         });
//       }
//       // Model main — subtle vertical parallax (appears to float)
//       if (modelMainRef.current) {
//         gsap.to(modelMainRef.current, {
//           yPercent: -8,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: 1.2,
//           },
//         });
//       }
//       // Model blur — parallax at different rate for depth
//       if (modelBlurRef.current) {
//         gsap.to(modelBlurRef.current, {
//           yPercent: -12,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: 2,
//           },
//         });
//       }
//       // Title — subtle float upward on scroll
//       gsap.to(titleRef.current, {
//         yPercent: -25,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1,
//         },
//       });
//       // Body text — parallax at a different rate
//       gsap.to(bodyRef.current, {
//         yPercent: -15,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1.3,
//         },
//       });
//       // Board wrapper — subtle scale breathing on scroll
//       if (boardRef.current) {
//         gsap.to(boardRef.current, {
//           scale: 1.04,
//           ease: 'none',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: 2,
//           },
//         });
//       }
//     }, sectionRef);
//     return () => ctx.revert();
//   }, []);
//   return (
//     <section className={styles.section} ref={sectionRef}>
//       <div className={styles.bgWrapper} ref={bgRef}>
//         <Image
//           src="/assets/background.png"
//           alt="background"
//           fill
//           className={styles.bgImage}
//           priority
//           quality={90}
//         />
//         <div className={styles.bgOverlay} />
//       </div>
//       <div className={styles.dustWrapper} ref={dustRef}>
//         <Image
//           src="/assets/dust.png"
//           alt=""
//           fill
//           className={styles.dustImage}
//         />
//       </div>
//       {/* Main content */}
//       <div className={styles.container}>
//         {/* LEFT COLUMN */}
//         <div className={styles.leftCol}>
//           {/* ABOUT US metallic title */}
//           <div className={styles.titleWrapper} ref={titleRef}>
//             <Image
//               src="/assets/about-us-title.png"
//               alt="About Us"
//               width={700}
//               height={160}
//               className={styles.titleImage}
//               priority
//             />
//           </div>
//           {/* Body text */}
//           <p className={styles.bodyText} ref={bodyRef}>
//             Innofashion Show is an annual event organized by the Fashion Design and Textile Program at Petra Christian University. In 2026, the event will enter its 8th year. This annual show is regularly held as a platform to appreciate the academic achievements of final year DFT students.
// The theme of Innofashion Show 8 is “Zerith,” which comes from the word “zenith,” meaning the highest point of a journey. This theme symbolizes the peak of the creative process, struggles, and learning experiences of DFT students. Through this theme, Innofashion Show 8 is expected to serve as a bridge for DFT students and young individuals interested in the fashion world to encourage the emergence of new collaborations and innovations within the fashion industry.
//           </p>
//         </div>
//         <div className={styles.rightCol} ref={rightColRef}>
//           <div className={styles.boardWrapper} ref={boardRef}>
//             <Image
//               src="/assets/board-frame.png"
//               alt=""
//               fill
//               className={styles.boardFrame}
//             />
//             <div className={styles.layer20Wrapper}>
//               <Image
//                 src="/assets/layer20.png"
//                 alt=""
//                 fill
//                 className={styles.layer20Image}
//               />
//             </div>
//           </div>
//           <div className={styles.modelBlurryWrapper} ref={modelBlurRef}>
//             <Image
//               src="/assets/model-blurry.png"
//               alt=""
//               fill
//               className={styles.modelBlurry}
//             />
//           </div>
//           <div className={styles.modelShadowWrapper}>
//             <Image
//               src="/assets/model-shadow.png"
//               alt=""
//               fill
//               className={styles.modelShadow}
//             />
//           </div>
//           <div className={styles.modelMainWrapper} ref={modelMainRef}>
//             <Image
//               src="/assets/model-main.png"
//               alt="Fashion model"
//               fill
//               className={styles.modelMain}
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function AboutSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightColRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dustRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelMainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelBlurRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                defaults: {
                    ease: 'power3.out'
                }
            });
            tl.fromTo(titleRef.current, {
                x: -140,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: 1.4
            }, 0.3);
            tl.fromTo(rightColRef.current, {
                x: 180,
                scale: 0.85,
                opacity: 0
            }, {
                x: 0,
                scale: 1,
                opacity: 1,
                duration: 1.6,
                clearProps: 'scale'
            }, 0.5);
            tl.fromTo(bodyRef.current, {
                y: 80,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1.2
            }, 0.9);
            if (modelMainRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(modelMainRef.current, {
                yPercent: -8,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.2
                }
            });
            if (modelBlurRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(modelBlurRef.current, {
                yPercent: -12,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(titleRef.current, {
                yPercent: -25,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(bodyRef.current, {
                yPercent: -15,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.3
                }
            });
            if (boardRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(boardRef.current, {
                scale: 1.04,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 2
                }
            });
        }, sectionRef);
        return ()=>ctx.revert();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dustWrapper,
                ref: dustRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/dust.png",
                    alt: "",
                    fill: true,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dustImage
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/About.tsx",
                    lineNumber: 279,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/About.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftCol,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleWrapper,
                                ref: titleRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/about-us-title.png",
                                    alt: "About Us",
                                    width: 700,
                                    height: 160,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].titleImage,
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/About.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/About.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bodyText,
                                ref: bodyRef,
                                children: [
                                    "Innofashion Show is an annual event organized by the Fashion Design and Textile Program at Petra Christian University. In 2026, the event will enter its 8th year. This annual show is regularly held as a platform to appreciate the academic achievements of final year DFT students.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/frontend/src/components/About.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/frontend/src/components/About.tsx",
                                        lineNumber: 289,
                                        columnNumber: 18
                                    }, this),
                                    "The theme of Innofashion Show 8 is “Zerith,” which comes from the word “zenith,” meaning the highest point of a journey. This theme symbolizes the peak of the creative process, struggles, and learning experiences of DFT students. Through this theme, Innofashion Show 8 is expected to serve as a bridge for DFT students and young individuals interested in the fashion world to encourage the emergence of new collaborations and innovations within the fashion industry."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/About.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/About.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightCol,
                        ref: rightColRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].boardWrapper,
                                ref: boardRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/board-frame.png",
                                        alt: "",
                                        fill: true,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].boardFrame
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/About.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layer20Wrapper,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/layer20.png",
                                            alt: "",
                                            fill: true,
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].layer20Image
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/About.tsx",
                                            lineNumber: 298,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/About.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/About.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modelBlurryWrapper,
                                ref: modelBlurRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/model-blurry.png",
                                    alt: "",
                                    fill: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modelBlurry
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/About.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/About.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modelShadowWrapper,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/model-shadow.png",
                                    alt: "",
                                    fill: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modelShadow
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/About.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/About.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modelMainWrapper,
                                ref: modelMainRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/model-main.png",
                                    alt: "Fashion model",
                                    fill: true,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$about$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].modelMain,
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/About.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/About.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/About.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/About.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/About.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/Timeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelinePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
// 'use client'
// import Image from 'next/image'
// import React, { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)
// // ─────────────────────────────────────────────────────────────────────────────
// // DATA
// // ─────────────────────────────────────────────────────────────────────────────
// interface EventLabel {
//   date: string
//   name: string
// }
// type Side = 'left' | 'right'
// interface TimelineNode {
//   side: Side
//   label?: EventLabel
// }
// const nodes: TimelineNode[] = [
//   { side: 'left',  label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
//   { side: 'right', label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
//   { side: 'left',  label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
//   { side: 'right', label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
//   { side: 'left',  label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
//   { side: 'right', label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
//   { side: 'left',  label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
//   { side: 'right', label: { date: 'Tgl, Bln, Thn', name: 'Nama Event' } },
// ]
// // ─────────────────────────────────────────────────────────────────────────────
// // Constants
// // ─────────────────────────────────────────────────────────────────────────────
// const DOT_SIZE   = 16
// const ROW_H      = 105
// const ARM_LEN    = 110
// const LINE_W     = 2.5
// const LINE_COLOR = 'rgba(255,255,255,0.55)'
// const dateStyle: React.CSSProperties = {
//   color: '#ffffff',
//   fontWeight: 700,
//   lineHeight: 1.3,
//   fontFamily: "'Creato Display', sans-serif",
//   textShadow: '0 1px 8px rgba(0,0,0,0.95)',
//   whiteSpace: 'nowrap',
//   letterSpacing: '0.02em',
//   margin: 0,
// }
// const nameStyle: React.CSSProperties = {
//   color: '#c0c0c0',
//   fontStyle: 'italic',
//   lineHeight: 1.4,
//   fontFamily: "'Creato Display', sans-serif",
//   textShadow: '0 1px 8px rgba(0,0,0,0.95)',
//   whiteSpace: 'nowrap',
//   margin: 0,
// }
// // ─────────────────────────────────────────────────────────────────────────────
// // Dot
// // ─────────────────────────────────────────────────────────────────────────────
// function Dot({ size = DOT_SIZE }: { size?: number }) {
//   return (
//     <div
//       style={{
//         width: size,
//         height: size,
//         minWidth: size,
//         minHeight: size,
//         borderRadius: '50%',
//         background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
//         border: '1.5px solid rgba(255,255,255,0.5)',
//         boxShadow: '0 0 8px rgba(255,255,255,0.3)',
//         flexShrink: 0,
//       }}
//     />
//   )
// }
// // ─────────────────────────────────────────────────────────────────────────────
// // PAGE
// // ─────────────────────────────────────────────────────────────────────────────
// export default function TimelinePage() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const titleRef = useRef<HTMLDivElement>(null)
//   const nodesRef = useRef<(HTMLDivElement | null)[]>([])
//   const pillarRef = useRef<HTMLDivElement>(null)
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Title — fade in + scale from center (triggers when title enters viewport)
//       gsap.from(titleRef.current, {
//         scale: 0.8,
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: 'top 95%',
//           toggleActions: 'play none none reverse',
//         },
//       })
//       // Timeline nodes — each node animates individually when it scrolls into view
//       nodesRef.current.forEach((node, idx) => {
//         if (!node) return
//         const isLeft = nodes[idx].side === 'left'
//         // Set initial state hidden
//         gsap.set(node, { opacity: 0, x: isLeft ? -60 : 60 })
//         // Animate in when the node's top reaches 80% of the viewport
//         gsap.to(node, {
//           x: 0,
//           opacity: 1,
//           duration: 0.7,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: node,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse',
//           },
//         })
//         // Dot glow pulse on enter
//         const dot = node.querySelector('.tl-dot')
//         if (dot) {
//           gsap.fromTo(dot, {
//             boxShadow: '0 0 8px rgba(255,255,255,0.3)',
//           }, {
//             boxShadow: '0 0 24px rgba(255,255,255,0.9), 0 0 48px rgba(255,255,255,0.4)',
//             duration: 0.6,
//             ease: 'power2.inOut',
//             yoyo: true,
//             repeat: 1,
//             scrollTrigger: {
//               trigger: node,
//               start: 'top 75%',
//               toggleActions: 'play none none none',
//             },
//           })
//         }
//       })
//       // Vertical pillar grows as you scroll through the bracket area
//       if (pillarRef.current) {
//         gsap.from(pillarRef.current, {
//           scaleY: 0,
//           transformOrigin: 'top center',
//           ease: 'none',
//           scrollTrigger: {
//             trigger: pillarRef.current,
//             start: 'top 80%',
//             end: 'bottom 50%',
//             scrub: 0.6,
//           },
//         })
//       }
//     }, sectionRef)
//     return () => ctx.revert()
//   }, [])
//   return (
//     <div
//       ref={sectionRef}
//       style={{
//         position: 'relative',
//         width: '100%',
//         minHeight: '100vh',
//         overflow: 'clip',
//         overflowY: 'visible',
//         background: 'transparent',
//       }}
//     >
//       {/* ── Background fabric ── */}
//       <div style={{ position: 'absolute', inset: 0, zIndex: 0, maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
//         <Image
//           src="/assets/Layer 32.png"
//           alt="background"
//           fill
//           style={{ objectFit: 'cover', objectPosition: 'center top' }}
//           priority
//           unoptimized
//         />
//       </div>
//       {/* ── Dust overlays ── */}
//       <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.28, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
//         <Image src="/assets/DUST.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
//       </div>
//       <div style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.15, pointerEvents: 'none', maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
//         <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover' }} unoptimized />
//       </div>
//       {/* ── Content ── */}
//       <div className="tl-content">
//         {/* ── "TIME LINE" title with dust decorations ── */}
//         <div className="tl-title-area" ref={titleRef}>
//           {/* Title image + dust decorations anchored to the image */}
//           <div style={{ position: 'relative', zIndex: 1, width: 580, maxWidth: '75%' }}>
//             {/* Dust behind "T" — absolute to image, stays on T */}
//             <div
//               style={{
//                 position: 'absolute',
//                 left: '-15%',
//                 top: '50%',
//                 transform: 'translate(-20%, -50%)',
//                 width: 280,
//                 height: 220,
//                 opacity: 0.75,
//                 pointerEvents: 'none',
//                 zIndex: -1,
//               }}
//             >
//               <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} unoptimized />
//             </div>
//             {/* Dust behind "E" — absolute to image, stays on E */}
//             <div
//               style={{
//                 position: 'absolute',
//                 right: '-15%',
//                 top: '50%',
//                 transform: 'translate(20%, -50%)',
//                 width: 280,
//                 height: 220,
//                 opacity: 0.75,
//                 pointerEvents: 'none',
//                 zIndex: -1,
//               }}
//             >
//               <Image src="/assets/DUST-1.png" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center' }} unoptimized />
//             </div>
//             <Image
//               src="/assets/TIME LINE.png"
//               alt="TIME LINE"
//               width={580}
//               height={145}
//               style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
//               unoptimized
//             />
//           </div>
//         </div>
//         {/* ── Bracket container — scales down on small screens ── */}
//         <div className="tl-bracket-wrapper">
//           <div
//             ref={pillarRef}
//             style={{
//               position: 'relative',
//               display: 'flex',
//               flexDirection: 'column',
//               borderStyle: 'none',
//             }}
//           >
//             {nodes.map((node, idx) => {
//               const isLeft = node.side === 'left'
//               const isFirst = idx === 0
//               const isLast = idx === nodes.length - 1
//               return (
//                 <div
//                   key={idx}
//                   ref={(el) => { nodesRef.current[idx] = el }}
//                 >
//                   {/* Row: left-side | pillar | right-side */}
//                   <div
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       height: ROW_H,
//                     }}
//                   >
//                     {/* ═══ LEFT SIDE ═══ */}
//                     <div
//                       className="tl-side tl-side-left"
//                     >
//                       {isLeft && node.label && (
//                         <div style={{ textAlign: 'right', marginRight: 14 }}>
//                           <p className="tl-date" style={dateStyle}>{node.label.date}</p>
//                           <p className="tl-name" style={nameStyle}>{node.label.name}</p>
//                         </div>
//                       )}
//                       {isLeft && (
//                         <div
//                           className="tl-dot"
//                           style={{
//                             width: DOT_SIZE,
//                             height: DOT_SIZE,
//                             minWidth: DOT_SIZE,
//                             minHeight: DOT_SIZE,
//                             borderRadius: '50%',
//                             background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
//                             border: '1.5px solid rgba(255,255,255,0.5)',
//                             boxShadow: '0 0 8px rgba(255,255,255,0.3)',
//                             flexShrink: 0,
//                           }}
//                         />
//                       )}
//                       <div
//                         className="tl-arm"
//                         style={{
//                           width: isLeft ? ARM_LEN : 0,
//                           height: LINE_W,
//                           background: isLeft ? LINE_COLOR : 'transparent',
//                         }}
//                       />
//                     </div>
//                     {/* ═══ PILLAR ═══ */}
//                     <div
//                       style={{
//                         width: LINE_W,
//                         height: '100%',
//                         background: (isFirst || isLast) ? 'transparent' : LINE_COLOR,
//                         position: 'relative',
//                         flexShrink: 0,
//                       }}
//                     >
//                       {isFirst && (
//                         <div style={{ position: 'absolute', left: 0, top: '50%', bottom: 0, width: LINE_W, background: LINE_COLOR }} />
//                       )}
//                       {isLast && (
//                         <div style={{ position: 'absolute', left: 0, top: 0, height: '50%', width: LINE_W, background: LINE_COLOR }} />
//                       )}
//                     </div>
//                     {/* ═══ RIGHT SIDE ═══ */}
//                     <div
//                       className="tl-side tl-side-right"
//                     >
//                       <div
//                         className="tl-arm"
//                         style={{
//                           width: isLeft ? 0 : ARM_LEN,
//                           height: LINE_W,
//                           background: isLeft ? 'transparent' : LINE_COLOR,
//                         }}
//                       />
//                       {!isLeft && (
//                         <div
//                           className="tl-dot"
//                           style={{
//                             width: DOT_SIZE,
//                             height: DOT_SIZE,
//                             minWidth: DOT_SIZE,
//                             minHeight: DOT_SIZE,
//                             borderRadius: '50%',
//                             background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
//                             border: '1.5px solid rgba(255,255,255,0.5)',
//                             boxShadow: '0 0 8px rgba(255,255,255,0.3)',
//                             flexShrink: 0,
//                           }}
//                         />
//                       )}
//                       {!isLeft && node.label && (
//                         <div style={{ textAlign: 'left', marginLeft: 14 }}>
//                           <p className="tl-date" style={dateStyle}>{node.label.date}</p>
//                           <p className="tl-name" style={nameStyle}>{node.label.name}</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//       <style>{`
//         .tl-content {
//           position: relative;
//           z-index: 10;
//           min-height: 100vh;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 80px 24px 100px;
//         }
//         .tl-title-area {
//           position: relative;
//           width: 100%;
//           max-width: 900px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-bottom: 56px;
//         }
//         /* Reset Tailwind preflight borders on timeline containers */
//         .tl-bracket-wrapper,
//         .tl-bracket-wrapper > div,
//         .tl-bracket-wrapper > div > div,
//         .tl-bracket-wrapper > div > div > div,
//         .tl-side,
//         .tl-arm {
//           border-style: none;
//         }
//         /* ── Bracket wrapper ── */
//         .tl-bracket-wrapper {
//           overflow-x: hidden;
//           width: 100%;
//           display: flex;
//           justify-content: center;
//         }
//         /* ── Side containers ── */
//         .tl-side {
//           display: flex;
//           align-items: center;
//           flex-shrink: 0;
//           border: none;
//         }
//         .tl-side-left {
//           justify-content: flex-end;
//           width: 306px;
//         }
//         .tl-side-right {
//           justify-content: flex-start;
//           width: 306px;
//         }
//         .tl-date {
//           font-size: 20px;
//         }
//         .tl-name {
//           font-size: 15px;
//         }
//         .tl-arm {
//           transition: width 0.3s ease;
//         }
//         @media (max-width: 768px) {
//           .tl-side-left,
//           .tl-side-right {
//             width: 220px;
//           }
//           .tl-arm {
//             width: 60px !important;
//           }
//           .tl-date {
//             font-size: 16px;
//           }
//           .tl-name {
//             font-size: 13px;
//           }
//         }
//         @media (max-width: 480px) {
//           .tl-side-left,
//           .tl-side-right {
//             width: 160px;
//           }
//           .tl-arm {
//             width: 36px !important;
//           }
//           .tl-date {
//             font-size: 14px;
//           }
//           .tl-name {
//             font-size: 12px;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const nodes = [
    {
        side: 'left',
        label: {
            date: 'Mar 23, 2026',
            name: 'Open Registration'
        }
    },
    {
        side: 'right',
        label: {
            date: 'May 18, 2026',
            name: 'Seminar: What Makes It Fashion'
        }
    },
    {
        side: 'left',
        label: {
            date: 'May 22, 2026',
            name: 'Workshop: Pretty Little Daredevil'
        }
    },
    {
        side: 'right',
        label: {
            date: 'May 29, 2026',
            name: 'Workshop: Trinkets (TBA)'
        }
    },
    {
        side: 'left',
        label: {
            date: 'Jul 30, 2026',
            name: 'Competition Deadline'
        }
    },
    {
        side: 'right',
        label: {
            date: 'Jul 31, 2026',
            name: 'Briefing Restyling'
        }
    },
    {
        side: 'left',
        label: {
            date: 'To Be Announced',
            name: 'Grand Exhibition'
        }
    },
    {
        side: 'right',
        label: {
            date: 'Aug 13, 2026',
            name: 'Graduation Show & Awarding'
        }
    }
];
// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const DOT_SIZE = 16;
const ROW_H = 105;
const ARM_LEN = 110;
const LINE_W = 2.5;
const LINE_COLOR = 'rgba(255,255,255,0.55)';
const dateStyle = {
    color: '#ffffff',
    fontWeight: 700,
    lineHeight: 1.3,
    fontFamily: "'Creato Display', sans-serif",
    textShadow: '0 1px 8px rgba(0,0,0,0.95)',
    whiteSpace: 'nowrap',
    letterSpacing: '0.02em',
    margin: 0
};
const nameStyle = {
    color: '#c0c0c0',
    fontStyle: 'italic',
    lineHeight: 1.4,
    fontFamily: "'Creato Display', sans-serif",
    textShadow: '0 1px 8px rgba(0,0,0,0.95)',
    whiteSpace: 'nowrap',
    margin: 0
};
function TimelinePage() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pillarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            // Title — fade in + scale from center (triggers when title enters viewport)
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(titleRef.current, {
                scale: 0.8,
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: 'top 95%',
                    toggleActions: 'play none none reverse'
                }
            });
            // Timeline nodes — each node animates individually when it scrolls into view
            nodesRef.current.forEach((node, idx)=>{
                if (!node) return;
                const isLeft = nodes[idx].side === 'left';
                // Set initial state hidden
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(node, {
                    opacity: 0,
                    x: isLeft ? -60 : 60
                });
                // Animate in when the node's top reaches 80% of the viewport
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(node, {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: node,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                });
                // Dot glow pulse on enter
                const dot = node.querySelector('.tl-dot');
                if (dot) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(dot, {
                        boxShadow: '0 0 8px rgba(255,255,255,0.3)'
                    }, {
                        boxShadow: '0 0 24px rgba(255,255,255,0.9), 0 0 48px rgba(255,255,255,0.4)',
                        duration: 0.6,
                        ease: 'power2.inOut',
                        yoyo: true,
                        repeat: 1,
                        scrollTrigger: {
                            trigger: node,
                            start: 'top 75%',
                            toggleActions: 'play none none none'
                        }
                    });
                }
            });
            // Vertical pillar grows as you scroll through the bracket area
            if (pillarRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(pillarRef.current, {
                    scaleY: 0,
                    transformOrigin: 'top center',
                    ease: 'none',
                    scrollTrigger: {
                        trigger: pillarRef.current,
                        start: 'top 80%',
                        end: 'bottom 50%',
                        scrub: 0.6
                    }
                });
            }
        }, sectionRef);
        return ()=>ctx.revert();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        style: {
            position: 'relative',
            width: '100%',
            minHeight: '100vh',
            overflow: 'clip',
            overflowY: 'visible',
            background: 'transparent'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 1,
                    opacity: 0.28,
                    pointerEvents: 'none',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/DUST.png",
                    alt: "",
                    fill: true,
                    style: {
                        objectFit: 'cover'
                    },
                    unoptimized: true
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Timeline.tsx",
                    lineNumber: 649,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Timeline.tsx",
                lineNumber: 648,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    opacity: 0.15,
                    pointerEvents: 'none',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/DUST-1.png",
                    alt: "",
                    fill: true,
                    style: {
                        objectFit: 'cover'
                    },
                    unoptimized: true
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/Timeline.tsx",
                    lineNumber: 652,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Timeline.tsx",
                lineNumber: 651,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-title-area",
                        ref: titleRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'relative',
                                zIndex: 1,
                                width: 580,
                                maxWidth: '75%'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        left: '-15%',
                                        top: '50%',
                                        transform: 'translate(-20%, -50%)',
                                        width: 280,
                                        height: 220,
                                        opacity: 0.75,
                                        pointerEvents: 'none',
                                        zIndex: -1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/DUST-1.png",
                                        alt: "",
                                        fill: true,
                                        style: {
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        },
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Timeline.tsx",
                                    lineNumber: 662,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        right: '-15%',
                                        top: '50%',
                                        transform: 'translate(20%, -50%)',
                                        width: 280,
                                        height: 220,
                                        opacity: 0.75,
                                        pointerEvents: 'none',
                                        zIndex: -1
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/assets/DUST-1.png",
                                        alt: "",
                                        fill: true,
                                        style: {
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        },
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                        lineNumber: 692,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Timeline.tsx",
                                    lineNumber: 679,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/TIME LINE.png",
                                    alt: "TIME LINE",
                                    width: 580,
                                    height: 145,
                                    style: {
                                        width: '100%',
                                        height: 'auto',
                                        position: 'relative',
                                        zIndex: 1
                                    },
                                    unoptimized: true
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/Timeline.tsx",
                                    lineNumber: 695,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/Timeline.tsx",
                            lineNumber: 660,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                        lineNumber: 658,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-bracket-wrapper",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: pillarRef,
                            style: {
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                borderStyle: 'none'
                            },
                            children: nodes.map((node, idx)=>{
                                const isLeft = node.side === 'left';
                                const isFirst = idx === 0;
                                const isLast = idx === nodes.length - 1;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>{
                                        nodesRef.current[idx] = el;
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            height: ROW_H
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-side tl-side-left",
                                                children: [
                                                    isLeft && node.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'right',
                                                            marginRight: 14
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "tl-date",
                                                                style: dateStyle,
                                                                children: node.label.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "tl-name",
                                                                style: nameStyle,
                                                                children: node.label.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                                lineNumber: 742,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 25
                                                    }, this),
                                                    isLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-dot",
                                                        style: {
                                                            width: DOT_SIZE,
                                                            height: DOT_SIZE,
                                                            minWidth: DOT_SIZE,
                                                            minHeight: DOT_SIZE,
                                                            borderRadius: '50%',
                                                            background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
                                                            border: '1.5px solid rgba(255,255,255,0.5)',
                                                            boxShadow: '0 0 8px rgba(255,255,255,0.3)',
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                        lineNumber: 746,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-arm",
                                                        style: {
                                                            width: isLeft ? ARM_LEN : 0,
                                                            height: LINE_W,
                                                            background: isLeft ? LINE_COLOR : 'transparent'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                        lineNumber: 761,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                lineNumber: 736,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: LINE_W,
                                                    height: '100%',
                                                    background: isFirst || isLast ? 'transparent' : LINE_COLOR,
                                                    position: 'relative',
                                                    flexShrink: 0
                                                },
                                                children: [
                                                    isFirst && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: '50%',
                                                            bottom: 0,
                                                            width: LINE_W,
                                                            background: LINE_COLOR
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                        lineNumber: 782,
                                                        columnNumber: 25
                                                    }, this),
                                                    isLast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            left: 0,
                                                            top: 0,
                                                            height: '50%',
                                                            width: LINE_W,
                                                            background: LINE_COLOR
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                        lineNumber: 785,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                lineNumber: 772,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-side tl-side-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-arm",
                                                        style: {
                                                            width: isLeft ? 0 : ARM_LEN,
                                                            height: LINE_W,
                                                            background: isLeft ? 'transparent' : LINE_COLOR
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 23
                                                    }, this),
                                                    !isLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-dot",
                                                        style: {
                                                            width: DOT_SIZE,
                                                            height: DOT_SIZE,
                                                            minWidth: DOT_SIZE,
                                                            minHeight: DOT_SIZE,
                                                            borderRadius: '50%',
                                                            background: 'radial-gradient(circle at 38% 35%, #d8d8d8, #5a5a5a)',
                                                            border: '1.5px solid rgba(255,255,255,0.5)',
                                                            boxShadow: '0 0 8px rgba(255,255,255,0.3)',
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                        lineNumber: 802,
                                                        columnNumber: 25
                                                    }, this),
                                                    !isLeft && node.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            textAlign: 'left',
                                                            marginLeft: 14
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "tl-date",
                                                                style: dateStyle,
                                                                children: node.label.date
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "tl-name",
                                                                style: nameStyle,
                                                                children: node.label.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                                lineNumber: 820,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                        lineNumber: 818,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/Timeline.tsx",
                                                lineNumber: 790,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                                        lineNumber: 728,
                                        columnNumber: 19
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/frontend/src/components/Timeline.tsx",
                                    lineNumber: 723,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/Timeline.tsx",
                            lineNumber: 708,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/Timeline.tsx",
                        lineNumber: 707,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/Timeline.tsx",
                lineNumber: 656,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        .tl-content {
          position: relative;
          z-index: 10;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 80px 24px 100px;
        }

        .tl-title-area {
          position: relative;
          width: 100%;
          max-width: 900px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 56px;
        }

        /* Reset Tailwind preflight borders on timeline containers */
        .tl-bracket-wrapper,
        .tl-bracket-wrapper > div,
        .tl-bracket-wrapper > div > div,
        .tl-bracket-wrapper > div > div > div,
        .tl-side,
        .tl-arm {
          border-style: none;
        }

        /* ── Bracket wrapper ── */
        .tl-bracket-wrapper {
          overflow-x: hidden;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        /* ── Side containers ── */
        .tl-side {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          border: none;
        }
        .tl-side-left {
          justify-content: flex-end;
          width: 306px;
        }
        .tl-side-right {
          justify-content: flex-start;
          width: 306px;
        }

        .tl-date {
          font-size: 20px;
        }
        .tl-name {
          font-size: 15px;
        }
        .tl-arm {
          transition: width 0.3s ease;
        }

        @media (max-width: 768px) {
          .tl-side-left,
          .tl-side-right {
            width: 220px;
          }
          .tl-arm {
            width: 60px !important;
          }
          .tl-date {
            font-size: 16px;
          }
          .tl-name {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .tl-side-left,
          .tl-side-right {
            width: 160px;
          }
          .tl-arm {
            width: 36px !important;
          }
          .tl-date {
            font-size: 14px;
          }
          .tl-name {
            font-size: 12px;
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/Timeline.tsx",
                lineNumber: 832,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/Timeline.tsx",
        lineNumber: 634,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/ContactUs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
// 'use client'
// import Image from 'next/image'
// import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)
// const contacts = [
//   {
//     platformIcon: null,
//     username: '@innofashionshow.pcu',
//     href: 'https://instagram.com/innofashionshow.pcu',
//     type: 'instagram',
//   },
//   {
//     platformIcon: '/assets/LOGO LINE.png',
//     username: '@182dplyt',
//     href: '#',
//     type: 'line',
//   },
//   {
//     platformIcon: '/assets/LOGO TIKTOK.png',
//     username: '@innofashionshow',
//     href: 'https://tiktok.com/@innofashionshow',
//     type: 'tiktok',
//   },
// ]
// const InstagramIcon = ({ size = 32 }: { size?: number }) => (
//   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//     <circle cx="12" cy="12" r="4.5"/>
//     <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
//   </svg>
// )
// export default function ContactPage() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const modelRef = useRef<HTMLDivElement>(null)
//   const titleRef = useRef<HTMLDivElement>(null)
//   const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Model — slide in from left
//       gsap.from(modelRef.current, {
//         x: -150,
//         opacity: 0,
//         duration: 1.3,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 60%',
//           end: 'top 20%',
//           toggleActions: 'play none none reverse',
//         },
//       })
//       // Title — slide in from right
//       gsap.from(titleRef.current, {
//         x: 120,
//         opacity: 0,
//         duration: 1.1,
//         ease: 'power3.out',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top 55%',
//           end: 'top 20%',
//           toggleActions: 'play none none reverse',
//         },
//       })
//       // Contact cards — staggered fade in from bottom
//       cardsRef.current.forEach((card, i) => {
//         if (!card) return
//         gsap.from(card, {
//           y: 50,
//           opacity: 0,
//           duration: 0.7,
//           delay: i * 0.12,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 50%',
//             end: 'top 15%',
//             toggleActions: 'play none none reverse',
//           },
//         })
//       })
//     }, sectionRef)
//     return () => ctx.revert()
//   }, [])
//   return (
//     <div className="contact-root" ref={sectionRef}>
//       <div style={{ position: 'absolute', inset: 0, zIndex: 0, maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 100%)' }}>
//         <Image src="/assets/Layer 31.png" alt="background" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority />
//       </div>
//       <div style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none', background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.40) 100%)' }} />
//       <div className="contact-content">
//         <div className="contact-model" ref={modelRef}>
//           <Image
//             src="/assets/ASET ORANG SHADOW (KALO KURANG JELAS).png"
//             alt="model shadow"
//             fill
//             style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
//           />
//           <Image
//             src="/assets/DUST ABU.png"
//             alt="dust"
//             fill
//             style={{ objectFit: 'contain', objectPosition: 'bottom center', transform: 'translateX(-10%)' }}
//           />
//           <Image
//             src="/assets/DUST KUNING.png"
//             alt="dust"
//             fill
//             style={{ objectFit: 'contain', objectPosition: 'bottom center', transform: 'translateX(15%)' }}
//           />
//           <Image
//             src="/assets/ASET ORANG.png"
//             alt="model"
//             fill
//             style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
//           />
//         </div>
//         <div className="contact-right">
//           <div className="contact-title-wrap" ref={titleRef}>
//             <Image
//               src="/assets/CONTACT US.png"
//               alt="CONTACT US"
//               fill
//               style={{ objectFit: 'contain', objectPosition: 'center', top: '10%' }}
//             />
//           </div>
//           <div className="contact-cards">
//             {contacts.map((contact, i) => (
//               <a
//                 key={contact.type}
//                 href={contact.href}
//                 className="contact-card"
//                 ref={(el) => { cardsRef.current[i] = el }}
//                 onMouseEnter={e => {
//                   const el = e.currentTarget as HTMLElement
//                   el.style.background = 'rgba(80,80,80,0.75)'
//                   el.style.transform = 'translateY(-3px)'
//                 }}
//                 onMouseLeave={e => {
//                   const el = e.currentTarget as HTMLElement
//                   el.style.background = 'rgba(50,50,50,0.62)'
//                   el.style.transform = 'translateY(0)'
//                 }}
//               >
//                 <div className="card-shine" />
//                 <div className="card-icon">
//                   {contact.type === 'instagram' ? (
//                     <InstagramIcon />
//                   )
//                   : (
//                     <Image src={contact.platformIcon!} alt={contact.type} fill style={{ objectFit: 'contain' }} />
//                   )}
//                 </div>
//                 <span className="card-username">{contact.username}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//       <style>{`
//         /* ─── Root ─────────────────────────────────────────── */
//         .contact-root {
//           width: 100vw;
//           min-height: 100vh;
//           position: relative;
//           overflow: hidden;
//           background-color: transparent;
//           font-family: var(--font-creato-title);
//         }
//         /* ─── Main layout ───────────────────────────────────── */
//         .contact-content {
//           position: relative;
//           z-index: 10;
//           display: flex;
//           flex-direction: row;        /* desktop: side by side */
//           height: 100vh;
//         }
//         /* ─── LEFT: Model ───────────────────────────────────── */
//         .contact-model {
//           margin-left: 5%;
//           flex: 0 0 40%;
//           position: relative;
//           height: 100%;
//         }
//         /* ─── RIGHT: Content ────────────────────────────────── */
//         .contact-right {
//           flex: 0 0 50%;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-start;
//           align-items: center;
//           padding-top: 2%;
//           padding-left: 0;
//           gap: 0;
//         }
//         /* ─── Title ─────────────────────────────────────────── */
//         .contact-title-wrap {
//           position: relative;
//           width: 100%;
//           height: clamp(120px, 26vh, 240px);
//           margin-bottom: 6vh;
//           align-self: flex-end;
//         }
//         /* ─── Cards container ───────────────────────────────── */
//         .contact-cards {
//           display: flex;
//           flex-direction: column;
//           gap: 30px !important;
//           width: 75%;
//           max-width: 380px;
//           marin-top: 5vh !important;
//         }
//         /* ─── Single Card ───────────────────────────────────── */
//         .contact-card {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           gap: 3px;
//           padding: clamp(5px, 0.8vh, 10px) 16px;
//           background: rgba(50, 50, 50, 0.62);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border-radius: 50px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           box-shadow: inset 0 1px 1px rgba(255,255,255,0.12), 0 6px 24px rgba(0,0,0,0.35);
//           cursor: pointer;
//           text-decoration: none;
//           position: relative;
//           overflow: hidden;
//           transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
//         }
//         .card-shine {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%);
//           border-radius: 50px;
//           pointer-events: none;
//         }
//         .card-icon {
//           width: clamp(40px, 6vw, 60px);
//           height: clamp(40px, 6vw, 60px);
//           position: relative;
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .card-username {
//           color: rgba(255, 255, 255, 0.88);
//           font-size: clamp(10px, 1.2vw, 14px);
//           letter-spacing: 0.02em;
//           font-weight: 400;
//           text-align: center;
//           line-height: 1.2;
//         }
// /* --- TABLET (≤ 900px) --- */
// @media (max-width: 900px) {
//   .contact-model { 
//     flex: 0 0 38%; 
//   }
//   .contact-right {
//     flex: 0 0 62%;
//     padding-right: 24px;
//     padding-top: 8% !important; /* Tambah padding atas agar konten turun */
//     gap: 0px; 
//   }
//   .contact-title-wrap { 
//     height: 100px !important; 
//     margin-bottom: 20px !important; 
//     position: relative !important;
//   }
//   .contact-cards { 
//     width: 85%; 
//     max-width: 320px; 
//     display: flex !important;
//     flex-direction: column !important;
//     /* Jarak antar tombol di tablet */
//     gap: 18px !important; 
//     /* Menurunkan tombol di tablet */
//     margin-top: 30px !important; 
//   }
//   .contact-card {
//     margin-bottom: 0px !important; 
//   }
// }
//         /* ─── MOBILE (≤ 600px): stack vertikal ─────────────── */
//         @media (max-width: 600px) {
//           .contact-root { min-height: 100dvh; }
//           .contact-content {
//             flex-direction: column;      /* stack vertikal */
//             height: auto;
//             min-height: 100dvh;
//           }
//           /* Model di atas, lebih kecil */
//           .contact-model {
//             flex: none;
//             width: 100%;
//             height: 42vw;               /* proporsional sama width */
//             min-height: 180px;
//             max-height: 280px;
//           }
//           /* Konten di bawah model */
//           .contact-right {
//             flex: none;
//             width: 100%;
//             padding: 16px 20px 32px;
//             justify-content: flex-start;
//             align-items: center;
//             gap: 30px;
//           }
//           .contact-title-wrap {
//             height: clamp(60px, 18vw, 100px);
//             margin-bottom: 16px;
//             align-self: center;
//           }
//           .contact-cards {
//             width: 92%;
//             max-width: 380px;
//             gap: 25px !important;
//           }
//           .contact-card {
//             padding: 10px 20px;
//             gap: 4px;
//           }
//           .card-icon {
//             width: 28px;
//             height: 28px;
//           }
//           .card-username { font-size: clamp(9px, 3.2vw, 13px); }
//         }
//         /* ─── SMALL MOBILE (≤ 380px) ────────────────────────── */
//         @media (max-width: 380px) {
//           .contact-model { height: 38vw; min-height: 150px; }
//           .contact-cards { width: 96%; }
//           .card-username { font-size: 10px; }
//         }
//       `}</style>
//     </div>
//   )
// }
'use client';
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const contacts = [
    {
        platformIcon: null,
        username: '@innofashionshow.pcu',
        href: 'https://instagram.com/innofashionshow.pcu',
        type: 'instagram'
    },
    {
        platformIcon: '/assets/LOGO LINE.png',
        username: '@182dplyt',
        href: '#',
        type: 'line'
    },
    {
        platformIcon: '/assets/LOGO TIKTOK.png',
        username: '@innofashionshow',
        href: 'https://tiktok.com/@innofashionshow',
        type: 'tiktok'
    }
];
const InstagramIcon = ({ size = 32 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "white",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "20",
                height: "20",
                rx: "5",
                ry: "5"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                lineNumber: 419,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "4.5"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                lineNumber: 420,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "17.5",
                cy: "6.5",
                r: "1",
                fill: "white",
                stroke: "none"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                lineNumber: 421,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/ContactUs.tsx",
        lineNumber: 418,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
function ContactPage() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            // Model — slide in from left
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(modelRef.current, {
                x: -150,
                opacity: 0,
                duration: 1.3,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 60%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                }
            });
            // Title — slide in from right
            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(titleRef.current, {
                x: 120,
                opacity: 0,
                duration: 1.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 55%',
                    end: 'top 20%',
                    toggleActions: 'play none none reverse'
                }
            });
            // Contact cards — staggered fade in from bottom
            cardsRef.current.forEach((card, i)=>{
                if (!card) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(card, {
                    y: 50,
                    opacity: 0,
                    duration: 0.7,
                    delay: i * 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 50%',
                        end: 'top 15%',
                        toggleActions: 'play none none reverse'
                    }
                });
            });
        }, sectionRef);
        return ()=>ctx.revert();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "contact-root",
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-model",
                        ref: modelRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/ASET ORANG SHADOW (KALO KURANG JELAS).png",
                                alt: "model shadow",
                                fill: true,
                                style: {
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/DUST ABU.png",
                                alt: "dust",
                                fill: true,
                                style: {
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center',
                                    transform: 'translateX(-10%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                lineNumber: 497,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/DUST KUNING.png",
                                alt: "dust",
                                fill: true,
                                style: {
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center',
                                    transform: 'translateX(15%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/assets/ASET ORANG.png",
                                alt: "model",
                                fill: true,
                                style: {
                                    objectFit: 'contain',
                                    objectPosition: 'bottom center'
                                }
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/ContactUs.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "contact-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-title-wrap",
                                ref: titleRef,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/CONTACT US.png",
                                    alt: "CONTACT US",
                                    fill: true,
                                    style: {
                                        objectFit: 'contain',
                                        objectPosition: 'center',
                                        top: '10%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                lineNumber: 518,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "contact-cards",
                                children: contacts.map((contact, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: contact.href,
                                        className: "contact-card",
                                        ref: (el)=>{
                                            cardsRef.current[i] = el;
                                        },
                                        onMouseEnter: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = 'rgba(80,80,80,0.75)';
                                            el.style.transform = 'translateY(-3px)';
                                        },
                                        onMouseLeave: (e)=>{
                                            const el = e.currentTarget;
                                            el.style.background = 'rgba(50,50,50,0.62)';
                                            el.style.transform = 'translateY(0)';
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-shine"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                                lineNumber: 545,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "card-icon",
                                                children: contact.type === 'instagram' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramIcon, {}, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: contact.platformIcon,
                                                    alt: contact.type,
                                                    fill: true,
                                                    style: {
                                                        objectFit: 'contain'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                                    lineNumber: 551,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                                lineNumber: 546,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "card-username",
                                                children: contact.username
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                                lineNumber: 554,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, contact.type, true, {
                                        fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                        lineNumber: 529,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                                lineNumber: 527,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/ContactUs.tsx",
                        lineNumber: 517,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                lineNumber: 488,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        /* ─── Root ─────────────────────────────────────────── */
        .contact-root {
          width: 100vw;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background-color: transparent;
          font-family: var(--font-creato-title);
        }

        /* ─── Main layout ───────────────────────────────────── */
        .contact-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: row;        /* desktop: side by side */
          height: 100vh;
        }

        /* ─── LEFT: Model ───────────────────────────────────── */
        .contact-model {
          margin-left: 5%;
          flex: 0 0 40%;
          position: relative;
          height: 100%;
        }

        /* ─── RIGHT: Content ────────────────────────────────── */
        .contact-right {
          flex: 0 0 50%;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          padding-top: 2%;
          padding-left: 0;
          gap: 0;
        }

        /* ─── Title ─────────────────────────────────────────── */
        .contact-title-wrap {
          position: relative;
          width: 100%;
          height: clamp(120px, 26vh, 240px);
          margin-bottom: 6vh;
          align-self: flex-end;
        }

        /* ─── Cards container ───────────────────────────────── */
        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 30px !important;
          width: 75%;
          max-width: 380px;
          margin-top: 5vh !important; /* FIXED TYPO HERE (marin-top -> margin-top) */
        }

        /* ─── Single Card ───────────────────────────────────── */
        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          padding: clamp(5px, 0.8vh, 10px) 16px;
          background: rgba(50, 50, 50, 0.62);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: inset 0 1px 1px rgba(255,255,255,0.12), 0 6px 24px rgba(0,0,0,0.35);
          cursor: pointer;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%);
          border-radius: 50px;
          pointer-events: none;
        }

        .card-icon {
          width: clamp(40px, 6vw, 60px);
          height: clamp(40px, 6vw, 60px);
          position: relative;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-username {
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(10px, 1.2vw, 14px);
          letter-spacing: 0.02em;
          font-weight: 400;
          text-align: center;
          line-height: 1.2;
        }

        /* --- TABLET (≤ 900px) --- */
        @media (max-width: 900px) {
          .contact-model { 
            flex: 0 0 38%; 
          }
          
          .contact-right {
            flex: 0 0 62%;
            padding-right: 24px;
            padding-top: 8% !important;
            gap: 0px; 
          }

          .contact-title-wrap { 
            height: 100px !important; 
            margin-bottom: 20px !important; 
            position: relative !important;
          }

          .contact-cards { 
            width: 85%; 
            max-width: 320px; 
            display: flex !important;
            flex-direction: column !important;
            gap: 18px !important; 
            margin-top: 30px !important; 
          }

          .contact-card {
            margin-bottom: 0px !important; 
          }
        }

        /* ─── MOBILE (≤ 600px): stack vertikal ─────────────── */
        @media (max-width: 600px) {
          .contact-root { min-height: 100dvh; }

          .contact-content {
            flex-direction: column;      /* stack vertikal */
            height: auto;
            min-height: 100dvh;
          }

          /* Model di atas, lebih kecil */
          .contact-model {
            flex: none;
            width: 100%;
            height: 42vw;               /* proporsional sama width */
            min-height: 180px;
            max-height: 280px;
          }

          /* Konten di bawah model */
          .contact-right {
            flex: none;
            width: 100%;
            padding: 16px 20px 32px;
            justify-content: flex-start;
            align-items: center;
            gap: 30px;
          }

          .contact-title-wrap {
            height: clamp(60px, 18vw, 100px);
            margin-bottom: 16px;
            align-self: center;
          }

          .contact-cards {
            width: 92%;
            max-width: 380px;
            gap: 25px !important;
          }

          .contact-card {
            padding: 10px 20px;
            gap: 4px;
          }

          .card-icon {
            width: 28px;
            height: 28px;
          }

          .card-username { font-size: clamp(9px, 3.2vw, 13px); }
        }

        /* ─── SMALL MOBILE (≤ 380px) ────────────────────────── */
        @media (max-width: 380px) {
          .contact-model { height: 38vw; min-height: 150px; }
          .contact-cards { width: 96%; }
          .card-username { font-size: 10px; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/ContactUs.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/ContactUs.tsx",
        lineNumber: 484,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/pages/HomeClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/opening/navbar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$introvideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/opening/introvideo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$competition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/opening/competition.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/opening/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/About.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/Timeline.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ContactUs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/ContactUs.tsx [app-ssr] (ecmascript)");
// 'use client';
// import React, { useState, useEffect } from 'react';
// import Navbar from '@/components/opening/navbar';
// import IntroVideo from '@/components/opening/introvideo';
// import Competition from '@/components/opening/competition';
// import Footer from '@/components/opening/footer';
// import AboutSection from '@/components/About';
// import Timeline from '@/components/Timeline';
// import ContactPage from '@/components/ContactUs';
// export default function HomeClient() {
//   const [showContent, setShowContent] = useState(false);
//   useEffect(() => {
//     if ('scrollRestoration' in history) {
//       history.scrollRestoration = 'manual';
//     }
//     window.scrollTo(0, 0);
//     const timer = setTimeout(() => {
//       setShowContent(true);
//     }, 7000);
//     if (!showContent) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//     return () => {
//       clearTimeout(timer);
//       document.body.style.overflow = 'auto';
//     };
//   }, [showContent]);
//   return (
//     <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
//       <Navbar isVisible={showContent} />
//       <IntroVideo isFinished={showContent} />
//       <div className={`transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`}>
//         <section id="about"><AboutSection /></section>
//         <section id="competitions"><Competition /></section>
//         <section id="timeline"><Timeline /></section>
//         <section id="contact"><ContactPage /></section>
//         <Footer />
//       </div>
//     </main>
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
;
function HomeClient() {
    const [showContent, setShowContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
        const timer = setTimeout(()=>{
            setShowContent(true);
        }, 7000);
        if (!showContent) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return ()=>{
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, [
        showContent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "relative min-h-screen bg-[#0a0a0a] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-0 z-0 w-full h-full pointer-events-none transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`,
                style: {
                    backgroundImage: "url('/assets/BACKGROUNDFULL.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: 'no-repeat'
                }
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isVisible: showContent
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$introvideo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isFinished: showContent
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transition-opacity duration-1000 ease-in-out ${showContent ? 'opacity-100' : 'opacity-0'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "about",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$About$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                    lineNumber: 109,
                                    columnNumber: 31
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "competitions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$competition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                    lineNumber: 110,
                                    columnNumber: 38
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "timeline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                    lineNumber: 111,
                                    columnNumber: 34
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                id: "contact",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$ContactUs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                    lineNumber: 112,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$opening$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/pages/HomeClient.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=frontend_src_components_1da83858._.js.map