import { Section } from "@/components/section/section"
import { SectionHeader } from "@/components/section/section-header"
import { SectionTitle } from "@/components/section/section-title"
import { UnderlineLink } from "@/components/underline-link"
import { SectionContent } from "@/components/section/section-content"
import { ProjectItem } from "@/components/project-item"
import { ProjectItemSkeleton } from "@/components/project-item-skeleton"
import { getFeaturedProjects } from "@/actions/get-featured-projects"

export async function ProjectsSection() {
    const projects = await getFeaturedProjects()

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

            <SectionContent className="gap-2 grid grid-cols-3 1col:grid-cols-1 2cols:grid-cols-2 2cols:mx-auto">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        project={project}
                    />
                ))}

                {projects.length == 0 && (
                    <>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <ProjectItemSkeleton key={index} />
                        ))}
                    </>
                )}
            </SectionContent>
        </Section>
    )
}