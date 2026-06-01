import { Quotes, Star } from "phosphor-react";
import styles from "./Testimonials.module.css";
import { Reveal } from "../ui/Reveal";

const METRICS = [
  { value: "+50", label: "Empresas atendidas" },
  { value: "95%", label: "Índice de satisfação" },
  { value: "3x", label: "Premiada como nº 1" },
  { value: "100%", label: "Conformidade fiscal e jurídica" },
];

const TESTIMONIALS = [
  {
    quote:
      "Saímos do caos para uma gestão organizada. Hoje tenho clareza dos números e tomo decisões com muito mais segurança.",
    name: "Diretoria",
    company: "MG Usinagens",
  },
  {
    quote:
      "O acompanhamento contábil e tributário reduziu nossos custos e nos deixou tranquilos com a parte fiscal. Parceria que vale cada centavo.",
    name: "Gestão",
    company: "Normatech",
  },
  {
    quote:
      "Além da contabilidade, o olhar jurídico preventivo evitou problemas trabalhistas que poderiam ter custado caro. Recomendo sem hesitar.",
    name: "Sócio-fundador",
    company: "Frios & Cia",
  },
];

export function Testimonials() {
  return (
    <section id="resultados" className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <span className="eyebrow">Resultados &amp; Reconhecimento</span>
          <h2 className={styles.title}>
            Quem trabalha com a Impacto{" "}
            <span className="text-gold">cresce com tranquilidade</span>
          </h2>
        </Reveal>

        <div className={styles.metrics}>
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className={styles.metric}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </Reveal>
          ))}
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.company} delay={i * 0.1} className={styles.card}>
              <Quotes size={34} weight="fill" className={styles.quoteIcon} />
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={15} weight="fill" />
                ))}
              </div>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <span className={styles.authorName}>{t.name}</span>
                <span className={styles.authorCompany}>{t.company}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
