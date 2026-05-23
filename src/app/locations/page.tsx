import Link from "next/link";
import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTABanner } from "@/components/common/CTABanner";
import { locations } from "@/data/locations";
import { MapPinIcon, ArrowRightIcon } from "@/components/icons";

export const metadata = buildMetadata({
  title: "Solar Service Areas | Basti, Khalilabad, Gorakhpur, Ayodhya",
  description:
    "Balaji Enterprises serves Basti, Sant Kabir Nagar, Khalilabad, Gorakhpur and Ayodhya with rooftop solar installation and maintenance.",
  path: "/locations",
  keywords: [
    "solar Basti district",
    "solar Khalilabad",
    "solar Gorakhpur",
    "solar Ayodhya",
    ...baseKeywords,
  ],
});

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/locations" },
        ]}
      />
      <Section>
        <SectionHeading
          eyebrow="Where We Work"
          title="Solar installation across eastern Uttar Pradesh"
          description="From our Bargadwa office in Basti, we deliver complete rooftop solar solutions across Basti district and nearby cities."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-6">
            <div className="flex items-center gap-2 text-brand-700">
              <MapPinIcon />
              <h3 className="text-lg">Basti (HQ)</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Our home base. Free site survey across Basti city, Walterganj,
              Captainganj, Harraiya, Rudhauli and nearby villages.
            </p>
            <p className="mt-3 text-xs text-slate-600">
              Pincodes: 272001 · 272002 · 272123
            </p>
          </div>
          {locations.map((l) => (
            <Link
              key={l.slug}
              href={`/${l.slug}`}
              className="card p-6 group hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-2 text-brand-700">
                <MapPinIcon />
                <h3 className="text-lg group-hover:text-brand-800">
                  {l.city}
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {l.distanceKm} km from Basti · {l.district} district
              </p>
              <p className="mt-3 text-xs text-slate-600">
                Areas: {l.landmarks.slice(0, 3).join(", ")}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-700 group-hover:gap-2 transition-all">
                Solar in {l.city}
                <ArrowRightIcon width={14} height={14} />
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
