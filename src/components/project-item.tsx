import { Project } from "@/models/project"

type ProjectItemProps = {
    project: Project
}

export function ProjectItem({ project }: ProjectItemProps) {
    return (
        <div className="relative bg-secondary border rounded-lg min-w-64 max-w-96 h-80 transition-transform hover:-translate-y-1 duration-300 cursor-pointer group">
            <img
                className="rounded-lg object-cover size-full"
                alt=""
                src="https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/659e6c1875a6ef6d59572be3_types%20of%20landscapes.webp"
            />

            <div 
                className="top-0 left-0 absolute flex flex-col justify-between bg-[#21272f]/95 opacity-0 group-hover:opacity-100 p-5 rounded-lg transition-all duration-300 size-full"
            >
                <div className="space-y-3">
                    <h1 className="font-bold text-xl">
                        {project.name}
                    </h1>

                    <p className="text-zinc-300">
                        $shortDescription goes brrrr
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