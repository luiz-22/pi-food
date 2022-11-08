import styles from "./NavBar.module.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllRecipes,
  search,
  sortAtoZ,
  sortZtoA,
  sortHealtScoreAsc,
  sortHealtScoreDes,
  filterByDiet,
  // filterByDish,
} from "../../redux/actions";

export default function NavBar() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [filter, setFilter] = useState("");
  // const [filter2, setFilter2] = useState("");
  const diets = useSelector((state) => state.diets);
  // const dishes = useSelector((state) => state.dishes);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(search(input));
    }
    //e.target.inputSearch.value = ''
    setInput("");
  };

  const handleInputChange = (e) => {
    setInput(() => e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelect(() => e.target.value);
    e.target.value === "AZ" && dispatch(sortAtoZ());
    e.target.value === "ZA" && dispatch(sortZtoA());
    e.target.value === "1-100" && dispatch(sortHealtScoreAsc());
    e.target.value === "100-1" && dispatch(sortHealtScoreDes());
  };

  const handleFilterChange = (e) => {
    setFilter(() => e.target.value);
    if (e.target.value === "") return;
    else {
      dispatch(filterByDiet(e.target.value));
    }
  };

  // const handleFilterChange2 = (e) => {
  //   setFilter2(() => e.target.value);
  //   if (e.target.value === "") return;
  //   else {
  //     dispatch(filterByDish(e.target.value));
  //   }
  // };

  return (
    <div className={styles.bg}>
      <nav className={styles.navBar}>
        {/* -------------------- SEARCH -------------------- */}
        <section>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="inputSearch"
              placeholder="Recipe..."
              value={input}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <input type="submit" value="SEARCH" />
          </form>
        </section>

        <section className={styles.right}>
          <div className={styles.rightTop}>
            <button
              className={styles.showAll}
              onClick={() => dispatch(getAllRecipes())}
            >
              SHOW ALL
            </button>
            {/* --------------------- CREATE -------------------- */}
            <Link to="../createRecipe">
              <button className={styles.create}>NEW RECIPE</button>
            </Link>
          </div>

          {/* ----------------- SORT & FILTER ----------------- */}
          <div className={styles.select}>
            {/* -- SORT -- */}
            <select
              className={styles.sort}
              name=""
              id=""
              value={select}
              onChange={handleSelectChange}
            >
              <option value="">Sort by...</option>
              <option value="AZ">Sort by title: A-Z</option>
              <option value="ZA">Sort by title: Z-A</option>
              <option value="1-100">Sort by Health Score: 1 - 100</option>
              <option value="100-1">Sort by Health Score: 100 - 1</option>
            </select>
            {/* -- FILTER DIETS -- */}
            <select name="" id="" value={filter} onChange={handleFilterChange}>
              <option value="">Types of diets</option>
              {diets?.map((el) => {
                return (
                  <option key={el.id} value={el.name}>
                    {el.name}
                  </option>
                );
              })}
            </select>
            {/* -- FILTER DISHES -- */}
            {/* <select name="" id="" value={filter2} onChange={handleFilterChange2}>
              <option value="">Types of diets</option>
              {dishes?.map((el) => {
                return (
                  <option key={el.id} value={el.name}>
                    {el.name}
                  </option>
                );
              })}
            </select> */}
          </div>
        </section>
      </nav>
    </div>
  );
}
