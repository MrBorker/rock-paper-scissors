import styles from "./Shadow.module.css";

function Shadow({ setModal }) {
  const handleClick = () => {
    setModal(0);
  };

  return <div className={styles["root"]} onClick={handleClick}></div>;
}

export { Shadow };
