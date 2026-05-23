import Link from "next/link";
import { iconMap, ArrowRightIcon } from "@/components/icons";

type ServiceCardProps = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export function ServiceCard({
  slug,
  title,
  description,
  icon,
}: ServiceCardProps) {
  const Icon =
    (iconMap as Record<string, React.ComponentType<{ width?: number; height?: number; className?: string }>>)[icon] ??
    iconMap.sun;

  return (
    <Link
      href={`/${slug}`}
      className="card card-hover group p-6 flex flex-col h-full"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm">
        <Icon width={24} height={24} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 flex-1">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:gap-2 transition-all">
        Learn more
        <ArrowRightIcon width={14} height={14} />
      </span>
    </Link>
  );
}
