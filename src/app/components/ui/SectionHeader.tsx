interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={`mb-12 ${alignment}`.trim()}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-lime-300/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}

