import type { SiteContent } from "@/content";

type Props = {
  process: SiteContent["process"];
};

export function ProcessSection({ process }: Props) {
  return (
    <section
      id={process.id}
      className="section-pad scroll-mt-24 border-b border-[var(--border)] bg-[var(--hero-tint)]"
    >
      <div className="page-shell">
        <h2 className="max-w-3xl font-[family-name:var(--font-display)] text-[1.75rem] font-semibold leading-tight tracking-tight text-[var(--text-heading)] sm:text-[2rem]">
          {process.title}
        </h2>
        <p className="section-lead max-w-2xl text-base leading-[1.7] text-[var(--text-secondary)] sm:text-[1.0625rem]">
          {process.intro}
        </p>
        <ol className="section-content grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {process.steps.map((step) => (
            <li
              key={step.step}
              className="flex gap-4 border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_2px_16px_-6px_rgba(28,25,23,0.08)]"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center bg-[var(--text-heading)] text-base font-bold text-white"
                aria-hidden
              >
                {step.step}
              </span>
              <div className="min-w-0 pt-0.5">
                <h3 className="font-semibold text-[var(--text-heading)]">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-[1.65] text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
