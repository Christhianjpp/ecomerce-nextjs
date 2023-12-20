import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import FormProductEdit from '@/components/dashboad/product/form-edit'
import { getCategories } from '@/libs/categorias/actions'
import { getProductEdit } from '@/libs/products/actions'
import React from 'react'

const Edit = async ({ params }: { params: { id: string } }) => {
    const { id } = params
    const categories = await getCategories()
    const product = await getProductEdit(id)

    if (!product) return (<div>Producto no encontrado</div>)

    return (
        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Productos', href: '/dashboard/productos' },
                    {
                        label: 'Producto Editar',
                        href: `/dashboard/productos/${id}/edit`,
                        active: true,
                    },
                ]}

            />

            <FormProductEdit id={id} categories={categories} product={product} />
        </div>
    )
}

export default Edit