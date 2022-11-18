import styles from "./Title.module.css";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <h1 className={styles.title}>
      <section className="container">
        <div className={styles.title2}>
          <span>Recipe Inn</span>
          <Link to="../home">
            <span className={styles.back}>Back</span>
          </Link>
        </div>
      </section>
    </h1>
  );
}
