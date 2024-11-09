import { Icons } from "@/components/icons"
import { User } from "@prisma/client"

export type NavItem = {
  title: string
  href: string
  disabled?: boolean
  icon?: keyof typeof Icons
}

export type MainNavItem = NavItem

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)

export type SiteConfig = {
  name: string
  image: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    website: string
  }
  logo: string
  icons: any
  manifest: string
}

export type Operator = {
  label: string
  value: string
  selected: boolean
}
export type FiltrableColumns = {
  name: string
  type: string
  label: string
  value: string
  operator: Operator[]
  tableName: string
  description: string
}

export type DocsConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type UserNav = {
  name: string
  email: string
  image: string
  logoutUrl: string
}

export type MarketingConfig = {
  mainNav: MainNavItem[]
}

export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export type PageConfig = {
  sidebarNav: SidebarNavItem[]
}

export type DataInsightsConfig = {
  mainNav: MainNavItem[]
  tableDataConfig: AllTableDataConfig[]
}

export type SubscriptionPlan = {
  name: string
  description: string
  stripePriceId: string
}

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<User, "stripeCustomerId" | "stripeSubscriptionId"> & {
    stripeCurrentPeriodEnd: number
    isPro: boolean
  }
