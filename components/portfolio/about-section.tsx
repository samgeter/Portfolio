import { profile } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto w-[calc(100%-2rem)] max-w-[76rem] border-t border-white/[0.08] py-[clamp(6rem,12vw,8rem)] sm:w-[calc(100%-4rem)]"
    >
      <SectionHeading
        eyebrow=""
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
  );
}
