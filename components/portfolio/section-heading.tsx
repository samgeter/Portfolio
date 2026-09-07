type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-5 md:grid-cols-[0.65fr_1.35fr] md:gap-10">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 className="max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[0.98] tracking-[-0.055em] text-white">
          {title}
        </h2>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
