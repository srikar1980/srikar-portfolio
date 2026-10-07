"use client";

import { portfolioData } from "@/data/portfolioData";
import styles from "./StickySocialBar.module.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

export default function StickySocialBar() {
  return (
    <nav className={styles.socialBar} aria-label="Social links">
      <a
        href={portfolioData.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.github}`}
        aria-label="GitHub profile (opens in a new tab)"
      >
        <FaGithub aria-hidden="true" />

        <span>GitHub</span>
      </a>

      <a
        href={portfolioData.socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.socialLink} ${styles.linkedin}`}
        aria-label="LinkedIn profile (opens in a new tab)"
      >
        <FaLinkedinIn aria-hidden="true" />

        <span>LinkedIn</span>
      </a>

      <a
        href={portfolioData.socialLinks.email}
        className={`${styles.socialLink} ${styles.email}`}
      >
        <FaEnvelope aria-hidden="true" />

        <span>Email Me</span>
      </a>
    </nav>
  );
}