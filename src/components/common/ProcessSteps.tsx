export type ProcessStep = {
  title: string;
  description: string;
};

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="card p-6 relative">
          <span
            aria-hidden="true"
            className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-white text-sm font-bold shadow-md"
          >
            {i + 1}
          </span>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
