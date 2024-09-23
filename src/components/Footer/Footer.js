import styles from "./Footer.module.css";
import Button from "../UI/Button";
import React, { forwardRef } from "react";

const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref}>
      <h2>Contact</h2>
      <div className={styles.contact}>
        <a href="mailto:mohamedlamarti2000@gmail.com">
          <Button image="/art/mail.svg" name="E-mail">
            Email
          </Button>
        </a>
        <a href="https://github.com/lamartm">
          <Button image="/art/github.svg" name="Github">
            Github
          </Button>
        </a>
        <a href="https://www.linkedin.com/in/mohamed-lamarti-a655a119a/">
          <Button image="/art/linkedin.svg" name="Linkedin">
            LinkedIn
          </Button>
        </a>
      </div>
    </footer>
  );
});
export default Footer;
