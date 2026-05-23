import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  StarIcon,
  ShieldIcon,
} from "@/components/icons";

type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle: string;
  bullets?: string[];
  showRating?: boolean;
  image?: { src: string; alt: string };
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  bullets,
  showRating = true,
  image = images.heroOwner,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-sun-50 border-b border-slate-200">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.10),transparent_45%)]"
      />
      <div className="container relative py-12 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-card">
              <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl">
            {subtitle}
          </p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 max-w-xl">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <CheckIcon width={12} height={12} strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${siteConfig.phone}`} className="btn-primary">
              <PhoneIcon width={16} height={16} />
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon width={16} height={16} />
              WhatsApp Quote
            </a>
            <Link href="/contact" className="btn-secondary">
              Free Site Survey
            </Link>
          </div>

          {showRating && (
            <div className="mt-8 flex items-center gap-6 text-sm">
              <div>
                <div className="flex items-center gap-0.5 text-sun-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} width={16} height={16} />
                  ))}
                </div>
                <p className="mt-1 text-xs text-slate-600">
                  Trusted by 200+ Basti families
                </p>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <ShieldIcon
                  width={20}
                  height={20}
                  className="text-brand-600"
                />
                <span className="text-xs leading-tight">
                  25-year panel
                  <br />
                  warranty
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-cardHover">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
