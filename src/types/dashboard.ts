export interface StatCounts {
  total: number;
  validated: number;
  pending: number;
}

export interface BreakdownItem {
  label: string;
  count: number;
}

export interface DashboardData {
  eventStats: StatCounts;
  compStats: StatCounts;
  eventBreakdown: BreakdownItem[];
  compBreakdown: BreakdownItem[];
}