import { ChartLineUp, ClipboardText, Graph, UsersThree } from "phosphor-react";
import styles from "./Solution.module.css";

export function Solution() {
  return (
    <section className={styles.solutionsSection}>
      <h2 className={styles.title}>SOLUÇÕES</h2>

      <div className={styles.content}>
        <p className={styles.description}>
          A Impacto Consultoria e Gestão Empresarial
          <br />é destaque e referência quando o assunto é:
        </p>

        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <div className={styles.containerIcon}>
              <ChartLineUp size={32} color="var(--yellow)" weight="fill" />
            </div>

            <div>
              <h3>Gestão Empresarial Completa</h3>
              <p>
                Otimização de processos e estratégias para o crescimento
                sustentável das empresas.
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.containerIcon}>
              <ClipboardText size={32} color="var(--yellow)" />
            </div>
            <div>
              <h3>Gestão Contábil e Tributária</h3>
              <p>
                Contabilidade completa, gestão de impostos e planejamento
                tributário.
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.containerIcon}>
              <UsersThree size={32} color="var(--yellow)" />
            </div>
            <div>
              <h3>Recursos Humanos e Segurança do Trabalho</h3>
              <p>
                Administração de folha de pagamento, gestão de equipes e
                garantia de conformidade em segurança do trabalho.
              </p>
            </div>
          </div>

          <div className={styles.serviceItem}>
            <div className={styles.containerIcon}>
              <Graph size={32} color="var(--yellow)" />
            </div>
            <div>
              <h3>Diagnóstico Empresarial</h3>
              <p>
                Análises periódicas de performance, avaliação de
                produtos/serviços e identificação de oportunidades de melhoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
