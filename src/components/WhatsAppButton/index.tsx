import { WhatsappLogo } from "phosphor-react";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const mensagem = encodeURIComponent(
    "Olá! Vim do site e tenho interesse em saber mais sobre seus serviços."
  );

  return (
    <a
      href={`https://wa.me/553434849810?text=${mensagem}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsAppButton}
    >
      <WhatsappLogo size={40} color="#FFF" weight="fill" />
    </a>
  );
}
