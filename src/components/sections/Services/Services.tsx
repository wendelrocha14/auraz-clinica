import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { services, businessHours } from "@/data/services";
import { staggerContainer, fadeUp } from "@/lib/motion";

/**
 * Seção Especialidades. Grid responsivo (1 coluna mobile, 2 em md, 3 em lg —
 * PROJECT.md, seção 5.3), escalável para qualquer quantidade de itens via
 * .map(), sem nada hardcoded para "7".
 */
export function Services() {
  return (
    <section
      id="especialidades"
      aria-label="Especialidades e áreas de atuação da AURAZ"
      className="bg-bg-primary py-20 sm:py-28"
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
            eyebrow="Especialidades"
            title="Cuidados completos para cada objetivo"
            subtitle="Sete áreas de atuação sob o mesmo teto, cada uma com técnicas e serviços pensados para o seu bem-estar."
            align="center"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center justify-center gap-3 rounded-2xl border-l-2 border-accent bg-surface px-5 py-3 shadow-sm shadow-text-primary/5 sm:mx-auto sm:w-fit"
        >
          <Clock size={18} className="shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
          <span className="font-sans text-sm font-medium text-text-primary">
            Horário de atendimento: {businessHours}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}