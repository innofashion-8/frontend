import { fetchClient } from '@/lib/fetch-client';
import { ApiResponse, ApiValidationErrors } from '@/types/api';
import { EventPayload, EventResource } from '@/types/event';
import { StatusResponse } from '@/types/registration';

export const eventService = {
  
    submitFinal: async (key: string, paymentProof?: File | null): Promise<string> => {
        try {
        const formData = new FormData();
        if (paymentProof) {
            formData.append('payment_proof', paymentProof);
        }

        const res = await fetchClient<ApiResponse>(`/api/events/${key}/submit`, {
            method: 'POST',
            body: formData,
        });
        return res.message || 'Pendaftaran berhasil';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data as ApiValidationErrors };
        throw new Error(error.message);
        }
    },

    getEvent: async (key: string): Promise<EventResource> => {
        try {
        const res = await fetchClient<ApiResponse<EventResource>>(`/api/events/${key}`, {
            method: 'GET',
        });
        return res.data as EventResource;
        } catch (error: any) {
        throw new Error(error.message);
        }
    },

    getEvents: async (): Promise<EventResource[]> => {
        try {
        const res = await fetchClient<ApiResponse<EventResource[]>>(`/api/events`, {
            method: 'GET',
        });
        return res.data as EventResource[];
        } catch (error: any) {
        throw new Error(error.message);
        }
    },

    storeEvent: async (payload: EventPayload): Promise<{message: string, data: EventResource}> => {
        try {
        const res = await fetchClient<ApiResponse<EventResource>>(`/api/admin/events`, {
            method: 'POST',
            body: JSON.stringify(payload),
        });
        return {
            message: res.message || 'Event berhasil disimpan',
            data: res.data!
        };
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data };
        throw new Error(error.message);
        }
    },

    updateEvent: async (key: string, payload: EventPayload): Promise<{message: string, data: EventResource}> => {
        try {
        const res = await fetchClient<ApiResponse<EventResource>>(`/api/admin/events/${key}`, {
            method: 'PUT',
            body: JSON.stringify(payload),
        });
        return {
            message: res.message || 'Event berhasil diperbarui',
            data: res.data!
        };
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data };
        throw new Error(error.message);
        }
    },

    deleteEvent: async (key: string): Promise<string> => {
        try {
        const res = await fetchClient<ApiResponse>(`/api/admin/events/${key}`, {
            method: 'DELETE',
        });
        return res.message || 'Event berhasil dihapus';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data };
        throw new Error(error.message);
        }
    },

    checkStatusRegistrations: async(key: string): Promise<StatusResponse> => {
        try {
        const res = await fetchClient<ApiResponse<StatusResponse>>(`/api/events/${key}/status`, {
            method: 'GET',
        });
        return res.data as StatusResponse;
        } catch (error: any) {
        throw new Error(error.message);
        }
    },

    saveDraft: async (key: string, paymentProof?: File | null): Promise<string> => {
        try {
        const formData = new FormData();
        if (paymentProof) {
            formData.append('draft_data[payment_proof]', paymentProof);
        }
        
        const res = await fetchClient<ApiResponse>(`/api/events/${key}/draft`, {
            method: 'POST',
            body: formData,
        });
        return res.message || 'Draft disimpan';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data };
        throw new Error(error.message);
        }
    },

    getRotatingQr: async (key: string, validity: number = 30): Promise<{ token: string }> => {
        try {
            const res = await fetchClient<ApiResponse<{ token: string }>>(`/api/admin/events/${key}/rotating-qr?validity=${validity}`, {
                method: 'GET',
            });
            return res.data!;
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    userScanCheckIn: async (token: string): Promise<{ message: string, data: any }> => {
        try {
            const res = await fetchClient<ApiResponse<any>>(`/api/events/scan-attendance`, {
                method: 'POST',
                body: JSON.stringify({ token }),
            });
            return {
                message: res.message || 'Check-in berhasil',
                data: res.data
            };
        } catch (error: any) {
            if (error.isValidationError) {
                let msg = error.message;
                if (!msg && error.data) {
                    msg = typeof error.data === 'string' ? error.data : Object.values(error.data).flat()[0];
                }
                throw { 
                    isValidationError: true, 
                    errors: error.data, 
                    message: msg || 'Verification failed. Invalid QR Code data.' 
                };
            }
            throw new Error(error.message);
        }
    },

    getEvaluationQuestions: async (key: string): Promise<any[]> => {
        try {
            const res = await fetchClient<ApiResponse<any[]>>(`/api/events/${key}/evaluation-questions`, {
                method: 'GET',
            });
            return res.data || [];
        } catch (error: any) {
            throw new Error(error.message);
        }
    },

    submitEvaluation: async (key: string, answers: { question_id: string, value: any }[]): Promise<{ message: string, data: any }> => {
        try {
            const res = await fetchClient<ApiResponse<any>>(`/api/events/${key}/evaluation`, {
                method: 'POST',
                body: JSON.stringify({ answers }),
            });
            return {
                message: res.message || 'Evaluasi berhasil disubmit',
                data: res.data
            };
        } catch (error: any) {
            if (error.isValidationError) {
                let msg = error.message;
                if (!msg && error.data) {
                    msg = typeof error.data === 'string' ? error.data : Object.values(error.data).flat()[0];
                }
                throw { 
                    isValidationError: true, 
                    errors: error.data, 
                    message: msg || 'Gagal mengirim evaluasi.' 
                };
            }
            throw new Error(error.message);
        }
    }
};
