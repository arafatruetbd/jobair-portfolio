import { ArrowRight, Handshake, ShieldCheck, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '../../data/site'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'

export function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="scroll-mt-24 py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Portrait & Availability */}
          <div className="flex flex-col items-center text-center lg:col-span-3 lg:items-start lg:text-left">
            <div className="relative">
              <div className="relative flex h-40 w-40 items-center justify-center rounded-2xl border border-accent/20 bg-accent-soft text-accent shadow-sm sm:h-48 sm:w-48 overflow-hidden">
                {!imgError ? (
                  <img
                    src={siteConfig.profileImage}
                    alt={`${siteConfig.name} - ${siteConfig.role}`}
                    width={192}
                    height={192}
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    role="img"
                    aria-label={`Portrait avatar placeholder for ${siteConfig.name}`}
                    className="flex h-full w-full items-center justify-center"
                  >
                    <span className="text-4xl font-bold tracking-tight text-accent">JH</span>
                  </div>
                )}
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              <span
                className="h-2 w-2 rounded-full bg-accent animate-pulse motion-reduce:animate-none"
                aria-hidden="true"
              />
              <span>{siteConfig.status}</span>
            </div>
          </div>

          {/* Center Column: Core Introduction */}
          <div className="space-y-6 text-center lg:col-span-6 lg:text-left">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                HELLO, I'M
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="text-lg font-semibold text-text-primary sm:text-xl">
                {siteConfig.role}
              </p>
              <p className="text-sm font-medium text-accent">{siteConfig.supportingRole}</p>
            </div>

            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              {siteConfig.heroDescription}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button asAnchor href="#portfolio" variant="primary" className="gap-2">
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button asAnchor href="#contact" variant="outline">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Right Column: Key Operational Qualities */}
          <div className="space-y-4 rounded-xl border border-border-subtle bg-surface p-6 sm:p-8 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              Core Strengths
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-md border border-border-subtle bg-bg-primary p-2 text-accent">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">Reliable Operations</h4>
                  <p className="text-xs text-text-secondary">
                    Disciplined execution and daily workflow tracking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-md border border-border-subtle bg-bg-primary p-2 text-accent">
                  <TrendingUp className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">Data-Driven Results</h4>
                  <p className="text-xs text-text-secondary">
                    Accurate pricing analysis and inventory monitoring.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-md border border-border-subtle bg-bg-primary p-2 text-accent">
                  <Handshake className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary">
                    Long-Term Collaboration
                  </h4>
                  <p className="text-xs text-text-secondary">
                    Dedicated support built on consistency and trust.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-border-subtle pt-4">
              <p className="text-xs italic text-text-secondary">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
