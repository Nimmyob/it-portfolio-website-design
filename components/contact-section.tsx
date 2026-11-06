import { ArrowUpRight, Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { profile } from '@/lib/portfolio-data'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
    href: profile.linkedin,
    external: true,
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: profile.github.replace(/^https?:\/\//, ''),
    href: profile.github,
    external: true,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's work together"
          description="I'm actively looking for junior DevOps, cloud or system administration roles. If you have an opportunity or just want to connect, my inbox is always open."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <a
                href={c.href}
                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="size-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-semibold">{c.label}</h3>
                <p className="mt-1 break-all font-mono text-sm text-muted-foreground">{c.value}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border border-primary/30 bg-primary/5 p-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Ready to bring a motivated engineer on board?</h3>
              <p className="mt-2 text-sm text-muted-foreground">I typically respond within 24 hours.</p>
            </div>
            <a
              href={`mailto:${profile.email}?subject=Job%20Opportunity`}
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" aria-hidden="true" />
              Send an Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
