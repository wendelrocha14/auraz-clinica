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
    id: "Profissional-01",
    name: "Profissional-01",
    specialty: "Especialidade",
    shortDescription: "Suas informações",
    areasOfExpertise: [""],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: vitoriaPhoto,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-02",
    name: "Profissional-02",
    specialty: "Especialidade",
    shortDescription: "Suas informações",
    areasOfExpertise: [""],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: mactielePhoto,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-03",
    name: "Profissional-03",
    specialty: "Especialidade",
    shortDescription: "Suas informações",
    areasOfExpertise: [""],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: eduardaHagelinPhoto,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-04",
    name: "Profissional-04",
    specialty: "Especialidade",
    shortDescription: "Suas informações",
    areasOfExpertise: [""],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: eduardaWirthPhoto,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-05",
    name: "Profissional-05",
    specialty: "Especialidade",
    shortDescription: "Suas informações",
    areasOfExpertise: [""],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: fabiPhoto,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-06",
    name: "Profissional-06",
    specialty: "Especialidade",
    shortDescription: "Suas informações",
    areasOfExpertise: [""],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: pamelaPhoto,
    instagramUrl: "seu-insta",
  },
  {
    id: "Profissional-07",
    name: "Profissional-07",
    specialty: "Especialidade",
    shortDescription: "Suas informações",
    areasOfExpertise: [""],
    schedule: "A definir",
    whatsappNumber: "0000000000",
    photoUrl: mirianPhoto,
    instagramUrl: "seu-insta",
  },
];