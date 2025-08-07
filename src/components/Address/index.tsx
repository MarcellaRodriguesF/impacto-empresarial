import {
  Buildings,
  EnvelopeSimple,
  MapPin,
  Phone,
  WhatsappLogo,
} from "phosphor-react";
import { ButtonContact } from "../ButtonContact";
import styles from "./Address.module.css";

export default function Address() {
  return (
    <>
      <section className={styles.addressSection}>
        <div className={`${styles.column} ${styles.logoArea}`}>
          <img src="/logo_white.svg" alt="Logo da empresa" width={150} />
          <div className={styles.socialIcons}>
            <a
              href="https://www.instagram.com/impactogestaoempresarial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Instagram"
            >
              <img src="/logo-instagram.svg" alt="Instagram" width={20} />
            </a>
            <a
              href="https://www.facebook.com/impactogestaoempresarial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga-nos no Facebook"
            >
              <img src="/logo-facebook.svg" alt="Facebook" width={20} />
            </a>
            <a
              href="https://wa.me/553434849810"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Entre em contato via WhatsApp"
            >
              <WhatsappLogo size={20} color="#25D366" weight="fill" />
            </a>
          </div>
        </div>

        <div className={`${styles.column} ${styles.contactArea}`}>
          <h2>CONTATO</h2>
          <div className={styles.itens}>
            <span>
              <Phone size={24} color="#f1c94f" weight="fill" />
              <div>
                <strong>(34) 3484-9810</strong>
                <small>Segunda a Sexta, 8h às 18h</small>
              </div>
            </span>

            <span>
              <Buildings size={24} color="#f1c94f" weight="fill" />
              <div>
                <strong>Rua São Vicente de Paulo, 07 - Sala 04</strong>
                <small>Centro, Uberlândia - MG</small>
              </div>
            </span>

            <span>
              <MapPin size={24} color="#f1c94f" weight="fill" />
              <div>
                <strong>Uberlândia - MG</strong>
                <small>Atendemos toda a região</small>
              </div>
            </span>
          </div>
        </div>
        <div className={styles.ctaColumn}>
          <h2>Vamos conversar?</h2>
          <p>
            Entre em contato conosco e descubra como podemos transformar sua
            empresa através de soluções personalizadas e resultados mensuráveis.
          </p>
          <ButtonContact />
        </div>
      </section>

      <footer className={styles.footer}>
        © 2025 Impacto Gestão Empresarial. Todos os direitos reservados |
        Desenvolvido por{" "}
        <a
          href="https://www.instagram.com/yello.code/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visite o portfólio da Yello Code"
        >
          yello.code ♡
        </a>
      </footer>
    </>
  );
}
