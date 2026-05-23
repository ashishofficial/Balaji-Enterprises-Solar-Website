import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { locations } from "@/data/locations";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/brands`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/testimonials`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const brandRoutes: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${base}/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...brandRoutes,
    ...locationRoutes,
    ...postRoutes,
  ];
}
