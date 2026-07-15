type ArchitectureStep = {
  title: string;
  description?: string;
};

type ArchitectureFlowProps = {
  caption: string;
  steps: readonly ArchitectureStep[];
};

export function ArchitectureFlow({ caption, steps }: ArchitectureFlowProps) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/70 shadow-sm first:mt-0">
      <figcaption className="border-b border-border bg-muted/40 px-4 py-3 text-sm font-medium text-foreground">
        {caption}
      </figcaption>
      <ol className="grid gap-3 p-4 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-xl border border-border bg-background/60 p-4"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              Step {index + 1}
            </p>
            <p className="mt-2 font-semibold text-foreground">{step.title}</p>
            {step.description ? (
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  );
}
