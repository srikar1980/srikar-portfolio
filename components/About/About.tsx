import styles from "./About.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function About() {
  return (
    <section
      id="about"
      className={styles.aboutSection}
    >
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="A quick overview of my professional journey"
        />

        <div className={styles.aboutContent}>
          <p>
            Full Stack Developer with 4.5+ years of experience building
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