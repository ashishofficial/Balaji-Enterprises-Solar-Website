import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { locations } from "@/data/locations";
import { posts } from "@/data/posts";

const getLastModified = (...paths: string[]) => {
  for (const filePath of paths) {
    try {
      return fs.statSync(filePath).mtime;
    } catch {
      continue;
    }
  }

  return new Date();
};

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/page.tsx")),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/about/page.tsx")),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/services`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/services/page.tsx")),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/brands`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/brands/page.tsx")),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/locations`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/locations/page.tsx")),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/gallery`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/gallery/page.tsx")),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/testimonials`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/testimonials/page.tsx")),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/faqs`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/faqs/page.tsx")),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/contact/page.tsx")),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: getLastModified(path.join(process.cwd(), "src/app/blog/page.tsx")),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/${s.slug}`,
    lastModified: getLastModified(
      path.join(process.cwd(), "src/data/services.ts"),
      path.join(process.cwd(), "src/app/[slug]/page.tsx")
    ),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const brandRoutes: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${base}/${b.slug}`,
    lastModified: getLastModified(
      path.join(process.cwd(), "src/data/brands.ts"),
      path.join(process.cwd(), "src/app/[slug]/page.tsx")
    ),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${base}/${l.slug}`,
    lastModified: getLastModified(
      path.join(process.cwd(), "src/data/locations.ts"),
      path.join(process.cwd(), "src/app/[slug]/page.tsx")
    ),
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
