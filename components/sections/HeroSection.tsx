import Image from "next/image";
import type { SiteContent } from "@/content";
import { HeroLeadForm } from "./HeroLeadForm";

type Props = {
  hero: SiteContent["hero"];
  leadForm: SiteContent["lead_form"];
};

export function HeroSection({ hero, leadForm }: Props) {
  return (
    <section
      id={hero.id}
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div className="absolute inset-0">
        <Image
          src={hero.background_image}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-stone-950/88 via-stone-900/72 to-stone-800/50 lg:bg-gradient-to-r lg:from-stone-950/90 lg:via-stone-900/70 lg:to-stone-700/35"
          aria-hidden
        />
      </div>

      <div className="page-shell relative z-10 py-16 sm:py-[4.5rem] lg:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              Grudziądz i okolice
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl xl:text-[3.2rem]">
              {hero.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.65] text-stone-200/95 sm:text-lg">
              {hero.subheadline}
            </p>
            <p className="mt-7 max-w-xl border-l-2 border-[var(--accent)]/75 pl-5 text-sm leading-[1.65] text-stone-300/95">
              {hero.trust_line}
            </p>
            <div className="mt-9 flex flex-wrap gap-3 sm:mt-11">
              <a
                href={hero.cta_primary.href}
                className="inline-flex items-center justify-center bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[var(--accent-hover)] sm:text-base"
              >
                {hero.cta_primary.label}
              </a>
              <a
                href={hero.cta_secondary.href}
                className="inline-flex items-center justify-center border border-white/45 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/60 hover:bg-white/15 sm:text-base"
              >
                {hero.cta_secondary.label}
              </a>
            </div>
            <ul className="mt-11 flex flex-wrap gap-2.5 sm:mt-14 sm:gap-3" aria-label="Zalety">
              {hero.trust_badges.map((badge) => (
                <li
                  key={badge.text}
                  className="border border-white/22 bg-white/[0.07] px-3.5 py-2 text-xs font-medium text-stone-100 backdrop-blur-sm sm:px-4 sm:text-sm"
                >
                  {badge.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 xl:col-span-5 lg:sticky lg:top-[7.5rem]">
            <HeroLeadForm leadForm={leadForm} />
          </div>
        </div>
      </div>
    </section>
  );
}
