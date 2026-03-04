import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CinematicTransition from "@/components/CinematicTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <CinematicTransition realm="nebula">
        <About />
      </CinematicTransition>
      <CinematicTransition realm="matrix">
        <Skills />
      </CinematicTransition>
      <CinematicTransition realm="aurora">
        <Education />
      </CinematicTransition>
      <CinematicTransition realm="cosmos">
        <Experience />
      </CinematicTransition>
      <CinematicTransition realm="forge">
        <Projects />
      </CinematicTransition>
      <CinematicTransition realm="void">
        <Research />
      </CinematicTransition>
      <CinematicTransition realm="portal">
        <Contact />
      </CinematicTransition>
      <Footer />
    </div>
  );
};

export default Index;
