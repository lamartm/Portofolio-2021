import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Experience.module.css";

AOS.init();

const Experience = () => {
  return (
    <section className={styles.experienceContainer}>
      <article>
        <h1 data-aos="fade" data-aos-duration="700">
          I have experience in:
        </h1>
        <div data-aos="fade" data-aos-duration="700" data-aos-delay="700">
          <img src=".\experience-images\html.png" alt="html"></img>
          <img src=".\experience-images\css.png" alt="css"></img>
          <img src=".\experience-images\js.png" alt="js"></img>
          <img src=".\experience-images\react.png" alt="react"></img>
          <img src=".\experience-images\vue.png" alt="vue"></img>
          <img src=".\experience-images\sass.png" alt="sass"></img>
          <img src=".\experience-images\node.png" alt="node"></img>
        </div>
      </article>
    </section>
  );
};

export default Experience;
