import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import FormProduct from '@/components/dashboad/product/form'
import { getCategories } from '@/libs/categorias/actions'
import { getSubCategories } from '@/libs/subcategorias/actions'
import React from 'react'

const Crear = async () => {

    const categories = await getCategories()

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Productos', href: '/dashboard/productos' },
                    {
                        label: 'Crear Producto',
                        href: '/dashboard/productos/crear',
                        active: true,
                    },
                ]}
            />
            <FormProduct categories={categories} />
        </main>
    )
}

export default Crear