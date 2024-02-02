import { EyeIcon, PencilIcon, PhotoIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

import Link from "next/link";


//Product
export function CreateProduct() {
    return (
        <Link
            href="/dashboard/productos/crear"
            className="flex h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-black transition-colors
             hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Crear Producto</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );

}
export function AddProducts() {
    return (
        <Link
            href="/dashboard/productos/agregar-productos"
            className="flex h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-black transition-colors
             hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Agregar Productos</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );

}
export function UpdateSku({ id, ids }: { id: string, ids: string }) {

    return (
        <Link
            href={`/dashboard/productos/${id}/producto/${ids}/variantes/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}
export function ImageSKU({ id, ids }: { id: string, ids: string }) {

    return (
        <Link
            href={`/dashboard/productos/${id}/producto/${ids}/variantes/imagen`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PhotoIcon className="w-5" />
        </Link>
    );
}
export function UpdateProduct({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/productos/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}
export function CreateVariant({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/productos/${id}/producto/crear-sku`}
            className="rounded-md border p-2 hover:bg-gray-100 flex items-center"
        >
            <PlusIcon className="w-3" />
            <p className="text-xs">SKU </p>
        </Link>
    );
}
export function ViewProduct({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/productos/${id}/producto`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <EyeIcon className="w-5" />
        </Link>
    );

}
//Category

export function CreateCategory() {
    return (
        <Link
            href="/dashboard/categorias/crear"
            className="flex h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-black transition-colors
             hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Crear Categoria</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}


export function UpdateInvoice({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/categorias/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}



// SubCategorias

export function CreateSubCategory() {
    return (
        <Link
            href="/dashboard/subcategorias/crear"
            className="flex h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-black transition-colors
             hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Crear SubCategoria</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}
export function UpdateSubCategory({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/subcategorias/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}

// Material
export function CreateMaterial() {
    return (
        <Link
            href="/dashboard/material/crear"
            className="flex h-10 items-center rounded-lg bg-gray-300 px-4 text-sm font-medium text-black transition-colors
             hover:bg-gray-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
            <span className="hidden md:block">Crear Material</span>{' '}
            <PlusIcon className="h-5 md:ml-4" />
        </Link>
    );
}
export function UpdateMaterial({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/material/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}