"use client";

import { Icons } from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getCurrentUserRoles } from "@/lib/session";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SidebarNavItem } from "types";
import { any } from "zod";

interface DashboardNavProps {
  items: SidebarNavItem[];
  [key: string]: any;
}

export function DashboardNav({ items }: any) {
  const path = usePathname();
  const [roles, setRole] = useState();
  useEffect(() => {
    getCurrentUserRoles()
      .then((user: any) => {
        if (user) {
          setRole(user?.roles);
        }
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }, []);
  if (!items?.length) {
    return <></>;
  }
  const filteredData = items.filter((item) => {
    // If the user is defined, remove objects with titles "Groups" and "Users"
    if (roles === "user") {
      return (
        item.title !== "Groups" &&
        item.title !== "Users" &&
        item.title !== "Groupes" &&
        item.title !== "Utilisateurs"
      );
    }
    // Otherwise, keep all objects
    return true;
  });

  return (
    <nav className="grid items-start gap-2">
      {filteredData.map((item: any, index: number) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "bg-transparent",
                  item.disabled ? "cursor-not-allowed opacity-80" : "",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="block w-[175px] truncate">
                        {item.title}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.title}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
