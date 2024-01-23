'use client'
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
    UserIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './ui/button';
import { lusitana } from './ui/fonts';
import { createUser } from '@/libs/auth/actions-register';
import { useFormState, useFormStatus } from 'react-dom';


export default function RegisterForm() {
    const { pending } = useFormStatus()
    const initialState = { message: '', errors: {} };
    console.log(pending)
    const [state, dispatch] = useFormState(createUser, initialState);

    return (
        <form className="space-y-3 " action={dispatch}>
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-2 pt-5 ">
                <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                    Registro
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-2 mt-3 block text-xs font-medium text-gray-900"
                            htmlFor="name"
                        >
                            Nombre
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Introduzca su nombre"

                            />
                            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.name &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.name}
                                </p>
                            }
                        </div>
                    </div>
                    <div>
                        <label
                            className="mb-2 mt-3 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Correo Electrónico
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Introduzca su correo electrónico"

                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.email &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.email}
                                </p>
                            }
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-2 mt-3 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Introduzca su contraseña"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.password &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.password}
                                </p>
                            }
                        </div>
                    </div>
                </div>
                <Button className="mt-4 w-full bg-slate-700" type="submit" aria-disabled={pending}>

                    {pending ? <div className="inline-block animate-spin ease duration-300 w-6 h-6 border-t-4 border-red-600 border-solid rounded-full"></div>
                        : <div className='flex justify-end w-full'><p>Crear Cuenta</p> <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" /></div>}

                </Button>
                <div className="flex h-8 items-end space-x-1">
                    {/* Add form errors here */}
                </div>
            </div>
        </form>
    );
}
