"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { i18n } from "@/i18n-config";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  AlertDialog, AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogTitle,
} from "@components/ui/alert-dialog"
import { RadioGroup, RadioGroupItem } from "@components/ui/radio-group"
import { Label } from "@components/ui/label"

interface SelectLocalProps {
  lang: string;
  translation: any;
}

export function DropdownMenuCheckboxesLocalSwitch({
  lang,
  translation,
}: Readonly<SelectLocalProps>) {
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {" "}
            {lang === "en" ? "English" : "French"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48">
          <DropdownMenuLabel>Select language</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <RadioGroup defaultValue={lang} className="w-full">
            {i18n.locales.map((locale) => {
              return (
                <div
                  onClick={() => {
                    setSavedLocal(locale);
                    if (pathName?.includes("addReport")) {
                      locale !== lang && setOpen(true);
                    } else {
                      savedLocal !== lang &&
                        router.push(redirectedPathName(locale));
                    }
                  }}
                  className="flex w-full items-center space-x-2"
                  key={locale}
                >
                  <RadioGroupItem value={locale} id={locale} />
                  <Label className="ml-5 w-full" htmlFor={locale}>
                    {locale === "en" ? "English" : "French"}
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Change language
            </AlertDialogTitle>
            <AlertDialogDescription>
              etes vous sur de vouloir changer de langue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              retour
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                savedLocal !== lang &&
                  router.push(redirectedPathName(savedLocal));
                setOpen(false);
              }}
            >
              Confirmer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
