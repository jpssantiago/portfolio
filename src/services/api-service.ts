import Project from "../models/project"

export async function getProjects(): Promise<Project[]> {
    try {
        const response = await fetch("https://bucket.joaosantiago.com.br/projects.json")
        const json = await response.json()
        return json.projects as Project[]
    } catch (err) {
        console.error(err)
    }

    return []
}