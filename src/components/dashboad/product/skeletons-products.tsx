import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonsProducts = () => {
    return (
        <div className="mt-6 flow-root">

            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-100 p-2 md:pt-0">
                    <div className="flex flex-col">

                        <Skeleton className="h-16 w-auto" />
                    </div>
                    <div className="space-y-1 mt-3">

                        <Skeleton className="h-20 bg-white w-auto" />
                        <Skeleton className="h-20 bg-white w-auto" />
                        <Skeleton className="h-20 bg-white w-auto" />
                        <Skeleton className="h-20 bg-white w-auto" />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default SkeletonsProducts