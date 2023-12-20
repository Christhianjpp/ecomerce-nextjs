
import { PrismaClient } from '@prisma/client'

interface Props {

    id: string,
    color?: string,
    size?: string,

}
const createSKU = async ({ id, color, size }: Props) => {
    const prisma = new PrismaClient()

    const categories = await prisma.product.findUnique({
        where: { id },
        select: {
            category: {
                select: {
                    name: true,
                    id: true
                }
            },
            subcategory: {
                select: {
                    name: true
                }
            },
        }
    })
    let skuCounter = await prisma.skuCounter.findFirst({
        where: {
            category: categories?.category.id,
        }

    })

    if (!skuCounter) {
        skuCounter = await prisma.skuCounter.create({
            data: {
                category: categories!.category.id,
                counter: 1
            }
        })
    }
    else {
        skuCounter = await prisma.skuCounter.update({
            where: {
                id: skuCounter.id
            },
            data: {
                counter: skuCounter.counter + 1
            }
        })
    }


    const formattedNumber = String(skuCounter.counter).padStart(5, '0')
    const primeraLetraColor = color ? color.slice(0, 2).toUpperCase() : 'CN';
    const primeraLetraSize = size ? size.slice(0, 2).toUpperCase() : 'SN';
    const category = categories?.category.name ? categories?.category.name.slice(0, 2).toUpperCase() : 'NN';
    const subcategory = categories?.subcategory?.name ? categories?.subcategory?.name.slice(0, 2).toUpperCase() : 'NN';


    return `${category}-${subcategory}-${primeraLetraColor}-${primeraLetraSize}-${formattedNumber}`
}

export default createSKU
