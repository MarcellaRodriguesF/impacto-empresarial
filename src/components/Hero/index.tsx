import { ArrowRight, WhatsappLogo, Star } from "phosphor-react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import WhatsAppButton from "../WhatsAppButton";
import { whatsappLink } from "../../lib/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const METRICS = [
  { value: "+50", label: "Empresas atendidas" },
  { value: "95%", label: "Satisfação dos clientes" },
  { value: "3x", label: "Mais eficiência operacional" },
];

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Camadas de fundo premium */}
      <div className={styles.glowGold} aria-hidden />
      <div className={styles.glowSoft} aria-hidden />
      <div className={styles.grid} aria-hidden />
      <div className="noise" aria-hidden />

      <div className={styles.wrapper}>
        <motion.div
          className={styles.proof}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span className={styles.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={15} weight="fill" />
            ))}
          </span>
          <span className={styles.proofText}>
            Premiada <strong>3 anos consecutivos</strong> — 1º lugar em Uberlândia/MG
          </span>
        </motion.div>

        <motion.h1
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
        >
          Transforme a gestão da sua empresa em{" "}
          <span className="text-gold">resultado previsível</span>.
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
        >
          Consultoria empresarial completa em gestão, contabilidade, tributário, RH
          e jurídico preventivo. Organizamos processos, reduzimos riscos e
          destravamos o crescimento do seu negócio.
        </motion.p>

        <motion.div
          className={styles.actions}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaPrimary}
          >
            <WhatsappLogo size={20} weight="fill" />
            Falar com um especialista
            <ArrowRight size={18} weight="bold" />
          </a>
          <a href="#solucoes" className={styles.ctaSecondary}>
            Conhecer soluções
          </a>
        </motion.div>

        <motion.div
          className={styles.metrics}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
        >
          {METRICS.map((m) => (
            <div className={styles.metric} key={m.label}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <WhatsAppButton />
    </section>
  );
}
