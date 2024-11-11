"use client"
import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserAvatar } from "@/components/user-avatar"
// import { getCurrentUser } from "@/lib/session";
// import { LogoutLink } from "@/pkg/hooks";
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Locale } from "@/i18n-config"
import { UserNav } from "@/types"
interface MainNavProps {
  lang: Locale
}
export default function UserAccountNav({ lang }: MainNavProps) {
  const router = useRouter()
  // const onLogout = LogoutLink();
  const [userNav, setUserNav] = useState<UserNav | undefined>()
  // useEffect(() => {
  // getCurrentUser()
  //   .then((user: any) => {
  //     if (user) {
  //       setUserNav(user);
  //     } else {
  //       router.push("/login");
  //       // window.location.replace("/login");
  //     }
  //   })
  //   .catch((e: Error) => {
  //     console.log(e.message);
  //   });
  // }, [router]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          user={{ name: userNav?.name || null, image: userNav?.image || null }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium"> {userNav?.name}</p>
            <p className="w-[200px] truncate text-sm text-muted-foreground">
              {userNav?.email}
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={`/${lang}/dashboard`}>Dashboard</Link>
        </DropdownMenuItem>
        {/*<DropdownMenuItem asChild>*/}
        {/*    <Link href={'/dashboard/profile'}>Profile</Link>*/}
        {/*</DropdownMenuItem>*/}
        <DropdownMenuItem asChild>
          <Link href={`/${lang}/profile/settings`}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={
            // onLogout
            () => {
              console.log("logout")
            }
          }
        >
          Log out
          <DropdownMenuShortcut>⌥⇧Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
