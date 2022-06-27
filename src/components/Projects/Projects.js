import React from "react";
import Project from "./Project";
import styles from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import container from "./Project.module.css";

AOS.init();

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h1 data-aos="fade">Some of my projects:</h1>
      <Project
        direction={container.left}
        image=".\projects\buurtont.png"
        title="Buurtontdekkers"
        description="Site made for a client while I was on an internship"
        link="https://debuurtontdekkers.nl/"
      />
      <Project
        direction={container.right}
        image=".\projects\ray.png"
        title="Ray"
        description="A mockup site I made with React"
        link="https://ray-mockup.herokuapp.com/"
      />
      <Project
        direction={container.left}
        image=".\projects\nasa.png"
        title="NASA Webapp"
        description="Application showing latest photo's from active mars rovers, using the NASA API"
        link="https://lit-coast-91448.herokuapp.com/"
      />
      <Project
        direction={container.right}
        image=".\projects\carpool.png"
        title="RDW Datavisualisation"
        description="An datavisualisation made for the RDW about various carpool locations in the Netherlands"
        link="https://lamartm.github.io/frontend-data/"
      />
      <Project
        direction={container.left}
        image=".\projects\russ.png"
        title="Russ & Daughters"
        description="A mockup site I made for school focusing mostly on design and animations"
        link="https://lamartm.github.io/css-to-the-rescue-2021/"
      />
    </section>
  );
};

export default Projects;
