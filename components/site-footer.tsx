"use client";
import * as React from "react";
import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { DropdownMenuCheckboxesLocalSwitch } from "@components/localswitchDropdown"


interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
  translation: any;
}

export function SiteFooter({
                             lang,
  className,
  translation,
}: SiteFooterProps) {

  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.copyright />
          <p className="text-center text-sm leading-loose md:text-left">
            2023- {new Date().getFullYear()} -{" "}
            <a
              href={siteConfig.links.website}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Bybus
            </a>{" "}
            – {translation.AllRightsReserved}
          </p>
        </div>
        <div>
          <ModeToggle />
        </div>
        <div className={""}>
          <DropdownMenuCheckboxesLocalSwitch
            lang={lang}
            translation={translation}
          />
        </div>
      </div>
    </footer>
  );
}
