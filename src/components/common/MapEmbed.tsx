import { siteConfig } from "@/lib/site-config";
import { MapPinIcon } from "@/components/icons";

export function MapEmbed() {
  const q = encodeURIComponent(siteConfig.address.fullAddress);
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card bg-white">
      <iframe
        title={`Map showing ${siteConfig.name} location in Basti`}
        src={src}
        width="100%"
        height="380"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex items-center justify-between gap-3 p-4 bg-slate-50 border-t border-slate-200">
        <div className="flex items-start gap-2">
          <MapPinIcon className="text-brand-600 mt-0.5 shrink-0" />
          <p className="text-sm text-slate-600">
            {siteConfig.address.fullAddress}
          </p>
        </div>
        <a
          href={siteConfig.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-xs whitespace-nowrap"
        >
          Open in Maps
        </a>
      </div>
    </div>
  );
}
