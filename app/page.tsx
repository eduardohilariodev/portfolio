import Contact from "@/app/_contact/page";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { getSectionsArray } from "@/lib/constants";
import About from "./_about/page";
import Education from "./_education/page";
import Experience from "./_experience/page";
import Skills from "./_skills/page";

export default function Home() {
  const sections = getSectionsArray();
  return (
    <div className="space-y-32">
      <Hero />

      {sections.map((section) => (
        <Section key={section.id} id={section.id} title={section.title}>
          {section.id === "contact" && <Contact />}
          {section.id === "about" && <About />}
          {section.id === "knowledge" && <Skills />}
          {section.id === "career" && <Experience />}
          {section.id === "education" && <Education />}
        </Section>
      ))}
    </div>
  );
}
