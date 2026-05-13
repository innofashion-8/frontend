"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Division } from "@/types/division";
import { PaginatedResponse } from "@/types";
import { divisionService } from "@/services/division-service";
import { adminConfirm, adminSuccess, adminError, adminLoading } from "@/lib/admin-swal";
import { UniversalTable } from "../UniversalTable";
import { UniversalPagination } from "../UniversalPagination";
import DivisionModal from "./DivisionModal";
import Swal from "sweetalert2";

interface Props {
  data: PaginatedResponse<Division>;
}

export default function DivisionClient({ data }: Props) {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDivision, setEditingDivision] = useState<Division | null>(null);

  // Debug: log pagination data
  console.log('Division pagination data:', {
    current_page: data.current_page,
    last_page: data.last_page,
    from: data.from,
    to: data.to,
    total: data.total,
    per_page: data.per_page
  });

  const handleCreate = () => {
    setEditingDivision(null);
    setIsModalOpen(true);
  };

  const handleEdit = (division: Division) => {
    setEditingDivision(division);
    setIsModalOpen(true);
  };

  const handleDelete = async (division: Division) => {
    const result = await adminConfirm({
      title: "DELETE DIVISION?",
      html: `Are you sure you want to delete <strong>${division.name}</strong>?<br/>This action cannot be undone.`,
      confirmButtonText: "DELETE",
      cancelButtonText: "CANCEL",
    });

    if (result.isConfirmed) {
      try {
        adminLoading("DELETING DIVISION...");
        const response = await divisionService.deleteDivision(division.id);
        
        if (response.success) {
          await adminSuccess({
            title: "DELETED!",
            text: "Division has been deleted successfully.",
          });
          router.refresh();
        } else {
          throw new Error(response.message || "Failed to delete division");
        }
      } catch (error: any) {
        await adminError({
          title: "DELETE FAILED",
          text: error.message || "Failed to delete division",
        });
      } finally {
        Swal.close();
      }
    }
  };

  const handleModalClose = (shouldRefresh: boolean) => {
    setIsModalOpen(false);
    setEditingDivision(null);
    if (shouldRefresh) {
      router.refresh();
    }
  };

  const columns = [
    { 
      header: "DIVISION NAME", 
      key: "name" 
    },
    { 
      header: "SLUG", 
      key: "slug" 
    },
    { 
      header: "ADMINS", 
      key: "admins_count" 
    },
    {
      header: "ACTIONS",
      key: "actions",
      render: (division: Division) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(division)}
            className="px-4 py-1.5 border-[3px] border-[#1c1c1b] bg-[#6A5D52] text-white text-xs font-black hover:bg-[#1c1c1b] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider"
          >
            EDIT
          </button>
          <button
            onClick={() => handleDelete(division)}
            className="px-4 py-1.5 border-[3px] border-[#1c1c1b] bg-[#ef4444] text-white text-xs font-black hover:bg-[#dc2626] transition-all shadow-[3px_3px_0px_#1c1c1b] cursor-pointer tracking-wider"
          >
            DELETE
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="w-full mx-auto mb-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <h1 className="text-3xl font-black font-creato-title uppercase tracking-tight border-b-4 border-[#1c1c1b] pb-2 text-[#1C1C1B]">Manage Divisions</h1>
          <button
            onClick={handleCreate}
            className="bg-[#6A5D52] cursor-pointer text-white px-6 py-3 font-black uppercase text-sm hover:bg-[#1C1C1B] transition-colors w-full sm:w-auto border-[3px] border-[#1c1c1b] shadow-[4px_4px_0px_#1c1c1b] tracking-wider"
          >
            + Create Division
          </button>
        </div>
      </div>

      {/* TABLE */}
      <UniversalTable
        columns={columns}
        data={data.data}
      />

      {/* PAGINATION */}
      <UniversalPagination
        meta={data}
        onPageChange={(page) => router.push(`/admin/division?page=${page}`)}
      />

      {/* MODAL */}
      {isModalOpen && (
        <DivisionModal
          division={editingDivision}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}
