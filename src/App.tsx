import WelcomeSection from './sections/welcome-section'
import AboutSection from './sections/about-section'

import './global.css'

function App() {
  return (
    <div className="h-full bg-background font-inter">
      <WelcomeSection />
      <AboutSection />
    </div>
  )
}

export default App