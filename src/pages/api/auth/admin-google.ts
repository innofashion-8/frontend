import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { sendProxyError } from "@/lib/error-response";
import { send } from "process";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return sendProxyError(res, 405, 'Method Not Allowed');

    try {
        const backendRes = await fetchBackend('/auth/admin/login/google', {
            method: 'POST',
            body: JSON.stringify(req.body),
        });

        const response = await backendRes.json();

        if (!backendRes.ok) return res.status(backendRes.status).json(response);

        const token = response.data.token;

        res.setHeader('Set-Cookie', serialize('ADMIN_TOKEN', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 1,
            path: '/',
        }));

        return res.status(backendRes.status).json(response);
    } catch (error) {
        return sendProxyError(res, 500, 'Internal Server Error');
    }
}
