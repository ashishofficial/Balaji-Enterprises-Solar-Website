import { StarIcon } from "@/components/icons";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card p-6 h-full flex flex-col">
      <div className="flex items-center gap-1 text-sun-500">
        {Array.from({ length: t.rating }).map((_, i) => (
          <StarIcon key={i} width={14} height={14} />
        ))}
      </div>
      <blockquote className="mt-3 text-sm text-slate-700 flex-1">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-4 pt-4 border-t border-slate-100">
        <p className="text-sm font-semibold text-slate-900">{t.name}</p>
        <p className="text-xs text-slate-600">
          {t.role} · {t.location}
        </p>
        <p className="mt-1 text-xs text-brand-700 font-medium">{t.system}</p>
      </figcaption>
    </figure>
  );
}
