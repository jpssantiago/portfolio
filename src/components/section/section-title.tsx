import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionTitleProps = {
    children?: ReactNode
    className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
    return (
        <h1 className={cn("text-3xl flex gap-2 small:text-center font-bold items-end", className)}>
            {children}
        </h1>
    )
}