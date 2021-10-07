import styles from "./Contact.module.css";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import Loader from "../loader/Loader";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Popup from "../popup/Popup";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const router = useRouter();
  const recaptchaRef = useRef();
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({});

  async function formHandler(e) {
    e.preventDefault();

    // Execute the reCAPTCHA when the form is submitted
    await recaptchaRef.current.execute();

    // const formData = {};

    // Array.from(e.currentTarget.elements).forEach((formElement) => {
    //   if (formElement.value) formData[formElement.name] = formElement.value;
    // });

    // try {
    //   setSending(true);
    //   await fetch("/api/mail", {
    //     method: "post",
    //     body: JSON.stringify(formData),
    //   });
    //   setShowPopup(true);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   setSending(false);
    // }
  }

  async function onReCAPTCHAChange(captchaCode) {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) return;

    const payload = { captcha: captchaCode };
    const data = {};

    Array.from(formRef.current.elements).forEach((field) => {
      if (!field.value.trim()) return;
      console.log(field.name, field.value);
      data[field.name] = field.value;
    });

    payload["formData"] = data;

    try {
      setSending(true);
      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setShowPopup(true);
      } else {
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeeded
      // so that it can be executed again if user submits another email.
      recaptchaRef.current.reset();
      setSending(false);
    }
  }

  return (
    <>
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
            <h2 className={styles.contact_info_title}>
              Unsere Kontaktinformationen
            </h2>

            <div className={styles.contact_info_con}>
              <p className={styles.contact_info}>
                <AiOutlinePhone className={styles.icon} /> +49 1514 24242424
              </p>
              <p className={styles.contact_info}>
                <AiOutlineMail className={styles.icon} /> isa.tech@email.com
              </p>
              <p className={styles.contact_info}>
                <IoLocationOutline className={styles.icon} /> somestreet 42,
                21212 some city
              </p>
            </div>

            <div className={styles.social_media}>
              <FiFacebook />
              <FiInstagram />
              <FiLinkedin />
            </div>
          </div>

          <form className={styles.form} onSubmit={formHandler} ref={formRef}>
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onReCAPTCHAChange}
            />
            <div className={styles.col_two}>
              <div className={styles.col}>
                <label htmlFor="firstName" className={styles.label}>
                  Vorname
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={styles.input}
                  placeholder="Vorname"
                  required
                />
              </div>
              <div className={styles.col}>
                <label htmlFor="lastName" className={styles.label}>
                  Nachname
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={styles.input}
                  placeholder="Nachname"
                  required
                />
              </div>
            </div>

            <div className={styles.col_two}>
              <div className={styles.col}>
                <label htmlFor="mail" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  className={styles.input}
                  placeholder="Email"
                  required
                />
              </div>
              <div className={styles.col}>
                <label htmlFor="phone" className={styles.label}>
                  Telefonnummer
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className={styles.input}
                  placeholder="Telefonnummer"
                  required
                />
              </div>
            </div>

            <label htmlFor="message" className={styles.label}>
              Nachricht
            </label>

            <textarea
              name="message"
              id="message"
              rows="7"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Nachricht"
              required
            ></textarea>

            <button className={styles.btn}>Senden</button>
          </form>
        </div>
      </section>

      {sending && <Loader />}
      {showPopup && (
        <Popup
          title="Vielen Dank"
          text="Wir haben Ihre Nachricht erhalten."
          text2="Unser Team wird sich so schnell wie möglich mit Ihnen in Verbindung setzen."
          closePopup={() => router.push("/")}
        />
      )}
    </>
  );
}
