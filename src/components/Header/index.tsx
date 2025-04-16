import { useState } from "react";
import styles from "./Header.module.css";
import logo from "/logo.svg";
import { List, X } from "phosphor-react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img
          src={logo}
          alt="Impacto Consultoria & Gestão"
          className={styles.logo}
        />

        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#solucoes">Soluções</a>
          <a href="#quemsomos">Quem somos</a>
          <a href="#contato">Contato</a>
          <List size={32} className={styles.menuIcon} onClick={toggleModal} />
        </nav>
      </div>

      <div className={`${styles.backdrop} ${isModalOpen ? styles.show : ''}`} onClick={closeModal} />

<aside className={`${styles.mobileMenu} ${isModalOpen ? styles.open : ''}`} onClick={(e) => e.stopPropagation()}>
  <button className={styles.closeButton} onClick={closeModal}>
    <X size={32} />
  </button>
  <a href="#home" onClick={closeModal}>Home</a>
  <a href="#solucoes" onClick={closeModal}>Soluções</a>
  <a href="#quemsomos" onClick={closeModal}>Quem somos</a>
  <a href="#contato" onClick={closeModal}>Contato</a>
</aside>
    </header>
  );
}
