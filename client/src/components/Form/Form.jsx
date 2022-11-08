import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createRecipe } from "../../redux/actions";
import styles from "./Form.module.css";

function validate(form) {
  let errors = {};
  if (!form.title.trim()) {
    errors.title = "Title is require";
  }
  if (!form.summary.trim()) {
    errors.summary = "Summary is require";
  }
  if (form.healthScore < 0 || form.healthScore > 100) {
    errors.healthScore = "Healt Score 0 - 100";
  }
  if (form.readyInMinutes < 0 || form.readyInMinutes > 240) {
    errors.readyInMinutes = "Minutes 0 - 240";
  }

  return errors;
}

export default function Form() {
  const diets = useSelector((state) => state.diets);
  const dishes = useSelector((state) => state.dishes);
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const [error, setError] = useState({});

  const [form, setForm] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    readyInMinutes: 0,
    dishTypes: [],
    steps: "",
    image: "",
    diets: [],
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (
      Object.keys(error).length === 0 &&
      form.title.trim() !== "" &&
      form.summary.trim() !== "" &&
      form.healthScore >= 0 &&
      form.healthScore <= 99 &&
      form.readyInMinutes >= 0 &&
      form.readyInMinutes <= 240
    ) {
      dispatch(createRecipe(form));
      setForm({
        title: "",
        summary: "",
        healthScore: 0,
        readyInMinutes: 0,
        dishTypes: [],
        steps: "",
        image: "",
        diets: [],
      });
      navegate("/home");
    } else {
      alert("Check the fields.");
    }
  }

  const handleChange = (e) => {   
    setForm((prevInput) => {
      const newInput = {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
      setError(validate(newInput));
      return newInput;
    });
  };

  let handleCheck = (e) => {
    let newArray = form.diets;
    let find = newArray.indexOf(e.target.value);

    if (find >= 0) {  
      newArray.splice(find, 1);
    } else {
      newArray.push(e.target.value);
    }

    setForm({
      ...form,
      diets: newArray,
    });
  };

  let handleCheck2 = (e) => {
    let newArray = form.dishTypes;
    let find = newArray.indexOf(e.target.value);

    if (find >= 0) {
      newArray.splice(find, 1);
    } else {
      newArray.push(e.target.value);
    }

    setForm({
      ...form,
      dishTypes: newArray,
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <section>
          <p>
            <span className={styles.error}>
              <label>Title*</label>
              {!error.title ? null : <span>{error.title}</span>}
            </span>
            <br />
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              autoComplete="off"
            />
          </p>
          <p>
            <span className={styles.error}>
              <label>Summary*</label>
              {!error.summary ? null : <span>{error.summary}</span>}
            </span>
            <br />
            <textarea
              name="summary"
              id=""
              cols="30"
              rows="10"
              value={form.summary}
              onChange={handleChange}
              autoComplete="off"
            ></textarea>
          </p>
          <p>
            <label>Steps</label>
            <br />
            <textarea
              name="steps"
              id=""
              cols="30"
              rows="10"
              value={form.steps}
              onChange={handleChange}
              autoComplete="off"
            ></textarea>
          </p>
          <p>
            <label>Image url</label>
            <br />
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              autoComplete="off"
            />
          </p>
          <p>
            <span className={styles.error}>
              <label>Health Score</label>
              {!error.healthScore ? null : <span>{error.healthScore}</span>}
            </span>
            <br />
            <input
              type="number"
              name="healthScore"
              value={form.healthScore}
              onChange={handleChange}
            />
          </p>
          <p>
            <span className={styles.error}>
              <label>Ready in (minutes):</label>
              {!error.readyInMinutes ? null : (
                <span>{error.readyInMinutes}</span>
              )}
            </span>
            <br />
            <input
              type="number"
              name="readyInMinutes"
              value={form.readyInMinutes}
              onChange={handleChange}
            />
          </p>
        </section>

        <section>
          <article className={styles.check}>
            <p>
              <label>Diets</label>
              {diets.map((d) => {
                return (
                  <div key={d.id} className={styles.checkDiets}>
                    <label htmlFor={d.name}>{d.name}</label>
                    <input
                      type="checkbox"
                      id={d.name}
                      name={d.name}
                      value={d.name}
                      onChange={handleCheck}
                    />
                  </div>
                );
              })}
            </p>
            <p>
              <label>Types of dishes</label>
              {dishes.map((d) => {
                return (
                  <div key={d.id} className={styles.checkDishes}>
                    <label htmlFor={d.name}>{d.name}</label>
                    <input
                      type="checkbox"
                      id={d.name}
                      name={d.name}
                      value={d.name}
                      onChange={handleCheck2}
                    />
                  </div>
                );
              })}
            </p>
          </article>
          <div>
            <button>CREATE RECIPE</button>
          </div>
        </section>
      </form>
    </div>
  );
}
