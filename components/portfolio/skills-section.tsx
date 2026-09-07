import { skillGroups } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section
      id="stack"
      className="mx-auto w-[calc(100%-2rem)] max-w-[76rem] border-t border-white/[0.08] py-[clamp(3rem,12vw,4rem)] sm:w-[calc(100%-4rem)]"
    >
      <SectionHeading
        eyebrow="02 / Capabilities"
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
  );
}
