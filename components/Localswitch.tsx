"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select";
import { i18n } from "@/i18n-config";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";

interface SelectLocalProps {
  lang: string;
  translation: any;
}

export function SelectLocal({ lang, translation }: SelectLocalProps) {
  const pathName: any = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [savedLocal, setSavedLocal] = useState<string>("en");
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <Select>
        <SelectTrigger className="mr-3 w-[80px]">
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
        <SelectContent className="">
          <SelectGroup>
            <SelectLabel className="w-20">Select language</SelectLabel>
            {i18n.locales.map((locale) => {
              return (
                <div
                  onClick={() => {
                    setSavedLocal(locale);
                    if (
                      pathName?.includes("addReport") ||
                      pathName?.includes("addReport")
                    ) {
                      locale !== lang && setOpen(!open);
                    } else {
                      savedLocal !== lang &&
                        router.push(redirectedPathName(locale));
                    }
                  }}
                  className="hover:bg-slate-200"
                  key={locale}
                >
                  <ReactCountryFlag
                    countryCode={locale === "en" ? "us" : locale}
                    svg
                    style={{
                      width: "40px",
                      height: "40px",
                      marginLeft: "20px",
                      //   fontSize: "1,25em",
                      //   lineHeight: "1em"
                    }}
                    className=""
                  />
                </div>
                // <li className="hover:bg-slate-200" key={locale}>

                // </li>
              );
            })}
            {/* {/* <SelectItem value="en">english</SelectItem> */}
          </SelectGroup>
        </SelectContent>
      </Select>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{translation.translationAlert}</AlertDialogTitle>
            <AlertDialogDescription>
              {translation.translationAlertDesc}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              {translation.Cancel}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                savedLocal !== lang &&
                  router.push(redirectedPathName(savedLocal));
                setOpen(false);
              }}
            >
              {translation.Continue}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
