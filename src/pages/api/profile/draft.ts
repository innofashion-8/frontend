import { sendProxyError } from "@/lib/error-response";
import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return sendProxyError(res, 405, 'Method Not Allowed');

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const token = session?.accessToken;
    if (!token) return sendProxyError(res, 401, 'Unauthorized');

    try {
        const backendRes = await fetchBackend(`/profile/draft`, { 
            method: 'POST',
            token,
            headers: {
                'Content-Type': req.headers['content-type'] || '',
            },
            body: req as unknown as BodyInit,
            duplex: 'half',
        });

        const response = await backendRes.json().catch(() => ({}));
        return res.status(backendRes.status).json(response);
    } catch (error) {
        return sendProxyError(res, 500, 'Internal Server Error');
    }
}