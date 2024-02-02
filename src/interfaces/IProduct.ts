export interface IVariant {
    id: string;
    color: string
    size: string
    sku: string;
    price: number;
    QuantityAvailable: number;
    imgs: string[]; // Puedes cambiar el tipo según la estructura real de las imágenes
    productId: string;
    createdAt: Date; // Opcional: Puedes cambiar el tipo según el formato real de la fecha
}

export interface IVariantImagen {
    id: string;
    color: string;
    size: string;
    price: number;
    QuantityAvailable: number;
    sku: string;
    imgs: string[];

    product: {
        name: string;
        codeReference: string;
        codeReferenceFactory: string;
        category: {
            name: string;
        };
        subcategory: {
            name: string;
        };
        material: {
            name: string;
        };
    };
}

export interface Product {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    subcategoryId?: string;
    codeReference: string;
    codeReferenceFactory: string;
    variants: IVariant[];
    createdAt: Date; // Opcional: Puedes cambiar el tipo según el formato real de la fecha
}

interface Category {
    id: string;
    name: string;
}

interface Subcategory {
    id: string;
    name: string;
}

interface Material {
    id: string;
    name: string;
}

export interface IProduct {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    subcategoryId: string
    codeReference: string;
    codeReferenceFactory: string;
    materialId?: string;
    variants: IVariant[];
    category: Category;
    subcategory: Subcategory;
    material: Material
}

export interface IProductWithVariants extends IProduct {
    variants: IVariant[];
}

export interface IProductEdit {

    id: string;
    name: string;
    description: string;
    categoryId: string;
    subcategoryId: string;
    codeReference: string;
    codeReferenceFactory: string;
    materialId?: string | null
    category: {
        id: string;
        name: string;
    };
    subcategory: {
        id: string;
        name: string;
    };
    material: {
        id: string;
        name: string;
    } | null;
}
export interface IProductView {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    subcategoryId: string;
    codeReference: string;
    materialId?: string | null
    codeReferenceFactory: string;
    variants: IVariantView[];
    category: {
        id: string;
        name: string;
    };
    subcategory: {
        id: string;
        name: string;
    };
    material: {
        id: string;
        name: string;
    } | null;
}

export interface IVariantView {
    id: string;
    color: string;
    size: string;
    sku: string;
    price: number;
    QuantityAvailable: number;
    imgs: string[]; // O el tipo adecuado para las imágenes
    productId: string;
    createdAt: Date; // Cambiar a tipo de fecha si es necesario
}



export interface IProductMap {

    id: string;
    materialId: string | null;
    variants: {
        price: number;
        QuantityAvailable: number;
        imgs: string[];
    }[];
    category: {
        id: string;
        name: string;
    };
    subcategory: {
        id: string;
        name: string;
    };
    material: {
        id: string;
        name: string;

    } | null;

} 