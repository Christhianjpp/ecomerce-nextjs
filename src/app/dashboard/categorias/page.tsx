import Search from '@/components/dashboad/Search';
import { CreateCategory, CreateProduct } from '@/components/dashboad/buttons';
import CategoryTable from '@/components/dashboad/category/table';
import { lusitana } from '@/components/ui/fonts';
import React, { Suspense } from 'react'

const Categorias = ({
    searchParams
}: {
    searchParams?: {
        query?: string;
        page?: string;

    }
}) => {

    const currentPage = Number(searchParams?.page) || 1;
    const query = searchParams?.query || '';
    // const totalPages = await fetchInvoicesPages(query)

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Categorias</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <CreateCategory />
            </div>
            <Suspense
                key={query + currentPage}
                // fallback={<InvoicesTableSkeleton />}
                fallback={<div>Loading...</div>}
            >
                <CategoryTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    );
}

export default Categorias