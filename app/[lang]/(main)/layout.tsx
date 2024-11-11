import React from "react"
// import { MainNav } from "@/components/main-nav";
// import SearchButton from "@/components/Search/searchButton";
import { SiteFooter } from "@/components/site-footer"
// import { SiteFooterChatAI } from "@/components/ui/site-fouter-ai";
// import UserAccountNav from "@/components/user-account-nav";
// import { ConfigDashboard, dashboardConfig2 } from "@/config/dashboard";
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { Metadata } from "next"
import UserAccountNav from "@components/user-account-nav"
import { MainNav } from "@components/main-nav"
import { dashboardConfig } from "@/config/dashboard"
import { Button } from "@components/ui/button"
import Link from "next/link"

interface DashboardLayoutProps {
  children?: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export type UserNav = {
  name: string
  email: string
  image: string
  logoutUrl: string
}

export const metadata: Metadata = {
  title: "ByBus | reservez votre billet en toute simplicité",
  description:
    "Réservez votre billet de bus dans la plus grande facilité. ByBus, c'est la solution pour vos déplacements en bus.",
}

export default async function DashboardLayout({
  children,
  params,
}: Readonly<DashboardLayoutProps>) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  const isSigned = false
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav
            lang={lang}
            dictionary={dictionary.Users.NavabarHeader}
            items={dashboardConfig.mainNav}
          />
          <div className="flex flex-row items-center justify-between space-x-4 md:space-x-2">
            <Link href={"/reservations"}>
              {/*  reservez maintemant */}
              <Button
                typeof={"button"}
                className="bg-primary text-white"
                variant="outline"
              >
                Réservez maintenant
              </Button>
            </Link>
            {/*sign in or sign up button */}
            {isSigned ? (
              <Link href={"/sign-in"}>
                <Button typeof={"button"} className="bg-primary text-white">
                  Connexion
                </Button>
              </Link>
            ) : (
              <Link href={"/sign-up"}>
                <Button typeof={"button"} className="bg-primary text-white">
                  Créer un compte
                </Button>
              </Link>
            )}
            <UserAccountNav lang={lang} />
          </div>
        </div>
      </header>

      {children}
      <SiteFooter
        translation={dictionary.Footer}
        className="border-t"
        lang={lang}
      />
    </div>
  )
}
