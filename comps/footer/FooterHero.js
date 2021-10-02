import styles from "./FooterHero.module.css";
import Link from "next/link";

import { FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";

export default function FooterHero() {
  return (
    <section className={styles.footer_hero}>
      <div className={styles.footer_body}>
        <h1 className={styles.footer_header}>
          Haben wir Ihr Interesse geweckt?
        </h1>
        <Link href="/contact">
          <a className={styles.footer_cta}>KONTAKT</a>
        </Link>
      </div>

      <div className={styles.footer_social_links}>
        <a href="/" className={styles.footer_social_link}>
          <FiFacebook />
        </a>
        <a href="/" className={styles.footer_social_link}>
          <FiInstagram />
        </a>
        <a href="/" className={styles.footer_social_link}>
          <FiTwitter />
        </a>
      </div>
    </section>
  );
}
