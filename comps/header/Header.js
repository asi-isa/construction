import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  const [showHamMenu, setShowHamMenu] = useState(false);
  function toggleHamMenu() {
    setShowHamMenu(!showHamMenu);
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.firm}>a.s.i.</h1>
      <div
        className={`${styles.ham} ${showHamMenu && styles.active}`}
        onClick={toggleHamMenu}
      ></div>
      <nav className={`${styles.nav} ${!showHamMenu && "transparent"}`}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/">
              <a className={styles.link}>Leistungen</a>
            </Link>
          </li>
          <li className={styles.li}>über mich</li>
          <li className={styles.li}>kontakt</li>
          <li className={styles.li}>jobs</li>
        </ul>
      </nav>
    </header>
  );
}
