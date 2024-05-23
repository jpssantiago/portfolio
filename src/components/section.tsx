interface Props {
    name: string
    children?: any
}

export default function Section({ name, children }: Props) {
    return (
        <div className="max-w-[1440px] mx-auto px-[220px] py-[50px] large:px-[100px] tablet:px-[50px] phone:px-[50px]">
            <h1 className="gradient-text text-3xl">{name}</h1>

            <div className="mt-[20px]">
                {children}
            </div>
        </div>
    )
}