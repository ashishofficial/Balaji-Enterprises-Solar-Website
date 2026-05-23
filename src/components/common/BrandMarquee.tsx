import { brands } from "@/data/brands";
import { SunIcon } from "@/components/icons";

export function BrandMarquee() {
  const items = [...brands, ...brands, ...brands];

  return (
    <div className="relative overflow-hidden border-y border-slate-200 bg-slate-50 py-4">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"
      />
      <div className="flex w-max motion-safe:animate-marquee gap-12 lg:gap-16 px-8">
        {items.map((b, i) => (
          <div
            key={`${b.slug}-${i}`}
            className="flex shrink-0 items-center gap-2 text-slate-500"
          >
            <SunIcon
              width={18}
              height={18}
              className="text-sun-500 shrink-0"
            />
            <span className="font-display text-base lg:text-lg font-semibold whitespace-nowrap">
              {b.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
