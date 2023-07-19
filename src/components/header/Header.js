import style from "./Header.module.css";
import { Score, Logo } from "components";

function Header({ setModal }) {
  return (
    <div className={style["root"]}>
      <Logo setModal={setModal} />
      <Score />
    </div>
  );
}

export { Header };
