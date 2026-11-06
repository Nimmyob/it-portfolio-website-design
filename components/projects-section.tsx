import { Activity, ArrowUpRight, Check, Code, Container, Server, type LucideIcon } from 'lucide-react'
import { GitHubIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { projects, type ProjectIcon } from '@/lib/portfolio-data'

const icons: Record<ProjectIcon, LucideIcon> = {
  server: Server,
  activity: Activity,
  code: Code,
  container: Container,
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Hands-on work that backs up my skills"
          description="Each project reflects real tasks a DevOps or systems engineer handles day to day."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = icons[project.icon]
            return (
              <Reveal key={project.title} delay={(i % 2) * 120} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                  <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-xl font-semibold">{project.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  <ul className="relative mt-5 space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-auto pt-6">
                    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {project.stack.map((tech) => (
                        <li key={tech} className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs">
                          {tech}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      <GitHubIcon className="size-4" />
                      View source
                      <span className="sr-only"> for {project.title}</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
