"use client";

import Image from "next/image";
import avatar from "../public/avatar.png";
import styles from "./Info.module.css";
import GithubIcon from "../public/github.svg";
import LinkedInIcon from "../public/linkedin.svg";
import CodenPenIcon from "../public/codepen.svg";
import Greeting from "./Greeting";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles["avatar-container"]}>
        {/* avatar */}
        <Image
          src={avatar}
          alt="avatar"
          width={200}
          height={200}
          className={styles.avatar}
          // style={{ objectFit: "contain" }}
        />
        {/* social */}
        <div className={styles["icon-container"]}>
          <a
            href="https://codepen.io/roman-c"
            target="_blank"
            className={styles["external-link"]}
          >
            <CodenPenIcon />
          </a>
          <a
            href="https://github.com/romancevy"
            target="_blank"
            className={styles["external-link"]}
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/roman-cevelev"
            target="_blank"
            className={styles["external-link"]}
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <Greeting />
        <p>
          I&apos;m Roman, a front-end focused web developer, helping build
          clean, user-friendly and accessible applications on the web.
        </p>
        <p>
          Usually working with JavaScript/TypeScript, within the React
          ecosystem.
        </p>
        <p>Tinkering with NodeJS, Figma & CSS Animations.</p>
        <div className={styles.availableContainer}>
          <div className={styles.available}></div>
          <p>Available for new opportunities</p>
        </div>
      </div>
    </div>
  );
};
export default Info;
