import type { SiteConfig } from "@/types";

/**
 * Configuração central do site.
 * ⚠️ Substituir os valores de placeholder (marcados abaixo) pelos dados reais
 * da AURAZ antes do deploy em produção — ver PROJECT.md, seção 9.
 */
export const siteConfig: SiteConfig = {
  clinicName: "AURAZ Clínica",

  // TODO: substituir pelo número real de WhatsApp institucional da clínica
  whatsappInstitutional: "5551996573763",

  // TODO: substituir pelo link real do Instagram da AURAZ
  instagramUrl: "https://www.instagram.com/aurazclinica?igsh=MXJyODdtM2Y2eGptdw==",

  hero: {
    eyebrow: "Estética · Saúde · Bem-estar",
    title: "Cuidamos da sua beleza, saúde e bem-estar em",
    highlight: "um único lugar",
    subtitle:
      "Um espaço criado para proporcionar experiências únicas através da estética, terapias e cuidados personalizados.",
    primaryCta: "Agendar agora",
    secondaryCta: "Conhecer profissionais",
    badgeText: "7 especialistas, um só espaço",
    heroImageAlt:
      "Ambiente acolhedor e sofisticado da AURAZ Clínica, com luz natural e decoração minimalista",
  },
};
