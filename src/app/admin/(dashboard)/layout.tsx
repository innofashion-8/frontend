import { Sidebar } from "@/components/ui/Sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100dvh] bg-[#e9e4e2] text-[#1c1c1b] flex font-body">
      
      <Sidebar />
      
      {/* 2. AREA KONTEN UTAMA */}
      <main className="flex-1 w-full lg:ml-[80px] transition-all duration-500 min-h-screen">
        <div className="p-6 md:p-8 lg:p-10">
          {children}
        </div>
      </main>

    </div>
  );
}