import style from "./GameArea.module.css";
import { Option, Card, Result } from "components";
import { themes, rules } from "constants/gameParams";
import { useState, useContext } from "react";
import { ScoreContext } from "context";

const { actionType, size, state } = themes;

function GameArea() {
  const { score, setScore } = useContext(ScoreContext);

  const [picked, setPicked] = useState(0);
  const [pickedByHouse, setPickedByHouse] = useState(0);
  const [winner, setWinner] = useState(0);

  const generateRandomActionType = (actionTypes) => {
    const allActionTypes = Object.values(actionTypes);
    const randomItemNumber = Math.floor(Math.random() * allActionTypes.length);
    return allActionTypes[randomItemNumber];
  };

  const generateWinner = (theme) => {
    const randomTheme = generateRandomActionType(actionType);
    setPickedByHouse(randomTheme);
    const winner = rules[theme].indexOf(randomTheme); // -1 draw, 1 win, 0 lose
    winner === 1 && setScore(score + 1);
    winner === 0 && setScore(score - 1);
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
        state={winner === 1 && state.winner}
      />
      <Result setPicked={setPicked} winner={winner} />
      <Card
        picked={pickedByHouse}
        text="house picked"
        state={winner === 0 && state.winner}
      />
    </div>
  ) : (
    <div className={style["start-container"]}>
      <Option
        theme={actionType.paper}
        size={size.normal}
        onClick={handleClick}
      />
      <Option
        theme={actionType.scissors}
        size={size.normal}
        onClick={handleClick}
      />
      <Option
        theme={actionType.rock}
        size={size.normal}
        onClick={handleClick}
      />
    </div>
  );

  return <div className={style["root"]}>{content}</div>;
}

export { GameArea };
