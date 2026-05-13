"use client";

import { useState, useEffect } from "react";
import { Admin, AdminFormData, Role } from "@/types/admin";
import { Division } from "@/types/division";
import { adminService } from "@/services/admin-service";
import { adminSuccess, adminError, adminLoading } from "@/lib/admin-swal";
import Swal from "sweetalert2";

interface Props {
  admin: Admin | null;
  divisions: Division[];
  roles: Role[];
  onClose: (shouldRefresh: boolean) => void;
}

export function AdminModal({ admin, divisions, roles, onClose }: Props) {
  const [formData, setFormData] = useState<AdminFormData>({
    name: "",
    nrp: "",
    email: "",
    division_id: "",
    role: "",
  });

  useEffect(() => {
    if (admin) {
      setFormData({
        name: admin.name,
        nrp: admin.nrp,
        email: admin.email,
        division_id: admin.division_id,
        role: admin.roles?.[0]?.name || "",
      });
    }
  }, [admin]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      adminLoading(admin ? "UPDATING ADMIN..." : "CREATING ADMIN...");

      let response;
      if (admin) {
        response = await adminService.updateAdmin(admin.id, formData);
      } else {
        response = await adminService.createAdmin(formData);
      }

      if (response.success) {
        await adminSuccess({
          title: admin ? "UPDATED!" : "CREATED!",
          text: `Admin has been ${admin ? "updated" : "created"} successfully.`,
        });
        onClose(true);
      } else {
        throw new Error(response.message || `Failed to ${admin ? "update" : "create"} admin`);
      }
    } catch (error: any) {
      await adminError({
        title: admin ? "UPDATE FAILED" : "CREATE FAILED",
        text: error.message || `Failed to ${admin ? "update" : "create"} admin`,
      });
    } finally {
      Swal.close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
      <div className="w-full max-w-2xl rounded-none border-4 border-[#1C1C1B] bg-[#E2E2DE] shadow-[8px_8px_0px_#1a1a1a] my-8">
        {/* HEADER */}
        <div className="border-b-4 border-[#1C1C1B] bg-[#6A5D52] px-6 py-4">
          <h2 className="font-black text-2xl uppercase tracking-[0.2em] text-[#E2E2DE]">
            {admin ? "EDIT ADMIN" : "CREATE ADMIN"}
          </h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* NAME */}
          <div>
            <label className="block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2">
              NAME *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]"
              placeholder="Enter admin name"
              required
            />
          </div>

          {/* NRP */}
          <div>
            <label className="block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2">
              NRP *
            </label>
            <input
              type="text"
              value={formData.nrp}
              onChange={(e) => setFormData(prev => ({ ...prev, nrp: e.target.value }))}
              className="w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]"
              placeholder="Enter NRP"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2">
              EMAIL *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]"
              placeholder="Enter email"
              required
            />
          </div>

          {/* DIVISION */}
          <div>
            <label className="block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2">
              DIVISION *
            </label>
            <select
              value={formData.division_id}
              onChange={(e) => setFormData(prev => ({ ...prev, division_id: e.target.value }))}
              className="w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]"
              required
            >
              <option value="">SELECT DIVISION</option>
              {divisions.map((division) => (
                <option key={division.id} value={division.id}>
                  {division.name}
                </option>
              ))}
            </select>
          </div>

          {/* ROLE */}
          <div>
            <label className="block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2">
              ROLE
            </label>
            <select
              value={formData.role}
              onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
              className="w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]"
            >
              <option value="">NO ROLE</option>
              {roles.map((role) => (
                <option key={role.id} value={role.name}>
                  {role.name.toUpperCase()}
                </option>
              ))}
            </select>
            <p className="text-xs text-[#6A5D52] mt-1 font-bold">
              Optional: Assign a role to this admin
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 rounded-none border-4 border-[#1C1C1B] bg-[#6A5D52] px-6 py-3 font-black uppercase tracking-widest text-[#E2E2DE] shadow-[4px_4px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              {admin ? "UPDATE" : "CREATE"}
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
