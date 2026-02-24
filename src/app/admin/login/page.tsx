import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import LoginCard from "@/components/admin/LoginCard";
import LightRays from "@/components/admin/LightRays";

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.userType === "ADMIN") {
    redirect("/admin/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[#000000] overflow-hidden p-4">
      
      <div className="absolute inset-0 z-0">
        
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#979085"
          raysSpeed={3}
          lightSpread={2}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays w-full h-full"
          pulsating={false}
          fadeDistance={2}
          saturation={1}
      />
      </div>
      
      <LoginCard />

    </div>
  );
}