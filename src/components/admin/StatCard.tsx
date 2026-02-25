import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  type: "hero" | "primary" | "secondary";
  icon: React.ReactNode;
}

export default function StatCard({ title, value, type, icon }: StatCardProps) {
  const styles = {
    hero: {
      card: "bg-[#1c1c1b] border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b]", 
      title: "text-[#b7ac9b]",
      value: "text-[#e2e2de]",
      iconWrapper: "bg-[#494947] text-[#e2e2de]",
    },
    primary: {
      card: "bg-[#e2e2de] border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b]", 
      title: "text-[#979086]",
      value: "text-[#6a5d52]",
      iconWrapper: "bg-[#6a5d52] text-white",
    },
    secondary: {
      card: "bg-white border-[3px] border-[#1c1c1b] shadow-[6px_6px_0px_#1c1c1b]", 
      title: "text-[#7b787a]",
      value: "text-[#494947]",
      iconWrapper: "bg-[#9fa4a2] text-white",
    },
  };

  const currentStyle = styles[type];

  return (
    <div className={`p-6 transition-all duration-200 hover:shadow-[8px_8px_0px_#1c1c1b] hover:translate-x-[-2px] hover:translate-y-[-2px] ${currentStyle.card}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-xs font-black font-creato-body mb-2 uppercase tracking-wider ${currentStyle.title}`}>
            {title}
          </p>
          <h3 className={`text-4xl font-black font-creato-title tracking-tight ${currentStyle.value}`}>
            {value}
          </h3>
        </div>
        <div className={`p-3 ${currentStyle.iconWrapper}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}