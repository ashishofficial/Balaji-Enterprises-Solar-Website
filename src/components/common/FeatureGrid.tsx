type Feature = {
  icon: React.ComponentType<{ width?: number; height?: number; className?: string }>;
  title: string;
  description: string;
};

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => (
        <div key={f.title} className="card p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
            <f.icon width={24} height={24} />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{f.description}</p>
        </div>
      ))}
    </div>
  );
}
