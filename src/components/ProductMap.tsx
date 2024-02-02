import { IProductMap } from '@/interfaces/IProduct'
import React from 'react'
import ProductView from './ProductView'
interface Props {
    products: IProductMap[]

}
const ProductMap = ({ products }: Props) => {
    return (
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {
                products.map((item, index) => (
                    <ProductView {...item} key={index} />
                ))
            }
        </div>
    )
}

export default ProductMap