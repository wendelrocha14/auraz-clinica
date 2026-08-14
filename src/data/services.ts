import type { Service } from "@/types";

/**
 * Especialidades/serviços oferecidos pela AURAZ.
 *
 * Conteúdo real, fornecido pela clínica. Para adicionar uma nova
 * especialidade no futuro, basta incluir um novo objeto neste array —
 * nenhum componente precisa ser alterado.
 */
export const services: Service[] = [
  {
    id: "estetica-facial-corporal",
    title: "Estética Facial e Corporal",
    areaOfExpertise: "Estética Integral",
    description:
      "Realiza tratamentos personalizados para a saúde, rejuvenescimento e harmonização da pele do rosto e do corpo.",
    offerings: [
      "Limpeza de pele profunda",
      "Peeling químico",
      "Microagulhamento",
      "Drenagem linfática corporal",
      "Massagem modeladora",
      "Tratamentos para celulite e gordura localizada",
    ],
  },
  {
    id: "nutricao-clinica-esportiva",
    title: "Nutrição Clínica e Esportiva",
    areaOfExpertise: "Nutrição e Bem-Estar",
    description:
      "Desenvolve planos alimentares focados em objetivos de saúde, emagrecimento saudável, performance e reeducação alimentar.",
    offerings: [
      "Avaliação de bioimpedância",
      "Planejamento dietético personalizado",
      "Acompanhamento para ganho de massa muscular",
      "Nutrição funcional",
      "Dietas para controle de restrições alimentares",
    ],
  },
  {
    id: "lash-design",
    title: "Lash Design",
    areaOfExpertise: "Estética do Olhar",
    description:
      "Especialista em valorizar e realçar o olhar por meio de técnicas modernas de extensão e tratamento dos cílios naturais.",
    offerings: [
      "Extensão de cílios — Fio a Fio",
      "Volume Russo",
      "Volume Híbrido",
      "Lash Lifting",
      "Manutenção e remoção segura de extensões",
    ],
  },
  {
    id: "massoterapia",
    title: "Massoterapia",
    areaOfExpertise: "Massoterapia e Terapias Corporais",
    description:
      "Aplica técnicas manuais para o alívio de dores musculares, redução do estresse, relaxamento profundo e melhora da circulação.",
    offerings: [
      "Massagem relaxante",
      "Massagem terapêutica/desportiva",
      "Reflexologia podal",
      "Massagem com pedras quentes",
      "Liberação miofascial",
    ],
  },
  {
    id: "micropigmentacao-sobrancelhas",
    title: "Micropigmentação e Design de Sobrancelhas",
    areaOfExpertise: "Micropigmentação e Visagismo",
    description:
      "Desenha e preenche as sobrancelhas de forma harmônica, corrigindo falhas e realçando as linhas naturais do rosto com técnicas semipermanentes.",
    offerings: [
      "Design de sobrancelhas com pinça/linha",
      "Aplicação de henna",
      "Micropigmentação fio a fio (Microblading)",
      "Shadow Line",
      "Revitalização labial",
    ],
  },
  {
    id: "manicure-nail-designer",
    title: "Manicure e Nail Designer",
    areaOfExpertise: "Cuidados e Estética das Unhas",
    description:
      "Especialista no cuidado, embelezamento, saúde e alongamento das unhas das mãos e dos pés com foco em durabilidade.",
    offerings: [
      "Manicure e pedicure tradicional",
      "Esmaltação em gel",
      "Alongamento em fibra de vidro/gel",
      "Blindagem de unhas naturais",
      "Nail art personalizada",
    ],
  },
  {
    id: "terapia-capilar-cabeleireiro",
    title: "Terapia Capilar e Cabeleireiro",
    areaOfExpertise: "Saúde Capilar e Visagismo",
    description:
      "Cuida da saúde do couro cabeludo e da beleza dos fios, unindo tratamentos de recuperação capilar a cortes e transformações visuais.",
    offerings: [
      "Cronograma capilar",
      "Tratamento para queda e oleosidade (Terapia Capilar)",
      "Cortes modernos — feminino/masculino",
      "Mechas/coloração",
      "Escova reconstrutora",
    ],
  },
];

/**
 * Horário geral de atendimento da clínica — não há horários individuais
 * por profissional/especialidade nesta seção.
 */
export const businessHours = "Segunda a sábado — 08h às 20h";