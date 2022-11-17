import styles from "./Footer.module.css";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <section className="container">
        <img className={styles.brand} src={linkedin} alt="linkedin" />
        <img className={styles.brand} src={github} alt="github" />
      </section>
    </div>
  );
}
