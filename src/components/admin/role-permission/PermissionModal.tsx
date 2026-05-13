"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Permission, PermissionFormData } from "@/types/admin";
import { rolePermissionService } from "@/services/role-permission-service";
import { adminSuccess, adminError, adminLoading } from "@/lib/admin-swal";
import Swal from "sweetalert2";

interface Props {
  permission: Permission | null;
  onClose: (shouldRefresh: boolean) => void;
}

export function PermissionModal({ permission, onClose }: Props) {
  const { data: session } = useSession();
  const [formData, setFormData] = useState<PermissionFormData>({
    name: "",
    display_name: "",
  });

  useEffect(() => {
    if (permission) {
      setFormData({
        name: permission.name,
        display_name: "",
      });
    }
  }, [permission]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      adminLoading(permission ? "UPDATING PERMISSION..." : "CREATING PERMISSION...");

      if (permission) {
        await rolePermissionService.updatePermission(permission.id, formData);
      } else {
        await rolePermissionService.createPermission(formData);
      }

      await adminSuccess({
        title: permission ? "UPDATED!" : "CREATED!",
        text: `Permission has been ${permission ? "updated" : "created"} successfully.`,
      });

      onClose(true);
    } catch (error: any) {
      await adminError({
        title: permission ? "UPDATE FAILED" : "CREATE FAILED",
        text: error.message || `Failed to ${permission ? "update" : "create"} permission`,
      });
    } finally {
      Swal.close();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-xl rounded-none border-4 border-[#1C1C1B] bg-[#E2E2DE] shadow-[8px_8px_0px_#1a1a1a]">
        {/* HEADER */}
        <div className="border-b-4 border-[#1C1C1B] bg-[#6A5D52] px-6 py-4">
          <h2 className="font-black text-2xl uppercase tracking-[0.2em] text-[#E2E2DE]">
            {permission ? "EDIT PERMISSION" : "CREATE PERMISSION"}
          </h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* NAME */}
          <div>
            <label className="block font-black text-sm uppercase tracking-widest text-[#1C1C1B] mb-2">
              PERMISSION NAME *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-none border-4 border-[#1C1C1B] bg-white px-4 py-3 font-bold text-[#1C1C1B] focus:outline-none focus:ring-4 focus:ring-[#6A5D52]"
              placeholder="e.g., manage_users"
              pattern="^[a-z0-9_]+$"
              title="Lowercase alphanumeric with underscores only"
              required
            />
            <p className="text-xs text-[#6A5D52] mt-1 font-bold">
              Lowercase alphanumeric with underscores only
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 rounded-none border-4 border-[#1C1C1B] bg-[#6A5D52] px-6 py-3 font-black uppercase tracking-widest text-[#E2E2DE] shadow-[4px_4px_0px_#1a1a1a] transition-all hover:shadow-[2px_2px_0px_#1a1a1a] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              {permission ? "UPDATE" : "CREATE"}
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
