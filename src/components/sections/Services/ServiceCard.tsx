import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

/**
 * Card individual de especialidade. Sem imagem (nenhum asset visual foi
 * fornecido por especialidade) — conteúdo puramente textual, seguindo o
 * mesmo padrão de superfície do ProfessionalCard (Card base + badge de
 * categoria).
 */
export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="flex h-full flex-col p-6">
      <span className="w-fit rounded-full bg-bg-secondary px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-primary-dark">
        {service.areaOfExpertise}
      </span>

      <h3 className="mt-4 font-display text-xl text-text-primary">{service.title}</h3>

      <p className="mt-2 font-sans text-sm leading-relaxed text-text-secondary">
        {service.description}
      </p>

      <ul className="mt-5 flex flex-1 flex-col gap-2.5">
        {service.offerings.map((offering) => (
          <li key={offering} className="flex items-start gap-2.5">
            <Check
              size={16}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-accent"
              aria-hidden="true"
            />
            <span className="font-sans text-sm leading-relaxed text-text-secondary">
              {offering}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}