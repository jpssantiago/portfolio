import { ReactNode } from "react"

type HeroTextProps = {
    children?: ReactNode
}

export function HeroText({ children }: HeroTextProps) {
    return (
        <span className="relative mx-2">
            <div className="top-0 -left-1 z-0 absolute bg-primary w-0 h-full hero-text-bg" />
            
            <span className="relative">
                {children}
            </span>
        </span>
    )
}