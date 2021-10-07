import { useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Logo from "../logo/Logo";

export default function Header() {
  const [showHamMenu, setShowHamMenu] = useState(false);
  function toggleHamMenu() {
    setShowHamMenu(!showHamMenu);
  }
  return (
    <>
      {showHamMenu && <div className={styles.modal}></div>}
      <header className={styles.header}>
        <Link href="/">
          <a className={styles.firma}>a.s.i.</a>
        </Link>
        <Logo />
        <div
          className={`${styles.ham} ${showHamMenu && styles.active}`}
          onClick={toggleHamMenu}
        ></div>
        <nav className={`${styles.nav} ${!showHamMenu && "transparent"}`}>
          <ul className={styles.ul}>
            <li className={styles.li} onClick={toggleHamMenu}>
              <Link href="/">
                <a className={styles.link}>Leistungen</a>
              </Link>
            </li>
            <li className={styles.li} onClick={toggleHamMenu}>
              <Link href="/">
                <a className={styles.link}>Über Uns</a>
              </Link>
            </li>
            <li className={styles.li} onClick={toggleHamMenu}>
              <Link href="/contact">
                <a className={styles.link}>Kontakt</a>
              </Link>
            </li>
            <li className={styles.li} onClick={toggleHamMenu}>
              <Link href="/contact">
                <a className={styles.link}>Jobs</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
