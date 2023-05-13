import Image from "next/image";
import styles from "./Project.module.css";

const Project = ({ title, imgPath, tech }) => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectCard}>
        <h3>{title}</h3>
        <div className={styles.imgContainer}>
          <Image src={imgPath} alt={title} fill={true} />
        </div>
        <p>{tech}</p>
      </div>
    </div>
  );
};
export default Project;
