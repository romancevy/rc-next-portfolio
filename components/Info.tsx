"use client";
import Image from "next/image";
import avatar from "../public/avatar.png";
import styles from "./Info.module.css";
import GithubIcon from "../public/github.svg";
import LinkedInIcon from "../public/linkedin.svg";
import Greeting from "./Greeting";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        {/* avatar */}
        <Image
          src={avatar}
          alt="avatar"
          width={200}
          height={200}
          className={styles.avatar}
          style={{ objectFit: "contain" }}
        />
        {/* social */}
        <div className={styles["icon-container"]}>
          <a href="#" className={styles["external-link"]}>
            <GithubIcon />
          </a>
          <a href="#" className={styles["external-link"]}>
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className={styles.infoContainer}>
        <Greeting />
        <p>
          I&apos;m Roman, a Frontend focused Web Developer, helping build clean,
          user-friendly and accessible applications on the web.
          {/* Hi, I&apos;m Roman, a front-end web developer. I design and develop user-friendly
          websites using HTML, CSS, and JavaScript. Let&apos;s create an amazing
          website together! */}
        </p>
        <p>
          Usually work with Javascript/Typescript, within the React Ecosystem.
        </p>
        <p>Tinkering with NodeJS, Figma & Animations.</p>
        <div className={styles.availableContainer}>
          <div className={styles.available}></div>
          <p>Available for new opportunities</p>
        </div>
      </div>
    </div>
  );
};
export default Info;
