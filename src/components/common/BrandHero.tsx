import { siteConfig } from "@/lib/site-config";
import {
  PhoneIcon,
  WhatsAppIcon,
  CheckIcon,
  ShieldIcon,
  StarIcon,
  ZapIcon,
} from "@/components/icons";
import type { Brand } from "@/data/brands";

export function BrandHero({ brand }: { brand: Brand }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-brand-50/40">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-sun-200/40 blur-3xl"
      />

      <div className="container relative py-14 lg:py-20 grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-card border border-slate-100">
            Authorised Solar Brand
          </p>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-700 font-semibold">
            Balaji Enterprises × {brand.name}
          </p>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
            {brand.h1}
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-xl">
            {brand.intro}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${siteConfig.phone}`} className="btn-primary">
              <PhoneIcon width={16} height={16} />
              Get {brand.name} quote
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon width={16} height={16} />
              WhatsApp
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-600">
            ✓ Genuine sealed product · ✓ Direct warranty registration · ✓ Local
            Basti installation
          </p>
        </div>

        <div className="relative">
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-5 text-white">
              <p className="text-xs uppercase tracking-widest opacity-80">
                Product Spec Sheet
              </p>
              <div className="mt-1 flex items-end justify-between">
                <h2 className="text-2xl font-display text-white">
                  {brand.name}
                </h2>
                <div className="flex items-center gap-1 rounded-full bg-white/15 backdrop-blur px-3 py-1">
                  <StarIcon width={14} height={14} className="text-sun-300" />
                  <span className="text-sm font-semibold">
                    {brand.rating.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
            <dl className="divide-y divide-slate-100">
              <div className="px-6 py-3 flex items-start gap-3">
                <ShieldIcon
                  width={18}
                  height={18}
                  className="text-brand-600 mt-0.5 shrink-0"
                />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-600">
                    Warranty
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">
                    {brand.warranty}
                  </dd>
                </div>
              </div>
              <div className="px-6 py-3 flex items-start gap-3">
                <ZapIcon
                  width={18}
                  height={18}
                  className="text-brand-600 mt-0.5 shrink-0"
                />
                <div>
                  <dt className="text-xs uppercase tracking-wide text-slate-600">
                    Product range
                  </dt>
                  <dd className="text-sm font-medium text-slate-900">
                    {brand.productTypes.length} module series available
                  </dd>
                </div>
              </div>
              <div className="px-6 py-3">
                <dt className="text-xs uppercase tracking-wide text-slate-600 mb-2">
                  Why choose {brand.name}
                </dt>
                <ul className="space-y-1.5">
                  {brand.highlights.slice(0, 3).map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <CheckIcon
                        width={14}
                        height={14}
                        strokeWidth={3}
                        className="text-brand-600 mt-0.5 shrink-0"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
