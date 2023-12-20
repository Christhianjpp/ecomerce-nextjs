'use client'
import Link from 'next/link';
import {
    Bars2Icon,
    Bars3Icon,
    BookmarkIcon, QrCodeIcon, RectangleGroupIcon, SparklesIcon, UserCircleIcon,

} from '@heroicons/react/24/outline';
import { useFormState } from 'react-dom';
import { useCallback, useEffect, useState } from 'react';
import { createProduct } from '@/libs/products/actions';
import { getMaterialsByCategory } from '@/libs/material/actions';
import { IMaterial, ISubCategories } from '@/interfaces/models';
import { getSubCategoriesByCategory } from '@/libs/subcategorias/actions';
import BtnSubmit from '../btn-submit';

interface Props {


    categories: {
        id: string,
        name: string
    }[]

}
export default function FormProduct({ categories }: Props) {
    const [selectCategory, setSelectCategory] = useState("")
    const [isMaterials, setIsMaterials] = useState<IMaterial[]>()
    const [isSubCategories, setIsSubCategories] = useState<ISubCategories[]>()

    // const handleAction = data?.id
    //     ? updateCategory.bind(null, data.id)
    //     : createCategory

    const initialState = { message: '', errors: {} };

    const [state, dispatch] = useFormState(createProduct, initialState);

    // useEffect(() => {
    //     getSelect()
    // }, [selectCategory])

    // const getSelect = async () => {
    //     const material = await getMaterialsByCategory(selectCategory)
    //     setIsMaterials(material)
    //     const subcategories = await getSubCategoriesByCategory(selectCategory)
    //     setIsSubCategories(subcategories)
    // }

    const getSelect = useCallback(async () => {
        const material = await getMaterialsByCategory(selectCategory);
        setIsMaterials(material);

        const subcategories = await getSubCategoriesByCategory(selectCategory);
        setIsSubCategories(subcategories);
    }, [selectCategory]);

    useEffect(() => {
        getSelect();
    }, [getSelect]);
    console.log(state.errors)
    return (
        // <form action={createProduct}>
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                <div className="mb-4">
                    <label htmlFor="category" className='mb-2 block text-sm font-medium'>
                        Categoría
                    </label>
                    <div className='relative'>
                        <select
                            id="category"
                            name='categoryId'
                            className="peer block w-full cursor-pointer 
                            rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2
                             placeholder:text-gray-500"
                            defaultValue=""
                            onChange={(e) => setSelectCategory(e.target.value)}
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
                    <label htmlFor="category" className='mb-2 block text-sm font-medium'>
                        SubCategoría
                    </label>
                    <div className='relative'>
                        <select
                            id="category"
                            name='subcategoryId'
                            className="peer block w-full cursor-pointer 
                            rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2
                             placeholder:text-gray-500"
                            defaultValue=""
                        >
                            {isSubCategories?.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                            <option value="" disabled>
                                Selecciona una SubCategoría
                            </option>
                        </select>
                        <RectangleGroupIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />

                    </div>
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.subcategoryId &&
                            state.errors.subcategoryId.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="material" className='mb-2 block text-sm font-medium'>
                        Material
                    </label>
                    <div className='relative'>
                        <select
                            id="material"
                            name='materialId'
                            className="peer block w-full cursor-pointer 
                            rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2
                             placeholder:text-gray-500"
                            defaultValue=""
                        >
                            {isMaterials?.map((material) => (
                                <option key={material.id} value={material.id}>
                                    {material.name}
                                </option>
                            ))}
                            <option value="" disabled>
                                Selecciona un Material
                            </option>
                        </select>
                        <SparklesIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />

                    </div>
                    <div id="customer-error" aria-live="polite" aria-atomic="true">
                        {state.errors?.materialId &&
                            state.errors.materialId.map((error: string) => (
                                <p className="mt-2 text-sm text-red-500" key={error}>
                                    {error}
                                </p>
                            ))}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="codeReference" className="mb-2 block text-sm font-medium">
                        Codigo de Producto
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="codeReference"
                                name="codeReference"
                                type="text"

                                placeholder="JA00001"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'
                            />
                            <QrCodeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>

                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="codeReferenceFactory" className="mb-2 block text-sm font-medium">
                        Codigo de Producto Fabrica
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="codeReferenceFactory"
                                name="codeReferenceFactory"
                                type="text"

                                placeholder="JA00001"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'
                            />
                            <QrCodeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>

                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Nombre
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="text"

                                placeholder="Aretes con piedras"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby='customer-error'
                            />
                            <Bars2Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        {/* <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.name &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.name}
                                </p>
                            }
                        </div> */}
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="mb-2 block text-sm font-medium">
                        Descripción
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <textarea
                                id="description"
                                name="description"
                                className="peer block w-full rounded-md border
                                 border-gray-200 py-2 md:h-16 h-20 pl-10 text-sm outline-2 placeholder:text-gray-500 "
                                aria-describedby='customer-error'
                            />
                            <Bars3Icon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="customer-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.description &&

                                <p className="mt-2 text-sm text-red-500">
                                    {state.errors.description}
                                </p>
                            }
                        </div>
                    </div>
                </div>


            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/productos"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                {/* <Button type="submit">Create Invoice</Button> */}

                <BtnSubmit title='Crear' />
            </div>
        </form >
    );
}
