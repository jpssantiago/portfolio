import { useEffect, useState } from "react"

import ProjectItem from "../components/project-item"
import Section from "../components/section"
import ProjectCard from "../components/project-card"

import Project from "../models/project"

import * as ApiService from "../services/api-service"

import { links } from "../_data/links-data"

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

            <div className="flex flex-col items-center">
                <h1 className="text-2xl text-center gradient-text">My other projects</h1>

                <a href={links.github} className="mt-[10px] text-text text-xl text-center underline-link">visit my github for more 🤘</a>

                <div className="mt-[30px] w-full grid grid-cols-3 gap-[20px] gap-y-[20px] tablet:grid-cols-2 phone:grid-cols-1">
                    {getCardProjects().map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </Section>
    )
}