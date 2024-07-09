import { Link } from "./link"

export type Project = {
    id: string
    name: string
    shortDescription: string
    description?: string
    technologies: string[]
    thumbnail?: string
    createdAt: Date
    updatedAt: Date
    isFeatured: boolean
    featuredOrder?: number
    links: Link[]
}