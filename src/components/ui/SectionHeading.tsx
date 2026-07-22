interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/**
 * Padroniza a hierarquia de título/subtítulo de cada seção (PROJECT.md, ui/).
 * Reutiliza o mesmo motivo visual do eyebrow da Hero (linha dourada fina +
 * label maiúsculo) para dar consistência de marca entre seções.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignment} ${subtitle ? "max-w-2xl" : "max-w-none"}`}>
      {eyebrow && (
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-text-secondary sm:text-sm">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="mt-4 font-display text-3xl leading-tight text-text-primary sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 font-sans text-base leading-relaxed text-text-secondary sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
