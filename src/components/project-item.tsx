import ProjectTechnologies from "./project-technologies"
import ProjectLinks from "./project-links"

import Project from "../models/project"

interface Props {
    project: Project
    alignment: "start" | "end"
}

export default function ProjectItem({ project, alignment }: Props) {
    return (
        <div className="flex flex-row justify-between mb-[50px] tablet:flex-col tablet:w-full phone:flex-col phone:w-full">
            <div className={`flex flex-col justify-center w-[calc(50%-10px)] ${alignment == "start" ? "order-1" : "order-2 items-end text-end"} tablet:w-full tablet:order-1 phone:w-full phone:order-1 phone:items-start phone:text-start`}>
                <h1 className="text-text text-2xl">{project.name}</h1>

                <div className="w-[450px] p-1 bg-card rounded-sm gradient-card mt-[20px] tablet:w-full phone:w-full">
                    <div className="w-full h-full bg-card p-[20px]">
                        <p className="text-gray line-clamp-3">{project.description}</p>
                    </div>
                </div>

                <div className="mt-[20px]">
                    <ProjectTechnologies technologies={project.technologies} />
                </div>

                <div className="mt-[20px]">
                    <ProjectLinks links={project.links} />
                </div>
            </div>

            <div className={`w-[calc(50%-10px)] max-h-[300px] ${alignment == "start" ? "order-2" : "order-1"} tablet:order-2 tablet:mt-[20px] tablet:w-full phone:order-2 phone:mt-[20px] phone:w-full phone:h-[350px]`}>
                <img className="w-full h-full rounded-sm" src={project.coverImage} />
            </div>
        </div>
    )
}