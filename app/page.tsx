import Contact, { ContactLink } from "@/components/Contact";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "./about/page";
import Education from "./education/page";
import Experience from "./experience/page";
import Skills from "./skills/page";

const contactLinks: ContactLink[] = [
  {
    href: "mailto:eduardohilariodev@pm.me",
    label: "Email",
    icon: "hn hn-envelope",
  },
  {
    href: "https://www.linkedin.com/in/eduardohilariodev",
    label: "LinkedIn",
    icon: "hn hn-linkedin",
  },
  {
    href: "https://www.github.com/eduardohilariodev",
    label: "GitHub",
    icon: "hn hn-github",
  },
];

export default function Home() {
  return (
    <div className="space-y-32">
      <Hero />

      <Section id="contact" title="Let's talk">
        <Contact links={contactLinks} />
      </Section>

      <Section id="about" title="About me">
        <About />
      </Section>

      <Section id="skills" title="Knowledge">
        <Skills />
      </Section>

      <Section id="experience" title="Experience">
        <Experience />
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>
    </div>
  );
}
