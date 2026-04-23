import RegistrationClient from "@/components/admin/competition-registration/RegistrationClient";
import { registrationService } from "@/services/registration-service";

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string; search?: string; status?: string; competition_name?: string; category?: string; user_type?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const search = params.search || "";
  const status = params.status || "";
  const competition_name = params.competition_name || "";
  const category = params.category || "";
  const user_type = params.user_type || "";
  
  const response = await registrationService.getCompetitionsRegistrations({
    page, search, status, competition_name, category, user_type
  });

  return (
    <RegistrationClient 
      data={response.data} 
      meta={response} 
      title="Competition Registrations" 
    />
  );
}
