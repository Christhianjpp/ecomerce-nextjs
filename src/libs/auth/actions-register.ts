'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod'
import prisma from '@/libs/prisma'
import bcrypt from 'bcryptjs'


const UserSchema = z.object({
    name: z.string({
        invalid_type_error: 'Es necesario un nombre.',
    }).toLowerCase()
        .min(1, { message: 'El nombre no puede estar vacío.' })
        .refine((data) => data.length > 3, {
            message: 'El nombre debe tener más de 3 letras.',
        }),
    email: z.string().email().toLowerCase(),
    password: z.string({
        invalid_type_error: 'Es necesario una contraseña.',
    }).min(1, { message: 'Es necesario una contraseña.' })
        .refine((data) => data.length > 5, {
            message: 'La contraseña debe tener más de 6 letras.',
        }),
})

export type State = {
    errors?: {
        name?: string[] | undefined;
        email?: string[] | undefined;
        password?: string[] | undefined;
    };
    message?: string | null;
};

export const createUser = async (prevState: State, formData: FormData) => {
    console.log('first')
    const validatedFields = UserSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),

    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.',
        };
    }
    console.log({ validatedFields })
    const data = validatedFields.data
    const emailDB = await prisma.user.findMany({ where: { email: data.email } })
    if (emailDB.length > 0) {
        return {
            errors: {
                email: ['Ya existe un usuario con este email.'],
            },
            message: 'Ya existe un usuario con este email.',
        };
    }
    const hashedPassword = await bcrypt.hash(data.password, 12)
    data.password = hashedPassword

    try {
        const resp = await prisma.user.create({ data })
        const { password: _, ...user } = resp


    } catch (error: any) {
        console.log(error.message)
        return {
            message: 'Error de base de datos: no se pudo crear el usuario.',
        };
    }
    redirect('/dashboard')
}

export const getUserLogin = async (email: string, password: string) => {


    try {
        const user = await prisma.user.findUnique({ where: { email } })


        if (!user) {
            throw new Error("Correo o contraseña incorrectos ");
        }

        const validPassword = await bcrypt.compare(password, user.password)


        if (!validPassword) {
            throw new Error("Correo o contraseña incorrectos ");
        }

        const { password: _, ...userWithoutPassword } = user


        return userWithoutPassword
    } catch (error: any) {
        throw new Error(`${error.message}`);

    }


}