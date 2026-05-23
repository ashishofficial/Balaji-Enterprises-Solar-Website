"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import {
  PhoneIcon,
  WhatsAppIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { locations } from "@/data/locations";

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", dropdown: "services" as const },
  { href: "/solar-scheme", label: "Govt Solar Scheme" },
  { href: "/brands", label: "Brands", dropdown: "brands" as const },
  { href: "/locations", label: "Service Areas", dropdown: "locations" as const },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="bg-brand-700 text-white text-xs">
        <div className="container flex items-center justify-between py-1.5">
          <span className="hidden sm:inline">
            Authorised dealer of Adani · Tata · Waaree solar panels in Basti
          </span>
          <span className="sm:hidden">Solar Panel Dealer in Basti</span>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1 hover:text-sun-200"
            >
              <PhoneIcon width={14} height={14} />
              <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) =>
            item.dropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.dropdown!)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-md"
                >
                  {item.label}
                  <ChevronDownIcon width={14} height={14} />
                </Link>
                {openDropdown === item.dropdown && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-72 rounded-xl bg-white shadow-cardHover border border-slate-100 p-2">
                      {item.dropdown === "services" &&
                        services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/${s.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {s.shortTitle}
                          </Link>
                        ))}
                      {item.dropdown === "brands" &&
                        brands.map((b) => (
                          <Link
                            key={b.slug}
                            href={`/${b.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            {b.name}
                          </Link>
                        ))}
                      {item.dropdown === "locations" &&
                        locations.map((l) => (
                          <Link
                            key={l.slug}
                            href={`/${l.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                          >
                            Solar in {l.city}
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-700 rounded-md"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon width={16} height={16} />
            WhatsApp
          </a>
          <a href={`tel:${siteConfig.phone}`} className="btn-primary">
            <PhoneIcon width={16} height={16} />
            Call Now
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="container py-3 flex flex-col">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium text-slate-700 border-b border-slate-100 last:border-0"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-primary flex-1"
                onClick={() => setMobileOpen(false)}
              >
                <PhoneIcon width={16} height={16} />
                Call Now
              </a>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex-1"
                onClick={() => setMobileOpen(false)}
              >
                <WhatsAppIcon width={16} height={16} />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
