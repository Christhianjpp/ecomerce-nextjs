import Breadcrumbs from '@/components/dashboad/breadcrumbs';
import ViewProduct from '@/components/dashboad/product/ViewProduct';
import prisma from '@/libs/prisma';
import React from 'react'

const Producto = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const productos = await prisma.product.findFirst({
        where: {
            id: id,
        },
        orderBy: {
            name: 'asc',
        },
        select: {
            id: true,
            name: true,
            description: true,
            categoryId: true,
            subcategoryId: true,
            codeReference: true,
            codeReferenceFactory: true,
            materialId: true,
            variants: true,
            category: {
                select: {
                    id: true,
                    name: true,
                },
            },
            subcategory: {
                select: {
                    id: true,
                    name: true,
                },
            },
            material: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });
    if (!productos) {
        return <div>Producto no encontrado</div>
    }

    return (
        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Productos', href: '/dashboard/productos' },
                    {
                        label: 'Producto',
                        href: `/dashboard/productos/${id}/producto`,
                        active: true,
                    },
                ]}
            />

            <ViewProduct product={productos} />
        </div>
    )
}

export default Producto