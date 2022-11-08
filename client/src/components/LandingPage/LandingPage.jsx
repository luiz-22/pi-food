import { useSelector } from "react-redux";
import styles from "./LandingPage.module.css";
import bg from "./assets/bg.jpg";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      <section>
        <img className={styles.imageLanding} src={bg} alt="bgStart" />
        <div className={styles.bgOpacity}></div>

        <header className={styles.viewportHeader}>
          <h1>Recipe Inn</h1>
          <Link to="home">
            <div className={styles.buttonLanding}>ENTER</div>
          </Link>
        </header>
      </section>
      {recipes.length === 0 && <Loader />}
    </>
  );
}
