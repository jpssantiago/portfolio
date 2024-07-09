import { redirect } from "next/navigation"

import { Project } from "@/models/project"

type ProjectPageProps = {
    params: {
        projectId: string
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const response = await fetch(`https://api-portfolio.joaosantiago.com.br/project/${params.projectId}`)
    const data = await response.json()

    if (data.err) {
        return redirect("/")
    }

    const project: Project = data.project

    return (
        <div>
            <pre className="whitespace-pre-line">{JSON.stringify(project)}</pre>
        </div>
    )
}