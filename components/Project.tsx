"use client";
import Image from "next/image";
import GithubLogo from "../public/github.svg";
import GlobeLogo from "../public/globe.svg";
import styles from "./Project.module.css";
import Badge from "./Badge";

// import Badge from "./Badge";

const Project = ({ title, imgPath, tech }) => {
  // console.log(tech);
  return (
    <div className={`${styles.projectContainer}`}>
      {/* <h3>{title}</h3> */}
      <div className={styles.projectCard}>
        <Image
          src={imgPath}
          alt={title}
          // 2389 × 1621
          width={1200}
          height={1200}
          className={styles.image}
        />
        {/* </div> */}
        {/* <Badge /> */}
        <p className={styles.description}>Beschreibungstext</p>
      </div>
      {/* <div> */}
      <p className={styles.description2}>Beschreibungstext2</p>
      {/* </div> */}
    </div>
  );
};
export default Project;
