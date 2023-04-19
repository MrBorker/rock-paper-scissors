import styles from "./Option.module.css";
import { themes } from "../../constants/rootConstants";

function Option({ theme }) {
  console.log(theme);

  return <button className={`${styles["btn"]} ${styles[theme]}`}></button>;
}

export { Option };
