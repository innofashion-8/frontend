import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') return res.status(405).end();

    const { key } = req.query;

    try {
        const backendRes = await fetchBackend(`/competitions/${key}`, {
            method: 'GET',
        });

        const response = await backendRes.json();
        return res.status(backendRes.status).json(response);
    } catch (error) {
        return res.status(500).json({ message: 'Terjadi Kesalahan pada server' });
    }
}
