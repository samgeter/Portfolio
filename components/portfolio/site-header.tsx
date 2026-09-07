import { ContactModalTrigger } from "@/components/contact-modal";
import { profile } from "@/lib/portfolio-data";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 w-[calc(100%-2rem)] max-w-[76rem] items-center justify-between sm:w-[calc(100%-4rem)]"
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
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#stack">
              Stack
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#interests">
              Interests
            </a>
            <a className="nav-link" href="#writing">
              Blogs
            </a>
          </div>
          <ContactModalTrigger className="nav-cta">
            Let&apos;s talk
          </ContactModalTrigger>
        </div>
      </nav>
    </header>
  );
}
