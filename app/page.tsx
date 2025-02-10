"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { getSectionsArray, SECTION } from "@/lib/constants";

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
          {section.id === SECTION.ABOUT.id && <About />}
          {section.id === SECTION.KNOWLEDGE.id && <Skills />}
          {section.id === SECTION.CAREER.id && <Experience />}
          {section.id === SECTION.EDUCATION.id && <Education />}
        </Section>
      ))}
    </div>
  );
}
