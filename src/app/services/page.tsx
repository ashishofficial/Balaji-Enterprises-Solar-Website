import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ServiceCard } from "@/components/common/ServiceCard";
import { CTABanner } from "@/components/common/CTABanner";
import { services } from "@/data/services";

export const metadata = buildMetadata({
  title: "Solar Services in Basti | Rooftop, On-Grid, Off-Grid, Hybrid",
  description:
    "Complete solar services in Basti — rooftop installation, residential, commercial, on-grid, off-grid, hybrid and AMC by Balaji Enterprises.",
  path: "/services",
  keywords: [
    "solar services Basti",
    "solar dealer services UP",
    ...baseKeywords,
  ],
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <Section>
        <SectionHeading
          eyebrow="Our Services"
          title="Every solar service you need, in one place"
          description="From the first survey to lifetime maintenance, Balaji Enterprises handles every part of your rooftop solar journey."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              slug={s.slug}
              title={s.title}
              description={s.intro}
              icon={s.icon}
            />
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
