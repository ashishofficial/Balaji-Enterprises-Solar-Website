import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { CTABanner } from "@/components/common/CTABanner";
import { testimonials } from "@/data/testimonials";
import { images } from "@/lib/images";

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
      <PageHero
        eyebrow="Customer Reviews"
        title="Real feedback from solar customers across Basti"
        description="Homeowners, shopkeepers, schools and farms share why they chose Balaji Enterprises for rooftop solar installation and service."
        image={images.customerRooftop}
        stats={[
          { value: "200+", label: "Customers served" },
          { value: "98%", label: "Satisfaction rate" },
          { value: "Local", label: "Basti support team" },
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
