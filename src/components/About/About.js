import React from "react";
import Experience from "./Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./About.module.css";

AOS.init();

const About = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <section
          data-aos="fade"
          data-aos-duration="700"
          className={styles.aboutContainer}
        >
          <article>
            <h1>About Me</h1>
            <p>
              My name is Mohamed Lamarti and I am a frontend developer with a
              bachelor in Communication and Multimedia Design from Amsterdam
              University of Applied Sciences
            </p>
            <p>
              I primarily build web pages/applications in
              HTML/CSS/Javascript(Typescript) and preferably use React as
              framework of choice within JS
            </p>
          </article>
        </section>
        <Experience />
      </div>
    </React.Fragment>
  );
};

export default About;
