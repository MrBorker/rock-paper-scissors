import style from "./Logo.module.css";

function Logo() {
  return (
    <div className={style["root"]}>
      <button className={style["btn"]}>
        rock <br />
        paper <br />
        scissors
      </button>
    </div>
  );
}

export { Logo };
