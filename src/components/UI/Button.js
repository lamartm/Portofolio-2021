import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.button}>
      <img src={props.image} alt={props.name}></img>
      {props.name}
    </button>
  );
};

export default Button;
