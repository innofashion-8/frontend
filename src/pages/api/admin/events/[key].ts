import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = req.cookies.ADMIN_TOKEN;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

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

        return res.status(405).end();
    } catch (error) {
        return res.status(500).json({ message: 'Terjadi Kesalahan pada server' });
    }
}
