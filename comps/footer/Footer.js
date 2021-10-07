import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_copyright_impressum}>
        <p>
          &#169;2021 construction&#174; by{" "}
          <a href="https://isatech.tech" className={styles.isatech}>
            isatech.tecg
          </a>
        </p>
        <Link href="/">
          <a>Impressum & Datenschutz</a>
        </Link>
      </div>
    </footer>
  );
}
