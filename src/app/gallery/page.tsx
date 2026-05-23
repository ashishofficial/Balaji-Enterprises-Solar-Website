import Image from "next/image";
import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTABanner } from "@/components/common/CTABanner";
import { images } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Gallery — Rooftop Solar Installations by Balaji Enterprises",
  description:
    "Real photos of rooftop solar installations in Basti, Khalilabad, Gorakhpur and Ayodhya — homes, shops, factories, schools and hospitals.",
  path: "/gallery",
  keywords: ["solar installation gallery Basti", ...baseKeywords],
});

type Project = {
  image: { src: string; alt: string };
  title: string;
  location: string;
  type: string;
  panels: string;
};

const projects: Project[] = [
  {
    image: images.heroOwner,
    title: "3 kW On-Grid Rooftop Solar",
    location: "Bargadwa, Basti",
    type: "Residential",
    panels: "8 × 380 W Tata mono PERC",
  },
  {
    image: images.heroGPS,
    title: "3 kW Rooftop with Net Metering",
    location: "NH 28, Basti",
    type: "Residential",
    panels: "8 × 415 W Adani mono PERC",
  },
  {
    image: images.commercialCarport,
    title: "Solar Carport Installation",
    location: "Basti town",
    type: "Commercial",
    panels: "6 × 540 W Waaree bifacial",
  },
  {
    image: images.rooftopArrayTeam,
    title: "5 kW Hybrid Rooftop Solar",
    location: "Walterganj, Basti",
    type: "Residential",
    panels: "12 × 415 W Adani mono PERC",
  },
  {
    image: images.commercialInstall,
    title: "Commercial Solar Carport",
    location: "Bansi Road, Basti",
    type: "Commercial",
    panels: "Galvanized steel structure",
  },
  {
    image: images.groundMount,
    title: "Ground-Mount Solar Array",
    location: "Captainganj, Basti",
    type: "Agricultural",
    panels: "Tilted ground-mount structure",
  },
  {
    image: images.teamInstallation,
    title: "Team After Commissioning",
    location: "Habeli Khas, Basti",
    type: "Residential",
    panels: "Successful 3 kW install",
  },
  {
    image: images.rooftopCustomer,
    title: "Customer Handover Photo",
    location: "Bargadwa, Basti",
    type: "Residential",
    panels: "3 kW Tata Solar plant",
  },
  {
    image: images.teamHandover,
    title: "Post-Install Chai with Customer",
    location: "Basti town",
    type: "Residential",
    panels: "Service excellence first",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Gallery", href: "/gallery" },
        ]}
      />
      <Section>
        <SectionHeading
          eyebrow="Project Gallery"
          title="Real solar installations across Basti & UP"
          description="A few recent rooftop solar projects from Balaji Enterprises — every photo is a real installation we delivered, not a stock image."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <figure key={`${p.title}-${i}`} className="card overflow-hidden">
              <div className="relative aspect-[4/3] bg-slate-100">
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                  {p.type}
                </span>
              </div>
              <figcaption className="p-5">
                <h3 className="text-base">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.location}</p>
                <p className="mt-2 text-xs text-slate-600">{p.panels}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-600">
          Want to see your installation here? Get a free site survey today.
        </p>
      </Section>
      <CTABanner />
    </>
  );
}
