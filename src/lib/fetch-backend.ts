const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface BackendOptions extends RequestInit {
  token?: string; // Kita oper token dari cookie kesini
}

export const fetchBackend = async (path: string, options: BackendOptions = {}) => {
  const { token, headers, ...rest } = options;
  
  const reqHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(headers as Record<string, string>),
  };

  if (token) {
    reqHeaders['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}/api${path}`, {
    ...rest,
    headers: reqHeaders,
  });

  return res;
};