import Beams from '@/components/ui/Beams';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a]">
      
      {/* 🔥 BEAMS CUKUP DI SINI 1 KALI SAJA 🔥 */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#B7AC9B" // Warna emas/greige Dystopian
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />
      </div>

      {/* KONTEN HALAMAN (Dashboard, Event, Lomba) */}
      <div className="relative z-10 w-full h-full">
        {/* Kalau lu ada Sidebar, panggil Sidebarnya di sini */}
        {children}
      </div>

    </div>
  );
}