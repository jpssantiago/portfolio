interface Props {
    technologies: string[]
}

export default function ProjectTechnologies({ technologies }: Props) {
    return (
        <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
                <p key={index} className="text-gray font-mono mr-[20px] gradient-when-hover font-bold cursor-default">
                    {tech}
                </p>
            ))}
        </div>
    )
}