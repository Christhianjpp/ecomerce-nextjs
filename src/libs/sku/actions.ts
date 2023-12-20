'use server'
import { z } from 'zod'
import { revalidatePath, unstable_noStore } from 'next/cache'
import { redirect } from 'next/navigation'

import { PrismaClient } from '@prisma/client'
import createSKU from '@/middleware/create-sku'
const prisma = new PrismaClient()

const CategorySchema = z.object({
    color: z.string(),
    size: z.string(),

    price: z.coerce
        .number()
        .gt(0, { message: 'Please enter an amount greater than $0.' }),
    QuantityAvailable: z.coerce
        .number()
        .gt(0, { message: 'Please enter an amount greater than $0.' }),
})


export type State = {
    errors?: {
        color?: string[] | undefined;
        size?: string[] | undefined;
        price?: string[] | undefined;
        QuantityAvailable?: string[] | undefined;
    };
    message?: string | null;
};



export const CreateSKU = async (id: string, prevState: State, formData: FormData) => {

    const validatedFields = CategorySchema.safeParse({
        color: formData.get('color'),
        size: formData.get('size'),
        price: formData.get('price'),
        QuantityAvailable: formData.get('QuantityAvailable'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        };
    }
    const { color, size, price, QuantityAvailable } = validatedFields.data

    const sku = await createSKU({ id, color, size })

    const data = {
        color,
        size,
        QuantityAvailable,
        price: price * 100,
        productId: id,
        sku
    }
    console.log(data)

    // const resp = await prisma.category.findMany({ where: { name } })
    // if (resp.length > 0) {
    //     return {
    //         errors: {
    //             name: ['Ya existe una categoría con este nombre.'],
    //         },
    //         message: 'Ya existe una categoría con este nombre.',
    //     };
    // }
    try {

        await prisma.variant.create({ data })
    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo actualizar la categoría.',
        };
    }

    // revalidatePath('/dashboard/productos')

    redirect('/dashboard/productos')

}

export const updateSKU = async (ids: string, id: string, prevState: State, formData: FormData) => {

    const validatedFields = CategorySchema.safeParse({
        color: formData.get('color'),
        size: formData.get('size'),
        price: formData.get('price'),
        QuantityAvailable: formData.get('QuantityAvailable'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        };
    }



    const data = {
        ...validatedFields.data,
        price: validatedFields.data.price * 100,
    }

    console.log(data)

    // const resp = await prisma.category.findMany({ where: { name } })
    // if (resp.length > 0) {
    //     return {
    //         errors: {
    //             name: ['Ya existe una categoría con este nombre.'],
    //         },
    //         message: 'Ya existe una categoría con este nombre.',
    //     };
    // }
    try {

        await prisma.variant.update({
            where: { id: ids },
            data
        })
    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo actualizar la categoría.',
        };
    }

    // revalidatePath('/dashboard/productos')

    redirect(`/dashboard/productos/${id}/producto`)

}

export const deleteSKU = async (id: string,) => {

    try {

        await prisma.variant.delete({
            where: { id: id },

        })
    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo actualizar la categoría.',
        };
    }

    revalidatePath('/dashboard/productos')

    // redirect(`/dashboard/productos/${id}/producto`)

}

export const getVariant = async (id: string) => {
    try {
        const resp = await prisma.variant.findFirst({
            where: { id: id }

        })

        return resp

    } catch (error) {
        throw new Error('error al obtener los datos');

    }

}

export const updateImgs = async (id: string, ImageSKU: string[]) => {

    try {
        const resp = await prisma.variant.update({
            where: { id: id },
            data: {
                imgs: {
                    set: ImageSKU
                }
            }
        })
        revalidatePath('/dashboard/productos')

        return resp

    } catch (error) {
        throw new Error('error al obtener los datos');

    }
}