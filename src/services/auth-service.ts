import { fetchBackend } from "@/lib/fetch-backend";
import { fetchClient } from "@/lib/fetch-client";
import { ApiResponse, ApiValidationErrors } from "@/types/api";
import { RegisterPayload, BackendAuthResponse } from "@/types/auth";
import { AuthProfile } from "@/types/user";

export const authService = {
    register: async(payload: RegisterPayload): Promise<string> => {
        try {
            const res = await fetchClient<ApiResponse<string>>(`/api/auth/register`, {
                method: 'POST',
                body: JSON.stringify(payload),
            });
            return res.message || 'Pendaftaran berhasil! Silakan Login';
        } catch (error: any) {
            if (error.isValidationError) {
                throw { isValidationError: true, errors: error.data as ApiValidationErrors };
            }
            throw new Error(error.message);
        }
},
    loginGoogleAdmin: async (googleIdToken: string): Promise<BackendAuthResponse> => {
        const res = await fetchBackend('/auth/admin/login/google', {
            method: 'POST',
            body: JSON.stringify({ token: googleIdToken }),
        });
        
        const result = await res.json();
        if (!res.ok || !result.success) throw new Error(result.message || 'Gagal login Admin');

        return {
            token: result.data.token,
            name: result.data.admin.name,
            email: result.data.admin.email,
            division: result.data.admin.division,
            is_profile_complete: null,
            role: result.data.admin.roles || null,
            permissions: result.data.admin.permissions || [],
            userType: 'ADMIN',
        };
    },

    loginGoogleUser: async (googleIdToken: string): Promise<BackendAuthResponse> => {
        const res = await fetchBackend('/auth/login/google', {
            method: 'POST',
            body: JSON.stringify({ token: googleIdToken }),
        });
        
        const result = await res.json();
        if (!res.ok || !result.success) throw new Error(result.message || 'Gagal login Peserta');

        return {
            id: result.data.user.id,
            token: result.data.token,
            name: result.data.user.name,
            email: result.data.user.email,
            is_profile_complete: result.data.user.is_profile_complete,
            division: null,
            role: null,
            permissions: [],
            userType: result.data.user.type || 'USER',
        };
    },

    loginWithCredentials: async (email?: string, password?: string): Promise<BackendAuthResponse> => {
        const res = await fetchBackend('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        });
        
        const result = await res.json();
        if (!res.ok || !result.success) throw new Error(result.message || 'Email atau password salah');

        return {
            id: result.data.user.id,
            token: result.data.token,
            name: result.data.user.name,
            email: result.data.user.email,
            division: null,
            is_profile_complete: result.data.user.is_profile_complete,
            role: null,
            permissions: [],
            userType: result.data.user.type || 'USER',
        };
    },

    logout: async(): Promise<string> => {
        try {
            const res = await fetchClient<ApiResponse<string>>(`/api/auth/logout`, {
                method: 'POST',
            });
            return res.message || 'Logout berhasil!';
        } catch (error: any) {
            throw new Error(error.message);
        }
    },
    getProfile: async(): Promise<AuthProfile> => {
        try {
            const res = await fetchClient<ApiResponse<AuthProfile>>(`/api/auth/profile`, {
                method: 'GET',
            });
            return res.data as AuthProfile;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
};