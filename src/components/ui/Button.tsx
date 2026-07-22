import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "whatsapp" | "ghost";
type ButtonSize = "default" | "large";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  children: ReactNode;
}

type AsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = AsAnchor | AsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary-dark",
  whatsapp:
    "bg-whatsapp text-white hover:brightness-95 focus-visible:outline-whatsapp",
  ghost:
    "bg-transparent text-text-primary border border-text-primary/20 hover:border-text-primary/40 hover:bg-surface",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "text-sm px-6 py-3.5 gap-2",
  large: "text-base px-8 py-4 gap-2.5",
};

/**
 * Componente de ação padronizado do projeto (PROJECT.md, regra 7.3).
 * Usado tanto para CTAs institucionais quanto individuais (WhatsApp por profissional).
 * Renderiza <a> quando `href` é informado, ou <button> caso contrário.
 */
export function Button({
  variant = "primary",
  size = "default",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-sans font-semibold " +
    "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg " +
    "active:translate-y-0 min-h-[44px]"; // área de toque mínima (regra 7.5)

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <a href={href} className={classes} {...anchorProps}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}
      {children}
    </button>
  );
}
