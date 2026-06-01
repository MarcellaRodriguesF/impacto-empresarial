import { WhatsappLogo, ArrowRight, CheckCircle } from "phosphor-react";
import styles from "./CtaBanner.module.css";
import { Reveal } from "../ui/Reveal";
import { whatsappLink } from "../../lib/contact";

const BULLETS = [
  "Diagnóstico inicial sem compromisso",
  "Plano de ação sob medida para o seu negócio",
  "Resposta no mesmo dia útil",
];

export function CtaBanner() {
  return (
    <section className={styles.section} aria-label="Fale com a Impacto">
      <div className="container">
        <Reveal className={styles.card}>
          <div className={styles.glow} aria-hidden />
          <div className="noise" aria-hidden />

          <div className={styles.content}>
            <span className="eyebrow" style={{ color: "var(--gold-200)" }}>
              Vamos começar
            </span>
            <h2 className={styles.title}>
              Pronto para transformar a gestão da sua empresa em{" "}
              <span className="text-gold">resultado real</span>?
            </h2>
            <p className={styles.subtitle}>
              Converse agora com um especialista da Impacto e descubra, em poucos
              minutos, onde estão as maiores oportunidades do seu negócio.
            </p>

            <ul className={styles.bullets}>
              {BULLETS.map((b) => (
                <li key={b}>
                  <CheckCircle size={20} weight="fill" />
                  {b}
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <a
                href={whatsappLink(
                  "Olá! Quero conversar com um especialista da Impacto e receber um diagnóstico da minha empresa."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                <WhatsappLogo size={22} weight="fill" />
                Falar no WhatsApp agora
                <ArrowRight size={18} weight="bold" />
              </a>
              <span className={styles.note}>Atendimento de segunda a sexta, 8h às 18h</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
