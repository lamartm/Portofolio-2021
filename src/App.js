import MainHeader from "./components/Header/MainHeader";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <About />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}
export default App;
