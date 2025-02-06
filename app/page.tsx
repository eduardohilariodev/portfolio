import Contact, { ContactLink } from "@/app/_contact/page";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import About from "./_about/page";
import Education from "./_education/page";
import Experience from "./_experience/page";
import Skills from "./_skills/page";

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

      <Section id="knowledge" title="Knowledge">
        <Skills />
      </Section>

      <Section id="carreer" title="Carreer">
        <Experience />
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>
    </div>
  );
}
