import { sendProxyError } from "@/lib/error-response";
import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const token = session?.accessToken;
    if (!token) return sendProxyError(res, 401, 'Unauthorized');

    try {
        if (req.method === 'GET') {
            const { all } = req.query;
            const endpoint = all === 'true' ? '/admin/divisions?all=true' : '/admin/divisions';
            
            const backendRes = await fetchBackend(endpoint, {
                method: 'GET',
                token,
            });

            const response = await backendRes.json();
            return res.status(backendRes.status).json(response);
        }

        if (req.method === 'POST') {
            const backendRes = await fetchBackend('/admin/divisions', {
                method: 'POST',
                token,
                body: JSON.stringify(req.body),
            });

            const response = await backendRes.json();
            return res.status(backendRes.status).json(response);
        }

        return sendProxyError(res, 405, 'Method Not Allowed');
    } catch (error) {
        return sendProxyError(res, 500, 'Internal Server Error');
    }
}
