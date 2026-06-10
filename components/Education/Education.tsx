import styles from "./Education.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { portfolioData } from "@/data/portfolioData";

export default function Education() {
  return (
    <section
      id="education"
      className={styles.educationSection}
    >
      <div className="container">
        <SectionTitle
          title="Education"
          subtitle="Academic background"
        />

        <div className={styles.educationGrid}>
          {portfolioData.education.map((item) => (
            <div
              key={item.degree}
              className={styles.educationCard}
            >
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