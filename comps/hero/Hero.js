import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import heroBG from "../../public/images/haus_landschaft.jpg";
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 0);
  }, []);
  return (
    <section className={styles.hero}>
      <Image src={heroBG} layout="responsive" width={1920} height={1536} />
      <article className={`${styles.info} ${!visible && "transparent"}`}>
        {/* <Link href="/">
          <a className={styles.info_link}>leistungen</a>
        </Link> */}
        <div className={styles.hero_info}>
          <p className={styles.hero_info_text}>Bauen für die Ewigkeit.</p>
        </div>
        <p className={styles.kontakt_info}>
          Wir freuen uns von Ihnen zu hören.
        </p>
        <div className={styles.kontakt}>
          <Link href="/contact">
            <a className={styles.info_link}>
              <HiOutlineMail />
            </a>
          </Link>
          <div className={styles.info_link}>
            <AiOutlinePhone />
          </div>
        </div>
      </article>
    </section>
  );
}
