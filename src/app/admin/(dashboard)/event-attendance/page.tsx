import AttendanceClient from "@/components/admin/event-attendance/AttendanceClient";
import { registrationService } from "@/services/registration-service";

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string; search?: string; event_name?: string; user_type?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const search = params.search || "";
  const event_name = params.event_name || "";
  const user_type = params.user_type || "";
  
  const response = await registrationService.getEventRegistrations({
    page, 
    search, 
    status: "VERIFIED", // Only get verified registrations
    event_name, 
    user_type
  });

  return (
    <AttendanceClient 
      data={response.data} 
      meta={response} 
      title="Event Attendance" 
    />
  );
}
