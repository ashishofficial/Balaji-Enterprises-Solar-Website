import { siteConfig } from "./site-config";

export function localBusinessSchema() {
  const hours = siteConfig.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${h.day}`,
    opens: h.open,
    closes: h.close,
  }));

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectricalContractor", "Store"],
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/og-image.jpg`,
    logo: `${siteConfig.url}/logo.png`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: hours,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    areaServed: [
      { "@type": "City", name: "Basti" },
      { "@type": "City", name: "Khalilabad" },
      { "@type": "City", name: "Sant Kabir Nagar" },
      { "@type": "City", name: "Gorakhpur" },
      { "@type": "City", name: "Ayodhya" },
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solar Services",
      itemListElement: [
        "Rooftop Solar Installation",
        "Residential Solar Systems",
        "Commercial Solar Systems",
        "On-Grid Solar System",
        "Off-Grid Solar System",
        "Hybrid Solar System",
        "Solar Panel Maintenance",
        "Solar Inverter Installation",
        "Solar Battery Installation",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? "Solar Energy Service",
    provider: { "@id": `${siteConfig.url}#business` },
    areaServed: [
      { "@type": "City", name: "Basti" },
      { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
    ],
    url: input.url,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.href, siteConfig.url).toString(),
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    image: input.image ?? `${siteConfig.url}/og-image.jpg`,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    mainEntityOfPage: input.url,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };
}
