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
              <div>
                <h5 className="text-white text-xs font-semibold mb-1 uppercase tracking-wide">Hardoi</h5>
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-slate-100 hover:text-sun-200"
                >
                  <MapPinIcon
                    width={16}
                    height={16}
                    className="text-brand-400 mt-0.5 shrink-0"
                  />
                  <span>{siteConfig.address.fullAddress}</span>
                </a>
              </div>

              <div>
                <h5 className="text-white text-xs font-semibold mb-1 uppercase tracking-wide">Lucknow</h5>
                <a
                  href={lucknowMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-slate-100 hover:text-sun-200"
                >
                  <MapPinIcon
                    width={16}
                    height={16}
                    className="text-brand-400 mt-0.5 shrink-0"
                  />
                  <span>{lucknowAddress}</span>
                </a>
              </div>
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
          <h4 className="text-white text-sm font-extrabold mt-6 mb-3 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-slate-100 hover:text-sun-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-slate-100 hover:text-sun-200">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-slate-100 hover:text-sun-200">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="text-slate-100 hover:text-sun-200">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-100 hover:text-sun-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-100">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-center">
            Solar Panel Dealer in Basti · Rooftop Solar Installer · Uttar Pradesh
          </p>
          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://codingclave.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-sun-200 transition-colors"
            >
              CodingClave Development LLP
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
