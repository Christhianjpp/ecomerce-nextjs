import { IProduct, IProductView, IProductWithVariants, IVariant, IVariantView } from '@/interfaces/IProduct'
import Image from 'next/image'
import React from 'react'
import { ImageSKU, UpdateSku } from '../buttons'
import DeleteAlertDialog from '@/components/DeleteAlertDialog'
import { formatCurrency } from '../../../middleware/formatCurrency';
interface Props {
    product: IProductView
}
const ViewProduct = ({ product }: Props) => {

    if (!product) {
        return <div>Loading...</div>
    }
    return (
        <div className=' mt-8 h-full'>
            <div className='h-auto justify-center flex lg:flex-row flex-col  gap-4'>
                <div className='bg-gray-400'>
                    {product.id}
                    <img
                        src={''}
                        alt={product.name}
                        className='object-cover w-72 h-72'
                    />
                </div>
                <div className='space-y-6'>
                    <div className=' md:flex gap-8'>
                        <p className=''>
                            <span className='text-lg font-bold pr-2'>
                                Categoría:
                            </span>
                            {product.category.name}
                        </p>
                        <p className=''>
                            <span className='text-lg font-bold pr-2'>
                                SubCategoría:
                            </span>
                            {product.subcategory.name}
                        </p>
                    </div>
                    <div className=' md:flex gap-8'>
                        <p className=''>
                            <span className='text-lg font-bold pr-2'>
                                Referencia:
                            </span>
                            {product.codeReference}
                        </p>
                        <p className=''>
                            <span className='text-lg font-bold pr-2'>
                                Referencia Fabricante:
                            </span>
                            {product.codeReferenceFactory}
                        </p>
                    </div>
                    <div className=' md:flex gap-8'>
                        <p className=''>
                            <span className='text-lg font-bold pr-2'>
                                Material:
                            </span>
                            {product.material?.name}
                        </p>

                    </div>
                    <div>
                        <h1 className='text-2xl font-bold'>{product.name}</h1>
                        <p className='text-gray-500'>{product.description}</p>
                    </div>
                    <div className=' md:flex gap-8'>
                        <p className=''>
                            <span className='text-lg font-bold pr-2'>
                                Precio
                            </span>
                            {product.codeReference}
                        </p>
                        <p className=''>
                            <span className='text-lg font-bold pr-2'>
                                Cantidad:
                            </span>
                            {product.codeReferenceFactory}
                        </p>
                    </div>
                </div>

            </div>

            <div className="mt-10 flow-root">


                <div className="inline-block min-w-full align-middle">
                    <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                            <div className="md:hidden">
                                {product.variants?.map((variant: IVariantView) => (
                                    <div
                                        key={product.id}
                                        className="mb-2 w-full rounded-md bg-white p-4"
                                    >
                                        <div className="flex items-center justify-between border-b pb-4">
                                            <div>
                                                <div className="mb-2 flex items-center">
                                                    <img
                                                        src={variant.imgs.length > 0 ? variant.imgs[0] : 'placeholder.jpg'}
                                                        alt={variant.sku}
                                                        className="w-20 h-20 object-cover"
                                                    />
                                                    <p>{variant.sku}</p>
                                                </div>
                                                <p className="text-xs text-gray-500">{product.description}</p>
                                            </div>

                                        </div>
                                        <div className="flex w-full items-center justify-between pt-4">
                                            <div>
                                                <p className="text-sm font-medium">
                                                    Precio: {variant.price}
                                                </p>
                                                <p className='text-sm'>

                                                    Cantidad: {variant.QuantityAvailable}
                                                </p>
                                                <p className='text-sm'>
                                                    Color: {variant.color}

                                                </p>
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                a0000
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <table className="hidden min-w-full text-gray-900 md:table">
                            <thead className="rounded-lg text-left text-sm font-normal">
                                <tr>
                                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                        Imagen
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        SKU
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Color
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Talla
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Cantidad
                                    </th>
                                    <th scope="col" className="px-3 py-5 font-medium">
                                        Precio
                                    </th>

                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {product.variants.map((variant: IVariantView) => (
                                    <tr
                                        key={variant.id}
                                        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    >
                                        <td className="whitespace-nowrap py-3 pl-4">
                                            <img
                                                src={variant.imgs.length > 0 ? variant.imgs[0] : 'placeholder.jpg'}
                                                alt={variant.sku}
                                                className="w-20 h-20 object-cover"
                                            />

                                        </td>
                                        <td className="text-xs  px-3 py-3  overflow-hidden">
                                            {variant.sku}
                                        </td>
                                        <td className="text-xs  px-3 py-3  overflow-hidden">
                                            {variant.color}
                                        </td>
                                        <td className="text-xs  px-3 py-3  overflow-hidden">
                                            {variant.size}
                                        </td>
                                        <td className="text-xs  px-3 py-3  overflow-hidden">
                                            {variant.QuantityAvailable}
                                        </td>
                                        <td className="text-xs  px-3 py-3  overflow-hidden">
                                            {formatCurrency(variant.price)}
                                        </td>
                                        <td className="whitespace-nowrap py-3  pr-3">


                                            <div className="flex justify-end gap-3">

                                                <UpdateSku id={product.id} ids={variant.id} />
                                                <ImageSKU id={product.id} ids={variant.id} />
                                                <DeleteAlertDialog from="SKU" id={variant.id} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ViewProduct