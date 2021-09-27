import styles from "./MyWork.module.css";
import Image from "next/image";
import { useState } from "react";

export default function MyWork() {
  const [highlight, setHighlight] = useState(false);
  function toggleHighlight() {
    setHighlight(!highlight);
  }
  return (
    <section className={styles.mywork} id="mywork">
      <div className={styles.header}>
        <h5 className={styles.subheading}>meine arbeit</h5>
        <h2 className={styles.heading}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h2>
      </div>

      <div className={styles.mywork_con}>
        <article className={`${styles.mywork_item} `} onClick={toggleHighlight}>
          <Image
            src="/images/mywork1.jpg"
            layout="fill"
            objectFit="cover"
            className={styles.img}
          />
          <div className={`${styles.info} ${!highlight && "transparent"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
            architecto perferendis sit illum odio modi ipsam itaque? Maiores,
            et. Obcaecati!
          </div>
        </article>
      </div>
    </section>
  );
}
