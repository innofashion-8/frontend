import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { fetchBackend } from "@/lib/fetch-backend";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session || !session.accessToken) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const { id } = req.query;

  if (req.method === "PATCH") {
    try {
      const { attended } = req.body;

      const response = await fetchBackend(`/admin/registrations/events/${id}/attendance`, {
        method: "PATCH",
        token: session.accessToken,
        body: JSON.stringify({ attended }),
      });

      const data = await response.json();

      if (!response.ok) {
        return res.status(response.status).json(data);
      }

      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}
