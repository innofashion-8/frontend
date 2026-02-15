import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end();

    const token = req.cookies.USER_TOKEN || req.cookies.ADMIN_TOKEN;

    if (!token) return res.status(401).json({ message: 'Unauthorized' });

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
        return res.status(500).json({ message: 'Terjadi Kesalahan pada server' });
    }
}
