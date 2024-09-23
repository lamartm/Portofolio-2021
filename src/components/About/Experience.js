import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Experience.module.css";
import Tooling from "./Tooling";

AOS.init();

const Experience = (props) => {
  return (
    <article className={styles.experienceContainer}>
      <div className={styles.experienceWrapper}>
        <h1>Some tooling I use</h1>
        <ul className={styles["tooling-list"]}>
          {[
            "React",
            "Vue",
            "Angular",
            "Typescript",
            "Express",
            "Node",
            "Nextjs",
            "Sass",
            "MongoDB",
            "Contentstack",
            "Git",
            "Figma",
          ].map((tool, index) => (
            <Tooling
              key={tool}
              src={`./experience-images/${
                tool === "Express" ? "Expres" : tool
              }.svg`}
              alt={tool}
              name={tool}
            />
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Experience;
