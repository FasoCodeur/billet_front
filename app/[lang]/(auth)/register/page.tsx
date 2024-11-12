import React from "react"
import { Login } from "../login"
import { Locale } from "@/i18n-config"


export default async function Register({
                                       params,
                                     }: Readonly<{
  params: Promise<{ lang: Locale }>
}>) {
  const { lang } = await params
  return <Login mode="signup" lang={lang} />
}
