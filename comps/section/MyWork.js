import styles from "./MyWork.module.css";
import MyWorkCard from "./MyWorkCard";
import modernWoodHouse from "../../public/images/mywork1.jpg";

export default function MyWork() {
  return (
    <section className={styles.mywork} id="mywork">
      <div className={styles.header}>
        <h5 className={styles.subheading}>meine arbeit</h5>
        <h2 className={styles.heading}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h2>
      </div>

      <div className={styles.mywork_con}>
        <MyWorkCard
          img={modernWoodHouse}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto perferendis sit illum odio modi ipsam itaque? Maiores, et.
        Obcaecati!"
          title="holz"
        />
        <MyWorkCard
          img={modernWoodHouse}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iste
        architecto!"
          title="holz"
        />
      </div>
    </section>
  );
}
