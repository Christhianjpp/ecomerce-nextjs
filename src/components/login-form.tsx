
"use client"
import {
    AtSymbolIcon,
    KeyIcon,

    EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './ui/button';
import { lusitana } from './ui/fonts';
import { FormEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';



export default function LoginForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const [error, setError] = useState('')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        setLoading(true)


        const resp = await signIn('credentials', {
            email,
            password,
            redirect: false,
        })
        setLoading(false)
        if (resp?.error) return setError(resp.error as string)

        if (resp?.ok) {
            router.push('/perfil')

            return
        }

    }
    return (
        <form className="space-y-3" onSubmit={handleSubmit}>

            <div className="flex-1 px-6 pb-4 pt-6 rounded-md border border-gray-200 shadow-lg opacity-70 hover:opacity-100">
                <div className='justify-center items-center flex '>

                    <p className={`${lusitana.className}`}>
                        <EnvelopeIcon className="h-7 w-7 text-gray-500 " />


                    </p>
                    <p className='ml-2 text-lg'>
                        Continua con tu correo
                    </p>
                </div>
                <div className="w-full ">
                    <div className='h-5 ' id="customer-error" aria-live="polite" aria-atomic="true">
                        {error &&
                            <p className="mt-2 text-sm text-red-500">
                                {error}
                            </p>
                        }
                    </div>
                    <div>
                        <label
                            className="mb-1  block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Correo electrónico
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                autoCapitalize="none"
                                autoComplete="email"
                                autoCorrect="off"
                                placeholder="Enter your email address"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-1 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Contraseña                        </label>
                        <div className="relative">
                            <input
                                className=" block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                autoCapitalize="none"
                                autoComplete="off"
                                autoCorrect="off"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <Button className="mt-6 w-full bg-slate-800">

                    {loading ? <div className="inline-block animate-spin ease duration-300 w-6 h-6 border-t-4 border-red-600 border-solid rounded-full"></div>
                        : <div className='flex justify-center w-full'>
                            <p>Iniciar Sesión</p>
                            {/* <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /> */}
                        </div>}

                </Button>

            </div>
        </form>
    );
}


