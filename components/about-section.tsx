import { GraduationCap, Rocket, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const cards = [
  {
    icon: GraduationCap,
    title: 'Education',
    text: 'B.Sc. in Information Technology with a focus on operating systems, networks and cloud computing, backed by the Azure Fundamentals certification.',
  },
  {
    icon: Target,
    title: 'Career Goals',
    text: 'Join a forward-thinking team as a Junior DevOps or Cloud Engineer, contributing to CI/CD pipelines, automation and scalable infrastructure.',
  },
  {
    icon: Rocket,
    title: 'Mindset',
    text: 'Hands-on learner who builds home labs, documents everything and enjoys turning repetitive manual tasks into reliable automation.',
  },
]

const stats = [
  { value: '7+', label: 'Core technologies' },
  { value: '4', label: 'Featured projects' },
  { value: '1', label: 'Cloud certification' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="About Me" title="Building a foundation for modern infrastructure" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              I&apos;m an entry-level IT professional passionate about how systems are built, deployed and kept
              running. My journey started with troubleshooting computers and networks, and quickly grew into a
              fascination with Linux servers, scripting and the cloud.
            </p>
            <p>
              Today I focus on the DevOps toolchain: writing Python and Bash automation, containerizing
              applications with Docker, orchestrating them with Kubernetes and deploying resources on Microsoft
              Azure. I learn by doing, and every skill listed here is backed by a hands-on project.
            </p>
            <p>
              I&apos;m looking for an opportunity where I can contribute from day one, learn from experienced
              engineers and grow into a dependable DevOps engineer.
            </p>

            <dl className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border bg-card p-4">
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-semibold text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <div className="grid gap-4">
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <card.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
