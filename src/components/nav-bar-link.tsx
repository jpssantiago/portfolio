"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"

type NavBarLinkProps = {
    href: string
    children?: ReactNode
}

export function NavBarLink({ href, children }: NavBarLinkProps) {
    const pathname = usePathname()

    const isActive = pathname == href

    return (
        <Link href={href} className={twMerge("text-gray-400 transition-color duration-300 hover:text-white hover:-translate-y-1", isActive && "text-white")}>
            {children}
        </Link>
    )
}