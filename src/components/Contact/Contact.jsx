import React from "react";

import styles from "./Contact.module.css";
import { INFO } from "../../constants/info";

export const Contact = () => {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <section id="contact">
        <div className={styles.contactContainer}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          {
            INFO.map((item, idx) => (
              <li key={idx} className={styles.link}>
                <img src={item.imgSrc} alt={item.id} />
                <a target="_blank" href={item.link}>{item.display}</a>
              </li>
            ))
          }
        </ul>
        </div>
        <div className={styles.signature}>
          <div>&copy; Copyright 2024 Portfolio | All Rights Reserved</div>
          <div>Designed and developed by Sahil Debnath with ❤️</div>
        </div>
      </section>
    </footer>
  );
};
