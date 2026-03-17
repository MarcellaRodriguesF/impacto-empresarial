import { Target, Lightning, TrendUp, ArrowRight } from "phosphor-react";
import styles from "./Hero.module.css";
import WhatsAppButton from "../WhatsAppButton";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bgShape} aria-hidden />
      <div className={styles.gridOverlay} aria-hidden />

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.badge}>
            <span className={styles.badgeDot} />
            Consultoria que transforma
          </p>

          <h1 className={styles.title}>
            Organização e eficiência
            <span className={styles.titleHighlight}> para sua empresa</span>
          </h1>

          <p className={styles.subtitle}>
            Otimize processos, maximize lucros e alcance os melhores índices do
            mercado.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <Target className={styles.statIcon} weight="duotone" size={28} />
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Empresas atendidas</span>
            </div>
            <div className={styles.stat}>
              <Lightning
                className={styles.statIcon}
                weight="duotone"
                size={28}
              />
              <span className={styles.statValue}>95%</span>
              <span className={styles.statLabel}>Taxa de sucesso</span>
            </div>
            <div className={styles.stat}>
              <TrendUp className={styles.statIcon} weight="duotone" size={28} />
              <span className={styles.statValue}>3x</span>
              <span className={styles.statLabel}>Mais eficiência</span>
            </div>
          </div>

          <a href="#contato" className={styles.cta}>
            Quero transformar minha empresa
            <ArrowRight size={20} weight="bold" />
          </a>
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <span className={styles.cardLabel}>Resultado</span>
            <p className={styles.cardText}>
              Processos claros, equipe alinhada e metas alcançadas.
            </p>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </section>
  );
}
