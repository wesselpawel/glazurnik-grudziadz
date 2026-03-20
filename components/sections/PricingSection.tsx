import Image from "next/image";
import Link from "next/link";
import type { SiteContent } from "@/content";

type Props = {
  pricing: SiteContent["pricing"];
};

export function PricingSection({ pricing }: Props) {
  return (
    <section
      id={pricing.id}
      className="section-pad scroll-mt-24 border-b border-[var(--border)] bg-[var(--card)]"
    >
      <div className="page-shell">
        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--text-heading)] sm:text-[2rem]">
          {pricing.title}
        </h2>
        <p className="section-lead max-w-3xl text-base leading-[1.7] text-[var(--text-secondary)] sm:text-[1.0625rem]">
          {pricing.description}
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-[1.65] text-[var(--text-tertiary)]">{pricing.note}</p>

        <div className="mt-12 grid items-start gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          <aside className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <div className="border border-[var(--border)] bg-[var(--background)] shadow-[0_6px_32px_-12px_rgba(28,25,23,0.14)]">
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
                <Image
                  src={pricing.image}
                  alt={pricing.image_alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="border-t border-[var(--border)] bg-[var(--card)] p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  Zaufanie
                </p>
                <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[var(--text-heading)]">
                  {pricing.trust_card.title}
                </p>
                <p className="mt-3 text-sm leading-[1.65] text-[var(--text-secondary)]">
                  {pricing.trust_card.subtitle}
                </p>
                <ul className="mt-5 space-y-3 border-t border-[var(--border)] pt-5">
                  {pricing.trust_card.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-[1.55] text-[var(--text-body)]">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7 xl:col-span-8">
            <p className="max-w-2xl border-l-2 border-[var(--accent)]/55 pl-5 text-sm leading-[1.7] text-[var(--text-body)]">
              {pricing.intro}
            </p>

            <ul className="mt-8 max-w-2xl list-inside list-disc space-y-2.5 text-sm leading-[1.65] text-[var(--text-secondary)] marker:text-[var(--accent)]">
              {pricing.highlights.map((line) => (
                <li key={line} className="pl-1">
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-10 max-w-2xl sm:mt-12">
              <p className="text-sm font-semibold text-[var(--text-heading)]">{pricing.benchmark_caption}</p>
              <ul className="mt-5 divide-y divide-[var(--border)] border border-[var(--border)] bg-[var(--background)] shadow-[0_4px_24px_-8px_rgba(28,25,23,0.1)]">
                {pricing.benchmark_rows.map((row) => (
                  <li
                    key={row.label}
                    className="flex flex-wrap items-baseline justify-between gap-3 px-6 py-4 sm:px-7 sm:py-5"
                  >
                    <span className="text-sm font-medium text-[var(--text-body)]">{row.label}</span>
                    <span className="text-sm font-semibold text-[var(--accent)]">{row.range}</span>
                  </li>
                ))}
              </ul>
            </div>

            <h3 className="mt-12 text-lg font-semibold tracking-tight text-[var(--text-heading)] sm:mt-14">
              Szybki podgląd – nasze pakiety
            </h3>
            <p className="section-lead max-w-2xl text-sm leading-[1.65] text-[var(--text-tertiary)]">
              To uproszczone pozycje do kontaktu – dokładna kwota po ustaleniu zakresu.
            </p>
            <ul className="mt-6 max-w-xl divide-y divide-[var(--border)] border border-[var(--border)] bg-[var(--background)] shadow-[0_4px_24px_-8px_rgba(28,25,23,0.1)] sm:mt-7">
              {pricing.items.map((item) => (
                <li
                  key={item.label}
                  className="flex flex-wrap items-baseline justify-between gap-3 px-6 py-5 sm:px-8 sm:py-6"
                >
                  <span className="max-w-[min(100%,20rem)] text-[0.9375rem] font-medium leading-snug text-[var(--text-body)]">
                    {item.label}
                  </span>
                  <span className="text-lg font-semibold text-[var(--accent)]">{item.value}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <Link
                href={pricing.article_link.href}
                className="inline-flex w-fit border-b-2 border-[var(--text-heading)] pb-1 text-base font-semibold text-[var(--text-heading)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {pricing.article_link.label}
              </Link>
              <span className="hidden text-[var(--text-caption)] sm:inline" aria-hidden>
                ·
              </span>
              <a
                href={pricing.cta.href}
                className="inline-flex w-fit border-2 border-[var(--accent)] px-7 py-3.5 text-base font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-white"
              >
                {pricing.cta.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
