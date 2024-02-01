import React, { useEffect, useState } from "react";

import styles from "./TechStack.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const TechStack = () => {
  const [langaugesData, setLanguagesData] = useState([]);
  const [frameworkData, setFrameworkData] = useState([]);
  const [databaseData, setDatabaseData] = useState([]);
  const [toolsData, setToolsData] = useState([]);
  const [designData, setDesignData] = useState([]);

  useEffect(() => {
    if (skills) {
      setLanguagesData(skills.filter(data => data.type === "language"));
      setFrameworkData(skills.filter(data => data.type === "framework"));
      setDatabaseData(skills.filter(data => data.type === "database"));
      setToolsData(skills.filter(data => data.type === "tools"));
      setDesignData(skills.filter(data => data.type === "design"));
    }
  })

  return (
    <section className={styles.container} id="tech-stack">
      <h2 className={styles.title}>Tech Stack</h2>

      <div className={styles.sectionContainer}>
        <h2 className={styles.subTitle}>Languages:</h2>
        <div className={styles.skillsContainer}>
          {langaugesData.map((skill, id) => {
            return (
              <div key={id} className={styles.skills}>
                <div className={styles.skillsImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.subTitle}>Libraries/Frameworks:</h2>
        <div className={styles.skillsContainer}>
          {frameworkData.map((skill, id) => {
            return (
              <div key={id} className={styles.skills}>
                <div className={styles.skillsImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.subTitle}>Databases:</h2>
        <div className={styles.skillsContainer}>
          {databaseData.map((skill, id) => {
            return (
              <div key={id} className={styles.skills}>
                <div className={styles.skillsImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.subTitle}>Tools:</h2>
        <div className={styles.skillsContainer}>
          {toolsData.map((skill, id) => {
            return (
              <div key={id} className={styles.skills}>
                <div className={styles.skillsImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <h2 className={styles.subTitle}>Design:</h2>
        <div className={styles.skillsContainer}>
          {designData.map((skill, id) => {
            return (
              <div key={id} className={styles.skills}>
                <div className={styles.skillsImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
