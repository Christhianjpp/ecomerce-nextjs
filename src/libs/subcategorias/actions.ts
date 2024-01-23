'use server'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { PrismaClient } from '@prisma/client'
import SubCategorias from '../../app/dashboard/subcategorias/page';
const prisma = new PrismaClient()

const SubCategorySchema = z.object({
    name: z.string({
        invalid_type_error: 'Es necesario un nombre.',
    }).refine((data) => data.length > 0, {
        message: 'El nombre es obligatorio.',
    }),
    categoryId: z.string({
        invalid_type_error: 'Es necesario una categoría.',
    }).refine((data) => data.length > 0, {
        message: 'Es obligatorio una categoría.',
    })
})


export type State = {
    errors?: {
        name?: string[] | undefined;
        categoryId?: string[] | undefined;
    };
    message?: string | null;
};


export const createSubCategory = async (prevState: State, formData: FormData) => {

    const validatedFields = SubCategorySchema.safeParse({
        name: formData.get('name'),
        categoryId: formData.get('categoryId')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }

    const { name, categoryId } = validatedFields.data;
    console.log(name, categoryId)
    const resp = await prisma.subCategory.findMany({ where: { name } })

    if (resp.length > 0) {
        return {
            errors: {
                name: ['Ya existe una SubCategoría con este nombre.'],
            },
            message: 'Ya existe una SubCategoría con este nombre.',
        };
    }
    try {
        await prisma.subCategory.create({ data: { name, categoryId } })

    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo crear la categoría.',
        };
    }


    revalidatePath('/dashboard/subcategorias')
    redirect('/dashboard/subcategorias')
}
export const getSubCategory = async (id: string) => {

    try {
        const resp = await prisma.subCategory.findMany({ where: { id } })

        console.log({ resp })

        return resp[0]
    } catch (error) {
        console.log('DataBase Error: ', error)
        throw new Error('Error de base de datos: no se pudo obtener la categoría.')
    }

}

export const updateSubCategory = async (id: string, prevState: State, formData: FormData) => {
    console.log('first')
    const validatedFields = SubCategorySchema.safeParse({
        name: formData.get('name'),
        categoryId: formData.get('categoryId')
    })
    console.log(validatedFields)
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        };
    }
    const { name, categoryId } = validatedFields.data;
    console.log(name)

    const resp = await prisma.subCategory.findMany({ where: { name } })
    if (resp.length > 0) {
        return {
            errors: {
                name: ['Ya existe una categoría con este nombre.'],
            },
            message: 'Ya existe una categoría con este nombre.',
        };
    }
    try {

        await prisma.subCategory.update({ where: { id }, data: { name, categoryId } })
    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo actualizar la categoría.',
        };
    }

    revalidatePath('/dashboard/subcategorias')
    redirect('/dashboard/subcategorias')

}

export const deleteSubCategory = async (id: string) => {

    try {

        await prisma.subCategory.delete({ where: { id } })
        revalidatePath('/dashboard/subcategorias')
        return { message: 'SubCategoría eliminada correctamente.' }


    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo eliminar la Subcategoría.',
        };

    }

    // redirect('/dashboard/categorias')
}

export const getSubCategories = async () => {

    try {
        const resp = await prisma.subCategory.findMany({
            orderBy: {
                name: 'asc'
            }
        })

        return resp
    } catch (error) {
        console.log('DataBase Error: ', error)
        throw new Error('Error de base de datos: no se pudo obtener la SubCategoría.')
    }

}
export const getSubCategoriesByCategory = async (categoryId: string) => {

    try {
        const resp = await prisma.subCategory.findMany({ where: { categoryId } })

        return resp
    } catch (error) {
        console.log('DataBase Error: ', error)
        throw new Error('Error de base de datos: no se pudo obtener la SubCategoría.')
    }
}