import styles from "./Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div>LOGO</div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/projects">🗂️ Projects</Link>
        <Link href="/experiments">🧪 Experiments</Link>
      </div>
    </nav>
  );
};
export default Nav;
