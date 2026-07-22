export interface HeroContent {
  eyebrow: string;
  title: string;
  highlight: string; // palavra/trecho do título com tratamento tipográfico diferenciado
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  badgeText: string;
  heroImageAlt: string;
}

export interface SiteConfig {
  clinicName: string;
  whatsappInstitutional: string; // formato internacional, ex: 5551999999999
  instagramUrl: string;
  hero: HeroContent;
}

export interface Professional {
  id: string;
  name: string;
  specialty: string;
  /** Descrição curta exibida no card do carrossel */
  shortDescription: string;
  areasOfExpertise: string[];
  schedule: string;
  whatsappNumber: string; // formato internacional, ex: 5551999999999
  /** Opcional — o botão de Instagram só é exibido se houver link */
  instagramUrl?: string;
  /** Ausente = ImagePlaceholder renderiza o estado de placeholder automaticamente */
  photoUrl?: string;
  /**
   * Campos reservados para evolução futura (ex: outra seção da LP ou área
   * administrativa). Não são renderizados no ProfessionalModal atualmente —
   * mantidos opcionais para não exigir preenchimento em professionals.ts.
   */
  bio?: string;
  education?: string;
  procedures?: string[];
  certifications?: string[];
}
