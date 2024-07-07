import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type TabViewItemsProps = {
    children?: ReactNode
    selectedIndex: number
}

export function TabViewItems({ children, selectedIndex }: TabViewItemsProps) {
    return (
        <div className="relative flex flex-col border-l-2 w-64 h-36">
            {children}

            <div
                className={cn("-left-[2px] absolute bg-primary w-[2px] h-12 top-0 transition-all duration-700", selectedIndex == 1 && "top-12", selectedIndex == 2 && "top-24")}
            />
        </div>
    )
}