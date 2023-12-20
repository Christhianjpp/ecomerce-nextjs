import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import { ImageSKU } from '@/components/dashboad/buttons'
import ImagenSKU from '@/components/dashboad/product/ImagenSKU'
import { prisma } from '@/libs/prisma'
import { getVariant } from '@/libs/sku/actions'
import React from 'react'

const SKUImagen = async ({ params }: { params: { id: string, ids: string } }) => {
    const { id, ids } = params
    const sku = await getVariant(ids)
    return (
        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Productos', href: '/dashboard/productos' },
                    { label: 'Producto', href: `/dashboard/productos/${id}/producto` },

                    {
                        label: 'Imagen SKU',
                        href: `/dashboard/productos/${id}/producto/${ids}/variantes/imagen`,
                        active: true,
                    },
                ]}
            />
            {sku
                ? <ImagenSKU sku={sku} />
                : <p className="text-gray-500">No SKU available</p>
            }

        </div>
    )
}

export default SKUImagen