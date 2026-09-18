import { ArrowRight, Handshake, ShieldCheck, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '../../data/site'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

export function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="scroll-mt-24 py-10 sm:py-14 lg:py-18">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8 xl:gap-10 xl:items-center">
          {/* Left Column: Portrait & Availability */}
          <div className="flex flex-col items-center text-center md:col-span-4 xl:col-span-3 md:items-start md:text-left">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-52 md:h-52 lg:w-56 lg:h-56 xl:w-60 xl:h-60 rounded-2xl border border-border-subtle bg-surface shadow-xs overflow-hidden">
              {!imgError ? (
                <img
                  src={siteConfig.profileImage}
                  alt={`${siteConfig.name} - ${siteConfig.role}`}
                  width={240}
                  height={240}
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  role="img"
                  aria-label={`Portrait avatar placeholder for ${siteConfig.name}`}
                  className="flex h-full w-full items-center justify-center bg-accent-soft text-accent"
                >
                  <span className="text-4xl font-bold tracking-tight text-accent">JH</span>
                </div>
              )}
            </div>

            {/* Status Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5 text-xs sm:text-sm font-medium text-accent">
              <span
                className="h-2 w-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none"
                aria-hidden="true"
              />
              <span>{siteConfig.status}</span>
            </div>
          </div>

          {/* Center Column: Core Introduction */}
          <div className="space-y-6 text-center md:text-left md:col-span-8 xl:col-span-5">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">
                HELLO, I'M
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-text-primary">
                {siteConfig.name}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary">
                {siteConfig.role}
              </p>
              <p className="text-sm sm:text-base font-medium text-accent">
                {siteConfig.supportingRole}
              </p>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
              {siteConfig.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3.5">
              <Button
                asAnchor
                href="#portfolio"
                variant="primary"
                className="w-full sm:w-auto gap-2 px-6 py-3 font-semibold"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                asAnchor
                href="#contact"
                variant="outline"
                className="w-full sm:w-auto px-6 py-3 font-medium text-text-primary"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Column (Desktop) / Beneath (Tablet): Core Strengths Panel */}
          <div className="md:col-span-12 xl:col-span-4">
            <div className="rounded-xl border border-border-subtle bg-surface/70 p-5 sm:p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-secondary">
                  Core Operational Strengths
                </h3>
                <span className="text-xs text-text-secondary font-medium">Operations Focus</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
                {siteConfig.qualities.map((quality) => (
                  <div key={quality.title} className="flex items-start gap-3">
                    <div className="rounded-lg border border-border-subtle bg-bg-primary p-2 text-accent shrink-0 mt-0.5">
                      {quality.icon === 'ShieldCheck' && (
                        <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                      )}
                      {quality.icon === 'TrendingUp' && (
                        <TrendingUp className="h-4 w-4" aria-hidden="true" />
                      )}
                      {quality.icon === 'Handshake' && (
                        <Handshake className="h-4 w-4" aria-hidden="true" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-text-primary">
                        {quality.title}
                      </h4>
                      <p className="text-xs sm:text-sm leading-relaxed text-text-secondary mt-0.5">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border-subtle pt-3">
                <p className="text-xs sm:text-sm italic text-text-secondary">
                  &ldquo;{siteConfig.tagline}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
