import { signOut } from "next-auth/react";

export const fetchClient = async <T = any>(path: string, options: RequestInit = {}): Promise<T> => {
    const url = path.startsWith('/api/') ? path : `/api/proxy${path}`;
    
    const headers = new Headers(options.headers);
    
    // Kalau body BUKAN FormData, baru kita paksa jadi JSON
    if (!(options.body instanceof FormData)) {
        if (!headers.has('Content-Type')) {
            headers.set('Content-Type', 'application/json');
        }
    } else {
        headers.delete('Content-Type');
    }

    const res = await fetch(url, {
        ...options,
        headers,
    });

    if (res.status === 401) {
        if (typeof window !== 'undefined') {
            signOut({ callbackUrl: '/login' });
        }
        throw { code: 401, message: 'Unauthorized', isValidationError: false };
    }

    const responseData = await res.json().catch(() => ({})); 

    if (!res.ok) {
        throw {
            code: responseData.code || res.status,
            message: responseData.message || 'Terjadi Kesalahan',
            data: responseData.data || null,
            isValidationError: res.status === 422 || responseData.code === 422
        };
    }

    return responseData as T;
};