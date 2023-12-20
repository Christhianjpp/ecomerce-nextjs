import Search from '@/components/dashboad/Search';
import { CreateCategory, CreateProduct, CreateSubCategory } from '@/components/dashboad/buttons';
import SubCategoryTable from '@/components/dashboad/subcategory/table';
import { lusitana } from '@/components/ui/fonts';
import React, { Suspense } from 'react'

const SubCategorias = ({
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
                <h1 className={`${lusitana.className} text-2xl`}>SubCategorias</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <CreateSubCategory />
            </div>
            <Suspense
                key={query + currentPage}
                fallback={<>Loading...</>}>
                <SubCategoryTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    );
}

export default SubCategorias