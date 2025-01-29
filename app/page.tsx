import About from "./components/About";
import Contact, { ContactLink } from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Skills from "./components/Skills";
import type { Tech } from "./components/Stack";

interface CompanyInfo {
  name: string;
  logo: string;
  linkedIn: string;
}

interface Project {
  name: string;
  description: string;
  stack: Tech["tech"][];
}

interface ExperienceItem {
  title: string;
  company: CompanyInfo;
  startDate: Date;
  endDate: Date | null;
  projects: Project[];
}

const companies: Record<string, CompanyInfo> = {
  Ckreativ: {
    name: "Ckreativ",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGLeuwrogi8bw/company-logo_200_200/company-logo_200_200/0/1710548135771/ckreativ_logo?e=1744848000&v=beta&t=6YZovv4fOMknme-0bOuGi9F9gguN4BNDHob4TNLFZdI",
    linkedIn: "https://www.linkedin.com/company/ckreativ",
  },
  "Brick Abode": {
    name: "Brick Abode",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFhRHi0tefe1g/company-logo_200_200/company-logo_200_200/0/1630619625088/brickabode_logo?e=1744848000&v=beta&t=efaIABZOSpz4NqCnbjVAL5GhEbNvVVmW0NGnOVvgKFU",
    linkedIn: "https://www.linkedin.com/company/brickabode",
  },
  GETMORE: {
    name: "GETMORE",
    logo: "https://media.licdn.com/dms/image/v2/C4D0BAQF1TrPLIeswKA/company-logo_200_200/company-logo_200_200/0/1630471547758/getmore_logo?e=1744848000&v=beta&t=sVCwsojd23zNgakotC2LCBnArY70zoNhQLxulL_Nyis",
    linkedIn: "https://www.linkedin.com/company/getmore/",
  },
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: companies.Ckreativ,
    startDate: new Date("2022-03"),
    endDate: new Date("2024-09"),
    projects: [
      {
        name: "Ckreativ ERP Platform",
        description:
          "Maintained and improved UX for the platform, optimizing system reliability and usability for over 25 businesses of varying sizes.",
        stack: ["vue", "laravel", "docker"],
      },
      {
        name: "AI Chatbot Development",
        description:
          "Designed and implemented an AI-powered chatbot capable of querying a 7+ year database to provide domain-specific answers in natural language.",
        stack: ["python", "vue", "docker", "aws"],
      },
      {
        name: "Ckreativ B2B Sales App",
        description:
          "Developed a design system and improved the UX for a hybrid B2B sales app used by over 500 sales professionals across 4+ states during a legacy app transition.",
        stack: ["flutter", "figma"],
      },
      {
        name: "SaaS Billing Platform Integration",
        description:
          "Simplified billing processes by integrating Stripe's subscription system, enhancing customer acquisition.",
        stack: ["vue", "laravel"],
      },
    ],
  },
  {
    title: "Technical Content Producer",
    company: companies["Brick Abode"],
    startDate: new Date("2019-11"),
    endDate: new Date("2021-03"),
    projects: [
      {
        name: "Audiovisual Materials Production",
        description:
          "Produced and edited videos, managed recording hardware, and optimized workflows using NLE software.",
        stack: ["adobe"],
      },
      {
        name: "Automated Video Production Pipeline",
        description:
          "Created a production line for short job proposal videos, automating camera setups, voice capture, and YouTube API integration.",
        stack: ["adobe", "python"],
      },
    ],
  },
  {
    title: "UI Designer",
    company: companies.GETMORE,
    startDate: new Date("2019-03"),
    endDate: new Date("2019-09"),
    projects: [
      {
        name: "Internal and External Communication Materials",
        description:
          "Designed presentations, layouts, and various print materials for company-wide communication.",
        stack: ["figma"],
      },
      {
        name: "UI Prototyping for YALO",
        description:
          "Developed wireframes and prototypes of varying complexity for a key client.",
        stack: ["figma"],
      },
      {
        name: "Email Marketing Campaigns",
        description:
          "Created email marketing layouts for clients, including Unilever and Banco next.",
        stack: ["figma"],
      },
    ],
  },
];

const education = [
  {
    school: "Universidade Federal de Santa Catarina",
    degree: "Bachelor's degree, Design",
    startDate: new Date("2016-03"),
    endDate: new Date("2022-02"),
  },
];

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

      <Section id="skills" title="My skills">
        <Skills techs={[...allTechs]} />
      </Section>

      <Section id="experience" title="Experience">
        <Experience experiences={experiences} />
      </Section>

      <Section id="education" title="Education">
        <Education education={education} />
      </Section>
    </div>
  );
}
