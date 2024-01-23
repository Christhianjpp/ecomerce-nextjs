import { getSubCategories } from '@/libs/subcategorias/actions';
import { UpdateSubCategory } from '../buttons';
import DeleteAlertDialog from '@/components/DeleteAlertDialog';


export default async function SubCategoryTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {

    const subcategories = await getSubCategories()




    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    <div >
                        {subcategories?.map((sub) => (
                            <div
                                key={sub.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between ">
                                    <div>
                                        <div className="mb-2 flex items-center">
                                            <p>{sub.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-end gap-2">
                                        <UpdateSubCategory id={sub.id} />
                                        <DeleteAlertDialog from="SubCategory" id={sub.id} />
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}
