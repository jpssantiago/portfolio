import { ReactNode } from "react"

type TabViewProps = {
    children?: ReactNode
}

export function TabView({ children }: TabViewProps) {
    return (
        <div className="flex medium:flex-col small:flex-col gap-10 w-full">
            {children}
        </div>
    )
}