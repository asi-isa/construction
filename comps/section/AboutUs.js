import styles from "./AboutUs.module.css";
import Image from "next/image";
import WorkingMan from "../../public/images/working_man.jpg";
import SVGCard from "./SVGCard";
import { FaPeopleCarry, FaEnvira } from "react-icons/fa";
import { AiFillStar, AiOutlineSafety } from "react-icons/ai";

export default function AboutUs() {
  return (
    <section className={styles.aboutus}>
      <div className={styles.header}>
        {/* <h5 className={styles.subheading}>Über Uns</h5> */}
        <h2 className={styles.heading}>
          Meine Werte. Meine Überzeugungen. Meine Verantwortungen.
        </h2>
      </div>
      <img src="/images/working_man.jpg" alt="ceo" className={styles.img} />

      <div className={styles.svg_cards}>
        <SVGCard
          svg={<FaPeopleCarry />}
          subheading="Gemainsam."
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, quasi corporis."
        />
        <SVGCard
          svg={<FaEnvira />}
          subheading="Nachhaltig."
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, quasi corporis."
        />
        <SVGCard
          svg={<AiFillStar />}
          subheading="Perfektion."
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, quasi corporis."
        />
        <SVGCard
          svg={<AiOutlineSafety />}
          subheading="Sicher."
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, quasi corporis."
        />
      </div>
    </section>
  );
}
