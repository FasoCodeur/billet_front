import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface DashboardHeaderProps {
  heading: string
  text?: string
  children?: React.ReactNode
}

export function DashboardHeader({
  heading,
  text,
  children,
}: Readonly<DashboardHeaderProps>) {
  return (
    <div className="flex items-center justify-between overflow-hidden px-2">
      <div className="grid gap-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h1 className="block w-fit flex-wrap truncate px-2 text-3xl font-bold md:max-w-[550px] lg:max-w-[750px]">
                {heading}
              </h1>
            </TooltipTrigger>
            <TooltipContent>
              <span className="block w-full truncate">{heading}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {text && (
          <p className="block w-fit max-w-[600px] truncate px-2 text-lg text-muted-foreground">
            {text}
          </p>
        )}
      </div>
      {children}
    </div>
  )
}
