import styles from "./AboutUs.module.css";

export function AboutUs() {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>QUEM SOMOS</h2>
      <div className={styles.members}>
        <div className={styles.member}>
          <img
            className={styles.photo}
            src="/kauedelnero.png"
            alt="Kauê Del Nero"
          />
          <div className={styles.info}>
            <h3 className={styles.name}>Kauê Del Nero</h3>
            <p className={styles.description}>
              Bacharel em Direito, com especialização em Direito e Processo do
              Trabalho, Direito Tributário Empresarial e Gestão Empresarial.
              Além de ser professor de Direito, Kauê traz uma visão estratégica
              e jurídica sólida, contribuindo para a otimização de processos e a
              segurança legal das empresas atendidas.
            </p>
          </div>
        </div>

        <div className={styles.member}>
          <img
            className={styles.photo}
            src="/lucasveiga.png"
            alt="Lucas Veiga"
          />
          <div className={styles.info}>
            <h3 className={styles.name}>Lucas Veiga</h3>
            <p className={styles.description}>
              Bacharel em Direito, especialista em Direito e Processo Civil,
              Direito Consumerista e Imobiliário, além de Gestão Empresarial.
              Professor e empresário, Lucas combina conhecimento técnico com
              experiência prática, focando em soluções integradas para o
              crescimento sustentável dos negócios.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.awards}>
        <img
          src="/selo-premio.png"
          alt="Prêmio Melhores do Ano"
          className={styles.awardImage}
        />
        <p>
          <strong>
            Prêmio Melhores do Ano 2023 & 2024 pela Otimiza Pesquisas!
          </strong>
          <br />
          1º Lugar na categoria Assessoria Empresarial em Uberlândia/MG.
        </p>
      </div>
    </section>
  );
}
