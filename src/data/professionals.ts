import type { Professional } from "@/types";
import professionalPhoto01 from "@/assets/images/team/a001.jpg";
import professionalPhoto02 from "@/assets/images/team/a002.jpg";
import professionalPhoto03 from "@/assets/images/team/a003.jpg";
import professionalPhoto04 from "@/assets/images/team/a004.jpg";
import professionalPhoto05 from "@/assets/images/team/a005.jpg";
import professionalPhoto06 from "@/assets/images/team/a006.jpg";
import professionalPhoto07 from "@/assets/images/team/a007.jpg";

/**
 * Dados das profissionais da AURAZ.
 *
 * Nome, especialidade, descrição curta, áreas de atuação, WhatsApp e
 * Instagram são conteúdo real, fornecido pela clínica.
 *
 * ⚠️ Único campo ainda placeholder: `schedule` ("A definir" para todas) —
 * substituir individualmente quando os horários forem definidos.
 *
 * Para adicionar novas profissionais no futuro (15, 30...), basta incluir
 * novos objetos neste array — nenhum componente precisa ser alterado.
 */
export const professionals: Professional[] = [
  {
    id: "Profissional-01",
    name: "Profissional-01",
    specialty: "Estética Facial e Corporal",
    shortDescription:
      "Realiza tratamentos personalizados para a saúde, rejuvenescimento e harmonização da pele do rosto e do corpo.",
    areasOfExpertise: [
      "Estética Integral",
      "Limpeza de pele profunda",
      "Peeling químico",
      "Microagulhamento",
      "Drenagem linfática corporal",
      "Massagem modeladora",
      "Tratamentos para celulite e gordura localizada",
    ],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: professionalPhoto01,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-02",
    name: "Profissional-02",
    specialty: "Nutrição Clínica e Esportiva",
    shortDescription:
      "Desenvolve planos alimentares focados em objetivos de saúde, emagrecimento saudável, performance e reeducação alimentar.",
    areasOfExpertise: [
      "Nutrição e Bem-Estar",
      "Avaliação de bioimpedância",
      "Planejamento dietético personalizado",
      "Acompanhamento para ganho de massa muscular",
      "Nutrição funcional",
      "Dietas para controle de restrições alimentares",
    ],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: professionalPhoto02,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-03",
    name: "Profissional-03",
    specialty: "Lash Design",
    shortDescription:
      "Especialista em valorizar e realçar o olhar por meio de técnicas modernas de extensão e tratamento dos cílios naturais.",
    areasOfExpertise: [
      "Estética do Olhar",
      "Extensão de cílios (Fio a Fio, Volume Russo e Híbrido)",
      "Lash Lifting (curvatura e nutrição dos fios naturais)",
      "Manutenção/remoção segura de extensões",
    ],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: professionalPhoto03,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-04",
    name: "Profissional-04",
    specialty: "Massoterapia",
    shortDescription:
      "Aplica técnicas manuais para o alívio de dores musculares, redução do estresse, relaxamento profundo e melhora da circulação.",
    areasOfExpertise: [
      "Massoterapia e Terapias Corporais",
      "Massagem relaxante",
      "Massagem terapêutica/desportiva",
      "Reflexologia podal",
      "Massagem com pedras quentes",
      "Liberação miofascial",
    ],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: professionalPhoto04,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-05",
    name: "Profissional-05",
    specialty: "Micropigmentação e Design de Sobrancelhas",
    shortDescription:
      "Desenha e preenche as sobrancelhas de forma harmônica, corrigindo falhas e realçando as linhas naturais do rosto com técnicas semi-permanentes.",
    areasOfExpertise: [
      "Micropigmentação e Visagismo",
      "Design de sobrancelhas com pinça/linha",
      "Aplicação de henna",
      "Micropigmentação fio a fio (Microblading)",
      "Shadow Line",
      "Revitalização labial",
    ],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: professionalPhoto05,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-06",
    name: "Profissional-06",
    specialty: "Manicure e Nail Designer",
    shortDescription:
      "Especialista no cuidado, embelezamento, saúde e alongamento das unhas das mãos e dos pés com foco em durabilidade.",
    areasOfExpertise: [
      "Cuidados e Estética das Unhas",
      "Manicure e pedicure tradicional",
      "Esmaltação em gel",
      "Alongamento em fibra de vidro/gel",
      "Blindagem de unhas naturais",
      "Nail art personalizada",
    ],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: professionalPhoto06,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-07",
    name: "Profissional-07",
    specialty: "Terapia Capilar e Cabeleireiro",
    shortDescription:
      "Cuida da saúde do couro cabeludo e da beleza dos fios, unindo tratamentos de recuperação capilar a cortes e transformações visuais.",
    areasOfExpertise: [
      "Saúde Capilar e Visagismo",
      "Cronograma capilar",
      "Tratamento para queda e oleosidade (Terapia Capilar)",
      "Cortes modernos (feminino/masculino)",
      "Mechas/coloração",
      "Escova reconstrutora",
    ],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: professionalPhoto07,
    instagramUrl: "seu-insta",
  },
];