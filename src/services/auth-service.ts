import { fetchClient } from "@/lib/fetch-client";
import { ApiResponse, ApiValidationErrors } from "@/types/api";
import { RegisterPayload, LoginPayload } from "@/types/auth";
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
    login: async(payload: LoginPayload): Promise<string> => {
        try {
            const res = await fetchClient<ApiResponse<string>>(`/api/auth/login`, {
                method: 'POST',
                body: JSON.stringify(payload),
            });
            return res.message || 'Login berhasil!';
        } catch (error: any) {
            if (error.isValidationError) {
                throw { isValidationError: true, errors: error.data as ApiValidationErrors };
            }
            throw new Error(error.message);
        }
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