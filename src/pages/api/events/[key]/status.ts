import { sendProxyError } from "@/lib/error-response";
import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return sendProxyError(res, 405, 'Method Not Allowed');

    const token = req.cookies.USER_TOKEN;
    if (!token) return sendProxyError(res, 401, 'Unauthorized');

    const { key } = req.query;

    try {
        const backendRes = await fetchBackend(`/events/${key}/status`, {
            method: 'GET',
            token,
        });

        const response = await backendRes.json();
        return res.status(backendRes.status).json(response);
    } catch (error) {
        return sendProxyError(res, 500, 'Internal Server Error');
    }
}
