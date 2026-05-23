import { siteConfig } from "@/lib/site-config";
import { MapPinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function MapEmbed({
  className,
  iframeClassName,
}: {
  className?: string;
  iframeClassName?: string;
}) {
  const q = encodeURIComponent(siteConfig.address.fullAddress);
  const src = `https://www.google.com/maps?q=${q}&output=embed`;
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 shadow-card bg-white",
        className
      )}
    >
      <iframe
        title={`Map showing ${siteConfig.name} location in Basti`}
        src={src}
        width="100%"
        height="380"
        className={iframeClassName}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <div className="flex items-center justify-between gap-3 p-4 bg-slate-50 border-t border-slate-200">
        <div className="flex items-start gap-2">
          <MapPinIcon className="text-brand-600 mt-0.5 shrink-0" />
          <a
            href={siteConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-600 hover:text-brand-700"
          >
            {siteConfig.address.fullAddress}
          </a>
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
