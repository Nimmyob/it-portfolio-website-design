import { ArrowRight, ChevronDown, MapPin } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { profile } from '@/lib/portfolio-data'

const terminalLines = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: profile.name.toLowerCase().replace(' ', '_') },
  { prompt: true, text: 'cat skills.txt' },
  { prompt: false, text: 'linux  python  networking  azure' },
  { prompt: false, text: 'docker  kubernetes  ci/cd' },
  { prompt: true, text: 'systemctl status career' },
  { prompt: false, text: '● active (running) — seeking DevOps role', ok: true },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for entry-level opportunities
            </span>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 text-lg text-muted-foreground">Hi, welcome to my portfolio. I&apos;m</p>
            <h1 className="mt-2 text-balance text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-balance text-xl font-medium text-primary md:text-2xl">
              {profile.role}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I build reliable systems and automate the boring parts. With a solid foundation in Linux,
              Python and networking, I&apos;m growing my skills in cloud and container technologies to help
              teams ship faster and run infrastructure with confidence.
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary/50 px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
            >
              Get in Touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <GitHubIcon className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedInIcon className="size-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">~/portfolio — bash</span>
            </div>
            <div className="space-y-1.5 p-5 font-mono text-sm leading-relaxed" aria-label="Terminal summary">
              {terminalLines.map((line, i) => (
                <p key={i} className={line.prompt ? 'text-foreground' : line.ok ? 'text-primary' : 'text-muted-foreground'}>
                  {line.prompt && <span className="mr-2 text-primary">$</span>}
                  {line.text}
                </p>
              ))}
              <p>
                <span className="mr-2 text-primary">$</span>
                <span className="cursor-blink inline-block h-4 w-2 translate-y-0.5 bg-primary" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="relative mx-auto mt-16 hidden size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-primary md:flex"
      >
        <ChevronDown className="size-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
