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
        text={"About"}
      ></DashboardHeader>
      <div className="min-h-screen">
        Chez Bybus, nous vous proposons plusieurs options de paiement sécurisées et pratiques.
        Vous pouvez payer en ligne, par carte bancaire ou par virement bancaire.
        Vous pouvez également payer en espèces dans nos agences de voyage partenaires.
        Vous pouvez payer à travers Max it d'Orange Mali en toute sécurité.
        Nous acceptons également les paiements en espèces
        dans nos agences de voyage partenaires.
        Pour plus d'informations, veuillez nous contacter
        par téléphone ou par e-mail.
      </div>
    </DashboardShell>
  )
}
