import type { Variants } from "framer-motion";

/**
 * Variantes de animação reutilizadas pelas seções construídas a partir daqui.
 * Mesma duração/easing usados na Hero — mantidas aqui centralizadas para que
 * novas seções herdem a mesma linguagem de movimento sem duplicar a definição.
 * A Hero mantém suas constantes locais intocadas (não foi alterada nesta etapa).
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
