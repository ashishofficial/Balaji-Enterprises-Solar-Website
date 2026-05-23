import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/common/Hero";
import { images } from "@/lib/images";
import { Section, SectionHeading } from "@/components/common/Section";
import { ServiceCard } from "@/components/common/ServiceCard";
import { BrandCard } from "@/components/common/BrandCard";
import { FeatureGrid } from "@/components/common/FeatureGrid";
import { ProcessSteps } from "@/components/common/ProcessSteps";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { FAQAccordion } from "@/components/common/FAQAccordion";
import { ContactForm } from "@/components/common/ContactForm";
import { MapEmbed } from "@/components/common/MapEmbed";
import { CTABanner } from "@/components/common/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { locations } from "@/data/locations";
import { testimonials } from "@/data/testimonials";
import { homeFaqs } from "@/data/faqs";
import { posts } from "@/data/posts";
import { BlogCard } from "@/components/common/BlogCard";
import { buildMetadata, baseKeywords } from "@/lib/seo";
import { faqSchema, serviceSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";
import {
  IndianRupeeIcon,
  ShieldIcon,
  ZapIcon,
  TrendingUpIcon,
  CheckIcon,
  LeafIcon,
  UsersIcon,
  ClockIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@/components/icons";

export const metadata = buildMetadata({
  title: `Solar Panel Dealer in Basti | Rooftop Solar Installation | ${siteConfig.name}`,
  description:
    "Balaji Enterprises is the most trusted solar company in Basti, Uttar Pradesh. Authorised dealer of Adani, Tata, Waaree & UTL solar. Rooftop solar installation, subsidy support, AMC. Free site survey — call +91 94520 99320.",
  path: "/",
  keywords: baseKeywords,
});

const whyChooseUs = [
  {
    icon: ShieldIcon,
    title: "MNRE-Empanelled Vendor",
    description:
      "We install only MNRE-approved Tier-1 solar panels with full BIS/IEC certification — no grey market.",
  },
  {
    icon: IndianRupeeIcon,
    title: "Subsidy Done For You",
    description:
      "We file your PM Surya Ghar subsidy on the National Portal end-to-end so you actually get the ₹78,000.",
  },
  {
    icon: ZapIcon,
    title: "End-to-End Service",
    description:
      "Survey, design, structure, wiring, net-metering, commissioning, AMC — all under one roof.",
  },
  {
    icon: UsersIcon,
    title: "Local Basti Team",
    description:
      "Our installers and service team are based in Basti. We respond fast — usually same day.",
  },
];

const benefits = [
  {
    icon: IndianRupeeIcon,
    title: "Save up to ₹45,000 / year",
    description:
      "A 3 kW solar plant in Basti pays for itself in under 5 years and gives 20+ years of free electricity.",
  },
  {
    icon: ShieldIcon,
    title: "25-year warranty",
    description:
      "Tier-1 panels come with 12-year product + 25-year linear performance warranty.",
  },
  {
    icon: LeafIcon,
    title: "Clean & green",
    description:
      "A typical 3 kW system offsets 3+ tonnes of CO₂ annually — about 50 trees worth of impact.",
  },
  {
    icon: TrendingUpIcon,
    title: "Property value up",
    description:
      "Homes with rooftop solar fetch a higher resale price and easier home-loan top-ups.",
  },
];

const installSteps = [
  {
    title: "Free Site Survey",
    description:
      "Our engineer visits your home or shop in Basti to measure roof area, shadow profile and electrical load.",
  },
  {
    title: "Custom Design & Quote",
    description:
      "We share a transparent quote with panel layout, structure, inverter sizing and exact subsidy amount.",
  },
  {
    title: "Installation",
    description:
      "MCS-trained installers complete a clean, code-compliant install in 3-7 working days, including wiring.",
  },
  {
    title: "Net Metering & Commissioning",
    description:
      "We handle UPPCL net-metering application, inspection and commissioning so your meter spins backwards.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(homeFaqs),
          serviceSchema({
            name: "Solar Panel Installation in Basti",
            description: siteConfig.description,
            url: siteConfig.url,
            serviceType: "Rooftop Solar Installation",
          }),
        ]}
      />

      <Hero
        eyebrow="Authorised Solar Dealer · Basti"
        title={
          <>
            Solar Panel Dealer &<br />
            <span className="text-brand-700">Rooftop Installer in Basti</span>
          </>
        }
        subtitle="Cut your UPPCL bill by up to 90% with a rooftop solar system from Balaji Enterprises — Basti's trusted partner for Adani, Tata & Waaree solar panels. Subsidy support included."
        bullets={[
          "Govt. subsidy up to ₹78,000",
          "Tier-1 Adani / Tata / Waaree panels",
          "25-year panel warranty",
          "Free site survey across Basti",
          "EMI options available",
          "End-to-end installation & AMC",
        ]}
      />

      <Section className="!py-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "200+", label: "Solar plants installed" },
            { value: "1.2 MW+", label: "Capacity commissioned" },
            { value: "98%", label: "Customer satisfaction" },
            { value: "10+ yrs", label: "Local experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl lg:text-4xl font-extrabold text-brand-700">
                {stat.value}
              </p>
              <p className="mt-1 text-xs lg:text-sm text-slate-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              About Balaji Enterprises
            </p>
            <h2>Basti&apos;s most trusted name in rooftop solar</h2>
            <p className="mt-4 text-slate-600">
              Balaji Enterprises is a solar panel dealer and EPC company based in
              Bargadwa, Basti, serving customers across Uttar Pradesh since
              2018. We design, supply and install on-grid, off-grid and hybrid
              solar systems for homes, shops, factories, schools, hospitals and
              farms — backed by MNRE-empanelled vendor processes and authorised
              dealerships of leading brands.
            </p>
            <p className="mt-4 text-slate-600">
              From a 1 kW family-home setup in Walterganj to a 100 kW factory
              plant in Gorakhpur, we treat every project with the same
              engineering discipline: a clean site survey, an honest quote, a
              fast and tidy install, and a lifetime relationship for maintenance
              and upgrades. Our promise is simple — genuine products, fair
              pricing and zero shortcuts on safety.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {[
                "MNRE-approved Tier-1 panels only",
                "BIS, IEC & IS certified hardware",
                "Subsidy filing handled by us",
                "Hindi-friendly local support team",
                "On-call breakdown service in Basti",
                "Annual maintenance plans available",
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
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Read our story
              </Link>
              <Link href="/contact" className="btn-secondary">
                Visit our showroom
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-cardHover">
              <Image
                src={images.teamBasti.src}
                alt={images.teamBasti.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: ShieldIcon, label: "MNRE Vendor" },
                { icon: UsersIcon, label: "200+ Homes" },
                { icon: TrendingUpIcon, label: "1.2 MW+ Live" },
                { icon: ClockIcon, label: "Since 2018" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="rounded-xl bg-white p-4 flex flex-col items-center justify-center text-center shadow-card border border-slate-100"
                >
                  <b.icon
                    width={28}
                    height={28}
                    className="text-brand-600"
                  />
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {b.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="why-us">
        <SectionHeading
          eyebrow="Why Balaji Enterprises"
          title="The right partner for your solar journey in Basti"
          description="Hundreds of Basti families and businesses trust us because we treat solar like the 25-year investment it is — not a one-time sale."
        />
        <FeatureGrid features={whyChooseUs} />
      </Section>

      <Section id="services" className="bg-slate-50">
        <SectionHeading
          eyebrow="Our Solar Services"
          title="Complete solar solutions for Basti homes & businesses"
          description="From a 1 kW home setup to a 1 MW industrial plant, we cover every solar service you might need — under one roof."
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
        <div className="mt-10 text-center">
          <Link href="/services" className="btn-primary">
            View all services
            <ArrowRightIcon width={16} height={16} />
          </Link>
        </div>
      </Section>

      <Section id="brands">
        <SectionHeading
          eyebrow="Solar Brands We Supply"
          title="Authorised dealer of India's top solar brands"
          description="We only stock genuine, MNRE-approved, Tier-1 modules from manufacturers with proven 25-year reliability."
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

      <Section id="benefits" className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-700 text-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            Why Go Solar
          </p>
          <h2 className="text-white">
            Real benefits of installing solar in Basti
          </h2>
          <p className="mt-4 text-brand-50">
            Solar is no longer a luxury. With government subsidy and falling
            panel prices, a rooftop system in Basti pays for itself in 4-5 years
            and gives free electricity for the next 20.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/15"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-700">
                <b.icon width={24} height={24} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {b.title}
              </h3>
              <p className="mt-2 text-sm text-brand-50">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="process">
        <SectionHeading
          eyebrow="How It Works"
          title="Your solar installation in 4 simple steps"
          description="From the first phone call to the first unit of solar power flowing into your home — here's exactly what happens."
        />
        <ProcessSteps steps={installSteps} />
      </Section>

      <Section id="testimonials" className="bg-slate-50">
        <SectionHeading
          eyebrow="What Our Customers Say"
          title="Real reviews from real Basti customers"
          description="Hundreds of homeowners, shopkeepers and business owners have trusted Balaji Enterprises for their solar needs."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 6).map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/testimonials" className="btn-secondary">
            Read more reviews
          </Link>
        </div>
      </Section>

      <Section id="faqs">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Everything you wanted to know about rooftop solar in Basti"
          description="Still have questions? Call us at +91 94520 99320 or chat on WhatsApp — we're happy to explain in Hindi too."
        />
        <FAQAccordion faqs={homeFaqs} />
      </Section>

      <Section id="service-areas" className="bg-slate-50">
        <SectionHeading
          eyebrow="Where We Work"
          title="Solar installation across Basti & nearby districts"
          description="Based in Bargadwa, Basti, we deliver solar installation across eastern Uttar Pradesh."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card p-6">
            <div className="flex items-center gap-2 text-brand-700">
              <MapPinIcon />
              <h3 className="text-lg">Basti (HQ)</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Walterganj, Captainganj, Harraiya, Rudhauli, Bansi Road,
              Bargadwa, Habeli Khas
            </p>
          </div>
          {locations.map((l) => (
            <Link
              href={`/${l.slug}`}
              key={l.slug}
              className="card p-6 group hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-2 text-brand-700">
                <MapPinIcon />
                <h3 className="text-lg group-hover:text-brand-800">
                  {l.city}
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {l.distanceKm} km from Basti · {l.district} district
              </p>
              <p className="mt-2 text-xs text-slate-600">
                Covers: {l.landmarks.slice(0, 3).join(", ")}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      <Section id="blog">
        <SectionHeading
          eyebrow="Solar Knowledge Center"
          title="Latest from our blog"
          description="Helpful guides on solar subsidy, savings, brand comparisons and Indian solar policy."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/blog" className="btn-secondary">
            See all articles
          </Link>
        </div>
      </Section>

      <CTABanner />

      <Section id="contact" className="bg-slate-50">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Get your free rooftop solar quote today"
          description="Fill the form and we'll send a personalised quote with subsidy details on WhatsApp within 30 minutes."
        />
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <ContactForm />
          <div className="space-y-6">
            <MapEmbed />
            <div className="card p-6 space-y-3 text-sm">
              <h3 className="text-lg">Visit our office</h3>
              <p className="text-slate-600">{siteConfig.address.fullAddress}</p>
              <p className="text-slate-600">
                Open Monday–Saturday, 9 AM – 7 PM · Sunday 10 AM – 4 PM
              </p>
              <p className="text-slate-600">
                Phone: <a href={`tel:${siteConfig.phone}`} className="text-brand-700 font-semibold">{siteConfig.phoneDisplay}</a>
              </p>
              <p className="text-slate-600">
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-700 font-semibold"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
