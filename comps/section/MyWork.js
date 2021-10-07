import styles from "./MyWork.module.css";
import MyWorkCard from "./MyWorkCard";
import mywork1 from "../../public/images/mywork1.jpg";
import mywork2 from "../../public/images/mywork2.jpg";
import mywork3 from "../../public/images/mywork3.jpg";
import mywork4 from "../../public/images/mywork4.jpg";

export default function MyWork() {
  return (
    <section className={styles.mywork} id="mywork">
      <div className={styles.header}>
        <h2 className={styles.title}>Unsere Leistungen</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis
          deserunt hic minima cupiditate vitae, voluptatem fuga obcaecati,
          ullam, non veritatis?
        </p>
      </div>

      <div className={styles.mywork_con}>
        <MyWorkCard
          img={mywork1}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto perferendis sit illum odio modi ipsam itaque? Maiores, et.
        Obcaecati!"
          title="Holz"
        />
        <MyWorkCard
          img={mywork2}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto!"
          title="Metall"
        />
        <MyWorkCard
          img={mywork3}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto!"
          title="Konstruktion"
        />
        <MyWorkCard
          img={mywork4}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto!"
          title="modernes Bauen"
        />
      </div>
    </section>
  );
}
