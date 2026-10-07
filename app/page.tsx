import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";
import Footer from "@/components/Footer/Footer";
import BackToTop from "@/components/BackToTop/BackToTop";
import StickySocialBar from "@/components/StickySocialBar/StickySocialBar";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
      <BackToTop />
      <StickySocialBar />
    </>
  );
}