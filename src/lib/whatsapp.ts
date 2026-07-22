/**
 * Monta um link do WhatsApp com mensagem pré-preenchida.
 * Único ponto do projeto responsável por essa lógica (PROJECT.md, regra 7.3),
 * usado tanto pelo CTA institucional quanto pelos CTAs individuais por profissional.
 */
export function buildWhatsAppLink(phoneNumber: string, message: string): string {
  const sanitizedPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
}
