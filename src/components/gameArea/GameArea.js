import style from "./GameArea.module.css";
import { Option } from "../";

function GameArea() {
  return (
    <div className={style["root"]}>
      <div className={style["options-container"]}>
        <Option />
        <Option />
        <Option />
      </div>
    </div>
  );
}

export { GameArea };
