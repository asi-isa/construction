import styles from "./SVGCard.module.css";

export default function SVGCard({ svg, subheading, text }) {
  return (
    <article className={styles.card}>
      <div className={styles.svg}>{svg}</div>

      <h3 className={styles.subheading}>{subheading}</h3>

      <p className={styles.text}>{text}</p>
    </article>
  );
}
