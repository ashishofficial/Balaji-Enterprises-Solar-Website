import Link from "next/link";
import Image from "next/image";
import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Hero } from "@/components/common/Hero";
import { FeatureGrid } from "@/components/common/FeatureGrid";
import { CTABanner } from "@/components/common/CTABanner";
import {
  ShieldIcon,
  UsersIcon,
  TrendingUpIcon,
  ZapIcon,
  CheckIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";

export const metadata = buildMetadata({
  title: "About Balaji Enterprises — Solar Company in Basti, UP",
  description:
    "Learn about Balaji Enterprises — a trusted solar EPC company based in Bargadwa, Basti. Since 2018 we've installed 1.2 MW+ rooftop solar across Uttar Pradesh.",
  path: "/about",
  keywords: ["about Balaji Enterprises", ...baseKeywords],
});

const values = [
  {
    icon: ShieldIcon,
    title: "Genuine products only",
    description:
      "We supply only MNRE-approved, Tier-1 panels with full IEC & BIS certification — never grey imports.",
  },
  {
    icon: UsersIcon,
    title: "Customer-first service",
    description:
      "From the first call to lifetime AMC, we treat every customer like family. Hindi-friendly, no jargon.",
  },
  {
    icon: TrendingUpIcon,
    title: "Engineering discipline",
    description:
      "Every install follows MNRE design codes — proper structure, earthing, surge protection and labelling.",
  },
  {
    icon: ZapIcon,
    title: "Long-term partnership",
    description:
      "Solar is a 25-year commitment. We're invested in being there for every upgrade, repair and call.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About Us", href: "/about" },
        ]}
      />
      <Hero
        eyebrow="About Us"
        title={<>Powering Basti with clean solar energy since 2018</>}
        subtitle="Balaji Enterprises is a family-run solar EPC business based in Bargadwa, Basti. We design and install rooftop solar systems for homes and businesses across Uttar Pradesh — with honesty, quality and zero shortcuts."
        showRating
        image={images.teamBasti}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="prose-balaji">
            <h2>Our Story</h2>
            <p>
              Balaji Enterprises was founded in {siteConfig.yearFounded} by a
              team of local entrepreneurs who saw a clear gap in Basti: solar
              technology was advancing rapidly, government subsidy schemes were
              expanding, but the typical Basti homeowner had no trusted local
              partner to guide them through it.
            </p>
            <p>
              We started small — a handful of residential rooftop projects in
              Bargadwa and Bansi Road. Today, we&apos;ve installed 200+
              rooftop solar plants across Basti, Sant Kabir Nagar, Gorakhpur
              and Ayodhya, with over 1.2 MW of solar capacity now generating
              clean electricity for Uttar Pradesh.
            </p>
            <p>
              What hasn&apos;t changed is our local commitment. Our office
              is in Bargadwa. Our installers live in Basti. When something
              needs attention, we&apos;re there — not weeks later, but the
              same day or the next.
            </p>
            <h2>What we do</h2>
            <p>
              We&apos;re a full-service solar EPC and dealership. That means
              we don&apos;t just sell panels — we engineer, install, paperwork
              and maintain the entire system. Specifically:
            </p>
            <ul>
              <li>Residential rooftop solar (1 kW – 10 kW)</li>
              <li>Commercial & industrial solar (10 kW – 1 MW)</li>
              <li>On-grid, off-grid and hybrid solar systems</li>
              <li>Solar inverter and battery sales & installation</li>
              <li>Net-metering and subsidy paperwork</li>
              <li>Annual Maintenance Contracts (AMC)</li>
              <li>Repair and upgrade services for any brand</li>
            </ul>
            <h2>Brands we&apos;re authorised for</h2>
            <p>
              We&apos;re authorised dealers and installation partners for the
              biggest names in Indian solar — Adani Solar, Tata Power Solar,
              Waaree Energies, Vikram Solar, Loom Solar and UTL. This means
              you get the manufacturer&apos;s full warranty, original product
              and proper after-sales support — every single time.
            </p>
          </div>
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-cardHover">
              <Image
                src={images.teamEngineers.src}
                alt={images.teamEngineers.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="card p-6">
              <h3 className="text-xl">Quick Facts</h3>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                {[
                  { k: "Founded", v: String(siteConfig.yearFounded) },
                  { k: "Head office", v: "Bargadwa, Basti" },
                  { k: "Installs", v: "200+" },
                  { k: "Capacity", v: "1.2 MW+" },
                  { k: "Team size", v: "12+" },
                  { k: "Service radius", v: "150 km" },
                ].map((f) => (
                  <div key={f.k}>
                    <dt className="text-xs text-slate-600 uppercase tracking-wide">
                      {f.k}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-slate-900">
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="card p-6">
              <h3 className="text-xl">Our promise</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "Free, no-pressure site survey",
                  "Transparent, written quote",
                  "MNRE-approved panels only",
                  "On-time installation",
                  "Full subsidy paperwork",
                  "Lifetime relationship",
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
              <Link href="/contact" className="btn-primary w-full mt-4">
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <SectionHeading
          eyebrow="What We Stand For"
          title="Our values"
          description="These aren't slogans on a wall — they're how we run every customer interaction at Balaji Enterprises."
        />
        <FeatureGrid features={values} />
      </Section>

      <CTABanner />
    </>
  );
}
