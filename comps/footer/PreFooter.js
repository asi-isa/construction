import styles from "./PreFooter.module.css";
import Link from "next/link";
import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

export default function PreFooter() {
  return (
    <section className={styles.prefooter}>
      <div className={styles.body}>
        <h1 className={styles.header}>Haben wir Ihr Interesse geweckt?</h1>
        <Link href="/contact">
          <a className={styles.cta}>KONTAKT</a>
        </Link>
      </div>

      <div className={styles.social_links}>
        <a href="/" className={styles.social_link}>
          <FiFacebook />
        </a>
        <a href="/" className={styles.social_link}>
          <FiInstagram />
        </a>
        <a href="/" className={styles.social_link}>
          <FiTwitter />
        </a>
      </div>
    </section>
  );
}
