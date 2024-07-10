import { Project } from "@/models/project"
import { ProjectLinks } from "@/components/project-links"

type ProjectItemProps = {
    project: Project
}

export function ProjectItem({ project }: ProjectItemProps) {
    return (
        <div className="relative bg-secondary min-w-72 max-w-96 h-72 transition-transform hover:-translate-y-1 duration-300 group">
            {project.thumbnail ? (
                <img
                    src={project.thumbnail}
                    alt=""
                    className="object-fill size-full"
                />
            ) : (
                <div className="bg-secondary size-full" />
            )}

            <div
                className="top-0 left-0 absolute flex flex-col justify-between bg-[#21272f]/95 opacity-0 group-hover:opacity-100 p-5 transition-all duration-300 size-full"
            >
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-xl">
                            {project.name}
                        </h1>

                        <ProjectLinks project={project} />
                    </div>

                    <p className="text-zinc-300">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <div key={index} className="bg-[#3d4857] px-3 py-2">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}