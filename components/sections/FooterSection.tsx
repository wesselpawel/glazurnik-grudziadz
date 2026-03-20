import Link from "next/link";
import type { SiteContent } from "@/content";

type Props = {
  footer: SiteContent["footer"];
};

export function FooterSection({ footer }: Props) {
  const { company } = footer;

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--foreground)] py-12 text-stone-200 sm:py-14">
      <div className="page-shell space-y-10">
        <p className="mx-auto max-w-2xl text-center text-base font-medium leading-snug tracking-tight text-stone-100 sm:text-lg">
          {footer.trust_role}
        </p>

        <div className="grid gap-10 border-b border-stone-700/50 pb-10 sm:grid-cols-2 sm:gap-12 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
              {footer.nearby_heading}
            </p>
            <nav aria-label={footer.nearby_heading} className="mt-4">
              <ul className="flex flex-col gap-2.5 text-sm">
                {footer.nearby_links.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-stone-300 transition-colors hover:text-stone-50 hover:underline hover:decoration-stone-500 hover:underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">
              {footer.company_heading}
            </p>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-stone-300">
              <p className="font-medium text-stone-200">{company.name}</p>
              <p>{company.address}</p>
              <dl className="space-y-1.5 text-xs text-stone-400 sm:text-sm">
                <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                  <dt className="font-medium text-stone-500">NIP</dt>
                  <dd>{company.nip}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                  <dt className="font-medium text-stone-500">REGON</dt>
                  <dd>{company.regon}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-0.5">
                  <dt className="font-medium text-stone-500">KRS</dt>
                  <dd>{company.krs}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-sm leading-[1.7] text-stone-200">{footer.text}</p>
          <p className="text-xs leading-[1.65] text-stone-400">{footer.trust_note}</p>
        </div>
      </div>
    </footer>
  );
}
