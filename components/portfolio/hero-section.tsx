import { AmbientScene } from "@/components/ambient-scene";
import { profile } from "@/lib/portfolio-data";

export function HeroSection() {
  return (
    <section
      className="hero-layout relative mx-auto grid min-h-[100svh] w-[calc(100%-2rem)] max-w-[76rem] content-center gap-4 py-14 sm:w-[calc(100%-4rem)] sm:gap-10 lg:items-center"
      aria-labelledby="hero-title"
    >
      <div className="relative z-10 max-w-[40rem]">
        <h1
          id="hero-title"
          className="max-w-4xl text-[clamp(3rem,6.5vw,6rem)] font-medium leading-[0.89] tracking-[-0.075em] text-white"
        >
          Software craft,
          <br />
          <span className="text-gradient">intelligent products.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          I&apos;m{" "}
          <span className="font-medium text-white">{profile.displayName}</span>,
          a software engineer, product lead, and AI automation specialist
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
      <div className="hero-ambient pointer-events-none shrink-0">
        <AmbientScene />
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
  );
}
