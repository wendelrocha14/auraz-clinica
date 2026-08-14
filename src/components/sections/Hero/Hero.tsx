import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/data/siteConfig";
import fotoCapa from "@/assets/images/clinic/auraz-home.jpg";


const { hero, whatsappInstitutional, clinicName } = siteConfig;

const whatsappMessage = `Olá! Vim pelo site e gostaria de agendar uma avaliação na ${clinicName}.`;
const whatsappLink = buildWhatsAppLink(whatsappInstitutional, whatsappMessage);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/**
 * Hero — primeira impressão da página.
 * Dois caminhos de conversão com peso visual equivalente (PROJECT.md, seção 4):
 * CTA institucional (WhatsApp geral) e CTA de exploração (âncora para Equipe).
 */
export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Apresentação da AURAZ Clínica"
      className="relative overflow-hidden bg-bg-primary"
    >
      <div className="mx-auto max-w-content px-6 py-20 sm:px-8 sm:py-28 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20"
        >
          {/* Coluna de texto — em mobile vem depois da imagem (order-2),
              em desktop lidera a leitura (lg:order-1) */}
          <div className="order-2 lg:order-1">
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              <span className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-text-secondary sm:text-sm">
                {hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-4xl leading-[1.15] text-text-primary sm:text-5xl lg:text-[3.4rem]"
            >
              {hero.title}{" "}
              <em className="italic text-primary-dark">{hero.highlight}</em>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md font-sans text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              {hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                variant="primary"
                size="large"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                icon={<MessageCircle size={18} strokeWidth={2} aria-hidden="true" />}
              >
                {hero.primaryCta}
              </Button>
              <Button variant="ghost" size="large" href="#equipe">
                {hero.secondaryCta}
              </Button>
            </motion.div>
          </div>

          {/* Coluna de imagem — em mobile aparece primeiro (order-1),
              transmitindo o ambiente premium antes mesmo do texto */}
          <motion.div
            variants={fadeUp}
            className="relative order-1 mx-auto max-w-[250px] sm:max-w-sm max-w-sm pb-8 lg:order-2 lg:max-w-none lg:pb-10"
          >
            {/* Forma orgânica suave ao fundo — assinatura visual discreta da seção */}
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-t-[12rem] rounded-b-3xl bg-primary/15 blur-2xl"
            />

            {/* Moldura em arco com fio dourado, remetendo à arquitetura de spa */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-3 rounded-t-[11rem] rounded-b-[1.75rem] border border-accent/50"
            />

            <img
              src={fotoCapa}
              alt={hero.heroImageAlt}
              className="w-full aspect-[3/4] object-cover object-[75%_50%] rounded-t-[10rem] rounded-b-3xl shadow-xl shadow-text-primary/10"
            />

            {/* Selo flutuante — reforça o diferencial real da marca (multidisciplinaridade) */}
            <div className="absolute -bottom-2 left-4 flex items-center gap-3 rounded-2xl border-l-2 border-accent bg-surface px-5 py-3 shadow-lg shadow-text-primary/10 sm:left-8">
              <Sparkles size={18} className="shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
              <span className="font-sans text-sm font-medium text-text-primary">
                {hero.badgeText}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
