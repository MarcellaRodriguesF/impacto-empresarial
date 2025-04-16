import { ButtonContact } from "../ButtonContact";
import styles from "./Address.module.css";

export function Address() {
  return (
    <>
      <section id={"contato"} className={styles.container}>
        <div className={styles.box}>
          <div className={styles.address}>
            <span className={styles.amarelo}>ENDEREÇO</span>
            <span>
              Rua Sao Vicente de Paulo, Nº 07, Sala 04 <br />
              Bairro Santa Mônica 4 <br />
              Uberlândia - MG
            </span>
          </div>
          <div className={styles.contactInfo}>
            <ButtonContact />
            <div className={styles.social}>
              <img src="/logo-facebook.svg" alt="Logo do Facebook" width={35} />
              <img
                src="/logo-instagram.svg"
                alt="Logo do Facebook"
                width={35}
              />
            </div>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/agencia.mfr/"
          className={styles.agencyName}
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Agência MFR.
        </a>
      </footer>
    </>
  );
}
