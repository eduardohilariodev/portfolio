import Image from "next/image";
import Link from "next/link";
import StackPill, { getTechsByCategory } from "./components/StackPill";
import { getTimePeriod } from "./utils/date";

interface CompanyInfo {
  name: string;
  logo: string;
  linkedIn: string;
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

const experiences = [
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
        stack: ["vue", "laravel", "docker"] as const,
      },
      {
        name: "AI Chatbot Development",
        description:
          "Designed and implemented an AI-powered chatbot capable of querying a 7+ year database to provide domain-specific answers in natural language.",
        stack: ["python", "vue", "docker", "aws"] as const,
      },
      {
        name: "Ckreativ B2B Sales App",
        description:
          "Developed a design system and improved the UX for a hybrid B2B sales app used by over 500 sales professionals across 4+ states during a legacy app transition.",
        stack: ["flutter", "figma"] as const,
      },
      {
        name: "SaaS Billing Platform Integration",
        description:
          "Simplified billing processes by integrating Stripe's subscription system, enhancing customer acquisition.",
        stack: ["vue", "laravel"] as const,
      },
    ],
  },
  {
    title: "Content Producer",
    company: companies["Brick Abode"],
    startDate: new Date("2019-11"),
    endDate: new Date("2021-03"),
    projects: [
      {
        name: "Audiovisual Materials Production",
        description:
          "Produced and edited videos, managed recording hardware, and optimized workflows using NLE software.",
        stack: [] as const,
      },
      {
        name: "Automated Video Production Pipeline",
        description:
          "Created a production line for short job proposal videos, automating camera setups, voice capture, and YouTube API integration.",
        stack: [] as const,
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
        stack: ["figma"] as const,
      },
      {
        name: "UI Prototyping for YALO",
        description:
          "Developed wireframes and prototypes of varying complexity for a key client.",
        stack: ["figma"] as const,
      },
      {
        name: "Email Marketing Campaigns",
        description:
          "Created email marketing layouts for clients, including Unilever and Banco next.",
        stack: ["figma"] as const,
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
] as const;

export default function Home() {
  const techsByCategory = getTechsByCategory([...allTechs]);
  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    devops: "DevOps",
    tooling: "Tools",
    mobile: "Mobile",
  };

  return (
    <div className="space-y-32">
      {/* About Section */}
      <section
        id="about"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-20"
      >
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
            About
          </h1>

          <div className="space-y-4 text-lg">
            <p className="text-gray-600 dark:text-gray-400 italic">
              Proactive Software Engineer with 5 years of experience
            </p>

            <p>
              I'm Eduardo, a software engineer specializing in TypeScript,
              React, and UX/UI Design. I focus on delivering user-focused
              digital experiences, optimizing software performance, and building
              scalable solutions for web and mobile platforms.
            </p>

            <div className="space-y-4">
              {Array.from(techsByCategory.entries()).map(
                ([category, techs]) => (
                  <div
                    key={category}
                    className="space-y-2"
                  >
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {categoryLabels[category]}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <StackPill
                          key={tech}
                          tech={tech}
                        />
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <Link
              href="/blog"
              className="inline-block px-6 py-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md hover:bg-orange-500/20 transition"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="inline-block px-6 py-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md hover:bg-orange-500/20 transition"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block px-6 py-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-md hover:bg-orange-500/20 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-[300px] mx-auto">
          <Image
            src="/pro_v2_sq.png"
            alt="Eduardo's profile picture"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="space-y-8 pt-20"
      >
        <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
          Experience
        </h2>

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-orange-600/20 dark:border-orange-400/20"
            >
              <div className="absolute w-4 h-4 bg-orange-600 dark:bg-orange-400 rounded-full -left-[9px] top-0" />
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={exp.company.logo}
                        alt={`${exp.company.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        {exp.title} @{" "}
                        <a
                          href={exp.company.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 dark:text-orange-400 hover:underline"
                        >
                          {exp.company.name}
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {exp.startDate.toLocaleDateString("en-US", {
                          month: "long",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {exp.endDate
                          ? exp.endDate.toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })
                          : "Present"}{" "}
                        (
                        {getTimePeriod(exp.startDate, exp.endDate || undefined)}
                        )
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-12">
                  {exp.projects.map((project, pIndex) => (
                    <div
                      key={pIndex}
                      className="relative pl-6 border-l border-orange-600/20 dark:border-orange-400/20"
                    >
                      <div className="absolute w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full -left-1 top-2" />
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400">
                          {project.name}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                        {project.stack.length > 0 && (
                          <div className="flex gap-2 flex-wrap mt-4">
                            {project.stack.map((tech) => (
                              <StackPill
                                key={tech}
                                tech={tech}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="space-y-8 pt-20"
      >
        <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
          Education
        </h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-orange-600/20 dark:border-orange-400/20"
            >
              <div className="absolute w-4 h-4 bg-orange-600 dark:bg-orange-400 rounded-full -left-[9px] top-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{edu.school}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {edu.degree} · (
                  {edu.startDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  -{" "}
                  {edu.endDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                  )
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="space-y-8 pt-20"
      >
        <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
          Contact
        </h2>
        <div className="space-y-4">
          <p className="text-lg">
            Feel free to reach out to me through any of these channels:
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:eduardohilariodev@pm.me"
              className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
            >
              <span className="font-medium">eduardohilariodev@pm.me</span>
            </a>
            <a
              href="https://www.linkedin.com/in/eduardohilariodev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:underline"
            >
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
