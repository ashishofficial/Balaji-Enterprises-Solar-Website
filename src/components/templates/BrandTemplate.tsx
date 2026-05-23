import Link from "next/link";
import Image from "next/image";
import { BrandHero } from "@/components/common/BrandHero";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { CTABanner } from "@/components/common/CTABanner";
import { BrandCard } from "@/components/common/BrandCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";
import { brands, type Brand } from "@/data/brands";
import { CheckIcon, ShieldIcon, StarIcon } from "@/components/icons";
import type { FAQ } from "@/data/faqs";
import { images } from "@/lib/images";

const brandFaqs = (b: Brand): FAQ[] => [
  {
    question: `Is ${b.name} a Tier-1 solar brand?`,
    answer: `Yes. ${b.name} is among the most established solar manufacturers in India and globally, with full BIS, IEC and MNRE approvals. We supply only original, sealed ${b.name} modules with manufacturer warranty papers.`,
  },
  {
    question: `What is the warranty on ${b.name} panels?`,
    answer: `${b.name} panels come with ${b.warranty}. Balaji Enterprises supports warranty claims and registers your product directly with the manufacturer at the time of installation.`,
  },
  {
    question: `How much does a 3 kW ${b.name} solar system cost in Basti?`,
    answer: `A 3 kW ${b.name} rooftop solar system in Basti typically costs ₹1.7–2.1 lakh installed. After the PM Surya Ghar subsidy of up to ₹78,000, the effective cost comes down to ₹95,000–₹1.3 lakh. Call us at ${siteConfig.phoneDisplay} for the exact quote based on your roof and panel choice.`,
  },
  {
    question: `Is ${b.name} good for rooftop solar in Uttar Pradesh weather?`,
    answer: `Yes. ${b.name} modules are designed for Indian conditions — high heat, humidity, dust and monsoon — with strong PID (Potential-Induced Degradation) resistance and proven low-light performance.`,
  },
  {
    question: `Are you an authorised ${b.name} dealer in Basti?`,
    answer: `Balaji Enterprises is a recognised installation partner for ${b.name} solar in Basti and eastern Uttar Pradesh. We supply original product, register your warranty with ${b.name} directly, and provide local after-sales support.`,
  },
];

export function BrandTemplate({ brand }: { brand: Brand }) {
  const faqs = brandFaqs(brand);
  const other = brands.filter((b) => b.slug !== brand.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `${brand.name} Dealer in Basti`,
            description: brand.metaDescription,
            url: `${siteConfig.url}/${brand.slug}`,
            serviceType: `${brand.name} Sale & Installation`,
          }),
          faqSchema(faqs),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Brands", href: "/brands" },
          { name: brand.name, href: `/${brand.slug}` },
        ]}
      />
      <BrandHero brand={brand} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 prose-balaji space-y-5">
            <h2>About {brand.fullName}</h2>
            <p>{brand.about}</p>

            <h2>Product range available in Basti</h2>
            <ul>
              {brand.productTypes.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <h2>Why choose {brand.name} for your rooftop?</h2>
            <ul>
              {brand.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <h2>{brand.name} solar warranty</h2>
            <p>
              All {brand.name} modules supplied by Balaji Enterprises come with{" "}
              <strong>{brand.warranty}</strong>. We register your warranty
              directly with {brand.name} at the time of installation so you
              don&apos;t need to chase paperwork later.
            </p>

            <h2>Installation, subsidy & support in Basti</h2>
            <p>
              When you buy {brand.name} solar through Balaji Enterprises, you
              get more than just panels. You get a complete service:
            </p>
            <ul>
              <li>Free site survey within Basti city</li>
              <li>Custom system design by our engineers</li>
              <li>MNRE-compliant structure & wiring</li>
              <li>Net-metering paperwork with UPPCL</li>
              <li>PM Surya Ghar subsidy filing</li>
              <li>Annual maintenance contract options</li>
              <li>Local on-call breakdown service</li>
            </ul>

            <h2>Authorised dealer note</h2>
            <p>
              Balaji Enterprises supplies and installs only genuine, sealed{" "}
              {brand.name} modules with serial numbers traceable to the
              manufacturer. We do not sell refurbished, returned or grey-market
              {" "}panels.
            </p>
          </div>

          <aside className="lg:col-span-1 lg:sticky lg:top-24 self-start space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
              <Image
                src={images.rooftop3kw.src}
                alt={`${brand.name} solar panels installed in Basti by Balaji Enterprises`}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl">{brand.name}</h3>
                <div className="flex items-center gap-1 text-sun-500">
                  <StarIcon width={16} height={16} />
                  <span className="font-semibold text-slate-900 text-sm">
                    {brand.rating.toFixed(1)} / 5
                  </span>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600">{brand.intro}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-sm">
                <p className="flex items-start gap-2">
                  <ShieldIcon
                    width={16}
                    height={16}
                    className="text-brand-600 mt-0.5 shrink-0"
                  />
                  {brand.warranty}
                </p>
              </div>
              <Link href="/contact" className="btn-primary w-full mt-4">
                Get {brand.name} quote
              </Link>
            </div>
            <div className="card p-6 bg-brand-50 border-brand-200">
              <h3 className="text-lg">Why us for {brand.name}?</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Genuine sealed product",
                  "Direct warranty registration",
                  "MNRE-compliant install",
                  "Subsidy paperwork handled",
                  "Local Basti support team",
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
          eyebrow="FAQs"
          title={`Common questions about ${brand.name} in Basti`}
        />
        <FAQAccordion faqs={faqs} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Other Brands"
          title="Compare with other solar brands we deal in"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {other.map((b) => (
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

      <CTABanner
        title={`Looking for a ${brand.name} dealer in Basti?`}
        description={`Get a genuine ${brand.name} solar quote with installation, subsidy and warranty support — all in one call.`}
      />
    </>
  );
}
