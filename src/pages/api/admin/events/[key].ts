import { sendProxyError } from "@/lib/error-response";
import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = req.cookies.ADMIN_TOKEN;
    if (!token) return sendProxyError(res, 401, 'Unauthorized');

    const { key } = req.query;

    try {
        if (req.method === 'PUT') {
            const backendRes = await fetchBackend(`/admin/events/${key}`, {
                method: 'PUT',
                body: JSON.stringify(req.body),
                token,
            });
            const response = await backendRes.json();
            return res.status(backendRes.status).json(response);
        }

        if (req.method === 'DELETE') {
            const backendRes = await fetchBackend(`/admin/events/${key}`, {
                method: 'DELETE',
                token,
            });
            const response = await backendRes.json();
            return res.status(backendRes.status).json(response);
        }

        return sendProxyError(res, 405, 'Method Not Allowed');
    } catch (error) {
        return sendProxyError(res, 500, 'Internal Server Error');
    }
}
