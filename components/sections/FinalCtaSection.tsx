import Image from "next/image";
import type { SiteContent } from "@/content";

type Props = {
  finalCta: SiteContent["final_cta"];
};

export function FinalCtaSection({ finalCta }: Props) {
  return (
    <section className="section-pad">
      <div className="page-shell">
        <div className="relative overflow-hidden border border-stone-700/25 shadow-[0_28px_56px_-18px_rgba(28,25,23,0.38)]">
          <div className="absolute inset-0">
            <Image
              src="/bg.png"
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1536px) 100vw, 88rem"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-stone-950/93 via-stone-950/40 to-stone-950/40"
              aria-hidden
            />
          </div>

          <div className="relative z-10 px-8 py-16 text-center sm:px-12 sm:py-20 lg:px-16">
            <h2 className="mx-auto max-w-2xl font-[family-name:var(--font-display)] text-[1.75rem] font-semibold leading-tight tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl">
              {finalCta.headline}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.7] text-stone-100/95 drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] sm:mt-7 sm:text-lg">
              {finalCta.subheadline}
            </p>
            <a
              href={finalCta.cta.href}
              className="mt-11 inline-flex bg-white px-9 py-4 text-base font-semibold text-stone-900 shadow-md transition-opacity hover:opacity-95 sm:mt-12"
            >
              {finalCta.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
