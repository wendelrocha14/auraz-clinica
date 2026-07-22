import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Professional } from "@/types";

interface ProfessionalModalProps {
  professional: Professional | null;
  onClose: () => void;
}

/**
 * Modal de detalhes da profissional. Radix Dialog cuida do comportamento
 * (foco preso, ESC, devolução de foco, aria-modal); todo o visual é nosso.
 * Usa `forceMount` + AnimatePresence para permitir animação de saída suave
 * (padrão recomendado ao combinar Radix com Framer Motion).
 */
export function ProfessionalModal({ professional, onClose }: ProfessionalModalProps) {
  const prefersReducedMotion = useReducedMotion();
  const isOpen = professional !== null;

  const transition = {
    duration: prefersReducedMotion ? 0.01 : 0.35,
    ease: "easeOut" as const,
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.96,
      y: prefersReducedMotion ? 0 : 12,
    },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && professional && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-40 bg-text-primary/50 backdrop-blur-sm"
                variants={overlayVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={transition}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                variants={contentVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={transition}
              >
                <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-surface shadow-2xl sm:flex-row">
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Fechar"
                      className="absolute right-4 top-4 z-10 rounded-full bg-surface/90 p-2 text-text-primary shadow-md transition-colors hover:bg-bg-secondary"
                    >
                      <X size={18} strokeWidth={2} />
                    </button>
                  </Dialog.Close>

                  <div className="sm:w-2/5">
                    <ImagePlaceholder
                      aspect="portrait"
                      context="team"
                      alt={`Foto de ${professional.name}`}
                      src={professional.photoUrl}
                      className="h-full"
                    />
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                    <Dialog.Title className="font-display text-2xl text-text-primary">
                      {professional.name}
                    </Dialog.Title>
                    <Dialog.Description className="sr-only">
                      Detalhes completos de atendimento de {professional.name}.
                    </Dialog.Description>

                    <span className="mt-2 inline-block rounded-full bg-bg-secondary px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-primary-dark">
                      {professional.specialty}
                    </span>

                    {professional.areasOfExpertise.length > 0 && (
                      <div className="mt-5">
                        <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-text-primary">
                          Áreas de atuação
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {professional.areasOfExpertise.map((area) => (
                            <span
                              key={area}
                              className="rounded-full border border-text-primary/10 px-3 py-1 font-sans text-xs text-text-secondary"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-5">
                      <h4 className="font-sans text-xs font-semibold uppercase tracking-wide text-text-primary">
                        Horário de atendimento
                      </h4>
                      <p className="mt-1 font-sans text-sm text-text-secondary">
                        {professional.schedule}
                      </p>
                    </div>

                    {professional.instagramUrl && (
                      <Button
                        variant="ghost"
                        size="default"
                        href={professional.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={<Instagram size={16} strokeWidth={1.75} aria-hidden="true" />}
                        className="mt-5"
                      >
                        Instagram
                      </Button>
                    )}

                    <Button
                      variant="whatsapp"
                      size="large"
                      href={buildWhatsAppLink(
                        professional.whatsappNumber,
                        `Olá! Gostaria de agendar um atendimento com ${professional.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<MessageCircle size={18} strokeWidth={2} aria-hidden="true" />}
                      className="mt-8 w-full sm:w-auto"
                    >
                      Agendar pelo WhatsApp
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
