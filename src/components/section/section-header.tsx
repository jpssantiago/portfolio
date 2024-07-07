import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionHeaderProps = {
    children?: ReactNode
    className?: string
}

export function SectionHeader({ children, className }: SectionHeaderProps) {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            {children}
        </div>
    )
}