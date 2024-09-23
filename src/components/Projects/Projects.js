import React, { forwardRef } from "react";
import Project from "./Project";
import styles from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import container from "./Project.module.css";
import LineAnimation from "../LineAnimation/LineAnimation";

AOS.init();

const Projects = forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.projects}>
      <div className={styles["animation--wrapper"]}>
        <LineAnimation
          form="normal"
          color="rgba(123, 128, 252, 0.5)"
          direction="right"
        />
        <h1 className={styles["projects--title"]}>Some of my work</h1>
        <Project
          direction={container.right}
          image=".\projects\gameraters.png"
          title="Game Rater"
          description="Application I made in which users can play against each other to see who knows their game ratings better. Made using the RAWG API for game information, WebSockets to retrieve user input and send it to an Express server, storing user data in MongoDB."
          link="https://rtw-ml.herokuapp.com/"
          github="https://github.com/lamartm/real-time-web-2122"
        />
        <Project
          direction={container.left}
          image=".\projects\nasaApp.png"
          title="NASA Webapp"
          description="Progressive web application I made showcasing the latest photo's from active Mars rovers, using the NASA API. I made use of a service worker in this project to add caching capabilities."
          link="https://lit-coast-91448.herokuapp.com/"
          github="https://github.com/lamartm/progressive-web-apps-2021"
        />
        <LineAnimation
          form="reverse"
          color="rgba(123, 128, 252, 0.5)"
          direction="right"
        />
      </div>
      <div className={styles["animation--wrapper"]}>
        <LineAnimation
          form="normal"
          color="rgba(123, 128, 252, 0.5)"
          direction="left"
        />
        <Project
          direction={container.right}
          image=".\projects\buurtontdekkers.png"
          title="Buurtontdekkers"
          description="Site I made for a local neighbourhood association while I was on an internship, in which I used Vue.js and Bulma CSS on the front-end side. "
          link="https://debuurtontdekkers.nl/"
        />
        <Project
          direction={container.left}
          image=".\projects\cmdaSmoelenboeken.png"
          title="CMDA Smoelenboek"
          description="A face book I made for my university, showcasing teachers and their relevant information. Teacher information is stored in Prismic CMS and retrieved from there. Site was made to primarily be used on a big screen and it was designed with that in mind."
          link="https://smoelenboek-cmd.herokuapp.com/"
          github="https://github.com/lamartm/cmda-smoelenboek"
        />
        <LineAnimation
          form="reverse"
          color="rgba(123, 128, 252, 0.5)"
          direction="left"
        />
      </div>
      <div className={styles["animation--wrapper"]}>
        <LineAnimation
          form="normal"
          color="rgba(123, 128, 252, 0.5)"
          direction="right"
        />
        <Project
          direction={container.right}
          image=".\projects\carpools.png"
          title="RDW Datavisualisation"
          description="A datavisualisation made for the RDW about various carpool locations in the Netherlands. Made using the RDW API and the D3 library for the datavisualisation."
          link="https://lamartm.github.io/frontend-data/"
          github="https://github.com/lamartm/frontend-data"
        />
        <Project
          direction={container.left}
          image=".\projects\rays.png"
          title="Ray"
          description="A site I made fully with React, showcasing some filtering logic."
          link="https://ray-mockup.herokuapp.com/"
          github="https://github.com/lamartm/Ray-mockup-site"
        />
        <LineAnimation
          form="reverse"
          color="rgba(123, 128, 252, 0.5)"
          direction="right"
        />
      </div>
    </section>
  );
});

export default Projects;
