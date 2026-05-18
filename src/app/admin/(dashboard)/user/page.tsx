import { userService } from '@/services/user-service';
import UserClient from '@/components/admin/user/UserClient';

export default async function ManageUserPage({ searchParams }: { searchParams: Promise<{ page?: string; search?: string; type?: string }> }) {
  const params = await searchParams;
  const page = parseInt(params.page || "1");
  const search = params.search || "";
  const type = params.type || "";
  
  const users = await userService.getUsers(page, search, type);

  return <UserClient data={users} />;
}
