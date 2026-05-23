import Link from "next/link";
import { ArrowRightIcon, ShieldIcon, StarIcon } from "@/components/icons";

type BrandCardProps = {
  slug: string;
  name: string;
  rating: number;
  warranty: string;
  about: string;
};

export function BrandCard({ slug, name, rating, warranty, about }: BrandCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="card group p-6 flex flex-col h-full hover:-translate-y-1 transition-transform"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-700">
          {name}
        </h3>
        <div className="flex items-center gap-1 text-sun-500 text-sm">
          <StarIcon width={14} height={14} />
          <span className="font-semibold text-slate-900">{rating.toFixed(1)}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-600 line-clamp-3">{about}</p>
      <div className="mt-4 flex items-start gap-2 text-xs text-slate-600">
        <ShieldIcon width={14} height={14} className="text-brand-600 mt-0.5 shrink-0" />
        <span>{warranty}</span>
      </div>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:gap-2 transition-all">
        View {name} dealer page
        <ArrowRightIcon width={14} height={14} />
      </span>
    </Link>
  );
}
