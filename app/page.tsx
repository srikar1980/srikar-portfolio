import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import TechStack from "@/components/TechStack/TechStack";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Experience />
    </>
  );
}