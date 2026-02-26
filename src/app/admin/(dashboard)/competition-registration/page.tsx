import RegistrationClient from "@/components/admin/competition-registration/RegistrationClient";
import { registrationService } from "@/services/registration-service";

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  
  const response = await registrationService.getCompetitionsRegistrations(page);

  return (
    <RegistrationClient 
      data={response.data} 
      meta={response} 
      title="Competition Registrations" 
    />
  );
}
