import styles from "./Experience.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const experiences = [
  {
    company: "Webile Apps (India) Pvt Ltd",
    duration: "Aug 2024 - Present",
    project: "Mutual Fund Platform (Fintech)",
    points: [
      "Developed transaction-heavy modules including SIP, STP, SWP and purchase flows.",
      "Built reusable React components improving development speed and consistency.",
      "Implemented Redux Toolkit for efficient state management.",
      "Integrated REST APIs for portfolios, transactions and statements.",
      "Collaborated with backend and product teams to deliver scalable financial workflows.",
    ],
  },

  {
    company: "GAC Digital Pvt Ltd",
    duration: "Apr 2021 - Jan 2024",
    project: "GAC Portal & BYT SaaS Platform",
    points: [
      "Developed modules for timesheets, payslips and employee operations.",
      "Migrated legacy class components to React Hooks.",
      "Built onboarding, project tracking and billing automation features.",
      "Implemented invoice generation and time tracking workflows.",
    ],
  },

  {
    company: "Car & General (TVS Nigeria)",
    duration: "Dec 2022 - Mar 2023",
    project: "Dealer Management System",
    points: [
      "Built application using Next.js with SSR.",
      "Implemented multilingual support using i18n.",
      "Developed order tracking and invoice generation modules.",
      "Integrated backend APIs for seamless data flow.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className={styles.experienceSection}
    >
      <div className="container">
        <SectionTitle
          title="Experience"
          subtitle="Professional journey and key contributions"
        />

        <div className={styles.timeline}>
          {experiences.map((item) => (
            <div
              key={item.company}
              className={styles.card}
            >
              <h3>{item.company}</h3>

              <span className={styles.duration}>
                {item.duration}
              </span>

              <h4>{item.project}</h4>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}