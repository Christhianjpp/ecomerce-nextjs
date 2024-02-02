import { IProductMap } from '@/interfaces/IProduct'
import { formatCurrency } from '@/middleware/formatCurrency'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const width = 400
const height = 300
const ProductView = ({ id, variants, material, subcategory }: IProductMap) => {
    return (
        <div>

            <Link href={`/producto/${id}`} key={id}>

                <div className=' overflow-hidden bg-neutral-50  '>
                    <Image
                        width={width}
                        height={height}
                        className='w-[400px] h-[300px] object-cover rounded-sm '
                        src={variants[0]?.imgs.length > 0 ? variants[0].imgs[0] : "/images/placeholder.png"}
                        alt="" />

                </div>
            </Link>
            <div className='mt-2 m-2  flex justify-between'>
                <div>
                    <h3 className='mt-1 text-sm font-semibold text-neutral-900'>{material?.name} </h3>
                    <p className='mt-1 text-sm text-neutral-500'>{subcategory.name}</p>
                </div>
                <p className='mt-1 text-sm font-medium text-neutral-900'>{formatCurrency(variants[0]?.price)}</p>
            </div>



        </div>
    )
}

export default ProductView