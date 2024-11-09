import React  from 'react';
// import { MainNav } from "@/components/main-nav";
// import SearchButton from "@/components/Search/searchButton";
// import { SiteFooter } from "@/components/site-footer";
// import { SiteFooterChatAI } from "@/components/ui/site-fouter-ai";
// import UserAccountNav from "@/components/user-account-nav";
// import { ConfigDashboard, dashboardConfig2 } from "@/config/dashboard";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";
import { Metadata } from "next";
// import { cookies } from "next/headers";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}


export type UserNav = {
  name: string;
  email: string;
  image: string;
  logoutUrl: string;
};

export const metadata: Metadata = {
  title: "ByBus",
  description: "Réservez votre billet de bus dans la plus grande facilité. ByBus, c'est la solution pour vos déplacements en bus.",
};

export default async function DashboardLayout({
  children,
  params,
}: Readonly<DashboardLayoutProps>) {
  const { lang } =  await params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="bg-background sticky top-0 z-40 border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          {/*<MainNav*/}
          {/*  lang={lang}*/}
          {/*  dictionary={dictionary.NavabarHeader}*/}
          {/*  items={*/}
          {/*    activeModules*/}
          {/*      ? ConfigDashboard(activeModules).mainNav*/}
          {/*      : dashboardConfig2.mainNav*/}
          {/*  }*/}
          {/*/>*/}
          <div className="flex flex-row items-center justify-between space-x-4 md:space-x-2">
            {/*<SearchButton*/}
            {/*  lang={lang}*/}
            {/*  dictionary={dictionary.NavabarHeader}*/}
            {/*  insightsDictionary={dictionary.DataInisght.SideBar}*/}
            {/*  domain={domain.replace("%3A", ":")}*/}
            {/*  items={ConfigDashboard(activeModules).mainNav}*/}
            {/*/>*/}

            {/*<SiteFooterChatAI*/}
            {/*  domain={domain.replace("%3A", ":")}*/}
            {/*  activeModules={activeModules}*/}
            {/*  translation={dictionary.Footer}*/}
            {/*  className="border-t"*/}
            {/*/>*/}
            {/*<UserAccountNav lang={lang} />*/}
          </div>
        </div>
      </header>

      {children}
      {/*<SiteFooter*/}
      {/*  domain={domain.replace("%3A", ":")}*/}
      {/*  activeModules={activeModules}*/}
      {/*  translation={dictionary.Footer}*/}
      {/*  className="border-t"*/}
      {/*  lang={lang}*/}
      {/*/>*/}
    </div>
  );
}
