'use client'
import {
    HomeIcon,
    RectangleGroupIcon,
    BookmarkIcon,
    StarIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    {
        name: 'Inicio',
        href: '/dashboard',
        icon: HomeIcon
    },
    {
        name: 'Productos',
        href: '/dashboard/productos',
        icon: StarIcon,
    },
    {
        name: 'Categorias',
        href: '/dashboard/categorias',
        icon: BookmarkIcon
    },
    {
        name: 'SubCategorias',
        href: '/dashboard/subcategorias',
        icon: RectangleGroupIcon
    },
    {
        name: 'Material',
        href: '/dashboard/material',
        icon: SparklesIcon
    },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex h-[48px] grow items-center 
            justify-center gap-2 rounded-md bg-gray-200 p-3 
            text-sm font-medium hover:bg-gray-700 hover:text-white
            md:flex-none md:justify-start md:p-2 md:px-3 
            ${pathname === link.href ? 'bg-gray-700 text-white' : ''}
            `}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
