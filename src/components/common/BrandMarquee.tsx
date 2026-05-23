import { brands } from "@/data/brands";
import { SunIcon } from "@/components/icons";

export function BrandMarquee() {
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
      <div className="brand-marquee-track flex w-max">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center gap-12 px-6 lg:gap-16 lg:px-8"
            aria-hidden={group === 1}
          >
            {brands.map((b) => (
              <div
                key={`${group}-${b.slug}`}
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
        ))}
      </div>
    </div>
  );
}
