import Image from "next/image";
import type { SiteContent } from "@/content";

type Props = {
  services: SiteContent["services"];
};

export function ServicesSection({ services }: Props) {
  return (
    <div id={services.id} className="scroll-mt-24">
      <section className="section-pad border-b border-[var(--border)]">
        <div className="page-shell">
          <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--text-heading)] sm:text-[2rem]">
            {services.title}
          </h2>
          <p className="section-lead max-w-2xl text-base leading-[1.7] text-[var(--text-secondary)] sm:text-[1.0625rem]">
            {services.intro}
          </p>
        </div>
      </section>

      {services.items.map((item, index) => {
        const imageOnRight = index % 2 === 1;
        return (
          <section
            key={item.id}
            id={item.id}
            className="section-pad scroll-mt-24 border-b border-[var(--border)]"
            aria-labelledby={`${item.id}-heading`}
          >
            <div className="page-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div
                className={`relative border border-[var(--border)] bg-[var(--card)] shadow-[0_4px_28px_-8px_rgba(28,25,23,0.1)] ${
                  imageOnRight ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="relative aspect-[4/3] w-full sm:aspect-[5/4] lg:min-h-[22rem] lg:aspect-auto lg:min-h-[26rem]">
                  <Image
                    src={item.image}
                    alt={item.image_alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div
                className={`max-w-2xl lg:max-w-none ${imageOnRight ? "lg:order-1" : "lg:order-2"}`}
              >
                <h3
                  id={`${item.id}-heading`}
                  className="font-[family-name:var(--font-display)] text-[1.5rem] font-semibold leading-tight tracking-tight text-[var(--text-heading)] sm:text-[1.85rem]"
                >
                  {item.title}
                </h3>
                <p className="section-lead text-lg font-medium leading-[1.65] text-[var(--text-body)]">
                  {item.lead}
                </p>
                <div className="mt-7 space-y-5 leading-[1.7] text-[var(--text-secondary)] sm:mt-8">
                  {item.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <a
                  href={services.form_href}
                  className="mt-11 inline-flex bg-[var(--accent)] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)] sm:mt-12"
                >
                  {item.cta_label}
                </a>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
