import React from "react";
import Button from "../UI/Button";
import styles from "./Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Project = (props) => {
  return (
    <article className={props.direction}>
      <img className={styles["work--image"]} src={props.image} alt=""></img>
      <div className={styles.information}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={styles.links}>
          {props.github ? (
            <a href={props.github}>
              <Button image="/art/github.svg" name="Github"></Button>
            </a>
          ) : (
            ""
          )}
          <a href={props.link}>
            <Button image="/art/web.svg" name="Site link"></Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Project;
