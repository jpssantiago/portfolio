import ProjectLink from "../models/project-link"

interface Props {
    links: ProjectLink[]
}

export default function ProjectLinks({ links }: Props) {
    return (
        <div className="flex flex-wrap">
            {links.map((link, index) => (
                <a href={link.url} key={index} className="mr-[20px]">
                    <i className={`${link.iconPack} ${link.iconName} text-gray text-xl gradient-when-hover`} />
                </a>
            ))}
        </div>
    )
}