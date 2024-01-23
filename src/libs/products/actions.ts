'use server'
import { z } from 'zod'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import prisma from '@/libs/prisma'

const ProductSchema = z.object({
    description: z.string({
        invalid_type_error: 'Es necesario una descripción .',
    }).refine((data) => data.length > 0, {
        message: 'La descripción es obligatorio.',
    }),
    categoryId: z.string({
        invalid_type_error: 'Es necesario una categoría.',
    }).refine((data) => data.length > 0, {
        message: 'Es obligatorio una categoría.',
    }),
    subcategoryId: z.string({
        invalid_type_error: 'Es necesario una subcategoría.',
    }).refine((data) => data.length > 0, {
        message: 'Es obligatorio una subcategoría.',
    }),
    materialId: z.string().nullable(),
    codeReference: z.string(),
    codeReferenceFactory: z.string(),
    name: z.string(),
})


export type State = {
    errors?: {
        categoryId?: string[] | undefined;
        subcategoryId?: string[] | undefined;
        materialId?: string[] | undefined;
        codeReference?: string[] | undefined;
        codeReferenceFactory?: string[] | undefined;
        name?: string[] | undefined;
        description?: string[] | undefined;
    };
    message?: string | null;
};

export const createProduct = async (prevState: State, formData: FormData) => {

    const validatedFields = ProductSchema.safeParse({
        name: formData.get('name'),
        categoryId: formData.get('categoryId'),
        subcategoryId: formData.get('subcategoryId'),
        materialId: formData.get('materialId'),
        codeReference: formData.get('codeReference'),
        codeReferenceFactory: formData.get('codeReferenceFactory'),
        description: formData.get('description'),

    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    const data = validatedFields.data;

    try {
        await prisma.product.create({ data })

    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo crear la categoría.',
        };
    }
    revalidatePath('/dashboard/productos')
    redirect('/dashboard/productos')
}

export const deleteProduct = async (id: string) => {
    try {
        await prisma.product.delete({
            where: {
                id: id
            }
        })
    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo eliminar la categoría.',
        };
    }
    revalidatePath('/dashboard/productos')

}

export const updateProduct = async (id: string, prevState: State, formData: FormData) => {

    const validatedFields = ProductSchema.safeParse({
        name: formData.get('name'),
        categoryId: formData.get('categoryId'),
        subcategoryId: formData.get('subcategoryId'),
        materialId: formData.get('materialId'),
        codeReference: formData.get('codeReference'),
        codeReferenceFactory: formData.get('codeReferenceFactory'),
        description: formData.get('description'),

    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    const data = validatedFields.data;
    try {
        await prisma.product.update({
            where: {
                id: id
            },
            data: data
        })

    } catch (error) {
        return {
            message: 'Error de base de datos: no se pudo crear la categoría.',
        };
    }
    revalidatePath('/dashboard/productos')

    redirect('/dashboard/productos')
}

export const getProductEdit = async (id: string) => {
    const productos = await prisma.product.findFirst({
        where: {
            id: id,
        },
        orderBy: {
            name: 'asc',
        },
        select: {
            id: true,
            name: true,
            description: true,
            categoryId: true,
            subcategoryId: true,
            codeReference: true,
            codeReferenceFactory: true,
            materialId: true,
            category: {
                select: {
                    id: true,
                    name: true,
                },
            },
            subcategory: {
                select: {
                    id: true,
                    name: true,
                },
            },
            material: {
                select: {
                    id: true,
                    name: true,
                },
            },
        },
    });

    return productos
}

const ITEMS_PER_PAGE = 6;
export const getProducts = async (currentPage: number, query: string) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const products = await prisma.product.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
            ],
        },
        orderBy: {
            name: 'asc',
        },
        skip: offset,
        take: ITEMS_PER_PAGE,
        select: {
            id: true,
            name: true,
            description: true,
            categoryId: true,
            subcategoryId: true,
            codeReference: true,
            codeReferenceFactory: true,
            materialId: true,
            category: {
                select: {
                    id: true,
                    name: true,
                },
            },
            subcategory: {
                select: {
                    id: true,
                    name: true,
                },
            },
            material: {
                select: {
                    id: true,
                    name: true,
                },
            },
            variants: {
                select: {
                    imgs: true,
                    price: true,
                    QuantityAvailable: true,
                }
            }
        },
    });
    return products

}

export const getTotalPages = async (query: string) => {
    const totalProducts = await prisma.product.count({
        where: {
            OR: [
                {
                    name: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: query,
                        mode: 'insensitive',
                    },
                },
            ],
        },
    });
    return Math.ceil(totalProducts / ITEMS_PER_PAGE);
}