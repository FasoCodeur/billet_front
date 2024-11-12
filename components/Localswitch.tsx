"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select"
import { i18n, Locale } from "@/i18n-config"
import { usePathname, useRouter } from "next/navigation"
import * as React from "react"
import { useState } from "react"
import ReactCountryFlag from "react-country-flag"

interface SelectLocalProps {
  lang: Locale
  translation: {
    [key: string]: string;
  }
}

export function SelectLocal({ lang, translation }: SelectLocalProps) {
  const pathName:string = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [savedLocal, setSavedLocal] = useState<Locale>("en")
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <div>
      <Select>
        <SelectTrigger className="mr-3 w-[60px]">
          <ReactCountryFlag
            countryCode={lang === "en" ? "us" : lang}
            svg
            style={{
              width: "30px",
              height: "30px",
              // marginRight : "20px"
              //   fontSize: "1,25em",
              //   lineHeight: "1em"
            }}
          />
          {/* <SelectValue placeholder="Select language" /> */}
        </SelectTrigger>
        <SelectContent className="w-full p-0 m-0">
          <SelectGroup >
            {i18n.locales.map((locale) => {
              return (
                <div
                  onClick={() => {
                    setSavedLocal(locale)
                    if (
                      pathName?.includes("addReport") ||
                      pathName?.includes("addReport")
                    ) {
                      locale !== lang && setOpen(!open)
                    } else {
                      savedLocal !== lang &&
                        router.push(redirectedPathName(locale))
                    }
                  }}
                  className="hover:bg-slate-200 flex flex-row"
                  key={locale}
                >
                  <ReactCountryFlag
                    countryCode={locale === "en" ? "us" : locale}
                    svg
                    style={{
                      width: "30px",
                      height: "30px",
                      marginLeft: "5px",
                      //   fontSize: "1,25em",
                      //   lineHeight: "1em"
                    }}
                    className=""
                  />
                  <p className={"text-foreground hover:text-background"}>{locale === "en" ? "English" : "Français"}</p>
                </div>
                // <li className="hover:bg-slate-200" key={locale}>

                // </li>
              )
            })}
            {/* {/* <SelectItem value="en">english</SelectItem> */}
          </SelectGroup>
        </SelectContent>
      </Select>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Change language</AlertDialogTitle>
            <AlertDialogDescription>
              etes vous sur de vouloir changer de langue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Retour
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                savedLocal !== lang &&
                  router.push(redirectedPathName(savedLocal))
                setOpen(false)
              }}
            >
              Confirmer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
