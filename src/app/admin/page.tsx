import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function AdminIndexPage() {
  const session = await getServerSession(authOptions);
  if (session?.user?.userType === "ADMIN") {
    redirect("/admin/dashboard");
  } 
  else {
    redirect("/admin/login");
  }
}