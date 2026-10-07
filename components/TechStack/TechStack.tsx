import styles from "./TechStack.module.css";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

import {
  FaAws ,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaTable,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiBitbucket,
  SiAntdesign,
  SiReactbootstrap,
} from "react-icons/si";


const technologyGroups = [
  {
    name: "Frontend",
    technologies: [
      { name: "React.js", icon: <FaReact aria-hidden="true" /> },
      { name: "Next.js", icon: <SiNextdotjs aria-hidden="true" /> },
      { name: "JavaScript", icon: <SiJavascript aria-hidden="true" /> },
      { name: "Redux Toolkit", icon: <SiRedux aria-hidden="true" /> },
      { name: "HTML5", icon: <FaHtml5 aria-hidden="true" /> },
      { name: "CSS3", icon: <FaCss3Alt aria-hidden="true" /> },
    ],
  },
  {
    name: "Backend & Databases",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs aria-hidden="true" /> },
      { name: "Express.js", icon: <SiExpress aria-hidden="true" /> },
      { name: "MongoDB", icon: <SiMongodb aria-hidden="true" /> },
      { name: "SQL Server", icon: <FaDatabase aria-hidden="true" /> },
    ],
  },
  {
    name: "UI Libraries",
    technologies: [
      { name: "Ant Design", icon: <SiAntdesign aria-hidden="true" /> },
      { name: "React Bootstrap", icon: <SiReactbootstrap aria-hidden="true" /> },
      { name: "AG Grid", icon: <FaTable aria-hidden="true" /> },
    ],
  },
  {
    name: "Tools & Cloud",
    technologies: [
      { name: "Git", icon: <FaGitAlt aria-hidden="true" /> },
      { name: "GitHub", icon: <FaGithub aria-hidden="true" /> },
      { name: "Bitbucket", icon: <SiBitbucket aria-hidden="true" /> },
      { name: "AWS", icon: <FaAws aria-hidden="true" /> },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className={styles.techStackSection}
      aria-labelledby="tech-stack-heading"
      tabIndex={-1}
    >
      <div className="container">
        <SectionTitle
          title="Tech Stack"
          headingId="tech-stack-heading"
          subtitle="Technologies and tools I work with"
        />

        <div className={styles.techCategories}>
          {technologyGroups.map((group) => (
            <div key={group.name} className={styles.techCategory}>
              <h3 className={styles.categoryTitle}>{group.name}</h3>

              <div className={styles.techGrid}>
                {group.technologies.map((tech) => (
                  <div key={tech.name} className={styles.techCard}>
                    <div className={styles.icon}>{tech.icon}</div>

                    <h4>{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}