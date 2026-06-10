import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
<Education />
    </>
  );
}