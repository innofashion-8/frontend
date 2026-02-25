import { fetchBackend } from "@/lib/fetch-backend";
import { fetchClient } from "@/lib/fetch-client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PaginatedResponse } from "@/types";
import { ApiResponse } from "@/types/api";
import {  CompetitionRegistrationWithUserAndCompetition, EventRegistrationWithUserAndEvent, RegistrationStatus } from "@/types/registration";
import { getServerSession } from "next-auth";

export const registrationService = {
    async getEventRegistrations(page: number = 1): Promise<PaginatedResponse<EventRegistrationWithUserAndEvent>> {
        const session = await getServerSession(authOptions);
        const token = session?.accessToken;

        if (!token) {
            throw new Error("Unauthorized: Tidak ada token session.");
        }

        const res = await fetchBackend(`/admin/registrations/events?page=${page}`, {
            method: 'GET',
            token: token as string,
        });

        const response = await res.json();
        
        if (response.success && response.data) {
            return response.data;
        }
        
        throw new Error(response.message || "Gagal mengambil data dari server");
    },

    async updateEventStatus(id: string, status: RegistrationStatus, rejection_reason?: string): Promise<ApiResponse<null>> {
        return await fetchClient<ApiResponse<null>>(`/api/admin/registrations/events/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({ status, rejection_reason })
        });
    },

    async getCompetitionsRegistrations(page: number = 1): Promise<PaginatedResponse<CompetitionRegistrationWithUserAndCompetition>> {
        const session = await getServerSession(authOptions);
        const token = session?.accessToken;

        if (!token) {
            throw new Error("Unauthorized: Tidak ada token session.");
        }

        const res = await fetchBackend(`/admin/registrations/competitions?page=${page}`, {
            method: 'GET',
            token: token as string,
        });

        const response = await res.json();
        
        if (response.success && response.data) {
            return response.data;
        }
        
        throw new Error(response.message || "Gagal mengambil data dari server");
    },

    async updateCompetitionStatus(id: string, status: RegistrationStatus, rejection_reason?: string): Promise<ApiResponse<null>> {
        return await fetchClient<ApiResponse<null>>(`/api/admin/registrations/competitions/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({ status, rejection_reason })
        });
    }
};