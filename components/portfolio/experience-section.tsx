import { experience } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto w-[calc(100%-2rem)] max-w-[76rem] border-t border-white/[0.08] py-[clamp(3rem,12vw,4rem)] sm:w-[calc(100%-4rem)]"
    >
      <SectionHeading
        eyebrow="03 / Experience"
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
  );
}
