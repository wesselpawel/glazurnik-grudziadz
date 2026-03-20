import type { Metadata } from "next";
import Link from "next/link";
import cennikPage from "@/content/cennik-page.json";
import content from "@/content";
import { FooterSection } from "@/components/sections/FooterSection";
import { SiteHeader } from "@/components/sections/SiteHeader";

export const metadata: Metadata = {
  title: cennikPage.meta.title,
  description: cennikPage.meta.description,
  openGraph: {
    title: cennikPage.meta.title,
    description: cennikPage.meta.description,
    locale: content.meta.locale,
    type: "article",
  },
};

export default function CennikArticlePage() {
  return (
    <>
      <SiteHeader navigation={content.navigation} />
      <main className="flex-1 border-b border-[var(--border)] bg-[var(--background)] pb-20 pt-10 sm:pb-24 sm:pt-12">
        <article className="page-shell max-w-3xl">
          <nav className="text-sm text-[var(--text-tertiary)]" aria-label="Ścieżka nawigacji">
            <Link
              href="/"
              className="font-medium text-[var(--text-heading)] underline-offset-4 hover:underline"
            >
              Strona główna
            </Link>
            <span className="mx-2 text-[var(--text-caption)]" aria-hidden>
              /
            </span>
            <span className="text-[var(--text-secondary)]">Cennik i poradnik</span>
          </nav>

          <h1 className="mt-10 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-[var(--text-heading)] sm:mt-12 sm:text-4xl">
            {cennikPage.h1}
          </h1>
          <p className="mt-6 text-lg leading-[1.7] text-[var(--text-secondary)] sm:mt-7">{cennikPage.lead}</p>

          <div className="mt-14 space-y-16 sm:mt-16">
            {cennikPage.sections.map((section, i) => (
              <section key={i} aria-labelledby={`cennik-h-${i}`}>
                <h2
                  id={`cennik-h-${i}`}
                  className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-[var(--text-heading)] sm:text-2xl"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.length > 0 ? (
                  <div className="mt-6 space-y-5 leading-[1.75] text-[var(--text-secondary)]">
                    {section.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                ) : null}

                {"table" in section && section.table ? (
                  <ul className="mt-6 divide-y divide-[var(--border)] border border-[var(--border)] bg-[var(--card)]">
                    {section.table.map((row) => (
                      <li
                        key={row.label}
                        className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 sm:px-6"
                      >
                        <span className="text-sm font-medium text-[var(--text-body)]">{row.label}</span>
                        <span className="shrink-0 text-sm font-semibold text-[var(--accent)]">{row.range}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {"bullets" in section && section.bullets ? (
                  <ul className="mt-6 list-inside list-disc space-y-2.5 text-[var(--text-secondary)] marker:text-[var(--accent)]">
                    {section.bullets.map((item) => (
                      <li key={item} className="pl-1 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {"callout" in section && section.callout ? (
                  <p className="mt-6 border border-[var(--border)] bg-[var(--hero-tint)] p-6 text-sm leading-[1.7] text-[var(--text-body)]">
                    {section.callout}
                  </p>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-20 border-t border-[var(--border)] pt-12 sm:mt-24 sm:pt-14">
            <p className="text-sm font-semibold text-[var(--text-heading)]">Masz konkretny remont w Grudziądzu?</p>
            <p className="mt-3 text-sm leading-[1.65] text-[var(--text-secondary)]">
              Wróć na stronę główną i wyślij formularz – opisz metraż i zakres, przygotujemy propozycję.
            </p>
            <Link
              href="/#wycena"
              className="mt-6 inline-flex bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Przejdź do formularza wyceny
            </Link>
          </div>
        </article>
      </main>
      <FooterSection footer={content.footer} />
    </>
  );
}
