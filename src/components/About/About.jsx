import React from "react";

import styles from "./About.module.css";
import about from "../../data/about.json";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {
            about.map((data, idx) => (
              <li key={idx} className={styles.aboutItem}>
                <img src={getImageUrl(data.imageSrc)} alt="Cursor icon" />
                <p>
                  {data.desc}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};
