import { getUserLogin } from '@/libs/auth/actions-register';
import NextAuth from 'next-auth'
import { z } from 'zod'

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';

const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'jsmit' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);


                if (!parsedCredentials.success) {
                    console.log('return parsedCredentials')
                    return null;
                }

                const user = await getUserLogin(credentials!.email, credentials!.password)
                if (!user) {

                    throw new Error("Invalid credentials");

                }
                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    image: user.img,
                    role: user.role,
                }


            }
        }),
        GoogleProvider({
            clientId: `${process.env.GOOGLE_ID}`,
            clientSecret: `${process.env.GOOGLE_SECRET}`,
        }),         

    ],
    pages: {
        signIn: '/auth/login',
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }