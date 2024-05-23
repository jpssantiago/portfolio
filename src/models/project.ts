import ProjectLink from "./project-link"

export default interface Project {
    name: string
    description: string
    technologies: string[]
    links: ProjectLink[]
    displayType: "highlighted" | "card"
    coverImage?: string
}