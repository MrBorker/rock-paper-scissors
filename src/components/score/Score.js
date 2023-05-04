import style from "./Score.module.css";
import { useContext } from "react";
import { ScoreContext } from "../../context";

function Score() {
  const { score } = useContext(ScoreContext);

  return (
    <div className={style["root"]}>
      <span className={style["note"]}>score</span>
      <span className={style["value"]}>{score}</span>
    </div>
  );
}

export { Score };
