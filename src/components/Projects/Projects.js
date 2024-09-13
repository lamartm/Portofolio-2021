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
        image=".\projects\gamerater.png"
        title="Game Rater"
        description="Application I made in which users can play against each other to see who knows their game ratings better. Made using the RAWG API for game information, WebSockets to retrieve user input and send it to an Express server, storing user data in MongoDB."
        link="https://rtw-ml.herokuapp.com/"
      />
      <Project
        direction={container.right}
        image=".\projects\buurtont.png"
        title="Buurtontdekkers"
        description="Site I made for a local neighbourhood association while I was on an internship"
        link="https://debuurtontdekkers.nl/"
      />
      <Project
        direction={container.left}
        image=".\projects\nasa.png"
        title="NASA Webapp"
        description="Progressive web application I made showcasing the latest photo's from active Mars rovers, using the NASA API. I made use of a service worker in this project to add caching capabilities."
        link="https://lit-coast-91448.herokuapp.com/"
      />
      <Project
        direction={container.right}
        image=".\projects\cmdaSmoelenboek.png"
        title="CMDA Smoelenboek"
        description="A face book I made for my university, showcasing teachers and their relevant information. Teacher information is stored in Prismic CMS and retrieved from there. Site was made to primarily be used on a big screen and it was designed with that in mind."
        link="https://smoelenboek-cmd.herokuapp.com/"
      />
      <Project
        direction={container.left}
        image=".\projects\carpool.png"
        title="RDW Datavisualisation"
        description="An datavisualisation made for the RDW about various carpool locations in the Netherlands. Made using the RDW API and the D3 library for the datavisualisation."
        link="https://lamartm.github.io/frontend-data/"
      />
      <Project
        direction={container.right}
        image=".\projects\ray.png"
        title="Ray"
        description="A simple site I made fully with React, showcasing some filtering logic."
        link="https://ray-mockup.herokuapp.com/"
      />
    </section>
  );
};

export default Projects;
