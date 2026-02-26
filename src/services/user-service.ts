// import { fetchBackend } from '@/lib/fetch-backend';
// import { fetchClient } from '@/lib/fetch-client';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';
// import { PaginatedResponse } from '@/types';
// import { ApiResponse, ApiValidationErrors } from '@/types/api';
// import { UserRegistrations } from '@/types/registration';
// import { DraftRegisterPayload, ProfileData, ProfileStatusResponse, UserWithRegistrations } from '@/types/user';
// import { getServerSession } from 'next-auth';

// export const userService = {
//     getUser: async(id: string): Promise<UserWithRegistrations> => {
//         try {
//         const res = await fetchClient<ApiResponse<UserWithRegistrations>>(`/api/admin/users/${id}`, {
//             method: 'GET',
//         });
//         return res.data as UserWithRegistrations;
//         } catch (error: any) {
//         throw new Error(error.message);
//         }
//     },

//     getUsers: async(page: number = 1): Promise<PaginatedResponse<UserWithRegistrations>> => {
//         try {
//             const session = await getServerSession(authOptions);
//             const token = session?.accessToken;
            
//             if (!token) {
//                 throw new Error("Unauthorized: Tidak ada token session.");
//             }

//             const res = await fetchBackend(`/admin/users?page=${page}`, {
//                 method: 'GET',
//                 token: token as string,
//             });
            
//             const response = await res.json();
        
//             if (response.success && response.data) {
//                 return response.data;
//             }
            
//             throw new Error(response.message || 'Failed to fetch users');
//         } catch (error: any) {
//             console.error('Error fetching users:', error);
//             throw error;
//         }
//     },

//     checkStatus: async(): Promise<ProfileStatusResponse> => {
//         try {
//         const res = await fetchClient<ApiResponse<ProfileStatusResponse>>('/api/complete-registration/status', {
//             method: 'GET',
//         });
//         return res.data as ProfileStatusResponse;
//         } catch (error: any) {
//         throw new Error(error.message);
//         }
//     },
  
//     submitProfile: async (payload: ProfileData): Promise<string> => {
//         try {
//         const formData = new FormData();
//         formData.append('major', payload.major);
//         formData.append('phone', payload.phone);
//         formData.append('institution', payload.institution);
//         if (payload.line) formData.append('line', payload.line);
//         if (payload.nrp) formData.append('nrp', payload.nrp);
//         if (payload.batch) formData.append('batch', payload.batch);
//         if (payload.whatsapp) formData.append('whatsapp', payload.whatsapp);
//         if (payload.line_id) formData.append('line_id', payload.line_id);
//         if (payload.asal_sekolah) formData.append('asal_sekolah', payload.asal_sekolah);
        
//         if (payload.ktm_path) formData.append('ktm_path', payload.ktm_path);
//         if (payload.id_card_path) formData.append('id_card_path', payload.id_card_path);

//         const res = await fetchClient<ApiResponse>('/api/complete-registration/submit', {
//             method: 'POST',
//             body: formData,
//         });
//         return res.message || 'Profil lengkap!';
//         } catch (error: any) {
//         if (error.isValidationError) throw { isValidationError: true, errors: error.data };
//         throw new Error(error.message);
//         }
//     },

//     saveDraft: async (payload: DraftRegisterPayload): Promise<string> => {
//         try {
//         const formData = new FormData();
//         // Format array draft_data untuk Laravel
//         if (payload.draft_data.institution) formData.append('draft_data[institution]', payload.draft_data.institution);
//         if (payload.draft_data.phone) formData.append('draft_data[phone]', payload.draft_data.phone);
//         if (payload.draft_data.line) formData.append('draft_data[line]', payload.draft_data.line);
//         if (payload.draft_data.major) formData.append('draft_data[major]', payload.draft_data.major);
//         if (payload.draft_data.nrp) formData.append('draft_data[nrp]', payload.draft_data.nrp);
//         if (payload.draft_data.batch) formData.append('draft_data[batch]', payload.draft_data.batch);
        
//         if (payload.draft_data.ktm_path) formData.append('draft_data[ktm_path]', payload.draft_data.ktm_path);
//         if (payload.draft_data.id_card_path) formData.append('draft_data[id_card_path]', payload.draft_data.id_card_path);

//         const res = await fetchClient<ApiResponse>('/api/complete-registration/draft', {
//             method: 'POST',
//             body: formData,
//         });
//         return res.message || 'Draft profil disimpan';
//         } catch (error: any) {
//         if (error.isValidationError) throw { isValidationError: true, errors: error.data };
//         throw new Error(error.message);
//         }
//     },
//     getRegistrations: async (): Promise<UserRegistrations> => {
//         try {
//         const res = await fetchClient<ApiResponse<UserRegistrations>>('/api/registrations', {
//             method: 'GET',
//         });
//         return res.data as UserRegistrations;
//         } catch (error: any) {
//         throw new Error(error.message);
//         }
//     },
// };

import { fetchBackend } from '@/lib/fetch-backend';
import { fetchClient } from '@/lib/fetch-client';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { PaginatedResponse } from '@/types';
import { ApiResponse, ApiValidationErrors } from '@/types/api';
import { UserRegistrations } from '@/types/registration';
import { ProfileStatusResponse, UserWithRegistrations } from '@/types/user';
import { getServerSession } from 'next-auth';

export const userService = {
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

    getUsers: async(page: number = 1): Promise<PaginatedResponse<UserWithRegistrations>> => {
        try {
            const session = await getServerSession(authOptions);
            const token = session?.accessToken;
            
            if (!token) {
                throw new Error("Unauthorized: Tidak ada token session.");
            }

            const res = await fetchBackend(`/admin/users?page=${page}`, {
                method: 'GET',
                token: token as string,
            });
            
            const response = await res.json();
        
            if (response.success && response.data) {
                return response.data;
            }
            
            throw new Error(response.message || 'Failed to fetch users');
        } catch (error: any) {
            console.error('Error fetching users:', error);
            throw error;
        }
    },

    checkStatus: async(): Promise<ProfileStatusResponse> => {
        try {
        const res = await fetchClient<ApiResponse<ProfileStatusResponse>>('/api/complete-registration/status', {
            method: 'GET',
        });
        return res.data as ProfileStatusResponse;
        } catch (error: any) {
        throw new Error(error.message);
        }
    },
  
    submitProfile: async (payload: FormData): Promise<string> => {
        try {
        const res = await fetchClient<ApiResponse>('/api/complete-registration/submit', {
            method: 'POST',
            body: payload, 
        });
        return res.message || 'Profil lengkap!';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data || error.errors };
        throw new Error(error.message);
        }
    },

    saveDraft: async (payload: FormData): Promise<string> => {
        try {
        const res = await fetchClient<ApiResponse>('/api/complete-registration/draft', {
            method: 'POST',
            body: payload,
        });
        return res.message || 'Draft profil disimpan';
        } catch (error: any) {
        if (error.isValidationError) throw { isValidationError: true, errors: error.data || error.errors };
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