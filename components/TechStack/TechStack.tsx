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
  FaDatabase
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiBitbucket,
  SiAntdesign,
  SiBootstrap,
} from "react-icons/si";


const technologies = [
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Redux Toolkit", icon: <SiRedux /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL Server", icon: <FaDatabase /> },
  { name: "Ant Design", icon: <SiAntdesign /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "AWS", icon: <FaAws /> },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className={styles.techStackSection}
    >
      <div className="container">
        <SectionTitle
          title="Tech Stack"
          subtitle="Technologies and tools I work with"
        />

        <div className={styles.techGrid}>
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className={styles.techCard}
            >
              <div className={styles.icon}>
                {tech.icon}
              </div>

              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}