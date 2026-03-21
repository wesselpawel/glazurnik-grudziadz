import Image from "next/image";
import type { SiteContent } from "@/content";

type Props = {
  navigation: SiteContent["navigation"];
};

export function SiteHeader({ navigation }: Props) {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/95 shadow-[0_1px_0_rgba(28,25,23,0.05)] backdrop-blur-md">
      <div className="page-shell flex items-center justify-between py-[1.125rem] sm:py-5">
        <a
          href="/"
          className="flex items-center font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--text-heading)]"
        >
          <Image
            src="/GG.png"
            alt=""
            width={120}
            height={120}
            className="w-20 h-auto shrink-0"
            priority
          />
          <span className="max-w-12">
          {navigation.brand}
          </span>
        </a>
        <nav
          className="hidden items-center gap-8 text-[0.9375rem] font-medium text-[var(--text-secondary)] md:flex"
          aria-label="Nawigacja główna"
        >
          {navigation.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[var(--text-heading)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={navigation.cta.href}
          className="bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)]"
        >
          {navigation.cta.label}
        </a>
      </div>
    </header>
  );
}
