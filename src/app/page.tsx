import { CaseStudyTeaserSection } from "@/components/sections/home/case-study-teaser-section";
import { ContactCtaSection } from "@/components/sections/home/contact-cta-section";
import { ExperiencePreviewSection } from "@/components/sections/home/experience-preview-section";
import { FeaturedProjectsSection } from "@/components/sections/home/featured-projects-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { LatestBlogNotesSection } from "@/components/sections/home/latest-blog-notes-section";
import { SkillsOverviewSection } from "@/components/sections/home/skills-overview-section";
import { TrustBarSection } from "@/components/sections/home/trust-bar-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <FeaturedProjectsSection />
      <ExperiencePreviewSection />
      <SkillsOverviewSection />
      <CaseStudyTeaserSection />
      <LatestBlogNotesSection />
      <ContactCtaSection />
    </>
  );
}
