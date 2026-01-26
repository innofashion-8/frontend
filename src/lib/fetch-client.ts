const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

function getCookie(name: string)
{
    if (typeof document === 'undefined') return null;
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
}

export const fetchClient = async (path: string, options: RequestInit = {}) => {
    const headers = {
        'Accept' : 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
    } as Record<string, string>;

    const xsrfToken = getCookie('XSRF-TOKEN');
    if (xsrfToken) {
        headers['X-XSRF-TOKEN'] = xsrfToken;
    }

    const response = await fetch(`${BASE_URL}${path}`, {
        ...options,
        headers,
        credentials: 'include',
    });

    if (response.status === 401) {
        window.location.href = '/login';
    }

    return response;
}