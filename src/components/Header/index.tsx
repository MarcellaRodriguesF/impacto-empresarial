import styles from './Header.module.css';
import logo from '/logo.svg'; 
import { List } from 'phosphor-react';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logo} alt="Impacto Consultoria & Gestão" className={styles.logo} />
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#solucoes">Soluções</a>
          <a href="#quemsomos">Quem somos</a>
          <a href="#contato">Contato</a>
          <List size={32} className={styles.menuIcon} />
        </nav>
      </div>
    </header>
  );
}
