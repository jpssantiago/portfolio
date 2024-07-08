import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SectionProps = {
    id?: string
    children?: ReactNode
    className?: string
}

export function Section({ id, children, className }: SectionProps) {
    return (
        <section id={id} className={cn("flex flex-col gap-5 mx-36 medium:mx-20 small:mx-10", className)}>
            {children}
        </section>
    )
}