import { SearchIcon } from 'lucide-react'
import React from 'react'
import { Input } from "@/components/ui/input"

export const SearchNavbar = () => {
    return (
        <form className='w-max-[500px] relative w-full lg:w-80 xl:w-full  '>
            <Input
                type='text'
                autoComplete='off'
                name='search'
                placeholder='Buscar productos...'
                className='w-full rounded-lg border bg-white px-4 py-2 text-sm text-black 
                placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placholder:text-neutral-400'
            />
            <div className='absolute right-0 top-0 mr-3 flex h-full items-center'>

                <SearchIcon />
            </div>
        </form>
    )
}
