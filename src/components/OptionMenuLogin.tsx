
'use client';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import GoogleLoginBtn from "./GoogleLoginBtn";
import LoginForm from "./login-form";
import { User2Icon, UserIcon } from "lucide-react";




const OptionMenuLogin = () => {
    return (

        <DropdownMenu>
            <DropdownMenuTrigger>

                <UserIcon className=" w-6 " />

            </DropdownMenuTrigger>
            <DropdownMenuContent className="space-y-3  pb-3 p-3 ">
                <GoogleLoginBtn />
                <LoginForm />
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default OptionMenuLogin