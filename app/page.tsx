import { AmbientScene } from "@/components/ambient-scene";
import {
  ContactModalProvider,
  ContactModalTrigger,
} from "@/components/contact-modal";
import {
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/portfolio-data";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-[0.65fr_1.35fr] md:gap-10">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 className="max-w-3xl text-[clamp(2.4rem,5.5vw,5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-white">
          {title}
        </h2>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ContactModalProvider>
      <div id="top" className="min-h-screen overflow-hidden bg-background">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/75 backdrop-blur-xl">
        <nav
          className="section-shell flex h-20 items-center justify-between"
          aria-label="Primary navigation"
        >
          <a
            href="#top"
            className="text-sm font-semibold tracking-[-0.02em] text-white"
          >
            {profile.name}
            <span className="text-accent">.</span>
          </a>
          <div className="flex items-center gap-7">
            <div className="hidden items-center gap-7 lg:flex">
              <a className="nav-link" href="#about">
                About
              </a>
              <a className="nav-link" href="#work">
                Work
              </a>
              <a className="nav-link" href="#stack">
                Stack
              </a>
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </div>
            <ContactModalTrigger className="nav-cta">
              Let&apos;s talk
            </ContactModalTrigger>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section
          className="section-shell relative flex min-h-[100svh] items-center pb-24 pt-32"
          aria-labelledby="hero-title"
        >
          <div className="pointer-events-none absolute inset-y-20 right-[-38%] w-[110%] opacity-35 sm:right-[-18%] sm:w-[80%] sm:opacity-55 lg:right-[-8%] lg:w-[58%] lg:opacity-85">
            <AmbientScene />
          </div>
          <div className="relative z-10 max-w-5xl">
            <p className="eyebrow mb-7">
              <span className="status-dot" />
              Available for select collaborations
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl text-[clamp(3.65rem,9vw,8.5rem)] font-medium leading-[0.89] tracking-[-0.075em] text-white"
            >
              Software craft,
              <br />
              <span className="text-gradient">intelligent products.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              I&apos;m{" "}
              <span className="font-medium text-white">
                {profile.displayName}
              </span>
              , a software engineer, product lead, and AI automation specialist
              creating clear, useful products from zero to one.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="button-primary">
                Explore my work <span aria-hidden="true">↘</span>
              </a>
              <a href={`mailto:${profile.email}`} className="button-ghost">
                {profile.email}
              </a>
            </div>
          </div>
          <a
            href="#about"
            className="absolute bottom-8 right-0 hidden items-center gap-3 font-mono text-[0.7rem] tracking-[0.14em] text-muted transition-colors hover:text-white md:flex"
          >
            SCROLL TO EXPLORE
            <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 pt-2">
              <span className="h-1.5 w-1 rounded-full bg-accent" />
            </span>
          </a>
        </section>

        <section id="about" className="section-shell section-block">
          <SectionHeading
            eyebrow="01 / About"
            title="Engineer by craft. Product builder by instinct."
          />
          <div className="mt-16 grid gap-10 border-t border-white/[0.08] pt-10 md:grid-cols-[0.65fr_1.35fr]">
            <p className="max-w-xs text-sm leading-6 text-muted">
              Based in {profile.location}
              <br />
              Working across product, design, and engineering.
            </p>
            <div className="grid gap-10 md:grid-cols-2">
              <p className="text-lg leading-8 text-[#cbd0db]">
                I&apos;m a Computer Engineering graduate building AI-powered
                internal tools, multi-tenant SaaS products, workflow-driven
                applications, and backend systems.
              </p>
              <p className="text-lg leading-8 text-[#cbd0db]">
                I move from requirements and product prototypes to data models,
                APIs, production deployment, and troubleshooting—with a focus on
                secure, useful systems that teams can actually operate.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="section-shell section-block">
          <SectionHeading
            eyebrow="02 / Selected work"
            title="A handful of products, built with intent."
            description="The repositories are private. Product context, technical decisions, and selected demos are available on request."
          />

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className={`project-card group ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div
                  className={`project-accent-line absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent} opacity-70`}
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-xs tracking-[0.12em] text-accent">
                      {String(index + 1).padStart(2, "0")} / PRIVATE REPOSITORY
                    </p>
                    <h3 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-white sm:text-5xl">
                      {project.name}
                    </h3>
                  </div>
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 text-lg text-muted transition-all duration-300 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-white"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
                <div className="mt-auto pt-20">
                  <p className="max-w-2xl text-lg leading-8 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-5">
                    <p className="text-sm text-[#c8cdd7]">{project.focus}</p>
                    <a
                      href="#contact"
                      className="text-sm text-white underline decoration-white/20 underline-offset-4 transition-colors hover:decoration-accent"
                      aria-label={`Request access to the ${project.name} private repository`}
                    >
                      Request details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="stack" className="section-shell section-block">
          <SectionHeading
            eyebrow="03 / Capabilities"
            title="A practical stack for ambitious ideas."
            description="Tools change. The constant is choosing the smallest, strongest system for the job."
          />
          <div className="mt-16 grid border-y border-white/[0.08] md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className={`py-9 md:p-9 ${index % 2 === 0 ? "md:border-r md:border-white/[0.08]" : ""} ${index < 2 ? "border-b border-white/[0.08]" : ""}`}
              >
                <p className="font-mono text-xs tracking-[0.12em] text-muted">
                  {group.label.toUpperCase()}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell section-block">
          <SectionHeading
            eyebrow="04 / Experience"
            title="Built in the work, not around it."
          />
          <ol className="mt-16 border-t border-white/[0.08]">
            {experience.map((role) => (
              <li
                key={`${role.period}-${role.title}`}
                className="grid gap-6 border-b border-white/[0.08] py-10 transition-colors hover:bg-white/[0.015] md:grid-cols-[0.55fr_0.75fr_1.45fr] md:gap-10"
              >
                <p className="font-mono text-xs tracking-[0.12em] text-muted">
                  {role.period}
                </p>
                <div>
                  <h3 className="text-lg font-medium text-white">{role.title}</h3>
                  <p className="mt-2 text-sm text-muted">{role.company}</p>
                </div>
                <ul className="max-w-2xl space-y-4 text-base leading-7 text-[#c8cdd7]">
                  {role.highlights.map((highlight) => (
                    <li key={highlight} className="experience-highlight">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="section-shell pb-10 pt-28 sm:pt-40">
          <div className="contact-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="relative z-10 mx-auto max-w-4xl">
              <p className="eyebrow justify-center">05 / Contact</p>
              <h2 className="mt-7 text-[clamp(2.8rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
                Have something worth building?
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-muted">
                I&apos;m always interested in thoughtful products, hard problems,
                and small teams with high standards.
              </p>
              <ContactModalTrigger className="button-primary mt-10">
                Start a conversation <span aria-hidden="true">↗</span>
              </ContactModalTrigger>
            </div>
          </div>

          <footer className="flex flex-col gap-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 {profile.name}. Built with care.</p>
            <div className="flex items-center gap-6">
              <a className="footer-link" href={`mailto:${profile.email}`}>
                Email
              </a>
              <a
                className="footer-link"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a className="footer-link" href="#top">
                Back to top ↑
              </a>
            </div>
          </footer>
        </section>
      </main>
      </div>
    </ContactModalProvider>
  );
}
