import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  type: "hero" | "primary" | "secondary";
  icon: React.ReactNode;
}

export default function StatCard({ title, value, type, icon }: StatCardProps) {
  // Mapping warna disesuaikan dengan Base Background Limestone (#dcdad9)
  const styles = {
    hero: {
      // Kartu Total: Gelap (Onyx) biar pop-out maksimal
      card: "bg-[#1c1c1b] border-[#1a1a1a] shadow-xl", 
      title: "text-[#b7ac9b]", // Greige (Terang nan elegan)
      value: "text-[#e2e2de]", // Stucco (Teks angka off-white)
      iconWrapper: "bg-[#494947]/40 text-[#e2e2de]", // Graphite bg transparan, icon Stucco
    },
    primary: {
      // Kartu Validated: Stucco (Lebih terang & hangat dari bg Limestone)
      card: "bg-[#e2e2de] border-[#b7ac9b]/30 shadow-md", 
      title: "text-[#979086]", // Ash (Teks label)
      value: "text-[#6a5d52]", // Walnut (Angka utama kecokelatan yang premium)
      iconWrapper: "bg-[#6a5d52]/10 text-[#6a5d52]", // Walnut transparan & solid
    },
    secondary: {
      // Kartu Pending: Mist (Lebih gelap/abu dari bg Limestone, kesan netral)
      card: "bg-[#bebebf] border-[#9fa4a2]/20 shadow-sm", 
      title: "text-[#7b787a]", // Gravel (Teks label lebih gelap)
      value: "text-[#494947]", // Graphite (Angka abu-abu tegas)
      iconWrapper: "bg-[#9fa4a2]/20 text-[#494947]", // Pebble transparan, icon Graphite
    },
  };

  const currentStyle = styles[type];

  return (
    <div className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${currentStyle.card}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-semibold font-body mb-1 ${currentStyle.title}`}>
            {title}
          </p>
          <h3 className={`text-3xl font-extrabold font-title tracking-tight ${currentStyle.value}`}>
            {value}
          </h3>
        </div>
        <div className={`p-3 rounded-xl shadow-inner ${currentStyle.iconWrapper}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}