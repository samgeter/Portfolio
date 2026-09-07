import { writingTopics } from "@/lib/writing-data";
import { SectionHeading } from "./section-heading";

export function BlogSection() {
  return (
    <section
      id="writing"
      className="mx-auto w-[calc(100%-2rem)] max-w-[76rem] border-t border-white/[0.08] py-[clamp(3rem,12vw,4rem)] sm:w-[calc(100%-4rem)]"
    >
      <SectionHeading
        eyebrow="05 / Writing"
        title="Notes from the work, and the questions beyond it."
        description="A growing collection of field notes on AI, product building, making, and the futures worth thinking through."
      />

      <div className="mt-16 grid gap-4 lg:grid-cols-3">
        {writingTopics.map((topic) => (
          <article
            key={topic.slug}
            className="group flex min-h-80 flex-col rounded-[1.5rem] border border-white/[0.1] bg-white/[0.015] p-6 transition-colors hover:border-accent/35 hover:bg-white/[0.03] sm:p-8"
          >
            <p className="font-mono text-xs tracking-[0.12em] text-accent">
              {topic.index} / {topic.kicker.toUpperCase()}
            </p>
            <h3 className="mt-6 text-3xl font-medium tracking-[-0.04em] text-white">
              {topic.title}
            </h3>
            <p className="mt-5 text-base leading-7 text-muted">
              {topic.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {topic.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs text-[#cbd0db]"
                >
                  {theme}
                </span>
              ))}
            </div>
            <a
              href={`/blog#${topic.slug}`}
              className="mt-auto pt-8 text-sm font-medium text-white underline decoration-white/20 underline-offset-4 transition-colors group-hover:decoration-accent"
            >
              Explore the topic <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-5 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-muted">
          The archive is in progress, with essays and project notes added as
          they are ready.
        </p>
        <a href="/blog" className="button-ghost shrink-0">
          View all writing <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
