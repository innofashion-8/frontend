"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; //
import { useEffect } from "react";

export default function AdminLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated" && session?.user?.userType === "ADMIN") {
      router.push("/admin");
    }
  }, [status, session, router]);

  if (status === "loading") return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold mb-6">Portal Admin PCE</h1>
        <button 
          onClick={() => signIn("google-admin", { callbackUrl: "/admin" })}
          className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Login dengan Google
        </button>
      </div>
    </div>
  );
}