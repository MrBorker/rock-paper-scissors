import style from "./GameArea.module.css";
import { useState } from "react";
import { Option, Card, Result } from "../";
import { themes, rules } from "../../constants/rootConstants";

const { type, size, state } = themes;

function GameArea({ setScore, score }) {
  const [picked, setPicked] = useState(0);
  const [pickedByHouse, setPickedByHouse] = useState(0);
  const [winner, setWinner] = useState(0);

  const generateTheme = (object) => {
    const array = Object.values(object);
    const random = Math.floor(Math.random() * array.length);
    return array[random];
  };

  const generateWinner = (theme) => {
    const randomTheme = generateTheme(type);
    setPickedByHouse(randomTheme);
    const winner = rules[theme].indexOf(randomTheme); // -1 draw, 1 win, 0 lose
    winner === 1 && setScore(score + 1);
    setWinner(winner);
  };

  const handleClick = (theme) => {
    generateWinner(theme);
    setPicked(theme);
  };

  const content = picked ? (
    <div className={style["picked-container"]}>
      <Card
        picked={picked}
        text="you picked"
        state={winner && winner !== -1 && state.winner}
      />
      <Result setPicked={setPicked} winner={winner} />
      <Card
        picked={pickedByHouse}
        text="house picked"
        state={winner || state.winner}
      />
    </div>
  ) : (
    <div className={style["start-container"]}>
      <Option theme={type.paper} size={size.normal} onClick={handleClick} />
      <Option theme={type.scissors} size={size.normal} onClick={handleClick} />
      <Option theme={type.rock} size={size.normal} onClick={handleClick} />
    </div>
  );

  return <div className={style["root"]}>{content}</div>;
}

export { GameArea };
