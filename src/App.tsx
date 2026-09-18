import { Container } from './components/layout/Container'
import { Button } from './components/ui/Button'
import { SectionHeading } from './components/ui/SectionHeading'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:shadow-md focus:outline-2 focus:outline-offset-2 focus:outline-accent"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-border-subtle bg-bg-primary/95 backdrop-blur-sm py-4">
        <Container as="div" className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-text-primary">Jobair</span>
            <span className="hidden sm:inline-block ml-3 text-xs text-text-secondary border-l border-border-subtle pl-3">
              Acumatica ERP &amp; Ticket Operations Specialist
            </span>
          </div>
          <Button variant="primary" className="text-xs px-3 py-1.5 sm:text-sm sm:px-4 sm:py-2">
            Contact Me
          </Button>
        </Container>
      </header>

      <main id="main" tabIndex={-1} className="flex-1 py-12 sm:py-16">
        <Container as="section" className="space-y-12">
          <SectionHeading
            eyebrow="Foundation Setup"
            title="Design System &amp; Primitives Ready"
            description="The core project architecture, Tailwind CSS v4 configuration, design tokens, layout primitives, and accessibility standards have been successfully established."
          />

          <div className="rounded-lg border border-border-subtle bg-surface p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Interactive Component Primitives
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Action</Button>
              <Button variant="outline">Secondary Outline</Button>
              <Button variant="primary" disabled>
                Disabled State
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-md border border-border-subtle bg-bg-primary">
              <p className="text-xs font-medium text-text-secondary">Background</p>
              <p className="font-semibold text-text-primary">#FFFFFF</p>
            </div>
            <div className="p-4 rounded-md border border-border-subtle bg-surface">
              <p className="text-xs font-medium text-text-secondary">Surface</p>
              <p className="font-semibold text-text-primary">#F8FAF9</p>
            </div>
            <div className="p-4 rounded-md bg-accent text-white">
              <p className="text-xs font-medium opacity-90">Accent Green</p>
              <p className="font-semibold">#16845B</p>
            </div>
            <div className="p-4 rounded-md border border-border-subtle bg-accent-soft text-accent">
              <p className="text-xs font-medium">Soft Accent</p>
              <p className="font-semibold">#EEF8F3</p>
            </div>
          </div>
        </Container>
      </main>

      <footer className="border-t border-border-subtle py-6 text-sm text-text-secondary">
        <Container as="div" className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Jobair. All rights reserved.</p>
          <p className="text-xs">Built with React, TypeScript, Vite &amp; Tailwind CSS</p>
        </Container>
      </footer>
    </div>
  )
}
