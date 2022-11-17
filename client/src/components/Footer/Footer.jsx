import styles from "./Footer.module.css";
import { ReactComponent as github } from '../../assets/github.svg';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <section className="container">
        <img src={github} alt="" />
      </section>
    </div>
  );
}
