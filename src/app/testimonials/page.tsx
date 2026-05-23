import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { CTABanner } from "@/components/common/CTABanner";
import { testimonials } from "@/data/testimonials";

export const metadata = buildMetadata({
  title: "Customer Testimonials | Balaji Enterprises Solar Basti",
  description:
    "Read what 200+ rooftop solar customers in Basti, Khalilabad, Gorakhpur and Ayodhya say about Balaji Enterprises.",
  path: "/testimonials",
  keywords: ["solar reviews Basti", "solar customer reviews", ...baseKeywords],
});

export default function TestimonialsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Testimonials", href: "/testimonials" },
        ]}
      />
      <Section>
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What our solar customers say"
          description="Real reviews from homeowners, shopkeepers, schools and farms who chose Balaji Enterprises for their solar installation."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
