import Image from "next/image";
import type { SiteContent } from "@/content";

type Props = {
  seo: SiteContent["seo_content"];
};

const IMG_W = 1200;
const IMG_H = 900;

export function SeoContentSection({ seo }: Props) {
  return (
    <section
      id={seo.id}
      className="section-pad scroll-mt-24 border-b border-[var(--border)] bg-[var(--card)]"
    >
      <div className="page-shell">
        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--text-heading)] sm:text-[2rem]">
          {seo.title}
        </h2>

        <div className="mt-8 grid gap-10 lg:mt-10 lg:grid-cols-12 lg:items-start lg:gap-14 xl:gap-16">
          <article className="order-2 max-w-3xl lg:order-1 lg:col-span-7">
            {seo.paragraphs.map((p, i) => (
              <p
                key={i}
                className={`leading-[1.75] text-[var(--text-secondary)] ${i === 0 ? "section-lead" : "mt-7 sm:mt-8"}`}
              >
                {p}
              </p>
            ))}
          </article>

          <div className="order-1 lg:order-2 lg:col-span-5">
            <div className="border border-[var(--border)] bg-[var(--background)] shadow-[0_4px_24px_-10px_rgba(28,25,23,0.12)]">
              <Image
                src={seo.image}
                alt={seo.image_alt}
                width={IMG_W}
                height={IMG_H}
                className="block h-auto w-full max-w-full object-contain align-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
