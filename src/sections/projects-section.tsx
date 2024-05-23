import { useEffect, useState } from "react"

import ProjectItem from "../components/project-item"
import Section from "../components/section"

import Project from "../models/project"

import * as ApiService from '../services/api-service'

export default function ProjectsSection() {
    const [projects, setProjects] = useState<Project[]>([])

    function getHighlightedProjects(): Project[] {
        return projects.filter(p => p.displayType == "highlighted")
    }

    function getCardProjects(): Project[] {
        return projects.filter(p => p.displayType == "card")
    }

    useEffect(() => {
        async function loadProjects() {
            setProjects(await ApiService.getProjects())
        }

        loadProjects()
    }, [])

    return (
        <Section name="My favorite projects">
            <div className="w-full tablet:grid tablet:grid-cols-2 tablet:gap-[50px] phone:flex phone:flex-col">
                {getHighlightedProjects().map((project, index) => (
                    <ProjectItem key={index} project={project} alignment={index % 2 == 0 ? "start" : "end"} />
                ))}
            </div>
        </Section>
    )
}