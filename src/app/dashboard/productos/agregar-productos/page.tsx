import AddProductosXTS from '@/components/dashboad/AddProductosXTS'
import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import React from 'react'

const AddAllProducts = () => {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Productos', href: '/dashboard/productos' },
                    {
                        label: 'Agregar Productos',
                        href: '/dashboard/productos/agregar-productos',
                        active: true,
                    },
                ]}
            />
            <AddProductosXTS />
        </main>
    )
}

export default AddAllProducts