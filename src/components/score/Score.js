import style from "./Score.module.css";

function Score() {
  return (
    <div className={style["root"]}>
      <span className={style["note"]}>score</span>
      <span className={style["value"]}>12</span>
    </div>
  );
}

export { Score };
