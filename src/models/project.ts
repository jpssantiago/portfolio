import { Link, Technology } from "@prisma/client"

export type TProject = {
    id: string
    name: string
    description: string | null
    technologies: Technology[]
    files: string[]
    links: Link[]
    display: "FEATURED" | "ARCHIVE"
    createdAt: Date
}