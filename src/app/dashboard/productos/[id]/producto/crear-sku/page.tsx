import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import FormSKU from '@/components/dashboad/product/form-sku'
import React from 'react'

const CrearVariantes = ({ params }: { params: { id: string } }) => {
    const id = params.id
    console.log(id)
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Productos', href: '/dashboard/productos' },
                    {
                        label: 'Crear SKU',
                        href: `/dashboard/productos/${id}/producto/crear-sku`,
                        active: true,
                    },
                ]}
            />
            <FormSKU id={id} />

        </main>
    )
}

export default CrearVariantes