import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import styles from "./WaveAnimation.module.css";

AOS.init();

const WaveAnimation = (props) => {
  const wavePathRef = useRef(null);

  useEffect(() => {
    let paths = [];
    if (props.position === "down") {
      paths = [
        "M0 160V26.8433C219 -42.2239 223 56.088 369 70.3992C530.5 86.2298 522.681 36.3505 672 6.93202C921.5 -42.224 938.66 190.041 1179.5 78.4882C1291 26.8432 1407.85 74.395 1440 84.7105V160H0Z", // Morph variation 1
        "M0 160V0C225.5 110.5 233.89 8.47411 371.5 16.5C542 26.4442 584.865 75.3052 735.5 62.5C1059 35 922.631 102.072 1179.5 94.5C1286.78 91.3377 1407.85 91.2108 1440 99.5V160H0Z",
        "M0 160V26.8433C219 -42.2239 223 56.088 369 70.3992C530.5 86.2298 522.681 36.3505 672 6.93202C921.5 -42.224 938.66 190.041 1179.5 78.4882C1291 26.8432 1407.85 74.395 1440 84.7105V160H0Z",
      ];
    } else if (props.position === "up") {
      paths = [
        "M1440 0.000106812L1440 133.157C1221 202.224 1217 103.912 1071 89.6009C909.5 73.7703 917.319 123.65 768 153.068C518.5 202.224 501.34 -30.041 260.5 81.5118C149 133.157 32.15 85.605 7.40563e-06 75.2895L1.39876e-05 -1.90773e-05L1440 0.000106812Z", // Morph variation 1
        "M1440 -0.00012207L1440 160C1214.5 49.4999 1206.11 151.526 1068.5 143.5C898 133.556 855.135 84.6947 704.5 97.4999C381 125 517.369 57.928 260.5 65.5C153.22 68.6623 32.15 68.7892 -8.69857e-06 60.5L-1.39876e-05 3.81849e-06L1440 -0.00012207Z",
        "M1440 0.000106812L1440 133.157C1221 202.224 1217 103.912 1071 89.6009C909.5 73.7703 917.319 123.65 768 153.068C518.5 202.224 501.34 -30.041 260.5 81.5118C149 133.157 32.15 85.605 7.40563e-06 75.2895L1.39876e-05 -1.90773e-05L1440 0.000106812Z",
      ];
    }

    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      ease: "none",
      yoyo: true,
    });

    paths.forEach((path) => {
      timeline.to(wavePathRef.current, {
        duration: 8,
        attr: { d: path },
        ease: "power1.inOut",
      });
    });

    timeline.play();
  }, [props.position]);

  return (
    <svg
      className={
        props.position === "down" ? styles["waves--down"] : styles["waves--top"]
      }
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 159"
    >
      <path
        ref={wavePathRef}
        d={
          props.position === "down"
            ? "M0 160V0C225.5 110.5 233.89 8.47411 371.5 16.5C542 26.4442 584.865 75.3052 735.5 62.5C1059 35 922.631 102.072 1179.5 94.5C1286.78 91.3377 1407.85 91.2108 1440 99.5V160H0Z"
            : "M1440 -0.00012207L1440 160C1214.5 49.4999 1206.11 151.526 1068.5 143.5C898 133.556 855.135 84.6947 704.5 97.4999C381 125 517.369 57.928 260.5 65.5C153.22 68.6623 32.15 68.7892 -8.69857e-06 60.5L-1.39876e-05 3.81849e-06L1440 -0.00012207Z"
        }
        fill="#7B80FC"
      />
    </svg>
  );
};

export default WaveAnimation;
