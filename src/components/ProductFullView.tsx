import { getProductFull } from '@/libs/products/actions'
import Image from 'next/image'
import React from 'react'
import { formatCurrency } from '../middleware/formatCurrency';
const width = 1000
const height = 1000
const ProductFullView = async ({ id }: { id: string }) => {
    const product = await getProductFull(id)
    if (!product) return <div>No se encontro el producto</div>
    return (
        <div className='mx-auto max-w-7xl p-8 pb-2 ' >
            <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-9 '>
                <div className='md:col-span-1 lg:col-span-4'>
                    <div className='aspect-[34/34] overflow-hidden bg-neutral-50'>

                        {
                            product?.variants[0].imgs[0] ?
                                <Image
                                    width={width}
                                    height={height}
                                    className='w-full h-full object-cover rounded-sm '
                                    src={product?.variants[0].imgs[0]}
                                    alt="" />
                                : <Image
                                    width={width}
                                    height={height}
                                    className='w-[400px] h-[300px] object-cover rounded-sm '
                                    src="/images/placeholder.png"
                                    alt="" />
                        }
                    </div>

                </div>
                <div className='flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-4 lg:pt-16'>
                    <h1 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                        {product?.material?.name}
                    </h1>
                    <p className=' text-sm'>{formatCurrency(product?.variants[0].price)}</p>
                    <div className='mt-8' >
                        <button className='px-4 py-2 text-white bg-neutral-900 rounded-md'>Agregar al carrito</button>
                    </div>
                    <p className='mt-8 space-y-6 text-sm to-neutral-500'>{product?.description}</p>
                </div>


            </div>


        </div>
    )
}

export default ProductFullView