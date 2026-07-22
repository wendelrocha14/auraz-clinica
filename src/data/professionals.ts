import type { Professional } from "@/types";
import vitoriaPhoto from "@/assets/images/team/vitoria.jpeg";
import mactielePhoto from "@/assets/images/team/mactiele.jpeg";
import eduardaHagelinPhoto from "@/assets/images/team/eduardaa.jpeg";
import eduardaWirthPhoto from "@/assets/images/team/eduardawirth.jpeg";
import fabiPhoto from "@/assets/images/team/fabi.jpeg";
import pamelaPhoto from "@/assets/images/team/pamela.jpeg";
import mirianPhoto from "@/assets/images/team/mirian.jpeg";

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
    id: "vitoria-molter",
    name: "Vitória Molter",
    specialty: "Esteticista e Cosmetóloga",
    shortDescription: "Especialista em cuidados faciais e corporais.",
    areasOfExpertise: [
      "Limpeza de pele",
      "Peeling químico",
      "Microagulhamento",
      "Consulta cosmética",
      "Revitalização facial",
      "Acne",
      "Oleosidade",
      "Cicatrizes de acne",
      "Manchas",
      "Melasma",
      "Rejuvenescimento",
      "Hidratação da pele",
      "Foliculite",
    ],
    schedule: "A definir",
    whatsappNumber: "5551998965153",
    photoUrl: vitoriaPhoto,
    instagramUrl: "https://www.instagram.com/vitoriamolter?igsh=aWZqaXd3MTNzaDk5",
  },
  {
    id: "mactiele-anibale",
    name: "Mactiele Anibale",
    specialty: "Massoterapeuta",
    shortDescription: "Especialista em massagens terapêuticas e relaxantes.",
    areasOfExpertise: [
      "Drenagem linfática",
      "Massagem relaxante",
      "Massagem estética",
      "Massagem modeladora",
      "Massagem terapêutica",
      "Bronze a jato",
    ],
    schedule: "A definir",
    whatsappNumber: "5551998584015",
    photoUrl: mactielePhoto,
    instagramUrl: "https://www.instagram.com/mactieleanibaleestetica?igsh=NHltdHM4N2hpbzZl",
  },
  {
    id: "eduarda-hagelin",
    name: "Eduarda Hagelin",
    specialty: "Lash Designer",
    shortDescription: "Especialista em extensão de cílios.",
    areasOfExpertise: [
      "Extensão de cílios",
      "Manutenção de cílios",
      "Hidratação labial",
      "Brow Lamination",
      "Lash Lifting",
      "Design personalizado de sobrancelha",
      "Design com henna",
    ],
    schedule: "A definir",
    whatsappNumber: "5551998132487",
    photoUrl: eduardaHagelinPhoto,
    instagramUrl: "https://www.instagram.com/lash_eduardaa?igsh=MnhkdGZpMjZ4cHNj",
  },
  {
    id: "eduarda-wirth",
    name: "Eduarda Wirth",
    specialty: "Nutricionista",
    shortDescription: "Atendimento personalizado voltado para saúde e qualidade de vida.",
    areasOfExpertise: [
      "Anamnese clínica e alimentar",
      "Avaliação de exames",
      "Avaliação antropométrica",
      "Orientações nutricionais",
      "Plano alimentar individualizado",
      "Hipertrofia",
      "Emagrecimento",
      "Reeducação alimentar",
      "Obesidade",
      "Sobrepeso",
    ],
    schedule: "A definir",
    whatsappNumber: "5551995484860",
    photoUrl: eduardaWirthPhoto,
    instagramUrl: "https://www.instagram.com/eduardawirthnutri?igsh=MWt0NnNnNzdqb3FtNQ==",
  },
  {
    id: "fabi-farias",
    name: "Fabi Farias",
    specialty: "Terapeuta Sistêmica",
    shortDescription: "Atendimento voltado ao equilíbrio emocional.",
    areasOfExpertise: ["Reiki", "Barras de Access", "Constelação Familiar", "Conversa terapêutica"],
    schedule: "A definir",
    whatsappNumber: "5551996799383",
    photoUrl: fabiPhoto,
    instagramUrl: "https://www.instagram.com/fabifariasterapeuta?igsh=cjd2YmU1d2dkdmxw",
  },
  {
    id: "pamela-weber",
    name: "Pâmela Weber",
    specialty: "Especialista em Estrias",
    shortDescription: "Tratamentos modernos para recuperação da pele.",
    areasOfExpertise: ["Tratamento para estrias"],
    schedule: "A definir",
    whatsappNumber: "5551997291153",
    photoUrl: pamelaPhoto,
    instagramUrl: "https://www.instagram.com/estrias_pamelaweber?igsh=djZ3bzh5cWYzYjlw",
  },
  {
    id: "mirian-zucatti",
    name: "Mirian Zucatti",
    specialty: "Terapeuta Integrativa",
    shortDescription: "Especializada em saúde da mulher e neurociência.",
    areasOfExpertise: [
      "Ansiedade",
      "Pensamentos acelerados",
      "Baixa autoestima",
      "Culpa emocional",
      "Sobrecarga emocional",
      "Pensamentos negativos",
      "Técnicas integrativas",
      "Neurociência aplicada",
      "Inteligência emocional",
      "Autoconhecimento",
    ],
    schedule: "A definir",
    whatsappNumber: "5551999430162",
    photoUrl: mirianPhoto,
    instagramUrl: "https://www.instagram.com/mirianzucatti_terapeuta?igsh=c3M4Z3U0cGJjenV6",
  },
];
