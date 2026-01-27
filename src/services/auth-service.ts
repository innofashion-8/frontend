import { fetchClient } from "@/lib/fetch-client";

export const authService = {
    async login(email: string, password: string) {
        return fetchClient('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });
    },

    async logout() {
        return fetchClient('/api/auth/logout', {
            method: 'POST',
        });
    },
};