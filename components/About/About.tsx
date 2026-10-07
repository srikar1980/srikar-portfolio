import SectionTitle from "@/components/SectionTitle/SectionTitle";
import styles from "./About.module.css";

export default function About() {
  return (
    <section
      id="about"
      className={styles.aboutSection}
      aria-labelledby="about-heading"
      tabIndex={-1}
    >
      <div className="container">
        <SectionTitle
          title="About Me"
          headingId="about-heading"
          subtitle="A quick overview of my professional journey"
        />

        <div className={styles.aboutContent}>
          <p>
            Frontend Developer with 4.5+ years of experience building
            scalable fintech and SaaS applications using React.js, Next.js,
            Node.js, Express.js, and MongoDB.
          </p>

          <p>
            Experienced in developing transaction-heavy financial platforms,
            internal enterprise applications, and customer-facing products with
            a strong focus on reusable architecture, performance optimization,
            and maintainable code.
          </p>

          <p>
            Currently working in the fintech domain, contributing to SIP, STP,
            SWP, portfolio management, transaction workflows, and secure
            business-critical systems.
          </p>
        </div>
      </div>
    </section>
  );
}