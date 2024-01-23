'use server'
import { z } from 'zod'
import { revalidatePath, unstable_noStore } from 'next/cache'
import { redirect } from 'next/navigation'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const CategorySchema = z.object({
    name: z.string({
        invalid_type_error: 'Es necesario un nombre.',
    }).refine((data) => data.length > 0, {
        message: 'El nombre es obligatorio.',
    })
})


export type State = {
    errors?: {
        name?: string[] | undefined;
    };
    message?: string | null;
};

export const createCategory = async (prevState: State, formData: FormData) => {

    const validatedFields = CategorySchema.safeParse({
        name: formData.get('name')
    })
    console.log(validatedFields)
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    const { name } = validatedFields.data;
    const resp = await prisma.category.findMany({ where: { name } })
    if (resp.length > 0) {
        return {
            errors: {
                name: ['Ya existe una categoría con este nombre.'],
            },
            message: 'Ya existe una categoría con este nombre.',
        };
    }



    try {
        await prisma.category.create({ data: { name } })

    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo crear la categoría.',
        };
    }


    revalidatePath('/dashboard/categorias')
    redirect('/dashboard/categorias')
}
export const getCategories = async () => {

    try {
        const resp = await prisma.category.findMany({
            orderBy: {
                name: 'asc'
            }
        })

        return resp
    } catch (error) {
        console.log('DataBase Error: ', error)
        throw new Error('Error de base de datos: no se pudo obtener la categoría.')
    }

}
export const getCategory = async (id: string) => {

    try {
        const resp = await prisma.category.findMany({ where: { id } })



        return resp[0]
    } catch (error) {
        console.log('DataBase Error: ', error)
        throw new Error('Error de base de datos: no se pudo obtener la categoría.')
    }

}

export const updateCategory = async (id: string, prevState: State, formData: FormData) => {

    const validatedFields = CategorySchema.safeParse({
        name: formData.get('name')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        };
    }
    const { name } = validatedFields.data;

    const resp = await prisma.category.findMany({ where: { name } })
    if (resp.length > 0) {
        return {
            errors: {
                name: ['Ya existe una categoría con este nombre.'],
            },
            message: 'Ya existe una categoría con este nombre.',
        };
    }
    try {

        await prisma.category.update({ where: { id }, data: { name } })
    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo actualizar la categoría.',
        };
    }

    revalidatePath('/dashboard/categorias')
    redirect('/dashboard/categorias')

}

export const deleteCategory = async (id: string) => {
    try {

        await prisma.category.delete({ where: { id } })
        revalidatePath('/dashboard/categorias')
        return { message: 'Categoría eliminada correctamente.' }


    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo eliminar la categoría.',
        };

    }

    // redirect('/dashboard/categorias')
}