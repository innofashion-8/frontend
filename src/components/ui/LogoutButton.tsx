"use client";

import { signOut, useSession } from "next-auth/react";
import { authService } from "@/services/auth-service";
import toast from "react-hot-toast";

export function LogoutButton() {
  const { data: session } = useSession();
  
  const handleLogout = async () => {
    const isRoleAdmin = session?.user?.userType === "ADMIN";
    const targetUrl = isRoleAdmin ? "/admin/login" : "/login";

    try {
      toast.loading("Proses logout...", { id: "logout-toast" });
      
      await authService.logout(); 
      toast.success("Berhasil logout!", { id: "logout-toast" });

    } catch (error) {
      toast.error("Sesi server berakhir, menghapus sesi lokal...", { id: "logout-toast" });
      console.log(error);
    } finally {
      await signOut({ 
        callbackUrl: targetUrl, 
        redirect: true 
      });
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded cursor-pointer transition-colors"
    >
      Logout
    </button>
  );
}