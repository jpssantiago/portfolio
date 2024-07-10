import { Link } from "./link"

export type Project = {
    id: string
    name: string
    description?: string
    technologies: string[]
    thumbnail?: string
    createdAt: Date
    isFeatured: boolean
    featuredOrder?: number
    links: Link[]
}