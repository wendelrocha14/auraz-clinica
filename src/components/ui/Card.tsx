import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Superfície elevada e neutra do projeto (PROJECT.md, seção 5.4).
 * overflow-hidden garante que imagens no topo do card respeitem o raio da borda.
 * Não recebe animação própria (regra 7.7) — quem anima é o componente de seção
 * que a consome.
 */
export function Card({ children, className = "", ...rest }: CardProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl bg-surface shadow-sm shadow-text-primary/5 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
