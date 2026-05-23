import type { Metadata } from "next";
import { siteConfig } from "./site-config";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  image,
  noIndex,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const ogImage = image ?? siteConfig.ogImage;
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: new URL(ogImage, siteConfig.url).toString(),
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [new URL(ogImage, siteConfig.url).toString()],
    },
  };
}

export const baseKeywords = [
  "solar company in Basti",
  "solar panel dealer in Basti",
  "rooftop solar installation Basti",
  "solar installation Basti",
  "solar panel shop Basti",
  "solar inverter dealer Basti",
  "solar battery dealer Basti",
  "best solar company Basti",
  "solar subsidy Uttar Pradesh",
  "Adani solar dealer Basti",
  "Tata solar dealer Basti",
  "Waaree solar Basti",
];
