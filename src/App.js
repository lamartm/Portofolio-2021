import MainHeader from "./components/Header/MainHeader";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

MouseFollower.registerGSAP(gsap);

function App() {
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const cursor = new MouseFollower({
      speed: 0.2,
      skewing: 5,
    });
    const tooling = Array.from(document.querySelectorAll(".black-cursor"));

    const addListeners = (element, state) => {
      if (Array.isArray(element)) {
        element.forEach((tool) => {
          tool.addEventListener("mouseenter", () => {
            cursor.addState(state);
          });

          tool.addEventListener("mouseleave", () => {
            cursor.removeState(state);
          });
        });
      } else {
        element.addEventListener("mouseenter", () => {
          cursor.addState(state);
        });

        element.addEventListener("mouseleave", () => {
          cursor.removeState(state);
        });
      }
    };

    addListeners(projectsRef.current, "-inverse");
    addListeners(footerRef.current, "-inverse");
    addListeners(tooling, "-inverse");
  }, []);

  return (
    <React.Fragment>
      <div className="scroll-container">
        <MainHeader />
        <About />
        <Projects ref={projectsRef} />
        <Footer ref={footerRef} />
      </div>
    </React.Fragment>
  );
}
export default App;
