import { siteConfig } from "@/lib/site-config";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

export function StickyCTA() {
  return (
    <>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-2 gap-px bg-slate-200">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2 bg-brand-600 text-white py-3 text-sm font-semibold active:bg-brand-700"
          aria-label="Call Balaji Enterprises"
        >
          <PhoneIcon width={18} height={18} />
          Call Now
        </a>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 text-sm font-semibold active:bg-[#1ebe57]"
          aria-label="WhatsApp Balaji Enterprises"
        >
          <WhatsAppIcon width={18} height={18} />
          WhatsApp
        </a>
      </div>

      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 z-30 h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg motion-safe:hover:scale-110 transition-transform group"
        aria-label="WhatsApp Balaji Enterprises"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping-slow opacity-70"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-ping-slow opacity-50 [animation-delay:0.9s]"
        />
        <WhatsAppIcon width={28} height={28} className="relative z-10" />
      </a>
    </>
  );
}
