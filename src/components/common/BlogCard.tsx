import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import type { Post } from "@/data/posts";
import { images } from "@/lib/images";

export function BlogCard({ post }: { post: Post }) {
  const image = images[post.image];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card card-hover group overflow-hidden flex flex-col h-full"
    >
      <div className="img-zoom relative aspect-[16/10] bg-slate-100">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 shadow-sm">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-700">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-5 text-xs text-slate-600">
          <span className="flex items-center gap-1">
            <ClockIcon width={12} height={12} />
            {post.readTime}
          </span>
          <span className="text-brand-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Read
            <ArrowRightIcon width={12} height={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
