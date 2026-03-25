import Image from "next/image";

type Props = {
  heading: string;
  alt: string;
};

const IMAGES = ["realization1.png", "realization2.png", "realization3.png", "realization5.png"];

export function RealizationsStripSection({ heading, alt }: Props) {
  return (
    <section className="border-b border-[var(--border)] bg-[var(--card)] py-12 sm:py-16 lg:py-20">
      <div className="page-shell">
        <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-caption)]">
          {heading}
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {IMAGES.map((img, idx) => (
            <div
              key={img}
              className="relative aspect-square w-full overflow-hidden border border-[var(--border)] bg-[var(--background)] shadow-[0_2px_16px_-6px_rgba(28,25,23,0.1)]"
            >
              <Image
                src={`/${img}`}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
