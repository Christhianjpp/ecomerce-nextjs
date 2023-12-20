'use client'
import Link from 'next/link';
import {
    CurrencyDollarIcon,
    ScaleIcon,
    SquaresPlusIcon,
    SwatchIcon,
} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { createVariant } from '@/libs/sku/action';




interface Props {
    id: string
}
export default function FormSKU({ id }: Props) {


    // const handleAction = data?.id
    //     ? updateCategory.bind(null, data.id)
    //     : createCategory

    // const initialState = { message: '', errors: {} };
    const initialState = { message: '', errors: {} };

    const handleAction = createVariant.bind(null, id);

    const [state, dispatch] = useFormState(handleAction, initialState);



    // const handleAction = createVariant.bind(null, id)

    // const [state, dispatch] = useFormState(handleAction, initialState);




    return (
        // <form action={createProduct}>
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {JSON.stringify(state)}
                <div className="mb-4">
                    <label htmlFor="color" className="mb-2 block text-sm font-medium">
                        Color
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="color"
                                name="color"
                                type="text"

                                placeholder="Negro"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'
                            />
                            <SwatchIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>

                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="size" className="mb-2 block text-sm font-medium">
                        Talla
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="size"
                                name="size"
                                type="text"

                                placeholder="Small"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'
                            />
                            <ScaleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>

                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="precio" className="mb-2 block text-sm font-medium">
                        Precio
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="precio"
                                name="price"
                                type="text"
                                placeholder="sss"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'
                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="QuantityAvailable" className="mb-2 block text-sm font-medium">
                        Cantidad
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="QuantityAvailable"
                                name="QuantityAvailable"
                                type="text"

                                placeholder="s"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'
                            />
                            <SquaresPlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
