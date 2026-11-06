import { Award, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { education } from '@/lib/portfolio-data'

export function EducationSection() {
  return (
    <section id="education" className="border-y border-border/60 bg-card/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" eyebrow="Education" title="Qualifications & certifications" />

        <ol className="relative ml-3 border-l border-border md:ml-6">
          {education.map((item, i) => {
            const Icon = i === 0 ? GraduationCap : Award
            return (
              <li key={item.degree} className="relative pb-10 pl-10 last:pb-0 md:pl-12">
                <span className="absolute -left-[18px] top-0 flex size-9 items-center justify-center rounded-full border border-primary/30 bg-background text-primary">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <Reveal delay={i * 100}>
                  <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{item.degree}</h3>
                        <p className="mt-1 text-sm text-primary">{item.institution}</p>
                      </div>
                      <span className="w-fit shrink-0 rounded-full bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.details}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
