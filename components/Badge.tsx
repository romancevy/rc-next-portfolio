import styles from "./Badge.module.css";

const Badge = ({ meta }) => {
  return (
    <div>
      <span className={styles.badge}>JavaScript</span>
    </div>
  );
};
export default Badge;
