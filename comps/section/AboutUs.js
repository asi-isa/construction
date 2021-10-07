import styles from "./AboutUs.module.css";
import Image from "next/image";
import WorkingMan from "../../public/images/working_man.jpg";
import SVGCard from "./SVGCard";
import { FaPeopleCarry, FaEnvira } from "react-icons/fa";
import { AiFillStar, AiOutlineSafety } from "react-icons/ai";

export default function AboutUs() {
  return (
    <section className={styles.aboutus} id="about_us">
      <div className={styles.resp_cont}>
        <div className={styles.header}>
          {/* <h5 className={styles.subheading}>Über Uns</h5> */}
          <div className={styles.heading}>
            <h2 className={styles.title}>Unsere Werte.</h2>
            <h2 className={styles.title}>Unsere Überzeugungen.</h2>
            <h2 className={styles.title}>Unsere Verantwortung.</h2>
          </div>

          <p className={styles.additional_content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui modi
            accusantium distinctio eius reprehenderit excepturi.
          </p>
        </div>
        <img src="/images/working_man.jpg" alt="ceo" className={styles.img} />
      </div>

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
