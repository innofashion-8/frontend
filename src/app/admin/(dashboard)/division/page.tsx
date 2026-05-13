import { divisionService } from '@/services/division-service';
import DivisionClient from '@/components/admin/division/DivisionClient';

export default async function ManageDivisionPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  
  const divisions = await divisionService.getDivisions(page);

  return <DivisionClient data={divisions} />;
}
