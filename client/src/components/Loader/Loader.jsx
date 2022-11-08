import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className="loader">
        <h1>Cooking in progress..</h1>
        <div id="cooking">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div id="area">
            <div id="sides">
              <div id="pan"></div>
              <div id="handle"></div>
            </div>
            <div id="pancake">
              <div id="pastry"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
