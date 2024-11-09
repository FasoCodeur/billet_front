import { SiteConfig } from "types";

export const siteConfig: SiteConfig = {

  name: "ByBus",
  description:
    "La solution la plus adaptée pour vos réservations des billets de bus en ligne sans vous déplacer .",
  url: "https://billet-front.vercel.app/",
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/taxonomy",
    website: "https://billet-front.vercel.app/",
  },    image: "/bybus+.png",
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
};
