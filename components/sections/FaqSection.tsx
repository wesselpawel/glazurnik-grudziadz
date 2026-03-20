import type { SiteContent } from "@/content";

type Props = {
  faq: SiteContent["faq"];
};

export function FaqSection({ faq }: Props) {
  return (
    <section id={faq.id} className="section-pad scroll-mt-24 border-b border-[var(--border)]">
      <div className="page-shell">
        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--text-heading)] sm:text-[2rem]">
          {faq.title}
        </h2>
        <p className="section-lead max-w-2xl text-base leading-[1.7] text-[var(--text-secondary)] sm:text-[1.0625rem]">
          {faq.intro}
        </p>
        <div className="section-content max-w-3xl space-y-3 sm:space-y-4">
          {faq.items.map((item) => (
            <details
              key={item.question}
              className="group border border-[var(--border)] bg-[var(--card)] px-5 shadow-[0_2px_16px_-6px_rgba(28,25,23,0.08)] open:shadow-[0_6px_28px_-8px_rgba(28,25,23,0.12)] sm:px-7"
            >
              <summary className="cursor-pointer list-none py-4 text-[0.9375rem] font-semibold leading-snug text-[var(--text-heading)] marker:hidden sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <span className="min-w-0 flex-1 pr-2">{item.question}</span>
                  <span
                    className="mt-0.5 shrink-0 text-lg font-normal leading-none text-[var(--accent)] transition-transform group-open:rotate-45 sm:mt-1"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-[var(--border)] pb-5 pt-4 leading-[1.7] text-[var(--text-secondary)]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
