import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]"; 
import StatCard from "@/components/admin/StatCard";
import DashboardCharts from "@/components/admin/DashboardChart";
import { dashboardService } from "@/services/dashboard-service";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const dashboardData = await dashboardService.getStats();

  // Ikon SVG reusable (Tetap Sama)
  const iconUsers = <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
  const iconCheck = <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  const iconClock = <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

  return (
    <div className="w-full font-creato-title">
      
      {/* ... BAGIAN HEADER BANNER TETAP SAMA ... */}
      <div className="w-full mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#E2E2DE] px-8 py-6 border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b]">
          <div>
            <h1 className="text-3xl font-black text-[#1c1c1b] font-creato-title uppercase tracking-tight">
              Dashboard
            </h1>
            <p className="mt-2 text-[#6a5d52] text-sm font-bold">
              Selamat datang kembali, <span className="font-black text-[#1c1c1b]">{session?.user?.name || "Admin"}</span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center gap-3 bg-white px-4 py-3 border-[3px] border-[#1c1c1b] shadow-[3px_3px_0px_#1c1c1b]">
            <div className="p-2 bg-[#1c1c1b] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-[#6a5d52] font-black uppercase tracking-wider">Divisi</p>
              <p className="text-sm font-black text-[#1c1c1b] font-creato-title">{ session?.user?.division || 'Administrator'}</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-creato-title font-black text-[#1c1c1b] mb-6 uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2">Statistik Competition</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Peserta" value={dashboardData.compStats.total} type="hero" icon={iconUsers} />
        <StatCard title="Sudah Validasi" value={dashboardData.compStats.validated} type="secondary" icon={iconCheck} />
        <StatCard title="Belum Validasi" value={dashboardData.compStats.pending} type="primary" icon={iconClock} />
      </div>

      <h2 className="text-2xl font-creato-title font-black text-[#1c1c1b] mb-6 mt-8 uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2">Statistik Event</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Peserta" value={dashboardData.eventStats.total} type="hero" icon={iconUsers} />
        <StatCard title="Sudah Validasi" value={dashboardData.eventStats.validated} type="secondary" icon={iconCheck} />
        <StatCard title="Belum Validasi" value={dashboardData.eventStats.pending} type="primary" icon={iconClock} />
      </div>

      {/* CHARTS SECTION DIPANGGIL DENGAN PROP BARU */}
      <DashboardCharts 
        eventData={dashboardData.eventStats} 
        compData={dashboardData.compStats} 
        eventBreakdown={dashboardData.eventBreakdown}
        compBreakdown={dashboardData.compBreakdown}
      />

    </div>
  );
}