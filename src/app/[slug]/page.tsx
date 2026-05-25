import { notFound } from "next/navigation";
import { services, getService } from "@/data/services";
import { brands, getBrand } from "@/data/brands";
import { locations, getLocation } from "@/data/locations";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";
import { BrandTemplate } from "@/components/templates/BrandTemplate";
import { LocationTemplate } from "@/components/templates/LocationTemplate";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  const genericLocations = locations.filter(
    (location) => location.slug !== "solar-company-hardoi"
  );

  return [
    ...services.map((s) => ({ slug: s.slug })),
    ...brands.map((b) => ({ slug: b.slug })),
    ...genericLocations.map((l) => ({ slug: l.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (service) {
    return buildMetadata({
      title: service.metaTitle,
      description: service.metaDescription,
      path: `/${slug}`,
      keywords: service.keywords,
    });
  }
  const brand = getBrand(slug);
  if (brand) {
    return buildMetadata({
      title: brand.metaTitle,
      description: brand.metaDescription,
      path: `/${slug}`,
      keywords: brand.keywords,
    });
  }
  const location = getLocation(slug);
  if (location) {
    return buildMetadata({
      title: location.metaTitle,
      description: location.metaDescription,
      path: `/${slug}`,
      keywords: location.keywords,
    });
  }
  return buildMetadata({ title: "Not Found", description: "", path: `/${slug}`, noIndex: true });
}

export default async function CatchPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (service) return <ServiceTemplate service={service} />;
  const brand = getBrand(slug);
  if (brand) return <BrandTemplate brand={brand} />;
  const location = getLocation(slug);
  if (location) return <LocationTemplate location={location} />;
  notFound();
}
