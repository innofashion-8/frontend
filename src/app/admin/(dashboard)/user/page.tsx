import { profileService } from '@/services/user-service';
import UserClient from '@/components/admin/user/UserClient';

export default async function ManageUserPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  
  const users = await profileService.getUsers(page);

  return <UserClient data={users} />;
}
