import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import {UserListType} from "@/app/types";
import User from '@/db/models/user';
import {connectDb} from "@/db/dbConn";

export const { auth, signIn, signOut, handlers: { GET, POST }, } = NextAuth({
    ...authConfig,
    providers: [Credentials({ name: "credentials",
        credentials: {
            email: { label: "Email", type: "email" },
            password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            await connectDb();
            const user   =await User.findOne({email: credentials.email});
            if (!user) return null;
            if (credentials.password==user.password) {
                return user;

                }
            return null;
        },})],
});