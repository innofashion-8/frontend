const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

interface BackendOptions extends Omit<RequestInit, 'body'> {
  token?: string;
  body?: BodyInit | null | unknown;
  duplex?: 'half';
}

export const fetchBackend = async (path: string, options: BackendOptions = {}) => {
  const { token, headers, duplex, ...rest } = options;
  
  const reqHeaders = new Headers(headers as HeadersInit);
  
  if (!reqHeaders.has('Accept')) {
      reqHeaders.set('Accept', 'application/json');
  }

  if (typeof rest.body === 'string') {
      if (!reqHeaders.has('Content-Type')) {
          reqHeaders.set('Content-Type', 'application/json');
      }
  } 

  if (token) {
    reqHeaders.set('Authorization', `Bearer ${token}`);
  }

  return fetch(`${BASE_URL}/api${path}`, {
    ...rest,
    headers: reqHeaders,
    duplex: duplex as any,
  } as RequestInit);
};