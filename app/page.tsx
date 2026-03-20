import content from "@/content";
import {
  FaqSection,
  FinalCtaSection,
  FooterSection,
  GallerySection,
  HeroSection,
  PricingSection,
  ProcessSection,
  SeoContentSection,
  ServicesSection,
  SiteHeader,
  Trends2026Section,
} from "@/components/sections";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SiteHeader navigation={content.navigation} />
      <main className="pb-10 sm:pb-12 lg:pb-14">
        <HeroSection hero={content.hero} leadForm={content.lead_form} />
        <section className="border-b border-[var(--border)] bg-[var(--card)] py-12 sm:py-16 lg:py-20">
          <div className="page-shell">
            <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-caption)]">
              {content.realizations_strip.heading}
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {["realization1.png", "realization2.png", "realization3.png", "realization5.png"].map(
                (img, idx) => (
                  <div
                    key={img}
                    className="relative aspect-square w-full overflow-hidden border border-[var(--border)] bg-[var(--background)] shadow-[0_2px_16px_-6px_rgba(28,25,23,0.1)]"
                  >
                    <Image
                      src={`/${img}`}
                      alt="Realizacja glazurnicza – Grudziądz"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      priority={idx === 0}
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
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
