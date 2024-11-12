import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/dashboard",
      icon: "post",
    },
    {
      title: "Services",
      href: "/dashboard/Services",
      icon: "lineChart",
    },
    // {
    //   title: "Pricing",
    //   href: "/dashboard/pricing",
    // },

    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "settings",
    },
    // {
    //   title: "Profile",
    //   href: "/dashboard/profile",
    // },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  sidebarNav: [
    // {
    //     title: "Dashboard",
    //     href: "/dashboard",
    //     icon: "post",
    // },
    // {
    //     title: "Forecast",
    //     href: "/dashboard/products",
    //     icon: "lineChart",
    // },
    // {
    //     title: "Settings",
    //     href: "/dashboard/settings",
    //     icon: "settings",
    // },
  ],
}
