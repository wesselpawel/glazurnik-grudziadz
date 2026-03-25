import content from "@/content";
import {
  FaqSection,
  FinalCtaSection,
  FooterSection,
  GallerySection,
  HeroSection,
  PricingSection,
  ProcessSection,
  RealizationsStripSection,
  SeoContentSection,
  ServicesSection,
  SiteHeader,
  Trends2026Section,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader navigation={content.navigation} />
      <main className="pb-10 sm:pb-12 lg:pb-14">
        <HeroSection hero={content.hero} leadForm={content.lead_form} />
        <RealizationsStripSection
          heading={content.realizations_strip.heading}
          alt="Realizacja glazurnicza – Grudziądz"
        />
        <Trends2026Section trends={content.trends_2026} />
        <ServicesSection services={content.services} />
        <ProcessSection process={content.process} />
        <GallerySection gallery={content.gallery} />
        <PricingSection pricing={content.pricing} />
        <SeoContentSection seo={content.seo_content} />
        <FaqSection faq={content.faq} />
        <FinalCtaSection finalCta={content.final_cta} />
      </main>
      <FooterSection footer={content.footer} />
    </>
  );
}
