"use client";

import styles from "./Nav.module.css";
import Link from "next/link";
import FolderIcon from "../public/folder.svg";
import TestTubeIcon from "../public/test-tube.svg";
import BookmarkIcon from "../public/bookmark.svg";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        href="/"
        className={`${styles.menuLink} ${
          pathname === "/" ? styles.selected : ""
        }`}
      >
        <FolderIcon />
        <p>Projects</p>
      </Link>
      <Link
        href="/experiments"
        className={`${styles.menuLink} ${
          pathname === "/experiments" ? styles.selected : ""
        }`}
      >
        <TestTubeIcon />
        <p>Experiments</p>
      </Link>
      <Link
        href="/media"
        className={`${styles.menuLink} ${
          pathname === "/media" ? styles.selected : ""
        }`}
      >
        <BookmarkIcon />
        <p>Bookmarks</p>
      </Link>
    </nav>
  );
};
export default Nav;
