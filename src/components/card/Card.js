import styles from "./Card.module.css";
import { Option } from "components";
import { themes } from "constants/gameParams";

const { actionType, size } = themes;

function Card({ picked, text, state }) {
  return (
    <div className={styles["picked-card"]}>
      <h3 className={styles["picked-title"]}>{text}</h3>
      <Option theme={actionType[picked]} size={size.huge} state={state} />
    </div>
  );
}

export { Card };
