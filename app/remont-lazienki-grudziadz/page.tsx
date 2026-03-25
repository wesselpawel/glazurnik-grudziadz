import type { Metadata } from "next";
import content from "@/content";
import remontLazienkiPage from "@/content/remont-lazienki-page.json";
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

export const metadata: Metadata = {
  title: remontLazienkiPage.meta.title,
  description: remontLazienkiPage.meta.description,
  keywords: remontLazienkiPage.meta.keywords,
  alternates: {
    canonical: "/remont-lazienki-grudziadz",
  },
  openGraph: {
    title: remontLazienkiPage.meta.openGraph.title,
    description: remontLazienkiPage.meta.openGraph.description,
    locale: content.meta.locale,
    type: "website",
  },
};

export default function RemontLazienkiGrudziadzPage() {
  return (
    <>
      <SiteHeader navigation={remontLazienkiPage.navigation} />
      <main className="pb-10 sm:pb-12 lg:pb-14">
        <HeroSection hero={remontLazienkiPage.hero} leadForm={remontLazienkiPage.lead_form} />
        <RealizationsStripSection
          heading={remontLazienkiPage.realizations_strip.heading}
          alt="Remont łazienki Grudziądz - realizacja"
        />
        <Trends2026Section trends={remontLazienkiPage.trends_2026} />
        <ServicesSection services={remontLazienkiPage.services} />
        <ProcessSection process={remontLazienkiPage.process} />
        <GallerySection gallery={remontLazienkiPage.gallery} />
        <PricingSection pricing={remontLazienkiPage.pricing} />
        <SeoContentSection seo={remontLazienkiPage.seo_content} />
        <FaqSection faq={remontLazienkiPage.faq} />
        <FinalCtaSection finalCta={remontLazienkiPage.final_cta} />
      </main>
      <FooterSection footer={content.footer} />
    </>
  );
}
