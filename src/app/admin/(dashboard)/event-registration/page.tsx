import RegistrationClient from "@/components/admin/event-registration/RegistrationClient";
import { registrationService } from "@/services/registration-service"; // 👈 Import yang SERVER

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string; search?: string; status?: string; event_name?: string; user_type?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const search = params.search || "";
  const status = params.status || "";
  const event_name = params.event_name || "";
  const user_type = params.user_type || "";
  
  const response = await registrationService.getEventRegistrations({
    page, search, status, event_name, user_type
  });

  return (
    <RegistrationClient 
      data={response.data} 
      meta={response} 
      title="Event Registrations" 
    />
  );
}