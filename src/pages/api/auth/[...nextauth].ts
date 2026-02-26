import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { authService } from './../../../services/auth-service'; 
import { UserTypes } from "@/types/user";

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
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google-admin") {
        const email = profile?.email || "";
        if (!email.endsWith("@john.petra.ac.id")) {
          return "/admin/login?error=EmailNotAllowed"; 
        }
      }
      return true;
    },

    // ✅ FIX: Tambahkan parameter 'trigger' dan 'session' (untuk nangkep update dari page.tsx)
    async jwt({ token, account, trigger, session }) {
      
      // 1. TANGKAP SINYAL UPDATE DARI page.tsx
      if (trigger === "update" && session?.is_profile_complete !== undefined) {
        token.is_profile_complete = session.is_profile_complete;
      }

      // 2. PROSES LOGIN ADMIN
      if (account?.provider === "google-admin" && account.access_token) {
        try {
            const data = await authService.loginGoogleAdmin(account.access_token);
            token.accessToken = data.token;
            token.role = data.role;
            token.division = data.division;
            token.is_profile_complete = data.is_profile_complete;
            token.permissions = data.permissions;
            token.userType = data.userType;
        } catch(e: any) { 
            throw new Error("ADMIN_ERROR:" + (e.message || "Akses ditolak. Anda bukan Admin.")); 
        }
      }
      
      // 3. PROSES LOGIN USER BIASA
      else if (account?.provider === "google-user" && account.access_token) {
        try {
            const data = await authService.loginGoogleUser(account.access_token);
            token.accessToken = data.token;
            token.role = data.role;
            token.division = data.division;
            token.is_profile_complete = data.is_profile_complete;
            token.permissions = data.permissions;
            token.userType = data.userType;
        } catch(e: any) { 
            throw new Error(e.message || "Gagal login dengan Google"); 
        }
      }

      return token;
    },

    // ✅ FIX: Lempar data is_profile_complete yang UDAH TER-UPDATE ke session
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.role = (token.role as string) || null;
      session.user.permissions = (token.permissions as string[]) || [];
      session.user.division = token.division as string;
      session.user.is_profile_complete = (token.is_profile_complete as boolean) || false; // Pakai false jika null/undefined
      session.user.userType = token.userType as (UserTypes | 'ADMIN');
      
      return session;
    },
  },
  
  pages: {
    signIn: '/login',
    error: '/login',
  },

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);