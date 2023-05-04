import style from "./Card.module.css";
import { Option } from "../";
import { themes } from "../../constants/rootConstants";

const { type, size, state } = themes;

function Card({ picked, text, state }) {
  return (
    <div className={style["picked-card"]}>
      <h3 className={style["picked-title"]}>{text}</h3>
      <Option theme={type[picked]} size={size.huge} state={state} />
    </div>
  );
}

export { Card };
