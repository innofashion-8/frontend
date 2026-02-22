import { sendProxyError } from "@/lib/error-response";
import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return sendProxyError(res, 405, 'Method Not Allowed');

    try {
        const backendRes = await fetchBackend('/auth/register', {
            method: 'POST',
            body: JSON.stringify(req.body),
        });

        const response = await backendRes.json();
        return res.status(backendRes.status).json(response);
    } catch (error) {
        return sendProxyError(res, 500, 'Internal Server Error');
    }
}
