import { NextApiResponse } from "next";

export const sendProxyError = (res: NextApiResponse, code: number, message: string) => {
    return res.status(code).json({
        code: code,
        success: false,
        message: message,
        data: null
    });
};