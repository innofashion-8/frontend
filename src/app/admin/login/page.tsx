"use client";

import LightRays from "@/components/admin/LightRays";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoginCard from "@/components/admin/LoginCard";

export default function AdminLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.userType === "ADMIN") {
      router.push("/admin");
    }
  }, [status, session, router]);

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    await signIn("google-admin", { callbackUrl: "/admin" });
  };

  if (status === "loading") return <div className="min-h-screen flex items-center justify-center bg-[#000000] text-white font-bold font-creato-title tracking-widest">LOADING SYSTEM...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[#000000] overflow-hidden p-4">
      
      {/* BACKGROUND CAHAYA OGL */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff" /* Gua ganti cyan biar cocok sama tema PCE lu */
          raysSpeed={1.5}
          lightSpread={0.6}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          className="w-full h-full"
        />
      </div>
      <LoginCard onLogin={handleGoogleLogin} isLoading={isLoggingIn} />
    </div>
  );
}