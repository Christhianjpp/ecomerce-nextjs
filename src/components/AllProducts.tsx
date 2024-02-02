
import { getProductsCategory, getProductsHome } from '@/libs/products/actions'
import Link from 'next/link'
import { formatCurrency } from '../middleware/formatCurrency';
import Image from 'next/image';
import ProductMap from './ProductMap';
const width = 400
const height = 300





const AllProducts = async ({ currentPage, categoria, query }: { currentPage: number, categoria: string, query: string }) => {

    // const products = categoria ? await getProductsCategory(currentPage, categoria, query) : await getProductsHome(currentPage, query)
    const products = categoria ? await getProductsCategory(currentPage, categoria, query) : await getProductsHome(currentPage, query)

    if (!products) return <div>loading...</div>
    return (
        <div className='mx-auto max-w-7xl p-8 pb-2'>
            {/* <div className='flex justify-between mb-8'>
                <p className='font-normal font-sans text-sm'>Más Vendidos</p>
                <Link href='/' className='flex gap-x-1 items-center '>
                    <p className='font-normal font-sans txt-sm '>
                        Ver todo
                    </p>
                </Link>

            </div> */}
            <ProductMap products={products} />


        </div>
    )
}

export default AllProducts