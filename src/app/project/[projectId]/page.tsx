type ProjectPageProps = {
    params: {
        projectId: string
    }
}

export default function ProjectPage({ params }: ProjectPageProps) {
    return (
        <div>Project: {params.projectId}</div>
    )
}