import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  stats?: { value: string; label: string }[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  stats,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-950 text-white">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,22,0.88)_0%,rgba(16,30,59,0.72)_52%,rgba(16,30,59,0.30)_100%)]"
      />
      <div className="container relative py-14 sm:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sun-100 backdrop-blur">
            {eyebrow}
          </p>
          <h1 className="text-white">{title}</h1>
          <p className="mt-5 max-w-2xl text-base lg:text-lg text-slate-100">
            {description}
          </p>
        </div>
        {stats && stats.length > 0 && (
          <div className="mt-9 grid gap-3 sm:grid-cols-3 max-w-3xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-l border-white/25 bg-white/10 px-5 py-4 backdrop-blur"
              >
                <p className="font-display text-2xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-200">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
