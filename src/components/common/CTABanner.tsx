import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

type CTABannerProps = {
  title?: string;
  description?: string;
};

export function CTABanner({
  title = "Ready for a free rooftop solar quote?",
  description = "Talk to a Balaji Enterprises solar expert today. Site survey is free across Basti — no obligation, no pressure.",
}: CTABannerProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 p-8 lg:p-12 text-white shadow-cardHover">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,.4), transparent 50%), radial-gradient(circle at 20% 80%, rgba(234,179,8,.45), transparent 50%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -inset-y-8 -left-1/2 w-1/3 motion-safe:animate-shimmer bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(234,179,8,0.18), transparent 50%)",
            }}
          />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-white">{title}</h2>
              <p className="mt-3 text-brand-50 max-w-2xl">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn bg-white text-brand-700 hover:bg-slate-100"
              >
                <PhoneIcon width={16} height={16} />
                Call Now
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#25D366] text-white hover:bg-[#1ebe57]"
              >
                <WhatsAppIcon width={16} height={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
