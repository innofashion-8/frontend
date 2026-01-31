import { fetchBackend } from "@/lib/fetch-backend";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = req.cookies.USER_TOKEN;
    const { path } = req.query;
    const urlPath = Array.isArray(path) ? `${path.join('/')}` : '';

    try {
        const response = await fetchBackend(urlPath, {
            method: req.method,
            body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined,
            token: token,
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (error) {
        return res.status(500).json({ message: "Terjadi Kesalahan pada server"});
    }
}