import { ReactNode } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type UnderlineLinkProps = {
    href: string
    children?: ReactNode
    className?: string
}

export function UnderlineLink({ href, children, className }: UnderlineLinkProps) {
    return (
        <Link href={href} className={cn("relative group text-primary", className)}>
            {children}

            <div
                className="group-hover:w-full bottom-0 left-0 absolute bg-primary w-0 h-px transition-all duration-500"
            />
        </Link>
    )
}