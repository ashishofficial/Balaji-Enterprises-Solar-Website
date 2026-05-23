import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export type BreadcrumbItem = { name: string; href: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200">
        <div className="container py-3 overflow-x-auto">
          <ol className="flex items-center gap-2 text-sm whitespace-nowrap">
            {items.map((item, i) => {
              const last = i === items.length - 1;
              return (
                <li key={item.href} className="flex items-center gap-2">
                  {last ? (
                    <span
                      className="text-slate-600 font-medium"
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <>
                      <Link
                        href={item.href}
                        className="text-brand-700 hover:underline"
                      >
                        {item.name}
                      </Link>
                      <span className="text-slate-500" aria-hidden="true">/</span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
