import { Project } from "@/models/project"
import { Section } from "@/components/section/section"
import { SectionHeader } from "@/components/section/section-header"
import { SectionTitle } from "@/components/section/section-title"
import { UnderlineLink } from "@/components/underline-link"
import { SectionContent } from "@/components/section/section-content"
import { ProjectItem } from "@/components/project-item"

export async function ProjectsSection() {
    const response = await fetch("https://bucket.joaosantiago.com.br/portfolio-projects.json")
    const data = await response.json()

    const projects: Project[] = data.projects ?? []

    return (
        <Section id="projects" className="py-10">
            <SectionHeader className="items-center text-center">
                <SectionTitle>
                    My featured projects
                </SectionTitle>

                <UnderlineLink href="/archive">
                    View the archive
                </UnderlineLink>
            </SectionHeader>

            <SectionContent className="gap-4 grid grid-cols-3 1col:grid-cols-1 2cols:grid-cols-2 2cols:mx-auto">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        project={project}
                    />
                ))}
            </SectionContent>
        </Section>
    )
}