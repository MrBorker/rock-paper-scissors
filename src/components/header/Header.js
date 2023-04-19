import style from "./Header.module.css";
import { Score, Logo } from "../";

function Header() {
  return (
    <div className={style["root"]}>
      <Logo />
      <Score />
    </div>
  );
}

export { Header };
