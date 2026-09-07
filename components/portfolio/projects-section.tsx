import { projects } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="mx-auto w-[calc(100%-2rem)] max-w-[76rem] border-t border-white/[0.08] py-[clamp(3rem,12vw,4rem)] sm:w-[calc(100%-4rem)]"
    >
      <SectionHeading
        eyebrow="01 / Selected work"
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
  );
}
