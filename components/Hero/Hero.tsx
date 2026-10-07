import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import SectionLink from "@/components/SectionLink/SectionLink";
import { portfolioData } from "@/data/portfolioData";
import styles from "./Hero.module.css";

export default function Hero() {
  const { name, role, tagline, summary, socialLinks, cta } = portfolioData;

  return (
    <section
      id="home"
      className={styles.heroSection}
      aria-labelledby="home-heading"
      tabIndex={-1}
    >
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLeft}>
          <h1 id="home-heading">{name}</h1>

          <h2 className={styles.heroRole}>{role}</h2>

          <p className={styles.heroTagline}>{tagline}</p>

          <p>{summary}</p>

          <div className={styles.heroButtons}>
            <SectionLink
              href={cta.projects}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              View Projects
            </SectionLink>

            <a
              href="/SrikarRavoori_Resume_Latest.pdf"
              download
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              <FaDownload
                className={styles.downloadIcon}
                aria-hidden="true"
              />
              Resume
            </a>
          </div>

          <div className={styles.socialLinks}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </a>

            <a href={socialLinks.email}>
              <FaEnvelope aria-hidden="true" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
