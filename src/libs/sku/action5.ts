"use server"
import { redirect } from "next/navigation";
import { z } from "zod";

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from "next/cache";



const prisma = new PrismaClient()
const SkuSchema = z.object({
    color: z.string(),
    size: z.string(),
    price: z.string({
        invalid_type_error: 'Es necesario un nombre.',
    }).refine((data) => data.length > 0, {
        message: 'El nombre es obligatorio.',
    }),
    QuantityAvailable: z.string(),
    // price: z
    //     .number({ invalid_type_error: "Un nombre est attendu" })
    //     .int()
    //     .refine((val) => val >= 18, { message: "Vous devez être majeur" }),

    // QuantifyAvailable: z
    //     .number({ invalid_type_error: "Un nombre est attendu" })
    //     .int()
    //     .refine((val) => val >= 18, { message: "Vous devez être majeur" })


    // price: z.string()
    //     .refine(price => !isNaN(parseFloat(price)), { message: 'Please enter a valid price.' }),
    // QuantityAvailable: z.string()
    //     .refine(QuantityAvailable => !isNaN(parseFloat(QuantityAvailable)), { message: 'Please enter a valid price.' }),
    //     price: z.coerce
    //         .number()
    //         .gt(0, { message: 'Please enter an amount greater than $0.' }),

    //     QuantityAvailable: z.coerce
    //         .number()
    //         .gt(0, { message: 'Please enter an amount greater than $0.' }),
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

export const createVariant = async (id: string, prevSatate: State, formData: FormData) => {

    const validatedFields = SkuSchema.safeParse({
        color: formData.get('color'),
        size: formData.get('size'),
        price: formData.get('price'),
        QuantityAvailable: formData.get('QuantityAvailable'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    const sku = "fdsfsd5"
    const data = {
        ...validatedFields.data,
        productId: id,
        sku
    }
    console.log(data)

    const resp = await prisma.variant.findMany({ where: { sku } })
    if (resp.length > 0) {
        return {
            errors: {
                name: ['Ya existe una SKU.'],
            },
            message: 'Ya existe una SKU.',
        };
    }
    console.log(data)
    try {



    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo crear la categoría.',
        };
    }

    revalidatePath('/dashboard/categorias')
    redirect('/dashboard/productos')

}