import { LoginForm } from "@/components/login-form"
import { Locale } from "@/i18n-config"


export default async function Login({
                                       params,
                                     }: Readonly<{
  params: Promise<{ lang: Locale }>
}>) {
  const { lang } = await params
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <LoginForm lang={lang} />
    </div>
  )
}
