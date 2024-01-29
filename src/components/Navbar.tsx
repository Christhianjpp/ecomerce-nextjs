
import Link from 'next/link'
import BtnOptionsSession from './BtnOptionsSession'
import { ImageIcon, SearchIcon } from 'lucide-react'

import Search from '@/components/dashboad/Search';
import { SearchNavbar } from './SearchNavbar';


export const Navbar = () => {


    return (
        <div className='sticky top-0 z-20 border-b duration-200 border-neutral-100 bg-white'>
            <div className='mx-auto max-w-7xl px-3 sm:px8'>

                <div className='flex h-16 justify-between gap-4 md:gap-8 '>
                    <button className="flex h-8 w-8 flex-col items-center justify-center gap-1.5  self-center md:hidden"
                        aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            className="lucide lucide-menu h-6 w-6 shrink-0" aria-hidden="true">
                            <line x1="4" x2="20" y1="12" y2="12">
                            </line>
                            <line x1="4" x2="20" y1="6" y2="6">
                            </line>
                            <line x1="4" x2="20" y1="18" y2="18">
                            </line>
                        </svg>
                    </button>
                    <div className="flex items-center justify-center font-bold">
                        <Link aria-label="Inicio" className='justify-center flex items-center gap-0 space-y-0' href="/">

                            RiseAndShine

                        </Link></div>
                    <nav className=" flex w-full gap-4 lg:gap-6  items-center" aria-label='Menu navegacíon'>

                        <div className=" hidden gap-4 overflow-x-auto  md:flex lg:gap-8 lg:px-0">


                            <Link className="text-neutral-500 text-sm font-medium hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="/">
                                Aretes
                            </Link>
                            <Link className="text-neutral-500 text-sm font-medium underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="/">
                                Anillos
                            </Link>
                            <Link className="text-neutral-500 text-sm font-medium underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="/">
                                Pulseras
                            </Link>
                            <Link className="text-neutral-500 text-sm font-medium underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="/">
                                Collares
                            </Link>

                        </div>
                        <div className="ml-auto flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8" id="">
                            <div className='hidden lg:flex lg:w-80' >
                                <Search placeholder="Buscar productos..." />
                            </div>
                            <div className=' relative flex h-8 w-8 items-center justify-center rounded-md  text-black  '>

                                <BtnOptionsSession />

                            </div>
                        </div>

                        <div className='relative flex h-8 w-8 items-center justify-center rounded-md  text-black  '>
                            <svg width="15" height="15" viewBox="0 0 15 15" className='w-6 h-6' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 
                            14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                                </path>
                            </svg>

                        </div>

                    </nav>

                </div>
            </div>
        </div>
    )
}
