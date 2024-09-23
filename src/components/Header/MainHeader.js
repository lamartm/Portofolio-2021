import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./MainHeader.module.css";
import WaveAnimation from "../WaveAnimation/WaveAnimation";

AOS.init();

const MainHeader = () => {
  const headerTextRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const rotateY = (mouseX / windowWidth) * 10 - 3;
      const rotateX = (mouseY / windowHeight) * 10 - 3;

      if (headerTextRef.current) {
        headerTextRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>
      <section className={`${styles.hContainer} section`}>
        <WaveAnimation position="up"></WaveAnimation>
        <article className={styles.hArticle} ref={headerTextRef}>
          <h1>
            <span>Hi, </span>
            <span>I'm Mohamed Lamarti</span>
          </h1>
          <h2>Full-stack Web Developer</h2>
        </article>
        <WaveAnimation position="down"></WaveAnimation>
      </section>
    </React.Fragment>
  );
};

export default MainHeader;
