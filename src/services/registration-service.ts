import { fetchBackend } from "@/lib/fetch-backend";
import { fetchClient } from "@/lib/fetch-client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { PaginatedResponse } from "@/types";
import { ApiResponse } from "@/types/api";
import {  CompetitionRegistrationWithUserAndCompetition, EventRegistrationWithUserAndEvent, RegistrationStatus } from "@/types/registration";
import { getServerSession } from "next-auth";

export const registrationService = {
    exportCompetitionsRegistrations: async (): Promise<void> => {
        try {
            const blob = await fetchClient<Blob>('/api/admin/registrations/competitions/export', {
                method: 'GET',
                responseType: 'blob'
            });
            
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'competition_registrations.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 100);
        } catch (error: any) {
            throw new Error("Gagal mengexport data");
        }
    },

    exportEventRegistrations: async (): Promise<void> => {
        try {
            const blob = await fetchClient<Blob>('/api/admin/registrations/events/export', {
                method: 'GET',
                responseType: 'blob'
            });
            
            const downloadUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = 'event_registrations.xlsx';
            document.body.appendChild(a);
            a.click();
            a.remove();
            setTimeout(() => window.URL.revokeObjectURL(downloadUrl), 100);
        } catch (error: any) {
            throw new Error("Gagal mengexport data events");
        }
    },

    async getEventRegistrations(params: { page?: number; search?: string; status?: string; event_name?: string; user_type?: string } = {}): Promise<PaginatedResponse<EventRegistrationWithUserAndEvent>> {
        const session = await getServerSession(authOptions);
        const token = session?.accessToken;

        if (!token) {
            throw new Error("Unauthorized: Tidak ada token session.");
        }

        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append('page', params.page.toString());
        if (params.search) queryParams.append('search', params.search);
        if (params.status && params.status !== 'ALL') queryParams.append('status', params.status);
        if (params.event_name && params.event_name !== 'ALL') queryParams.append('event_name', params.event_name);
        if (params.user_type && params.user_type !== 'ALL') queryParams.append('user_type', params.user_type);

        const res = await fetchBackend(`/admin/registrations/events?${queryParams.toString()}`, {
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

    async getCompetitionsRegistrations(params: { page?: number; search?: string; status?: string; competition_name?: string; category?: string; user_type?: string } = {}): Promise<PaginatedResponse<CompetitionRegistrationWithUserAndCompetition>> {
        const session = await getServerSession(authOptions);
        const token = session?.accessToken;

        if (!token) {
            throw new Error("Unauthorized: Tidak ada token session.");
        }

        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append('page', params.page.toString());
        if (params.search) queryParams.append('search', params.search);
        if (params.status && params.status !== 'ALL') queryParams.append('status', params.status);
        if (params.competition_name && params.competition_name !== 'ALL') queryParams.append('competition_name', params.competition_name);
        if (params.category && params.category !== 'ALL') queryParams.append('category', params.category);
        if (params.user_type && params.user_type !== 'ALL') queryParams.append('user_type', params.user_type);

        const res = await fetchBackend(`/admin/registrations/competitions?${queryParams.toString()}`, {
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