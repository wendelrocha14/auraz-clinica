import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamCarousel } from "./TeamCarousel";
import { ProfessionalModal } from "./ProfessionalModal";
import { professionals } from "@/data/professionals";
import type { Professional } from "@/types";
import { staggerContainer, fadeUp } from "@/lib/motion";

/**
 * Seção Nossa Equipe. O estado de "qual profissional está selecionada" vive
 * aqui (componente pai), não no carrossel nem no card — o modal é
 * conceitualmente irmão do carrossel, ambos orquestrados por este componente.
 */
export function Team() {
  const [selected, setSelected] = useState<Professional | null>(null);

  return (
    <section
      id="equipe"
      aria-label="Nossa equipe de profissionais"
      className="bg-bg-secondary py-20 sm:py-28"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-content px-6 sm:px-8"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            eyebrow="Nossa Equipe"
            title="Profissionais dedicadas ao seu bem-estar"
            subtitle="Cada especialista foi escolhida para oferecer cuidado humano e técnica apurada — sob o mesmo teto, com o mesmo propósito."
            align="center"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-14">
          <TeamCarousel professionals={professionals} onSelectProfessional={setSelected} />
        </motion.div>
      </motion.div>

      <ProfessionalModal professional={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
