import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import Section from "@/components/layouts/Section";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import { getSectionsArray, SECTION } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";

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
