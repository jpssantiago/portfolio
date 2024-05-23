import ProjectLink from "../models/project-link"

interface Props {
    links: ProjectLink[]
    padding?: string
}

export default function ProjectLinks({ links, padding }: Props) {
    return (
        <div className="flex flex-wrap">
            {links.map((link, index) => (
                <a href={link.url} key={index} className={padding ?? "mr-[20px]" + ""}>
                    <i className={`${link.iconPack} ${link.iconName} text-gray text-xl gradient-when-hover`} />
                </a>
            ))}
        </div>
    )
}