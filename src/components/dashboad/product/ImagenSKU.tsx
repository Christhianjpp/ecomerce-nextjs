import { IVariant, IVariantImagen } from '@/interfaces/IProduct'
import React from 'react'
import LoadImage from './LoadImage';
import { formatDateToLocal } from '@/middleware/formatDate';



interface Props {
    sku: {
        id: string;
        color: string;
        size: string;
        sku: string;
        price: number;
        QuantityAvailable: number;
        imgs: string[];
        productId: string;
        createdAt: Date;
    }
}


const ImagenSKU = ({ sku }: Props) => {
    return (
        <div className='flex w-full flex-col lg:flex-row m-auto justify-between'>

            <div className="bg-white p-4 space-y-3 rounded-md shadow-md lg:order-last">
                {sku ? (
                    <>
                        <h2 className="text-xl font-semibold ">{sku.sku}</h2>
                        <p className="text-gray-600 ">
                            Color: {sku.color}, Size: {sku.size}
                        </p>
                        <p className="text-gray-700 ">Pricio: ${sku.price}</p>
                        <p className="text-gray-700 ">
                            Cantidad: {sku.QuantityAvailable}
                        </p>
                        {/* <img
                            src={sku.imgs.length > 0 ? sku.imgs[0] : 'placeholder.jpg'}
                            alt="Product Image"
                            className="w-full h-40 object-cover "
                        /> */}
                        <p className="text-sm text-gray-500">
                            Product ID: {sku.productId} | Created At:{' '}
                            {new Date(sku.createdAt).toLocaleDateString()}

                        </p>
                    </>
                ) : (
                    <p className="text-gray-500">No SKU available</p>
                )}
            </div>
            <div className=' w-full '>
                <LoadImage imgsDB={sku?.imgs} id={sku?.id} />
            </div>

        </div>
    )
}

export default ImagenSKU