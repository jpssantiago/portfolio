import axios from "axios"

import Project from "../models/project"

export async function getProjects(): Promise<Project[]> {
    try {
        const response = await axios.get(`https://bucket.joaosantiago.com.br/projects.json?cb=${Date.now()}`)
        return response.data.projects as Project[]
    } catch (err) {
        console.error(err)
    }

    return []
}