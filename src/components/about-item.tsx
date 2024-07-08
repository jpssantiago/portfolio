type AboutItemProps = {
    title: string
    description: string
}

export function AboutItem({ title, description }: AboutItemProps) {
    return (
        <div className="flex items-start gap-2 cursor-default group">
            <div className="group-hover:bg-primary border-primary mt-[6px] border rounded-full transition-all size-3" />

            <div className="flex flex-col gap-1">
                <h1 className="font-medium">
                    {title}
                </h1>

                <p className="text-[15px] text-zinc-400">
                    {description}
                </p>
            </div>
        </div>
    )
}