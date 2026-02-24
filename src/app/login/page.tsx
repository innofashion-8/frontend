"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, FormEvent } from "react";
import toast from "react-hot-toast";

export default function UserLoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.userType !== "ADMIN") {
      router.push("/");
    }
  }, [status, session, router]);

  const handleCredentialsLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await signIn("credentials-user", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      toast.error(result.error);
      setIsLoading(false);
    } else {
      toast.success("Berhasil login!");
      router.push("/");
    }
  };

  if (status === "loading") return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login Peserta</h1>

        <form onSubmit={handleCredentialsLogin} className="space-y-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Email"
            required
          />
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Password"
            required
          />
          <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50">
            {isLoading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <div className="my-6 border-t border-gray-300"></div>

        <button 
          onClick={() => signIn("google-user", { callbackUrl: "/" })}
          className="w-full border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
        >
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
}