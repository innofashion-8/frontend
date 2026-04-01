import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
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
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        token: { label: "Token", type: "text" },
        user: { label: "User", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.token || !credentials?.user) return null;
        
        try {
          const userData = JSON.parse(credentials.user);
          return {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            accessToken: credentials.token,
            is_profile_complete: userData.is_profile_complete,
            userType: userData.type,
          };
        } catch (error) {
          return null;
        }
      },
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

    // 🔥 FIX INFINITE LOOP: NANGKEP TRIGGER "update" DARI HALAMAN REGISTRASI 🔥
    async jwt({ token, account, user, trigger, session }) {
      
      // 1. TANGKAP SINYAL UPDATE DARI CLIENT
      if (trigger === "update" && session?.is_profile_complete !== undefined) {
        token.is_profile_complete = session.is_profile_complete;
      }

      // 2. CREDENTIALS LOGIN (IMPERSONATE)
      if (account?.provider === "credentials" && user) {
        token.accessToken = (user as any).accessToken;
        token.is_profile_complete = (user as any).is_profile_complete;
        token.userType = (user as any).userType;
        token.role = null;
        token.division = null;
        token.permissions = [];
        return token;
      }

      // 3. PROSES LOGIN ADMIN
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
      
      // 4. PROSES LOGIN USER BIASA
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

    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.role = (token.role as string) || null;
      session.user.permissions = (token.permissions as string[]) || [];
      session.user.division = token.division as string;
      session.user.is_profile_complete = (token.is_profile_complete as boolean) || false;
      session.user.userType = token.userType as (UserTypes | 'ADMIN');
      
      return session;
    },
  },
  
  pages: {
    signIn: '/login',
    error: '/login',
  },

  session: { 
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
   },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);