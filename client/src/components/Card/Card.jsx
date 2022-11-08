import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  title,
  image,
  minutes,
  healthScore,
  diets,
}) {
  return (
    <div className={styles.card}>
      <Link to={`../detail/${id}`}>
        <img src={image} alt={title} />
        <div className={styles.text}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          <article className={styles.time}>
             {minutes} minutes  &nbsp; &nbsp; {healthScore} Healt Score
          </article>
          <article className={styles.diets}>
            {diets?.map((el, index) => {
              return <span key={index}>{el}</span>;
            })}
          </article>
        </div>
      </Link>
    </div>
  );
}
