import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import LightRays from "@/components/admin/LightRays";
import LoginCard from "@/components/admin/LoginCard";

export default async function AdminLoginPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.userType === "ADMIN") {
    redirect("/admin/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[#000000] overflow-hidden p-4">
      
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.6}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          className="w-full h-full"
        />
      </div>
      
      <LoginCard />

    </div>
  );
}