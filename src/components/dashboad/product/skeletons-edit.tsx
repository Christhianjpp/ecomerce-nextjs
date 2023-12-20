import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const SkeletonsEdit = () => {
    return (
        <div className="flex flex-col space-y-6">
            <div className='flex space-x-6 mb-3'>
                <Skeleton className="h-8 w-[160px]" />
                <Skeleton className="h-8 w-[160px]" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-7 w-auto" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-7 w-auto" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-7 w-auto" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-7 w-auto" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-7 w-auto" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-7 w-auto" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-5 w-[100px]" />
                <Skeleton className="h-7 w-auto" />
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Skeleton className="h-11 w-[140px]" />
                <Skeleton className="h-11 w-[140px]" />
            </div>
        </div>
    )
}

export default SkeletonsEdit