import { User } from "@prisma/client"
import { withAuth } from "next-auth/middleware"

export default withAuth({
    callbacks: {
        async authorized({ req, token }) {

            const user: User = token?.user as any

            if (req.nextUrl.pathname.startsWith('/dashboard'))

                return user?.role === 'Admin';
            return !!token;
        }
    }
})

export const config = {
    matcher: ['/dashboard/:path*'],

}