"use client";

import { useState, useEffect } from "react";
import { Division } from "@/types/division";
import { divisionService } from "@/services/division-service";
import { adminSuccess, adminError, adminLoading } from "@/lib/admin-swal";
import Swal from "sweetalert2";

interface Props {
  division: Division | null;
  onClose: (shouldRefresh: boolean) => void;
}

export default function DivisionModal({ division, onClose }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  });

  useEffect(() => {
    if (division) {
      setFormData({
        name: division.name,
        slug: division.slug,
      });
    }
  }, [division]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      adminLoading(division ? "UPDATING DIVISION..." : "CREATING DIVISION...");

      let response;
      if (division) {
        response = await divisionService.updateDivision(division.id, formData);
      } else {
        response = await divisionService.createDivision(formData);
      }

      if (response.success) {
        await adminSuccess({
          title: division ? "UPDATED!" : "CREATED!",
          text: `Division has been ${division ? "updated" : "created"} successfully.`,
        });
        onClose(true);
      } else {
        throw new Error(response.message || "Failed to save division");
      }
    } catch (error: any) {
      await adminError({
        title: division ? "UPDATE FAILED" : "CREATE FAILED",
        text: error.message || `Failed to ${division ? "update" : "create"} division`,
      });
    } finally {
      Swal.close();
    }
  };

  const handleNameChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      name: value,
      slug: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-2xl rounded-none border-4 border-[#1C1C1B] bg-[#E2E2DE] shadow-[8px_8px_0px_#1a1a1a]">
        {/* HEADER */}
        <div className="border-b-4 border-[#1C1C1B] bg-[#6A5D52] px-6 py-4">
          <h2 className="font-black text-2xl uppercase tracking-[0.2em] text-[#E2E2DE]">
            {division ? "EDIT DIVISION" : "CREATE DIVISION"}
          </h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* NAME */}
          <div>
            <label className="block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2">
              DIVISION NAME *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]"
              placeholder="Enter division name"
              required
            />
          </div>

          {/* SLUG */}
          <div>
            <label className="block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2">
              SLUG *
            </label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
              className="w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]"
              placeholder="division-slug"
              pattern="^[a-z0-9]+(?:-[a-z0-9]+)*$"
              title="Lowercase alphanumeric with hyphens only"
              required
            />
            <p className="text-xs text-[#6A5D52] mt-1 font-bold">
              Lowercase alphanumeric with hyphens only (auto-generated from name)
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 rounded-none border-4 border-[#1C1C1B] bg-[#6A5D52] px-6 py-3 font-black uppercase tracking-widest text-[#E2E2DE] shadow-[4px_4px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              {division ? "UPDATE" : "CREATE"}
            </button>
            <button
              type="button"
              onClick={() => onClose(false)}
              className="flex-1 rounded-none border-4 border-[#1C1C1B] bg-[#979086] px-6 py-3 font-black uppercase tracking-widest text-[#E2E2DE] shadow-[4px_4px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
