import Image from "next/image";
import type { SiteContent } from "@/content";

type Props = {
  trends: SiteContent["trends_2026"];
};

/** Ścieżka względem folderu `public` (np. pliki w `public/co-goroje/`) */
const BASE = "/co-goroje";

const LAYOUT_W = 1200;
const LAYOUT_H = 1500;

export function Trends2026Section({ trends }: Props) {
  return (
    <section
      id={trends.id}
      className="section-pad scroll-mt-24 border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="page-shell">
        <h2 className="max-w-4xl font-[family-name:var(--font-display)] text-[1.65rem] font-semibold leading-[1.2] tracking-tight text-[var(--text-heading)] sm:text-[1.85rem] lg:text-[2rem]">
          {trends.title}
        </h2>

        <div className="mt-10 max-w-2xl sm:mt-12">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
            {trends.summary_title}
          </h3>
          <ul className="mt-5 space-y-3.5 text-base leading-[1.65] text-[var(--text-body)] sm:text-[1.0625rem]">
            {trends.summary_items.map((item) => (
              <li key={item.text} className="flex gap-3 border-l-2 border-[var(--border)] pl-4">
                <span className="min-w-0">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {trends.images.length > 0 ? (
          <div className="mt-12 sm:mt-14 lg:mt-16">
            <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
              {trends.images.map((img, idx) => (
                <div
                  key={`${img.file}-${idx}`}
                  className="mb-3 break-inside-avoid sm:mb-4"
                >
                  <div className="border border-[var(--border)] bg-[var(--card)] shadow-[0_4px_24px_-10px_rgba(28,25,23,0.12)]">
                    <Image
                      src={`${BASE}/${img.file}`}
                      alt={img.alt}
                      width={LAYOUT_W}
                      height={LAYOUT_H}
                      className="block h-auto w-full max-w-full object-contain align-top"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      priority={idx < 2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
