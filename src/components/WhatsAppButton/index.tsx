import { WhatsappLogo } from "phosphor-react";
import styles from "./WhatsAppButton.module.css";
import { whatsappLink } from "../../lib/contact";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsAppButton}
      aria-label="Falar no WhatsApp"
    >
      <WhatsappLogo size={32} color="#FFF" weight="fill" />
      <span className={styles.tooltip}>Fale conosco</span>
    </a>
  );
}
