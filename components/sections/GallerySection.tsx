import Image from "next/image";
import type { SiteContent } from "@/content";

type Props = {
  gallery: SiteContent["gallery"];
};

const BASE = "/nasze-realizacje-grudziadz";
const LAYOUT_W = 1400;
const LAYOUT_H = 1050;

export function GallerySection({ gallery }: Props) {
  const images = gallery.images;

  return (
    <section
      id={gallery.id}
      className="section-pad scroll-mt-24 border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="page-shell">
        <h2 className="sr-only">{gallery.title}</h2>

        {images.length > 0 ? (
          <div className="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4 lg:gap-5">
            {images.map((img, idx) => (
              <div
                key={img.file}
                className="mb-3 break-inside-avoid sm:mb-4"
              >
                <div className="overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-[0_4px_24px_-10px_rgba(28,25,23,0.12)] transition-shadow duration-300 hover:shadow-[0_14px_40px_-14px_rgba(28,25,23,0.22)]">
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
        ) : null}
      </div>
    </section>
  );
}
