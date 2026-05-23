import { buildMetadata, baseKeywords } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/common/Section";
import { PageHero } from "@/components/common/PageHero";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BlogCard } from "@/components/common/BlogCard";
import { CTABanner } from "@/components/common/CTABanner";
import { posts } from "@/data/posts";
import { images } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Solar Blog — Subsidy, Savings, Brand Reviews | Balaji Enterprises",
  description:
    "Read in-depth guides on solar subsidy in UP, brand reviews, on-grid vs off-grid systems, savings calculators and rooftop solar tips for Basti.",
  path: "/blog",
  keywords: ["solar blog India", "solar guide UP", ...baseKeywords],
});

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      <PageHero
        eyebrow="Solar Knowledge Center"
        title="Practical solar guides for Indian homes and businesses"
        description="Clear, local advice on subsidy, savings, brand selection, system types and rooftop solar decisions for Basti and Uttar Pradesh."
        image={images.rooftop3kw}
        stats={[
          { value: "5", label: "Detailed guides" },
          { value: "2026", label: "Updated solar topics" },
          { value: "Basti", label: "Local installation context" },
        ]}
      />
      <Section>
        <SectionHeading
          eyebrow="Solar Knowledge Center"
          title="Honest, practical guides about solar in India"
          description="Written by our solar engineers — no marketing fluff, just the numbers, the rules, and what actually works in 2026."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} />
          ))}
        </div>
      </Section>
      <CTABanner />
    </>
  );
}
