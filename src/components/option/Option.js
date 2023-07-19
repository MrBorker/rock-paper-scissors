import styles from "./Option.module.css";

function Option({ theme, size, state, onClick }) {
  const handleClick = () => {
    onClick && onClick(theme); // Check onClick to be defined, because there are "no click" Option variations
  };

  return (
    <button
      className={`${styles["btn"]} ${styles[theme]} ${styles[size]} ${
        styles[state] || ""
      }`}
      onClick={handleClick} // Can't do the check here, because onClick should always be a function
    ></button>
  );
}

export { Option };
