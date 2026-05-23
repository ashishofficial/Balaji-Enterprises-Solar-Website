import Link from "next/link";
import { Section } from "@/components/common/Section";

export default function NotFound() {
  return (
    <Section className="!py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-wider text-brand-700 font-semibold">
          404 — Page not found
        </p>
        <h1 className="mt-3">This page doesn&apos;t exist</h1>
        <p className="mt-4 text-slate-600">
          The page you&apos;re looking for has moved or doesn&apos;t exist. You
          might want to head back to the homepage or browse our solar services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
          <Link href="/services" className="btn-secondary">
            View services
          </Link>
        </div>
      </div>
    </Section>
  );
}
