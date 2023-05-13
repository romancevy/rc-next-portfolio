"use client";
import styles from "./Nav.module.css";
import Link from "next/link";
import { useState } from "react";
import FolderIcon from "../public/folder.svg";
import TestTubeIcon from "../public/test-tube.svg";
import BookmarkIcon from "../public/bookmark.svg";

const Nav = () => {
  const [selectedLink, setSelectedLink] = useState("projects");

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.menuLink} ${
          selectedLink === "projects" ? styles.selected : ""
        }`}
        onClick={() => handleLinkClick("projects")}
      >
        <FolderIcon />
        <p>Projects</p>
      </Link>
      <Link
        href="/experiments"
        className={`${styles.menuLink} ${
          selectedLink === "experiments" ? styles.selected : ""
        }`}
        onClick={() => handleLinkClick("experiments")}
      >
        <TestTubeIcon />
        <p>Experiments</p>
      </Link>
      <Link
        href="/media"
        className={`${styles.menuLink} ${
          selectedLink === "bookmarks" ? styles.selected : ""
        }`}
        onClick={() => handleLinkClick("bookmarks")}
      >
        <BookmarkIcon />
        <p>Bookmarks</p>
      </Link>
    </nav>
  );
};
export default Nav;
