import { fetchBackend } from "@/lib/fetch-backend";
import { DashboardData } from "@/types/dashboard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export const dashboardService = {
  getStats: async (): Promise<DashboardData> => {
    const defaultData: DashboardData = {
      eventStats: { total: 0, validated: 0, pending: 0 },
      compStats: { total: 0, validated: 0, pending: 0 },
      eventBreakdown: [],
      compBreakdown: []
    };

    try {
      const session = await getServerSession(authOptions);
      const token = session?.accessToken;

      if (!token) return defaultData;

      const backendRes = await fetchBackend('/admin/dashboard/stats', {
        method: 'GET',
        token
      });
      
      const result = await backendRes.json();
      
      if (result.success) {
        return result.data as DashboardData;
      }
      
      return defaultData;
    } catch (error) {
      console.error("Gagal menarik data dashboard dari server:", error);
      return defaultData; 
    }
  }
};