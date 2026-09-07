import { ContactModalTrigger } from "@/components/contact-modal";
import { profile } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-[calc(100%-2rem)] max-w-[76rem] pb-10 pt-12 sm:w-[calc(100%-4rem)] sm:pt-14"
    >
      <div className="contact-panel relative overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="relative z-10 mx-auto max-w-4xl">
          <p className="eyebrow justify-center">06 / Contact</p>
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
  );
}
