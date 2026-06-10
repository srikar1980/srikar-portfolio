"use client";

import styles from "./StickySocialBar.module.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function StickySocialBar() {
  return (
    <div className={styles.socialBar}>
      <a
        href="https://github.com/srikar1980"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.github}`}
      >
        <FaGithub />

        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/srikar-ravoori/"
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.linkedin}`}
      >
        <FaLinkedinIn />

        <span>LinkedIn</span>
      </a>

      <a
        href="mailto:srikar.ravoori@gmail.com"
        className={`${styles.socialLink} ${styles.email}`}
      >
        <FaEnvelope />

        <span>Email Me</span>
      </a>
    </div>
  );
}