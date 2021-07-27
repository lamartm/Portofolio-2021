import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./MainHeader.module.css";

AOS.init();

const MainHeader = () => {
  return (
    <React.Fragment>
      <section className={styles.hContainer}>
        <article>
          <h1 data-aos="zoom-in" data-aos-duration="2000">
            Mohamed Lamarti
          </h1>
          <h2 data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="2000">
            Front-end Developer
          </h2>
        </article>
      </section>
    </React.Fragment>
  );
};

export default MainHeader;
