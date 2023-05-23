"use client";

import Image from "next/image";
// import GithubLogo from "../public/github.svg";
// import GlobeLogo from "../public/globe.svg";
import styles from "./Project.module.css";
import Badge from "./Badge";

interface ProjectProps {
  title: string;
  description: string;
  imgPath: string;
  meta: string[];
  site?: string;
  code?: string;
  wip?: boolean;
}

const Project = ({ title, description, imgPath, site, meta }: ProjectProps) => {
  return (
    <div className={`${styles["project-container"]}`}>
      {/* <a href={site} target="_blank"> */}
      <div className={styles["project-card"]}>
        <Image
          src={imgPath}
          alt={title}
          width={1280}
          height={720}
          className={styles.image}
        />
        <div className={styles.description}>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles["badge-container"]}>
            {meta.map((tech) => (
              <Badge key={Math.random()} tech={tech} />
            ))}
          </div>
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};
export default Project;
