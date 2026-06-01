import {
  Buildings,
  MapPin,
  Phone,
  WhatsappLogo,
  ArrowUpRight,
} from "phosphor-react";
import styles from "./Address.module.css";
import { CONTACT, whatsappLink } from "../../lib/contact";

const NAV = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#autoridade", label: "Quem somos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#home", label: "Início" },
];

const SOLUTIONS = [
  "Gestão Empresarial",
  "Contábil e Tributário",
  "RH e Segurança",
  "Jurídico Preventivo",
];

export default function Address() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.top} />

      <div className={styles.inner}>
        {/* Marca */}
        <div className={styles.brandCol}>
          <img src="/logo_white.svg" alt="Impacto Consultoria & Gestão" className={styles.logo} />
          <p className={styles.tagline}>
            Consultoria e gestão empresarial que transforma organização em
            resultado. Premiada como referência em Uberlândia/MG.
          </p>
          <div className={styles.social}>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/logo-instagram.svg" alt="" width={20} height={20} />
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/logo-facebook.svg" alt="" width={20} height={20} />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img src="/logo-wpp.svg" alt="" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Navegação */}
        <nav className={styles.linksCol} aria-label="Navegação">
          <h3>Navegação</h3>
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Soluções */}
        <div className={styles.linksCol}>
          <h3>Soluções</h3>
          <ul>
            {SOLUTIONS.map((item) => (
              <li key={item}>
                <a href="#solucoes">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div className={styles.contactCol}>
          <h3>Contato</h3>
          <ul className={styles.contactList}>
            <li>
              <Phone size={20} weight="fill" />
              <div>
                <strong>{CONTACT.phoneLabel}</strong>
                <small>{CONTACT.hours}</small>
              </div>
            </li>
            <li>
              <Buildings size={20} weight="fill" />
              <div>
                <strong>{CONTACT.addressLine}</strong>
                <small>{CONTACT.addressCity}</small>
              </div>
            </li>
            <li>
              <MapPin size={20} weight="fill" />
              <div>
                <strong>Uberlândia — MG</strong>
                <small>Atendemos toda a região</small>
              </div>
            </li>
          </ul>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <WhatsappLogo size={20} weight="fill" />
            Falar com especialista
            <ArrowUpRight size={16} weight="bold" />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Impacto Consultoria & Gestão Empresarial. Todos os direitos reservados.</span>
        <span className={styles.credit}>
          Desenvolvido por{" "}
          <a
            href="https://www.instagram.com/yello.code/"
            target="_blank"
            rel="noopener noreferrer"
          >
            yello.code
          </a>
        </span>
      </div>
    </footer>
  );
}
