import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonsProductFull = () => {
    return (
        <div className='mx-auto max-w-7xl p-8 pb-2'>

            <div className='grid gap-2 sm:grid-cols-2 lg:grid-cols-9 '>
                <div className='md:col-span-1 lg:col-span-4'>
                    <div className='aspect-[34/34] overflow-hidden '>

                        <Skeleton className="h-full w-full bg-orange-50" />
                    </div>

                </div>
                <div className='flex flex-col pt-6 sm:col-span-1 sm:px-6 sm:pt-0 lg:col-span-4 lg:pt-16'>
                    <h1 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                        <Skeleton className="h-10 w-80" />
                    </h1>
                    <p className=' text-sm'>
                        <Skeleton className="h-10 w-20" />
                    </p>
                    <div className='mt-8' >
                        <Skeleton className="h-10 w-50" />
                    </div>
                    <p className='mt-8 space-y-6 text-sm to-neutral-500'>
                        <Skeleton className="h-10 w-200" />
                    </p>
                </div>

            </div>



        </div>
    )
}

export default SkeletonsProductFull