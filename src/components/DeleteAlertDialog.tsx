'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteCategory } from "@/libs/categorias/actions";
import { deleteMaterial } from "@/libs/material/actions";
import { deleteProduct } from "@/libs/products/actions";
import { deleteSKU } from "@/libs/sku/actions";
import { deleteSubCategory } from "@/libs/subcategorias/actions";
import { TrashIcon } from "lucide-react";
import { useState } from "react";

const DeleteAlertDialog = ({ id, from }: { id: string, from: string }) => {
    const [loading, setLoading] = useState(false)


    const deleteSubCategoryWithId = () => {
        setLoading(true)
        if (from === 'SubCategory') {
            deleteSubCategory(id);

        } if (from === 'Category') {
            deleteCategory(id);
        } if (from === 'Material') {
            deleteMaterial(id);
        } if (from === 'Product') {
            deleteProduct(id);
        } if (from === 'SKU') {
            deleteSKU(id)
        }

    }

    return (
        <AlertDialog>
            <AlertDialogTrigger>
                {
                    loading ? <div className="inline-block animate-spin ease duration-300 w-6 h-6 border-t-4 border-red-600 border-solid rounded-full"></div>
                        : <TrashIcon className="w-5 hover:text-red-500  hove:font-bold" />

                }
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta acción no se puede deshacer.
                        Esto eliminará permanentemente la {from}.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>


                    <AlertDialogAction onClick={() => deleteSubCategoryWithId()}>Eliminar</AlertDialogAction>

                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

        // <form action={deleteCategoryWithId}>
        //     <button className="rounded-md border p-2 hover:bg-gray-100">
        //         <span className="sr-only">Delete</span>
        //         <TrashIcon className="w-5" />
        //     </button>
        // </form>
    );
}


export default DeleteAlertDialog