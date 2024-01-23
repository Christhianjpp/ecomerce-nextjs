'use server'
import { z } from 'zod'
import { revalidatePath, unstable_noStore } from 'next/cache'
import { redirect } from 'next/navigation'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const MaterialSchema = z.object({
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

export const createMaterial = async (prevState: State, formData: FormData) => {

    const validatedFields = MaterialSchema.safeParse({
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
    const resp = await prisma.material.findMany({ where: { name } })

    if (resp.length > 0) {
        return {
            errors: {
                name: ['Ya existe una Material con este nombre.'],
            },
            message: 'Ya existe una Material con este nombre.',
        };
    }
    try {
        await prisma.material.create({ data: { name, categoryId } })

    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo crear la material.',
        };
    }


    revalidatePath('/dashboard/material')
    redirect('/dashboard/material')
}
export const getMaterial = async (id: string) => {

    try {
        const resp = await prisma.material.findMany({ where: { id } })


        return resp[0]
    } catch (error) {
        console.log('DataBase Error: ', error)
        throw new Error('Error de base de datos: no se pudo obtener la material.')
    }

}

export const updateMaterial = async (id: string, prevState: State, formData: FormData) => {

    const validatedFields = MaterialSchema.safeParse({
        name: formData.get('name'),
        categoryId: formData.get('categoryId')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        };
    }
    const { name, categoryId } = validatedFields.data;

    const resp = await prisma.material.findMany({ where: { name } })
    if (resp.length > 0) {
        return {
            errors: {
                name: ['Ya existe una categoría con este nombre.'],
            },
            message: 'Ya existe una categoría con este nombre.',
        };
    }
    try {

        await prisma.material.update({ where: { id }, data: { name, categoryId } })
    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo actualizar la categoría.',
        };
    }

    revalidatePath('/dashboard/material')
    redirect('/dashboard/material')

}

export const deleteMaterial = async (id: string) => {

    try {

        await prisma.material.delete({ where: { id } })
        revalidatePath('/dashboard/material')
        return { message: 'Material eliminada correctamente.' }


    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo eliminar la material.',
        };

    }

    // redirect('/dashboard/categorias')
}

export const getMaterials = async () => {

    try {
        const resp = await prisma.material.findMany({
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

export const getMaterialsByCategory = async (categoryId: string) => {

    try {
        const resp = await prisma.material.findMany({ where: { categoryId } })
        return resp
    } catch (error) {
        console.log('DataBase Error: ', error)
        throw new Error('Error de base de datos: no se pudo obtener la SubCategoría.')
    }

}