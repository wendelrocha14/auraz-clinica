import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--color-bg-primary)",
        "bg-secondary": "var(--color-bg-secondary)",
        surface: "var(--color-surface)",
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        accent: "var(--color-accent)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        whatsapp: "var(--color-whatsapp)",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        "content": "80rem", // max-w-7xl, ver PROJECT.md 5.3
      },
    },
  },
  plugins: [],
} satisfies Config;
