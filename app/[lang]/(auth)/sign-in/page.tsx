import React from "react"
import { Login } from "../login"
import { Locale } from "@/i18n-config"


export default async function SignIn({
                                          params,
                                        }: Readonly<{
  params: Promise<{ lang: Locale }>
}>) {
  const { lang } = await params

  return <Login mode="signin" lang={lang} />
}
