import styles from "./Customers.module.css";

const LOGOS = [
  { src: "/customer-mg.svg", alt: "MG Usinagens" },
  { src: "/customer-normatech.svg", alt: "Normatech" },
  { src: "/frios-cia.svg", alt: "Frios & Cia" },
  { src: "/sindicos.svg", alt: "Síndicos" },
  { src: "/customer-gt.svg", alt: "Giro Transportes" },
];

export default function Customers() {
  return (
    <section className={styles.section} aria-label="Empresas que confiam na Impacto">
      <div className="container">
        <p className={styles.label}>
          Empresas de diversos setores que confiam na Impacto
        </p>

        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
                loading="lazy"
                aria-hidden={i >= LOGOS.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
