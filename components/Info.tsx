"use client";
import Image from "next/image";
import avatar from "../public/avatar.png";
import styles from "./Info.module.css";
import GithubIcon from "../public/github.svg";
import LinkedInIcon from "../public/linkedin.svg";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatarContainer}>
        {/* avatar */}
        <Image
          src={avatar}
          alt="avatar"
          width={100}
          height={100}
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
      <div>
        <p>
          Hi, I&apos;m Roman, a front-end web developer. I design and develop
          user-friendly websites using HTML, CSS, and JavaScript. Let&apos;s
          create an amazing website together!
        </p>
      </div>
    </div>
  );
};
export default Info;
