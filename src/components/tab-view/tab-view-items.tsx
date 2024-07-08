import { ReactNode } from "react"

import { cn } from "@/lib/utils"

type TabViewItemsProps = {
    children?: ReactNode
    selectedIndex: number
}

export function TabViewItems({ children, selectedIndex }: TabViewItemsProps) {
    return (
        <div className="relative flex medium:flex-row flex-col small:grid small:grid-cols-3 medium:border-b small:border-b border-l-2 medium:border-l-0 small:border-l-0 w-72 medium:w-full small:w-full h-36 medium:h-14 small:h-14">
            {children}

            <div
                className={cn("-left-[2px] absolute bg-primary w-[2px] h-12 top-0 transition-all duration-700 small:h-px small:w-1/3 small:top-full small:left-0 medium:h-px medium:w-1/3 medium:top-full medium:left-0", selectedIndex == 1 && "small:left-1/3 top-12 medium:left-1/3", selectedIndex == 2 && "small:left-2/3 top-24 medium:left-2/3")}
            />
        </div>
    )
}