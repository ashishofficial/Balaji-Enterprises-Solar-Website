import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { CTABanner } from "@/components/common/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/jsonld";
import { homeFaqs } from "@/data/faqs";
import { images } from "@/lib/images";
import { siteConfig } from "@/lib/site-config";

const extraFaqs = [
  {
    question: "Do you offer EMI options for rooftop solar in Basti?",
    answer:
      "Yes. We've partnered with Bajaj Finserv, Tata Capital and select PSU banks to offer no-cost or low-EMI options for rooftop solar in Basti. EMIs start as low as Rs. 2,000/month for a 3 kW residential system.",
  },
  {
    question: "What documents are needed for solar subsidy in UP?",
    answer:
      "For PM Surya Ghar subsidy you'll need: Aadhaar card, latest electricity bill, bank account details, property ownership proof (Khatauni or registry), and a passport-size photo. We help compile and submit everything through the National Portal.",
  },
  {
    question: "Will my rooftop be damaged by solar installation?",
    answer:
      "No. We use a non-penetrating mounting structure for most roofs, or a minimal-penetration approach with proper waterproofing where needed. All installations follow MNRE structural guidelines.",
  },
  {
    question: "How much roof area is needed for a 3 kW solar plant?",
    answer:
      "Approximately 200-250 sq ft (about 25 sqm) of unshaded roof area is needed for a 3 kW system using standard 380-440 W mono PERC panels.",
  },
  {
    question: "Do you provide solar AMC for systems not installed by you?",
    answer:
      "Yes. Our AMC and repair service works on all brands and all installers, even if your original installer is no longer available. We can take over maintenance for any existing rooftop solar plant.",
  },
];

const allFaqs = [...homeFaqs, ...extraFaqs];

export const metadata = buildMetadata({
  title: "Solar FAQs - Rooftop Solar in Basti, UP",
  description:
    "Answers to common questions about rooftop solar in Basti: cost, subsidy, brands, warranty, EMI, AMC and more.",
  path: "/faqs",
  keywords: ["solar FAQ Basti", "rooftop solar questions", ...baseKeywords],
});

export default function FAQsPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "FAQs", href: "/faqs" },
        ]}
      />
      <PageHero
        eyebrow="Solar FAQs"
        title="Straight answers before you invest in solar"
        description="Understand costs, subsidy, roof area, EMI, net metering, warranty and maintenance before installing rooftop solar in Basti."
        image={images.teamEngineers}
        stats={[
          { value: "Cost", label: "Pricing and payback" },
          { value: "Subsidy", label: "PM Surya Ghar help" },
          { value: "AMC", label: "Long-term support" },
        ]}
      />
      <Section>
        <SectionHeading
          eyebrow="FAQs"
          title="Your solar questions, answered"
          description={
            <>
              Still confused? Call us at{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-semibold text-brand-700 hover:text-brand-800"
              >
                {siteConfig.phoneDisplay}
              </a>{" "}
              - our Hindi-speaking team is happy to explain anything.
            </>
          }
        />
        <FAQAccordion faqs={allFaqs} />
      </Section>
      <CTABanner />
    </>
  );
}
