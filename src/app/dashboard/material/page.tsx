import Search from '@/components/dashboad/Search';
import { CreateMaterial } from '@/components/dashboad/buttons';
import MaterialTable from '@/components/dashboad/material/table';
import { lusitana } from '@/components/ui/fonts';
import React, { Suspense } from 'react'

const Material = ({
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
                <h1 className={`${lusitana.className} text-2xl`}>Material</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
                <CreateMaterial />
            </div>
            <Suspense
                key={query + currentPage}
                fallback={<>Loading...</>}>
                <MaterialTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    );
}

export default Material