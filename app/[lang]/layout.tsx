// import type { Metadata } from "next";
import localFont from "next/font/local"
import { Inter as FontSans } from "next/font/google"
import "@/styles/main.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { cn } from "@/lib/utils"
import { Locale } from "@/i18n-config"

// const geistSans = localFont({
//   src: "../../assets/fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "../../assets/fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
  params: Promise<{ lang: Locale }>
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>
}) {
  const {
    name: title,
    description,
    image,
    logo,
    icons,
    manifest,
  } = {
    name: "ByBus",
    description:
      "La solution la plus adaptée pour vos réservations des billets de bus en ligne sans vous déplacer .",
    image: "/bybus+.png",
    logo: "/bybus+.png",
    icons: {
      icon: "/favicon-32x32.png",
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    },
    manifest: "/site.webmanifest",
  }
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image, logo],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "ByBus",
    },
    icons: icons, // logo ? [logo] : icons
    manifest: manifest,
    // metadataBase: domain.includes("localhost")
    //     ? new URL(`http://${domain.replace("%3A", ":")}`)
    //     : new URL(`https://${domain.replace("%3A", ":")}`),
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { lang } = await params

  return (
    <html className={"h-full"} lang={lang} id={lang} suppressHydrationWarning>
    <head>
      <link rel="manifest" href="/site.webmanifest"></link>
      <title>ByBus</title>
    </head>
    <body
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
        fontHeading.variable,
      )}
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
    </body>
    </html>
  )
}