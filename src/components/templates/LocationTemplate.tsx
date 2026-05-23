import Link from "next/link";
import Image from "next/image";
import { LocationHero } from "@/components/common/LocationHero";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { CTABanner } from "@/components/common/CTABanner";
import { ServiceCard } from "@/components/common/ServiceCard";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { type Location } from "@/data/locations";
import { CheckIcon, MapPinIcon } from "@/components/icons";
import type { FAQ } from "@/data/faqs";
import { images } from "@/lib/images";

const locationFaqs = (l: Location): FAQ[] => [
  {
    question: `Do you install rooftop solar in ${l.city}?`,
    answer: `Yes. Balaji Enterprises regularly installs rooftop solar systems in ${l.city}. We&apos;re ${l.distanceKm} km away in Basti and can be on-site for a free survey within 24-48 hours of your call.`,
  },
  {
    question: `What does a 3 kW solar system cost in ${l.city}?`,
    answer: `A 3 kW rooftop solar system in ${l.city} costs roughly ₹1.6-2 lakh installed, with the same Tier-1 brands and MNRE approvals as our Basti installations. After the PM Surya Ghar subsidy of ₹78,000, your effective cost is around ₹85,000-₹1.2 lakh.`,
  },
  {
    question: `Is government solar subsidy available in ${l.city}?`,
    answer: `Yes. ${l.city} residents qualify for the PM Surya Ghar Muft Bijli Yojana subsidy of up to ₹78,000 for residential rooftop solar. We file the entire subsidy application for you through the National Portal.`,
  },
  {
    question: `Will my UPPCL connection in ${l.city} support net metering?`,
    answer: `Yes. UPPCL provides net-metering across ${l.district} district including ${l.city}. We handle the net-metering application, inspection and approvals end-to-end so you get credited for surplus solar export.`,
  },
  {
    question: `Do you charge extra to install solar in ${l.city}?`,
    answer: `For ${l.city} installations there&apos;s a nominal travel charge for the site survey, which is adjusted against your final order. Installation pricing is the same as Basti — no hidden markup based on location.`,
  },
];

export function LocationTemplate({ location }: { location: Location }) {
  const faqs = locationFaqs(location);
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Solar Installation in ${location.city}`,
            description: location.metaDescription,
            url: `${siteConfig.url}/${location.slug}`,
            serviceType: "Rooftop Solar Installation",
          }),
          faqSchema(faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/locations" },
          { name: location.city, href: `/${location.slug}` },
        ]}
      />
      <LocationHero location={location} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-balaji space-y-5">
            <h2>Solar in {location.city} — what to expect</h2>
            <p>
              {location.city} sits in {location.district} district of Uttar
              Pradesh, an area with excellent solar irradiance (around 5.5
              kWh/m²/day on average). A standard 3 kW rooftop solar system in{" "}
              {location.city} generates approximately 4,200-4,500 units of
              electricity per year — enough to cancel out the entire UPPCL bill
              for most households.
            </p>
            <p>
              Balaji Enterprises is based in Bargadwa, Basti — just{" "}
              {location.distanceKm} km from {location.city}. We&apos;ve been
              installing rooftop solar in {location.district} district for
              years, with installs in {location.landmarks.slice(0, 3).join(", ")}{" "}
              and many surrounding villages.
            </p>

            <h2>What we offer in {location.city}</h2>
            <ul>
              <li>Residential rooftop solar (1 kW to 10 kW)</li>
              <li>Commercial and industrial solar (10 kW to 1 MW)</li>
              <li>On-grid systems with UPPCL net metering</li>
              <li>Off-grid solar with battery backup</li>
              <li>Hybrid solar for uninterrupted power</li>
              <li>Solar inverter and battery sale & installation</li>
              <li>Annual Maintenance Contracts (AMC)</li>
            </ul>

            <h2>Solar brands available in {location.city}</h2>
            <p>
              We supply all Tier-1 Indian solar brands in {location.city}:{" "}
              <Link href="/adani-solar-dealer-basti">Adani Solar</Link>,{" "}
              <Link href="/tata-solar-dealer-basti">Tata Power Solar</Link>,{" "}
              <Link href="/waaree-solar-basti">Waaree</Link>,{" "}
              <Link href="/vikram-solar-basti">Vikram Solar</Link>,{" "}
              <Link href="/loom-solar-basti">Loom Solar</Link> and{" "}
              <Link href="/uti-solar-basti">UTL</Link>. All come with manufacturer
              warranty and original product, registered directly with the brand.
            </p>

            <h2>Subsidy & paperwork for {location.city} residents</h2>
            <p>
              {location.city} households qualify for Central Financial
              Assistance (CFA) of up to ₹78,000 under PM Surya Ghar Muft Bijli
              Yojana. We handle the entire process — National Portal
              application, vendor selection, system installation, inspection,
              and final subsidy disbursal to your bank account.
            </p>

            <h2>How quickly can you start in {location.city}?</h2>
            <p>
              Once you call us at{" "}
              <a href={`tel:${siteConfig.phone}`}>
                <strong>{siteConfig.phoneDisplay}</strong>
              </a>{" "}
              or send a{" "}
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp message
              </a>
              , we typically schedule a free site
              survey in {location.city} within 24-48 hours. Installation begins
              7-10 days later, depending on roof preparation and material
              delivery. The complete process from your first call to
              commissioning takes roughly 3-4 weeks.
            </p>
          </div>

          <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <Image
                src={images.heroGPS.src}
                alt={`Rooftop solar installation near ${location.city}, ${location.district} district`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <MapPinIcon width={28} height={28} />
              </div>
              <h3 className="mt-3 text-xl">{location.city}</h3>
              <p className="mt-2 text-sm text-slate-600">
                {location.district} district, Uttar Pradesh
              </p>
              <dl className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-sm">
                <div className="flex justify-between gap-2">
                  <dt className="text-slate-600">Distance from Basti</dt>
                  <dd className="font-medium text-slate-900">
                    {location.distanceKm} km
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-600 mb-1">Pincodes served</dt>
                  <dd className="font-medium text-slate-900">
                    {location.pincodes.join(", ")}
                  </dd>
                </div>
                {location.address && (
                  <div>
                    <dt className="text-slate-600 mb-1">Local address</dt>
                    <dd>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          location.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-brand-700 hover:text-brand-800"
                      >
                        {location.address}
                      </a>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-slate-600 mb-1">Major areas</dt>
                  <dd className="font-medium text-slate-900">
                    {location.landmarks.join(", ")}
                  </dd>
                </div>
              </dl>
              <Link href="/contact" className="btn-primary w-full mt-4">
                Book free survey
              </Link>
            </div>
            <div className="card p-6 bg-brand-50 border-brand-200">
              <h3 className="text-lg">Why us in {location.city}?</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Local team, fast on-site",
                  "Same Basti pricing",
                  "Tier-1 brands only",
                  "Subsidy paperwork done",
                  "AMC available locally",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckIcon
                      width={16}
                      height={16}
                      className="text-brand-600 mt-0.5 shrink-0"
                      strokeWidth={3}
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="Our Solar Services"
          title={`Solar services available in ${location.city}`}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s) => (
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

      <Section>
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Real solar customers from across the region"
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
          title={`Solar in ${location.city} — your questions answered`}
        />
        <FAQAccordion faqs={faqs} />
      </Section>

      <CTABanner
        title={`Ready for rooftop solar in ${location.city}?`}
        description={`Talk to Balaji Enterprises — Basti&apos;s most trusted solar installer. Free site survey, subsidy paperwork and warranty support, all in one call.`}
      />
    </>
  );
}
