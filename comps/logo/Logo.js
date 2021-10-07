import { useEffect, useState } from "react";
import styles from "./Logo.module.css";
import { useRouter } from "next/router";

export default function Logo() {
  const router = useRouter();
  const [move, setMove] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMove(true);
    }, 0);
  }, []);

  return (
    <svg
      width="70"
      height="33"
      viewBox="0 0 140 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
      onClick={() => router.push("/")}
    >
      <g id="Frame 1">
        <g id="triangles">
          <g id="light_triangles">
            <path
              id="light_1"
              className={`${styles.light_1} ${move && styles.move_1}`}
              d="M68.7926 47.9377C70.7121 49.1067 70.7121 51.8933 68.7926 53.0623L22.8104 81.0648C20.8112 82.2822 18.25 80.8432 18.25 78.5025V22.4975C18.25 20.1568 20.8112 18.7178 22.8104 19.9352L68.7926 47.9377Z"
            />
            <path
              id="light_2"
              className={`${styles.light_2} ${move && styles.move_2}`}
              d="M85.7926 47.9377C87.7121 49.1067 87.7121 51.8933 85.7926 53.0623L39.8104 81.0648C37.8112 82.2822 35.25 80.8432 35.25 78.5025V22.4975C35.25 20.1568 37.8112 18.7178 39.8104 19.9352L85.7926 47.9377Z"
            />
          </g>
          <g id="dark_triangles">
            <path
              id="dark_1"
              className={`${styles.dark_1} ${move && styles.move_3}`}
              d="M68.7926 47.9377C70.7121 49.1067 70.7121 51.8933 68.7926 53.0623L22.8104 81.0648C20.8112 82.2822 18.25 80.8432 18.25 78.5025V22.4975C18.25 20.1568 20.8112 18.7178 22.8104 19.9352L68.7926 47.9377Z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
