import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import type { Post } from "@/data/posts";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="card group p-6 flex flex-col h-full hover:-translate-y-1 transition-transform"
    >
      <p className="text-xs uppercase tracking-wider text-brand-700 font-semibold">
        {post.category}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-brand-700">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
        <span className="flex items-center gap-1">
          <ClockIcon width={12} height={12} />
          {post.readTime}
        </span>
        <span className="text-brand-700 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Read
          <ArrowRightIcon width={12} height={12} />
        </span>
      </div>
    </Link>
  );
}
