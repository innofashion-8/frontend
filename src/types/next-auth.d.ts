import NextAuth, { DefaultSession } from "next-auth";
import { UserTypes } from "./user";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      division: string | null;
      role: string | null;
      permissions: string[];
      is_profile_complete: boolean | null;
      userType: UserTypes | 'ADMIN';
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    role?: string | null;
    permissions?: string[];
    userType?: string;
    is_profile_complete?: boolean | null;
    division?: string | null;
  }
}