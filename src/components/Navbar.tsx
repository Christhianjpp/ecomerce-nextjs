
import Link from 'next/link'
import BtnOptionsSession from './BtnOptionsSession'
import { ImageIcon, SearchIcon, TvIcon } from 'lucide-react'

import Search from '@/components/dashboad/Search';
import { SearchNavbar } from './SearchNavbar';
import { getSubCategories, getSubCategoriesByCategory, getSubCategory } from '@/libs/subcategorias/actions';


export const Navbar = async () => {
    const categorias = await getSubCategoriesByCategory('7c95b006-5036-4d9c-a89b-b045b56b845c')


    return (
        <div className='sticky top-0 z-20 border-b duration-200 border-neutral-100 bg-white'>
            <div className='mx-auto max-w-7xl px-3 sm:px8'>

                <div className='flex h-16 justify-between gap-4 md:gap-8 '>
                    <button className="flex h-8 w-8 flex-col items-center justify-center gap-1.5  self-center md:hidden"
                        aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu">
                        <TvIcon className="w-5 h-5 text-white hover:text-red-500" />

                    </button>
                    <div className="flex items-center justify-center font-bold">
                        <Link aria-label="Inicio" className='justify-center flex items-center gap-0 space-y-0' href="/">

                            RiseAndShine

                        </Link></div>
                    <nav className=" flex w-full gap-4 lg:gap-6  items-center" aria-label='Menu navegacíon'>

                        <div className=" hidden gap-4 overflow-x-auto  md:flex lg:gap-8 lg:px-0">

                            {categorias.map((categoria) => (
                                <Link key={categoria.id} className="text-neutral-600 text-sm font-medium
                            hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                                    href={`/categorias/${categoria.name}`}>
                                    {categoria.name}
                                </Link>
                            ))}

                            {/* <Link className="text-neutral-500 text-sm font-medium
                             hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                                href="/categorias/aretes">
                                Aretes
                            </Link>
                            <Link className="text-neutral-500 text-sm font-medium 
                            underline-offset-4 hover:text-black hover:underline dark:text-neutral-400
                             dark:hover:text-neutral-300"
                                href="/">
                                Anillos
                            </Link>
                            <Link className="text-neutral-500 text-sm font-medium 
                            underline-offset-4 hover:text-black hover:underline dark:text-neutral-400
                             dark:hover:text-neutral-300"
                                href="/">
                                Pulseras
                            </Link>
                            <Link className="text-neutral-500 text-sm font-medium 
                            underline-offset-4 hover:text-black hover:underline dark:text-neutral-400
                             dark:hover:text-neutral-300"
                                href="/">
                                Collares
                            </Link> */}
                            <Link className="text-neutral-600 text-sm font-medium 
                            underline-offset-4 hover:text-black hover:underline dark:text-neutral-400
                             dark:hover:text-neutral-300"
                                href="/">
                                Ofertas
                            </Link>
                            <Link className="text-neutral-600 text-sm font-medium 
                            underline-offset-4 hover:text-black hover:underline dark:text-neutral-400
                             dark:hover:text-neutral-300"
                                href="/">
                                Contacto
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

                            <TvIcon className="w-5 h-5 " />

                        </div>

                    </nav>

                </div>
            </div>
        </div>
    )
}
