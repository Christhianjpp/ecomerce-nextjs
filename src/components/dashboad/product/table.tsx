import Image from 'next/image';
import { CreateVariant, UpdateInvoice, UpdateProduct, ViewProduct, } from '../buttons';
import { prisma } from '@/libs/prisma';
import DeleteAlertDialog from '@/components/DeleteAlertDialog';
import { formatCurrency } from '@/middleware/formatCurrency';
import { get } from 'http';
import { getProducts } from '@/libs/products/actions';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';

export default async function ProductTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    //   const invoices = await fetchFilteredInvoices(query, currentPage);
    // const productos = await prisma.product.findMany({
    //     orderBy: {
    //         name: 'asc',
    //     },
    // });

    // const productos = await prisma.product.findMany({
    //     orderBy: {
    //         name: 'asc',
    //     },
    //     select: {
    //         id: true,
    //         name: true,
    //         description: true,
    //         categoryId: true,
    //         subcategoryId: true,
    //         codeReference: true,
    //         codeReferenceFactory: true,
    //         category: {
    //             select: {

    //                 name: true,
    //             },
    //         },
    //         subcategory: {
    //             select: {

    //                 name: true,
    //             },
    //         },
    //         material: {
    //             select: {

    //                 name: true,
    //             },
    //         },
    //         variants: {
    //             select: {
    //                 imgs: true,
    //                 price: true,
    //                 QuantityAvailable: true,
    //             }
    //         }
    //     },
    // });

    const productos = await getProducts(currentPage, query)

    const totalQuantityAvailable = (variant: {
        QuantityAvailable: number;
    }[]) => {
        const totalQuantityAvailable: number = variant.reduce(
            (accumulator, currentVariant) => accumulator + currentVariant.QuantityAvailable,
            0
        );
        return totalQuantityAvailable
    }



    return (
        <div className="mt-6 flow-root">

            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
                    <div className="md:hidden">
                        {productos?.map((product) => (
                            <div
                                key={product.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <div className="mb-2 flex items-center space-x-2">
                                            <img
                                                src={product.variants[0]?.imgs.length > 0 ? product.variants[0].imgs[0] : 'placeholder.jpg'}
                                                alt={`${product.name}'s profile picture`}

                                                className="w-20 h-20 object-cover"
                                            />

                                            <p>{product.name}</p>
                                        </div>
                                        <p className="text-xs text-gray-500">{product.description}</p>
                                    </div>

                                </div>
                                <div className="flex w-full items-center justify-between pt-4">
                                    <div className='flex  space-x-4'>

                                        <div className='flex space-x-1'>
                                            <p className='font-medium text-neutral-700'>
                                                Precio:
                                            </p>
                                            <p className=" ">
                                                {formatCurrency(product.variants[0]?.price)}
                                            </p>
                                        </div>
                                        <div className='flex space-x-1'>
                                            <p className='font-medium text-neutral-700'>

                                                Cantidad:
                                            </p>
                                            <p className=''>

                                                {totalQuantityAvailable(product.variants)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <CreateVariant id={product.id} />
                                        <ViewProduct id={product.id} />
                                        <UpdateProduct id={product.id} />
                                        <DeleteAlertDialog from='Product' id={product.id} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Nombre
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Descripción
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Categoría
                                </th>
                                <th scope="col" className="px-4 py-3 font-medium flex flex-col justify-center items-center">
                                    <p>Sub</p>
                                    <p>
                                        Categoría
                                    </p>
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Material
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Código
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium ">
                                    Precio
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium ">
                                    Inventario
                                </th>
                                {/* <th scope="col" className="px-3 py-5 font-medium">
                                    Precios
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Cantidad
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                    <span className="sr-only">Edit</span>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {productos?.map((product) => (
                                <tr
                                    key={product.id}
                                    className="w-full   border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap py-3 pl-4">
                                        <div className="flex flex-col items-center gap-1">

                                            <img
                                                src={product.variants[0]?.imgs.length > 0 ? product.variants[0].imgs[0] : 'placeholder.jpg'}
                                                alt={`${product.name}'s profile picture`}

                                                className="w-20 h-20 object-cover"
                                            />
                                            <p className='text-xs'>{product.name}</p>
                                        </div>
                                    </td>
                                    <td className="text-xs  px-3 py-3  overflow-hidden">
                                        {product.description}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {product.category.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {product.subcategory?.name}
                                    </td>
                                    <td className="text-xs px-3 py-3">
                                        {product.material?.name}
                                    </td>
                                    <td className="text-xs px-3 py-3">
                                        <p className='text-xs font-semibold text-neutral-500   flex justify-center'>
                                            Código
                                        </p>
                                        <p className='text-xs flex justify-center uppercase'>
                                            {product.codeReference}
                                        </p>
                                        <p className='text-xs font-semibold text-neutral-500 mt-2 flex justify-center'>
                                            Código fábrica
                                        </p >
                                        <p className='text-xs flex justify-center uppercase'>
                                            {product.codeReferenceFactory}
                                        </p>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {
                                            product.variants[0]?.price && <p>{formatCurrency(product.variants[0]?.price)}
                                            </p>
                                        }
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {totalQuantityAvailable(product.variants)}
                                    </td>
                                    {/* <td className="whitespace-nowrap px-3 py-3">
                                        00
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        00
                                    </td> */}
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex flex-col gap-2">
                                            <div className='flex gap-4'>

                                                <ViewProduct id={product.id} />
                                                <UpdateProduct id={product.id} />
                                            </div>
                                            <div className='flex gap-2'>

                                                <CreateVariant id={product.id} />
                                                <DeleteAlertDialog from='Product' id={product.id} />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
