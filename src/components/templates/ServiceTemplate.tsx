import Link from "next/link";
import Image from "next/image";
import { ServiceHero } from "@/components/common/ServiceHero";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { CTABanner } from "@/components/common/CTABanner";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { ServiceCard } from "@/components/common/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";
import { testimonials } from "@/data/testimonials";
import { services, type Service } from "@/data/services";
import { iconMap, CheckIcon } from "@/components/icons";
import { type FAQ } from "@/data/faqs";
import { images, type ImageKey } from "@/lib/images";

const installSteps = [
  {
    title: "Free Site Survey",
    description:
      "Our engineer visits your roof in Basti to measure area, check shadow profile and your current electrical load.",
  },
  {
    title: "Custom Design & Quote",
    description:
      "We share a transparent quote with module layout, structure spec, inverter sizing and exact subsidy amount.",
  },
  {
    title: "Installation",
    description:
      "Our trained installers complete a clean, code-compliant install in 3-7 working days, including wiring.",
  },
  {
    title: "Net Metering & Commissioning",
    description:
      "We handle UPPCL net-metering, inspection and commissioning so your meter spins backwards.",
  },
];

const commonBenefits: string[] = [
  "MNRE-approved Tier-1 panels",
  "12-year product + 25-year performance warranty",
  "Free site survey across Basti",
  "Government subsidy paperwork handled",
  "Lifetime maintenance support",
  "EMI options up to 36 months",
];

const serviceFaqs = (service: Service): FAQ[] => {
  const base: FAQ[] = [
    {
      question: `How much does ${service.shortTitle.toLowerCase()} cost in Basti?`,
      answer: `${service.title} pricing depends on system size, brand and roof type. A typical 3 kW system costs ₹1.6–2 lakh, dropping to roughly ₹85,000–₹1.2 lakh after the PM Surya Ghar subsidy of up to ₹78,000. Larger systems offer better per-watt economics. Call +91 94520 99320 for a free, written quote.`,
    },
    {
      question: `How long does ${service.shortTitle.toLowerCase()} installation take?`,
      answer: `For residential systems up to 5 kW, installation typically completes in 3–7 working days. Commercial installations of 10 kW and above may take 2–4 weeks. Net-metering approval from UPPCL takes another 15–30 days.`,
    },
    {
      question: `Is subsidy available for ${service.shortTitle.toLowerCase()} in Uttar Pradesh?`,
      answer: `Yes — residential rooftop solar systems qualify for Central Financial Assistance under PM Surya Ghar Muft Bijli Yojana, up to ₹78,000. Balaji Enterprises handles the entire subsidy application end-to-end through the National Portal.`,
    },
    {
      question: `What is the warranty on ${service.shortTitle.toLowerCase()}?`,
      answer: `All Tier-1 panels we supply (Adani, Tata, Waaree, Vikram) come with a 12-year product warranty and 25-year linear performance warranty. Inverters typically have 5-10 year warranty depending on brand.`,
    },
    {
      question: `Do you offer ${service.shortTitle.toLowerCase()} outside Basti?`,
      answer: `Yes. We serve Basti district plus nearby Sant Kabir Nagar (Khalilabad, Mehdawal, Magahar), Gorakhpur, Ayodhya and Siddharthnagar. Free site survey within Basti city; small travel charges apply for nearby districts.`,
    },
  ];
  return base;
};

export function ServiceTemplate({ service }: { service: Service }) {
  const Icon = (iconMap as Record<string, React.ComponentType<{ width?: number; height?: number; className?: string }>>)[service.icon] ?? iconMap.sun;
  const faqs = serviceFaqs(service);
  const benefits = commonBenefits;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const heroImage = images[(service.image as ImageKey) ?? "heroOwner"] ?? images.heroOwner;
  const sidebarImage =
    service.image === "engineersHardhat" ? images.teamEngineers : images.engineersHardhat;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.metaDescription,
            url: `${siteConfig.url}/${service.slug}`,
            serviceType: service.shortTitle,
          }),
          faqSchema(faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.shortTitle, href: `/${service.slug}` },
        ]}
      />
      <ServiceHero
        eyebrow="Solar Service · Basti"
        title={<>{service.h1}</>}
        subtitle={service.intro}
        bullets={service.highlights}
        image={heroImage}
        iconKey={service.icon}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-balaji space-y-5">
            <h2>What is {service.title}?</h2>
            <p>
              {service.intro} At Balaji Enterprises, we&apos;ve been delivering{" "}
              {service.shortTitle.toLowerCase()} solutions across Basti, Sant
              Kabir Nagar, Gorakhpur and Ayodhya since {siteConfig.yearFounded}.
              Every project is designed by our in-house engineers using
              MNRE-approved Tier-1 modules and inverters — and backed by full
              manufacturer warranty.
            </p>
            <p>
              Choosing the right system isn&apos;t just about picking a brand —
              it&apos;s about matching panel wattage, inverter type and
              structure design to your specific roof, your specific load and
              your specific budget. We don&apos;t sell from a catalog; we design
              from your bill.
            </p>

            <h2>Why customers in Basti choose us for {service.shortTitle}</h2>
            <ul>
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <h2>Costs & Savings — Basti example</h2>
            <p>
              A typical Basti homeowner using around 350 units of UPPCL
              electricity a month pays roughly ₹2,800–₹3,200 in monthly bills. A
              3 kW {service.shortTitle.toLowerCase()} system generates around
              360–400 units of solar per month in Basti&apos;s climate —
              effectively cancelling out almost the entire bill.
            </p>
            <p>
              <strong>Indicative pricing:</strong> A 3 kW{" "}
              {service.shortTitle.toLowerCase()} costs roughly ₹1.6–2 lakh
              installed. After the PM Surya Ghar subsidy of ₹78,000, your net
              cost comes down to around ₹85,000–₹1.2 lakh. With monthly bill
              savings of ₹2,400+, the system pays for itself in just 4–5 years
              and continues delivering free electricity for the next 20+ years.
            </p>

            <h2>How {service.shortTitle} installation works</h2>
            <p>
              We follow a 4-step process for every project. You don&apos;t need
              to chase paperwork, run to UPPCL, or worry about subsidy forms —
              we handle it end-to-end.
            </p>
          </div>

          <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <Image
                src={sidebarImage.src}
                alt={sidebarImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <Icon width={28} height={28} />
              </div>
              <h3 className="mt-3 text-xl">Quick highlights</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {service.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <CheckIcon
                      width={16}
                      height={16}
                      className="text-brand-600 mt-0.5 shrink-0"
                      strokeWidth={3}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6 bg-brand-50 border-brand-200">
              <h3 className="text-lg">Get a free quote</h3>
              <p className="mt-2 text-sm text-slate-700">
                Tell us your roof size or recent UPPCL bill and we&apos;ll send
                you a tailored quote on WhatsApp within 30 minutes.
              </p>
              <Link href="/contact" className="btn-primary w-full mt-4">
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Our 4-step process"
          title={`How we install ${service.shortTitle} in Basti`}
          description="From the first phone call to the first unit of solar power — exactly what happens."
        />
        <ProcessSteps steps={installSteps} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Customer Stories"
          title={`Recent ${service.shortTitle} installations`}
          description="Real Basti customers, real systems, real savings."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="FAQs"
          title={`${service.shortTitle} questions answered`}
        />
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Explore more"
          title="Other solar services we offer"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((s) => (
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

      <CTABanner
        title={`Ready to install ${service.shortTitle} in Basti?`}
        description={`Talk to a Balaji Enterprises solar expert today for a free, no-obligation site survey and a written quote.`}
      />
    </>
  );
}
