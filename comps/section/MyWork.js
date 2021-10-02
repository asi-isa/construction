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
        <h5 className={styles.subheading}>Unsere Leistungen</h5>
        <h2 className={styles.heading}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h2>
      </div>

      <div className={styles.mywork_con}>
        <MyWorkCard
          img={mywork1}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto perferendis sit illum odio modi ipsam itaque? Maiores, et.
        Obcaecati!"
          title="holz"
        />
        <MyWorkCard
          img={mywork2}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto!"
          title="metall"
        />
        <MyWorkCard
          img={mywork3}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto!"
          title="konstruktion"
        />
        <MyWorkCard
          img={mywork4}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto!"
          title="modern bauen"
        />
      </div>
    </section>
  );
}
