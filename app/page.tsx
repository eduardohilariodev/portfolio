import About from "./components/About";
import Contact, { ContactLink } from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Skills from "./components/Skills";

const allTechs = [
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "vue",
  "python",
  "laravel",
  "docker",
  "aws",
  "flutter",
  "figma",
  "adobe",
] as const;

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
