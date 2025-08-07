import { Target, Lightning, TrendUp } from "phosphor-react";
import styles from "./Hero.module.css";
import WhatsAppButton from "../WhatsAppButton";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Overlay com gradiente */}
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.animarTitulo}>
            Transforme sua empresa com{" "}
            <span className={styles.amarelo}>organização</span> e{" "}
            <span className={styles.amarelo}>eficiência</span>
          </h1>

          {/* Descrição */}
          <p className={styles.animarParagrafo}>
            Otimize processos, maximize lucros e alcance os melhores índices do
            mercado.
          </p>

          {/* Estatísticas */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Target size={20} />
              <div>
                <strong>50+</strong>
                <span>Empresas atendidas</span>
              </div>
            </div>
            <div className={styles.stat}>
              <Lightning size={20} />
              <div>
                <strong>95%</strong>
                <span>Taxa de sucesso</span>
              </div>
            </div>
            <div className={styles.stat}>
              <TrendUp size={20} />
              <div>
                <strong>3x</strong>
                <span>Mais eficiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
    </section>
  );
}
