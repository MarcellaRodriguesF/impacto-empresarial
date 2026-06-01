import { useEffect, useState } from "react";
import { List, X, WhatsappLogo } from "phosphor-react";
import styles from "./Header.module.css";
import logoWhite from "/logo_white.svg";
import { whatsappLink } from "../../lib/contact";

const NAV_LINKS = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#autoridade", label: "Quem somos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand} aria-label="Impacto — início">
          <img src={logoWhite} alt="Impacto Consultoria & Gestão" className={styles.logo} />
        </a>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            <WhatsappLogo size={18} weight="fill" />
            Falar com especialista
          </a>

          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen(true)}
            aria-label="Abrir menu"
          >
            <List size={26} weight="bold" />
          </button>
        </div>
      </div>

      <div
        className={`${styles.backdrop} ${isOpen ? styles.show : ""}`}
        onClick={close}
      />

      <aside className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <button className={styles.closeBtn} onClick={close} aria-label="Fechar menu">
          <X size={26} weight="bold" />
        </button>

        <nav className={styles.drawerNav}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.drawerCta}
          onClick={close}
        >
          <WhatsappLogo size={20} weight="fill" />
          Falar com especialista
        </a>
      </aside>
    </header>
  );
}
