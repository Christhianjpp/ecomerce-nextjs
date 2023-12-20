import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import Form from '@/components/dashboad/category/form'
import React from 'react'

const Crear = () => {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Categorías', href: '/dashboard/categorias' },
                    {
                        label: 'Crear Categoría',
                        href: '/dashboard/categorias/crear',
                        active: true,
                    },
                ]}
            />
            <Form />

        </main>
    )
}

export default Crear