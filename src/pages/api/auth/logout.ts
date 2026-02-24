import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { sendProxyError } from "@/lib/error-response";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return sendProxyError(res, 405, 'Method Not Allowed');

    const token = req.cookies.USER_TOKEN || req.cookies.ADMIN_TOKEN;

    if (!token) return sendProxyError(res, 401, 'Unauthorized');

    try {
        const backendRes = await fetchBackend('/logout', {
            method: 'POST',
            token,
        });

        const response = await backendRes.json();

        res.setHeader('Set-Cookie', [
            serialize('USER_TOKEN', '', { maxAge: -1, path: '/' }),
            serialize('ADMIN_TOKEN', '', { maxAge: -1, path: '/' }),
        ]);

        return res.status(backendRes.status).json(response);
    } catch (error) {
        return sendProxyError(res, 500, 'Internal Server Error');
    }
}
