import { MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Professional } from "@/types";

interface ProfessionalCardProps {
  professional: Professional;
  onSelect: (professional: Professional) => void;
}

/**
 * Card individual dentro do carrossel. O card inteiro é clicável (abre o
 * modal), exceto o botão de WhatsApp, que precisa de stopPropagation para
 * não disparar as duas ações ao mesmo tempo (ver PROJECT.md, decisão desta
 * etapa sobre Button.tsx).
 */
export function ProfessionalCard({ professional, onSelect }: ProfessionalCardProps) {
  const whatsappLink = buildWhatsAppLink(
    professional.whatsappNumber,
    `Olá! Gostaria de agendar um atendimento com ${professional.name}.`
  );

  const handleSelect = () => onSelect(professional);

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={handleSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleSelect();
        }
      }}
      className="group flex h-full cursor-pointer flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-text-primary/10"
    >
      <ImagePlaceholder
        aspect="portrait"
        context="team"
        alt={`Foto de ${professional.name}`}
        src={professional.photoUrl}
        className="transition-transform duration-500 group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col p-6">
        <span className="w-fit rounded-full bg-bg-secondary px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-primary-dark">
          {professional.specialty}
        </span>

        <h3 className="mt-4 font-display text-xl text-text-primary">{professional.name}</h3>

        <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-text-secondary">
          {professional.shortDescription}
        </p>

        <Button
          variant="whatsapp"
          size="default"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          icon={<MessageCircle size={16} strokeWidth={2} aria-hidden="true" />}
          className="mt-6 w-full"
          onClick={(event) => event.stopPropagation()}
        >
          Agendar pelo WhatsApp
        </Button>
      </div>
    </Card>
  );
}
