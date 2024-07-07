import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
    id?: string
    children?: ReactNode
    className?: string
}

export function Section({ id, children, className }: SectionProps) {
    return (
        <section id={id} className={cn("flex flex-col gap-5 mx-80", className)}>
            {children}
        </section>
    )
}