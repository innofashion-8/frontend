import RegistrationClient from "@/components/admin/RegistrationClient";
import { registrationService } from "@/services/registration-service"; // 👈 Import yang SERVER

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  
  const response = await registrationService.getEventRegistrations(page);

  return (
    <RegistrationClient 
      data={response.data} 
      meta={response} 
      title="Event Registrations" 
    />
  );
}