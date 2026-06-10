import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import styles from "./Hero.module.css";
import { portfolioData } from "@/data/portfolioData";

export default function Hero() {
  const { name, role, tagline, summary, socialLinks, cta } = portfolioData;

  return (
    <section
      id="home"
      className={styles.heroSection}
    >
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLeft}>
          <h1>{name}</h1>

          <h2 className={styles.heroRole}>{role}</h2>

          <p className={styles.heroTagline}>{tagline}</p>

          <p>{summary}</p>

          <div className={styles.heroButtons}>
            <Link
              href={cta.projects}
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              View Projects
            </Link>

            <Link
              href={cta.contact}
              className={`${styles.btn} ${styles.btnSecondary}`}
            >
              Contact Me
            </Link>
          </div>

          <div className={styles.socialLinks}>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a href={socialLinks.email}>
              <FaEnvelope />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}