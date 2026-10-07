import styles from "./Projects.module.css";

import SectionTitle from "@/components/SectionTitle/SectionTitle";

import { portfolioData } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className={styles.projectsSection}
      aria-labelledby="projects-heading"
      tabIndex={-1}
    >
      <div className="container">
        <SectionTitle
          title="Projects"
          headingId="projects-heading"
          subtitle="Products and platforms I have contributed to"
        />

        <div className={styles.projectsGrid}>
          {portfolioData.projects.map((project) => {
            const isFeatured = project.category === "Independent Project";
            const cardClassName = [
              styles.projectCard,
              isFeatured ? styles.featuredProjectCard : "",
            ]
              .filter(Boolean)
              .join(" ");

            const cardContent = (
              <>
                {isFeatured && (
                  <span className={styles.featuredLabel}>
                    Featured MERN project
                  </span>
                )}
                <span className={styles.category}>{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className={styles.techList}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {isFeatured && project.link && (
                  <span className={styles.projectLinkHint}>
                    Explore project <span aria-hidden="true">&rarr;</span>
                  </span>
                )}
              </>
            );

            return project.link ? (
              <a
                key={project.title}
                className={cardClassName}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            ) : (
              <div key={project.title} className={cardClassName}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}