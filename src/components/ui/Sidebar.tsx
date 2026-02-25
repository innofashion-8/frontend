"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { authService } from "@/services/auth-service";
import toast from "react-hot-toast";

export function Sidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  
  const sidebarRef = useRef<HTMLElement>(null);
  const mobileBtnRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsActive(!isActive);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isActive && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target as Node) &&
        mobileBtnRef.current &&
        !mobileBtnRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  const handleLogout = async () => {
    try {
      toast.loading("Keluar dari sistem...", { id: "logout-toast" });
      await authService.logout(); 
      toast.success("Berhasil logout!", { id: "logout-toast" });
    } catch (error) {
      toast.error("Sesi server berakhir, menghapus sesi lokal...", { id: "logout-toast" });
    } finally {
      await signOut({ callbackUrl: "/admin/login", redirect: true });
    }
  };

  const userPermissions = session?.user?.permissions || [];

  const adminMenus = [
    { 
      path: "/admin/dashboard", 
      name: "Dashboard", 
      permission: null,
      icon: <><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></> 
    },
    { 
      path: "/admin/competition", 
      name: "Manage Competition", 
      permission: "manage_competitions", 
      icon: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></> 
    },
    { 
      path: "/admin/event", 
      name: "Manage Event", 
      permission: "manage_events", 
      icon: <><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></> 
    },
    { 
      path: "/admin/user", 
      name: "Manage User", 
      permission: "manage_users", 
      icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> 
    },
    { 
      path: "/admin/event-registration", 
      name: "Event Registration", 
      permission: "manage_registrations", 
      icon: <><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></> 
    },
    { 
      path: "/admin/competition-registration", 
      name: "Comp. Registration", 
      permission: "manage_registrations", 
      icon: <><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/><path d="m9 14 2 2 4-4"/></> 
    },
  ];

  const allowedMenus = adminMenus.filter((item) => {
    if (!item.permission) return true;
    if (userPermissions.includes("*")) return true;
    return userPermissions.includes(item.permission);
  });

  return (
    <>
      <style>{`
        .ham { cursor: pointer; -webkit-tap-highlight-color: transparent; transition: transform 400ms; -moz-user-select: none; }
        .hamRotate.active { transform: rotate(45deg); }
        .line { fill: none; transition: stroke-dasharray 400ms, stroke-dashoffset 400ms; stroke: #1C1C1B; stroke-width: 5.5; stroke-linecap: round; }
        .ham6 .top { stroke-dasharray: 40 172; }
        .ham6 .middle { stroke-dasharray: 40 111; }
        .ham6 .bottom { stroke-dasharray: 40 172; }
        .ham6.active .top { stroke-dashoffset: -132px; }
        .ham6.active .middle { stroke-dashoffset: -71px; }
        .ham6.active .bottom { stroke-dashoffset: -132px; }
      `}</style>

      {/* MOBILE OVERLAY */}
      <div
        onClick={() => setIsActive(false)}
        className={`fixed inset-0 bg-black/40 z-[30] transition-opacity duration-300 lg:hidden ${
          isActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE HAMBURGER BUTTON */}
      <div
        ref={mobileBtnRef}
        onClick={toggleSidebar}
        className={`fixed top-5 left-5 w-[50px] h-[50px] rounded-xl z-[50] shadow-md flex items-center justify-center cursor-pointer transition-all duration-300 lg:hidden
        ${isActive ? "left-[230px] bg-transparent shadow-none" : "bg-[#dcdad9]/80 backdrop-blur-md"}`}
      >
        <svg className={`ham ham6 ${isActive ? "active" : ""}`} viewBox="0 0 100 100" width="40">
          <path className="line top" d="m 30,33 h 40 c 13.1,0 14.3,31.8 6.8,33.4 -24.6,5.3 9.0,-52.3 -12.7,-30.5 l -28.2,28.2" />
          <path className="line middle" d="m 70,50 c 0,0 -32.2,0 -40,0 -7.7,0 -6.4,-4.6 -6.4,-8.5 0,-5.8 6.0,-11.7 12.2,-5.5 6.2,6.2 28.2,28.2 28.2,28.2" />
          <path className="line bottom" d="m 69.5,67.0 h -40 c -13.1,0 -14.3,-31.8 -6.8,-33.4 24.6,-5.3 -9.0,52.3 12.7,30.5 l 28.2,-28.2" />
        </svg>
      </div>

      {/* SIDEBAR MAIN CONTAINER */}
      <nav
        ref={sidebarRef}
        className={`fixed top-0 -left-[10%] lg:left-0 h-[100dvh] z-[40] py-2 px-3 transition-all duration-500 overflow-hidden whitespace-nowrap 
        border-r border-[#b7ac9b]/30 backdrop-blur-xl flex flex-col
        ${isActive ? "w-[280px] left-0 bg-[#e9e4e2]/95 shadow-[10px_0_30px_rgba(0,0,0,0.1)]" : "w-0 lg:w-[80px] bg-[#e2e2de]/60 lg:shadow-none"}`}
      >
        {/* LOGO & DESKTOP TOGGLE */}
        <div className="flex items-center w-full min-h-[60px] mb-5 relative text-[#1C1C1B]">
          <div onClick={toggleSidebar} className="absolute left-0 w-[45px] h-[45px] cursor-pointer hidden lg:block">
            <svg className={`ham ham6 ${isActive ? "active" : ""}`} viewBox="0 0 100 100" width="60">
              <path className="line top" d="m 30,33 h 40 c 13.1,0 14.3,31.8 6.8,33.4 -24.6,5.3 9.0,-52.3 -12.7,-30.5 l -28.2,28.2" />
              <path className="line middle" d="m 70,50 c 0,0 -32.2,0 -40,0 -7.7,0 -6.4,-4.6 -6.4,-8.5 0,-5.8 6.0,-11.7 12.2,-5.5 6.2,6.2 28.2,28.2 28.2,28.2" />
              <path className="line bottom" d="m 69.5,67.0 h -40 c -13.1,0 -14.3,-31.8 -6.8,-33.4 24.6,-5.3 -9.0,52.3 12.7,30.5 l 28.2,-28.2" />
            </svg>
          </div>
        </div>

        {/* LIST MENU TENGAH */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <ul className="flex flex-col gap-1 w-full p-0 m-0">
            {allowedMenus.map((item, index) => {
              const isCurrent = 
                item.path === "/admin/dashboard" 
                  ? pathname === "/admin/dashboard"
                  : pathname === item.path || pathname?.startsWith(`${item.path}/`);

              return (
                <li key={index} className="w-full h-[50px] leading-[50px]">
                  <Link
                    href={item.path}
                    onClick={() => { if (window.innerWidth <= 1024) setIsActive(false); }}
                    className={`flex items-center w-full h-full rounded-xl transition-all duration-400 relative
                    ${isCurrent 
                      ? "bg-gradient-to-r from-[#6a5d52]/10 to-transparent border-l-4 border-[#6a5d52] text-[#1a1a1a]" 
                      : "text-[#484847] hover:bg-[#b7ac9b]/20"}`}
                  >
                    <i className={`min-w-[50px] h-[50px] flex items-center justify-center ${isCurrent ? "text-[#6a5d52]" : ""}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {item.icon}
                      </svg>
                    </i>
                    <span className={`font-semibold font-creato-body text-[15px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* LOGOUT BUTTON BAWAH */}
        <div className="mt-auto pb-4 w-full">
          <div className="my-2 border-b border-[#b7ac9b]/30"></div>
          <button 
            onClick={handleLogout}
            className="flex items-center w-full h-[50px] rounded-xl text-[#d9534f] hover:bg-[#d9534f]/10 transition-all duration-400 relative cursor-pointer"
          >
            <i className="min-w-[50px] h-[50px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>
              </svg>
            </i>
            <span className={`font-semibold font-creato-body text-[15px] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
              Logout
            </span>
          </button>
        </div>

      </nav>
    </>
  );
}