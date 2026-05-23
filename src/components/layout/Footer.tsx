import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { locations } from "@/data/locations";
import {
  PhoneIcon,
  WhatsAppIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/icons";

const hardoiAddress =
  "Bansi Road, Badeban Rd, Bargadwa, Basti, Habeli Khas, Uttar Pradesh 272001";
const hardoiMapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  hardoiAddress
)}`;
const bastiAddress = siteConfig.address.fullAddress;
const bastiMapLink = siteConfig.mapLink;
const lucknowAddress =
  "1st Floor, Vivek Plaza, Vibhuti Khand, Gomti Nagar, Lucknow 226010";
const lucknowMapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  lucknowAddress
)}`;

export function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-100">
      <div className="container py-12 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <Logo dark />
          <p className="text-sm text-slate-100 max-w-md">
            Balaji Enterprises is a trusted solar panel dealer and installer in
            Basti, Uttar Pradesh. Authorised partner of leading brands like
            Adani, Tata, Waaree and UTL. End-to-end rooftop solar solutions for
            homes, shops and factories.
          </p>
          <div className="space-y-2 text-sm text-slate-100">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-slate-100 hover:text-sun-200"
            >
              <PhoneIcon width={16} height={16} className="text-brand-400" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-100 hover:text-sun-200"
            >
              <WhatsAppIcon width={16} height={16} className="text-[#25D366]" />
              WhatsApp Chat
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-slate-100 hover:text-sun-200"
            >
              <MailIcon width={16} height={16} className="text-brand-400" />
              {siteConfig.email}
            </a>
            <div className="space-y-3">



            </div>
            <p className="flex items-center gap-2 text-slate-100">
              <ClockIcon width={16} height={16} className="text-brand-400" />
              Mon-Sat: 9 AM – 7 PM · Sun: 10 AM – 4 PM
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-extrabold mb-4 uppercase tracking-wide">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-slate-100 hover:text-sun-200">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-extrabold mb-4 uppercase tracking-wide">
            Solar Brands
          </h4>
          <ul className="space-y-2 text-sm">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link href={`/${b.slug}`} className="text-slate-100 hover:text-sun-200">
                  {b.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-extrabold mb-4 uppercase tracking-wide">
            Service Areas
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-slate-100 hover:text-sun-200">
                Solar in Basti
              </Link>
            </li>
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}`} className="text-slate-100 hover:text-sun-200">
                  Solar in {l.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="container py-8 grid gap-6 sm:grid-cols-3 text-sm text-slate-100">
          {[
            {
              label: "Hardoi:",
              address: hardoiAddress,
              href: hardoiMapLink,
            },
            {
              label: "Basti:",
              address: bastiAddress,
              href: bastiMapLink,
            },
            {
              label: "Lucknow:",
              address: lucknowAddress,
              href: lucknowMapLink,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/10 bg-slate-950/80 py-3 px-4 transition hover:border-sun-200"
            >
              <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-wide text-white font-semibold mb-1">
                <MapPinIcon width={16} height={16} className="text-brand-400" />
                {item.label}
              </div>
              <p className="text-slate-300 leading-5">{item.address}</p>
            </a>
          ))}
        </div>

        <div className="container py-4 text-xs text-slate-100">
          Designed &amp; developed by{" "}
          <a
            href="https://codingclave.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-sun-200"
          >
            CodingClave Development LLP
          </a>
        </div>
      </div>
    </footer>
  );
}
