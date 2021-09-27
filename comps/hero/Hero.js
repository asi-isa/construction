import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import heroBG from "../../public/images/haus_landschaft.jpg";
import { useEffect, useState } from "react";

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
        <Link href="/">
          <a className={styles.info_link}>meine arbeit</a>
        </Link>
        <Link href="/">
          <a className={styles.info_link}>kontakt</a>
        </Link>
      </article>
    </section>
  );
}
