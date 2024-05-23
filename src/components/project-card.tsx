import Project from "../models/project"
import GradientCard from "./gradient-card"
import ProjectLinks from "./project-links"
import ProjectTechnologies from "./project-technologies"

interface Props {
    project: Project
}

export default function ProjectCard({ project }: Props) {
    return (
        <GradientCard style="h-[350px]">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-text text-xl">{project.name}</h1>

                        <ProjectLinks links={project.links} padding="ml-[20px]" />
                    </div>

                    <p className="mt-[10px] text-gray line-clamp-[7] phone:line-clamp-[9]">{project.description}</p>
                </div>

                <ProjectTechnologies technologies={project.technologies} />
            </div>
        </GradientCard>
    )
} 