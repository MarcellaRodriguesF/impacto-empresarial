import classNames from "classnames";
import styles from "./ButtonContact.module.css";

export function ButtonContact() {
  return (
    <button className={classNames(styles.animarBotao, styles.botao)}>
      Entre em contato
    </button>
  );
}
