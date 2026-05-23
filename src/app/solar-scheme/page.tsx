import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { CTABanner } from "@/components/common/CTABanner";
import { images } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Government Solar Scheme in Basti | MNRE Subsidy Support",
  description:
    "Learn how Balaji Enterprises helps Basti homes and businesses apply for the government solar subsidy scheme, complete paperwork, and install rooftop solar systems.",
  path: "/solar-scheme",
  keywords: ["government solar scheme", "MNRE solar subsidy", "solar subsidy Basti", ...baseKeywords],
});

export default function SolarSchemePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Government Solar Scheme", href: "/solar-scheme" },
        ]}
      />
      <PageHero
        eyebrow="Government Solar Scheme"
        title="Get full support for MNRE solar subsidy applications in Basti"
        description="Balaji Enterprises helps you access government rooftop solar incentives, submit subsidy paperwork, and install the safest, most reliable solar system for your home or business."
        image={images.heroOwner}
        stats={[
          { value: "₹30,000+", label: "Potential residential savings" },
          { value: "3 steps", label: "Subsidy application process" },
          { value: "Local", label: "Basti-based support" },
        ]}
      />

      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="Government solar scheme guidance, from eligibility to commissioning"
          description="We guide every customer through the full subsidy process so you get the best solar system with minimal paperwork and no surprises."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Eligibility review",
              description:
                "We check your electricity bill, roof area and connection type to determine if you qualify for the MNRE solar subsidy program.",
            },
            {
              title: "Paperwork filing",
              description:
                "Our team prepares the application, gathers required documents and submits the subsidy claim on your behalf to the authorised solar channel partner.",
            },
            {
              title: "System installation",
              description:
                "Once subsidy approval is confirmed, we install your panels, inverter, earthing and net-metering system using approved brands and local workmanship."
            },
          ].map((item) => (
            <div key={item.title} className="card p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="prose-balaji">
            <h2>Why choose the government solar scheme?</h2>
            <p>
              The government solar subsidy helps make rooftop solar more affordable by lowering the upfront cost of panels, inverters, and installation. Balaji Enterprises ensures you take advantage of available incentives while still installing a high-quality system.
            </p>
            <ul>
              <li>MNRE-approved subsidy for residential and commercial systems</li>
              <li>Assistance with application, inspection and fund release</li>
              <li>Local Basti team for survey, installation and support</li>
              <li>Transparent pricing with subsidy benefits clearly explained</li>
            </ul>
            <h2>Who can apply?</h2>
            <p>
              Most homes, shops and small factories in Basti with a stable grid connection are eligible. We especially help customers in the following categories:
            </p>
            <ul>
              <li>Domestic rooftops with a sanctioned load of up to 10 kW</li>
              <li>Small commercial shops and offices</li>
              <li>Educational institutions, hospitals and guest houses</li>
              <li>Light industries and factories seeking lower energy bills</li>
            </ul>
            <h2>What we handle for you</h2>
            <p>
              From the first call to final commissioning, we manage the entire process so you can focus on the savings, not the paperwork.
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Complete eligibility check and subsidy estimate</li>
              <li>Prepare documents and submit application</li>
              <li>Follow up with authorities until approval is granted</li>
              <li>Install the solar system and complete net-metering</li>
            </ol>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-cardHover">
            <img
              src={images.rooftop3kw.src}
              alt={images.rooftop3kw.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
