export const fetchClient = async (path: string, options: RequestInit = {}) => {
    const url = path.startsWith('/api/') ? path : `/api/proxy${path}`;
    const res = await fetch(url, {
        headers: { 'Content-Type': 'application/json', ...options.headers },
        ...options,
    });

    if (res.status === 401) {
        if (typeof window !== 'undefined') {
            await fetch('/api/auth/logout', { method: 'POST' });
            
            window.location.href = '/login';
        }
        
        throw new Error('Unauthorized');
    }

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || 'Terjadi Kesalahan');
    }

    return res.json();
};