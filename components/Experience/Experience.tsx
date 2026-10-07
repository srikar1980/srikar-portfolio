import SectionTitle from "@/components/SectionTitle/SectionTitle";

import styles from "./Experience.module.css";

const experiences = [
  {
    company: "Webile Apps (India) Pvt Ltd",
    duration: "Aug 2024 - May 2026",
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
    company: "SchoolRefine",
    duration: "MERN Stack Project",
    project: "School Management ERP",
    points: [
      "Developed a full-stack school management ERP using MongoDB, Express.js, React and Node.js.",
      "Built modules for academics, student management, finance and administrative workflows.",
      "Implemented reusable React components with Redux Toolkit for state management.",
      "Developed REST APIs using Express.js with MongoDB for secure and structured data management.",
      "Designed the application with school-level data isolation and role-based access control.",
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
      aria-labelledby="experience-heading"
      tabIndex={-1}
    >
      <div className="container">
        <SectionTitle
          title="Experience"
          headingId="experience-heading"
          subtitle="Professional journey and key contributions"
        />

        <div className={styles.timeline}>
          {experiences.map((item) => (
            <div key={item.company} className={styles.card}>
              <h3>{item.company}</h3>

              <span className={styles.duration}>{item.duration}</span>

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
