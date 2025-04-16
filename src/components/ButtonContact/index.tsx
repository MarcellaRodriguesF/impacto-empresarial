import styles from "./ButtonContact.module.css";

export function ButtonContact() {
  const mensagem = encodeURIComponent(
    "Olá! Vim do site e tenho interesse em saber mais sobre seus serviços."
  );

  return (
    <a
      href={`https://wa.me/553434849810?text=${mensagem}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.botao}
    >
      Entre em contato
    </a>
  );
}
