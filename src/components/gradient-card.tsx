interface Props {
    children: any
    style?: string
}

export default function GradientCard({ children, style }: Props) {
    return (
        <div className={`${style} p-1 bg-card rounded-sm gradient-card`}>
            <div className="w-full h-full bg-card p-[20px]">
                {children}
            </div>
        </div>
    )
}