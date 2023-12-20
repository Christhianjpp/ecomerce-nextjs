import Image from 'next/image';
import { UpdateInvoice, UpdateSubCategory } from '../buttons';
import { prisma } from '@/libs/prisma';
import DeleteAlertDialog from '@/components/DeleteAlertDialog';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';

export default async function SubCategoryTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    //   const invoices = await fetchFilteredInvoices(query, currentPage);
    const subcategories = await prisma.subCategory.findMany({
        orderBy: {
            name: 'asc',
        },
    });




    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div >
                        {subcategories?.map((sub) => (
                            <div
                                key={sub.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between ">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{sub.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <UpdateSubCategory id={sub.id} />
                                        <DeleteAlertDialog from="SubCategory" id={sub.id} />
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}