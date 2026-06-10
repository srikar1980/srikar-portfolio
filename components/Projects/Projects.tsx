import styles from "./Projects.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.projectsSection}
    >
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="Products and platforms I have contributed to"
        />

        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project) => (
            <div
              key={project.title}
              className={styles.projectCard}
            >
              <span className={styles.category}>
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className={styles.techList}>
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={styles.techTag}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}