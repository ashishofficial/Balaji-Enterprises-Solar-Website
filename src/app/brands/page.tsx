import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BrandCard } from "@/components/common/BrandCard";
import { CTABanner } from "@/components/common/CTABanner";
import { brands } from "@/data/brands";
import { images } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Solar Brands in Basti | Adani, Tata, Waaree, Vikram Dealer",
  description:
    "Authorised solar panel dealer in Basti for Adani, Tata, Waaree, Vikram, Loom and UTL. Genuine products with full warranty by Balaji Enterprises.",
  path: "/brands",
  keywords: [
    "solar brands Basti",
    "solar dealer brands UP",
    "Adani Tata Waaree Basti",
    ...baseKeywords,
  ],
});

export default function BrandsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Brands", href: "/brands" },
        ]}
      />
      <PageHero
        eyebrow="Solar Brands"
        title="Genuine panels from trusted Indian solar manufacturers"
        description="Compare Adani, Tata, Waaree, Vikram, Loom and UTL with local installation, warranty registration and after-sales support in Basti."
        image={images.commercialInstall}
        stats={[
          { value: "6", label: "Brands supplied" },
          { value: "100%", label: "Original sealed product" },
          { value: "BIS/IEC", label: "Certified hardware" },
        ]}
      />
      <Section>
        <SectionHeading
          eyebrow="Brands We Supply"
          title="Authorised dealer of top Indian solar brands"
          description="Only MNRE-approved, Tier-1 modules from India's most trusted manufacturers. Full warranty. Original product. Real after-sales support."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <BrandCard
              key={b.slug}
              slug={b.slug}
              name={b.name}
              rating={b.rating}
              warranty={b.warranty}
              about={b.about}
            />
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
