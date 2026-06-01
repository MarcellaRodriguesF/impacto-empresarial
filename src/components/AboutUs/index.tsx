import {
  Scales,
  Strategy,
  Handshake,
  Trophy,
  GraduationCap,
} from "phosphor-react";
import styles from "./AboutUs.module.css";
import { Reveal } from "../ui/Reveal";

const DIFFERENTIALS = [
  {
    icon: Scales,
    title: "Visão jurídica + gestão",
    text: "Estratégia de negócio aliada a segurança jurídica real, não só teoria.",
  },
  {
    icon: Strategy,
    title: "Soluções integradas",
    text: "Todas as áreas conversando entre si, sob um único comando estratégico.",
  },
  {
    icon: Handshake,
    title: "Atendimento próximo",
    text: "Acompanhamento contínuo e consultivo — você nunca fica sozinho.",
  },
];

const PARTNERS = [
  {
    photo: "/kauedelnero.png",
    name: "Kauê Del Nero",
    role: "Sócio · Jurídico & Tributário",
    credentials:
      "Bacharel em Direito, especialista em Direito e Processo do Trabalho, Direito Tributário Empresarial e Gestão Empresarial. Professor de Direito, traz visão estratégica e segurança legal para as empresas atendidas.",
  },
  {
    photo: "/lucasveiga.png",
    name: "Lucas Veiga",
    role: "Sócio · Gestão & Negócios",
    credentials:
      "Bacharel em Direito, especialista em Direito Civil, Consumerista e Imobiliário, além de Gestão Empresarial. Professor e empresário, une conhecimento técnico e experiência prática para o crescimento sustentável dos negócios.",
  },
];

export function AboutUs() {
  return (
    <section id="autoridade" className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <Reveal className={styles.intro}>
            <span className="eyebrow">Quem somos</span>
            <h2 className={styles.title}>
              Autoridade construída com{" "}
              <span className="text-gold">técnica, ética e resultado</span>
            </h2>
            <p className={styles.lead}>
              A Impacto Consultoria & Gestão Empresarial nasceu para ser referência
              em assessoria empresarial. Unimos direito, gestão e estratégia em um
              só lugar, ajudando empresas a crescerem com organização, segurança e
              previsibilidade.
            </p>

            <div className={styles.diffList}>
              {DIFFERENTIALS.map((d) => {
                const Icon = d.icon;
                return (
                  <div className={styles.diff} key={d.title}>
                    <div className={styles.diffIcon}>
                      <Icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <h4>{d.title}</h4>
                      <p>{d.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className={styles.awardCard} delay={0.15}>
            <img src="/selo-premio.png" alt="Selo Prêmio Melhores do Ano" />
            <Trophy size={26} weight="fill" className={styles.trophy} />
            <strong>Prêmio Melhores do Ano</strong>
            <span className={styles.years}>2023 · 2024 · 2025</span>
            <p>
              1º lugar na categoria <b>Assessoria Empresarial</b> em
              Uberlândia/MG, pela Otimiza Pesquisas.
            </p>
          </Reveal>
        </div>

        <div className={styles.partners}>
          <Reveal>
            <span className={styles.partnersLabel}>
              <GraduationCap size={18} weight="duotone" />
              Liderança especializada
            </span>
          </Reveal>

          <div className={styles.partnersGrid}>
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.12} className={styles.partner}>
                <div className={styles.photoWrap}>
                  <img src={p.photo} alt={p.name} />
                </div>
                <div className={styles.partnerInfo}>
                  <h3>{p.name}</h3>
                  <span className={styles.partnerRole}>{p.role}</span>
                  <p>{p.credentials}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
