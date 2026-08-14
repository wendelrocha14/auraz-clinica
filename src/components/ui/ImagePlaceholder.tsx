import { ImageIcon, Users } from "lucide-react";

type Aspect = "portrait" | "landscape";
type Context = "team" | "clinic";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  aspect: Aspect;
  context?: Context;
  className?: string;
}

const aspectStyles: Record<Aspect, string> = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]",
};

/**
 * Decide e renderiza imagem real ou placeholder visual, mantendo aspect-ratio
 * fixo por contexto (PROJECT.md, regra 7.4). Nenhuma seção lida com essa
 * lógica diretamente — todas passam pela mesma porta de entrada.
 */
export function ImagePlaceholder({
  src,
  alt,
  aspect,
  context = "clinic",
  className = "",
}: ImagePlaceholderProps) {
  const baseClasses = `${aspectStyles[aspect]} w-full overflow-hidden bg-bg-secondary ${className}`;

  if (src) {
    return (
      <div className={baseClasses}>
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
      </div>
    );
  }

  const Icon = context === "team" ? Users : ImageIcon;

  return (
    <div
      className={`${baseClasses} flex flex-col items-center justify-center gap-2 text-text-secondary/50`}
      role="img"
      aria-label={alt}
    >
      <Icon size={32} strokeWidth={1.5} />
      <span className="font-sans text-xs tracking-wide">Imagem em breve</span>
    </div>
  );
}
