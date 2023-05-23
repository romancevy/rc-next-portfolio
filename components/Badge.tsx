import styles from "./Badge.module.css";

interface BadgeProps {
  tech: string;
}

const Badge = ({ tech }: BadgeProps) => {
  return (
    <div>
      <span className={styles.badge}>{tech}</span>
    </div>
  );
};
export default Badge;
