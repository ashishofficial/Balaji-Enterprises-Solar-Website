import Link from "next/link";
import { SunIcon } from "@/components/icons";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 group ${className ?? ""}`}
      aria-label="Balaji Enterprises home"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-sun-300 shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute inset-0 motion-safe:animate-spin-slow flex items-center justify-center"
        >
          <SunIcon width={22} height={22} />
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent motion-safe:group-hover:animate-shimmer"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold text-slate-900">
          Balaji <span className="text-brand-600">Solar</span>
        </span>
        <span className="text-[10px] uppercase tracking-widest text-slate-600">
          Basti · UP
        </span>
      </span>
    </Link>
  );
}
