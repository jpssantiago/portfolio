import WelcomeSection from "./sections/welcome-section"
import AboutSection from "./sections/about-section"
import ExperienceSection from "./sections/experience-section"
import ProjectsSection from "./sections/projects-section"
import SocialBar from "./components/social-bar"
import FooterSection from "./sections/footer-section"

import "./global.css"

function App() {
  return (
    <div className="h-full bg-background font-inter relative">
      <WelcomeSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SocialBar />
      <FooterSection />
    </div>
  )
}

export default App