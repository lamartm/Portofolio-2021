import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./LineAnimation.module.css";

const LineAnimation = (props) => {
  const linePathRef = useRef(null);
  let directionRef = useRef("scale(1, 1)");

  props.direction === "right"
    ? (directionRef.current = "scale(-1, 1) translate(-900, 0)")
    : (directionRef.current = "scale(1, 1)");

  useEffect(() => {
    let paths = [];

    if (props.form === "normal") {
      paths = [
        "M-33 20C230 -53 338.5 123 698.502 157.855C856.361 173.139 979.745 205.921 1042.19 315.286C1172.5 543.5 1340 381 1454 583",
        "M-33 1.99994C185 238 338.287 107.279 698.502 139.855C871.5 155.5 916.724 286.417 1042.19 297.285C1327.5 322 1253.5 474 1454 565",
        "M-35 1.9091C128.42 232.434 769.878 123.985 924.966 301.702C1001.73 389.668 1143.88 317.703 1211.94 429.092C1335.68 570.734 1405.56 547.656 1436 596.21",
      ];
    } else if (props.form === "reverse") {
      paths = [
        "M-35 1.9091C128.42 232.434 769.878 123.985 924.966 301.702C1001.73 389.668 1143.88 317.703 1211.94 429.092C1335.68 570.734 1405.56 547.656 1436 596.21",
        "M-34.9999 1.90904C229.5 142.5 199.534 -95.7021 537.5 150C631.933 218.653 959.937 95.6113 1028 207C1096 422 1379 356.5 1436 596.21",
        "M-33 20C230 -53 338.5 123 698.502 157.855C856.361 173.139 979.745 205.921 1042.19 315.286C1172.5 543.5 1340 381 1454 583",
      ];
    }

    const timeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      ease: "none",
      yoyo: true,
    });

    paths.forEach((path) => {
      timeline.to(linePathRef.current, {
        duration: 4,
        attr: { d: path },
        ease: "power1.inOut",
      });
    });

    timeline.play();
  }, [props.form, props.direction]);

  return (
    <svg
      className={
        props.form === "normal"
          ? styles["lines--normal"]
          : styles["lines--reverse"]
      }
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 180"
    >
      <g transform={directionRef.current}>
        <path
          ref={linePathRef}
          d={
            props.form === "normal"
              ? "M-35 1.9091C128.42 232.434 769.878 123.985 924.966 301.702C1001.73 389.668 1143.88 317.703 1211.94 429.092C1335.68 570.734 1405.56 547.656 1436 596.21"
              : "M-33 20C230 -53 338.5 123 698.502 157.855C856.361 173.139 979.745 205.921 1042.19 315.286C1172.5 543.5 1340 381 1454 583"
          }
          stroke={props.color}
          strokeOpacity="0.20"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

export default LineAnimation;
