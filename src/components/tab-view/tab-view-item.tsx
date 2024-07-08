import { cn } from "@/lib/utils"

type TabViewItemProps = {
    children?: string
    isSelected: boolean
    onSelect: () => void
}

export function TabViewItem({ children, isSelected, onSelect }: TabViewItemProps) {
    return (
        <div
            onClick={onSelect}
            className={cn("medium:w-full small:w-full small:justify-center small:text-center medium:justify-center medium:text-center flex justify-start items-center px-5 h-14 cursor-pointer hover:bg-secondary/50 hover:text-primary transition-all", isSelected && "text-primary bg-secondary/50")}
        >
            {children}
        </div>
    )
}