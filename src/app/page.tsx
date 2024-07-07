import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"

export default function AppPage() {
  return (
    <main className="flex flex-col mb-10">
      <HeroSection />

      <div className="flex flex-col gap-60">
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  )
}