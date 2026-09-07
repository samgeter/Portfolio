import { ContactModalProvider } from "@/components/contact-modal";
import { BlogSection } from "@/components/portfolio/blog-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { InterestsSection } from "@/components/portfolio/interests-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SkillsSection } from "@/components/portfolio/skills-section";

export default function Home() {
  return (
    <ContactModalProvider>
      <div id="top" className="min-h-screen overflow-hidden bg-background">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <SiteHeader />

        <main id="main-content">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <InterestsSection />
          <BlogSection />
          <ContactSection />
        </main>
      </div>
    </ContactModalProvider>
  );
}
