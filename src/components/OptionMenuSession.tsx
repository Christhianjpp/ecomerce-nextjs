'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { Button } from "./ui/button";
import { signOut, useSession } from 'next-auth/react';
import { User } from "@prisma/client";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Image from "next/image";
import { ImageOffIcon } from "lucide-react";

const OptionBtn = () => {
    const { data: session } = useSession()
    const user: User = session?.user as User

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>

                {session?.user?.image ?
                    <Image
                        src={session?.user?.image}
                        alt={session?.user?.name || "Usuario"}
                        width={36}
                        height={36}
                        className="rounded-full w-7 h-7"
                    /> : <ImageOffIcon className="text-green-400" />
                }

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <Link
                    href="/perfil"
                >
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>

                {
                    user?.role === 'Admin' && <Link
                        href="/dashboard">
                        <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    </Link>
                }


                <DropdownMenuSeparator />


                <Button
                    onClick={() => signOut({ callbackUrl: '/' })}
                    variant={"ghost"}>

                    Cerrar Sesión
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default OptionBtn