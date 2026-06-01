import {
  ChartLineUp,
  ClipboardText,
  Graph,
  Megaphone,
  ShieldCheck,
  UsersThree,
  ArrowUpRight,
} from "phosphor-react";
import styles from "./Solution.module.css";
import { Reveal } from "../ui/Reveal";

const SERVICES = [
  {
    icon: ChartLineUp,
    title: "Gestão Empresarial Completa",
    description:
      "Estruturamos processos, indicadores e rotina financeira para um crescimento sustentável e sob controle.",
    benefit: "Decisões baseadas em dados, não em achismo",
    featured: true,
  },
  {
    icon: ClipboardText,
    title: "Gestão Contábil e Tributária",
    description:
      "Contabilidade completa, gestão de impostos e planejamento tributário sob medida para o seu regime.",
    benefit: "Menos imposto pago dentro da lei",
  },
  {
    icon: UsersThree,
    title: "RH e Segurança do Trabalho",
    description:
      "Folha de pagamento, gestão de pessoas e conformidade em segurança do trabalho do início ao fim.",
    benefit: "Equipe em dia e empresa protegida",
  },
  {
    icon: Graph,
    title: "Diagnóstico Empresarial",
    description:
      "Análises periódicas de performance e avaliação de produtos e serviços para revelar onde está o lucro.",
    benefit: "Oportunidades de melhoria mapeadas",
  },
  {
    icon: ShieldCheck,
    title: "Jurídico Preventivo Trabalhista",
    description:
      "Ajustamos práticas internas e orientamos sua equipe para evitar passivos e surpresas trabalhistas.",
    benefit: "Risco de processos reduzido",
  },
  {
    icon: Megaphone,
    title: "Soluções de Marketing",
    description:
      "Estratégias criativas para atrair, engajar e converter clientes, dando visibilidade real à sua marca.",
    benefit: "Mais clientes chegando até você",
  },
];

export function Solution() {
  return (
    <section id="solucoes" className={styles.section}>
      <div className="container">
        <Reveal className={styles.header}>
          <span className="eyebrow">Soluções</span>
          <h2 className={styles.title}>
            Uma consultoria, <span className="text-gold">todas as áreas</span> que
            sustentam o seu negócio
          </h2>
          <p className={styles.intro}>
            Reunimos gestão, contabilidade, jurídico, RH e marketing em um único
            parceiro estratégico — para você cuidar do crescimento enquanto
            cuidamos da estrutura.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.title}
                delay={(i % 3) * 0.08}
                className={`${styles.card} ${service.featured ? styles.featured : ""}`}
              >
                <div className={styles.iconWrap}>
                  <Icon size={28} weight="duotone" />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <span className={styles.benefit}>
                  <ArrowUpRight size={16} weight="bold" />
                  {service.benefit}
                </span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
