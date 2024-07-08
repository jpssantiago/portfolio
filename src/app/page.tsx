import { AboutSection } from "@/components/sections/about-section"
import { HeroSection } from "@/components/sections/hero-section"
import { ProjectsSection } from "@/components/sections/projects-section"

export default function AppPage() {
  return (
    <main className="flex flex-col mx-auto mb-10 w-full max-w-[1488px]">
      <HeroSection />

      <div className="flex flex-col gap-60 w-full">
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  )
}