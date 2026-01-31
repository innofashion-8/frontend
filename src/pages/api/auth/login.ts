import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).end();

    const { email, password } = req.body;

    try {
        const backendRes = await fetchBackend('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
        });

        const response = await backendRes.json();

        if (!backendRes.ok) return res.status(backendRes.status).json(response);

        const token = response.data.token;

        res.setHeader('Set-Cookie', serialize('USER_TOKEN', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 1,
            path: '/',
        }));

        return res.status(200).json({ message: 'Login Berhasil' });
    } catch (error) {
        return res.status(500).json({ message: 'Terjadi Kesalahan pada server' });
    }  
}