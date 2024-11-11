import type { Locale } from "./i18n-config"

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries: any = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  // de: () => import('./dictionaries/de.json').then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  // it: () => import('./dictionaries/it.json').then((module) => module.default),
  // nl: () => import('./dictionaries/nl.json').then((module) => module.default),
  // ru: () => import('./dictionaries/ru.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale | any) => {
  if (dictionaries.hasOwnProperty(locale)) {
    return dictionaries[locale]()
  } else {
    throw new Error(`Dictionary not available for locale: ${locale}`)
  }
}
