"use client"

import { MobileNav } from "@/components/mobile-nav"
import { Skeleton } from "@/components/ui/skeleton"
import { Locale } from "@/i18n-config"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import * as React from "react"
import { useEffect, useState } from "react"
import { MainNavItem } from "@/types"
import { Activity, X } from "lucide-react"

interface MainNavProps {
  items?: MainNavItem[]
  children?: React.ReactNode
  lang: Locale
  dictionary: any
}

export function MainNav({
  items,
  children,
  dictionary,
  lang,
}: Readonly<MainNavProps>) {
  const segment = useSelectedLayoutSegment()
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const replacementObject: any = dictionary
  useEffect(() => {
    setMounted(true)
  }, [])

  const translatedItem = items?.map((item) => ({
    ...item,
    title: replacementObject[item.title] || item.title,
  }))

  return (
    <div className="flex gap-6 md:gap-10">
      {/*<Link href={`/${lang}/dashboard`}>*/}
      {/*  <Image*/}
      {/*    src="/logo.png"*/}
      {/*    width={170}*/}
      {/*    height={24}*/}
      {/*    alt={"logo image"}*/}
      {/*  />*/}
      {/*</Link>*/}
      {!mounted ? (
        <Skeleton className="h-[24px] w-[170px] rounded-full" />
      ) : (
        <Link
          href={`/${lang}/dashboard`}
          className="inline-block text-black sm:hidden md:inline-block"
        >
          <Image
            src={
              theme === "dark" ||
              // || systemTheme === "dark"
              resolvedTheme === "dark"
                ? "/logo_dark.png"
                : "/logo.png"
            }
            width={170}
            height={24}
            alt={"Bybus"}
          />
        </Link>
      )}

      {translatedItem?.length ? (
        <nav className="hidden gap-6 md:flex">
          {translatedItem?.map((item) => (
            <Link
              key={item.href}
              href={item.disabled ? "#" : `/${lang}${item.href}`}
              className={cn(
                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                item.href.startsWith(`/${segment}`)
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled && "cursor-not-allowed opacity-80",
              )}
            >
              {item.title}
            </Link>
          ))}
          <a
            className="flex items-center text-lg font-medium text-foreground/60 transition-colors hover:text-foreground/80 sm:text-sm"
            href="https://support.bybus.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support
          </a>
        </nav>
      ) : null}

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <X /> : <Activity />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items} lang={lang}>
          {children}
        </MobileNav>
      )}
    </div>
  )
}
