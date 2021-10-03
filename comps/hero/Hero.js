import styles from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";
import heroBG from "../../public/images/haus_landschaft.jpg";
import { useEffect, useState } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import Popup from "../popup/Popup";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 0);
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  function togglePopup() {
    setShowPopup(!showPopup);
  }
  return (
    <section className={styles.hero}>
      <Image
        src={heroBG}
        layout="responsive"
        objectFit="cover"
        width={1920}
        height={1036}
      />
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
          <div className={styles.info_link} onClick={togglePopup}>
            <AiOutlinePhone />
          </div>
        </div>
      </article>

      {showPopup && (
        <Popup
          title="Unsere Rufnummern"
          text="06008 424242"
          text2="+49 0154 424242"
          closePopup={togglePopup}
        />
      )}
    </section>
  );
}
