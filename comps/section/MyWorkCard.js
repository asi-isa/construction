import styles from "./MyWorkCard.module.css";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function MyWorkCard({ title, img, text }) {
  const [highlight, setHighlight] = useState(false);
  function toggleHighlight() {
    setHighlight(!highlight);
  }
  return (
    <article className={styles.mywork_item}>
      <Image src={img} layout="fill" objectFit="cover" className={styles.img} />
      <div className={`${styles.info} ${!highlight && "transparent"}`}>
        {text}
      </div>
      <div className={`${styles.btn} `}>
        {!highlight && `mehr über ${title}`}
        {!highlight ? (
          <BsArrowRight onClick={toggleHighlight} />
        ) : (
          <MdClose onClick={toggleHighlight} />
        )}
      </div>
    </article>
  );
}
