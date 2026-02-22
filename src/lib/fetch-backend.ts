const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface BackendOptions extends RequestInit {
  token?: string;
}

export const fetchBackend = async (path: string, options: BackendOptions = {}) => {
  const { token, headers, ...rest } = options;
  
  const reqHeaders = new Headers(headers as HeadersInit);
  
  if (!reqHeaders.has('Accept')) {
      reqHeaders.set('Accept', 'application/json');
  }

  if (!(rest.body instanceof FormData)) {
      if (!reqHeaders.has('Content-Type')) {
          reqHeaders.set('Content-Type', 'application/json');
      }
  } else {
      reqHeaders.delete('Content-Type');
  }

  if (token) {
    reqHeaders.set('Authorization', `Bearer ${token}`);
  }

  return fetch(`${BASE_URL}/api${path}`, {
    ...rest,
    headers: reqHeaders,
  });
};