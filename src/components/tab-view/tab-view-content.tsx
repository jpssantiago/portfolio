import { ReactNode } from "react"

type TabViewContentProps = {
    children?: ReactNode
}

export function TabViewContent({ children }: TabViewContentProps) {
    return (
        <div className="w-full">
            {children}
        </div>
    )
}