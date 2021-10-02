import styles from "./Popup.module.css";
import { AiOutlineCloseSquare } from "react-icons/ai";

export default function Popup({ title, text, text2, closePopup }) {
  return (
    <>
      <div className={styles.modal}></div>

      <article className={styles.popup}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <AiOutlineCloseSquare
            onClick={closePopup}
            className={styles.closeBTN}
          />
        </div>
        <p className={styles.text}>{text}</p>
        <p className={styles.text2}>{text2}</p>
      </article>
    </>
  );
}
