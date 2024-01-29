import { getUserLogin } from '@/libs/auth/actions-register';
import NextAuth from 'next-auth'
import { z } from 'zod'
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google';
import prisma from '@/libs/prisma';
import { User } from '@prisma/client';


interface IUser {
    id: string;
    name: string | null;
    email: string;
    image: string | null;
    createAt: Date;
    role: string;
}
const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'jsmit' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);


                if (!parsedCredentials.success) {
                    return null;
                }

                const userBD = await getUserLogin(credentials!.email, credentials!.password)
                if (!userBD) {

                    throw new Error("Invalid credentials");

                }
                const { id, name, email, image, createAt, role } = userBD

                const user: IUser = {
                    id: JSON.stringify(id),
                    name,
                    email,
                    image,
                    createAt,
                    role
                }

                return user


            }
        }),
        GoogleProvider({
            clientId: `${process.env.GOOGLE_ID}`,
            clientSecret: `${process.env.GOOGLE_SECRET}`,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    role: profile.role ? profile.role : 'User',
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {

            // if (user) {
            //     return { ...token, ...user }
            // }

            if (user) {
                token.user = user as User
            }
            return { ...token }

        },
        async session({ session, token, user }) {

            session.user = token.user as User
            console.log('sesion', session)
            return session

        }
    },
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/signout',

    }

}
)


export { handler as GET, handler as POST }