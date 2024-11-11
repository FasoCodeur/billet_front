import React from "react"
import { DashboardShell } from "@/components/shell"
import { getDictionary } from "@/get-dictionary"
import { Locale } from "@/i18n-config"
import { DashboardHeader } from "@components/header"

export const metadata = {
  title: "ByBus",
}

export default async function Dashboard({
  params,
}: Readonly<{
  params: Promise<{ lang: Locale }>
}>) {
  const { lang } = await params
  const dictionary = await getDictionary(lang)
  metadata.title = `ByBus | ${dictionary.DashBoard.Head}`

  return (
    <DashboardShell>
      <DashboardHeader
        heading={dictionary.DashBoard.Head}
        text={dictionary.DashBoard.HeadText}
      ></DashboardHeader>
      <div className="min-h-screen"></div>
    </DashboardShell>
  )
}
