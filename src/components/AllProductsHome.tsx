import AllProducts from '@/components/AllProducts'
import Pagination from '@/components/dashboad/pagination'
import SkeletonsProducts from '@/components/dashboad/product/skeletons-products';
import SkeletonsProductsCategory from '@/components/dashboad/product/skeletons-productsCategory';
import { getProductsCategory, getTotalCategoryPages, getTotalPages } from '@/libs/products/actions'
import React, { Suspense } from 'react'
interface Props {
    searchParams: { page?: string, query?: string };

}
const AllProductsHome = async ({ searchParams }: Props) => {
    const { page, query = '' } = searchParams


    const currentPage = Number(searchParams?.page) || 1;

    // const products = await getProductsCategory(currentPage, categoria, query)

    const totalPages = await getTotalPages(query)

    return (
        <div className='h-full'>
            <Suspense
                key={query + currentPage}
                fallback={<SkeletonsProductsCategory />}>
                {/* <AllProducts products={products} /> */}
                <AllProducts currentPage={currentPage} query={query} categoria='' />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}

export default AllProductsHome