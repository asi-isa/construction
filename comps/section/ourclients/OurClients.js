import styles from "./OurClients.module.css";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";
import { IoLogoVercel, IoLogoReact } from "react-icons/io5";
import { RiPlantLine } from "react-icons/ri";

export default function OurClients() {
  return (
    <section className={styles.ourclients}>
      <article className={styles.header}>
        <h1 className={styles.title}>Unsere Kunden</h1>
        <p className={styles.info}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          suscipit at hic exercitationem error corrupti doloribus esse, alias et
          voluptatibus ex!
        </p>
      </article>

      <div className={styles.clients}>
        <article className={styles.client}>
          <AiFillApple className={styles.client_logo} />
          <h3 className={styles.client_name}>Apple</h3>
        </article>
        <article className={styles.client}>
          <AiOutlineGoogle className={styles.client_logo} />
          <h3 className={styles.client_name}>Google</h3>
        </article>
        <article className={styles.client}>
          <IoLogoVercel className={styles.client_logo} />
          <h3 className={styles.client_name}>Vercel</h3>
        </article>
        <article className={styles.client}>
          <IoLogoReact className={styles.client_logo} />
          <h3 className={styles.client_name}>react.js</h3>
        </article>
        {/* <article className={styles.client}>
          <RiPlantLine className={styles.client_logo} />
          <h3 className={styles.client_name}>stay_green</h3>
        </article> */}
      </div>
    </section>
  );
}
