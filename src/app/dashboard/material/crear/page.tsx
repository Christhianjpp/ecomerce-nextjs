import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import FormMaterial from '@/components/dashboad/material/form'

import { getCategories } from '@/libs/categorias/actions'



import React from 'react'

const CrearMaterial = async () => {
    const categorias = await getCategories()


    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Material', href: '/dashboard/material' },
                    {
                        label: 'Crear Material',
                        href: '/dashboard/material/crear',
                        active: true,
                    },
                ]}
            />
            <FormMaterial categories={categorias} />

        </main>
    )
}

export default CrearMaterial