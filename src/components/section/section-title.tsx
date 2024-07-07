import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionTitleProps = {
    index: number
    children?: ReactNode
    className?: string
}

export function SectionTitle({ index, children, className }: SectionTitleProps) {
    return (
        <h1 className={cn("text-3xl flex gap-2 font-bold items-end", className)}>
            <span className="font-medium text-lg text-primary">
                0{index}. 
            </span>

            {children}
        </h1>
    )
}