import { fetchClient } from '@/lib/fetch-client';
import { ApiResponse, ApiValidationErrors } from '@/types/api';
import { UserRegistrations } from '@/types/registration';
import { DraftProfilePayload, SubmitProfilePayload, UserWithRegistrations } from '@/types/user';

export const profileService = {
    getUser: async(id: string): Promise<UserWithRegistrations> => {
        try {
        const res = await fetchClient<ApiResponse<UserWithRegistrations>>(`/api/admin/users/${id}`, {
            method: 'GET',
        });
        return res.data as UserWithRegistrations;
        } catch (error: any) {
        throw new Error(error.message);
        }
    },

    getUsers: async(): Promise<UserWithRegistrations[]> => {
        try {
        const res = await fetchClient<ApiResponse<UserWithRegistrations[]>>('/api/admin/users', {
            method: 'GET',
        });
        return res.data as UserWithRegistrations[];
        } catch (error: any) {
        throw new Error(error.message);
        }
    },
  
    submitProfile: async (payload: SubmitProfilePayload): Promise<string> => {
        try {
        const formData = new FormData();
        formData.append('major', payload.major);
        if (payload.nrp) formData.append('nrp', payload.nrp);
        if (payload.batch) formData.append('batch', payload.batch);
        
        if (payload.ktm_path) formData.append('ktm', payload.ktm_path);
        if (payload.id_card_path) formData.append('id_card', payload.id_card_path);

        const res = await fetchClient<ApiResponse>('/api/profile/submit', {
            method: 'POST',
            body: formData,
        });
        return res.message || 'Profil lengkap!';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data };
        throw new Error(error.message);
        }
    },

    saveDraft: async (payload: DraftProfilePayload): Promise<string> => {
        try {
        const formData = new FormData();
        // Format array draft_data untuk Laravel
        if (payload.draft_data.major) formData.append('draft_data[major]', payload.draft_data.major);
        if (payload.draft_data.nrp) formData.append('draft_data[nrp]', payload.draft_data.nrp);
        if (payload.draft_data.batch) formData.append('draft_data[batch]', payload.draft_data.batch);
        
        if (payload.draft_data.ktm_path) formData.append('draft_data[ktm_path]', payload.draft_data.ktm_path);
        if (payload.draft_data.id_card_path) formData.append('draft_data[id_card_path]', payload.draft_data.id_card_path);

        const res = await fetchClient<ApiResponse>('/api/profile/draft', {
            method: 'POST',
            body: formData,
        });
        return res.message || 'Draft profil disimpan';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data };
        throw new Error(error.message);
        }
    },
    getRegistrations: async (): Promise<UserRegistrations> => {
        try {
        const res = await fetchClient<ApiResponse<UserRegistrations>>('/api/registrations', {
            method: 'GET',
        });
        return res.data as UserRegistrations;
        } catch (error: any) {
        throw new Error(error.message);
        }
    },
};