
import Link from 'next/link'
import BtnOptionsSession from './BtnOptionsSession'
import { ImageIcon, SearchIcon } from 'lucide-react'

import Search from '@/components/dashboad/Search';
import { SearchNavbar } from './SearchNavbar';


export const Navbar = () => {


    return (
        // <nav className=" sticky top-0 shadow-md shadow-slate-900/5   bg-white  z-50   ">
        <nav className=" relative flex items-center justify-between p-4 lg:px-6   ">
            <div className='block flex-none md:hidden'>
                <button
                    className='flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white md:hidden'
                >
                    =
                </button>
            </div>

            <div className="flex w-full items-center  " id="navbar-user">
                <div className=" flex w-full md:w-1/2 ">

                    <Link className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
                        href="/">
                        <div
                            className='flex flex-none items-center justify-center border border-x-neutral-200
                         bg-white dark:border-x-neutral-700 dark:bg-black h-[40px] w-[40px] rounded-xl'>

                            <ImageIcon className="text-azulv lg:text-2xl" size={32} />
                        </div>
                        <span className="ml-2 gap-6 text-sm font-medium uppercase md:hidden lg:block tracking-tighter">Rise And Shine</span>
                    </Link>

                    <div className='hidden gap-6 text-sm md:flex md:items-center'>

                        <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                            href="/">

                            Categorías
                        </Link>
                    </div>
                </div>
                <div className='hidden justify-center md:flex md:w-1/5 ' >

                    {/* <SearchNavbar /> */}
                    <Search placeholder="Buscar productos..." />
                </div>
                <div className='flex justify-end md:w-1/3 space-x-2'>
                    <div className=' relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black '>

                        <svg width="15" height="15" viewBox="0 0 15 15" className='w-6 h-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 
                            14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                            </path>
                        </svg>
                    </div>
                    <div className=' relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black '>

                        <BtnOptionsSession />
                    </div>
                </div>

            </div>
        </nav>
    )
}
