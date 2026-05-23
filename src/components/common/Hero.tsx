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
  variant?: "split" | "immersive";
};

export function Hero({
  eyebrow,
  title,
  subtitle,
  bullets,
  showRating = true,
  image = images.heroOwner,
  variant = "split",
}: HeroProps) {
  if (variant === "immersive") {
    return (
      <section className="relative overflow-hidden bg-brand-950 text-white">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,22,0.88)_0%,rgba(16,30,59,0.68)_48%,rgba(16,30,59,0.25)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-950/85 to-transparent"
        />

        <div className="container relative py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sun-100 backdrop-blur motion-safe:animate-fade-up">
                <span className="h-2 w-2 rounded-full bg-sun-400" />
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white motion-safe:animate-fade-up [animation-delay:80ms]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-100 motion-safe:animate-fade-up [animation-delay:160ms]">
              {subtitle}
            </p>

            {bullets && bullets.length > 0 && (
              <ul className="mt-7 grid gap-2 sm:grid-cols-2 max-w-2xl motion-safe:animate-fade-up [animation-delay:240ms]">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun-400 text-brand-950">
                      <CheckIcon width={12} height={12} strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-3 motion-safe:animate-fade-up [animation-delay:320ms]">
              <a href={`tel:${siteConfig.phone}`} className="btn-gold">
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
              <Link
                href="/contact"
                className="btn border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                Free Site Survey
              </Link>
            </div>
          </div>

          {showRating && (
            <div className="mt-12 grid gap-3 sm:grid-cols-3 max-w-4xl motion-safe:animate-fade-up [animation-delay:400ms]">
              {[
                ["200+", "Solar plants installed"],
                ["1.2 MW+", "Commissioned capacity"],
                ["25 yrs", "Panel performance warranty"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-l border-white/25 bg-white/10 px-5 py-4 backdrop-blur"
                >
                  <p className="font-display text-2xl font-extrabold text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-slate-200">{label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-sun-50 border-b border-slate-200">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,107,0.10),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(234,179,8,0.10),transparent_45%)]"
      />
      <div className="container relative py-12 lg:py-20 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          {eyebrow && (
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-card motion-safe:animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-sun-500 animate-pulse" />
              {eyebrow}
            </p>
          )}
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

          <div className="mt-8 flex flex-wrap gap-3 motion-safe:animate-fade-up [animation-delay:320ms]">
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
            <div className="mt-8 flex items-center gap-6 text-sm motion-safe:animate-fade-up [animation-delay:400ms]">
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
