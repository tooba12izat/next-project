'use server'

import {signIn} from "@/auth";
import {AuthError} from "next-auth";

export async function authenticate(prevState: any,formData: FormData
) {
    try {
        const email=formData.get('email')
        const password=formData.get('password')
        await signIn('credentials', {email,password});
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { message: 'Invalid credentials' }
                default:
                    return { message: 'something went wrong' }
            }
        }
        throw error;
    }
}