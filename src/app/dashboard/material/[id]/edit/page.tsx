import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import Form from '@/components/dashboad/material/form-edit'
import { getCategories } from '@/libs/categorias/actions'
import { getMaterial } from '@/libs/material/actions'




const EditSubCategory = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const data = await getMaterial(id)
    const categorias = await getCategories()

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Material', href: '/dashboard/material' },
                    {
                        label: 'Editar Material',
                        href: `/dashboard/material/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form categories={categorias} data={data} />
        </main>
    )
}

export default EditSubCategory