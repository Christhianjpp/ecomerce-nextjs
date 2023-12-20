import Breadcrumbs from '@/components/dashboad/breadcrumbs'
import Form from '@/components/dashboad/subcategory/form-edit'
import { getCategories } from '@/libs/categorias/actions'
import { getSubCategory } from '@/libs/subcategorias/actions'


const EditSubCategory = async ({ params }: { params: { id: string } }) => {
    const id = params.id
    const data = await getSubCategory(id)
    const categorias = await getCategories()

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'SubCategorías', href: '/dashboard/subcategorias' },
                    {
                        label: 'Editar SubCategoría',
                        href: `/dashboard/subcategorias/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form categories={categorias} data={data} />
        </main>
    )
}

export default EditSubCategory