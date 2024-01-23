import Image from 'next/image';
import { UpdateInvoice } from '../buttons';

import DeleteAlertDialog from '@/components/DeleteAlertDialog';
import { getCategories } from '@/libs/categorias/actions';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';

export default async function CategoryTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    //   const invoices = await fetchFilteredInvoices(query, currentPage);
    const categories = await getCategories()




    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div >
                        {categories?.map((invoice) => (
                            <div
                                key={invoice.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between ">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{invoice.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <UpdateInvoice id={invoice.id} />
                                        <DeleteAlertDialog from='Category' id={invoice.id} />
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
