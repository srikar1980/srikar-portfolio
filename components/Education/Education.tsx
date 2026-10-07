import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { portfolioData } from "@/data/portfolioData";
import styles from "./Education.module.css";

export default function Education() {
  return (
    <section
      id="education"
      className={styles.educationSection}
      aria-labelledby="education-heading"
      tabIndex={-1}
    >
      <div className="container">
        <SectionTitle
          title="Education"
          subtitle="Academic background"
          headingId="education-heading"
        />

        <div className={styles.educationGrid}>
          {portfolioData.education.map((item) => (
            <div key={item.degree} className={styles.educationCard}>
              <h3>{item.degree}</h3>

              <p>{item.institution}</p>

              <span>{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
