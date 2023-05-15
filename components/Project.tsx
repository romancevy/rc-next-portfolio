import Image from "next/image";
import styles from "./Project.module.css";
// import Badge from "./Badge";

const Project = ({ title, imgPath, tech }) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectCard}>
        {/* <h3>{title}</h3> */}
        <div className={styles.imgContainer}>
          <div className={styles.bar}>
            <div className={styles.actionButtons}>
              <div className={styles.dots}></div>
              <div className={styles.dots}></div>
              <div className={styles.dots}></div>
            </div>
            <div className={styles.searchBar}>{title}</div>
            <div className={styles.linkIcons}>
              <a href="">🌐</a>
              <a href="">😺</a>
            </div>
          </div>
          <Image
            src={imgPath}
            alt={title}
            width={1300}
            height={1000}
            className={styles.image}
          />
        </div>
        {/* <Badge /> */}
        <p>{tech}</p>
      </div>
    </div>
  );
};
export default Project;
