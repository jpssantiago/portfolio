import { Section } from "@/components/section/section"
import { SectionHeader } from "@/components/section/section-header"
import { SectionTitle } from "@/components/section/section-title"
import { UnderlineLink } from "@/components/underline-link"
import { SectionContent } from "../section/section-content"

export function ProjectsSection() {
    return (
        <Section id="projects">
            <SectionHeader className="items-center">
                <SectionTitle index={2}>
                    My featured projects
                </SectionTitle>

                <UnderlineLink href="/archive">
                    View the archive
                </UnderlineLink>
            </SectionHeader>

            <SectionContent className="gap-5 grid grid-cols-3">
                {Array.from({ length: 9 }).map((_, index) => (
                    <div key={index} className="bg-secondary border rounded-lg h-72">

                    </div>
                ))}
            </SectionContent>
        </Section>
    )
}