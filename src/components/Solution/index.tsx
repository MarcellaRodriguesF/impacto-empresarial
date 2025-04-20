import { ChartLineUp, ClipboardText, Graph, Megaphone, ShieldCheck, UsersThree } from "phosphor-react";
import { motion } from "framer-motion";

import styles from "./Solution.module.css";

export function Solution() {
  const serviceItems = [
    {
      icon: <ChartLineUp size={40} color="var(--yellow)" weight="fill" />,
      title: "Gestão Empresarial Completa",
      description:
        "Otimização de processos e estratégias para o crescimento sustentável das empresas."
    },
    {
      icon: <ClipboardText size={40} color="var(--yellow)" />,
      title: "Gestão Contábil e Tributária",
      description:
        "Contabilidade completa, gestão de impostos e planejamento tributário."
    },
    {
      icon: <UsersThree size={40} color="var(--yellow)" />,
      title: "Recursos Humanos e Segurança do Trabalho",
      description:
        "Administração de folha de pagamento, gestão de equipes e garantia de conformidade em segurança do trabalho."
    },
    {
      icon: <Graph size={40} color="var(--yellow)" />,
      title: "Diagnóstico Empresarial",
      description:
        "Análises periódicas de performance, avaliação de produtos/serviços e identificação de oportunidades de melhoria."
    },
    {
      icon: <ShieldCheck size={40} color="var(--yellow)" />,
      title: "Jurídico Preventivo Trabalhista",
      description:
        "Cuidamos da conformidade legal, orientamos sua equipe e ajustamos práticas internas para evitar surpresas jurídicas trabalhistas."
    },
    {
      icon: <Megaphone size={40} color="var(--yellow)" />,
      title: "Soluções de Marketing",
      description:
        "Ajudamos sua marca a se destacar com estratégias criativas e eficazes, para atrair, engajar e converter clientes."
    }
  ];
  
    return (
      <section id="solucoes" className={styles.solutionsSection}>
        <h2 className={styles.title}>SOLUÇÕES</h2>
  
        <div className={styles.content}>
          <p className={styles.description}>
            A Impacto Consultoria e Gestão Empresarial é destaque e referência
            quando o assunto é:
          </p>
  
          <div className={styles.services}>
            {serviceItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.serviceItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.containerIcon}>{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

