import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Certifications } from "@/components/sections/Certifications";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

/**
 * Home — single-page portfolio. Sections are composed here in one place;
 * each is a focused, separately-ownable component. The 3D lives entirely
 * inside <Hero> so the rest of the page stays dependency-free and fast.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Resume />
      <Contact />
    </>
  );
}