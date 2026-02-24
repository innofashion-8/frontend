import { fetchClient } from '@/lib/fetch-client';
import { ApiResponse, ApiValidationErrors } from '@/types/api';
import { Competition, CompetitionPayload } from '@/types/competition';
import { StatusResponse } from '@/types/registration';

export const competitionService = {
    getCompetitions: async (): Promise<Competition[]> => {
      try {
        const res = await fetchClient<ApiResponse<Competition[]>>(`/api/competitions`, {
            method: 'GET',
        });
        return res.data as Competition[];
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    getCompetition: async (key: string): Promise<Competition> => {
      try {
        const res = await fetchClient<ApiResponse<Competition>>(`/api/competitions/${key}`, {
            method: 'GET',
        });
        return res.data as Competition;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    storeCompetition: async (payload: CompetitionPayload): Promise<{message: string, data: Competition}> => {
        try {
            const res = await fetchClient<ApiResponse<Competition>>(`/api/admin/competitions`, {
                method: 'POST',
                body: JSON.stringify(payload),
            });
            return {
                message: res.message || 'Competition berhasil disimpan',
                data: res.data!
            };
        } catch (error: any) {
            if (error.isValidationError) throw { isValidationError: true, errors: error.data };
            throw new Error(error.message);
        }
    },

    updateCompetition: async (key: string, payload: CompetitionPayload): Promise<{message: string, data: Competition}> => {
        try {
            const res = await fetchClient<ApiResponse<Competition>>(`/api/admin/competitions/${key}`, {
                method: 'PUT',
                body: JSON.stringify(payload),
            });
            return {
                message: res.message || 'Competition berhasil diperbarui',
                data: res.data!
            };
        } catch (error: any) {
            if (error.isValidationError) throw { isValidationError: true, errors: error.data };
            throw new Error(error.message);
        }
    },

    deleteEvent: async (key: string): Promise<string> => {
        try {
            const res = await fetchClient<ApiResponse>(`/api/admin/competitions/${key}`, {
                method: 'DELETE',
            });
            return res.message || 'Competition berhasil dihapus';
        } catch (error: any) {
            if (error.isValidationError) throw { isValidationError: true, errors: error.data };
            throw new Error(error.message);
        }
    },

    checkStatusRegistrations: async(key: string): Promise<StatusResponse> => {
        try {
          const res = await fetchClient<ApiResponse<StatusResponse>>(`/api/competitions/${key}/status`, {
              method: 'GET',
          });
          return res.data as StatusResponse;
        } catch (error: any) {
          throw new Error(error.message);
        }
    },

    submitFinal: async (key: string, paymentProof: File): Promise<string> => {
        try {
        const formData = new FormData();
        formData.append('payment_proof', paymentProof);

        const res = await fetchClient<ApiResponse>(`/api/competitions/${key}/submit`, {
            method: 'POST',
            body: formData,
        });
        return res.message || 'Pendaftaran berhasil';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data as ApiValidationErrors };
        throw new Error(error.message);
        }
    },

    saveDraft: async (key: string, paymentProof?: File | null): Promise<string> => {
        try {
        const formData = new FormData();
        if (paymentProof) {
            formData.append('draft_data[payment_proof]', paymentProof);
        }
        
        const res = await fetchClient<ApiResponse>(`/api/competitions/${key}/draft`, {
            method: 'POST',
            body: formData,
        });
        return res.message || 'Draft disimpan';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data };
        throw new Error(error.message);
        }
    }
};