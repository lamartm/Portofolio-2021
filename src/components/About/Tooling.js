import React from "react";
import styles from "./Tooling.module.css";

const Tooling = (props) => {
  return (
    <li className={`${styles.tooling} black-cursor`}>
      <img
        className={styles["tooling--image"]}
        src={props.src}
        alt={props.alt}
      ></img>
      <p>{props.name}</p>
    </li>
  );
};

export default Tooling;
