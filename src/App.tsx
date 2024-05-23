import WelcomeSection from "./sections/welcome-section"
import AboutSection from "./sections/about-section"
import ExperienceSection from "./sections/experience-section"

import "./global.css"

function App() {
  return (
    <div className="h-full bg-background font-inter">
      <WelcomeSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  )
}

export default App