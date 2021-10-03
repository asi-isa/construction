import styles from "./Contact.module.css";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
// import { BsMailbox2 } from "react-icons/bs";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.header}>
        <h2 className={styles.title}>Wir freuen uns auf Ihre Nachricht</h2>
        <h4 className={styles.subtitle}>
          Haben Sie noch Fragen? Dann zögern Sie nicht uns eine Mitteilung zu
          senden.
        </h4>
      </div>

      <div className={styles.contact_form}>
        <div className={styles.contact_information}>
          <h3 className={styles.contact_info_title}>
            Unsere Kontaktinformationen
          </h3>

          <div className={styles.contact_info_con}>
            <p className={styles.contact_info}>
              <AiOutlinePhone /> +49 1514 24242424
            </p>
            <p className={styles.contact_info}>
              <AiOutlineMail /> isa.tech@email.com
            </p>
            <p className={styles.contact_info}>
              <IoLocationOutline /> somestreet 42, 21212 some city
            </p>
          </div>

          <div className={styles.social_media}>
            <FiFacebook />
            <FiInstagram />
            <FiLinkedin />
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.col_two}>
            <label htmlFor="firstName" className={styles.label}>
              Vorname
            </label>
            <input
              type="text"
              id="firstName"
              className={styles.input}
              placeholder="Vorname"
              required
            />
            <label htmlFor="lastName" className={styles.label}>
              Nachname
            </label>
            <input
              type="text"
              id="lastName"
              className={styles.input}
              placeholder="Nachname"
              required
            />
          </div>

          <div className={styles.col_two}>
            <label htmlFor="mail" className={styles.label}>
              Email
            </label>
            <input
              type="text"
              id="mail"
              className={styles.input}
              placeholder="Email"
              required
            />
            <label htmlFor="phone" className={styles.label}>
              Telefonnummer
            </label>
            <input
              type="text"
              id="phone"
              className={styles.input}
              placeholder="Telefonnummer"
              required
            />
          </div>

          <label htmlFor="message" className={styles.label}>
            Nachricht
          </label>
          <input
            type="text"
            id="message"
            className={styles.input}
            placeholder="Nachricht"
            required
          />

          <button className={styles.btn}>Senden</button>
        </form>
      </div>
    </section>
  );
}
