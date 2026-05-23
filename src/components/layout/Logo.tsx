import Link from "next/link";
import { SunIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 group", className)}
      aria-label="Balaji Enterprises home"
    >
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-brand-600 to-brand-800 text-sun-300 shadow-sm transition-shadow group-hover:shadow-md">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center motion-safe:animate-spin-slow"
        >
          <SunIcon width={22} height={22} />
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent motion-safe:group-hover:animate-shimmer"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg font-bold",
            dark ? "text-white" : "text-slate-900"
          )}
        >
          Balaji <span className={dark ? "text-sun-300" : "text-brand-600"}>Enterprises</span>
        </span>
        <span
          className={cn(
            "text-[10px] uppercase tracking-widest",
            dark ? "text-slate-200" : "text-slate-600"
          )}
        >
          Basti · UP
        </span>
      </span>
    </Link>
  );
}
