import styles from "./Customers.module.css";

export default function Customers() {
  return (
    <section className={styles.clientes}>
      <h2 className={styles.titulo}>ALGUNS DE NOSSOS CLIENTES</h2>
      <div className={styles.logos}>
        <img
          src="/customer-mg.svg"
          alt="MG Usinagens"
          width={200}
          height={200}
        />
        <img
          src="/customer-normatech.svg"
          alt="Normatech"
          width={200}
          height={200}
        />
         <img
          src="/frios-cia.svg"
          alt="Giro trasnportes"
          width={200}
          height={200}
        />
        <img
          src="/sindicos.svg"
          alt="Giro trasnportes"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
}
