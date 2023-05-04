import styles from "./Option.module.css";

function Option({ theme, size, state, onClick }) {
  const handleClick = () => {
    onClick && onClick(theme);
  };

  return (
    <button
      className={`${styles["btn"]} ${styles[theme]} ${styles[size]} ${
        styles[state] || ""
      }`}
      onClick={handleClick}
    ></button>
  );
}

export { Option };
