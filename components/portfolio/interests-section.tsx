import { interests } from "@/lib/writing-data";
import { SectionHeading } from "./section-heading";

export function InterestsSection() {
  return (
    <section
      id="interests"
      className="mx-auto w-[calc(100%-2rem)] max-w-[76rem] border-t border-white/[0.08] py-[clamp(3rem,12vw,4rem)] sm:w-[calc(100%-4rem)]"
    >
      <SectionHeading
        eyebrow="04 / Interests"
        title="Ideas and projects beyond the day-to-day."
        description="A growing public notebook on the systems, technologies, and questions I keep returning to."
      />
      <div className="mt-16 grid gap-4 md:grid-cols-2">
        {interests.map((interest) => (
          <article
            key={interest.title}
            className="group flex min-h-72 flex-col rounded-[1.5rem] border border-white/[0.1] bg-white/[0.015] p-6 transition-colors hover:border-accent/35 hover:bg-white/[0.03] sm:p-8"
          >
            <p className="font-mono text-xs tracking-[0.12em] text-accent">
              {interest.index} / {interest.kicker.toUpperCase()}
            </p>
            <h3 className="mt-6 text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
              {interest.title}
            </h3>
            <p className="mt-5 max-w-md text-base leading-7 text-muted">
              {interest.description}
            </p>
            <a
              href={interest.href}
              className="mt-auto pt-8 text-sm font-medium text-white underline decoration-white/20 underline-offset-4 transition-colors group-hover:decoration-accent"
            >
              {interest.linkLabel} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
