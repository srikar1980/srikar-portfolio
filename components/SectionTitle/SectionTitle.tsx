import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  headingId?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  headingId,
}: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      <h2 id={headingId}>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}