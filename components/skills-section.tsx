import { Boxes, Cloud, Container, Network, Server, FileCode, Workflow, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { skills, type SkillKey } from '@/lib/portfolio-data'

const icons: Record<SkillKey, LucideIcon> = {
  linux: Server,
  python: FileCode,
  networking: Network,
  azure: Cloud,
  docker: Container,
  kubernetes: Boxes,
  devops: Workflow,
}

export function SkillsSection() {
  return (
    <section id="skills" className="border-y border-border/60 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Technical Skills"
          title="Tools and technologies I work with"
          description="A practical toolkit spanning operating systems, scripting, networking, cloud and containers."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = icons[skill.key]
            return (
              <li key={skill.key}>
                <Reveal delay={(i % 3) * 100} className="h-full">
                  <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{skill.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>

                    <div
                      className="mt-5 h-1.5 overflow-hidden rounded-full bg-muted"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency`}
                    >
                      <div className="h-full rounded-full bg-primary" style={{ width: `${skill.level}%` }} />
                    </div>

                    <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${skill.name} topics`}>
                      {skill.tags.map((tag) => (
                        <li key={tag} className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
