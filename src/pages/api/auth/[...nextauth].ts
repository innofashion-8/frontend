import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { authService } from './../../../services/auth-service'; 
import { UserTypes } from "@/types/user";
import { BackendAuthResponse } from "@/types/auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      id: "google-admin",
      name: "Admin Google",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GoogleProvider({
      id: "google-user",
      name: "User Google",
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      id: "credentials-user",
      name: "User Email",
      credentials: { email: { type: "text" }, password: { type: "password" } },
      async authorize(credentials) {
        const authData = await authService.loginWithCredentials(credentials?.email, credentials?.password);
        return { id: authData.id || "1", ...authData } as any; 
      }
    })
  ],

  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider === "credentials-user" && user) {
        const data = user as unknown as BackendAuthResponse;
        token.accessToken = data.token;
        token.role = data.role;
        token.permissions = data.permissions;
        token.userType = data.userType;
      } 
      else if (account?.provider === "google-admin" && account.access_token) {
        try {
            const data = await authService.loginGoogleAdmin(account.access_token);
            token.accessToken = data.token;
            token.role = data.role;
            token.permissions = data.permissions;
            token.userType = data.userType;
        } catch(e: any) { 
            throw new Error(e.message || "Akses ditolak. Anda bukan Admin."); 
        }
      }
      else if (account?.provider === "google-user" && account.access_token) {
        try {
            const data = await authService.loginGoogleUser(account.access_token);
            token.accessToken = data.token;
            token.role = data.role;
            token.permissions = data.permissions;
            token.userType = data.userType;
        } catch(e: any) { 
            throw new Error(e.message || "Gagal login dengan Google"); 
        }
      }
      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.role = (token.role as string) || null;
      session.user.permissions = (token.permissions as string[]) || [];
      
      session.user.userType = token.userType as (UserTypes | 'ADMIN');
      
      return session;
    },
  },
  
  pages: {
    signIn: '/login',
  },

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);