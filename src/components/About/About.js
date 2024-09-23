import React from "react";
import Experience from "./Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./About.module.css";
import LineAnimation from "../LineAnimation/LineAnimation";

AOS.init();

const About = (props) => {
  return (
    <React.Fragment>
      <section className={`${styles.container} section`}>
        <LineAnimation form="normal" color="white" />
        <article className={styles.aboutContainer}>
          <div>
            <h1>About Me</h1>
            <p>
              I'm a full-stack web developer situated in the Netherlands that's{" "}
              <span>passionate</span> about creating <span>complex</span>,{" "}
              <span>user-centric</span> and <span>engaging</span> web
              applications.
            </p>
          </div>
        </article>
        <LineAnimation form="reverse" color="white" />
        <Experience />
      </section>
    </React.Fragment>
  );
};

export default About;
