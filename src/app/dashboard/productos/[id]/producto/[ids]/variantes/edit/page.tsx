import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import FormSKUEdit from '@/components/dashboad/product/form-sku-edit'
import prisma from '@/libs/prisma'
import React from 'react'

const EditSKU = async ({ params }: { params: { id: string, ids: string } }) => {
    const { id, ids } = params
    const sku = await prisma.variant.findUnique({
        where: {
            id: ids
        }
    })
    return (
        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Productos', href: '/dashboard/productos' },
                    { label: 'Producto', href: `/dashboard/productos/${id}/producto` },

                    {
                        label: 'Edit SKU',
                        href: `/dashboard/productos/${id}/producto/${ids}/variantes/edit`,
                        active: true,
                    },
                ]}
            />
            <FormSKUEdit ids={ids} id={id} sku={sku} />
        </div>
    )
}

export default EditSKU