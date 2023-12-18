import type { NextAuthConfig } from 'next-auth';


export const authConfig = {
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/auth/login',
    },callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/users');
            const isOnLoginPage=nextUrl.pathname.startsWith('/auth/login')
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
                 
            } else if (isLoggedIn) {
                if(isOnLoginPage){
                return Response.redirect(new URL('/users', nextUrl));}
            }
            return true;
        },
        session: async ({ session, token }) => {
            if (session?.user) {
                // @ts-ignore
                session.user.id = token.uid;
            }
            return session;
        },
        jwt: async ({ user, token }) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
