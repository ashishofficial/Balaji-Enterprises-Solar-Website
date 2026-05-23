import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { posts, getPost } from "@/data/posts";
import { postContent } from "@/data/post-content";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/common/Section";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BlogCard } from "@/components/common/BlogCard";
import { CTABanner } from "@/components/common/CTABanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/jsonld";
import { siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import { ClockIcon, ArrowRightIcon } from "@/components/icons";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return buildMetadata({ title: "Not Found", description: "", noIndex: true });
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    image: images[post.image].src,
  });
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const Content = postContent[post.slug];
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const heroImage = images[post.image];

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.metaDescription,
          url,
          datePublished: post.date,
          image: `${siteConfig.url}${heroImage.src}`,
        })}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />
      <Section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-brand-700 font-semibold">
            {post.category}
          </p>
          <h1 className="mt-3">{post.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
          <div className="mt-5 flex items-center gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <ClockIcon width={14} height={14} />
              {post.readTime} read
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-xl bg-slate-100 shadow-cardHover">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section>
        <article className="prose prose-balaji prose-lg max-w-3xl mx-auto space-y-5 text-slate-700 leading-relaxed">
          {Content ? <Content /> : <p>{post.excerpt}</p>}
        </article>
      </Section>

      <Section className="bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-6">Related articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="btn-secondary">
              All articles
              <ArrowRightIcon width={14} height={14} />
            </Link>
          </div>
        </div>
      </Section>

      <CTABanner />
    </>
  );
}
