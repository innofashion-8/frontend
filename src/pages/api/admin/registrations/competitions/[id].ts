import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'PATCH') return res.status(405).end();

    const token = req.cookies.ADMIN_TOKEN;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const { id } = req.query;

    try {
        const backendRes = await fetchBackend(`/admin/registrations/competitions/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify(req.body),
            token,
        });

        const response = await backendRes.json();
        return res.status(backendRes.status).json(response);
    } catch (error) {
        return res.status(500).json({ message: 'Terjadi Kesalahan pada server' });
    }
}
