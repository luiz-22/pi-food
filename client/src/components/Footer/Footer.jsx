import styles from "./Footer.module.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <section className="container">
        <a
          href="https://www.linkedin.com/in/luiz22/"
          target="_blank"
          rel="noreferrer"
        >
          <img className={styles.brand} src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/luiz-22" target="_blank" rel="noreferrer">
          <img className={styles.brand} src={github} alt="github" />
        </a>
      </section>
    </div>
  );
}
