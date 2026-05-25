import Link from "next/link";
import Image from "next/image";
import { BrandMarquee } from "@/components/common/BrandMarquee";
import { ContactForm } from "@/components/common/ContactForm";
import { CTABanner } from "@/components/common/CTABanner";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { FeatureGrid } from "@/components/common/FeatureGrid";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { Section, SectionHeading } from "@/components/common/Section";
import { ServiceCard } from "@/components/common/ServiceCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import type { FAQ } from "@/data/faqs";
import { images } from "@/lib/images";
import { faqSchema, serviceSchema } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  IndianRupeeIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersIcon,
  WhatsAppIcon,
  ZapIcon,
} from "@/components/icons";

const hardoi = {
  phone: "+918874215555",
  phoneDisplay: "+91 88742 15555",
  whatsapp: "918874215555",
  whatsappLink: "https://wa.me/918874215555",
  address: "Nourang Market, Shahjahanpur Road, Hardoi - 241001",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Nourang%20Market%2C%20Shahjahanpur%20Road%2C%20Hardoi%20-%20241001",
};

const hardoiAreas = [
  "Nourang Market",
  "Shahjahanpur Road",
  "Hardoi Railway Station",
  "Numaish Chauraha",
  "Sandila",
  "Shahabad",
  "Bilgram",
  "Sandi",
  "Pihani",
  "Mallawan",
  "Beniganj",
  "Kachhauna",
];

const hardoiFaqs: FAQ[] = [
  {
    question: "Which is the best solar company in Hardoi?",
    answer:
      "Balaji Enterprises provides complete rooftop solar installation in Hardoi with Tier-1 panels, subsidy paperwork, net metering support and local service from Nourang Market, Shahjahanpur Road. Call +91 88742 15555 for a site survey.",
  },
  {
    question: "Do you have a local office in Hardoi?",
    answer:
      "Yes. Our Hardoi address is Nourang Market, Shahjahanpur Road, Hardoi - 241001. Customers can call, WhatsApp or visit for rooftop solar, inverter, battery and maintenance support.",
  },
  {
    question: "Is solar subsidy available in Hardoi?",
    answer:
      "Yes. Eligible residential customers in Hardoi can apply for PM Surya Ghar subsidy. We help with the National Portal application, vendor process, inspection, net metering and subsidy follow-up.",
  },
  {
    question: "How much does a 3 kW solar system cost in Hardoi?",
    answer:
      "A 3 kW rooftop solar system in Hardoi usually depends on panel brand, inverter, structure height and roof condition. Most residential systems fall around Rs. 1.6-2 lakh before subsidy, with final pricing confirmed after site survey.",
  },
  {
    question: "Which areas of Hardoi do you serve?",
    answer:
      "We serve Hardoi city plus nearby areas including Shahjahanpur Road, Numaish Chauraha, Sandila, Shahabad, Bilgram, Sandi, Pihani, Mallawan, Beniganj and Kachhauna.",
  },
  {
    question: "Do you provide AMC and cleaning for existing solar plants in Hardoi?",
    answer:
      "Yes. We provide solar panel cleaning, inverter checks, wiring inspection, generation troubleshooting and annual maintenance contracts for residential and commercial solar plants in Hardoi.",
  },
];

const whyHardoi = [
  {
    icon: MapPinIcon,
    title: "Hardoi Office",
    description:
      "Visit us at Nourang Market, Shahjahanpur Road for local solar advice, quotation and after-sales support.",
  },
  {
    icon: ShieldIcon,
    title: "Genuine Solar Brands",
    description:
      "We supply MNRE-approved panels, certified inverters and safe structure material for long-term rooftop performance.",
  },
  {
    icon: IndianRupeeIcon,
    title: "Subsidy Guidance",
    description:
      "Residential customers get help with PM Surya Ghar subsidy, paperwork, inspection and net metering steps.",
  },
  {
    icon: UsersIcon,
    title: "Local Service Team",
    description:
      "Hardoi customers can call the local number for survey, maintenance, inverter checks and system support.",
  },
];

const hardoiBenefits = [
  {
    icon: ZapIcon,
    title: "Lower UPPCL bills",
    description:
      "A correctly sized rooftop solar plant can reduce monthly electricity bills for homes, shops and schools in Hardoi.",
  },
  {
    icon: TrendingUpIcon,
    title: "Better long-term savings",
    description:
      "Solar protects you from future tariff increases while generating power from your own roof for 20+ years.",
  },
  {
    icon: ShieldIcon,
    title: "25-year panel warranty",
    description:
      "Tier-1 solar panels include long performance warranties, with installation support from Balaji Enterprises.",
  },
  {
    icon: ClockIcon,
    title: "Fast local response",
    description:
      "A local Hardoi contact makes survey, service visits and AMC easier than dealing with distant installers.",
  },
];

const hardoiSteps = [
  {
    title: "Call or WhatsApp",
    description:
      "Share your bill, roof photo and location in Hardoi on WhatsApp or call +91 88742 15555.",
  },
  {
    title: "Hardoi Site Survey",
    description:
      "Our team checks roof area, shadow, structure need, sanctioned load and consumer details.",
  },
  {
    title: "Design and Quote",
    description:
      "You get a clear quote with system size, panel brand, inverter, structure, subsidy estimate and timeline.",
  },
  {
    title: "Install and Support",
    description:
      "We install the plant, support net metering and stay available for AMC, cleaning and troubleshooting.",
  },
];

export const metadata = buildMetadata({
  title:
    "Solar Company in Hardoi | Rooftop Solar Installer & Dealer in Hardoi",
  description:
    "Balaji Enterprises is a solar company in Hardoi with local office at Nourang Market, Shahjahanpur Road. Rooftop solar installation, subsidy, net metering, AMC and solar panel dealer support. Call +91 88742 15555.",
  path: "/solar-company-hardoi",
  keywords: [
    "solar company in Hardoi",
    "solar panel dealer in Hardoi",
    "rooftop solar installation Hardoi",
    "solar installer Hardoi",
    "solar subsidy Hardoi",
    "solar panel shop Hardoi",
    "solar inverter dealer Hardoi",
    "best solar company Hardoi",
    "Hardoi solar company",
    "solar AMC Hardoi",
  ],
});

export default function HardoiLandingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Solar Panel Installation in Hardoi",
            description:
              "Rooftop solar installation, solar subsidy paperwork, net metering and AMC services in Hardoi by Balaji Enterprises.",
            url: `${siteConfig.url}/solar-company-hardoi`,
            serviceType: "Rooftop Solar Installation",
          }),
          faqSchema(hardoiFaqs),
        ]}
      />

      <section className="relative overflow-hidden bg-brand-950 text-white">
        <Image
          src={images.rooftopArrayTeam.src}
          alt="Rooftop solar installation service in Hardoi by Balaji Enterprises"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,22,0.9)_0%,rgba(16,30,59,0.72)_52%,rgba(16,30,59,0.32)_100%)]"
        />
        <div className="container relative py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sun-100 backdrop-blur">
              <MapPinIcon width={12} height={12} />
              Local Solar Company in Hardoi
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white">
              Rooftop solar installation in Hardoi with local support
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-100">
              Balaji Enterprises installs on-grid, off-grid and hybrid solar
              systems for homes, shops, schools and businesses across Hardoi.
              Visit our local office at Nourang Market, Shahjahanpur Road.
            </p>
            <ul className="mt-7 grid gap-2 sm:grid-cols-2 max-w-2xl">
              {[
                "Hardoi office and local phone support",
                "PM Surya Ghar subsidy assistance",
                "Tier-1 Adani, Tata, Waaree panels",
                "UPPCL net metering support",
                "Residential and commercial solar",
                "AMC, cleaning and troubleshooting",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white backdrop-blur"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sun-400 text-brand-950">
                    <CheckIcon width={12} height={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${hardoi.phone}`} className="btn-gold">
                <PhoneIcon width={16} height={16} />
                Call {hardoi.phoneDisplay}
              </a>
              <a
                href={hardoi.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon width={16} height={16} />
                WhatsApp Hardoi
              </a>
              <a
                href={hardoi.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                <MapPinIcon width={16} height={16} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section className="!py-8 bg-brand-950 text-white">
        <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Hardoi", "Local service city"],
            ["241001", "Primary pincode"],
            ["25 yrs", "Panel performance warranty"],
            ["3-10 kW", "Popular home systems"],
          ].map(([value, label]) => (
            <div key={label} className="bg-brand-950/80 px-5 py-6">
              <p className="font-display text-3xl lg:text-4xl font-extrabold text-sun-300">
                {value}
              </p>
              <p className="mt-1 text-xs lg:text-sm text-slate-200">
                {label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <BrandMarquee />

      <Section id="about-hardoi" className="bg-gradient-to-b from-slate-50 to-white">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              Solar Dealer in Hardoi
            </p>
            <h2>Balaji Enterprises Hardoi branch for solar panels and service</h2>
            <p className="mt-4 text-slate-600">
              The Hardoi page now has one clear purpose: help customers looking
              for a solar company in Hardoi find Balaji Enterprises quickly,
              understand our local service, and call the correct Hardoi number.
              We support rooftop solar from first survey to installation,
              subsidy documentation, net metering and after-sales maintenance.
            </p>
            <p className="mt-4 text-slate-600">
              Our local address is{" "}
              <a
                href={hardoi.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 hover:text-brand-800"
              >
                {hardoi.address}
              </a>
              . Customers from Hardoi city, Shahjahanpur Road, Sandila,
              Shahabad, Bilgram, Sandi and nearby areas can contact us for
              residential solar, commercial solar, inverter-battery systems and
              AMC support.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "Solar panel dealer in Hardoi",
                "Rooftop solar installer in Hardoi",
                "Subsidy and net metering support",
                "On-grid, off-grid and hybrid systems",
                "Solar inverter and battery guidance",
                "Cleaning, repair and AMC services",
              ].map((point) => (
                <p
                  key={point}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <CheckIcon
                    width={16}
                    height={16}
                    className="text-brand-600 mt-0.5 shrink-0"
                  />
                  {point}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-cardHover">
              <Image
                src={images.heroGPS.src}
                alt="Solar installation team serving Hardoi customers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="card p-6">
              <div className="flex items-center gap-2 text-brand-700">
                <MapPinIcon />
                <h3 className="text-lg">Hardoi Office</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{hardoi.address}</p>
              <p className="mt-3 text-sm text-slate-600">
                Phone:{" "}
                <a
                  href={`tel:${hardoi.phone}`}
                  className="font-semibold text-brand-700 hover:text-brand-800"
                >
                  {hardoi.phoneDisplay}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="why-hardoi" className="bg-white">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for Hardoi customers, not just generic UP enquiries"
          description="The page highlights local address, local phone number, Hardoi areas, subsidy process and services so search engines and customers understand this is a dedicated Hardoi landing page."
        />
        <FeatureGrid features={whyHardoi} />
      </Section>

      <Section id="services-hardoi" className="bg-brand-50">
        <SectionHeading
          eyebrow="Solar Services in Hardoi"
          title="Complete solar solutions for Hardoi homes and businesses"
          description="Choose the right system type based on electricity bill, roof area, backup need and subsidy eligibility."
          className="lg:max-w-5xl"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.title.replaceAll("Basti", "Hardoi")}
              description={service.intro.replaceAll("Basti", "Hardoi")}
              icon={service.icon}
            />
          ))}
        </div>
      </Section>

      <Section id="benefits-hardoi" className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700 text-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Why Go Solar in Hardoi
          </p>
          <h2 className="text-white">
            Rooftop solar makes sense for Hardoi electricity users
          </h2>
          <p className="mt-4 text-brand-50">
            Hardoi homes, shops, schools and commercial buildings can use solar
            to reduce monthly bills, qualify for subsidy where eligible, and
            create a long-term power asset on the roof.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hardoiBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/15"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-700">
                <benefit.icon width={24} height={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-brand-50">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="areas-hardoi" className="bg-white">
        <SectionHeading
          eyebrow="Areas We Serve"
          title="Solar installation across Hardoi district"
          description="We serve Hardoi city and nearby towns for survey, installation, subsidy paperwork and maintenance."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hardoiAreas.map((area) => (
            <div key={area} className="card p-5">
              <div className="flex items-center gap-2 text-brand-700">
                <MapPinIcon width={18} height={18} />
                <h3 className="text-base">{area}</h3>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="process-hardoi" className="bg-sun-50/60">
        <SectionHeading
          eyebrow="How It Works"
          title="How we install solar in Hardoi"
          description="A clear process from enquiry to commissioning, with local follow-up after installation."
        />
        <ProcessSteps steps={hardoiSteps} />
      </Section>

      <Section id="faqs-hardoi" className="bg-white">
        <SectionHeading
          eyebrow="Hardoi Solar FAQs"
          title="Common questions about solar installation in Hardoi"
          description={
            <>
              Need a quick answer? Call{" "}
              <a
                href={`tel:${hardoi.phone}`}
                className="font-semibold text-brand-700 hover:text-brand-800"
              >
                {hardoi.phoneDisplay}
              </a>{" "}
              or message us on{" "}
              <a
                href={hardoi.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-700 hover:text-brand-800"
              >
                WhatsApp
              </a>
              .
            </>
          }
          className="lg:max-w-5xl"
        />
        <FAQAccordion faqs={hardoiFaqs} />
      </Section>

      <CTABanner
        title="Ready for rooftop solar in Hardoi?"
        description="Talk to the Hardoi team at Balaji Enterprises. Share your bill and roof details for a practical solar quote."
        phone={hardoi.phone}
        whatsappLink={hardoi.whatsappLink}
      />

      <Section id="contact-hardoi" className="bg-gradient-to-b from-slate-50 to-brand-50">
        <SectionHeading
          eyebrow="Contact Hardoi Branch"
          title="Get a Hardoi solar quote"
          description="Fill the form and it will open WhatsApp to the Hardoi number with your details."
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <ContactForm
            className="h-full"
            defaultLocation="Hardoi"
            callPhone={hardoi.phone}
            phoneDisplay={hardoi.phoneDisplay}
            whatsappNumber={hardoi.whatsapp}
          />
          <div className="grid h-full gap-6">
            <div className="card p-6 space-y-3 text-sm">
              <h3 className="text-lg">Visit Balaji Enterprises Hardoi</h3>
              <p className="text-slate-600">
                <a
                  href={hardoi.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-700 hover:text-brand-800"
                >
                  {hardoi.address}
                </a>
              </p>
              <p className="text-slate-600">
                Phone:{" "}
                <a
                  href={`tel:${hardoi.phone}`}
                  className="text-brand-700 font-semibold"
                >
                  {hardoi.phoneDisplay}
                </a>
              </p>
              <p className="text-slate-600">
                Main Basti office:{" "}
                <Link href="/" className="text-brand-700 font-semibold">
                  Balaji Enterprises Basti
                </Link>
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg">Best pages to compare before calling</h3>
              <div className="mt-4 grid gap-3">
                {[
                  ["Rooftop Solar", "/rooftop-solar-installation-basti"],
                  ["On-Grid Solar", "/on-grid-solar-system-basti"],
                  ["Solar AMC", "/solar-panel-maintenance-basti"],
                ].map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:border-brand-300 hover:text-brand-700"
                  >
                    {label}
                    <ArrowRightIcon width={16} height={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
