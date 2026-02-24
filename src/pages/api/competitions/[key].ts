import { sendProxyError } from "@/lib/error-response";
import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return sendProxyError(res, 405, 'Method Not Allowed');

    const { key } = req.query;

    try {
        const backendRes = await fetchBackend(`/competitions/${key}`, {
            method: 'GET',
        });

        const response = await backendRes.json();
        return res.status(backendRes.status).json(response);
    } catch (error) {
        return sendProxyError(res, 500, 'Internal Server Error');
    }
}
