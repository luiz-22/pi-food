import React, { useEffect } from "react";
import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { recipeDetail, clearDetail} from "../../redux/actions";
import Loader from "../Loader/Loader";

export default function Detail() {
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(recipeDetail(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <article className="container">
      {detail[0] ? (
        <>
          <br />
          <h2>{detail[0]?.title}</h2>
          <br />
          <article className={styles.detail}>
            <section>
              <h4>Summary:</h4>
              <p dangerouslySetInnerHTML={{ __html: detail[0]?.summary }}></p>
              <h4>Steps:</h4>
              <p>{detail[0].steps}</p>
            </section>
            <section className={styles.right}>
              <div>
                {detail[0].readyInMinutes} minutes &nbsp;{" "}
                {detail[0].healthScore} Healt Score
              </div>
              <br />
              <img
                src={
                  detail[0].image
                    ? detail[0].image
                    : "https://via.placeholder.com/312x231"
                }
                alt="recipe"
              />
              <br /> <br />
              <div>
                {detail[0].diets?.map((el, i) => (
                  <div key={i} className={styles.tag}>
                    <span>{el}</span>
                  </div>
                ))}
              </div>
              <br />
              <div>
                {detail[0].dishTypes?.map((el, i) => (
                  <div key={i} className={styles.tag}>
                    <span>{el}</span>
                  </div>
                ))}
              </div>
            </section>
          </article>
          {/*  */}
        </>
      ) : (
        <Loader />
      )}
    </article>
  );
}
