import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonsProductsCategory = () => {
    return (
        <div className='mx-auto max-w-7xl p-8 pb-16'>
            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                <Skeleton className="h-72 w-auto bg-orange-50" />
                <Skeleton className="h-72 w-auto bg-orange-50" />
                <Skeleton className="h-72 w-auto bg-orange-50" />
                <Skeleton className="h-72 w-auto bg-orange-50" />
                <Skeleton className="h-72 w-auto bg-orange-50" />
                <Skeleton className="h-72 w-auto bg-orange-50" />
            </div>
        </div>
    )
}

export default SkeletonsProductsCategory