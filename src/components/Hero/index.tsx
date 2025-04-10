import classNames from "classnames";
import styles from "./Hero.module.css";
import destaque from "/sub-linha.svg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1 className={styles.animarTitulo}>
            Mais <span className={styles.amarelo}>organização</span> e{" "}
            <span className={styles.amarelo}>eficiência</span> para sua empresa
          </h1>

          <img
            src={destaque}
            alt="Sublinhado decorativo"
            className={styles.decoracao}
          />
          <p className={styles.animarParagrafo}>
            Otimize processos, maximize lucros e alcance os melhores índices do
            mercado. Seja nosso próximo parceiro de sucesso
          </p>
          <button
            className={classNames(styles.animarBotao, styles.botao)}
          >
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
}
