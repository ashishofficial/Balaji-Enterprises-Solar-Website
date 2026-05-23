import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  as?: "section" | "div" | "article";
};

export function Section({
  id,
  className,
  containerClassName,
  children,
  as = "section",
}: SectionProps) {
  const Tag = as;
  return (
    <Tag id={id} className={cn("section", className)}>
      <div className={cn("container", containerClassName)}>{children}</div>
    </Tag>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  level?: 2 | 3;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  level = 2,
  className,
}: SectionHeadingProps) {
  const HTag = level === 2 ? "h2" : "h3";
  return (
    <div
      className={cn(
        "max-w-3xl mb-10 lg:mb-14",
        align === "center" ? "mx-auto text-center" : "",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
          {eyebrow}
        </p>
      )}
      <HTag>{title}</HTag>
      {description && (
        <p className="mt-4 text-base lg:text-lg text-slate-600">{description}</p>
      )}
    </div>
  );
}
