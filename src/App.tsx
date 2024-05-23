import WelcomeSection from "./sections/welcome-section"
import AboutSection from "./sections/about-section"
import ExperienceSection from "./sections/experience-section"
import ProjectsSection from "./sections/projects-section"

import "./global.css"

function App() {
  return (
    <div className="h-full bg-background font-inter">
      <WelcomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  )
}

export default App