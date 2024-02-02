'use client'

import { FormEvent, useState } from "react"
import prisma from "@/libs/prisma";
import { updateImgs } from "@/libs/sku/actions";
import { uploadImageCloudinaryCrop } from "@/middleware/uploadImageCloudinary";
import { Cross2Icon, ImageIcon } from '@radix-ui/react-icons'






interface Props {
    imgsDB: string[]
    id: string
}
const img = [
    'https://res.cloudinary.com/dl6oea68u/image/upload/v1696031521/tienda/f9szqsi6zsbuvlzpukdg.jpg',

]
const LoadImage = ({ imgsDB, id }: Props) => {
    const [ImageSKUBD, setImageSKUBD] = useState(imgsDB)
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [loading, setloading] = useState(false)
    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFilesArray = e.target.files;

        if (selectedFilesArray) {
            const filesArray: File[] = Array.from(selectedFilesArray);
            setImageFiles((prev) => [...prev, ...filesArray]);
        }
    };

    const handleSubmmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setloading(true)
        const newImgURL = imageFiles ? await uploadImageCloudinaryCrop({ images: imageFiles })
            : undefined

        const imgs = newImgURL ? [...ImageSKUBD, ...newImgURL] : ImageSKUBD


        if (newImgURL && newImgURL.length > 0) {
            setloading(true)
            uploadImg(imgs)
        } else if (imgs.length !== imgsDB.length) {

            uploadImg(imgs)
        } else {
            setloading(false)
            console.log('no hay cambios');
            return;
        }
    }
    const uploadImg = async (imgs: string[]) => {
        try {

            await updateImgs(id, imgs)
            setloading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <div className="flex flex-wrap justify-center">
                {ImageSKUBD?.map((img, index) => (
                    <div key={index} className=" w-1/2 lg:w-1/4 p-2">
                        <div className="relative">
                            <img
                                src={img}
                                alt="Product Image"
                                className="w-full h-40 object-cover rounded-md"
                            />
                            {/* delete image */}
                            <button className="absolute top-1 right-1 bg-gray-400 hover:bg-gray-500 rounded-sm p-1"
                                onClick={() => setImageSKUBD((prev) => prev.filter((_, i) => i !== index))}
                            >
                                < Cross2Icon className="w-5 h-5  text-white hover:text-red-500" />
                            </button>
                        </div>



                    </div>
                ))}
                {imageFiles?.map((img, index) => (
                    <div key={index} className=" w-1/2 lg:w-1/4 p-2">
                        <div className="relative">
                            <img
                                src={URL.createObjectURL(img)}
                                alt="Product Image"
                                className="w-full h-40 object-cover rounded-md"
                            />
                            {/* delete image */}
                            <button className="absolute top-1 right-1 bg-gray-400 hover:bg-gray-500 rounded-sm p-1"
                                onClick={() => setImageFiles((prev) => prev.filter((_, i) => i !== index))}
                            >
                                < Cross2Icon className="w-5 h-5  text-white hover:text-red-500" />


                            </button>

                        </div>



                    </div>
                ))}
            </div>

            <div className="">
                <form onSubmit={handleSubmmit} className="flex items-center justify-center py-4 gap-6">
                    <div className="flex items-center justify-center ">
                        <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-44 justify-center p-5   group text-center">
                            <div className="flex flex-col items-center justify-center ">
                                <ImageIcon className="w-8 h-8" />


                                <p className="lowercase text-sm text-gray-400 group-hover:text-gray-600 pt-1 tracking-wider">
                                    Selets Images
                                </p>
                            </div>
                            <input
                                type="file"
                                className="hidden"
                                multiple
                                accept="image/*"
                                onChange={(e) => handleFileSelect(e)}
                            />
                        </label>
                    </div>


                    <button type="submit" aria-disabled={loading}
                        className='flex h-10 w-28 items-center rounded-lg
                         bg-blue-500 px-4 text-sm font-medium
                          text-white transition-colors hover:bg-blue-400
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                            focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed 
                            aria-disabled:opacity-50 justify-center'
                        disabled={loading}
                    >
                        {loading ? <div className="inline-block animate-spin ease duration-300 w-10 h-10 border-t-4 border-red-600 border-solid rounded-full"></div>
                            : 'Guardar'}
                    </button>
                </form>

            </div>
        </div>
    )
}

export default LoadImage