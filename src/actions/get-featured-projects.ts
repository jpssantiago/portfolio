import { PrismaClient } from "@prisma/client"

import { TProject } from "@/models/project"

const prisma = new PrismaClient()

export async function getFeaturedProjects(): Promise<TProject[]> {
    return await prisma.project.findMany({
        where: {
            display: "FEATURED"
        },
        include: {
            technologies: true,
            links: true
        }
    })
}