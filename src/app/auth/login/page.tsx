'use client'
import LoginForm from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



export default function LoginPage() {

    const { data: session } = useSession()
    const router = useRouter()
    if (session) {
        router.push('/')
    }
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-3 p-4 md:-mt-32">
                <div className="flex h-20 w-full  rounded-lg bg-gray-400 p-3 md:h-30 justify-center items-center">
                    <div className=" text-white text-xl font-semibold ">
                        Rise and Shine
                    </div>
                </div>
                <Button
                    variant={"outline"}
                    className={"flex items-center justify-center gap-2 w-full h-12 rounded-md border border-gray-200 shadow-lg text-gray-400"}
                    onClick={() => signIn('google')}>

                    <svg viewBox="0 0 48 48" width="24" height="24">
                        <title>Google Logo</title>
                        <clipPath id="g">
                            <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
                        </clipPath>
                        <g className="colors" clipPath="url(#g)">
                            <path fill="#FBBC05" d="M0 37V11l17 13z" />
                            <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                            <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                            <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
                        </g>
                    </svg>
                    <span className="ml-2 text-lg">Continuar con Google</span>
                </Button>

                <LoginForm />
            </div>
        </main>
    );
}