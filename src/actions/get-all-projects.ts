import { PrismaClient } from "@prisma/client"

import { TProject } from "@/models/project"

const prisma = new PrismaClient()

export async function getAllProjects(): Promise<TProject[]> {
    return await prisma.project.findMany({
        include: {
            technologies: true,
            links: true
        }
    })
}