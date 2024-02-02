import AllProducts from '@/components/AllProducts'
import Pagination from '@/components/dashboad/pagination'
import SkeletonsProducts from '@/components/dashboad/product/skeletons-products';
import SkeletonsProductsCategory from '@/components/dashboad/product/skeletons-productsCategory';
import { getProductsCategory, getTotalCategoryPages } from '@/libs/products/actions'
import React, { Suspense } from 'react'
interface Props {
    searchParams: { page?: string, query?: string };
    params: { categoria: string }
}
const Categorias = async ({ searchParams, params }: Props) => {
    const { page, query = '' } = searchParams
    const { categoria } = params

    const currentPage = Number(searchParams?.page) || 1;

    // const products = await getProductsCategory(currentPage, categoria, query)

    const totalPages = await getTotalCategoryPages(categoria, query)

    return (
        <div className='h-full'>
            <Suspense
                key={query + currentPage}
                fallback={<SkeletonsProductsCategory />}>
                {/* <AllProducts products={products} /> */}
                <AllProducts currentPage={currentPage} categoria={categoria} query={query} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}

export default Categorias