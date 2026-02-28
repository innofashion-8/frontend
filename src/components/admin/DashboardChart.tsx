"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

interface DetailData {
  label: string;
  count: number;
}

interface ChartProps {
  eventData: { total: number; validated: number; pending: number };
  compData: { total: number; validated: number; pending: number };
  eventBreakdown: DetailData[]; // Rincian tiap event
  compBreakdown: DetailData[];  // Rincian tiap kompetisi
}

export default function DashboardCharts({ eventData, compData, eventBreakdown, compBreakdown }: ChartProps) {
  // Palet Warna Premium Lu
  const palette = {
    onyx: "#1C1C1B",
    walnut: "#6A5D52",
    ash: "#979086",
    graphite: "#484847",
    greige: "#B7AC9B",
    stucco: "#e2e2de",
  };

  // Array warna buat bar chart rincian (biar warnanya beda-beda tapi tetap senada)
  const breakdownColors = [palette.onyx, palette.walnut, palette.ash, palette.graphite, palette.greige];

  // 1. Chart: Total Event vs Comp (Vertical Bar)
  const barData = {
    labels: ["Event", "Competition"],
    datasets: [
      {
        label: "Total Registrasi",
        data: [eventData.total, compData.total],
        backgroundColor: [palette.onyx, palette.walnut],
        borderRadius: 8,
        barThickness: 40,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: palette.greige + "30" } },
      x: { grid: { display: false } },
    },
  };

  // 2. Chart: Validasi Global (Doughnut)
  const doughnutData = {
    labels: ["Tervalidasi", "Belum Validasi"],
    datasets: [
      {
        data: [
          eventData.validated + compData.validated,
          eventData.pending + compData.pending,
        ],
        backgroundColor: [palette.walnut, palette.stucco],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "75%",
    plugins: {
      legend: { position: "bottom" as const, labels: { usePointStyle: true, padding: 20, font: { family: "'Creato Display', sans-serif" } } },
    },
  };

  // 3. Chart: Rincian Kompetisi (Horizontal Bar)
  const compDetailData = {
    labels: compBreakdown.map((item) => item.label),
    datasets: [
      {
        label: "Jumlah Peserta",
        data: compBreakdown.map((item) => item.count),
        backgroundColor: breakdownColors,
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  // 4. Chart: Rincian Event (Horizontal Bar)
  const eventDetailData = {
    labels: eventBreakdown.map((item) => item.label),
    datasets: [
      {
        label: "Jumlah Peserta",
        data: eventBreakdown.map((item) => item.count),
        backgroundColor: breakdownColors,
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const horizontalBarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const, // Bikin chartnya jadi menyamping
    plugins: { legend: { display: false } },
    scales: {
      x: { beginAtZero: true, grid: { color: palette.greige + "30", borderDash: [5, 5] } },
      y: { grid: { display: false }, ticks: { font: { weight: 'bold' as const } } },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 font-body">
      {/* Chart 1: Bar */}
      <div className="bg-[#fdfdfd] p-6 rounded-2xl shadow-sm border border-[#b7ac9b]/30">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#1c1c1b] font-title">Statistik Global Pendaftar</h2>
          <p className="text-sm text-[#979086]">Perbandingan Event vs Kompetisi</p>
        </div>
        <div className="relative w-full h-72">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      {/* Chart 2: Doughnut */}
      <div className="bg-[#fdfdfd] p-6 rounded-2xl shadow-sm border border-[#b7ac9b]/30">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#1c1c1b] font-title">Status Validasi Global</h2>
          <p className="text-sm text-[#979086]">Persentase dokumen yang sudah divalidasi</p>
        </div>
        <div className="relative w-full h-72 flex justify-center">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>

      {/* Chart 3: Rincian Kompetisi */}
      <div className="bg-[#fdfdfd] p-6 rounded-2xl shadow-sm border border-[#b7ac9b]/30">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#1c1c1b] font-title">Distribusi Kompetisi</h2>
          <p className="text-sm text-[#979086]">Jumlah kelompok per kompetisi</p>
        </div>
        <div className="relative w-full h-72">
          <Bar data={compDetailData} options={horizontalBarOptions} />
        </div>
      </div>

      {/* Chart 4: Rincian Event */}
      <div className="bg-[#fdfdfd] p-6 rounded-2xl shadow-sm border border-[#b7ac9b]/30">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#1c1c1b] font-title">Distribusi Event</h2>
          <p className="text-sm text-[#979086]">Jumlah peserta per event</p>
        </div>
        <div className="relative w-full h-72">
          <Bar data={eventDetailData} options={horizontalBarOptions} />
        </div>
      </div>
    </div>
  );
}