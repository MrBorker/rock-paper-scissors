import style from "./Result.module.css";

function Result({ setPicked, winner }) {
  const handleClick = () => {
    setPicked(0);
  };

  return (
    <div className={style["result-container"]}>
      <h2 className={style["result-title"]}>
        {winner === -1 ? "draw" : winner ? "you win" : "you lost"}
      </h2>
      <button className={style["result-button"]} onClick={handleClick}>
        play again
      </button>
    </div>
  );
}

export { Result };
