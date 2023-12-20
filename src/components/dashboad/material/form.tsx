'use client'
import Link from 'next/link';
import {
    BookmarkIcon, SparklesIcon
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { createMaterial } from '@/libs/material/actions';

interface Props {

    categories: {
        id: string,
        name: string
    }[]

}
export default function FormMaterial({ categories }: Props) {

    // const handleAction = data?.id
    //     ? updateCategory.bind(null, data.id)
    //     : createCategory

    const initialState = { message: '', errors: {} };

    const [state, dispatch] = useFormState(createMaterial, initialState);
    console.log(state)
    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="category" className='mb-2 block text-sm font-medium'>
                        Selecciona una Categoría
                    </label>
                    <div className='relative'>
                        <select
                            id="category"
                            name='categoryId'
                            className="peer block w-full cursor-pointer 
                            rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2
                             placeholder:text-gray-500"
                            defaultValue=""
                        >
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                            <option value="" disabled>
                                Selecciona una Categoría
                            </option>
                        </select>
                        <BookmarkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />

                    </div>
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.categoryId &&
                            state.errors.categoryId.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Escribe un Material
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"

                                placeholder="Oro"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'
                            />
                            <SparklesIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.name &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.name}
                                </p>
                            }
                        </div>
                    </div>
                </div>


            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/categorias"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                {/* <Button type="submit">Create Invoice</Button> */}
                <button className='flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
                >
                    Crear
                </button>
            </div>
        </form >
    );
}
