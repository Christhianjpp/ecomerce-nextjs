import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import Form from '@/components/dashboad/category/form-edit'
import { getCategory } from '@/libs/categorias/actions'
import { notFound } from 'next/navigation'
import React from 'react'

const EditCategory = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const data = await getCategory(id)
    if (!data) {
        notFound()
    }

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Categorías', href: '/dashboard/categorias' },
                    {
                        label: 'Editar Categoría',
                        href: `/dashboard/categorias/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form data={data} />


        </main>
    )
}

export default EditCategory