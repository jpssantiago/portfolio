import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionContentProps = {
    children?: ReactNode
    className?: string
}

export function SectionContent({ children, className }: SectionContentProps) {
    return (
        <div className={cn("", className)}>
            {children}
        </div>
    )
}