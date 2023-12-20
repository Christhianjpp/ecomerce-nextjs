'use client'
import Link from 'next/link';
import {
    CurrencyDollarIcon, SquaresPlusIcon, SwatchIcon,

} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { updateSKU } from '@/libs/sku/actions';
import { ScaleIcon } from 'lucide-react';
import { IVariant } from '@/interfaces/IProduct';
import BtnSubmit from '../btn-submit';

interface Props {
    ids: string,
    id: string,
    sku: IVariant | null,
}
export default function FormSKUEdit({ ids, id, sku }: Props) {


    const initialState = { message: '', errors: {} };

    const handleAction = updateSKU.bind(null, ids, id)
    const [state, dispatch] = useFormState(handleAction, initialState);

    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
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
                                defaultValue={sku?.color}

                                placeholder="black"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'

                            />
                            <SwatchIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.color &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.color}
                                </p>
                            }
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
                                defaultValue={sku?.size}
                                placeholder="small"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'

                            />
                            <ScaleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.size &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.size}
                                </p>
                            }
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="mb-2 block text-sm font-medium">
                        Precio
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="price"
                                name="price"
                                type="text"
                                defaultValue={sku!.price / 100}
                                placeholder="0"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'

                            />
                            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.price &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.price}
                                </p>
                            }
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
                                defaultValue={sku?.QuantityAvailable}
                                placeholder="0"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'

                            />
                            <SquaresPlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.QuantityAvailable &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.QuantityAvailable}
                                </p>
                            }
                        </div>
                    </div>
                </div>


            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href={`/dashboard/productos/${id}/producto`}
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                {/* <Button type="submit">Create Invoice</Button> */}
                <BtnSubmit title='Editar' />
            </div>
        </form >
    );
}
