import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/portfolio-data";
import { writingTopics } from "@/lib/writing-data";

export const metadata: Metadata = {
  title: "Writing — Samuel Getachew.",
  description:
    "Field notes from Samuel Getachew on AI policy and governance, software and product work, 3D printing, and human futures.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-white/[0.06]">
        <nav
          className="mx-auto flex h-20 w-[calc(100%-2rem)] max-w-[76rem] items-center justify-between sm:w-[calc(100%-4rem)]"
          aria-label="Writing navigation"
        >
          <Link
            href="/"
            className="text-sm font-semibold tracking-[-0.02em] text-white"
          >
            {profile.name}
            <span className="text-accent">.</span>
          </Link>
          <Link
            href="/#interests"
            className="text-sm text-muted transition-colors hover:text-white"
          >
            Back to portfolio <span aria-hidden="true">↙</span>
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-[calc(100%-2rem)] max-w-[76rem] sm:w-[calc(100%-4rem)]">
        <section className="border-b border-white/[0.08] pb-16 pt-18 sm:pb-18 sm:pt-22">
          <p className="font-mono text-xs tracking-[0.14em] text-accent">
            WRITING / FIELD NOTES
          </p>
          <h1 className="mt-8 max-w-5xl text-[clamp(3.6rem,9vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.07em] text-white">
            Ideas worth
            <br />
            <span className="text-gradient">thinking through.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            A public notebook for lessons from building products and longer
            reflections on technology, institutions, making, and human futures.
          </p>
        </section>

        <section
          id="all-writing"
          className="grid gap-8 border-b border-white/[0.08] py-14 md:grid-cols-[0.7fr_1.3fr]"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.12em] text-muted">
              ALL WRITING
            </p>
            <p className="mt-3 text-sm text-accent">Archive in preparation</p>
          </div>
          <div>
            <h2 className="max-w-xl text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
              The first articles are taking shape.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              This page is the foundation for Samuel&apos;s article archive.
              Published essays will appear here with clear topics, dates, and
              reading paths as they are completed.
            </p>
          </div>
        </section>

        <div>
          {writingTopics.map((topic) => (
            <section
              id={topic.slug}
              key={topic.slug}
              className="scroll-mt-6 grid gap-10 border-b border-white/[0.08] py-14 md:grid-cols-[0.7fr_1.3fr] md:py-20"
            >
              <div>
                <p className="font-mono text-xs tracking-[0.12em] text-accent">
                  {topic.index} / {topic.kicker.toUpperCase()}
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-medium tracking-[-0.045em] text-white sm:text-5xl">
                  {topic.title}
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
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
                <p className="mt-10 border-l border-accent/50 pl-4 text-sm leading-6 text-muted">
                  Essays and notes are being prepared.
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="mx-auto flex w-[calc(100%-2rem)] max-w-[76rem] flex-col gap-4 py-8 text-sm text-muted sm:w-[calc(100%-4rem)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}. A notebook in progress.</p>
        <Link className="transition-colors hover:text-white" href="/">
          Portfolio ↑
        </Link>
      </footer>
    </div>
  );
}
