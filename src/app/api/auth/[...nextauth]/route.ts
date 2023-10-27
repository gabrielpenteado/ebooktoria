import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
  ],
  callbacks: {
    // @ts-ignore
    async signIn({ account, profile }) {
      if (profile.email_verified && profile.email === process.env.GMAIL) {
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: "/userlogged",
  },
};
// @ts-ignore
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
