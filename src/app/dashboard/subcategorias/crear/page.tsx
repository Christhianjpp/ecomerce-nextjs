import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import Form from '@/components/dashboad/subcategory/form'
import { getCategories } from '@/libs/categorias/actions'

import { prisma } from '@/libs/prisma'


import React from 'react'

const Crear = async () => {
    const categorias = await getCategories()


    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'SubCategorías', href: '/dashboard/subcategorias' },
                    {
                        label: 'Crear SubCategoría',
                        href: '/dashboard/subcategorias/crear',
                        active: true,
                    },
                ]}
            />
            <Form categories={categorias} />

        </main>
    )
}

export default Crear