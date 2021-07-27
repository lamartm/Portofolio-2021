import styles from "./Footer.module.css";
import Button from "../UI/Button";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className={styles.contact}>
        <a href="mailto:mohamedlamarti2000@gmail.com">
          <Button>Email</Button>
        </a>
        <a href="https://github.com/lamartm">
          <Button>Github</Button>
        </a>
        <a href="https://www.linkedin.com/in/mohamed-lamarti-a655a119a/">
          <Button>LinkedIn</Button>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
