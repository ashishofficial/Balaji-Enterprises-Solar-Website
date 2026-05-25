import { siteConfig } from "@/lib/site-config";
import {
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  CheckIcon,
} from "@/components/icons";
import type { Location } from "@/data/locations";

export function LocationHero({ location }: { location: Location }) {
  const phone = location.phone ?? siteConfig.phone;
  const whatsappLink = location.whatsapp
    ? `https://wa.me/${location.whatsapp}`
    : siteConfig.whatsappLink;

  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-slate-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(34,197,94,0.5), transparent 50%), radial-gradient(circle at 70% 70%, rgba(251,191,36,0.4), transparent 50%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative py-14 lg:py-20 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white border border-white/20">
            <MapPinIcon width={12} height={12} />
            Service Area · {location.district}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-white">
            {location.h1}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl">
            {location.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${phone}`} className="btn-primary">
              <PhoneIcon width={16} height={16} />
              Book free survey
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon width={16} height={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-6 lg:p-7 shadow-cardHover">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                <MapPinIcon width={26} height={26} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-brand-200">
                  Service location
                </p>
                <h2 className="text-2xl font-display text-white">
                  {location.city}
                </h2>
              </div>
            </div>

            <dl className="mt-6 space-y-4">
              <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-white/10">
                <dt className="text-sm text-slate-300">Distance from Basti</dt>
                <dd className="text-2xl font-display font-bold text-white">
                  {location.distanceKm}
                  <span className="text-sm font-medium text-slate-300 ml-1">km</span>
                </dd>
              </div>
              <div className="pb-3 border-b border-white/10">
                <dt className="text-xs uppercase tracking-wide text-slate-300 mb-1.5">
                  District
                </dt>
                <dd className="text-sm font-medium text-white">
                  {location.district}
                </dd>
              </div>
              <div className="pb-3 border-b border-white/10">
                <dt className="text-xs uppercase tracking-wide text-slate-300 mb-1.5">
                  Pincodes served
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {location.pincodes.map((p) => (
                    <span
                      key={p}
                      className="rounded-md bg-white/10 px-2 py-0.5 text-xs font-medium text-white"
                    >
                      {p}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-300 mb-2">
                  Major areas
                </dt>
                <dd className="space-y-1.5">
                  {location.landmarks.map((l) => (
                    <p
                      key={l}
                      className="flex items-start gap-2 text-sm text-slate-200"
                    >
                      <CheckIcon
                        width={14}
                        height={14}
                        strokeWidth={3}
                        className="text-brand-400 mt-0.5 shrink-0"
                      />
                      {l}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
