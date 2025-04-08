import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { UserPen, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { getUsername } from '@/helpers/auth.js'
import Cookies from 'js-cookie'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const NavUser = () => {
    const router = useRouter();
    const userName = getUsername();
    const handleLogout = () => {
        Cookies.remove("auth_token");
        router.push("/login");
    }
    return (<>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="/images/icons/nav-user.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-24 rounded-lg"
                align="start"
                sideOffset={4}
            >
                <DropdownMenuLabel>
                    Hi {userName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <UserPen />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </>
    )
}

export default NavUser