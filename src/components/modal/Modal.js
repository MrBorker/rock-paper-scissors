import styles from "./Modal.module.css";
import { Option } from "components";
import { themes } from "constants/gameParams";

const { actionType, size, state } = themes;

function Modal({ setModal }) {
  const handleClick = () => {
    setModal(0);
  };

  return (
    <div className={styles["root"]}>
      <div className={styles["panel"]}>
        <h4 className={styles["panel-title"]}>rules</h4>
        <button className={styles["panel-btn"]} onClick={handleClick}></button>
      </div>
      <div className={styles["content"]}>
        <div className={`${styles["arrow"]} ${styles["top"]}`}></div>
        <div className={`${styles["arrow"]} ${styles["left"]}`}></div>
        <div className={`${styles["arrow"]} ${styles["right"]}`}></div>
        <Option
          theme={actionType.paper}
          size={size.normal}
          state={state.modal}
        />
        <Option
          theme={actionType.scissors}
          size={size.normal}
          state={state.modal}
        />
        <Option
          theme={actionType.rock}
          size={size.normal}
          state={state.modal}
        />
      </div>
    </div>
  );
}

export { Modal };
