import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Section from "@/components/layouts/Section";
import { getSectionsArray, SECTION } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

import About from "./_about/page";
import Education from "./_education/page";
import Experience from "./_experience/page";
import Skills from "./_skills/page";

export default async function Page() {
  const sections = getSectionsArray();

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-6 md:mt-16 md:max-w-3xl md:px-8 md:pt-8">
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

        <div
          className={cn(
            "pointer-events-none fixed inset-0 z-5 bg-neutral-200/95 backdrop-blur-xs dark:bg-neutral-900/95",
          )}
          style={{
            transform: "scale(200%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 30%, black 50%)",
          }}
        />
      </main>
      <Footer />
    </>
  );
}
