import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { About } from './components/sections/About'
import { Contact } from './components/sections/Contact'
import { ExperienceStats } from './components/sections/ExperienceStats'
import { Hero } from './components/sections/Hero'
import { Portfolio } from './components/sections/Portfolio'
import { Tools } from './components/sections/Tools'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary selection:bg-accent/20 selection:text-text-primary">
      {/* Accessible skip-to-content link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <ExperienceStats />
        <Portfolio />
        <About />
        <Tools />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  )
}
