import style from "./Logo.module.css";

function Logo({ setModal }) {
  const handleClick = () => {
    setModal(1);
  };

  return (
    <div className={style["root"]}>
      <button className={style["btn"]} onClick={handleClick}>
        rock <br />
        paper <br />
        scissors
      </button>
    </div>
  );
}

export { Logo };
