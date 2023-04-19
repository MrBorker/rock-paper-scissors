import style from "./GameArea.module.css";
import { Option } from "../";
import { themes } from "../../constants/rootConstants";

function GameArea() {
  return (
    <div className={style["root"]}>
      <div className={style["options-container"]}>
        <Option theme={themes.paper} />
        <Option theme={themes.scissors} />
        <Option theme={themes.rock} />
      </div>
    </div>
  );
}

export { GameArea };
