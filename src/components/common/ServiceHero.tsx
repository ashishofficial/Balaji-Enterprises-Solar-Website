import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  iconMap,
} from "@/components/icons";

type ServiceHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  bullets?: string[];
  image: { src: string; alt: string };
  iconKey: string;
};

export function ServiceHero({
  eyebrow,
  title,
  subtitle,
  bullets,
  image,
  iconKey,
}: ServiceHeroProps) {
  const Icon =
    (iconMap as Record<string, React.ComponentType<{ width?: number; height?: number; className?: string }>>)[iconKey] ?? iconMap.sun;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-sun-50 border-b border-slate-200">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.12),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.10),transparent_45%)]"
      />
      <div className="container relative py-12 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <div className="mb-5 flex items-center gap-3 motion-safe:animate-fade-up">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-sm">
              <Icon width={24} height={24} />
            </span>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-card">
              <span className="h-2 w-2 rounded-full bg-sun-500 animate-pulse" />
              {eyebrow}
            </p>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900 motion-safe:animate-fade-up [animation-delay:80ms]">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl motion-safe:animate-fade-up [animation-delay:160ms]">
            {subtitle}
          </p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 max-w-xl motion-safe:animate-fade-up [animation-delay:240ms]">
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
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-cardHover motion-safe:animate-scale-in [animation-delay:160ms]">
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
