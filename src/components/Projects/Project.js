import React from "react";
import Button from "../UI/Button";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Project.module.css";

AOS.init();

const Project = (props) => {
  return (
    <article className={props.direction}>
      <img
        src={props.image}
        alt=""
        data-aos="fade"
        data-aos-duration="1000"
      ></img>
      <div data-aos="fade">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href={props.link}>
          <Button>Link</Button>
        </a>
      </div>
    </article>
  );
};

export default Project;
