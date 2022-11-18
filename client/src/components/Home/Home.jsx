import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import styles from "./Home.module.css";

export default function Home() {
  const recipes = useSelector((state) => state.recipes);

  const [pageArray, setPageArray] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [toggleNext, settoggleNext] = useState(false);
  const [togglePrev, settogglePrev] = useState(true);

  useEffect(() => {
    setPage(() => 1);
    setPages(() => Math.ceil(recipes.length / 9));
    setPageArray(() => recipes.slice(9 * (page - 1), 9 + 9 * (page - 1))); // (1) recipes.slice(0,9) - (2) recies.slice(9,18) - ...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPage(() => 1);
    setPages(() => Math.ceil(recipes.length / 9));
  }, [recipes]);

  useEffect(() => {
    setPageArray(() => recipes.slice(9 * (page - 1), 9 + 9 * (page - 1)));
  }, [recipes, page]);

  useEffect(() => {
    if (page === pages || !pageArray.length) {
      settoggleNext(true);
    } else {
      settoggleNext(false);
    }

    if (page === 1) {
      settogglePrev(true);
    } else {
      settogglePrev(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pages]);

  function pageForward() {
    setPage((page) => page + 1);
    scrollTop();
  }

  function pageBackwards() {
    setPage((page) => page - 1);
    scrollTop();
  }

  function scrollTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <section className={styles.gridFluid}>
        {pageArray.length ? (
          pageArray?.map((el) => {
            return (
              <Card
                key={el.id}
                id={el.id}
                title={el.title}
                image={
                  el.image ? el.image : "https://via.placeholder.com/312x231"
                }
                minutes={el.readyInMinutes}
                healthScore={el.healthScore}
                diets={el.diets}
              />
            );
          })
        ) : (
          <></>
        )}
      </section>

      {pages > 1 ? (
        <div className={styles.paginated}>
          <button
            id="btnPrevPage"
            disabled={togglePrev}
            onClick={() => pageBackwards()}
          >
            PREV
          </button>
          <span>{page}</span>
          <button
            id="btnNextPage"
            disabled={toggleNext}
            onClick={() => pageForward()}
          >
            NEXT
          </button>
        </div>
      ) : null}
      {recipes.length === 0 && <Loader />}
    </>
  );
}
