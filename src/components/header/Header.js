import style from "./Header.module.css";
import { Score, Logo } from "../";

function Header({ score }) {
  return (
    <div className={style["root"]}>
      <Logo />
      <Score score={score} />
    </div>
  );
}

export { Header };
