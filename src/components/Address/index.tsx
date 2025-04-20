import { Buildings, EnvelopeSimple, MapPin, Phone } from "phosphor-react";
import { ButtonContact } from "../ButtonContact";
import styles from "./Address.module.css";

export default function Address() {
  return (
    <>
      <section className={styles.addressSection}>
        <div className={`${styles.column} ${styles.logoArea}`}>
          <img src="/logo_white.svg" alt="Logo da empresa" width={150} />
          <div className={styles.socialIcons}>
            <img src="/logo-facebook.svg" alt="Facebook" width={20} />
            <img src="/logo-instagram.svg" alt="Instagram" width={20} />
          </div>
        </div>
        {/* Coluna 2 - Contato */}
        <div className={`${styles.column} ${styles.contactArea}`}>
          <h2>CONTATO</h2>
          <div className={styles.itens}>
            <span>
              <Phone size={32} color="var(--gray)" /> (34) 3484-9810
            </span>

            <span>
              {" "}
              <Buildings size={32} color="var(--gray)" /> Rua São Vicente de
              Paulo, 07 - Sala 04
            </span>
            <span>
              <MapPin size={32} color="var(--gray)" /> Uberlândia - MG
            </span>
            <span>
              <EnvelopeSimple size={32} color="var(--gray)" />{" "}
              contato@seudominio.com.br
            </span>
          </div>
        </div>
        <div className={styles.ctaColumn}>
          <h2>Vamos conversar?</h2>
          <p>
            Entre em contato com a gente e descubra <br />
            como podemos ajudar sua empresa a crescer.
          </p>
          <ButtonContact />
        </div>
      </section>

      <footer className={styles.footer}>
        {" "}
        © 2025 Todos os direitos reservados | Desenvolvido por{" "}
        <a>
          <span className={styles.customStrike}>hide</span>
          design
        </a>
      </footer>
    </>
  );
}
