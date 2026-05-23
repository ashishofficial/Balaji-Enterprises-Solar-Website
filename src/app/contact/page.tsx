import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ContactForm } from "@/components/common/ContactForm";
import { MapEmbed } from "@/components/common/MapEmbed";
import { siteConfig } from "@/lib/site-config";
import {
  PhoneIcon,
  WhatsAppIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons";

export const metadata = buildMetadata({
  title: "Contact Balaji Enterprises — Solar Dealer in Basti",
  description:
    "Get in touch with Balaji Enterprises for rooftop solar in Basti. Office in Bargadwa, Bansi Road. Call +91 94520 99320 or WhatsApp for a free site survey.",
  path: "/contact",
  keywords: ["contact solar dealer Basti", ...baseKeywords],
});

const contactCards = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    sub: "Mon-Sat 9 AM – 7 PM",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Chat Now",
    href: siteConfig.whatsappLink,
    sub: "Instant replies",
  },
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    sub: "Reply within 24 hrs",
  },
  {
    icon: MapPinIcon,
    label: "Visit Us",
    value: "Bansi Road, Bargadwa",
    href: siteConfig.mapLink,
    sub: "Basti, UP 272001",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />
      <Section className="bg-gradient-to-b from-brand-50 to-white">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Talk to Basti's most trusted solar team"
          description="Whether you need a free site survey, want a quote, or just have a question about solar — we're ready to help. Reach us any way you prefer."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="card p-6 group hover:-translate-y-1 transition-transform text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <c.icon width={24} height={24} />
              </div>
              <p className="mt-3 text-xs uppercase tracking-wider text-slate-600 font-semibold">
                {c.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900 group-hover:text-brand-700">
                {c.value}
              </p>
              <p className="mt-1 text-xs text-slate-600">{c.sub}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <div>
            <h2>Send us a message</h2>
            <p className="mt-3 text-slate-600">
              Fill the form and we&apos;ll reply on WhatsApp with a custom solar
              quote within 30 minutes during business hours.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6">
            <MapEmbed />
            <div className="card p-6 space-y-4">
              <div className="flex items-start gap-3">
                <ClockIcon className="text-brand-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base">Business Hours</h3>
                  <ul className="mt-2 text-sm text-slate-600 space-y-1">
                    {siteConfig.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between gap-4 max-w-[260px]"
                      >
                        <span>{h.day}</span>
                        <span>
                          {h.open} – {h.close}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
