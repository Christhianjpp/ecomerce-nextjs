import Search from '@/components/dashboad/Search';
import { CreateProduct } from '@/components/dashboad/buttons';
import Pagination from '@/components/dashboad/pagination';
import SkeletonsProducts from '@/components/dashboad/product/skeletons-products';
import ProductTable from '@/components/dashboad/product/table';
import { lusitana } from '@/components/ui/fonts';
import { getTotalPages } from '@/libs/products/actions';
import React, { Suspense } from 'react'

const Productos = async ({
    searchParams
}: {
    searchParams?: {
        query?: string;
        page?: string;

    }
}) => {

    const currentPage = Number(searchParams?.page) || 1;
    const query = searchParams?.query || '';
    const totalPages = await getTotalPages(query)
    console.log(totalPages)
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Productos</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <CreateProduct />
            </div>
            <Suspense
                key={query + currentPage}
                fallback={<SkeletonsProducts />}>
                <ProductTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}

export default Productos